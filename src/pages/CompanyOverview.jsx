import PageBanner from '../components/PageBanner';
import ServiceCard from '../components/ServiceCard';
import { usePageMeta } from '../hooks/usePageMeta';

const companyLinks = [
  { title: 'About Egg Geo', path: '/company/about-egg-geo', description: 'Learn about our mission and expertise' },
  { title: 'Our Team', path: '/company/our-team', description: 'Meet our geothermal and engineering experts' },
  { title: 'Projects', path: '/company/projects', description: 'Explore our portfolio of thermal energy projects' },
  { title: 'Careers', path: '/company/careers', description: 'Join us at the Thermal Network Edge' },
];

export default function CompanyOverview() {
  usePageMeta({ title: 'Company', description: 'About Egg Geo, our team, projects, and careers' });

  return (
    <>
      <PageBanner title="Company" subtitle="About Egg Geo, our team, projects, and careers" />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {companyLinks.map((item) => (
              <div key={item.path} className="flex h-full">
                <ServiceCard title={item.title} description={item.description} link={item.path} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
