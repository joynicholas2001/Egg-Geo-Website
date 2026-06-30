import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, Users, TrendingUp, Zap, ShieldCheck, Puzzle, ArrowRight, CheckCircle2 
} from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

const masterPlanningItems = [
  {
    icon: FileText,
    text: 'Establishment of technical requirements and project design criteria',
  },
  {
    icon: Users,
    text: 'Facilitation of multidisciplinary collaborations',
  },
  {
    icon: TrendingUp,
    text: 'Alignment with economic development objectives',
  },
  {
    icon: Zap,
    text: 'Utility relations and energy grid integration planning',
  },
  {
    icon: ShieldCheck,
    text: 'Protection of the integrity of the project’s ultimate result',
  },
  {
    icon: Puzzle,
    text: 'Resolution of complex engineering and logistical challenges',
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

export default function MasterPlanningPage() {
  usePageMeta({
    title: 'Master Planning - Egg Geo',
    description: 'Ensuring implementation of owner and stakeholder requirements is critical to thermal network project planning and implementation.',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative min-h-[25vh] md:min-h-[45vh] flex flex-col items-center justify-center bg-cover bg-center -mt-20 pt-20 md:pt-20" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80)` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-primary/80 to-navy/70 mix-blend-multiply" />
        <motion.div className="relative z-10 text-center p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800 }}>
            Defining the Future of <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-secondary">
              Thermal Energy Networks
            </span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Translating Feasibility Study results into robust technical requirements and design criteria for successful thermal network systems.
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
          <div className="max-w-4xl mx-auto">

            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6">
                Technical Services
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight mb-6" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800 }}>
                Master Planning
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Ensuring implementation of owner and stakeholder requirements is critical to thermal network project planning and implementation. The Master Plan utilizes results from the Feasibility Study to establish technical requirements and design criteria for the project, leading to design of the thermal network system to be constructed.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                From technical requirements, to economic development and utility relations, deep expertise in planning and facilitating multidisciplinary collaborations toward an optimal Master Plan protects the integrity of the project’s ultimate result. We’re known for solving complex challenges in unique and unexpected ways.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-cyan text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-primary/30"
                >
                  Start Planning
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
          </div>
        </div>
      </section>

      {/* ── Content Grid ── */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-navy/10 text-navy text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-4">
              What We Deliver
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
              Master Planning Components
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Our comprehensive approach integrates technical specifications with broad stakeholder objectives.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {masterPlanningItems.map(({ icon: Icon, text }, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 transition-transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-default"
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
              Ready to Formulate Your Master Plan?
            </h2>
            <p className="text-navy/60 text-lg max-w-2xl mx-auto mb-10">
              Leverage our deep expertise in planning and facilitating multidisciplinary collaborations to secure the ultimate success of your project.
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
                to="/technical-services/design"
                className="inline-flex items-center gap-2 border-2 border-navy/20 hover:border-primary hover:text-primary text-navy font-bold px-10 py-4 rounded-full transition-all duration-300"
              >
                Next: Design
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
