'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Maximum tilt angle in degrees, default 10
  glareOpacity?: number; // Maximum glare opacity, default 0.25
  glareColor?: string; // Glare color tint
  onClick?: () => void;
  as?: keyof HTMLElementTagNameMap;
}

export default function TiltCard({
  children,
  className = '',
  maxTilt = 8,
  glareOpacity = 0.2,
  glareColor = 'rgba(255, 255, 255, 0.4)',
  onClick,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setCoords({
      x: Math.min(Math.max(x, 0), 1),
      y: Math.min(Math.max(y, 0), 1),
    });
  }, [reducedMotion]);

  const handleMouseEnter = () => {
    if (!reducedMotion) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smoothly spring back to flat resting state
    setCoords({ x: 0.5, y: 0.5 });
  };

  // Calculate tilt angles:
  // Mouse near top (y < 0.5) tilts card back (positive rotateX)
  // Mouse near bottom (y > 0.5) tilts card forward (negative rotateX)
  // Mouse near right (x > 0.5) tilts card right (positive rotateY)
  // Mouse near left (x < 0.5) tilts card left (negative rotateY)
  const rotateX = reducedMotion || !isHovered ? 0 : (0.5 - coords.y) * (maxTilt * 2);
  const rotateY = reducedMotion || !isHovered ? 0 : (coords.x - 0.5) * (maxTilt * 2);

  const glareX = coords.x * 100;
  const glareY = coords.y * 100;

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative group ${className}`}
      style={{
        perspective: '1000px',
      }}
    >
      <div
        className="relative w-full h-full rounded-2xl transition-transform duration-300 ease-out will-change-transform"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`,
          transition: isHovered
            ? 'transform 0.1s cubic-bezier(0.2, 0, 0, 1)'
            : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Subtle Specular Glare Overlay */}
        {!reducedMotion && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-30 rounded-2xl transition-opacity duration-500 ease-out"
            style={{
              opacity: isHovered ? glareOpacity : 0,
              background: `radial-gradient(circle 320px at ${glareX}% ${glareY}%, ${glareColor}, transparent 70%)`,
            }}
          />
        )}

        {/* Card Content with 3D child preservation */}
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

// Child helper component for items layered along the Z-axis
export function TiltLayer({
  children,
  depth = 24,
  className = '',
}: {
  children: React.ReactNode;
  depth?: number;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        transform: `translateZ(${depth}px)`,
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  );
}
