'use client';

import React from 'react';
import Image from 'next/image';
import TiltCard, { TiltLayer } from './TiltCard';
import { studioConfig } from '../data/studio-data';

export default function HeroSpatial() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Human Grounded Storytelling & Studio Identity */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Studio Identity Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111A28] border border-[#D4AF37]/35 text-xs font-semibold text-[#D4AF37] shadow-sm mb-6">
              <div className="relative w-5 h-5 rounded-md overflow-hidden bg-[#162132] border border-[#D4AF37]/40 flex-shrink-0">
                <Image
                  src="/it-emblem.jpeg"
                  alt="Imhotep Tech Emblem"
                  fill
                  sizes="20px"
                  className="object-cover"
                />
              </div>
              <span>Imhotep Tech Studio • Cairo, Egypt</span>
            </div>

            {/* Clear Headline with Gold Gradient */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
              A software studio building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8E29E] via-[#D4AF37] to-[#E5C773]">
                custom web apps, APIs,
              </span>{' '}
              enterprise workflows, and developer tools.
            </h1>

            {/* Engineering Philosophy */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              <span className="text-[#D4AF37] font-semibold">“{studioConfig.philosophy}”</span>{' '}
              We engineer, ship, and support production-ready web platforms, mobile-first applications, and open-source packages directly from Cairo for teams worldwide.
            </p>

            {/* Clean Action Buttons (Strictly Min 44px Touch Targets) */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-[#1B1400] bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B88E28] hover:from-white hover:to-[#D4AF37] rounded-xl shadow-[0_12px_35px_-10px_rgba(212,175,55,0.5)] border border-[#F5D77F]/60 transition-all duration-200 hover:-translate-y-0.5 min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <span>Explore Shipped Work</span>
                <svg className="w-4 h-4 text-[#1B1400]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-200 hover:text-white bg-[#111A28]/80 hover:bg-[#162132] rounded-xl border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-200 min-h-[48px]"
              >
                <span>Discuss a Build</span>
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Verified Studio Numbers Grid (Real Projects, Real Packages, Years Since 2023) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-6 border-t border-white/10">
              {studioConfig.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-bold tracking-tight text-[#D4AF37] font-mono">
                    {stat.value}
                  </span>
                  <span className="text-sm font-semibold text-white mt-1">
                    {stat.label}
                  </span>
                  <span className="text-xs text-slate-400 mt-0.5 leading-snug">
                    {stat.detail}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Prominent Visible Logo & 3D Spatial Insignia Card */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Golden Ambient Glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/25 via-amber-600/15 to-blue-600/10 rounded-3xl blur-3xl opacity-75 pointer-events-none"
            />

            <TiltCard
              maxTilt={9}
              glareOpacity={0.25}
              glareColor="rgba(212, 175, 55, 0.45)"
              className="w-full max-w-md"
            >
              <div className="relative rounded-3xl bg-[#111A28]/90 backdrop-blur-2xl border-2 border-[#D4AF37]/35 p-6 sm:p-8 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),0_0_35px_rgba(212,175,55,0.2)]">
                
                {/* Top Bar with Status and Cairo Tag */}
                <TiltLayer depth={28} className="flex items-center justify-between pb-5 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
                    <span className="text-xs font-mono font-medium text-slate-200">
                      IMHOTEP STUDIO CORE
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-md border border-[#D4AF37]/25">
                    EST. 2023
                  </span>
                </TiltLayer>

                {/* PROMINENT VISIBLE LOGO EMBLEM */}
                <TiltLayer depth={36} className="py-7 flex flex-col items-center text-center">
                  <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden bg-[#162132] border-2 border-[#D4AF37]/60 shadow-[0_10px_30px_rgba(0,0,0,0.7),0_0_25px_rgba(212,175,55,0.3)] p-1 group-hover:border-[#D4AF37] transition-all duration-300">
                    <Image
                      src="/it-emblem.jpeg"
                      alt="Imhotep Tech Official Insignia"
                      fill
                      priority
                      sizes="(max-width: 768px) 176px, 192px"
                      className="object-cover rounded-xl"
                    />
                  </div>
                  
                  <div className="mt-5">
                    <h2 className="text-xl font-bold tracking-tight text-white">
                      Imhotep Tech
                    </h2>
                    <p className="text-xs font-mono text-[#D4AF37] mt-1">
                      Custom Software &amp; Engineering Lab
                    </p>
                  </div>
                </TiltLayer>

                {/* Shipped Systems & Studio Provenance */}
                <TiltLayer depth={24} className="pt-5 border-t border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Headquarters:</span>
                    <span className="font-semibold text-white">Cairo, Egypt</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Production Systems:</span>
                    <span className="font-semibold text-[#D4AF37]">10 Platforms • 4 Packages</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Flagships:</span>
                    <span className="text-slate-300">Dastet Al3ab • 7CS • Finance v8</span>
                  </div>
                </TiltLayer>

              </div>
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
}
