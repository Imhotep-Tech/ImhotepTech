import React, { useState, useEffect, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

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
      {/* Header */}
      <div
        className={`text-center space-y-6 ${
          isVisible ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold relative">
            <span className="text-white">Selected work</span>
          </h2>
        </div>

        <p className="text-gray-400 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
          A few real projects and tools we&apos;ve built.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter, index) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-150 ${
                activeFilter === filter
                  ? "bg-secondary text-primary shadow-sm"
                  : "bg-gray-800/60 text-gray-300 hover:bg-gray-700/80 hover:text-white border border-gray-700/50"
              }`}
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

      {/* Projects Counter */}
      <div className="text-center">
        <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-full border border-gray-600/50 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <i className="fas fa-project-diagram text-secondary"></i>
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8 auto-rows-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={`${project.title}-${activeFilter}`}
            className="w-full"
          >
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <div className="text-8xl text-gray-600 mb-8">
            <i className="fas fa-search"></i>
          </div>
          
          <h3 className="text-2xl font-semibold text-gray-400 mb-4">
            No projects found for <span className="text-secondary">"{activeFilter}"</span>
          </h3>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Don't worry! Try adjusting your filter or explore all our amazing projects.
          </p>
          
          <button
            onClick={() => setActiveFilter("all")}
            className="px-8 py-4 bg-gradient-to-r from-secondary to-secondary/80 text-primary rounded-full font-bold hover:from-secondary/90 hover:to-secondary transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
          >
            <i className="fas fa-refresh"></i>
            Show All Projects
          </button>
        </div>
      )}

      {/* Loading State */}
      {projects.length === 0 && (
        <div className="text-center py-20">
          <div className="text-8xl text-gray-600 mb-8">
            <i className="fas fa-cog animate-spin"></i>
          </div>
          <h3 className="text-2xl font-semibold text-gray-400 mb-4">
            Loading Projects...
          </h3>
          <p className="text-gray-500 max-w-md mx-auto">
            Please wait while we fetch our latest work.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
