'use client';

import React, { useState } from 'react';
import TiltCard, { TiltLayer } from './TiltCard';
import StudioClock from './StudioClock';
import { studioConfig, studioSocials } from '../data/studio-data';

export default function ContactSpatial() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(studioConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl bg-gradient-to-b from-[#111A28]/95 via-[#0D1524]/95 to-[#070B14] border-2 border-[#D4AF37]/25 p-8 sm:p-12 lg:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(212,175,55,0.12)] overflow-hidden">
            
            {/* Subtle Gold Accent Glow */}
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Direct Pitch */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-mono font-medium text-[#D4AF37]">
                    <span>DIRECT INQUIRIES</span>
                  </div>
                  <StudioClock />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                  Have a project or problem to solve?
                </h2>

                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
                  Whether you need a custom web platform, ERP addons, or automation pipelines, let&apos;s talk. We reply directly with realistic scopes, architecture suggestions, and honest engineering timelines.
                </p>

                {/* Direct Email & Community Share Action */}
                <div className="flex flex-wrap items-center gap-3.5">
                  <a
                    href={`mailto:${studioConfig.email}`}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-[#1B1400] bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B88E28] hover:from-white hover:to-[#D4AF37] rounded-xl shadow-[0_8px_25px_-5px_rgba(212,175,55,0.5)] border border-[#F5D77F]/60 transition-all duration-200 min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    <svg className="w-5 h-5 text-[#1B1400]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Email: {studioConfig.email}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-colors min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                    aria-label="Copy studio email address"
                  >
                    {copiedEmail ? (
                      <>
                        <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-emerald-400">Email Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>

              </div>

              {/* Right Column: Studio Response SLA & Channels */}
              <div className="lg:col-span-5">
                <TiltCard
                  maxTilt={6}
                  glareOpacity={0.2}
                  glareColor="rgba(212, 175, 55, 0.4)"
                >
                  <div className="rounded-2xl bg-[#0B1019]/85 backdrop-blur-xl border border-[#D4AF37]/25 p-6 sm:p-7 shadow-lg">
                    <TiltLayer depth={22} className="mb-4">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] font-semibold block mb-1">
                        Direct Engagement SLA
                      </span>
                      <h3 className="text-lg font-bold text-white">
                        Fast, direct founder response
                      </h3>
                    </TiltLayer>

                    <TiltLayer depth={18} className="space-y-3 mb-6 text-xs text-slate-300">
                      <div className="flex items-start gap-2.5">
                        <span className="text-[#D4AF37] font-bold text-sm">✓</span>
                        <span>Technical scoping response within 24 hours (Cairo timezone).</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="text-[#D4AF37] font-bold text-sm">✓</span>
                        <span>Direct discussion with Karim Bassem — founder engineering.</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="text-[#D4AF37] font-bold text-sm">✓</span>
                        <span>Full IP transfer and verifiable deployment handover.</span>
                      </div>
                    </TiltLayer>

                    {/* Social Channel Links */}
                    <TiltLayer depth={24} className="pt-4 border-t border-white/10">
                      <div className="mb-3">
                        <span className="text-[11px] font-mono text-slate-400">
                          Studio Social Channels:
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {studioSocials.slice(0, 4).map((social) => (
                          <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-[#D4AF37]/15 hover:border-[#D4AF37]/35 transition-colors min-h-[44px] flex items-center justify-between group/link"
                          >
                            <span className="text-xs font-medium text-slate-200 group-hover/link:text-[#D4AF37]">
                              {social.name}
                            </span>
                            <svg className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-[#D4AF37] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </TiltLayer>

                  </div>
                </TiltCard>
              </div>

            </div>

          </div>

        </div>
      </section>
  );
}
