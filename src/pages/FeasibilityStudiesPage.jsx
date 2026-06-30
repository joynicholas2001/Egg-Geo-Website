import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Thermometer, Building2, DollarSign, TrendingUp, 
  BarChart3, Leaf, Zap, Cog, GitBranch, Recycle, ArrowRight,
  CheckCircle2 
} from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';


const feasibilityItems = [
  {
    icon: Thermometer,
    text: 'Heating and cooling thermal capacity available within usable site boundaries',
  },
  {
    icon: Building2,
    text: 'Building use types and estimated thermal loads and energy models',
  },
  {
    icon: GitBranch,
    text: 'Considerations for distribution and injection pipelines',
  },
  {
    icon: DollarSign,
    text: 'Economic analysis, including estimated capital investment and operating costs',
  },
  {
    icon: TrendingUp,
    text: 'Financial analysis of project capital requirements, return on investment (ROI) calculations, and comparisons to conventional systems',
  },
  {
    icon: BarChart3,
    text: 'Financial projections such as net present value (NPV) and annual cash flow',
  },
  {
    icon: Leaf,
    text: 'Environmental impact analysis and impact on Greenhouse Gas (GHG) reductions',
  },
  {
    icon: Zap,
    text: 'Building energy load requirements and energy costs',
  },
  {
    icon: Cog,
    text: 'Building and site geothermal equipment energy source sizing and optimization',
  },
  {
    icon: Thermometer,
    text: 'Design considerations for geothermal heat pump system and loop configuration',
  },
  {
    icon: GitBranch,
    text: 'Design considerations for distribution pipelines and "supply/injection" sources',
  },
  {
    icon: Recycle,
    text: 'Full project life cycle analysis',
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

export default function FeasibilityStudiesPage() {
  usePageMeta({
    title: 'Feasibility Studies - Egg Geo',
    description:
      'High-performance thermal energy projects designed to solve the toughest challenges in heating and cooling. Detailed technical assessments and investment-level financial analyses.',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="relative min-h-[25vh] md:min-h-[45vh] flex flex-col items-center justify-center bg-cover bg-center -mt-20 pt-20 md:pt-20" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2000&q=80)` }}>
  <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-primary/80 to-navy/70 mix-blend-multiply" />
  <motion.div className="relative z-10 text-center p-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
      Feasibility Studies
    </h1>
    <p className="text-lg text-white/80">
      High-performance thermal energy solutions through rigorous technical and financial analysis
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
                Solving the Toughest Challenges in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan">
                  Thermal Energy
                </span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                High-performance thermal energy projects are designed to solve the toughest
                challenges in effectively adopting consistent and reliable energy for heating
                and cooling.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Effectively meeting the challenge means conducting detailed technical
                assessments of the geothermal systems required, and supporting investment
                level analyses of finance requirements.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-cyan text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-primary/30"
                >
                  Request a Study
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
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80"
                  alt="Thermal energy infrastructure"
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
                    <div className="text-2xl font-black text-navy">12</div>
                    <div className="text-gray-500 text-sm font-medium">Study Components</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Feasibility Study Content Grid ── */}
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
              What We Analyze
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
              Examples of Feasibility Study Content
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Each study is tailored to the project's unique requirements, delivering
              actionable insights across every critical dimension.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {feasibilityItems.map(({ icon: Icon, text }, index) => (
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
              Ready to Explore Your Project's Feasibility?
            </h2>
            <p className="text-navy/60 text-lg max-w-2xl mx-auto mb-10">
              Our team of experts will conduct a comprehensive feasibility study
              tailored to your project's unique requirements and goals.
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
                to="/technical-services/master-planning"
                className="inline-flex items-center gap-2 border-2 border-navy/20 hover:border-primary hover:text-primary text-navy font-bold px-10 py-4 rounded-full transition-all duration-300"
              >
                Next: Master Planning
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
