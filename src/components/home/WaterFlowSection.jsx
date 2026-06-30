
export default function WaterFlowSection() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #16A34A 0%, transparent 60%), radial-gradient(circle at 80% 50%, #22C55E 0%, transparent 60%)' }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Ground Loop Visual */}
          <div
            className="relative flex justify-center"
          >
            {/* Glow backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-primary/5 to-transparent rounded-3xl blur-2xl scale-110" />

            <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-lg bg-white p-4 max-w-[180px] md:max-w-[220px] w-full mx-auto">
              <img
                src="/images/ground-loop-coil.png"
                alt="Geothermal ground loop coil diagram"
                className="w-full max-h-[450px] object-contain drop-shadow-2xl mx-auto"
              />


            </div>

            {/* Floating label: depth indicator */}
            <div
              className="absolute -right-4 top-1/3 bg-white shadow border border-gray-200 text-navy text-xs font-bold px-3 py-2 rounded-xl shadow-lg"
            >
              ↕ 200–400 ft deep
            </div>

            {/* Floating label: efficiency */}
            <div
              className="absolute -left-4 bottom-1/3 bg-primary/10 border border-primary/20 text-primary text-xs font-bold px-3 py-2 rounded-xl shadow-lg"
            >
              400% + efficiency
            </div>
          </div>

          {/* Text Content */}
          <div
          >
            <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              Ground Loop{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Heat Exchange
              </span>
            </h2>
            <p className="text-lg text-navy/70 mb-8 leading-relaxed">
              Buried ground loops circulate fluid deep underground to harvest the earth's constant
              temperature — transferring heat in winter and rejecting it in summer. No combustion,
              no emissions, just the quiet power of the earth.
            </p>

            <div className="space-y-5 mb-10">
              {[
                { title: 'Closed-Loop Circulation', desc: 'Fluid travels through sealed HDPE pipes buried vertically or horizontally underground.' },
                { title: 'Stable Ground Temperature', desc: 'Below the frost line, the earth stays at 50–60°F year-round — free, renewable energy.' },
                { title: 'Heat Pump Transfer', desc: 'A heat pump concentrates or disperses thermal energy into the building at 300–500% efficiency.' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-navy font-semibold text-base mb-1">{item.title}</h4>
                    <p className="text-navy/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/technical-services/design"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-bold px-7 py-3.5 rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              Explore Our Design Process
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
