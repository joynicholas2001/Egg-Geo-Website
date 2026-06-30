const NOISE_PATTERNS = [
  /^\(727\)/,
  /^©\d{4}/,
  /^Young kids/,
  /^Your first name/,
  /^Your last name/,
  /^Your email/,
  /^Demo Description/,
  /^This will close/,
  /^Δ/,
  /^document\.getElementById/,
  /^grecaptcha/,
  /^Fields marked/,
  /^Organization$/,
  /^Project Description/,
  /^Feasibility Studies$/,
  /^Master Planning$/,
  /^Owner Representation$/,
  /^Publications$/,
  /^Emerging Technology/,
  /^Code Development$/,
  /^Geothermal House Popup$/,
];

export function filterParagraphs(paragraphs = []) {
  return paragraphs.filter((p) => {
    const trimmed = p.trim();
    if (trimmed.length < 20) return false;
    return !NOISE_PATTERNS.some((pattern) => pattern.test(trimmed));
  });
}

export function filterHeroSlides(slides = []) {
  return slides.filter(
    (s) => s.src && !s.src.startsWith('data:image') && !s.alt?.includes('arrow')
  );
}

export function getServiceBySlug(services, slug) {
  const aliases = {
    design: 'design',
    'geothermal-design': 'design',
  };
  const target = aliases[slug] || slug;
  return services.find((s) => s.slug === target);
}

export function getContentList(service) {
  if (!service) return { content: [], serviceList: [] };
  const content = filterParagraphs(service.content);
  
  // The first 6 lists in the scraped data are typically navigation menus.
  // We filter them out by checking known items in those menus.
  const validLists = service.lists?.filter(
    (list) =>
      list.length > 0 &&
      !list.includes('TECHNICAL SERVICES') &&
      !list.includes('Feasibility Studies') &&
      !list.includes('Publications') &&
      !list.includes('Industry') &&
      !list.includes('Emerging Technology Advocacy') &&
      !list.includes('About Egg Geo')
  ) || [];
  
  const serviceList = validLists.length > 0 ? validLists[validLists.length - 1] : [];
  return { content, serviceList };
}
