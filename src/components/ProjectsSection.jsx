import React, { useState, useEffect, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFilter, setHoveredFilter] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Normalize tag names into canonical categories for reliable filtering
  const normalizeToCategory = (name) => {
    const s = name.toLowerCase();
    if (s.includes('django')) return 'Django';
    if (s.includes('flask')) return 'Flask';
    if (s.includes('react')) return 'React';
    if (s.includes('tailwind')) return 'Tailwind CSS';
    if (s.includes('pwa')) return 'PWA';
    if (s.includes('docker')) return 'Docker';
    if (s.includes('ai')) return 'AI';
    if (s.includes('postgres')) return 'PostgreSQL';
    return name.trim();
  };

  // Compute available categories from projects
  // Main filters only (explicit short list)
  const filters = ['all', 'Featured', 'Django', 'React', 'Flask', 'AI', 'Libraries / APIs'];

  // Count how many libraries are merged into projects
  const librariesCount = useMemo(() => projects.filter((p) => p.isLibrary).length, []);

  const filteredProjects = useMemo(() => {
    const byFilter = activeFilter === 'all'
      ? projects
      : activeFilter === 'Featured'
        ? projects.filter((p) => p.featured)
        : activeFilter === 'Libraries / APIs'
        ? projects.filter((p) => p.isLibrary)
        : projects.filter((project) => project.tags.some((tag) => normalizeToCategory(tag.name) === activeFilter));

    const priorityRank = { high: 3, medium: 2, low: 1 };
    const parseDate = (d) => new Date(d).getTime() || 0;

    // Sort: featured first, then priority, then date desc
    return [...byFilter].sort((a, b) => {
      const f = (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      if (f !== 0) return f;
      const p = (priorityRank[b.priority] || 0) - (priorityRank[a.priority] || 0);
      if (p !== 0) return p;
      return parseDate(b.date) - parseDate(a.date);
    });
  }, [activeFilter]);

  return (
    <div className="lg:col-span-8 space-y-8">
      {/* Enhanced Header with more visual elements */}
      <div
        className={`text-center space-y-6 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
        style={{ animationFillMode: 'both' }}
      >
        <div className="relative">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold relative">
            <span className="text-white">Work</span>
          </h2>
        </div>

        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up animate-stagger-1 leading-relaxed">
          Explore our recent projects and open-source tools.
        </p>

        {/* Enhanced Filter Buttons with better animations */}
        <div
          className={`flex flex-wrap justify-center gap-3 animate-fade-in-up animate-stagger-2`}
        >
          {filters.map((filter, index) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              onMouseEnter={() => setHoveredFilter(filter)}
              onMouseLeave={() => setHoveredFilter(null)}
              className={`group relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeFilter === filter
                  ? "bg-secondary text-primary shadow-sm"
                  : "bg-gray-800/60 text-gray-300 hover:bg-gray-700/80 hover:text-white border border-gray-700/50"
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {filter === "all" ? (
                  <>
                    <i className="fas fa-th-large"></i>
                    All Projects
                  </>
                ) : (
                  <>
                    <i className={`fas ${
                      filter === 'Featured' ? 'fa-star' :
                      filter.toLowerCase().includes('django') ? 'fa-python' :
                      filter.toLowerCase().includes('react') ? 'fa-code' :
                      filter.toLowerCase().includes('flask') ? 'fa-flask' :
                      filter.toLowerCase().includes('ai') ? 'fa-brain' :
                      filter.toLowerCase().includes('libraries') ? 'fa-book' :
                      'fa-tag'
                    }`}></i>
                    {filter}
                    {filter === 'Libraries / APIs' && (
                      <span className={`ml-1 inline-flex items-center justify-center text-[10px] leading-none px-1.5 py-0.5 rounded-full ${
                        activeFilter === filter ? 'bg-primary text-secondary' : 'bg-secondary/20 text-secondary'
                      }`}>
                        {librariesCount}
                      </span>
                    )}
                  </>
                )}
                {activeFilter === filter && (<i className="fas fa-check" />)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Projects Counter with stats */}
      <div className={`text-center animate-fade-in-up animate-stagger-3`}>
        <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-full border border-gray-600/50 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <i className="fas fa-project-diagram text-secondary animate-pulse"></i>
            <span className="text-gray-300 font-medium">
              {filteredProjects.length} Project{filteredProjects.length !== 1 ? "s" : ""} Found
            </span>
          </div>
          
          {activeFilter !== "all" && (
            <>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <i className="fas fa-filter text-accent"></i>
                <span className="text-gray-400 text-sm">Filtered by: {activeFilter}</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Enhanced Projects Grid with staggered animations */}
      <div className="grid grid-cols-1 gap-8 auto-rows-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={`${project.title}-${activeFilter}`}
            className="animate-zoom-in w-full"
            style={{
              animationDelay: `${index * 150}ms`,
              animationFillMode: "both",
            }}
          >
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>

      {/* Enhanced Empty State with more visual appeal */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 animate-fade-in-up">
          <div className="relative inline-block mb-8">
            <div className="text-8xl text-gray-600 mb-4 animate-float">
              <i className="fas fa-search"></i>
            </div>
            <div className="absolute -top-4 -right-4 text-3xl text-yellow-500 animate-bounce-gentle">
              <i className="fas fa-exclamation"></i>
            </div>
            <div className="absolute -bottom-2 -left-2 text-2xl text-accent animate-float" style={{ animationDelay: '1s' }}>
              <i className="fas fa-question"></i>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold text-gray-400 mb-4">
            No projects found for <span className="text-secondary">"{activeFilter}"</span>
          </h3>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Don't worry! Try adjusting your filter or explore all our amazing projects.
          </p>
          
          <button
            onClick={() => setActiveFilter("all")}
            className="group relative px-8 py-4 bg-gradient-to-r from-secondary to-secondary/80 text-primary rounded-full font-bold hover:from-secondary/90 hover:to-secondary transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-glow overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative z-10 flex items-center gap-2">
              <i className="fas fa-refresh group-hover:rotate-180 transition-transform duration-500"></i>
              Show All Projects
            </span>
          </button>
        </div>
      )}

      {/* Enhanced Loading State */}
      {projects.length === 0 && (
        <div className="text-center py-20">
          <div className="relative inline-block mb-8">
            <div className="text-8xl text-gray-600 mb-4 animate-spin-slow">
              <i className="fas fa-cog"></i>
            </div>
            <div className="absolute inset-0 text-6xl text-secondary/30 animate-pulse">
              <i className="fas fa-cog"></i>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-gray-400 mb-4">
            Loading Amazing Projects...
          </h3>
          <p className="text-gray-500 max-w-md mx-auto">
            Please wait while we fetch our latest innovative work and cutting-edge solutions.
          </p>
          
          {/* Loading progress bar */}
          <div className="mt-8 max-w-xs mx-auto">
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-secondary to-accent rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
