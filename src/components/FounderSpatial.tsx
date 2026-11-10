'use client';

import React from 'react';
import Image from 'next/image';
import TiltCard, { TiltLayer } from './TiltCard';
import { founderData } from '../data/studio-data';

export default function FounderSpatial() {
  return (
    <section id="founder" className="relative py-24 md:py-32 bg-[#060A10]/75 border-t border-b border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Founder Portrait & Quick Card */}
          <div className="lg:col-span-5 flex justify-center">
            <TiltCard
              maxTilt={8}
              glareOpacity={0.2}
              glareColor="rgba(212, 175, 55, 0.35)"
              className="w-full max-w-md"
            >
              <div className="rounded-2xl bg-[#111A28]/85 backdrop-blur-2xl border border-[#D4AF37]/25 p-6 sm:p-7 shadow-[0_12px_35px_-10px_rgba(0,0,0,0.6),0_20px_45px_-15px_rgba(212,175,55,0.12)]">
                
                <TiltLayer depth={22} className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-900 border border-[#D4AF37]/30 mb-6">
                  <Image
                    src={founderData.image}
                    alt={founderData.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1019]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] font-semibold">
                      Founder & Lead Engineer
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {founderData.name}
                    </h3>
                  </div>
                </TiltLayer>

                <TiltLayer depth={26} className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-300 py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Founder Email:</span>
                    <a
                      href={`mailto:${founderData.email}`}
                      className="font-mono text-[#D4AF37] hover:underline hover:text-white transition-colors"
                    >
                      {founderData.email}
                    </a>
                  </div>
                  {founderData.website && (
                    <div className="flex items-center justify-between text-xs text-slate-300 py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Personal Site:</span>
                      <a
                        href={founderData.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[#D4AF37] hover:underline hover:text-white transition-colors"
                      >
                        kbassem.imhotep-tech.com
                      </a>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-xs text-slate-300 py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Education:</span>
                    <span className="font-semibold text-white">{founderData.university}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300 py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Headquarters:</span>
                    <span className="font-semibold text-white">{founderData.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300 py-1.5">
                    <span className="text-slate-400">Focus:</span>
                    <span className="font-semibold text-white">Full-Stack Web, Django, APIs</span>
                  </div>
                </TiltLayer>

                {/* Social Channels */}
                <TiltLayer depth={28} className="pt-5 mt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">Direct Profiles:</span>
                  <div className="flex items-center gap-2">
                    {founderData.socialLinks.map((s, idx) => (
                      <a
                        key={idx}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#D4AF37] border border-white/10 hover:border-[#D4AF37]/35 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                        aria-label={s.name}
                      >
                        <span className="text-xs font-semibold">{s.name}</span>
                      </a>
                    ))}
                  </div>
                </TiltLayer>

              </div>
            </TiltCard>
          </div>

          {/* Right Column: Founder Vision & Philosophy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-mono font-medium text-[#D4AF37] mb-4">
              <span>STUDIO ORIGINS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Engineering with direct founder accountability.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              {founderData.bio.map((paragraph, i) => (
                <p key={i}>
                  {paragraph}
                </p>
              ))}
              <p>
                At Imhotep Tech, every project has direct architect-level involvement from day one. You do not get passed off to layers of account managers or outsourced ticket queues — every schema migration, API boundary, and UI interaction is crafted with purpose.
              </p>
            </div>

            {/* Quick Principles Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="p-4 rounded-xl bg-[#111A28]/70 border border-[#D4AF37]/20">
                <span className="text-sm font-bold text-white block mb-1">
                  Accessible Enterprise Quality
                </span>
                <span className="text-xs text-slate-400">
                  Bringing modern architecture and clean testing to growing companies and regional businesses.
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#111A28]/70 border border-[#D4AF37]/20">
                <span className="text-sm font-bold text-white block mb-1">
                  Speed Without Technical Debt
                </span>
                <span className="text-xs text-slate-400">
                  Battle-tested templates like `dj-scaffold` ensure rapid time-to-market without compromising security.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
