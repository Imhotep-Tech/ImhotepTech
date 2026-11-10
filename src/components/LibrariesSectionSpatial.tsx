'use client';

import React, { useState } from 'react';
import TiltCard, { TiltLayer } from './TiltCard';
import { studioLibraries, DeveloperLibrary } from '../data/studio-data';

export default function LibrariesSectionSpatial() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (command: string, id: string) => {
    navigator.clipboard.writeText(command);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  return (
    <section id="developer-tools" className="relative py-24 md:py-32 bg-[#060A10]/75 border-t border-b border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-mono font-medium text-[#D4AF37] mb-4">
            <span>OPEN SOURCE & TOOLING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Developer tools & packages we give back.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We build open-source utilities, PyPI libraries, and public APIs to speed up engineering workflows, bootstrap clean architectures, and solve common backend chores.
          </p>
        </div>

        {/* 3D Tilt Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {studioLibraries.map((lib) => (
            <LibraryCard
              key={lib.id}
              library={lib}
              isCopied={copiedId === lib.id}
              onCopy={handleCopy}
            />
          ))}
        </div>

        {/* Integration Assurance Footer */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#111A28]/80 backdrop-blur-xl border border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Battle-tested in real deployments
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Each package powers our own studio applications before being published on PyPI.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/Imhotep-Tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm border border-white/10 hover:border-[#D4AF37]/40 min-h-[44px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <span>View GitHub Organization</span>
            <svg className="w-4 h-4 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

function LibraryCard({
  library,
  isCopied,
  onCopy,
}: {
  library: DeveloperLibrary;
  isCopied: boolean;
  onCopy: (command: string, id: string) => void;
}) {
  return (
    <TiltCard
      maxTilt={8}
      glareOpacity={0.18}
      glareColor="rgba(212, 175, 55, 0.35)"
      className="h-full flex flex-col"
    >
      <div className="h-full flex flex-col justify-between rounded-2xl bg-[#111A28]/85 backdrop-blur-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 p-6 sm:p-7 shadow-[0_12px_35px_-10px_rgba(0,0,0,0.6),0_20px_45px_-15px_rgba(212,175,55,0.1)] transition-colors duration-300">
        
        <div>
          {/* Header & Category */}
          <TiltLayer depth={24} className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/15 px-3 py-1 rounded-full border border-[#D4AF37]/30">
              {library.category}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {library.date}
            </span>
          </TiltLayer>

          {/* Title */}
          <TiltLayer depth={28} className="mb-3">
            <h3 className="text-2xl font-bold font-mono text-white tracking-tight group-hover:text-[#D4AF37] transition-colors">
              {library.title}
            </h3>
          </TiltLayer>

          {/* Description */}
          <TiltLayer depth={22} className="mb-6">
            <p className="text-sm text-slate-300 leading-relaxed">
              {library.description}
            </p>
          </TiltLayer>

          {/* Interactive Click-to-Copy Shell Snippet */}
          <TiltLayer depth={30} className="mb-6">
            <div className="relative group/cmd flex items-center justify-between rounded-xl bg-[#060A10] border border-[#D4AF37]/20 px-4 py-3 font-mono text-xs">
              <div className="flex items-center gap-2 overflow-hidden text-slate-300 pr-2">
                <span className="text-[#D4AF37] font-bold select-none">$</span>
                <span className="truncate select-all text-slate-200">
                  {library.installCommand}
                </span>
              </div>
              <button
                type="button"
                onClick={() => onCopy(library.installCommand, library.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 text-[11px] font-sans font-medium transition-colors min-h-[36px] flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                aria-label={`Copy command for ${library.title}`}
              >
                {isCopied ? (
                  <>
                    <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </TiltLayer>

          {/* Tags */}
          <TiltLayer depth={20} className="flex flex-wrap gap-1.5 mb-6">
            {library.tags.map((tag, i) => (
              <span
                key={i}
                className={`text-[11px] font-mono px-2.5 py-1 rounded-md border ${
                  tag.color || 'text-slate-300 bg-white/5 border-white/10'
                }`}
              >
                {tag.name}
              </span>
            ))}
          </TiltLayer>
        </div>

        {/* Buttons (Minimum 44px Touch Targets) */}
        <TiltLayer depth={26} className="pt-4 border-t border-white/10 flex flex-wrap gap-2.5 mt-auto">
          {library.buttons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl min-h-[44px] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                idx === 0
                  ? 'bg-gradient-to-r from-[#F5D77F] to-[#D4AF37] text-[#1B1400] font-bold shadow-sm flex-1 hover:brightness-110'
                  : 'bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-[#D4AF37]/35'
              }`}
            >
              <span>{btn.text}</span>
              <svg className="w-3.5 h-3.5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </TiltLayer>

      </div>
    </TiltCard>
  );
}
