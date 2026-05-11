import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const CTASection = () => {
  const revealRef = useScrollReveal();

  return (
    <section ref={revealRef} className="relative border-b border-line/70 overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-dotgrid opacity-30" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-secondary/[0.07] blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span data-reveal="fade" className="eyebrow">Let&apos;s work together</span>
            <h2
              data-reveal="up"
              data-reveal-delay="1"
              className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-ink"
            >
              Got an idea? Let&apos;s build it.
            </h2>
            <p
              data-reveal="up"
              data-reveal-delay="2"
              className="mt-4 max-w-xl text-muted leading-relaxed"
            >
              Tell us about your project — we&apos;ll get back within one business day.
            </p>

            <div
              data-reveal="up"
              data-reveal-delay="3"
              className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3"
            >
              <a
                href="mailto:imhoteptech@outlook.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-primary shadow-soft hover:bg-secondary/90 transition-colors"
              >
                <i className="fas fa-envelope text-xs" />
                imhoteptech@outlook.com
              </a>
              <a
                href="https://github.com/Imhotep-Tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface/50 px-6 py-3 text-sm font-semibold text-ink hover:bg-surface transition-colors"
              >
                <i className="fab fa-github text-sm" />
                View our GitHub
              </a>
            </div>
          </div>

          <div data-reveal="up" data-reveal-delay="2" className="lg:col-span-5">
            <div className="rounded-2xl border border-line bg-surface/60 p-6 md:p-7">
              <h3 className="text-sm font-semibold text-ink">
                Other ways to reach us
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-3 text-muted">
                    <i className="fab fa-linkedin text-secondary w-4 text-center" />
                    LinkedIn
                  </span>
                  <a
                    href="https://www.linkedin.com/in/karimbassem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-secondary transition-colors"
                  >
                    /in/karimbassem →
                  </a>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-3 text-muted">
                    <i className="fab fa-x-twitter text-secondary w-4 text-center" />
                    Twitter / X
                  </span>
                  <a
                    href="https://x.com/Imhoteptech1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-secondary transition-colors"
                  >
                    @Imhoteptech1 →
                  </a>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-3 text-muted">
                    <i className="fab fa-instagram text-secondary w-4 text-center" />
                    Instagram
                  </span>
                  <a
                    href="https://www.instagram.com/imhotep_tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-secondary transition-colors"
                  >
                    @imhotep_tech →
                  </a>
                </li>
              </ul>

              <div className="mt-5 border-t border-line pt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-subtle">
                <span className="inline-flex items-center gap-1.5">
                  <i className="fas fa-check-circle text-secondary" />
                  15+ delivered projects
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <i className="fas fa-shield-halved text-secondary" />
                  Reliable maintenance
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
