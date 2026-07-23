import React, { useState, useMemo } from 'react';
import projects from '../data/projects';
import { libraries, integrationSteps } from '../data/libraries';
import ProjectCard from './ProjectCard';

const Icon = ({ name, className = "" }) => (
  <i className={`${name} ${className}`} aria-hidden="true" />
);

const ProjectsSection = ({ handleMouseMove, handleCopyCommand, copiedItem }) => {
  const [filter, setFilter] = useState('all'); // 'all' | 'apps' | 'libraries'

  // Sort projects newest first
  const sortedProjects = useMemo(() => {
    const parseDate = (d) => (d ? new Date(d).getTime() : 0);
    return [...projects].sort((a, b) => parseDate(b.date) - parseDate(a.date));
  }, []);

  // Filtered list
  const filteredProjects = useMemo(() => {
    if (filter === 'apps') {
      return sortedProjects.filter(p => !p.isLibrary);
    }
    if (filter === 'libraries') {
      return sortedProjects.filter(p => p.isLibrary);
    }
    return sortedProjects;
  }, [filter, sortedProjects]);

  return (
    <section id="projects" className="border-t border-slate-200/60 dark:border-slate-800/40 py-24 px-4 sm:px-6 bg-slate-100/50 dark:bg-slate-950/30 relative">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-10 w-96 h-96 rounded-full bg-amber-500/[0.03] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 rounded-full bg-cyan-500/[0.03] blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 animate-fade-in-up">
          <div className="max-w-3xl">
            <span className="eyebrow">
              <Icon name="fas fa-cubes text-amber-500" /> Engineering Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mt-3">
              Selected Work &amp; Libraries
            </h2>
            <p className="mt-4 text-slate-650 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore the complete directory of production web applications, open-source packages, and custom REST APIs built by Imhotep Tech.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-200/80 dark:bg-slate-900/80 border border-slate-300/60 dark:border-slate-800/60 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                filter === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Work ({projects.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('apps')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                filter === 'apps'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Web Apps ({projects.filter(p => !p.isLibrary).length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('libraries')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                filter === 'libraries'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Libraries ({projects.filter(p => p.isLibrary).length})
            </button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
            const libData = project.isLibrary
              ? libraries.find(l => l.title.toLowerCase() === project.title.toLowerCase())
              : null;

            return (
              <ProjectCard
                key={`${project.title}-${idx}`}
                project={project}
                libData={libData}
                onCopyCommand={handleCopyCommand}
                copiedItem={copiedItem}
                handleMouseMove={handleMouseMove}
              />
            );
          })}
        </div>

        {/* Integration Steps Bento Box */}
        {integrationSteps && integrationSteps.length > 0 && (
          <div className="mt-16 glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/60 dark:border-white/10">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
                  Workflow
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  Integration Roadmap for Libraries &amp; APIs
                </h3>
              </div>
              <Icon name="fas fa-terminal text-2xl text-emerald-500/50 hidden sm:block" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {integrationSteps.map((stepItem) => (
                <div
                  key={stepItem.step}
                  className="rounded-xl border border-slate-200/50 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/40 p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-sm border border-emerald-500/20">
                        0{stepItem.step}
                      </span>
                      <Icon name={stepItem.icon} className="text-slate-400 dark:text-slate-500 text-sm" />
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">
                      {stepItem.title}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {stepItem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectsSection;
