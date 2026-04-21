import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden border-b border-line/70">
      {/* Subtle backdrop */}
      <div aria-hidden className="absolute inset-0 bg-dotgrid opacity-40" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-bg via-bg to-surface/30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[480px] w-[880px] rounded-full bg-secondary/[0.07] blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-20 pb-20 md:pt-28 md:pb-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="animate-fade-in flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-muted">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
            Software Studio · Cairo, Egypt
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up animate-stagger-1 mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tightest text-ink">
            We design and build{' '}
            <span className="text-secondary">dependable software</span>{' '}
            that moves your business forward.
          </h1>

          {/* Sub */}
          <p className="animate-fade-in-up animate-stagger-2 mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-muted">
            Imhotep Tech is a small, focused studio shipping web and mobile
            applications end‑to‑end — from product discovery and UX to
            production deployment and maintenance.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up animate-stagger-3 mt-10 flex flex-col sm:flex-row sm:items-center gap-3">
            <a
              href="mailto:imhoteptech@outlook.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-primary shadow-soft hover:bg-secondary/90 transition-colors"
            >
              <i className="fas fa-envelope text-xs" />
              Start a project
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface/50 px-6 py-3 text-sm font-semibold text-ink hover:bg-surface transition-colors"
            >
              <i className="fas fa-arrow-down text-xs" />
              See our work
            </a>
          </div>

          {/* Trust row */}
          <div className="animate-fade-in-up animate-stagger-4 mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <i className="fas fa-check-circle text-secondary" />
              15+ projects delivered
            </span>
            <span className="hidden sm:inline text-line">|</span>
            <span className="inline-flex items-center gap-2">
              <i className="fas fa-globe text-secondary" />
              Clients across EG, EU &amp; US
            </span>
            <span className="hidden sm:inline text-line">|</span>
            <span className="inline-flex items-center gap-2">
              <i className="fas fa-bolt text-secondary" />
              Fast, reliable delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
