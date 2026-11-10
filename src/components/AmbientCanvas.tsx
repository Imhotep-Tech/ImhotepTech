'use client';

import React, { useEffect, useState } from 'react';

const GLYPHS = [
  { text: '{ }', top: '15%', left: '10%', delay: '0s', size: 'text-2xl', depth: 15 },
  { text: '</>', top: '22%', right: '12%', delay: '1.5s', size: 'text-xl', depth: 25 },
  { text: 'λ', top: '48%', left: '7%', delay: '2.5s', size: 'text-3xl', depth: 20 },
  { text: '01', top: '65%', right: '8%', delay: '3.5s', size: 'text-sm font-mono', depth: 30 },
  { text: '//', top: '78%', left: '14%', delay: '0.8s', size: 'text-2xl', depth: 18 },
  { text: 'Δ', top: '88%', right: '15%', delay: '2s', size: 'text-2xl', depth: 22 },
];

export default function AmbientCanvas() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;
        setMouseOffset({ x, y });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
    >
      {/* 1. Subtle Pharaoh Gold Grid with Center Radial Mask */}
      <div
        className="absolute inset-0 bg-grid-lines bg-grid-sm opacity-30"
        style={{
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        }}
      />

      {/* 2. Weightless Diffused Floating Gradient Orbs */}
      {/* Orb A: Pharaoh Gold (Top-Left) */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[140px] opacity-30 animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.45) 0%, rgba(184, 142, 40, 0.15) 50%, transparent 75%)',
          transform: reducedMotion
            ? 'none'
            : `translate3d(${mouseOffset.x * 20}px, ${mouseOffset.y * 20}px, 0)`,
          transition: 'transform 0.4s ease-out',
        }}
      />

      {/* Orb B: Deep Midnight Navy / Pharaoh Blue (Center-Right) */}
      <div
        className="absolute top-[35%] -right-40 w-[550px] h-[550px] rounded-full blur-[150px] opacity-35 animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, rgba(22, 33, 50, 0.8) 0%, rgba(14, 21, 32, 0.3) 50%, transparent 75%)',
          animationDelay: '2.5s',
          transform: reducedMotion
            ? 'none'
            : `translate3d(${mouseOffset.x * -25}px, ${mouseOffset.y * -25}px, 0)`,
          transition: 'transform 0.5s ease-out',
        }}
      />

      {/* Orb C: Warm Sun Gold / Amber (Bottom-Center) */}
      <div
        className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[160px] opacity-20 animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, rgba(245, 215, 127, 0.35) 0%, rgba(184, 142, 40, 0.1) 50%, transparent 80%)',
          animationDelay: '4.5s',
          transform: reducedMotion
            ? 'none'
            : `translate3d(${mouseOffset.x * 15}px, ${mouseOffset.y * 15}px, 0)`,
          transition: 'transform 0.6s ease-out',
        }}
      />

      {/* 3. Faint Floating Geometric & Code Glyphs with Gold Tint & Parallax */}
      {!reducedMotion &&
        GLYPHS.map((glyph, index) => {
          const parallaxX = mouseOffset.x * glyph.depth;
          const parallaxY = mouseOffset.y * glyph.depth;

          return (
            <div
              key={index}
              className={`absolute select-none font-mono text-[#D4AF37]/20 font-light transition-transform duration-300 ease-out animate-float-slow ${glyph.size}`}
              style={{
                top: glyph.top,
                left: glyph.left,
                right: glyph.right,
                animationDelay: glyph.delay,
                transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)`,
              }}
            >
              {glyph.text}
            </div>
          );
        })}
    </div>
  );
}
