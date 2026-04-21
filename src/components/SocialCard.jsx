import React from 'react';

const SocialCard = ({ platform }) => {
  const { name, username, url, description, icon } = platform;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-2xl border border-line bg-surface/60 p-6 transition-colors duration-200 hover:border-secondary/40"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
          <i className={`${icon} text-lg`} />
        </span>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-ink truncate">{name}</h3>
          <p className="text-xs text-subtle truncate">{username}</p>
        </div>
      </div>

      {description && (
        <p className="mt-4 text-sm text-muted leading-relaxed flex-grow">
          {description}
        </p>
      )}

      <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:text-secondary transition-colors">
        Open profile
        <i className="fas fa-arrow-up-right-from-square text-xs" />
      </div>
    </a>
  );
};

export default SocialCard;
