import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Laptop, DraftingCompass, CheckSquare, FileSignature, Ruler, ArrowRight, CheckCircle2 
} from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

const designItems = [
  {
    icon: Laptop,
    text: 'Technology and equipment assessments',
  },
  {
    icon: DraftingCompass,
    text: 'Schematic drawings of proposed systems',
  },
  {
    icon: CheckSquare,
    text: 'Process planning and quality assurance',
  },
  {
    icon: FileSignature,
    text: 'Signed and sealed construction drawings',
  },
  {
    icon: Ruler,
    text: 'Well specifications and design metrics',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function DesignPage() {
  usePageMeta({
    title: 'Design - Egg Geo',
    description: 'During the Design process, core design principals for thermal systems to maximize building efficiency and occupant comfort are analyze and deployed.',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative min-h-[25vh] md:min-h-[45vh] flex flex-col items-center justify-center bg-cover bg-center -mt-20 pt-20 md:pt-20" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=80)` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-primary/80 to-navy/70 mix-blend-multiply" />
        <motion.div className="relative z-10 text-center p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
            Design
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Maximizing building efficiency and occupant comfort through rigorous thermal system design principles.
          </p>
        </motion.div>
        <motion.div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
          animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </section>

      {/* ── Introduction ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6">
                Technical Services
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight mb-6" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
                Defining the Future of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan">
                  Thermal Energy Networks
                </span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                During the Design process, core design principals for thermal systems to maximize building efficiency and occupant comfort are analyze and deployed.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Forward looking collaborations with all stakeholders and construction teams successfully ensure each project’s performance and efficiency before construction ever begins, providing robust deliverables that guarantee results.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-cyan text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-primary/30"
                >
                  Discuss Your Design
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/technical-services"
                  className="inline-flex items-center gap-2 bg-navy/5 hover:bg-navy/10 text-navy font-bold px-8 py-4 rounded-full transition-all duration-300"
                >
                  All Services
                </Link>
              </div>
            </motion.div>

            {/* Visual side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                  alt="Engineering and Design"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl border border-gray-100 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-navy">Verified</div>
                    <div className="text-gray-500 text-sm font-medium">Design Performance</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Absorption Chillers Technical Spotlight ── */}
      <section className="py-20 bg-light border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Diagram Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100">
                <img
                  src="/images/absorption-chiller.png"
                  alt="Absorption Chiller Schematic"
                  className="w-full h-auto object-contain mx-auto rounded-xl hover:scale-102 transition-transform duration-300"
                />
              </div>
              
              {/* Decorative background element */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-secondary/15 rounded-full blur-2xl" />
              <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-primary/15 rounded-full blur-2xl" />
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6">
                Technical Spotlight
              </span>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-navy leading-tight mb-6" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
                Absorption Chillers use waste heat to create chilled water
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                Absorption chillers utilize thermal energy (waste heat from industrial processes, combined heat and power systems, or district networks) instead of mechanical compression to drive the refrigeration cycle.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Evaporation & Absorption", desc: "Refrigerant evaporates under low pressure, cooling the chilled water loop, before being absorbed by a lithium bromide solution." },
                  { title: "Generation & Condensation", desc: "External heat boils off the refrigerant vapor to concentrate the absorbent, and the vapor is condensed to repeat the cycle." },
                  { title: "Carbon & Cost Reduction", desc: "By turning thermal waste into cooling, these systems drastically lower peak electrical demand and operating costs." }
                ].map((point, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary font-bold text-xs">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-navy mb-0.5">{point.title}</h4>
                      <p className="text-gray-500 text-sm">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Content Grid ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-navy/10 text-navy text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-4">
              Our Deliverables
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
              Design Process Components
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-4">
              During the Design process, core design principals for thermal systems to maximize building efficiency and occupant comfort are analyze and deployed.
            </p>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Forward looking collaborations with all stakeholders and construction teams successfully ensure each project’s performance and efficiency before construction ever begins, by providing such deliverables as:
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {designItems.map(({ icon: Icon, text }, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center shrink-0 transition-colors">
                    <Icon className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                  <p className="text-gray-700 group-hover:text-navy font-medium leading-snug transition-colors">
                    {text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 relative overflow-hidden border-t border-gray-100">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6">
              Ready to Solidify Your Design?
            </h2>
            <p className="text-navy/60 text-lg max-w-2xl mx-auto mb-10">
              Ensure project performance and efficiency before construction begins with our expert design services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-lg shadow-primary/20"
              >
                Contact Our Experts
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/technical-services/owner-representation"
                className="inline-flex items-center gap-2 border-2 border-navy/20 hover:border-primary hover:text-primary text-navy font-bold px-10 py-4 rounded-full transition-all duration-300"
              >
                Next: Owner Representation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
