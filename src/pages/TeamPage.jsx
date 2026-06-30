import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import TeamCard from '../components/TeamCard';
import team from '../data/team.json';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function TeamPage() {
  usePageMeta({
    title: 'Our Team – Egg Geo',
    description: 'Meet the Egg Geo team of geothermal and thermal energy experts who are defining the future of thermal energy networks.',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ── Hero Banner ── */}
      <section
        className="relative min-h-[15vh] md:min-h-[45vh] flex flex-col items-center justify-center bg-cover bg-center -mt-20 pt-20 md:pt-20"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-primary/80 to-navy/70 mix-blend-multiply" />
        <motion.div
          className="relative z-10 text-center px-6 py-4 md:py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-white/10 text-white/80 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-5 border border-white/20">
            Company
          </span>
          <h1
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
          >
            Our Team
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Experts in thermal energy networks, geothermal exchange, and sustainable energy consulting — united by a passion for a cleaner future.
          </p>
        </motion.div>
        <motion.div
          className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
          animate={{ backgroundPosition: ['0px 0px', '100px 100px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </section>

      {/* ── Team Grid ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-4">
              Leadership & Experts
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-navy mb-3"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
            >
              Meet the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan">
                Egg Geo Team
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Our multidisciplinary team brings together decades of geothermal, engineering, finance, and communications expertise.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-10"
          >
            {team.map((member) => (
              <motion.div key={member.name} variants={itemVariants}>
                <TeamCard {...member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-light border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-4">
              Interested in joining our team?
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
              We're always looking for passionate people who think big about geothermal energy.
            </p>
            <a
              href="/company/careers"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-primary/20"
            >
              View Careers
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
