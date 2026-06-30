import PageBanner from '../components/PageBanner';
import ServiceCard from '../components/ServiceCard';
import { usePageMeta } from '../hooks/usePageMeta';
import services from '../data/services.json';

const overviewConfig = {
  'technical-services': {
    title: 'Technical Services',
    subtitle: 'Engineering expertise for thermal energy networks',
    category: 'technical',
    children: [
      { slug: 'feasibility-studies', path: '/technical-services/feasibility-studies' },
      { slug: 'master-planning', path: '/technical-services/master-planning' },
      { slug: 'design', path: '/technical-services/design' },
      { slug: 'owner-representation', path: '/technical-services/owner-representation' },
    ],
  },
  'education-services': {
    title: 'Education Services',
    subtitle: 'Publications, seminars, and educational resources',
    category: 'education',
    children: [
      { slug: 'publications', path: '/education-services/publications' },
      { slug: 'seminars', path: '/education-services/seminars' },
      { slug: 'kids-corner', path: '/education-services/kids-corner' },
      { slug: 'activity-books', path: '/education-services/activity-books' },
    ],
  },
  'defining-the-future': {
    title: 'Defining The Future',
    subtitle: 'Advocacy, code development, and industry resources',
    category: 'future',
    children: [
      { slug: 'emerging-technology-advocacy', path: '/defining-the-future/emerging-technology-advocacy' },
      { slug: 'code-development', path: '/defining-the-future/code-development' },
      { slug: 'resources', path: '/defining-the-future/resources' },
    ],
  },
};

export default function ServiceOverviewPage({ sectionKey }) {
  const config = overviewConfig[sectionKey];
  const overviewService = services.find((s) => s.slug === sectionKey);

  usePageMeta({
    title: config?.title,
    description: overviewService?.description || config?.subtitle,
  });

  if (!config) return null;

  return (
    <>
      <PageBanner title={config.title} subtitle={config.subtitle} />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {overviewService?.content?.[0] && (
            <p className="text-lg md:text-xl text-gray-600 text-center mb-16 mx-auto max-w-3xl leading-relaxed">
              {overviewService.content[0]}
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {config.children.map(({ slug, path }) => {
              const svc = services.find((s) => s.slug === slug);
              return (
                <div className="flex h-full" key={path}>
                  <ServiceCard
                    title={svc?.title || slug}
                    description={svc?.description?.slice(0, 150)}
                    image={svc?.images?.[0]?.src}
                    link={path}
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
