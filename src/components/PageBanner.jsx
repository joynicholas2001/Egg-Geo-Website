import { motion } from 'framer-motion';

export default function PageBanner({ title, subtitle, image, size = 'default' }) {
  // Use provided image or fallback to a default professional background
  const bgImage = image || "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80";

  const heightClass = size === 'small' 
    ? 'min-h-[20vh] md:min-h-[30vh]' 
    : 'min-h-[25vh] md:min-h-[45vh]';

  return (
    <section
      className={`relative ${heightClass} flex flex-col items-center justify-center bg-cover bg-center -mt-20 pt-20 md:pt-20`}
      style={{ backgroundImage: `url(${bgImage})` }}
      aria-labelledby="page-banner-title"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-secondary/70" />

      <motion.div
        className="relative z-10 text-center p-8 w-full max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h1 id="page-banner-title" className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}
