import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';

const SERVICES = [
  {
    icon: 'fas fa-rocket',
    title: 'Product development',
    body: 'New web apps, SaaS products and MVPs — from discovery to launch.',
  },
  {
    icon: 'fas fa-gears',
    title: 'Business automation',
    body: 'Internal tools, dashboards and workflows that save real hours.',
  },
  {
    icon: 'fas fa-plug',
    title: 'APIs & integrations',
    body: 'REST APIs, third‑party integrations and data pipelines.',
  },
  {
    icon: 'fas fa-arrows-rotate',
    title: 'Maintenance & support',
    body: 'Keep existing systems stable, performant and secure.',
  },
];

const ServicesStrip = () => (
  <section className="relative border-b border-line/70 bg-surface/30">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
      <div className="mb-8 flex items-end justify-between flex-wrap gap-4">
        <div>
          <span className="eyebrow">What we do</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-ink">
            Engineering services, end to end.
          </h2>
        </div>
        <p className="max-w-md text-sm text-muted">
          One team covering design, engineering and delivery — so your project
          never stalls waiting on hand‑offs.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="group rounded-xl border border-line bg-surface/60 p-5 hover-lift hover:border-secondary/40"
          >
            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
              <i className={s.icon} />
            </div>
            <h3 className="text-sm font-semibold text-ink">{s.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <SEOHelmet
        title="Imhotep Tech - Custom Software Development & Web Applications | Egypt"
        description="Independent software studio based in Egypt. We design and build dependable web apps, business automation and APIs end-to-end."
        keywords="custom software development, web application development, Egypt software company, Django, React, Python, business automation, Imhotep Tech"
        canonical="https://imhoteptech.vercel.app/"
      />

      <div className="relative w-full">
        <Navbar currentPage="home" />
        <main>
          <Hero />
          <ServicesStrip />
          <AboutSection />
          <ProjectsSection />
          <CTASection />
        </main>
        <Footer />

        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary shadow-soft hover:bg-secondary/90 transition-colors"
          >
            <i className="fas fa-arrow-up" />
          </button>
        )}
      </div>
    </>
  );
};

export default Home;
