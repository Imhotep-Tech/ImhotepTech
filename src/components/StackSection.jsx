import React from 'react';
import { technicalSkills, additionalTechnologies } from '../data/aboutMe';

const Icon = ({ name, className = "" }) => (
  <i className={`${name} ${className}`} aria-hidden="true" />
);

const StackSection = () => {
  return (
    <section id="stack" className="border-t border-slate-200/60 dark:border-slate-800/40 py-24 px-4 sm:px-6 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-[500px] h-[250px] rounded-full bg-cyan-500/[0.03] blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl animate-fade-in-up">
          <span className="eyebrow">
            <Icon name="fas fa-microchip text-amber-500" /> Technology Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mt-3">
            Core Technical Stack &amp; Skills
          </h2>
          <p className="mt-4 text-slate-650 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            We architect robust software using battle-tested frameworks, modern databases, and clean algorithmic patterns.
          </p>
        </div>

        {/* Dual Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Bento Card 1: Core Proficiencies */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-slate-200/50 dark:border-slate-800/60 pb-4">
                <span className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center">
                  <Icon name="fas fa-gauge-high text-lg" />
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                    Primary Frameworks &amp; Languages
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    Production proficiency metrics
                  </span>
                </div>
              </div>

              <div className="space-y-5">
                {technicalSkills.map((skill, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
                      <span className="flex items-center gap-2.5 text-slate-800 dark:text-slate-200">
                        <Icon name={skill.icon || "fas fa-code"} className="text-amber-500 text-sm" />
                        {skill.name}
                      </span>
                      <span className="font-mono text-amber-600 dark:text-amber-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden border border-slate-300/40 dark:border-slate-800/40">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color || "from-amber-500 to-amber-300"} rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bento Card 2: Ecosystem & Tech Stack Tags */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-slate-200/50 dark:border-slate-800/60 pb-4">
                <span className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Icon name="fas fa-layer-group text-lg" />
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                    Databases, CS Fundamentals &amp; Tools
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    Essential development tooling
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {additionalTechnologies.map((tech, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/40 text-slate-800 dark:text-slate-200 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all duration-200 group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-800 text-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name={tech.icon || "fas fa-tag"} className="text-sm" />
                    </span>
                    <span className="font-bold text-xs sm:text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
              <span>Standard: Service-Oriented Architecture</span>
              <span className="text-emerald-500 font-semibold">Clean Code</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StackSection;
