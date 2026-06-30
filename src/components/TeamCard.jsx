import { useState } from 'react';

export default function TeamCard({ name, role, image }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="relative w-full rounded-2xl overflow-hidden shadow-md cursor-pointer border border-gray-100"
      style={{ aspectRatio: '4/5' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(v => !v)}
      aria-label={`${name}, ${role}`}
    >
      {/* Background Image */}
      <img
        src={image || '/images/wp-content_uploads_2022_02_people-blank.jpg'}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover object-top"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top center',
          transform: hovered ? 'scale(1.07)' : 'scale(1)',
          transition: 'transform 0.6s ease',
        }}
        loading="lazy"
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(17,24,39,0.90) 0%, rgba(22,163,74,0.20) 60%, transparent 100%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.35s ease',
        }}
      />

      {/* Name & Role */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 p-5"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.35s ease, transform 0.35s ease',
        }}
      >
        <h3 className="text-white font-bold text-lg md:text-xl leading-tight mb-0.5" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
          {name}
        </h3>
        <p className="font-semibold text-sm" style={{ color: '#22C55E', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
          {role}
        </p>
      </div>
    </article>
  );
}
