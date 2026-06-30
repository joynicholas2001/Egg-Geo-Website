import { useEffect, useState } from 'react';

export default function HeroSlider({ slides = [], title, subtitle }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return undefined;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (!slides.length) return null;

  return (
    <section className="hero-slider position-relative" aria-label="Featured content">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`hero-slide${index === active ? ' active' : ''}`}
          aria-hidden={index !== active}
        >
          <img src={slide.src} alt={slide.alt || title || 'Egg Geo'} className="hero-slide-img" />
          <div className="hero-overlay" />
        </div>
      ))}

      <div className="hero-content container">
        {title && <h1 className="hero-title display-4 fw-bold">{title}</h1>}
        {subtitle && <p className="hero-subtitle lead">{subtitle}</p>}
      </div>

      {slides.length > 1 && (
        <div className="hero-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`hero-dot${index === active ? ' active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
