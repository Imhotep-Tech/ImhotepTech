import React from 'react';

const Icon = ({ name, className = "" }) => (
  <i className={`${name} ${className}`} aria-hidden="true" />
);

const SERVICES = [
  {
    icon: 'fas fa-rocket',
    title: 'Product Development',
    body: 'Web apps, SaaS platforms, and mobile MVPs engineered from architectural design to deployment.',
    highlight: 'Full-Stack'
  },
  {
    icon: 'fas fa-gears',
    title: 'Business Automation',
    body: 'Interactive dashboards, financial tracking, and custom background workflows that save manual work hours.',
    highlight: 'Workflows'
  },
  {
    icon: 'fas fa-plug',
    title: 'APIs & Integration',
    body: 'High-throughput currency converters, RESTful services, and robust third-party system integrations.',
    highlight: 'Scalable'
  },
  {
    icon: 'fas fa-arrows-rotate',
    title: 'Maintenance & Support',
    body: 'Containerized deployment via Docker, performance optimization, and active security maintenance.',
    highlight: '24/7 Stability'
  },
];

const ServicesSection = ({ handleMouseMove }) => {
  return (
    <section id="services" className="border-t border-slate-200/60 dark:border-slate-800/40 py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow">
            <Icon name="fas fa-layer-group text-amber-500" /> Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-3">
            End-to-End Software Engineering.
          </h2>
          <p className="mt-3 text-slate-650 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            We build dependable software tailored to modern business requirements with clean, maintainable architecture.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              onMouseMove={handleMouseMove}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-200/60 dark:border-white/10 flex flex-col justify-between group hover:border-amber-500/30"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={s.icon} className="text-xl" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                    {s.highlight}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-650 dark:text-slate-400">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
