import { Link } from 'react-router-dom';
import { Droplets, ActivitySquare, ShieldCheck, Map as MapIcon, Compass, Database, BookOpen, Presentation, Video, FileText } from 'lucide-react';
export default function ServicesSection() {
  const technicalServices = [
    { title: "Groundwater Exploration", icon: <Compass className="w-8 h-8" />, desc: "Advanced aquifer mapping and resource identification using cutting-edge geophysical methods." },
    { title: "Aquifer Studies", icon: <Droplets className="w-8 h-8" />, desc: "Comprehensive analysis of aquifer capacity, recharge rates, and sustainable yield modeling." },
    { title: "Environmental Monitoring", icon: <ShieldCheck className="w-8 h-8" />, desc: "Continuous water quality and quantity monitoring to ensure regulatory compliance." },
    { title: "Water Resource Planning", icon: <ActivitySquare className="w-8 h-8" />, desc: "Strategic long-term planning for municipal and industrial water security." },
    { title: "Geophysical Surveys", icon: <MapIcon className="w-8 h-8" />, desc: "Non-invasive subsurface imaging to delineate geological formations." },
    { title: "GIS & Data Analysis", icon: <Database className="w-8 h-8" />, desc: "Spatial data visualization and complex hydrogeological data management." },
  ];

  const educationServices = [
    { title: "Research Publications", icon: <FileText className="w-6 h-6" />, desc: "Peer-reviewed studies and technical whitepapers." },
    { title: "Technical Training", icon: <BookOpen className="w-6 h-6" />, desc: "Professional development for geoscientists." },
    { title: "Workshops", icon: <Presentation className="w-6 h-6" />, desc: "Hands-on field and laboratory sessions." },
    { title: "Webinars", icon: <Video className="w-6 h-6" />, desc: "Online industry insights and methodologies." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-light relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Technical Services */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Technical <span className="text-primary">Services</span></h2>
            <p className="text-lg text-gray-600">
              Industry-leading hydrogeological consulting and environmental analysis tailored to secure and manage water resources.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {technicalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Hover accent top border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                
                <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <Link to="/technical-services" className="inline-flex items-center text-sm font-bold text-primary hover:text-secondary uppercase tracking-wider group/link">
                  Learn More 
                  <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Education Services */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Education & <span className="text-secondary">Knowledge Hub</span></h2>
              <p className="text-gray-600">Advancing the industry through shared research and technical training.</p>
            </div>
            <Link to="/education-services" className="mt-6 md:mt-0 text-primary font-bold hover:text-navy transition-colors flex items-center gap-2">
              View All Resources →
            </Link>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {educationServices.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-50 border border-gray-100 p-6 rounded-xl text-navy group hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg"
              >
                <div className="text-primary mb-4 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-lg font-bold mb-2 group-hover:text-white">{service.title}</h4>
                <p className="text-navy/70 text-sm group-hover:text-white/80">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
