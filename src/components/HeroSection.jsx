import React from 'react';

const Icon = ({ name, className = "" }) => (
  <i className={`${name} ${className}`} aria-hidden="true" />
);

const HeroSection = ({ computedStats, handleNavClick }) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-28 px-4 sm:px-6">
      
      {/* Radial Gradient Ambient Lighting */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-amber-500/10 blur-[130px] hero-orb" />
      <div className="pointer-events-none absolute top-1/3 left-10 w-96 h-96 rounded-full bg-indigo-500/[0.08] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 rounded-full bg-emerald-500/[0.06] blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-300 text-xs font-mono font-bold tracking-wide uppercase shadow-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            Independent Software Engineering Studio &bull; Cairo, Egypt
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08] animate-fade-in-up">
            Building Scalable Web Applications &amp; Developer Tooling.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-650 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Imhotep Tech turns complex business challenges into production-ready software—from custom SaaS platforms and medical clinic management to developer CLI tools and exchange rate APIs.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 animate-fade-in-up">
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
              className="inline-flex items-center gap-2.5 text-sm font-bold px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Icon name="fas fa-cubes text-xs" />
              <span>Explore Selected Work</span>
            </a>
            
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="inline-flex items-center gap-2.5 text-sm font-bold px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Icon name="fas fa-paper-plane text-xs text-amber-500" />
              <span>Get in Touch</span>
            </a>
          </div>

        </div>

        {/* Dynamic Studio Metrics Bento Grid */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {computedStats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-200/60 dark:border-white/10 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                  <Icon name={stat.icon} className="text-lg" />
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  Verified
                </span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight block">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1 block">
                  {stat.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
