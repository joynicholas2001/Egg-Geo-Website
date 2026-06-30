import { useState, useRef, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

// Use a reliable TopoJSON map of the USA
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export default function USAMapSection() {
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const mapContainerRef = useRef(null);

  const markers = [
    { coordinates: [-122.4194, 37.7749], name: "Bay Area Aquifer Study", state: "California", type: "completed", service: "Aquifer Studies" },
    { coordinates: [-118.2437, 34.0522], name: "LA Basin Groundwater", state: "California", type: "active", service: "Groundwater Exploration" },
    { coordinates: [-95.3698, 29.7604], name: "Houston Thermal Network", state: "Texas", type: "completed", service: "Thermal Energy" },
    { coordinates: [-80.1918, 25.7617], name: "Miami Environmental Mon.", state: "Florida", type: "active", service: "Environmental Monitoring" },
    { coordinates: [-74.0060, 40.7128], name: "NYC Deep Aquifer", state: "New York", type: "completed", service: "Geophysical Surveys" },
    { coordinates: [-87.6298, 41.8781], name: "Chicago Resource Plan", state: "Illinois", type: "active", service: "Water Resource Planning" },
    { coordinates: [-104.9903, 39.7392], name: "Denver GIS Mapping", state: "Colorado", type: "completed", service: "GIS & Data Analysis" },
  ];

  // Close tooltip on touch outside
  useEffect(() => {
    function handleTouchOutside(e) {
      if (tooltipContent && mapContainerRef.current && !mapContainerRef.current.contains(e.target)) {
        setTooltipContent("");
      }
    }
    document.addEventListener("touchstart", handleTouchOutside);
    return () => document.removeEventListener("touchstart", handleTouchOutside);
  }, [tooltipContent]);

  const handleMarkerInteraction = (e, marker) => {
    const rect = mapContainerRef.current.getBoundingClientRect();
    // Calculate relative to the map container for better mobile positioning
    let x = e.clientX;
    let y = e.clientY;
    
    // Boundary check so tooltip doesn't bleed off-screen
    if (x < 120) x = 120;
    if (x > window.innerWidth - 120) x = window.innerWidth - 120;
    
    setTooltipPos({ x, y });
    setTooltipContent(marker);
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Content & Stats side */}
          <div className="lg:col-span-1">
            <div
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Our Impact <br/><span className="text-primary">Across America</span>
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                Delivering advanced hydrogeological solutions and sustainable water strategies to communities and enterprises nationwide.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_12px_rgba(22,163,74,0.6)]" />
                  <div>
                    <h4 className="text-xl font-bold text-navy">240+</h4>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Completed Projects</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-accent-red shadow-[0_0_15px_rgba(217,75,61,0.8)]" />
                  <div>
                    <h4 className="text-xl font-bold text-navy">35</h4>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Active Research Sites</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="lg:col-span-2 relative">
            <div 
              ref={mapContainerRef}
              className="bg-light rounded-3xl p-4 md:p-8 relative overflow-hidden shadow-xl border border-gray-100 flex items-center justify-center min-h-[350px]"
            >
              <div className="w-full relative aspect-[4/3] md:aspect-[16/9] max-h-[600px]">
                <ComposableMap projection="geoAlbersUsa" className="w-full h-full" aria-label="Map of the United States showing project locations">
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="#E2E8F0" // slate-200
                          stroke="#FFFFFF"
                          strokeWidth={1}
                          style={{
                            default: { outline: "none" },
                            hover: { fill: "#CBD5E1", outline: "none" }, // slate-300
                            pressed: { outline: "none" },
                          }}
                        />
                      ))
                    }
                  </Geographies>

                  {markers.map((marker, i) => (
                    <Marker 
                      key={i} 
                      coordinates={marker.coordinates}
                      onMouseEnter={(e) => handleMarkerInteraction(e, marker)}
                      onMouseLeave={() => setTooltipContent("")}
                      onTouchStart={(e) => {
                        // For mobile touch
                        const touch = e.touches[0];
                        handleMarkerInteraction(touch, marker);
                      }}
                    >
                      <circle
                        r={6}
                        fill={marker.type === "completed" ? "var(--color-primary)" : "var(--color-accent-red)"}
                        className="cursor-pointer focus:outline-none"
                        tabIndex={0}
                        aria-label={`${marker.name} in ${marker.state}`}
                        onFocus={(e) => {
                          const rect = e.target.getBoundingClientRect();
                          setTooltipPos({ x: rect.left + rect.width / 2, y: rect.top });
                          setTooltipContent(marker);
                        }}
                        onBlur={() => setTooltipContent("")}
                      />
                      {/* Glowing effect pulse */}
                      <circle
                        r={12}
                        fill="transparent"
                        stroke={marker.type === "completed" ? "var(--color-primary)" : "var(--color-accent-red)"}
                        strokeWidth={2}
                      />
                    </Marker>
                  ))}
                </ComposableMap>
              </div>

              {/* Tooltip Portal / Overlay */}
              
                {tooltipContent && (
                  <div
                    
                    className="fixed z-50 bg-white text-navy px-4 py-3 rounded-lg shadow-xl border border-gray-200 pointer-events-none transform -translate-x-1/2 -translate-y-full mt-[-20px] w-max max-w-[250px]"
                    style={{ top: tooltipPos.y, left: tooltipPos.x }}
                  >
                    <p className="font-bold text-base mb-1 truncate">{tooltipContent.name}</p>
                    <div className="flex items-center gap-2 text-sm text-navy/70">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${tooltipContent.type === "completed" ? 'bg-primary' : 'bg-accent-red'}`}></span>
                      {tooltipContent.state}
                    </div>
                    <div className={`mt-2 pt-2 border-t border-gray-100 text-xs font-medium uppercase tracking-wider ${tooltipContent.type === "completed" ? 'text-primary' : 'text-accent-red'}`}>
                      {tooltipContent.service}
                    </div>
                  </div>
                )}
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
