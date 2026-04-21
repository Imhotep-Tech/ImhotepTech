import React, { useState } from 'react';

const MAX_TAGS = 6;

const ProjectCard = ({ project }) => {
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

  const visibleTags = tags.slice(0, MAX_TAGS);
  const extraTagsCount = Math.max(0, tags.length - MAX_TAGS);

  // Build image fallback initials
  const initials = (title || '')
    .replace(/[^A-Za-z0-9 ]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  return (
    <article
      className="group relative rounded-2xl border border-line bg-surface/60 overflow-hidden transition-colors duration-200 hover:border-secondary/40"
    >
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-0">
        {/* Media */}
        <div className="relative border-b md:border-b-0 md:border-r border-line bg-surface-2/60 p-6 flex items-center justify-center">
          {image ? (
            <>
              <img
                src={image}
                alt={imageAlt || title}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                className={`h-28 w-28 md:h-32 md:w-32 rounded-xl object-cover border border-line shadow-soft transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-6 w-6 rounded-full border-2 border-secondary/30 border-t-secondary animate-spin" />
                </div>
              )}
            </>
          ) : (
            <div className="flex h-28 w-28 md:h-32 md:w-32 items-center justify-center rounded-xl border border-line bg-surface text-2xl font-bold tracking-tight text-secondary">
              {initials || 'IT'}
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-secondary/15 text-secondary border border-secondary/30 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
                <i className="fas fa-star text-[9px]" /> Featured
              </span>
            )}
            {isLibrary && (
              <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 text-accent border border-accent/30 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
                <i className="fas fa-book text-[9px]" /> Library
              </span>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-7 flex flex-col">
          {/* Title row */}
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="text-lg md:text-xl font-semibold text-ink leading-snug">
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-secondary transition-colors"
                  >
                    <span className="truncate">{title}</span>
                    <i className="fas fa-arrow-up-right-from-square text-xs text-subtle group-hover:text-secondary transition-colors" />
                  </a>
                ) : (
                  <span>{title}</span>
                )}
              </h3>
              {date && (
                <p className="mt-1 text-xs text-subtle inline-flex items-center gap-1.5">
                  <i className="far fa-calendar" />
                  {date}
                </p>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mt-3 text-sm md:text-[15px] leading-relaxed text-muted">
            {typeof description === 'string' ? <p>{description}</p> : description}
          </div>

          {/* Features */}
          {features && features.length > 0 && (
            <ul className="mt-4 space-y-1.5">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted">
                  <i className="fas fa-check text-secondary mt-1 text-[10px]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tags */}
          {visibleTags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-1.5">
              {visibleTags.map((tag, i) => (
                <span key={i} className="chip">
                  {tag.name}
                </span>
              ))}
              {extraTagsCount > 0 && (
                <span className="chip !text-subtle">+{extraTagsCount} more</span>
              )}
            </div>
          )}

          {/* Buttons */}
          {buttons.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2.5">
              {buttons.map((button, i) => {
                const primary = i === 0;
                return (
                  <a
                    key={i}
                    href={button.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      primary
                        ? 'bg-ink text-primary hover:bg-white'
                        : 'border border-line bg-surface/70 text-ink hover:border-line/0 hover:bg-surface'
                    }`}
                  >
                    <i className={`${button.icon} text-xs`} />
                    <span>{button.text}</span>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
