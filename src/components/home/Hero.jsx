import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Users, Map, Award } from 'lucide-react';

export default function Hero() {
  const stats = [
    { icon: <Award className="w-6 h-6 text-primary" />, value: "25+", label: "Years Experience" },
    { icon: <Activity className="w-6 h-6 text-primary" />, value: "500+", label: "Projects Completed" },
    { icon: <Users className="w-6 h-6 text-primary" />, value: "50+", label: "Industry Experts" },
    { icon: <Map className="w-6 h-6 text-primary" />, value: "50", label: "States Covered" }
  ];

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden -mt-20 pt-40 md:pt-20">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=80")', // Thermal energy infrastructure/piping
        }}
      >
        {/* Light Overlays for Readability */}
        <div className="absolute inset-0 bg-white/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40" />
        
        {/* Static texture overlay */}
        <div 
          className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-20">
        <div className="max-w-4xl">
          <div>
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
              <span className="text-primary font-semibold tracking-wider text-sm uppercase">Pioneering Thermal Energy</span>
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-6 leading-tight"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800 }}
            >
              Defining the Future of <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Thermal Energy Networks
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-navy/80 mb-10 max-w-2xl leading-relaxed">
              Global leaders in thermal energy networks and geothermal exchange consulting for developers, ESG funds, governments, and institutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link to="/technical-services" className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/company/contact" className="bg-white hover:bg-gray-50 border border-gray-200 text-navy px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center shadow-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary">
                Contact Experts
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-navy">{stat.value}</div>
                    <div className="text-xs md:text-sm text-navy/60">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
