'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StudioClock from './StudioClock';
import { studioConfig } from '../data/studio-data';

interface HeaderNavProps {
  activeSection?: string;
}

export default function HeaderNav({ activeSection = 'hero' }: HeaderNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'Developer Tools', href: '#developer-tools' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Studio & Founder', href: '#founder' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const targetId = href.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        const navHeight = 84;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#0B1019]/90 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-[0_12px_35px_-10px_rgba(0,0,0,0.8),0_4px_20px_rgba(212,175,55,0.08)]'
          : 'py-5 bg-[#0B1019]/60 backdrop-blur-md border-b border-[#D4AF37]/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Studio Identifier (Crisp, High-Legibility Emblem) */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-xl px-1"
          >
            <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-[#162132] border-2 border-[#D4AF37]/60 shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_22px_rgba(212,175,55,0.45)] flex-shrink-0">
              <Image
                src="/it-emblem.jpeg"
                alt="Imhotep Tech Insignia"
                fill
                priority
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                {studioConfig.name}
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] leading-tight mt-0.5">
                Engineering Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#111A28]/85 backdrop-blur-xl px-3 py-1.5 rounded-full border border-[#D4AF37]/20 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all min-h-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Header: Clock & Direct Project CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <StudioClock />

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#1B1400] bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B88E28] hover:from-white hover:to-[#D4AF37] rounded-xl shadow-[0_4px_20px_rgba(212,175,55,0.4)] border border-[#F5D77F]/60 transition-all duration-200 hover:-translate-y-0.5 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile Hamburger Toggle (strictly >= 44px touch target) */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#111A28] border border-[#D4AF37]/30 text-slate-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 rounded-2xl bg-[#111A28]/95 backdrop-blur-2xl border border-[#D4AF37]/25 shadow-2xl animate-fade-in-up">
            <div className="mb-4 pb-3 border-b border-white/10 flex justify-center">
              <StudioClock />
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-xl transition-colors min-h-[44px] flex items-center"
                >
                  {link.label}
                </a>
              ))}
              
              <div className="pt-3 mt-2 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full flex items-center justify-center py-3 text-sm font-semibold text-[#1B1400] bg-gradient-to-r from-[#F5D77F] to-[#D4AF37] rounded-xl shadow-md min-h-[44px]"
                >
                  Start a Project
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
