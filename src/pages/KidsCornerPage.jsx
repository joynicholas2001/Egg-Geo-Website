import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import { usePageMeta } from '../hooks/usePageMeta';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: 'easeOut' },
  }),
};

// ─── Supplies ────────────────────────────────────────────────────────────────
const supplies = [
  { emoji: '❄️', label: 'A Freezer', detail: '(5° F)' },
  { emoji: '⏱️', label: 'A Stopwatch', detail: '' },
  { emoji: '🪣', label: 'A Bucket of Ice', detail: '(32° F)' },
  { emoji: '💧', label: '2 Bottles of Water', detail: '' },
  { emoji: '🌡️', label: 'A Thermometer', detail: '' },
];

// ─── Steps ───────────────────────────────────────────────────────────────────
const steps = [
  { number: 1, text: 'Place a bottle of water in freezer and another one in ice-water' },
  { number: 2, text: 'Set the stopwatch to 10 minutes' },
];

// ─── Geo-thermal word meanings ────────────────────────────────────────────────
const geoTerms = [
  { word: 'GEO',     color: '#5aab45', meaning: 'Earth',       emoji: '🌍' },
  { word: 'THERMAL', color: '#D94B3D', meaning: 'Temperature', emoji: '🌡️' },
];

export default function KidsCornerPage() {
  usePageMeta({
    title: 'Kids Corner – Egg Geo',
    description:
      'Fun with geothermal science for kids! Explore experiments, activities, and educational resources from Egg Geo.',
  });

  return (
    <>
      {/* ── Banner ─────────────────────────────────────────────────────────── */}
      <PageBanner
        title="Kids Corner"
        subtitle="Discover the fun side of geothermal energy!"
      />

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1 – What is Geothermal? (chalkboard explainer)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20" style={{ background: '#e8f5e2' }} id="what-is-geothermal">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">

          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-2 text-center"
            style={{ color: '#0B1F3A' }}
          >
            What is Geothermal?
          </motion.h2>
          <motion.div
            variants={fadeUp} custom={0.4} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="w-16 h-1 rounded-full mx-auto mb-12"
            style={{ background: '#5aab45' }}
          />

          {/* ── Chalkboard card ──────────────────────────────────────────── */}
          <motion.div
            variants={fadeUp} custom={0.8} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{ border: '10px solid #c8842a' }}
            whileHover={{ scale: 1.01, boxShadow: '0 28px 60px rgba(0,0,0,0.22)' }}
            transition={{ duration: 0.35 }}
          >
            {/* Chalkboard background */}
            <div
              className="relative flex flex-col md:flex-row"
              style={{ background: 'linear-gradient(180deg,#f5f5dc 0%,#f5f5dc 30%,#3d5a3e 30%,#3d5a3e 100%)' }}
            >
              {/* ── Top white area: title ────────────────────────────────── */}
              <div className="w-full absolute top-0 left-0 right-0 h-[30%] flex items-center justify-center z-10">
                <h3 className="text-5xl md:text-7xl font-black tracking-widest select-none" style={{ fontFamily: 'Georgia, serif' }}>
                  <span style={{ color: '#5aab45' }}>GEO</span>
                  <span style={{ color: '#D94B3D' }}>THERMAL</span>
                </h3>
              </div>

              {/* ── Dark chalkboard body ─────────────────────────────────── */}
              <div className="w-full pt-[30%] px-6 pb-8 flex flex-col md:flex-row gap-6 items-start">

                {/* House diagram */}
                <div className="flex-1 flex flex-col items-center gap-2 mt-4">
                  <p className="text-xs text-gray-300 self-start ml-4 font-medium tracking-wider uppercase">House</p>
                  <div className="relative flex flex-col items-center">
                    {/* House icon */}
                    <div className="text-6xl mb-1">🏠</div>
                    <p className="text-xs text-primary font-semibold tracking-wide">← COLD UP HERE 😊</p>
                    {/* Pipe line */}
                    <div className="w-1 h-12 rounded" style={{ background: '#ef4444' }} />
                    <p className="text-xs text-gray-400 font-medium tracking-wider">← PIPES</p>
                    <div className="flex gap-3">
                      <div className="w-1 h-10 rounded" style={{ background: '#ef4444' }} />
                      <div className="w-1 h-10 rounded" style={{ background: '#3b82f6' }} />
                    </div>
                    {/* Underground block */}
                    <div className="flex flex-col items-center rounded-xl px-6 py-3" style={{ background: 'rgba(255,255,255,0.08)', border: '1px dashed rgba(255,255,255,0.2)' }}>
                      <p className="text-xs text-orange-300 font-semibold tracking-wide">WARM DOWN HERE 😊</p>
                    </div>
                  </div>
                </div>

                {/* GEO = THERMAL = definitions */}
                <div className="flex-1 flex flex-col justify-center gap-5 mt-6">
                  {geoTerms.map((term) => (
                    <motion.div
                      key={term.word}
                      className="flex items-center gap-4 group cursor-default"
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-3xl md:text-4xl font-black" style={{ color: term.color, fontFamily: 'Georgia, serif' }}>
                        {term.word}
                      </span>
                      <span className="text-2xl text-white font-bold">=</span>
                      <span className="text-3xl">{term.emoji}</span>
                      <span className="text-white text-sm font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
                        ({term.meaning})
                      </span>
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>
          </motion.div>

          {/* ── Happy House quote ────────────────────────────────────────── */}
          <motion.div
            variants={fadeUp} custom={1.4} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-6 bg-white rounded-3xl p-6 md:p-8 shadow-md border border-green-100"
            whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(90,171,69,0.15)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-7xl shrink-0 select-none">🏡</div>
            <div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                <span className="font-bold text-navy">"It's called Geo-thermal,"</span>{' '}
                said the <span className="font-bold" style={{ color: '#5aab45' }}>happy house.</span>
              </p>
              <p className="text-gray-600 mt-2 text-base md:text-lg leading-relaxed">
                <span className="font-semibold" style={{ color: '#5aab45' }}>'Geo'</span> means Earth, and{' '}
                <span className="font-semibold" style={{ color: '#D94B3D' }}>'thermal'</span> means temperature.{' '}
                It's the best way to heat and cool your house.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2 – Fun with Geothermal (experiment)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white" id="fun-with-geothermal">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">

          {/* Section Heading */}
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ color: '#5aab45' }}
          >
            Fun with geothermal
          </motion.h2>
          <motion.div
            variants={fadeUp} custom={0.5} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="w-16 h-1 rounded-full mb-10"
            style={{ background: '#5aab45' }}
          />

          {/* ── Intro comic + Supplies ───────────────────────────────────── */}
          <motion.div
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-start mb-14"
          >
            {/* Speech-bubble intro card with hover */}
            <motion.div
              className="flex-1 bg-amber-50 border border-amber-200 rounded-3xl p-6 md:p-8 shadow-sm cursor-default"
              whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(251,191,36,0.2)', borderColor: '#f59e0b' }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl shrink-0">🧒</div>
                <div className="relative bg-white rounded-2xl px-5 py-3 shadow-sm border border-amber-100 text-sm md:text-base text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-navy">
                    "Let's have some fun with science to know more about geothermal heating and cooling!"
                  </span>
                  <span className="absolute -left-3 top-4 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white" />
                </div>
              </div>
              <div className="flex items-start gap-4 mt-4">
                <div className="text-5xl shrink-0 ml-8">👧</div>
                <div className="relative bg-white rounded-2xl px-5 py-3 shadow-sm border border-amber-100 text-sm md:text-base text-gray-700 leading-relaxed">
                  <span className="font-semibold text-navy">"Here's what we'll need…"</span>
                  <span className="absolute -left-3 top-4 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white" />
                </div>
              </div>
            </motion.div>

            {/* Supplies Grid with per-card hover */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-navy mb-5">What you'll need…</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {supplies.map((item, i) => (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    custom={i * 0.1 + 1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ y: -6, scale: 1.05, boxShadow: '0 12px 32px rgba(90,171,69,0.18)' }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col items-center gap-2 bg-yellow-50 border border-yellow-100 rounded-2xl p-4 shadow-sm cursor-default"
                  >
                    <span className="text-4xl">{item.emoji}</span>
                    <span className="text-sm font-semibold text-navy text-center leading-tight">
                      {item.label}
                    </span>
                    {item.detail && (
                      <span className="text-xs text-gray-500 text-center">{item.detail}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* "What You Do" heading */}
          <motion.p
            variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center italic text-lg font-semibold mb-10"
            style={{ color: '#5aab45' }}
          >
            What You Do…
          </motion.p>

          {/* Steps with hover */}
          <div className="flex flex-col md:flex-row gap-6 mb-14 items-stretch">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                custom={i * 0.15 + 2.2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,102,204,0.14)', scale: 1.02 }}
                transition={{ duration: 0.28 }}
                className="flex-1 flex items-start gap-5 bg-light rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm cursor-default"
              >
                <div
                  className="w-11 h-11 rounded-full shrink-0 flex items-center justify-center text-white font-bold text-lg shadow"
                  style={{ background: 'linear-gradient(135deg,#0066CC,#00AEEF)' }}
                >
                  {step.number}
                </div>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg font-medium pt-1">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Guessing Game callout with hover */}
          <motion.div
            variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: '0 24px 60px rgba(0,30,80,0.3)' }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl p-8 md:p-10 text-center shadow-lg cursor-default"
            style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #0066CC 100%)' }}
          >
            <p className="text-white text-xl md:text-2xl font-bold leading-relaxed">
              🤔 Let's have a little guessing game:
            </p>
            <p className="text-primary text-lg md:text-xl mt-3 font-medium">
              Which one do you think will be cooler?{' '}
              <span className="text-yellow-300">(No prize for guessing!)</span>
            </p>
          </motion.div>

          {/* Experiment images with hover */}
          <motion.div
            variants={fadeUp} custom={3.5} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              'https://egggeo.com/wp-content/uploads/2023/02/Experiment1-1024x819.jpg',
              'https://egggeo.com/wp-content/uploads/2023/02/Experiment2-1024x819.jpg',
              'https://egggeo.com/wp-content/uploads/2023/02/Experiment3-1024x819.jpg',
            ].map((src, i) => (
              <motion.div
                key={src}
                whileHover={{ y: -8, scale: 1.03, boxShadow: '0 20px 50px rgba(0,0,0,0.18)' }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Geothermal experiment step ${i + 1}`}
                  className="w-full h-52 object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
}
