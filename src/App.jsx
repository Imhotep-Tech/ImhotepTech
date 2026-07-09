import React, { useState, useEffect, useMemo } from 'react';
import projects from './data/projects';

// Custom icons using Font Awesome 6 (already loaded in index.html)
const Icon = ({ name, className = "" }) => (
  <i className={`${name} ${className}`} aria-hidden="true" />
);

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return systemPrefersDark ? 'dark' : 'light';
    }
    return 'dark'; // Fallback
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Filter and sort the full list of projects
  const sortedProjects = useMemo(() => {
    const filtered = projects.filter(project => {
      if (activeFilter === 'featured') return project.featured;
      if (activeFilter === 'applications') return !project.isLibrary;
      if (activeFilter === 'libraries') return project.isLibrary;
      return true; // 'all'
    });

    const priorityRank = { high: 3, medium: 2, low: 1 };
    const parseDate = (d) => d ? new Date(d).getTime() : 0;

    return [...filtered].sort((a, b) => {
      // Featured projects first
      const f = (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      if (f !== 0) return f;
      // Then by priority rank
      const p = (priorityRank[b.priority] || 0) - (priorityRank[a.priority] || 0);
      if (p !== 0) return p;
      // Then by date (newest first)
      return parseDate(b.date) - parseDate(a.date);
    });
  }, [activeFilter]);

  // Compute counts for filter pills
  const counts = useMemo(() => {
    return {
      all: projects.length,
      featured: projects.filter(p => p.featured).length,
      applications: projects.filter(p => !p.isLibrary).length,
      libraries: projects.filter(p => p.isLibrary).length,
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 font-sans antialiased transition-colors duration-200">
      
      {/* 1. NAVIGATION BAR */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200/60 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, 'hero')}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <img
              src="/it.png"
              alt="Imhotep Tech Logo"
              className="w-7 h-7 object-contain rounded"
            />
            <span className="font-semibold text-base tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-[#ffdd57] transition-colors duration-200">
              Imhotep Tech
            </span>
          </a>

          {/* Desktop Navigation Anchors */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
            >
              Services
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleNavClick(e, 'projects')}
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
            >
              Projects
            </a>
            <a 
              href="#trust" 
              onClick={(e) => handleNavClick(e, 'trust')}
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
            >
              Why Imhotep
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              type="button"
              className="p-2 w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 hover:text-zinc-900 dark:hover:text-white transition-all duration-200"
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Icon name="fas fa-sun text-sm text-[#ffdd57]" />
              ) : (
                <Icon name="fas fa-moon text-sm text-zinc-700" />
              )}
            </button>

            {/* Sticky Nav Action CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="hidden sm:inline-flex text-xs font-semibold px-4 py-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors duration-200"
            >
              Start Project
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              type="button"
              className="p-2 w-9 h-9 md:hidden flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <Icon name="fas fa-times" />
              ) : (
                <Icon name="fas fa-bars" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-6 py-4 flex flex-col gap-4 animate-fade-in">
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white py-1"
            >
              Services
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleNavClick(e, 'projects')}
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white py-1"
            >
              Projects
            </a>
            <a 
              href="#trust" 
              onClick={(e) => handleNavClick(e, 'trust')}
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white py-1"
            >
              Why Imhotep
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white py-1"
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="w-full text-center text-sm font-semibold py-2.5 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors duration-200 mt-2"
            >
              Start Project
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section id="hero" className="relative overflow-hidden pt-24 pb-20 md:pt-36 md:pb-32 px-6">
        {/* Subtle grid backdrop */}
        <div aria-hidden className="absolute inset-0 bg-dotgrid opacity-[0.15] dark:opacity-[0.25]" />
        
        {/* Floating Orb decoration */}
        <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-amber-500/[0.04] dark:bg-[#ffdd57]/[0.03] blur-[100px] hero-orb" />

        <div className="max-w-4xl mx-auto relative z-10 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-600/10 dark:border-[#ffdd57]/10 bg-amber-600/[0.04] dark:bg-[#ffdd57]/[0.03] text-amber-700 dark:text-[#ffdd57] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-[#ffdd57] animate-pulse" />
            <span className="text-xs font-mono tracking-wider uppercase font-semibold">Enterprise Software Studio</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tightest leading-[1.08] text-zinc-900 dark:text-white">
            Engineered for Scale.<br />
            <span className="text-zinc-400 dark:text-zinc-500">Built for Impact.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            We design and construct high-performance web systems, custom mobile frameworks, and resilient cloud architectures for enterprise business environments.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-semibold text-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors duration-250 shadow-sm"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold text-sm hover:bg-zinc-100 dark:hover:bg-zinc-900/40 transition-colors duration-250"
            >
              Explore Work
            </a>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES */}
      <section id="services" className="border-t border-zinc-200/60 dark:border-zinc-800/60 py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16 md:max-w-2xl">
            <span className="text-xs font-mono font-semibold tracking-widest text-amber-600 dark:text-[#ffdd57] uppercase">Engineering Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mt-3">
              Core Services
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              We operate at the intersection of complex software development, infrastructure design, and B2B business process automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Service 1 */}
            <div className="group border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900/20 p-8 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-lg flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200">
                  <Icon name="fas fa-code text-base" />
                </span>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Full-Stack Engineering</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                Creating high-performance modern web platforms. We establish resilient database models and build fast, responsive user interfaces with robust authorization and secure APIs.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React / Next.js', 'Django', 'Node.js', 'REST APIs', 'PostgreSQL'].map(tag => (
                  <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-mono border border-zinc-200 bg-zinc-50 text-zinc-600 dark:border-zinc-850 dark:bg-zinc-900/60 dark:text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Service 2 */}
            <div className="group border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900/20 p-8 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-lg flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200">
                  <Icon name="fas fa-mobile-alt text-base" />
                </span>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Mobile Engineering</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                Delivering high-fidelity native and Progressive Web Applications. Optimized for low-bandwidth scenarios, containing clean state synchronization and offline capability.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React Native', 'iOS & Android', 'PWAs', 'Offline-First Data', 'Secure Storage'].map(tag => (
                  <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-mono border border-zinc-200 bg-zinc-50 text-zinc-600 dark:border-zinc-850 dark:bg-zinc-900/60 dark:text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Service 3 */}
            <div className="group border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900/20 p-8 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-lg flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200">
                  <Icon name="fas fa-server text-base" />
                </span>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Enterprise Infrastructure</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                Constructing secure networks, production-grade cloud server farms, and containerized deployments. Focused on autoscaling, automated disaster recovery, and latency reductions.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'AWS / VPS', 'PostgreSQL', 'CI/CD Pipelines'].map(tag => (
                  <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-mono border border-zinc-200 bg-zinc-50 text-zinc-600 dark:border-zinc-850 dark:bg-zinc-900/60 dark:text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Service 4 */}
            <div className="group border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900/20 p-8 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-lg flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200">
                  <Icon name="fas fa-cogs text-base" />
                </span>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">ERP &amp; Automation</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                Integrating disparate B2B services, centralizing financial records, and creating internal workflows. Saving enterprise teams manual processing hours with custom background cron loops.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Workflow Design', 'Payment Orchestration', 'Data Sync Syncing', 'Custom APIs'].map(tag => (
                  <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-mono border border-zinc-200 bg-zinc-50 text-zinc-600 dark:border-zinc-850 dark:bg-zinc-900/60 dark:text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SHIPPED PROJECTS */}
      <section id="projects" className="border-t border-zinc-200/60 dark:border-zinc-800/60 py-24 px-6 bg-zinc-50/50 dark:bg-zinc-950/20">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-12 md:max-w-2xl">
            <span className="text-xs font-mono font-semibold tracking-widest text-amber-600 dark:text-[#ffdd57] uppercase">Engineering Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mt-3">
              Selected Work
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              Explore the complete directory of products, platforms, and open-source packages shipped by Imhotep Tech. Zero placeholder values, production-tested architectures.
            </p>
          </div>

          {/* Clean Category Filters */}
          <div className="mb-10 overflow-x-auto -mx-6 px-6">
            <div className="flex gap-2 min-w-max border-b border-zinc-200/60 dark:border-zinc-800/60 pb-4">
              {[
                { id: 'all', label: 'All Projects', count: counts.all },
                { id: 'featured', label: 'Featured', count: counts.featured },
                { id: 'applications', label: 'Applications', count: counts.applications },
                { id: 'libraries', label: 'Libraries & APIs', count: counts.libraries },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  type="button"
                  className={`inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 ${
                    activeFilter === tab.id
                      ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 shadow-sm'
                      : 'text-zinc-550 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                  <span className={`px-1.5 py-0.5 text-[10px] font-mono rounded ${
                    activeFilter === tab.id
                      ? 'bg-zinc-800 text-zinc-300 dark:bg-zinc-100 dark:text-zinc-600'
                      : 'bg-zinc-200/60 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-500'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Projects Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedProjects.map((project, idx) => (
              <article 
                key={`${project.title}-${idx}`}
                className="group border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900/10 p-6 sm:p-8 hover:border-zinc-350 dark:hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between h-full relative"
              >
                <div>
                  {/* Category and Date Header */}
                  <div className="flex items-center justify-between gap-2 mb-4 border-b border-zinc-100 dark:border-zinc-900/60 pb-3">
                    <span className="text-[10px] font-bold tracking-widest font-mono text-zinc-400 dark:text-zinc-500 uppercase">
                      {project.isLibrary ? "Developer Library" : "Web Application"}
                    </span>
                    {project.date && (
                      <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                        {project.date}
                      </span>
                    )}
                  </div>

                  {/* Title and Featured Badge */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white tracking-tight leading-snug">
                      {project.url ? (
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-amber-600 dark:hover:text-[#ffdd57] transition-colors inline-flex items-center gap-1.5 group/link"
                        >
                          <span className="truncate">{project.title}</span>
                          <Icon name="fas fa-arrow-up-right-from-square text-xs text-zinc-400 group-hover/link:text-amber-600 dark:group-hover/link:text-[#ffdd57] transition-colors" />
                        </a>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </h3>
                    
                    {project.featured && (
                      <span className="flex-shrink-0 inline-flex items-center gap-1 rounded-full bg-amber-500/10 text-amber-650 dark:text-[#ffdd57] border border-amber-500/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider">
                        <Icon name="fas fa-star text-[8px]" /> Featured
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <div className="mt-3.5 text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed">
                    {typeof project.description === 'string' ? <p>{project.description}</p> : project.description}
                  </div>

                  {/* Key Features Bullets */}
                  {project.features && project.features.length > 0 && (
                    <ul className="mt-4 space-y-1.5 border-t border-zinc-100 dark:border-zinc-900/60 pt-3">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                          <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-[#ffdd57]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  {/* Tag Chips */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 5).map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border border-zinc-200 bg-zinc-50 text-zinc-500 dark:border-zinc-850 dark:bg-zinc-900/60 dark:text-zinc-400"
                        >
                          {tag.name}
                        </span>
                      ))}
                      {project.tags.length > 5 && (
                        <span className="px-2 py-0.5 text-[10px] font-mono border border-transparent text-zinc-450 dark:text-zinc-500">
                          +{project.tags.length - 5} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Call to Actions Buttons */}
                  {project.buttons && project.buttons.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-900/80 flex flex-wrap gap-3">
                      {project.buttons.map((btn, idx) => (
                        <a
                          key={idx}
                          href={btn.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors duration-150 ${
                            idx === 0
                              ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100'
                              : 'border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900/50'
                          }`}
                        >
                          <Icon name={btn.icon} className="text-[10px]" />
                          {btn.text}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 5. TRUST SECTION: WHY IMHOTEP TECH */}
      <section id="trust" className="border-t border-zinc-200/60 dark:border-zinc-800/60 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16 md:max-w-2xl">
            <span className="text-xs font-mono font-semibold tracking-widest text-amber-600 dark:text-[#ffdd57] uppercase">Engineering Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mt-3">
              Why Imhotep Tech
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              We approach B2B relationships as development partners, not outsourced vendors. Our core tenets dictate our engineering standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Tenet 1 */}
            <div>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 mb-5">
                <Icon name="fas fa-bullseye text-base" />
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">Engineered for Precision</h3>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">
                We avoid rapid codebase decay. Everything is compiled with clear schemas, proper documentation, and automated validation tests.
              </p>
            </div>

            {/* Tenet 2 */}
            <div>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 mb-5">
                <Icon name="fas fa-users-gear text-base" />
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">Direct Engineer Access</h3>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Zero project managers acting as communication bottlenecks. You collaborate directly with the active software developer crafting your system.
              </p>
            </div>

            {/* Tenet 3 */}
            <div>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 mb-5">
                <Icon name="fas fa-code-branch text-base" />
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">Open Source Contributors</h3>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">
                We actively build open-source tools. We extract non-sensitive platform assets and publish them back to the python community.
              </p>
            </div>

            {/* Tenet 4 */}
            <div>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 mb-5">
                <Icon name="fas fa-gauge-high text-base" />
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">Speed without Technical Debt</h3>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Using lightweight codebases, modern bundlers, and fast-execution servers. Ensuring outstanding Web Vital metrics.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. FOOTER: B2B CONTACT DETAILS & SOCIALS */}
      <footer id="contact" className="border-t border-zinc-200/60 dark:border-zinc-800/60 py-20 px-6 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 mb-16">
            
            <div className="max-w-md flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Let&apos;s build for scale.
              </h2>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Whether you need a custom SaaS platform, a mobile application, or containerized cloud infrastructure, our engineering studio has the expertise to execute.
              </p>
              
              <div className="mt-8 flex flex-col gap-3 font-mono text-xs text-zinc-600 dark:text-zinc-400">
                <p className="flex items-center gap-2">
                  <Icon name="fas fa-envelope text-zinc-400 w-4" />
                  <a href="mailto:imhoteptech@outlook.com" className="hover:underline hover:text-zinc-900 dark:hover:text-white">
                    imhoteptech@outlook.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="fas fa-map-marker-alt text-zinc-400 w-4" />
                  Cairo, Egypt
                </p>
              </div>
            </div>

            <div className="w-full lg:w-96">
              <h3 className="text-sm font-semibold tracking-wider text-zinc-500 uppercase font-mono mb-4">Quick Contact</h3>
              <a
                href="mailto:imhoteptech@outlook.com"
                className="group flex items-center justify-between w-full border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900/10 p-5 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
              >
                <div>
                  <span className="text-sm font-bold text-zinc-900 dark:text-white block group-hover:text-amber-600 dark:group-hover:text-[#ffdd57] transition-colors">
                    Get Proposal
                  </span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-500 block mt-1">
                    Send project scope to our desk
                  </span>
                </div>
                <span className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 group-hover:bg-zinc-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-950 transition-all duration-350">
                  <Icon name="fas fa-arrow-right" />
                </span>
              </a>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-zinc-200/60 dark:border-zinc-800/60 pt-8">
            
            <div className="flex items-center gap-2">
              <img
                src="/it.png"
                alt="Imhotep Tech Logo"
                className="w-6 h-6 object-contain rounded-sm"
              />
              <span className="text-xs text-zinc-500 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Imhotep Tech. All rights reserved.
              </span>
            </div>

            {/* Social media connections */}
            <div className="flex items-center gap-6 text-zinc-400 dark:text-zinc-500">
              <a
                href="https://github.com/Imhotep-Tech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                aria-label="GitHub Organization"
              >
                <Icon name="fab fa-github text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/company/imhotep-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                aria-label="LinkedIn Page"
              >
                <Icon name="fab fa-linkedin text-lg" />
              </a>
              <a
                href="https://x.com/Imhoteptech1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                aria-label="X Twitter"
              >
                <Icon name="fab fa-x-twitter text-lg" />
              </a>
            </div>

          </div>

        </div>
      </footer>

    </div>
  );
}

export default App;
