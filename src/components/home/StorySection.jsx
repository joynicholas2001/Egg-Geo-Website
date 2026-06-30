import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
export default function StorySection() {
  const points = [
    "Pioneering Groundwater Intelligence",
    "Advancing Environmental Sustainability",
    "Ensuring Long-term Water Security",
    "Leading Scientific Research"
  ];

  const dataPoints = [
    { label: "Data Accuracy", value: 99 },
    { label: "Resource Optimization", value: 85 },
    { label: "Sustainability Score", value: 94 }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Geological layers"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
              
              {/* Floating Data Card */}
              <div
                className="absolute bottom-4 right-4 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 bg-white p-6 rounded-2xl shadow-2xl w-64 md:w-72 hidden md:block border border-gray-100"
              >
                <h4 className="font-bold text-navy mb-4 text-sm uppercase tracking-wider">Performance Metrics</h4>
                <div className="space-y-4">
                  {dataPoints.map((data, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 font-medium">{data.label}</span>
                        <span className="text-primary font-bold">{data.value}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-light rounded-full -z-10" />
          </div>

          {/* Text Content Side */}
          <div>
            <div
            >
              <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Defining The Future</div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                Innovation in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Hydrogeological Science
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Egg Geo, we bridge the gap between complex geological data and actionable environmental strategies. By leveraging state-of-the-art modeling and rigorous field research, we empower organizations to make informed decisions about water resources.
              </p>

              <div className="space-y-4 mb-10">
                {points.map((point, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                    <span className="text-navy font-semibold text-lg">{point}</span>
                  </div>
                ))}
              </div>

              <Link to="/company/about-egg-geo" className="inline-block bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300 shadow-lg shadow-primary/20">
                Discover Our Methodology
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
