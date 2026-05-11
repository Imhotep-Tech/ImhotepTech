import React, { useEffect, useRef, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

/* Animated counter that ticks up from 0 to `end` */
const Counter = ({ end, suffix = '', duration = 1600 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min((now - start) / duration, 1);
            // ease-out quad
            const eased = 1 - (1 - t) * (1 - t);
            setCount(Math.round(eased * end));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const Hero = () => {
  const revealRef = useScrollReveal();

  return (
    <section ref={revealRef} className="relative w-full overflow-hidden border-b border-line/70">
      {/* Subtle backdrop */}
      <div aria-hidden className="absolute inset-0 bg-dotgrid opacity-40" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-bg via-bg to-surface/30"
      />
      {/* Floating gradient orb */}
      <div
        aria-hidden
        className="hero-orb pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[480px] w-[880px] rounded-full bg-secondary/[0.07] blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-20 pb-20 md:pt-28 md:pb-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            data-reveal="fade"
            className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-muted"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
            Software Studio · Cairo, Egypt
          </div>

          {/* Heading — short & direct */}
          <h1
            data-reveal="up"
            data-reveal-delay="1"
            className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tightest text-ink"
          >
            We build software{' '}
            <span className="text-secondary">that works.</span>
          </h1>

          {/* Sub — one line, no fluff */}
          <p
            data-reveal="up"
            data-reveal-delay="2"
            className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-muted"
          >
            From idea to production — web apps, mobile, and everything in between.
          </p>

          {/* CTAs */}
          <div
            data-reveal="up"
            data-reveal-delay="3"
            className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3"
          >
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

          {/* Animated stats row */}
          <div
            data-reveal="up"
            data-reveal-delay="4"
            className="mt-12 flex flex-wrap items-center gap-8 md:gap-12"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-ink tabular-nums">
                <Counter end={15} suffix="+" />
              </span>
              <span className="mt-1 text-xs text-muted uppercase tracking-wider">Projects shipped</span>
            </div>
            <div className="h-8 w-px bg-line hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-ink tabular-nums">
                <Counter end={2} suffix="+" />
              </span>
              <span className="mt-1 text-xs text-muted uppercase tracking-wider">Years building</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
