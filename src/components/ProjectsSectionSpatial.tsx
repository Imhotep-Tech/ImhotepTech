'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import TiltCard, { TiltLayer } from './TiltCard';
import { studioProjects, studioLibraries, StudioProject } from '../data/studio-data';

// Map developer libraries into StudioProject format for seamless unified display
const libraryProjects: StudioProject[] = studioLibraries.map((lib) => ({
  id: lib.id,
  title: lib.title,
  url: lib.buttons[0]?.url,
  date: lib.date,
  category: 'developer-tool' as const,
  categories: ['developer-tool' as const],
  description: lib.description,
  features: [
    `Quick install: ${lib.installCommand}`,
    'Zero third-party bloat with enterprise security and TLS defaults.',
    'Verified package published and maintained on PyPI / GitHub.'
  ],
  image: null,
  imageAlt: lib.title,
  priority: 'medium',
  featured: false,
  isLibrary: true,
  installCommand: lib.installCommand,
  tags: lib.tags,
  buttons: lib.buttons,
  metrics: lib.category,
}));

export default function ProjectsSectionSpatial() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Shipped Work' },
    { id: 'platform', label: 'Web Platforms & AI' },
    { id: 'client', label: 'Client & Enterprise Systems' },
    { id: 'mobile-pwa', label: 'Mobile & Offline PWAs' },
    { id: 'developer-tool', label: 'Developer Tools' },
  ];

  // Calculate live counts for each category
  const getCategoryCount = (id: string) => {
    if (id === 'all') return studioProjects.length;
    if (id === 'developer-tool') {
      const devProjectsCount = studioProjects.filter(
        (p) => p.categories?.includes('developer-tool') || p.category === 'developer-tool'
      ).length;
      return devProjectsCount + libraryProjects.length;
    }
    return studioProjects.filter(
      (p) => p.categories?.includes(id as any) || p.category === id
    ).length;
  };

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return studioProjects;
    }
    if (activeCategory === 'developer-tool') {
      const devProjects = studioProjects.filter(
        (p) => p.categories?.includes('developer-tool') || p.category === 'developer-tool'
      );
      return [...devProjects, ...libraryProjects];
    }
    return studioProjects.filter(
      (p) => p.categories?.includes(activeCategory as any) || p.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-mono font-medium text-[#D4AF37] mb-4">
              <span>PROVEN TRACK RECORD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Production systems, tested and shipped.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              From offline PWA game engines and high-volume ERP integrations to AI culinary companions and multi-branch client platforms.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="flex items-center gap-3 bg-[#111A28]/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#D4AF37]/20 text-sm font-mono text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              Showing <strong className="text-white">{filteredProjects.length}</strong>{' '}
              {activeCategory === 'developer-tool' ? 'tools & packages' : 'systems'}
            </span>
          </div>
        </div>

        {/* Filter Pills with Minimum 44px Touch Target */}
        <div
          className="flex flex-wrap gap-2.5 mb-12 relative z-10"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {categories.map((cat) => {
            const count = getCategoryCount(cat.id);
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`cursor-pointer px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 min-h-[44px] inline-flex items-center justify-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] select-none ${
                  isActive
                    ? 'bg-[#D4AF37] text-[#1B1400] font-bold shadow-[0_4px_20px_rgba(212,175,55,0.4)] border border-[#F5D77F]'
                    : 'bg-[#111A28]/80 hover:bg-[#162132] text-slate-300 hover:text-white border border-[#D4AF37]/20 hover:border-[#D4AF37]/40'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-mono font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#1B1400]/20 text-[#1B1400]'
                      : 'bg-white/10 text-slate-300'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3D Tilt Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: StudioProject }) {
  const [copied, setCopied] = useState(false);

  const handleCopyInstall = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <TiltCard
      maxTilt={9}
      glareOpacity={0.2}
      glareColor="rgba(212, 175, 55, 0.35)"
      className="h-full flex flex-col"
    >
      <div className="h-full flex flex-col justify-between rounded-2xl bg-[#111A28]/85 backdrop-blur-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 p-6 sm:p-7 shadow-[0_12px_35px_-10px_rgba(0,0,0,0.6),0_20px_45px_-15px_rgba(212,175,55,0.1)] transition-colors duration-300">
        
        <div>
          {/* Card Media Preview (if available) */}
          {project.image ? (
            <TiltLayer depth={20} className="relative w-full h-48 rounded-xl overflow-hidden bg-slate-900 border border-white/10 mb-6 group-hover:border-[#D4AF37]/30 transition-colors">
              <Image
                src={project.image}
                alt={project.imageAlt || project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1019] via-transparent to-transparent opacity-60" />
              {project.metrics && (
                <div className="absolute bottom-3 left-3 bg-[#0B1019]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-[#D4AF37] border border-[#D4AF37]/30">
                  {project.metrics}
                </div>
              )}
            </TiltLayer>
          ) : (
            <TiltLayer depth={20} className="relative w-full min-h-[112px] rounded-xl bg-gradient-to-br from-[#162132] via-[#111A28] to-[#0B1019] border border-[#D4AF37]/25 mb-6 p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider">
                  {project.isLibrary ? 'Developer Tool / Package' : 'Enterprise Client System'}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {project.date}
                </span>
              </div>
              
              {project.installCommand ? (
                <div className="mt-3 flex items-center justify-between gap-2 bg-[#0B1019]/90 px-3 py-1.5 rounded-lg border border-[#D4AF37]/30 font-mono text-xs text-[#D4AF37]">
                  <span className="truncate">{project.installCommand}</span>
                  <button
                    type="button"
                    onClick={() => handleCopyInstall(project.installCommand!)}
                    className="cursor-pointer text-[10px] text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded transition-colors flex-shrink-0"
                    title="Copy command"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              ) : (
                <div className="text-xs font-semibold text-white tracking-wide mt-2">
                  {project.metrics || 'Custom Architectural Build'}
                </div>
              )}
            </TiltLayer>
          )}

          {/* Title & Date */}
          <TiltLayer depth={26} className="mb-3">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#D4AF37] transition-colors">
                {project.title}
              </h3>
            </div>
            <p className="text-xs font-mono text-slate-400">
              Shipped: {project.date}
            </p>
          </TiltLayer>

          {/* Description */}
          <TiltLayer depth={24} className="mb-5">
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </TiltLayer>

          {/* Key Features Bullet List */}
          {project.features && project.features.length > 0 && (
            <TiltLayer depth={22} className="mb-6 space-y-1.5">
              {project.features.slice(0, 3).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                  <span className="text-[#D4AF37] font-bold mt-0.5">•</span>
                  <span className="leading-tight">{feat}</span>
                </div>
              ))}
            </TiltLayer>
          )}

          {/* Technology Badges */}
          <TiltLayer depth={28} className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-md border ${
                  tag.color || 'text-slate-300 bg-white/5 border-white/10'
                }`}
              >
                {tag.name}
              </span>
            ))}
          </TiltLayer>
        </div>

        {/* Action Buttons (Strictly Minimum 44px Touch Targets) */}
        <TiltLayer depth={30} className="pt-4 border-t border-white/10 flex flex-wrap gap-2.5 mt-auto">
          {project.buttons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl min-h-[44px] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                idx === 0
                  ? 'bg-gradient-to-r from-[#F5D77F] to-[#D4AF37] text-[#1B1400] font-bold shadow-sm flex-1 hover:brightness-110'
                  : 'bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-[#D4AF37]/30'
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
