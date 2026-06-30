/**
 * Egg Geo Website Scraper
 * Crawls https://egggeo.com/ recursively and extracts structured content.
 * Run: node scripts/scrape-egggeo.js
 */

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT_DIR, 'src', 'data');
const ASSETS_DIR = path.join(ROOT_DIR, 'public', 'images');
const PAGES_DIR = path.join(DATA_DIR, 'pages');

const BASE_URL = 'https://egggeo.com';
const MAX_PAGES = 200;
const DELAY_MS = 500;

const visited = new Set();
const queue = [];
const allPages = [];
const downloadedImages = new Map();

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function normalizeUrl(url, base = BASE_URL) {
  try {
    const parsed = new URL(url, base);
    if (parsed.hostname !== 'egggeo.com' && parsed.hostname !== 'www.egggeo.com') return null;
    parsed.hash = '';
    let normalized = parsed.origin + parsed.pathname;
    normalized = normalized.replace(/\/+$/, '') || parsed.origin + '/';
    if (normalized === 'https://egggeo.com') normalized = 'https://egggeo.com/';
    return normalized;
  } catch {
    return null;
  }
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function downloadFile(url, destPath) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(destPath);
    protocol
      .get(url, { headers: { 'User-Agent': 'EggGeo-Scraper/1.0' } }, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          file.close();
          fs.unlinkSync(destPath);
          downloadFile(res.headers.location, destPath).then(resolve);
          return;
        }
        if (res.statusCode !== 200) {
          file.close();
          if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
          resolve(null);
          return;
        }
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(destPath);
        });
      })
      .on('error', () => {
        file.close();
        if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
        resolve(null);
      });
  });
}

async function downloadImage(url) {
  if (downloadedImages.has(url)) return downloadedImages.get(url);
  try {
    const parsed = new URL(url);
    const ext = path.extname(parsed.pathname).split('?')[0] || '.jpg';
    const safeName = parsed.pathname
      .replace(/[^a-zA-Z0-9._-]/g, '_')
      .replace(/^_+/, '')
      .slice(0, 120);
    const filename = safeName.includes('.') ? safeName : `${safeName}${ext}`;
    const destPath = path.join(ASSETS_DIR, filename);
    const result = await downloadFile(url, destPath);
    const localPath = result ? `/images/${filename}` : url;
    downloadedImages.set(url, localPath);
    return localPath;
  } catch {
    downloadedImages.set(url, url);
    return url;
  }
}

async function extractPageContent(page, url) {
  return page.evaluate((pageUrl) => {
    const getText = (el) => (el ? el.innerText.trim() : '');

    const title = document.title || '';
    const metaDescription =
      document.querySelector('meta[name="description"]')?.content || '';

    const headings = [];
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((h) => {
      const text = h.innerText.trim();
      if (text && !text.toLowerCase().includes('popup') && !text.includes('modal-check')) {
        headings.push({ level: parseInt(h.tagName[1]), text });
      }
    });

    const paragraphs = [];
    document.querySelectorAll('p, .entry-content p, article p, .content p, main p').forEach((p) => {
      const text = p.innerText.trim();
      if (text && text.length > 10) paragraphs.push(text);
    });

    const lists = [];
    document.querySelectorAll('ul, ol').forEach((list) => {
      const items = Array.from(list.querySelectorAll(':scope > li'))
        .map((li) => li.innerText.trim())
        .filter((t) => t.length > 0);
      if (items.length > 0) lists.push(items);
    });

    const images = [];
    document.querySelectorAll('img').forEach((img) => {
      const src = img.src || img.getAttribute('data-src') || img.getAttribute('data-lazy-src');
      if (src && !src.includes('data:image') && !src.includes('gravatar')) {
        images.push({
          src,
          alt: img.alt || '',
          title: img.title || '',
        });
      }
    });

    const links = [];
    document.querySelectorAll('a[href]').forEach((a) => {
      links.push({ href: a.href, text: a.innerText.trim() });
    });

    const pdfs = [];
    document.querySelectorAll('a[href]').forEach((a) => {
      const href = a.href;
      if (href && (href.endsWith('.pdf') || href.includes('.pdf'))) {
        pdfs.push({ url: href, title: a.innerText.trim() || href.split('/').pop() });
      }
    });

    const navItems = [];
    document.querySelectorAll('nav a, .menu a, .navigation a, header a, .main-navigation a').forEach((a) => {
      const text = a.innerText.trim();
      if (text) navItems.push({ text, href: a.href });
    });

    const footerLinks = [];
    document.querySelectorAll('footer a').forEach((a) => {
      const text = a.innerText.trim();
      if (text) footerLinks.push({ text, href: a.href });
    });

    const sections = [];
    document.querySelectorAll('section, .section, .elementor-section').forEach((sec) => {
      const heading = sec.querySelector('h1, h2, h3, h4, h5, h6');
      const text = sec.innerText.trim().slice(0, 2000);
      if (text.length > 20) {
        sections.push({
          heading: heading ? heading.innerText.trim() : '',
          content: text,
        });
      }
    });

    const teamMembers = [];
    document.querySelectorAll('.team-member, .team, [class*="team"]').forEach((el) => {
      const name = el.querySelector('h2, h3, h4, .name, .title')?.innerText.trim();
      const role = el.querySelector('.position, .role, .job-title, p')?.innerText.trim();
      const img = el.querySelector('img')?.src;
      const bio = el.innerText.trim();
      if (name) teamMembers.push({ name, role: role || '', image: img || '', bio });
    });

    const contactInfo = {
      address: '',
      phone: '',
      email: '',
    };
    const bodyText = document.body.innerText;
    const phoneMatch = bodyText.match(/\(\d{3}\)\s*\d{3}-\d{4}/);
    const emailMatch = bodyText.match(/[\w.-]+@[\w.-]+\.\w+/);
    if (phoneMatch) contactInfo.phone = phoneMatch[0];
    if (emailMatch) contactInfo.email = emailMatch[0];

    const addressEl = document.querySelector('address, .address, footer');
    if (addressEl) {
      const addrText = addressEl.innerText;
      const lines = addrText.split('\n').map((l) => l.trim()).filter(Boolean);
      contactInfo.address = lines.slice(0, 4).join(', ');
    }

    const heroSlides = [];
    document.querySelectorAll('.swiper-slide img, .slider img, .carousel img, .hero img, [class*="slide"] img').forEach((img) => {
      if (img.src) heroSlides.push({ src: img.src, alt: img.alt || '' });
    });

    const cards = [];
    document.querySelectorAll('.card, .project, .publication, .news-item, article').forEach((card) => {
      const title = card.querySelector('h2, h3, h4, .title')?.innerText.trim();
      const excerpt = card.querySelector('p, .excerpt')?.innerText.trim();
      const img = card.querySelector('img')?.src;
      const link = card.querySelector('a')?.href;
      if (title) cards.push({ title, excerpt: excerpt || '', image: img || '', link: link || '' });
    });

    return {
      url: pageUrl,
      title,
      metaDescription,
      headings,
      paragraphs,
      lists,
      images,
      links,
      pdfs,
      navItems,
      footerLinks,
      sections,
      teamMembers,
      contactInfo,
      heroSlides,
      cards,
    };
  }, url);
}

function slugFromUrl(url) {
  const parsed = new URL(url);
  let slug = parsed.pathname.replace(/^\/|\/$/g, '');
  if (!slug) return 'home';
  return slug.replace(/\//g, '-');
}

async function crawl() {
  ensureDir(DATA_DIR);
  ensureDir(ASSETS_DIR);
  ensureDir(PAGES_DIR);

  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  queue.push(BASE_URL + '/');

  while (queue.length > 0 && visited.size < MAX_PAGES) {
    const url = queue.shift();
    if (!url || visited.has(url)) continue;
    visited.add(url);

    console.log(`[${visited.size}/${MAX_PAGES}] Crawling: ${url}`);

    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
      await page.waitForTimeout(3000);
      await sleep(DELAY_MS);

      const content = await extractPageContent(page, url);

      for (const img of content.images) {
        img.localSrc = await downloadImage(img.src);
      }
      for (const slide of content.heroSlides) {
        slide.localSrc = await downloadImage(slide.src);
      }

      const slug = slugFromUrl(url);
      const pageData = { ...content, slug, crawledAt: new Date().toISOString() };
      allPages.push(pageData);

      fs.writeFileSync(
        path.join(PAGES_DIR, `${slug}.json`),
        JSON.stringify(pageData, null, 2)
      );

      for (const link of content.links) {
        const normalized = normalizeUrl(link.href);
        if (normalized && !visited.has(normalized) && !queue.includes(normalized)) {
          queue.push(normalized);
        }
      }
    } catch (err) {
      console.error(`  Error crawling ${url}:`, err.message);
    }
  }

  await browser.close();

  console.log(`\nCrawled ${allPages.length} pages. Building structured data...`);

  const navigation = buildNavigation(allPages);
  const services = buildServices(allPages);
  const projects = buildProjects(allPages);
  const team = buildTeam(allPages);
  const publications = buildPublications(allPages);
  const news = buildNews(allPages);
  const resources = buildResources(allPages);
  const contact = buildContact(allPages);
  const siteMeta = buildSiteMeta(allPages);

  fs.writeFileSync(path.join(DATA_DIR, 'navigation.json'), JSON.stringify(navigation, null, 2));
  fs.writeFileSync(path.join(DATA_DIR, 'services.json'), JSON.stringify(services, null, 2));
  fs.writeFileSync(path.join(DATA_DIR, 'projects.json'), JSON.stringify(projects, null, 2));
  fs.writeFileSync(path.join(DATA_DIR, 'team.json'), JSON.stringify(team, null, 2));
  fs.writeFileSync(path.join(DATA_DIR, 'publications.json'), JSON.stringify(publications, null, 2));
  fs.writeFileSync(path.join(DATA_DIR, 'news.json'), JSON.stringify(news, null, 2));
  fs.writeFileSync(path.join(DATA_DIR, 'resources.json'), JSON.stringify(resources, null, 2));
  fs.writeFileSync(path.join(DATA_DIR, 'contact.json'), JSON.stringify(contact, null, 2));
  fs.writeFileSync(path.join(DATA_DIR, 'site-meta.json'), JSON.stringify(siteMeta, null, 2));
  fs.writeFileSync(path.join(DATA_DIR, 'all-pages.json'), JSON.stringify(allPages.map((p) => ({ slug: p.slug, url: p.url, title: p.title })), null, 2));

  console.log('Scraping complete!');
  console.log(`  Pages: ${allPages.length}`);
  console.log(`  Services: ${services.length}`);
  console.log(`  Projects: ${projects.length}`);
  console.log(`  Team: ${team.length}`);
  console.log(`  Publications: ${publications.length}`);
  console.log(`  News: ${news.length}`);
  console.log(`  Resources: ${resources.length}`);
  console.log(`  Images downloaded: ${downloadedImages.size}`);
}

function findPageBySlug(pages, ...slugs) {
  for (const s of slugs) {
    const found = pages.find((p) => p.slug === s || p.url.includes(s));
    if (found) return found;
  }
  return null;
}

function buildNavigation(pages) {
  const homePage = findPageBySlug(pages, 'home') || pages[0];
  const navMap = new Map();

  for (const page of pages) {
    for (const item of page.navItems || []) {
      if (item.text && item.href) {
        const key = item.text.toLowerCase();
        if (!navMap.has(key)) navMap.set(key, item);
      }
    }
  }

  const structure = [
    {
      label: 'Technical Services',
      path: '/technical-services',
      children: [
        { label: 'Feasibility Studies', path: '/technical-services/feasibility-studies' },
        { label: 'Master Planning', path: '/technical-services/master-planning' },
        { label: 'Design', path: '/technical-services/design' },
        { label: 'Owner Representation', path: '/technical-services/owner-representation' },
      ],
    },
    {
      label: 'Education Services',
      path: '/education-services',
      children: [
        { label: 'Publications', path: '/education-services/publications' },
        { label: 'Seminars', path: '/education-services/seminars' },
        { label: 'Kids Corner', path: '/education-services/kids-corner' },
        { label: 'Activity Books', path: '/education-services/activity-books' },
      ],
    },
    {
      label: 'News',
      path: '/news',
      children: [
        { label: 'Industry', path: '/news/industry' },
        { label: 'Mission Statement', path: '/news/mission-statement' },
        { label: 'Egg Geo', path: '/news/egg-geo' },
      ],
    },
    {
      label: 'Defining The Future',
      path: '/defining-the-future',
      children: [
        { label: 'Emerging Technology Advocacy', path: '/defining-the-future/emerging-technology-advocacy' },
        { label: 'Code Development', path: '/defining-the-future/code-development' },
        { label: 'Resources', path: '/defining-the-future/resources' },
      ],
    },
    {
      label: 'Company',
      path: '/company',
      children: [
        { label: 'About Egg Geo', path: '/company/about-egg-geo' },
        { label: 'Our Team', path: '/company/our-team' },
        { label: 'Projects', path: '/company/projects' },
        { label: 'Careers', path: '/company/careers' },
      ],
    },
    { label: 'Contact', path: '/contact' },
  ];

  return { structure, rawNav: Array.from(navMap.values()), homePage: homePage?.slug };
}

function buildServices(pages) {
  const serviceSlugs = [
    { slug: 'feasibility-studies', category: 'technical', title: 'Feasibility Studies' },
    { slug: 'master-planning', category: 'technical', title: 'Master Planning' },
    { slug: 'design', category: 'technical', title: 'Design' },
    { slug: 'owner-representation', category: 'technical', title: 'Owner Representation' },
    { slug: 'technical-services', category: 'technical', title: 'Technical Services' },
    { slug: 'publications', category: 'education', title: 'Publications' },
    { slug: 'seminars', category: 'education', title: 'Seminars' },
    { slug: 'kids-corner', category: 'education', title: 'Kids Corner' },
    { slug: 'activity-books', category: 'education', title: 'Activity Books' },
    { slug: 'education-services', category: 'education', title: 'Education Services' },
    { slug: 'emerging-technology-advocacy', category: 'future', title: 'Emerging Technology Advocacy' },
    { slug: 'code-development', category: 'future', title: 'Code Development' },
    { slug: 'resources', category: 'future', title: 'Resources' },
    { slug: 'defining-the-future', category: 'future', title: 'Defining The Future' },
  ];

  return serviceSlugs.map(({ slug, category, title }) => {
    const page = findPageBySlug(pages, slug);
    if (!page) return { slug, category, title, description: '', content: [], images: [], pdfs: [] };

    const h1 = page.headings.find((h) => h.level === 1);
    return {
      slug,
      category,
      title: h1?.text || page.title.replace(' - Egg Geo', '').trim() || title,
      description: page.metaDescription || page.paragraphs[0] || '',
      content: page.paragraphs,
      lists: page.lists,
      headings: page.headings,
      images: page.images.map((i) => ({ src: i.localSrc || i.src, alt: i.alt })),
      pdfs: page.pdfs,
      sections: page.sections,
      url: page.url,
    };
  }).filter((s) => s.content.length > 0 || s.description || s.images.length > 0);
}

function buildProjects(pages) {
  const projectPage = findPageBySlug(pages, 'projects');
  const projects = [];

  if (projectPage) {
    for (const card of projectPage.cards || []) {
      projects.push({
        title: card.title,
        description: card.excerpt,
        image: card.image,
        link: card.link,
      });
    }
    if (projects.length === 0) {
      const projectHeadings = projectPage.headings.filter((h) => h.level <= 3);
      projectHeadings.forEach((h, i) => {
        if (h.text.toLowerCase() !== 'projects') {
          projects.push({
            title: h.text,
            description: projectPage.paragraphs[i] || '',
            image: projectPage.images[i]?.localSrc || projectPage.images[i]?.src || '',
          });
        }
      });
    }
  }

  for (const page of pages) {
    if (page.slug.includes('project') && page.slug !== 'projects') {
      projects.push({
        title: page.headings.find((h) => h.level === 1)?.text || page.title,
        description: page.paragraphs.join(' '),
        image: page.images[0]?.localSrc || page.images[0]?.src || '',
        slug: page.slug,
        url: page.url,
      });
    }
  }

  return projects;
}

function buildTeam(pages) {
  const teamPage = findPageBySlug(pages, 'our-team', 'team');
  const members = [];

  if (teamPage) {
    for (const m of teamPage.teamMembers || []) {
      members.push(m);
    }
    if (members.length === 0) {
      const imgs = teamPage.images.filter((i) => !i.alt?.toLowerCase().includes('logo'));
      const names = teamPage.headings.filter((h) => h.level >= 2 && h.level <= 4);
      names.forEach((h, i) => {
        if (!['our team', 'team', 'egg geo'].includes(h.text.toLowerCase())) {
          members.push({
            name: h.text,
            role: teamPage.paragraphs[i] || '',
            image: imgs[i]?.localSrc || imgs[i]?.src || '',
            bio: '',
          });
        }
      });
    }
  }

  return members;
}

function buildPublications(pages) {
  const pubPage = findPageBySlug(pages, 'publications');
  const publications = [];

  if (pubPage) {
    for (const pdf of pubPage.pdfs || []) {
      publications.push({ title: pdf.title, url: pdf.url, type: 'pdf' });
    }
    for (const card of pubPage.cards || []) {
      publications.push({
        title: card.title,
        description: card.excerpt,
        image: card.image,
        link: card.link,
        type: 'article',
      });
    }
  }

  for (const page of pages) {
    if (page.pdfs?.length > 0 && page.slug !== 'publications') {
      for (const pdf of page.pdfs) {
        publications.push({
          title: pdf.title,
          url: pdf.url,
          type: 'pdf',
          sourcePage: page.slug,
        });
      }
    }
  }

  return publications;
}

function buildNews(pages) {
  const newsSlugs = ['industry', 'mission-statement', 'egg-geo', 'news'];
  const news = [];

  for (const slug of newsSlugs) {
    const page = findPageBySlug(pages, slug);
    if (page) {
      news.push({
        slug,
        title: page.headings.find((h) => h.level === 1)?.text || page.title.replace(' - Egg Geo', ''),
        description: page.metaDescription || page.paragraphs[0] || '',
        content: page.paragraphs,
        images: page.images.map((i) => ({ src: i.localSrc || i.src, alt: i.alt })),
        date: '',
        url: page.url,
      });
    }
  }

  for (const page of pages) {
    if (page.slug.includes('news') || page.url.includes('/news/')) {
      if (!news.find((n) => n.slug === page.slug)) {
        news.push({
          slug: page.slug,
          title: page.headings.find((h) => h.level === 1)?.text || page.title,
          description: page.paragraphs[0] || '',
          content: page.paragraphs,
          images: page.images.map((i) => ({ src: i.localSrc || i.src, alt: i.alt })),
          url: page.url,
        });
      }
    }
  }

  return news;
}

function buildResources(pages) {
  const resources = [];
  const resPage = findPageBySlug(pages, 'resources');

  if (resPage) {
    for (const pdf of resPage.pdfs || []) {
      resources.push({ title: pdf.title, url: pdf.url, type: 'pdf' });
    }
    for (const link of resPage.links || []) {
      if (link.href.includes('download') || link.href.endsWith('.pdf')) {
        resources.push({ title: link.text, url: link.href, type: 'download' });
      }
    }
  }

  for (const page of pages) {
    for (const pdf of page.pdfs || []) {
      if (!resources.find((r) => r.url === pdf.url)) {
        resources.push({ title: pdf.title, url: pdf.url, type: 'pdf', sourcePage: page.slug });
      }
    }
  }

  return resources;
}

function buildContact(pages) {
  const contactPage = findPageBySlug(pages, 'contact');
  const homePage = findPageBySlug(pages, 'home');

  const contact = {
    address: '2860 Scherer Dr. N, Suite 640, St Petersburg, FL 33716',
    phone: '(727) 214-5863',
    email: 'info@EggGeo.com',
    description: '',
  };

  if (contactPage) {
    contact.description = contactPage.paragraphs.join('\n\n');
    if (contactPage.contactInfo.phone) contact.phone = contactPage.contactInfo.phone;
    if (contactPage.contactInfo.email) contact.email = contactPage.contactInfo.email;
    if (contactPage.contactInfo.address) contact.address = contactPage.contactInfo.address;
  } else if (homePage?.contactInfo) {
    if (homePage.contactInfo.phone) contact.phone = homePage.contactInfo.phone;
    if (homePage.contactInfo.email) contact.email = homePage.contactInfo.email;
  }

  return contact;
}

function buildSiteMeta(pages) {
  const home = findPageBySlug(pages, 'home') || pages[0];
  return {
    siteName: 'Egg Geo',
    tagline: 'Defining the future of thermal energy networks',
    home: {
      title: home?.title || 'Egg Geo',
      heroSlides: home?.heroSlides?.map((s) => ({ src: s.localSrc || s.src, alt: s.alt })) || [],
      headings: home?.headings || [],
      paragraphs: home?.paragraphs || [],
      lists: home?.lists || [],
      images: home?.images?.map((i) => ({ src: i.localSrc || i.src, alt: i.alt })) || [],
      sections: home?.sections || [],
    },
    about: (() => {
      const about = findPageBySlug(pages, 'about-egg-geo', 'about');
      return about
        ? {
            title: about.headings.find((h) => h.level === 1)?.text || 'About Egg Geo',
            content: about.paragraphs,
            images: about.images.map((i) => ({ src: i.localSrc || i.src, alt: i.alt })),
          }
        : null;
    })(),
    careers: (() => {
      const careers = findPageBySlug(pages, 'careers');
      return careers
        ? {
            title: careers.headings.find((h) => h.level === 1)?.text || 'Careers',
            content: careers.paragraphs,
          }
        : null;
    })(),
  };
}

crawl().catch((err) => {
  console.error('Scraper failed:', err);
  process.exit(1);
});
