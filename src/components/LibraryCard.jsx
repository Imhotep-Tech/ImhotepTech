import React from 'react';

const LibraryCard = ({ library }) => {
  const { title, description, icon, category, installCommand, tags, buttons } =
    library;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface/60 p-6 transition-colors duration-200 hover:border-secondary/40">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
          <i className={`${icon} text-lg`} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-semibold text-ink group-hover:text-secondary transition-colors truncate">
              {title}
            </h3>
          </div>
          <span className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/80 px-2 py-0.5 text-[11px] font-medium text-muted">
            {category}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-muted">{description}</p>

      {/* Install */}
      {installCommand && (
        <div className="mt-4 rounded-lg border border-line bg-surface-2/70 px-3 py-2.5 font-mono text-xs text-ink/80 break-all">
          <span className="text-subtle select-none">$ </span>
          {installCommand}
        </div>
      )}

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag, i) => (
            <span key={i} className="chip">
              {tag.name}
            </span>
          ))}
        </div>
      )}

      {/* Buttons */}
      {buttons && buttons.length > 0 && (
        <div className="mt-auto pt-6 flex flex-wrap gap-2.5">
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
                    : 'border border-line bg-surface/70 text-ink hover:bg-surface'
                }`}
              >
                <i className={`${button.icon} text-xs`} />
                <span>{button.text}</span>
              </a>
            );
          })}
        </div>
      )}
    </article>
  );
};

export default LibraryCard;
