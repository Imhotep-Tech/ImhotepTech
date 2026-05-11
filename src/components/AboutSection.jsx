import React, { useCallback } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const TECH_STACK = [
  { name: 'Python', icon: 'fab fa-python' },
  { name: 'Django', icon: 'fas fa-leaf' },
  { name: 'Django REST', icon: 'fas fa-server' },
  { name: 'Flask', icon: 'fas fa-flask' },
  { name: 'JavaScript', icon: 'fab fa-js-square' },
  { name: 'React', icon: 'fab fa-react' },
  { name: 'React Native', icon: 'fas fa-mobile-screen-button' },
  { name: 'Tailwind CSS', icon: 'fas fa-wind' },
  { name: 'PostgreSQL', icon: 'fas fa-database' },
  { name: 'Docker', icon: 'fab fa-docker' },
  { name: 'PWA', icon: 'fas fa-mobile-screen' },
];

const HIGHLIGHTS = [
  {
    icon: 'fas fa-qrcode',
    tag: 'Loyalty Platform',
    title: '7CS Loyalty App',
    body: 'QR point redemption for a multi‑branch car‑services company.',
    href: 'https://7csloyal.vercel.app/',
  },
  {
    icon: 'fas fa-chart-line',
    tag: 'Personal Finance',
    title: 'Imhotep Finance',
    body: 'Smart budgeting with dashboards and scheduled transactions.',
    href: 'https://imhotep-finance.vercel.app/',
  },
  {
    icon: 'fas fa-stethoscope',
    tag: 'Clinic Management',
    title: 'Imhotep Smart Clinic',
    body: 'Appointments, records, and prescriptions — role‑based access.',
    href: 'https://imhotepsmartclinic.pythonanywhere.com/',
  },
];

const AboutSection = () => {
  const revealRef = useScrollReveal();

  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  }, []);

  return (
    <section id="about" ref={revealRef} className="relative border-b border-line/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left — narrative */}
          <div className="lg:col-span-5">
            <span data-reveal="fade" className="eyebrow">About the studio</span>
            <h2
              data-reveal="up"
              data-reveal-delay="1"
              className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-ink"
            >
              Small team. Real software.
            </h2>
            <p
              data-reveal="up"
              data-reveal-delay="2"
              className="mt-5 text-muted leading-relaxed"
            >
              We partner with founders and teams to turn ideas into
              production systems people actually use.
            </p>

            <div
              data-reveal="up"
              data-reveal-delay="3"
              className="mt-8 flex items-center gap-4"
            >
              <img
                src="/it.png"
                alt="Imhotep Tech"
                className="h-14 w-14 rounded-xl border border-line object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-sm text-ink font-semibold">Karim Bassem Joseph</p>
                <p className="text-xs text-subtle">Founder &amp; Lead Engineer</p>
              </div>
            </div>
          </div>

          {/* Right — highlights + stack */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div
                data-reveal="fade"
                className="mb-4 flex items-end justify-between gap-3"
              >
                <h3 className="text-sm font-semibold text-ink flex items-center gap-2">
                  <i className="fas fa-bookmark text-secondary" />
                  Featured products
                </h3>
                <a
                  href="#work"
                  className="text-xs font-medium text-muted hover:text-secondary transition-colors"
                >
                  See all work →
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {HIGHLIGHTS.map((h, i) => (
                  <a
                    key={h.title}
                    href={h.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-reveal="up"
                    data-reveal-delay={i + 1}
                    onMouseMove={handleMouseMove}
                    className="group flex flex-col rounded-xl border border-line bg-surface/60 p-5 hover-lift hover-glow hover:border-secondary/40"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                        <i className={h.icon} />
                      </span>
                      <i className="fas fa-arrow-up-right-from-square text-[11px] text-subtle group-hover:text-secondary transition-colors" />
                    </div>
                    <span className="mt-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-subtle">
                      {h.tag}
                    </span>
                    <h4 className="mt-1 text-sm font-semibold text-ink group-hover:text-secondary transition-colors">
                      {h.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">
                      {h.body}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            <div
              data-reveal="up"
              data-reveal-delay="4"
              className="rounded-2xl border border-line bg-surface/40 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-ink flex items-center gap-2">
                  <i className="fas fa-code text-secondary" />
                  Tech stack
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((t) => (
                  <span key={t.name} className="chip">
                    <i className={`${t.icon} text-secondary`} />
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
