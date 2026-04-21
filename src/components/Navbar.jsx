import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/', label: 'Home', key: 'home' },
  { to: '/libraries', label: 'Libraries & APIs', key: 'libraries' },
  { to: '/social-media', label: 'Social', key: 'social-media' },
  {
    href: 'https://kbassem.vercel.app/',
    label: 'Founder',
    key: 'about-me',
    external: true,
  },
];

const Navbar = ({ currentPage = 'home' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const linkBase =
    'relative text-sm font-medium transition-colors duration-150 py-1.5';
  const linkIdle = 'text-muted hover:text-ink';
  const linkActive = 'text-ink';

  const renderLink = (l) => {
    const active = currentPage === l.key;
    const cls = `${linkBase} ${active ? linkActive : linkIdle}`;
    const content = (
      <>
        <span>{l.label}</span>
        <span
          className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-secondary transition-all duration-200 ${
            active ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
          }`}
        />
      </>
    );

    if (l.external) {
      return (
        <a
          key={l.key}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group ${cls}`}
          onClick={closeMenu}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        key={l.key}
        to={l.to}
        className={`group ${cls}`}
        aria-current={active ? 'page' : undefined}
        onClick={closeMenu}
      >
        {content}
      </Link>
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-bg/85 backdrop-blur-md border-b border-line/80'
          : 'bg-bg/60 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2.5 group" onClick={closeMenu}>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-secondary text-primary font-bold text-sm tracking-tight shadow-soft">
              IT
            </span>
            <span className="text-[15px] font-semibold text-ink leading-none">
              Imhotep Tech
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(renderLink)}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:imhoteptech@outlook.com"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary shadow-soft hover:bg-secondary/90 transition-colors"
            >
              <i className="fas fa-paper-plane text-xs" />
              Contact
            </a>

            <button
              type="button"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-ink hover:bg-surface/80 transition-colors"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-line/60 mt-0 animate-fade-in">
            <div className="flex flex-col gap-1 pt-3">
              {NAV_LINKS.map((l) => {
                const active = currentPage === l.key;
                const base =
                  'block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors';
                if (l.external) {
                  return (
                    <a
                      key={l.key}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${base} ${active ? 'bg-surface text-ink' : 'text-muted hover:bg-surface/60 hover:text-ink'}`}
                      onClick={closeMenu}
                    >
                      {l.label}
                    </a>
                  );
                }
                return (
                  <Link
                    key={l.key}
                    to={l.to}
                    onClick={closeMenu}
                    className={`${base} ${active ? 'bg-surface text-ink' : 'text-muted hover:bg-surface/60 hover:text-ink'}`}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <a
                href="mailto:imhoteptech@outlook.com"
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-4 py-2.5 text-sm font-semibold text-primary shadow-soft"
              >
                <i className="fas fa-paper-plane text-xs" />
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
