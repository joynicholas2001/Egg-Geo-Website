import PageBanner from '../components/PageBanner';
import ServiceCard from '../components/ServiceCard';
import { usePageMeta } from '../hooks/usePageMeta';
import news from '../data/news.json';

const newsLinks = [
  { slug: 'industry', path: '/news/industry', label: 'Industry' },
  { slug: 'mission-statement', path: '/news/mission-statement', label: 'Mission Statement' },
  { slug: 'egg-geo', path: '/news/egg-geo', label: 'Egg Geo' },
];

export default function NewsOverview() {
  usePageMeta({ title: 'News', description: 'Industry news and updates from Egg Geo' });

  return (
    <>
      <PageBanner title="News" subtitle="Industry insights, mission updates, and company news" />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {newsLinks.map(({ slug, path, label }) => {
              const article = news.find((n) => n.slug === slug);
              return (
                <div className="flex h-full" key={path}>
                  <ServiceCard
                    title={label}
                    description={article?.description?.slice(0, 150)}
                    image={article?.images?.[1]?.src || article?.images?.[0]?.src}
                    link={path}
                    actionLabel="Read"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
