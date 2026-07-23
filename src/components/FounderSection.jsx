import React from 'react';
import { founderInfo, education, vision } from '../data/aboutMe';

const Icon = ({ name, className = "" }) => (
  <i className={`${name} ${className}`} aria-hidden="true" />
);

const FounderSection = () => {
  return (
    <section id="founder" className="border-t border-slate-200/60 dark:border-slate-800/40 py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl animate-fade-in-up">
          <span className="eyebrow">
            <Icon name="fas fa-user-shield text-amber-500" /> Studio Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mt-3">
            Founder &amp; Philosophy
          </h2>
          <p className="mt-4 text-slate-650 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Directing engineering at Imhotep Tech, combining academic computer science with pragmatic product delivery.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Founder Details & Bio (Span 7) */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/60 dark:border-white/10 flex flex-col justify-between gap-6">
            
            <div className="space-y-6">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-amber-500/30 relative shadow-xl flex-shrink-0">
                  <img
                    src={founderInfo.image}
                    alt={founderInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {founderInfo.name}
                  </h3>
                  <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 mt-1 font-mono">
                    {founderInfo.title}
                  </p>
                  
                  {/* Contact Metadata */}
                  <div className="flex flex-wrap gap-3 mt-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Icon name="fas fa-map-marker-alt text-amber-500" /> {founderInfo.contact.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="fas fa-graduation-cap text-amber-500" /> {founderInfo.contact.university}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="fas fa-globe text-amber-500" />
                      <a href="https://kbassem.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 hover:underline">
                        kbassem.app
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-200/50 dark:border-slate-800/60 pt-5">
                {founderInfo.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200/50 dark:border-slate-800/60">
              {founderInfo.socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Icon name={social.icon} className="text-amber-500" />
                  {social.name}
                </a>
              ))}
              <a
                href="https://kbassem.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-300 hover:bg-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Icon name="fas fa-globe" />
                Personal Portfolio
              </a>
            </div>

          </div>

          {/* Card 2: Vision & Education Background (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Vision Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/60 dark:border-white/10 flex-1">
              <span className="text-[11px] font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
                Mission &amp; Strategy
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                {vision.title}
              </h4>
              <div className="mt-3 space-y-3 text-slate-650 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                {vision.content.map((vPara, i) => (
                  <p key={i}>{vPara}</p>
                ))}
              </div>
            </div>

            {/* Academic Background Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/60 dark:border-white/10">
              <span className="text-[11px] font-mono font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
                Academic Background
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1 mb-4">
                Education &amp; Qualifications
              </h4>
              
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="flex gap-4 items-start border-b border-slate-200/40 dark:border-slate-800/40 pb-3 last:border-b-0 last:pb-0">
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name={edu.icon} className="text-sm" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-slate-900 dark:text-white">
                        {edu.title}
                      </h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                        {edu.institution}
                      </p>
                      <span className="inline-block text-[10px] font-mono text-amber-600 dark:text-amber-400 mt-1 border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 rounded-md font-semibold">
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
  );
};

export default FounderSection;
