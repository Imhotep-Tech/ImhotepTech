import React, { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';
import useScrollReveal from '../hooks/useScrollReveal';

const normalizeToCategory = (name) => {
  const s = name.toLowerCase();
  if (s.includes('django')) return 'Django';
  if (s.includes('flask')) return 'Flask';
  if (s.includes('react native')) return 'React Native';
  if (s.includes('react')) return 'React';
  if (s.includes('tailwind')) return 'Tailwind CSS';
  if (s.includes('pwa')) return 'PWA';
  if (s.includes('docker')) return 'Docker';
  if (s.includes('ai')) return 'AI';
  if (s.includes('postgres')) return 'PostgreSQL';
  return name.trim();
};

const FILTERS = [
  { key: 'all', label: 'All', icon: 'fas fa-th-large' },
  { key: 'Featured', label: 'Featured', icon: 'fas fa-star' },
  { key: 'Django', label: 'Django', icon: 'fas fa-leaf' },
  { key: 'React', label: 'React', icon: 'fab fa-react' },
  { key: 'React Native', label: 'Mobile', icon: 'fas fa-mobile-screen-button' },
  { key: 'Flask', label: 'Flask', icon: 'fas fa-flask' },
  { key: 'AI', label: 'AI', icon: 'fas fa-brain' },
  { key: 'Libraries / APIs', label: 'Libraries & APIs', icon: 'fas fa-book' },
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const revealRef = useScrollReveal();

  const librariesCount = useMemo(
    () => projects.filter((p) => p.isLibrary).length,
    []
  );

  const filteredProjects = useMemo(() => {
    const byFilter =
      activeFilter === 'all'
        ? projects
        : activeFilter === 'Featured'
        ? projects.filter((p) => p.featured)
        : activeFilter === 'Libraries / APIs'
        ? projects.filter((p) => p.isLibrary)
        : projects.filter((project) =>
            project.tags.some(
              (tag) => normalizeToCategory(tag.name) === activeFilter
            )
          );

    const priorityRank = { high: 3, medium: 2, low: 1 };
    const parseDate = (d) => new Date(d).getTime() || 0;
    return [...byFilter].sort((a, b) => {
      const f = (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      if (f !== 0) return f;
      const p = (priorityRank[b.priority] || 0) - (priorityRank[a.priority] || 0);
      if (p !== 0) return p;
      return parseDate(b.date) - parseDate(a.date);
    });
  }, [activeFilter]);

  return (
    <section id="work" ref={revealRef} className="relative border-b border-line/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span data-reveal="fade" className="eyebrow">Selected work</span>
            <h2
              data-reveal="up"
              data-reveal-delay="1"
              className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-ink"
            >
              What we've shipped.
            </h2>
          </div>

          <div
            data-reveal="fade"
            data-reveal-delay="2"
            className="flex items-center gap-2 text-sm text-muted"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/60 px-3 py-1.5">
              <i className="fas fa-folder-open text-secondary text-xs" />
              <span className="font-medium text-ink">{filteredProjects.length}</span>
              <span>project{filteredProjects.length !== 1 ? 's' : ''}</span>
            </span>
            {activeFilter !== 'all' && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/60 px-3 py-1.5">
                <i className="fas fa-filter text-secondary text-xs" />
                <span>{activeFilter}</span>
              </span>
            )}
          </div>
        </div>

        {/* Filters */}
        <div data-reveal="up" data-reveal-delay="2" className="mb-10 -mx-4 sm:mx-0 overflow-x-auto">
          <div className="flex gap-2 px-4 sm:px-0 min-w-max sm:flex-wrap">
            {FILTERS.map((f) => {
              const active = activeFilter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${
                    active
                      ? 'border-secondary/70 bg-secondary text-primary'
                      : 'border-line bg-surface/50 text-muted hover:text-ink hover:border-line/0 hover:bg-surface'
                  }`}
                  aria-pressed={active}
                >
                  <i className={`${f.icon} text-[11px]`} />
                  <span>{f.label}</span>
                  {f.key === 'Libraries / APIs' && (
                    <span
                      className={`ml-1 inline-flex items-center justify-center rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${
                        active
                          ? 'bg-primary/15 text-primary'
                          : 'bg-secondary/10 text-secondary'
                      }`}
                    >
                      {librariesCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={`${project.title}-${activeFilter}`}
                data-reveal="up"
                data-reveal-delay={Math.min(index + 1, 6)}
              >
                <ProjectCard
                  project={project}
                  index={index}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-line bg-surface/40 p-12 text-center">
            <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface-2 text-muted">
              <i className="fas fa-search" />
            </div>
            <h3 className="text-lg font-semibold text-ink">
              No projects match "{activeFilter}"
            </h3>
            <p className="mt-1.5 text-sm text-muted">
              Try a different category or view everything.
            </p>
            <button
              onClick={() => setActiveFilter('all')}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-secondary/90 transition-colors"
            >
              <i className="fas fa-rotate-left text-xs" />
              Show all projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
