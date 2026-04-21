import React from 'react';
import { Link } from 'react-router-dom';

const SOCIAL_LINKS = [
  {
    href: 'mailto:imhoteptech@outlook.com',
    icon: 'fa fa-envelope',
    label: 'Email',
  },
  {
    href: 'https://github.com/Imhotep-Tech',
    icon: 'fab fa-github',
    label: 'GitHub',
    external: true,
  },
  {
    href: 'https://www.linkedin.com/in/karimbassem',
    icon: 'fab fa-linkedin',
    label: 'LinkedIn',
    external: true,
  },
  {
    href: 'https://x.com/Imhoteptech1',
    icon: 'fab fa-x-twitter',
    label: 'Twitter / X',
    external: true,
  },
  {
    href: 'https://www.instagram.com/imhotep_tech',
    icon: 'fab fa-instagram',
    label: 'Instagram',
    external: true,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-line/70 bg-bg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-secondary text-primary font-bold text-sm">
                IT
              </span>
              <span className="text-[15px] font-semibold text-ink">Imhotep Tech</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted leading-relaxed">
              A small software studio based in Egypt. We build web and mobile
              applications end‑to‑end for founders and teams who want
              dependable software.
            </p>
            <p className="mt-6 text-xs text-subtle">
              &copy; 2023–{year} Imhotep Tech. All rights reserved.
            </p>
          </div>

          {/* Sitemap */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-subtle">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-muted hover:text-ink transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/libraries"
                  className="text-muted hover:text-ink transition-colors"
                >
                  Libraries &amp; APIs
                </Link>
              </li>
              <li>
                <Link
                  to="/social-media"
                  className="text-muted hover:text-ink transition-colors"
                >
                  Social
                </Link>
              </li>
              <li>
                <a
                  href="https://kbassem.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-ink transition-colors"
                >
                  Founder
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-subtle">
              Get in touch
            </h4>
            <a
              href="mailto:imhoteptech@outlook.com"
              className="mt-4 inline-flex items-center gap-2 text-sm text-ink hover:text-secondary transition-colors"
            >
              <i className="fas fa-envelope text-secondary" />
              imhoteptech@outlook.com
            </a>

            <div className="mt-5 flex items-center gap-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  {...(s.external && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface/60 text-muted hover:text-ink hover:border-line/0 hover:bg-surface transition-colors"
                >
                  <i className={`${s.icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
