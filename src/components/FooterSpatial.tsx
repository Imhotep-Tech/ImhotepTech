'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StudioClock from './StudioClock';
import { studioConfig, studioSocials } from '../data/studio-data';

export default function FooterSpatial() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060A10] border-t border-[#D4AF37]/20 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Studio Brand & Identity */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link
              href="/"
              className="flex items-center gap-3.5 group min-h-[44px] mb-4"
            >
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#162132] border-2 border-[#D4AF37]/60 shadow-[0_0_15px_rgba(212,175,55,0.25)] flex-shrink-0">
                <Image
                  src="/it-emblem.jpeg"
                  alt="Imhotep Tech Insignia"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                  {studioConfig.name}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] leading-tight mt-0.5">
                  Engineering Studio • Cairo
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Building custom web applications, APIs, enterprise business workflows, and developer tools. Designed for long-term production durability.
            </p>

            <StudioClock />

            <div className="mt-4">
              <a
                href={`mailto:${studioConfig.email}`}
                className="text-xs font-mono text-slate-400 hover:text-[#D4AF37] transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-3.5 h-3.5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{studioConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#D4AF37] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#projects" className="hover:text-[#D4AF37] transition-colors py-1 inline-block min-h-[36px] flex items-center">
                  Production Systems
                </a>
              </li>
              <li>
                <a href="#developer-tools" className="hover:text-[#D4AF37] transition-colors py-1 inline-block min-h-[36px] flex items-center">
                  Developer Tools &amp; APIs
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-[#D4AF37] transition-colors py-1 inline-block min-h-[36px] flex items-center">
                  Architecture &amp; Stack
                </a>
              </li>
              <li>
                <a href="#founder" className="hover:text-[#D4AF37] transition-colors py-1 inline-block min-h-[36px] flex items-center">
                  Founder &amp; Philosophy
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF37] transition-colors py-1 inline-block min-h-[36px] flex items-center">
                  Direct Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect & Channels */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#D4AF37] mb-4">
              Studio Channels &amp; Repositories
            </h3>

            <div className="space-y-2.5">
              {studioSocials.slice(0, 4).map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 transition-colors text-xs text-slate-300 min-h-[44px]"
                >
                  <span className="font-semibold text-white">{platform.name}</span>
                  <span className="font-mono text-[#D4AF37] text-[11px]">{platform.username}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            © {currentYear} {studioConfig.name}. Designed &amp; engineered in Cairo, Egypt.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-slate-300 transition-colors min-h-[44px] px-3 py-1 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
}
