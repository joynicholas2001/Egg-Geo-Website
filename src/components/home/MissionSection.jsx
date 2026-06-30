import { Link } from 'react-router-dom';
import { Flame, Building2, Droplets, Globe2, HeartPulse, Users } from 'lucide-react';

const clientTypes = [
  { icon: Flame,       label: 'Thermal Energy Networks' },
  { icon: Building2,   label: 'Datacenters' },
  { icon: HeartPulse,  label: 'Healthcare & Educational Campuses' },
  { icon: Users,       label: 'Multifamily Communities' },
  { icon: Globe2,      label: 'Cities & Municipalities' },
  { icon: Droplets,    label: 'ESG Funds & Developers' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function MissionSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#16A34A 1px, transparent 1px), linear-gradient(90deg, #16A34A 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glowing orb accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* ── Top label ── */}
        <div
          className="text-center mb-6"
        >
          <span className="inline-block bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full">
            Our Mission
          </span>
        </div>

        {/* ── Headline ── */}
        <h2
          className="text-3xl md:text-5xl font-extrabold text-navy text-center leading-tight mb-6 max-w-4xl mx-auto"
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800 }}
        >
          The Future of{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Thermal Energy
          </span>{' '}
          Is Being Written Today
        </h2>

        {/* ── Stat callout ── */}
        <div
          className="flex justify-center mb-10"
        >
          <div className="bg-gray-50 border border-gray-200 rounded-2xl px-8 py-4 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <span className="text-4xl font-black text-primary">40%</span>
            <span className="text-navy/70 text-sm leading-snug max-w-xs">
              of the world's energy budget is spent on heating &amp; cooling buildings
            </span>
          </div>
        </div>

        {/* ── Body text ── */}
        <div
          className="text-navy/70 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-6"
        >
          <p className="mb-4">
            The future of thermal energy networks and geothermal energy is being written today. Egg Geo joins global industry leaders at the front lines where the heating and cooling of buildings comprises 40% of the world’s energy budget.
          </p>
          <p>
            Egg Geo provides technical and education services in thermal energy and geothermal exchange consulting for clients ranging from developers and ESG funds to governments and institutions for such projects as:
          </p>
        </div>

        {/* ── Divider ── */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-navy/40 text-xs uppercase tracking-widest font-semibold whitespace-nowrap">
            We Serve
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* ── Client type cards ── */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-center max-w-5xl mx-auto"
        >
          {clientTypes.filter(c => c.label !== 'ESG Funds & Developers').map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex flex-col items-center justify-center gap-3 bg-gray-50 hover:bg-primary/5 border border-gray-200 hover:border-primary/30 rounded-2xl p-5 text-center transition-all duration-300 cursor-default shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-navy/80 group-hover:text-primary text-sm font-medium leading-snug transition-colors">
                {label}
              </span>
            </div>
          ))}
        </div>

        <p
          className="text-primary font-semibold text-lg text-center max-w-2xl mx-auto mt-16 italic"
        >
          "Our mission is to optimize our clients' ability to heat and cool their buildings
          reliably and effectively using carbon neutral thermal energy."
        </p>

        {/* ── CTA ── */}
        <div
          className="flex justify-center mt-14"
        >
          <Link
            to="/company/about-egg-geo"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-lg shadow-primary/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary"
          >
            Learn More About Us
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
