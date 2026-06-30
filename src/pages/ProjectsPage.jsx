import PageBanner from '../components/PageBanner';
import ProjectCard from '../components/ProjectCard';
import { usePageMeta } from '../hooks/usePageMeta';
import projects from '../data/projects.json';

export default function ProjectsPage() {
  usePageMeta({
    title: 'Projects',
    description: 'Thermal energy network projects by Egg Geo across public, private, and institutional sectors',
  });

  return (
    <>
      <PageBanner
        title="Projects"
        subtitle="Customized thermal energy network solutions across diverse sectors"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-lg md:text-xl text-gray-600 text-center mb-16 mx-auto max-w-3xl leading-relaxed">
            As thermal energy network experts, Egg Geo works in partnership with our clients to create
            systems and networks across public, private, institutional and multifamily projects. We specialize
            in developing customized solutions for thermal energy networks based on available resources to
            power ground source heat pumps including drinking water energy, wastewater energy, and surface
            water exchange.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <div className="flex h-full" key={project.title}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
