# Egg Geo Website

Modern React.js rebuild of [egggeo.com](https://egggeo.com/) — a corporate website for thermal energy networks and geothermal exchange consulting.

## Technology Stack

- **React 19** with Vite
- **React Router DOM** for client-side routing
- **Bootstrap 5** for responsive UI
- **Axios** for API requests
- **Playwright** for website scraping

## Project Structure

```
src/
├── assets/           # Static assets
├── components/       # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── HeroSlider.jsx
│   ├── ServiceCard.jsx
│   ├── NewsCard.jsx
│   ├── TeamCard.jsx
│   ├── ProjectCard.jsx
│   ├── PublicationCard.jsx
│   ├── ContactForm.jsx
│   ├── PageBanner.jsx
│   └── DownloadSection.jsx
├── pages/            # Route pages
├── layouts/          # Layout wrappers
├── routes/           # Router configuration
├── services/         # API services
├── data/             # Scraped JSON data
│   ├── services.json
│   ├── projects.json
│   ├── team.json
│   ├── publications.json
│   ├── news.json
│   ├── resources.json
│   ├── contact.json
│   ├── navigation.json
│   ├── site-meta.json
│   └── pages/        # Per-page scraped data
├── hooks/            # Custom React hooks
├── styles/           # Custom CSS
└── utils/            # Content filtering utilities

scripts/
└── scrape-egggeo.js  # Playwright web scraper

public/
└── images/           # Downloaded images from egggeo.com
```

## Setup

### Prerequisites

- Node.js 18+
- npm 9+

### Install Dependencies

```bash
npm install
```

### Install Playwright Browser (for scraping)

```bash
npx playwright install chromium
```

## Run the Scraper

The scraper crawls all internal pages on egggeo.com, extracts content, downloads images, and generates JSON data files.

```bash
npm run scrape
```

This will:
- Crawl up to 200 internal pages recursively
- Extract titles, headings, text, images, PDFs, team info, and navigation
- Download images to `public/images/`
- Generate JSON files in `src/data/`

## Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
```

Output is generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Pages

| Section | Routes |
|---------|--------|
| Home | `/` |
| Technical Services | `/technical-services`, `/technical-services/feasibility-studies`, `/technical-services/master-planning`, `/technical-services/design`, `/technical-services/owner-representation` |
| Education Services | `/education-services`, `/education-services/publications`, `/education-services/seminars`, `/education-services/kids-corner`, `/education-services/activity-books` |
| News | `/news`, `/news/industry`, `/news/mission-statement`, `/news/egg-geo` |
| Defining The Future | `/defining-the-future`, `/defining-the-future/emerging-technology-advocacy`, `/defining-the-future/code-development`, `/defining-the-future/resources` |
| Company | `/company`, `/company/about-egg-geo`, `/company/our-team`, `/company/projects`, `/company/careers` |
| Contact | `/contact` |

## Data Files

All content is sourced from the live egggeo.com website via the Playwright scraper:

- `services.json` — Technical, education, and future service pages
- `projects.json` — Portfolio projects with locations
- `team.json` — Team members with roles and bios
- `publications.json` — PDFs and publications
- `news.json` — Industry news and mission content
- `resources.json` — Downloadable resources
- `contact.json` — Contact information
- `navigation.json` — Site navigation structure
- `site-meta.json` — Home page, about, and careers content

## License

© Egg Geo, LLC. Content belongs to Egg Geo.
