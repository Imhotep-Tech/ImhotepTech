import React from 'react';
import { socialPlatforms } from '../data/socialMedia';

const Icon = ({ name, className = "" }) => (
  <i className={`${name} ${className}`} aria-hidden="true" />
);

const FooterContact = ({ copiedEmail, handleCopyEmail }) => {
  return (
    <footer id="contact" className="border-t border-slate-200/60 dark:border-slate-800/40 py-20 px-4 sm:px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      
      {/* Decorative Gradient Line */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 mb-16 relative z-10">
          
          {/* Contact Banner Text */}
          <div className="max-w-xl flex-1 space-y-4">
            <span className="eyebrow">
              <Icon name="fas fa-paper-plane text-amber-500" /> Start a Conversation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Let&apos;s build for performance &amp; scale.
            </h2>
            <p className="text-slate-650 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you require custom web software, an automated Django backend, a mobile application, or reusable libraries, our software engineering studio delivers.
            </p>
            
            <div className="pt-2 flex flex-col gap-3 font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center">
                  <Icon name="fas fa-envelope text-xs" />
                </span>
                <a href="mailto:imhoteptech@outlook.com" className="hover:underline hover:text-amber-500 font-semibold">
                  imhoteptech@outlook.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center">
                  <Icon name="fas fa-map-marker-alt text-xs" />
                </span>
                <span className="font-semibold">Cairo, Egypt</span>
              </p>
            </div>
          </div>

          {/* One-Click Email Copy Card */}
          <div className="w-full lg:w-96">
            <h3 className="text-xs font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase font-mono mb-3">
              Direct Contact
            </h3>
            
            <div className="glass-card rounded-2xl p-6 border border-slate-200/60 dark:border-white/10 shadow-xl">
              <span className="text-base font-bold text-slate-900 dark:text-white block">
                Send Project Proposal
              </span>
              <span className="text-xs text-slate-600 dark:text-slate-400 block mt-1.5 leading-relaxed">
                Click below to copy our studio contact email address to your clipboard.
              </span>

              <div className="mt-5 flex items-center justify-between border border-slate-300/80 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-950 rounded-xl p-3.5 relative shadow-inner">
                <span className="font-mono text-xs text-slate-800 dark:text-slate-200 select-all truncate font-semibold pr-2">
                  imhoteptech@outlook.com
                </span>
                
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="flex items-center gap-1.5 text-xs font-bold font-mono py-2 px-3 rounded-lg bg-amber-500 text-slate-950 hover:bg-amber-400 active:scale-95 transition-all shadow-sm"
                >
                  {copiedEmail ? (
                    <>
                      <Icon name="fas fa-check" />
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

        {/* Bottom Social Icons & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-200/60 dark:border-slate-800/40 pt-8 relative z-10">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center p-1">
              <img
                src="/it.png"
                alt="Imhotep Tech Logo"
                className="w-6 h-6 object-contain"
              />
            </div>
            <span className="text-xs text-slate-600 dark:text-slate-400 font-semibold">
              &copy; {new Date().getFullYear()} Imhotep Tech. All rights reserved.
            </span>
          </div>

          {/* Social Platforms Row */}
          <div className="flex items-center gap-3">
            {socialPlatforms.map((platform, i) => (
              <a
                key={i}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm"
                aria-label={platform.name}
                title={`${platform.name}: ${platform.description || platform.username}`}
              >
                <Icon name={platform.icon} className="text-base" />
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
};

export default FooterContact;
