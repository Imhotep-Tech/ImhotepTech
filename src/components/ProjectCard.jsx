import React, { useState } from 'react';

const Icon = ({ name, className = "" }) => (
  <i className={`${name} ${className}`} aria-hidden="true" />
);

const ProjectCard = ({ project, libData, onCopyCommand, copiedItem, handleMouseMove }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const {
    title,
    url,
    date,
    description,
    image,
    imageAlt,
    tags = [],
    buttons = [],
    features,
    featured,
    isLibrary,
  } = project;

  const categoryLabel = libData?.category || (isLibrary ? "Developer Library" : "Web Application");
  const installCommand = libData?.installCommand;

  return (
    <article
      onMouseMove={handleMouseMove}
      className="group glass-card glass-card-hover rounded-2xl border border-slate-200/60 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden"
    >
      <div>
        {/* Header Metadata */}
        <div className="flex items-center justify-between gap-2 mb-4 border-b border-slate-200/50 dark:border-slate-800/60 pb-3.5">
          <span className="text-[11px] font-bold tracking-widest font-mono text-amber-600 dark:text-amber-400 uppercase">
            {categoryLabel}
          </span>
          {date && (
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
              {date}
            </span>
          )}
        </div>

        {/* Title & Featured Badge */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors inline-flex items-center gap-2 group/link"
              >
                <span>{title}</span>
                <Icon name="fas fa-arrow-up-right-from-square text-xs text-slate-400 group-hover/link:text-amber-500 transition-colors" />
              </a>
            ) : (
              <span>{title}</span>
            )}
          </h3>

          {featured && (
            <span className="flex-shrink-0 inline-flex items-center gap-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
              <Icon name="fas fa-star text-[9px]" /> Featured
            </span>
          )}
        </div>

        {/* Image Mockup or Gradient Preview */}
        {image ? (
          <div className="mt-5 relative rounded-xl overflow-hidden border border-slate-200/60 dark:border-slate-800/60 bg-slate-100 dark:bg-slate-900/50 aspect-video flex items-center justify-center p-3">
            <img
              src={image}
              alt={imageAlt || title}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              className={`max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-6 w-6 rounded-full border-2 border-amber-500/30 border-t-amber-500 animate-spin" />
              </div>
            )}
          </div>
        ) : (
          <div className="mt-5 relative rounded-xl overflow-hidden border border-slate-200/40 dark:border-slate-800/40 bg-gradient-to-tr from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950 aspect-video flex items-center justify-center p-6">
            <div aria-hidden className="absolute inset-0 bg-dotgrid opacity-30" />
            <div className="relative text-center">
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 mx-auto mb-2 shadow-sm">
                <Icon name={libData?.icon || (isLibrary ? "fas fa-cubes" : "fas fa-laptop-code")} className="text-xl text-amber-500" />
              </div>
              <span className="text-xs font-mono font-semibold text-slate-600 dark:text-slate-400">{title}</span>
            </div>
          </div>
        )}

        {/* Description */}
        <div className="mt-5 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          {typeof description === 'string' ? <p>{description}</p> : description}
        </div>

        {/* Features List */}
        {features && features.length > 0 && (
          <ul className="mt-5 space-y-2 border-t border-slate-200/50 dark:border-slate-800/50 pt-4 custom-checkmark-list text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            {features.map((feature, i) => (
              <li key={i} className="leading-relaxed">
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Terminal Widget for Install Commands */}
        {installCommand && (
          <div className="mt-5 font-mono text-xs bg-slate-950 border border-slate-800 rounded-xl p-3 flex items-center justify-between text-emerald-400 shadow-inner">
            <span className="truncate select-all pr-2 text-[11px]">$ {installCommand}</span>
            <button
              onClick={() => onCopyCommand && onCopyCommand(installCommand, title)}
              type="button"
              className="flex-shrink-0 p-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-400 hover:text-white transition-all active:scale-95"
              title="Copy install command"
            >
              {copiedItem === title ? (
                <Icon name="fas fa-check text-emerald-400" />
              ) : (
                <Icon name="fas fa-copy" />
              )}
            </button>
          </div>
        )}
      </div>

      <div>
        {/* All Tags (No truncation) */}
        {tags && tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-1.5 border-t border-slate-200/40 dark:border-slate-800/40 pt-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 transition-colors"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        {buttons && buttons.length > 0 && (
          <div className="mt-5 pt-4 border-t border-slate-200/40 dark:border-slate-800/40 flex flex-wrap gap-3">
            {buttons.map((btn, idx) => {
              let btnStyle = 'border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800';
              
              if (idx === 0) {
                btnStyle = 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/10';
              }
              
              const lowerText = btn.text.toLowerCase();
              if (lowerText.includes('play') || lowerText.includes('google play')) {
                btnStyle = 'bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-md';
              } else if (lowerText.includes('github') || lowerText.includes('code')) {
                btnStyle = 'bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white border border-slate-700';
              } else if (lowerText.includes('pypi') || lowerText.includes('python')) {
                btnStyle = 'bg-sky-600 hover:bg-sky-500 text-white font-bold shadow-md';
              }

              return (
                <a
                  key={idx}
                  href={btn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${btnStyle}`}
                >
                  <Icon name={btn.icon} className="text-xs" />
                  <span>{btn.text}</span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
