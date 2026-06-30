import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
export default function ProjectShowcase() {
  const projects = [
    {
      title: "Deep Aquifer Mapping Initiative",
      category: "Geophysical Survey",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Urban Thermal Energy Network",
      category: "Resource Planning",
      image: "https://images.unsplash.com/photo-1473625247510-8ceb1760e443?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Coastal Environmental Monitoring",
      category: "Environmental",
      image: "https://images.unsplash.com/photo-1505504044955-a0db9bc0608c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Featured <span className="text-primary">Case Studies</span>
            </h2>
            <p className="text-lg text-gray-600">
              Explore our successful hydrogeological interventions and environmental assessments.
            </p>
          </div>
          <Link to="/projects" className="mt-6 md:mt-0 text-navy font-bold hover:text-primary transition-colors flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-1">
            View All Projects 
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 focus-within:ring-4 focus-within:ring-primary focus-within:outline-none"
            >
              {/* Keyboard accessible wrapper */}
              <Link to="/projects" className="absolute inset-0 z-20 focus:outline-none" aria-label={`View project: ${project.title}`}></Link>
              
              <div className="aspect-[4/5] w-full">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 group-focus-within:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-300">
                <div className="text-primary font-semibold text-sm tracking-wider uppercase mb-2">
                  {project.category}
                </div>
                <h3 className="text-white text-2xl font-bold mb-4">
                  {project.title}
                </h3>
                
                {/* Hidden Button that appears on hover */}
                <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 delay-100">
                  <span className="font-medium">Read Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
