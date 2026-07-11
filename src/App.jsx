import React, { useState, useEffect, useMemo, useCallback } from 'react';
import projects from './data/projects';
import { libraries } from './data/libraries';
import { founderInfo, technicalSkills, additionalTechnologies, education, vision } from './data/aboutMe';
import { socialPlatforms } from './data/socialMedia';
import useScrollReveal from './hooks/useScrollReveal';

// Custom icons helper
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
    return 'dark'; // Default to dark mode
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);

  const containerRef = useScrollReveal();

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

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText("imhoteptech@outlook.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  }, []);

  const handleCopyCommand = useCallback((command, name) => {
    navigator.clipboard.writeText(command);
    setCopiedItem(name);
    setTimeout(() => setCopiedItem(null), 2000);
  }, []);

  // Sort the full list of projects & libraries by date (newest first)
  const sortedProjects = useMemo(() => {
    const parseDate = (d) => d ? new Date(d).getTime() : 0;

    return [...projects].sort((a, b) => {
      return parseDate(b.date) - parseDate(a.date);
    });
  }, []);



  // Compute stats dynamically to keep real measurements
  const computedStats = useMemo(() => {
    const startDate = new Date('2023-10-19');
    const diffMs = Date.now() - startDate.getTime();
    const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);
    const years = diffYears.toFixed(1);

    return [
      {
        metric: "Open Source Projects",
        value: `${projects.length}+`,
        icon: "fas fa-code-branch",
      },
      {
        metric: "Years Building",
        value: `${years}+`,
        icon: "fas fa-calendar-check",
      }
    ];
  }, []);

  /* Track mouse position for card hover glow effect */
  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 font-sans antialiased transition-colors duration-300">
      
      {/* 1. STICKY NAVIGATION BAR */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200/50 dark:border-zinc-800/40 bg-white/75 dark:bg-zinc-950/75 backdrop-blur-xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, 'hero')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center shadow-md shadow-amber-500/10 group-hover:scale-105 transition-transform">
              <img
                src="/it.png"
                alt="Imhotep Tech"
                className="w-6 h-6 object-contain"
              />
            </div>
            <span className="font-bold text-base tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-amber-500 dark:group-hover:text-amber-300 transition-colors duration-200">
              Imhotep Tech
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { id: 'services', label: 'Services' },
              { id: 'projects', label: 'Work' },
              { id: 'stack', label: 'Stack' },
              { id: 'founder', label: 'Founder' },
              { id: 'contact', label: 'Contact' },
            ].map(item => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-sm font-medium text-zinc-650 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Theme Switcher & Actions */}
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

            {/* Start a Project Action button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="hidden sm:inline-flex text-xs font-semibold px-4 py-2.5 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 shadow-md shadow-black/10 dark:shadow-white/5 transition-all duration-200"
            >
              Start Project
            </a>

            {/* Mobile Menu Trigger */}
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
          <div className="md:hidden w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-6 py-4 flex flex-col gap-3 animate-fade-in">
            {[
              { id: 'services', label: 'Services' },
              { id: 'projects', label: 'Work' },
              { id: 'stack', label: 'Stack' },
              { id: 'founder', label: 'Founder' },
              { id: 'contact', label: 'Contact' },
            ].map(item => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-sm font-medium text-zinc-650 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white py-1.5 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="w-full text-center text-sm font-semibold py-2.5 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all duration-200 mt-2"
            >
              Start Project
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION & STUDIO METRICS */}
      <section id="hero" className="relative overflow-hidden pt-24 pb-20 md:pt-36 md:pb-32 px-6">
        
        {/* Subtle grid and decorative glow orbs */}
        <div aria-hidden className="absolute inset-0 bg-dotgrid opacity-[0.25] dark:opacity-[0.4]" />
        <div className="pointer-events-none absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/[0.04] dark:bg-cyan-500/[0.03] blur-[120px] animate-pulse-glow" />
        <div className="pointer-events-none absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-amber-500/[0.04] dark:bg-amber-500/[0.03] blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/10 dark:border-amber-400/10 bg-amber-500/[0.06] dark:bg-amber-400/[0.04] text-amber-700 dark:text-amber-300 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-300 animate-pulse" />
              <span className="text-[10px] font-mono tracking-wider uppercase font-semibold">Enterprise Software Studio</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tightest leading-[1.08] text-zinc-900 dark:text-white">
              We build software<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-350 dark:from-amber-400 dark:to-amber-200">that works.</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-650 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              We design and construct high-performance web systems, custom mobile frameworks, and resilient cloud architectures for enterprise business environments.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-semibold text-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all duration-200 shadow-lg shadow-black/10 dark:shadow-white/5 hover:scale-[1.02]"
              >
                Start a project
              </a>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, 'projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/20 text-zinc-700 dark:text-zinc-300 font-semibold text-sm hover:bg-zinc-100 dark:hover:bg-zinc-900/60 backdrop-blur-sm transition-all duration-200 hover:scale-[1.02]"
              >
                See our work
              </a>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto animate-fade-in-up animate-stagger-2">
            {computedStats.map((stat, idx) => (
              <div 
                key={idx}
                className="glass-card p-6 rounded-xl border border-zinc-200/50 dark:border-zinc-800/40 text-center hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 text-zinc-650 dark:text-zinc-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={stat.icon} className="text-sm" />
                </div>
                <div className="text-3xl font-extrabold font-mono text-zinc-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-zinc-555 dark:text-zinc-500 mt-1 uppercase tracking-wider">
                  {stat.metric}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. CORE SERVICES BENTO GRID */}
      <section id="services" className="border-t border-zinc-200/50 dark:border-zinc-850/40 py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16 max-w-3xl animate-fade-in-up">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-600 dark:text-amber-400 uppercase">Engineering Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mt-3">
              Core Services
            </h2>
            <p className="mt-4 text-zinc-650 dark:text-zinc-455 text-sm sm:text-base leading-relaxed">
              We operate at the intersection of complex software development, infrastructure design, and B2B business process automation.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Bento Card 1: Full-Stack Engineering (Width: 2/3) */}
            <div 
              onMouseMove={handleMouseMove}
              className="group glass-card glass-card-hover md:col-span-2 rounded-2xl p-8 hover-glow border border-zinc-200/60 dark:border-zinc-800/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <span className="w-12 h-12 rounded-xl flex items-center justify-center bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    <Icon name="fas fa-code text-xl" />
                  </span>
                  <div>
                    <span className="text-[10px] font-mono font-semibold text-cyan-650 dark:text-cyan-400 uppercase tracking-widest">Web Systems</span>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Full-Stack Engineering</h3>
                  </div>
                </div>
                <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed mb-6 max-w-xl">
                  Creating high-performance modern web platforms. We establish resilient database models and build fast, responsive user interfaces with robust authorization and secure API endpoints.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-200/50 dark:border-zinc-800/40">
                {['React / Next.js', 'Django', 'Node.js', 'REST APIs', 'PostgreSQL', 'JWT Auth'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono border border-zinc-200/80 bg-zinc-100/50 text-zinc-600 dark:border-zinc-850 dark:bg-zinc-900/60 dark:text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bento Card 2: Mobile Engineering (Width: 1/3) */}
            <div 
              onMouseMove={handleMouseMove}
              className="group glass-card glass-card-hover md:col-span-1 rounded-2xl p-8 hover-glow border border-zinc-200/60 dark:border-zinc-800/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <span className="w-12 h-12 rounded-xl flex items-center justify-center bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 border border-indigo-500/20">
                    <Icon name="fas fa-mobile-alt text-xl" />
                  </span>
                  <div>
                    <span className="text-[10px] font-mono font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Mobile Frameworks</span>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Mobile Engineering</h3>
                  </div>
                </div>
                <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  Delivering high-fidelity native and Progressive Web Applications. Optimized for low-bandwidth scenarios, containing clean state synchronization and offline capability.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-200/50 dark:border-zinc-800/40">
                {['React Native', 'iOS & Android', 'PWAs', 'Offline-First'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono border border-zinc-200/80 bg-zinc-100/50 text-zinc-600 dark:border-zinc-850 dark:bg-zinc-900/60 dark:text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bento Card 3: Enterprise Infrastructure (Width: 1/3) */}
            <div 
              onMouseMove={handleMouseMove}
              className="group glass-card glass-card-hover md:col-span-1 rounded-2xl p-8 hover-glow border border-zinc-200/60 dark:border-zinc-800/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <span className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <Icon name="fas fa-server text-xl" />
                  </span>
                  <div>
                    <span className="text-[10px] font-mono font-semibold text-emerald-650 dark:text-emerald-400 uppercase tracking-widest">Cloud Networks</span>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Enterprise Infrastructure</h3>
                  </div>
                </div>
                <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  Constructing secure networks, production-grade cloud server farms, and containerized deployments. Focused on autoscaling, automated disaster recovery, and latency reductions.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-200/50 dark:border-zinc-800/40">
                {['Docker', 'AWS / VPS', 'PostgreSQL', 'CI/CD Pipelines'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono border border-zinc-200/80 bg-zinc-100/50 text-zinc-600 dark:border-zinc-850 dark:bg-zinc-900/60 dark:text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bento Card 4: ERP & Automation (Width: 2/3) */}
            <div 
              onMouseMove={handleMouseMove}
              className="group glass-card glass-card-hover md:col-span-2 rounded-2xl p-8 hover-glow border border-zinc-200/60 dark:border-zinc-800/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <span className="w-12 h-12 rounded-xl flex items-center justify-center bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                    <Icon name="fas fa-cogs text-xl" />
                  </span>
                  <div>
                    <span className="text-[10px] font-mono font-semibold text-amber-650 dark:text-amber-400 uppercase tracking-widest">Workflows</span>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">ERP &amp; Automation</h3>
                  </div>
                </div>
                <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed mb-6 max-w-xl">
                  Integrating disparate B2B services, centralizing financial records, and creating internal workflows. Saving enterprise teams manual processing hours with custom background cron loops.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-200/50 dark:border-zinc-800/40">
                {['Workflow Design', 'Payment Orchestration', 'Data Syncing', 'Custom APIs'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono border border-zinc-200/80 bg-zinc-100/50 text-zinc-600 dark:border-zinc-850 dark:bg-zinc-900/60 dark:text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE WORK SHOWCASE (PROJECTS & LIBRARIES) */}
      <section id="projects" className="border-t border-zinc-200/50 dark:border-zinc-850/40 py-24 px-6 bg-zinc-50/50 dark:bg-zinc-950/20">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-12 max-w-3xl animate-fade-in-up">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-600 dark:text-amber-400 uppercase">Engineering Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mt-3">
              Selected Work
            </h2>
            <p className="mt-4 text-zinc-655 dark:text-zinc-455 text-sm sm:text-base leading-relaxed">
              Explore the complete directory of products, platforms, and open-source packages shipped by Imhotep Tech. Zero placeholder values, production-tested architectures.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sortedProjects.map((project, idx) => {
              // Find additional library attributes from libraries.js if it's a library
              const libData = project.isLibrary
                ? libraries.find(l => l.title.toLowerCase() === project.title.toLowerCase())
                : null;

              return (
                <article 
                  key={`${project.title}-${idx}`}
                  onMouseMove={handleMouseMove}
                  className="group glass-card glass-card-hover hover-glow border border-zinc-200/60 dark:border-zinc-800/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full relative"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 mb-4 border-b border-zinc-100 dark:border-zinc-900/30 pb-3">
                      <span className="text-[10px] font-bold tracking-widest font-mono text-amber-600 dark:text-amber-450 uppercase">
                        {libData?.category || (project.isLibrary ? "Developer Library" : "Web Application")}
                      </span>
                      {project.date && (
                        <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-550">
                          {project.date}
                        </span>
                      )}
                    </div>

                    {/* Title with Featured Badge */}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight leading-snug">
                        {project.url ? (
                          <a 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-amber-655 dark:hover:text-amber-300 transition-colors inline-flex items-center gap-1.5 group/link"
                          >
                            <span className="truncate">{project.title}</span>
                            <Icon name="fas fa-arrow-up-right-from-square text-xs text-zinc-400 group-hover/link:text-amber-600 dark:group-hover/link:text-amber-300 transition-colors" />
                          </a>
                        ) : (
                          <span>{project.title}</span>
                        )}
                      </h3>
                      
                      {project.featured && (
                        <span className="flex-shrink-0 inline-flex items-center gap-1 rounded-full bg-amber-500/10 text-amber-650 dark:text-amber-300 border border-amber-500/20 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider">
                          <Icon name="fas fa-star text-[8px]" /> Featured
                        </span>
                      )}
                    </div>

                    {/* Image Mockup / Visual container */}
                    {project.image ? (
                      <div className="mt-4 relative rounded-xl overflow-hidden border border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-100 dark:bg-zinc-900/30 aspect-video flex items-center justify-center p-4">
                        <img 
                          src={project.image} 
                          alt={project.imageAlt || project.title} 
                          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      // Visual Gradient placeholder if no image exists
                      <div className="mt-4 relative rounded-xl overflow-hidden border border-zinc-200/40 dark:border-zinc-800/40 bg-gradient-to-tr from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-950 aspect-video flex items-center justify-center p-6">
                        <div aria-hidden className="absolute inset-0 bg-dotgrid opacity-20" />
                        <div className="relative text-center">
                          <div className="w-12 h-12 rounded-lg bg-zinc-200 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-800/50 flex items-center justify-center text-zinc-500 dark:text-zinc-450 mx-auto mb-2">
                            <Icon name={libData?.icon || (project.isLibrary ? "fas fa-cubes" : "fas fa-window-maximize")} className="text-lg" />
                          </div>
                          <span className="text-xs font-mono font-semibold text-zinc-455 dark:text-zinc-500">{project.title}</span>
                        </div>
                      </div>
                    )}

                    {/* Description */}
                    <div className="mt-5 text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed">
                      {typeof project.description === 'string' ? <p>{project.description}</p> : project.description}
                    </div>

                    {/* Features list */}
                    {project.features && project.features.length > 0 && (
                      <ul className="mt-5 space-y-2 border-t border-zinc-200/40 dark:border-zinc-900/30 pt-4 custom-checkmark-list text-xs text-zinc-600 dark:text-zinc-400">
                        {project.features.map((feature, i) => (
                          <li key={i}>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Terminal widget for pip commands (Library only) */}
                    {libData?.installCommand && (
                      <div className="mt-5 font-mono text-xs bg-zinc-950 border border-zinc-800 rounded-lg p-3 flex items-center justify-between text-emerald-400 shadow-inner">
                        <span className="truncate select-all pr-2 text-[11px]">$ {libData.installCommand}</span>
                        <button
                          onClick={() => handleCopyCommand(libData.installCommand, project.title)}
                          type="button"
                          className="flex-shrink-0 p-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded text-zinc-400 hover:text-white transition-colors"
                          title="Copy install command"
                        >
                          {copiedItem === project.title ? (
                            <Icon name="fas fa-check text-emerald-500" />
                          ) : (
                            <Icon name="fas fa-copy" />
                          )}
                        </button>
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Tags */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-1.5 border-t border-zinc-200/30 dark:border-zinc-900/30 pt-4">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border border-zinc-200 bg-zinc-50 text-zinc-550 dark:border-zinc-850 dark:bg-zinc-900/60 dark:text-zinc-400"
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Buttons / Actions */}
                    {project.buttons && project.buttons.length > 0 && (
                      <div className="mt-5 pt-4 border-t border-zinc-150 dark:border-zinc-900/40 flex flex-wrap gap-3">
                        {project.buttons.map((btn, idx) => {
                          let themeStyle = 'border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900/50';
                          if (idx === 0) {
                            themeStyle = 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 shadow-sm';
                          }
                          // Override styling if specific text indicators match
                          if (btn.text.toLowerCase().includes('play') || btn.text.toLowerCase().includes('google play')) {
                            themeStyle = 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm';
                          } else if (btn.text.toLowerCase().includes('github') || btn.text.toLowerCase().includes('code')) {
                            themeStyle = 'bg-zinc-800 hover:bg-zinc-700 text-white shadow-sm border border-zinc-700';
                          } else if (btn.text.toLowerCase().includes('pypi') || btn.text.toLowerCase().includes('python')) {
                            themeStyle = 'bg-sky-600 hover:bg-sky-700 text-white shadow-sm border border-sky-500';
                          }

                          return (
                            <a
                              key={idx}
                              href={btn.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg transition-all duration-200 hover:scale-[1.02] ${themeStyle}`}
                            >
                              <Icon name={btn.icon} className="text-[11px]" />
                              {btn.text}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. TECH STACK ECOSYSTEM */}
      <section id="stack" className="border-t border-zinc-200/50 dark:border-zinc-850/40 py-24 px-6 relative overflow-hidden">
        
        {/* Subtle decorative mesh */}
        <div className="pointer-events-none absolute -bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-emerald-500/[0.03] dark:bg-emerald-500/[0.02] blur-[100px]" />

        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16 max-w-3xl animate-fade-in-up">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-600 dark:text-amber-400 uppercase">Ecosystem</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mt-3">
              Technologies &amp; Architecture
            </h2>
            <p className="mt-4 text-zinc-650 dark:text-zinc-450 text-sm sm:text-base leading-relaxed">
              We construct systems using robust, modern, and verified technologies that ensure high performance, security, and developer maintainability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Core Proficiencies (Dynamic mapping of technicalSkills) */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/40">
              <div className="flex items-center gap-3 mb-6 border-b border-zinc-200/50 dark:border-zinc-800/40 pb-3">
                <span className="text-amber-500"><Icon name="fas fa-gauge-high text-xl" /></span>
                <h3 className="font-bold text-zinc-900 dark:text-white text-lg">Core Proficiencies</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {technicalSkills.map((skill, idx) => (
                  <div key={idx} className="flex flex-col justify-between">
                    <div className="flex items-center justify-between text-xs font-semibold mb-2">
                      <span className="flex items-center gap-2 text-zinc-700 dark:text-zinc-350">
                        <Icon name={skill.icon || "fas fa-code"} className="text-amber-600 dark:text-amber-400" />
                        {skill.name}
                      </span>
                      <span className="font-mono text-zinc-500 dark:text-zinc-450">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-900 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color || "from-amber-500 to-amber-300"} rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Technologies (Dynamic mapping of additionalTechnologies) */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/40">
              <div className="flex items-center gap-3 mb-6 border-b border-zinc-200/50 dark:border-zinc-800/40 pb-3">
                <span className="text-cyan-500"><Icon name="fas fa-layer-group text-xl" /></span>
                <h3 className="font-bold text-zinc-900 dark:text-white text-lg">Ecosystem &amp; Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {additionalTechnologies.map((tech, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-850/80 bg-zinc-100/30 dark:bg-zinc-900/30 text-xs sm:text-sm text-zinc-750 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-750 hover:bg-zinc-100/80 dark:hover:bg-zinc-900/60 transition-all duration-200"
                  >
                    <Icon name={tech.icon || "fas fa-tag"} className="text-cyan-600 dark:text-cyan-400 text-sm" />
                    <span className="font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. STUDIO & FOUNDER SECTION */}
      <section id="founder" className="border-t border-zinc-200/50 dark:border-zinc-850/40 py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16 max-w-3xl animate-fade-in-up">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-600 dark:text-amber-400 uppercase">Leadership</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mt-3">
              Studio Philosophy &amp; Founder
            </h2>
            <p className="mt-4 text-zinc-655 dark:text-zinc-450 text-sm sm:text-base leading-relaxed">
              We approach B2B relationships as dedicated engineering partners, not anonymous vendors. Our studio coordinates execution closely to prevent technical debt.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Card 1: Profile Details (Span 7) */}
            <div className="lg:col-span-7 glass-card border border-zinc-200/60 dark:border-zinc-800/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Founder Photo */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-amber-500/20 dark:border-amber-400/20 relative shadow-lg">
                  <img
                    src={founderInfo.image}
                    alt={founderInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                    {founderInfo.name}
                  </h3>
                  <p className="text-sm font-semibold text-amber-650 dark:text-amber-350 mt-1 font-mono">
                    {founderInfo.title}
                  </p>
                  
                  {/* Quick Contact stats */}
                  <div className="flex flex-wrap gap-3 mt-3 text-xs text-zinc-500 dark:text-zinc-500 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Icon name="fas fa-map-marker-alt" /> {founderInfo.contact.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="fas fa-graduation-cap" /> {founderInfo.contact.university}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="fas fa-globe" />
                      <a href="https://kbassem.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 dark:hover:text-amber-300 hover:underline">
                        kbassem.app
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed">
                {founderInfo.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Founder Social Links */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-200/50 dark:border-zinc-900/30">
                {founderInfo.socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-colors"
                  >
                    <Icon name={social.icon} />
                    {social.name}
                  </a>
                ))}
                <a
                  href="https://kbassem.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-amber-500/10 text-amber-600 dark:text-amber-450 hover:bg-amber-500/20 transition-colors"
                >
                  <Icon name="fas fa-globe" />
                  Portfolio
                </a>
              </div>

            </div>

            {/* Card 2: Philosophy, Vision & Education (Span 5) */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
              
              {/* Vision Card */}
              <div className="glass-card border border-zinc-200/60 dark:border-zinc-800/40 rounded-2xl p-6 sm:p-8 flex-1">
                <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">Vision Statement</span>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mt-2">
                  {vision.title}
                </h4>
                <div className="mt-4 space-y-3 text-zinc-655 dark:text-zinc-405 text-xs sm:text-sm leading-relaxed">
                  {vision.content.map((vPara, i) => (
                    <p key={i}>{vPara}</p>
                  ))}
                </div>
              </div>

              {/* Education Card */}
              <div className="glass-card border border-zinc-200/60 dark:border-zinc-800/40 rounded-2xl p-6 sm:p-8">
                <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase font-semibold">Academic Timeline</span>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mt-2 mb-4">
                  Education Background
                </h4>
                
                <div className="space-y-4">
                  {education.map((edu, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-250 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 flex-shrink-0">
                        <Icon name={edu.icon} className="text-xs" />
                      </div>
                      <div>
                        <h5 className="font-bold text-sm text-zinc-900 dark:text-white leading-tight">
                          {edu.title}
                        </h5>
                        <p className="text-xs text-zinc-550 dark:text-zinc-450 mt-0.5">
                          {edu.institution}
                        </p>
                        <span className="inline-block text-[10px] font-mono text-zinc-400 dark:text-zinc-555 mt-1 border border-zinc-200 dark:border-zinc-800 px-2 py-0.25 rounded">
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 7. MODERN CONTACT & FOOTER */}
      <footer id="contact" className="border-t border-zinc-200/50 dark:border-zinc-850/40 py-20 px-6 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 relative overflow-hidden">
        
        {/* Decorative Grid Line */}
        <div aria-hidden className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 mb-16 relative z-10">
            
            {/* Contact Text banner */}
            <div className="max-w-lg flex-1">
              <span className="text-xs font-mono font-bold tracking-widest text-amber-600 dark:text-amber-400 uppercase">Start here</span>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mt-3">
                Let&apos;s build for scale.
              </h2>
              <p className="mt-4 text-zinc-650 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                Whether you need a custom SaaS platform, a mobile application, or containerized cloud infrastructure, our engineering studio has the expertise to execute.
              </p>
              
              <div className="mt-8 flex flex-col gap-3.5 font-mono text-xs sm:text-sm text-zinc-650 dark:text-zinc-400">
                <p className="flex items-center gap-3">
                  <Icon name="fas fa-envelope text-zinc-400 dark:text-zinc-555 w-4 text-center" />
                  <a href="mailto:imhoteptech@outlook.com" className="hover:underline hover:text-zinc-900 dark:hover:text-white">
                    imhoteptech@outlook.com
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Icon name="fas fa-map-marker-alt text-zinc-400 dark:text-zinc-555 w-4 text-center" />
                  Cairo, Egypt
                </p>
              </div>
            </div>

            {/* Email copying widget */}
            <div className="w-full lg:w-96">
              <h3 className="text-xs font-bold tracking-wider text-zinc-505 uppercase font-mono mb-4">Quick Contact</h3>
              
              <div className="border border-zinc-200 dark:border-zinc-805 rounded-xl bg-white dark:bg-zinc-900/20 p-5 shadow-sm">
                <span className="text-sm font-bold text-zinc-900 dark:text-white block">
                  Send Proposal
                </span>
                <span className="text-xs text-zinc-550 dark:text-zinc-550 block mt-1 leading-relaxed">
                  Click below to copy our contact email and send over your project specifications.
                </span>

                <div className="mt-4 flex items-center justify-between border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-55 dark:bg-zinc-950 rounded-lg p-3 relative">
                  <span className="font-mono text-xs text-zinc-600 dark:text-zinc-350 select-all truncate">
                    imhoteptech@outlook.com
                  </span>
                  
                  {/* Tooltip feedback indicator */}
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="flex items-center gap-1 text-[10px] font-semibold font-mono py-1.5 px-2.5 rounded bg-zinc-900 text-white dark:bg-white dark:text-zinc-955 hover:opacity-90 active:scale-95 transition-all"
                  >
                    {copiedEmail ? (
                      <>
                        <Icon name="fas fa-check text-emerald-450 dark:text-emerald-600" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Icon name="fas fa-copy" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Social Platforms Row & Copy section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-zinc-200/50 dark:border-zinc-800/40 pt-8 relative z-10">
            
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-zinc-900 dark:bg-white flex items-center justify-center p-1">
                <img
                  src="/it.png"
                  alt="Imhotep Tech Logo"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-xs text-zinc-500 dark:text-zinc-550">
                &copy; {new Date().getFullYear()} Imhotep Tech. All rights reserved.
              </span>
            </div>

            {/* Social media connections dynamically from socialMedia.js */}
            <div className="flex items-center gap-6">
              {socialPlatforms.map((platform, i) => (
                <a
                  key={i}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white flex items-center justify-center hover:scale-105 transition-all duration-200"
                  aria-label={platform.name}
                  title={`${platform.name}: ${platform.description || platform.username}`}
                >
                  <Icon name={platform.icon} className="text-lg" />
                </a>
              ))}
            </div>

          </div>

        </div>
      </footer>

    </div>
  );
}

export default App;
