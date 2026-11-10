'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AmbientCanvas from '../../components/AmbientCanvas';
import StudioClock from '../../components/StudioClock';
import TiltCard, { TiltLayer } from '../../components/TiltCard';
import { studioSocials, studioConfig, founderData } from '../../data/studio-data';

export default function CommunityPage() {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);

  const shareUrl = typeof window !== 'undefined'
    ? window.location.href
    : 'https://www.imhotep-tech.com/community';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2400);
  };

  const handleCopyHandle = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHandle(id);
    setTimeout(() => setCopiedHandle(null), 2000);
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'Imhotep Tech — Community & Social Channels',
          text: 'Official channels for Imhotep Tech software studio: GitHub, LinkedIn, X, Threads, and Instagram.',
          url: shareUrl,
        });
      } catch {
        handleCopyLink();
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0B1019] text-[#F8FAFC] selection:bg-[#D4AF37]/30 selection:text-white py-12 px-4 sm:px-6">
      <AmbientCanvas />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
        
        {/* Top Back Navigation & Cairo Clock */}
        <div className="w-full flex items-center justify-between mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#111A28]/80 hover:bg-[#162132] border border-[#D4AF37]/25 text-xs font-semibold text-slate-300 hover:text-white transition-colors min-h-[44px]"
          >
            <svg className="w-4 h-4 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Studio</span>
          </Link>

          <StudioClock />
        </div>

        {/* Studio Insignia Centerpiece */}
        <TiltCard maxTilt={8} glareOpacity={0.25} className="w-full mb-8">
          <div className="rounded-3xl bg-[#111A28]/90 backdrop-blur-2xl border border-[#D4AF37]/30 p-8 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),0_0_35px_rgba(212,175,55,0.18)] flex flex-col items-center text-center">
            
            <TiltLayer depth={30} className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden bg-[#162132] border-2 border-[#D4AF37]/50 shadow-2xl mb-6 p-1">
              <Image
                src="/it-square.jpeg"
                alt="Imhotep Tech Insignia"
                fill
                priority
                sizes="128px"
                className="object-cover rounded-2xl"
              />
            </TiltLayer>

            <TiltLayer depth={24} className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-mono font-semibold text-[#D4AF37]">
                <span>OFFICIAL COMMUNITY HUB</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {studioConfig.name}
              </h1>
              <p className="text-sm text-slate-300 max-w-sm">
                Software studio building custom web apps, APIs, enterprise workflows, and developer tools.
              </p>
            </TiltLayer>

            {/* Quick Share Buttons */}
            <TiltLayer depth={28} className="flex items-center gap-3 w-full mt-6 pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={handleNativeShare}
                className="flex-1 py-3 px-4 rounded-xl bg-[#D4AF37] hover:bg-[#E5C058] text-[#1B1400] font-bold text-xs sm:text-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2 min-h-[44px]"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <span>Share Hub Link</span>
              </button>

              <button
                type="button"
                onClick={handleCopyLink}
                className="flex-1 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs sm:text-sm border border-white/10 transition-colors flex items-center justify-center gap-2 min-h-[44px]"
              >
                {copiedLink ? (
                  <>
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </TiltLayer>

          </div>
        </TiltCard>

        {/* All Channels List */}
        <div className="w-full space-y-3.5 mb-12">
          {studioSocials.map((platform) => (
            <div
              key={platform.name}
              className="rounded-2xl bg-[#111A28]/85 backdrop-blur-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 p-4 transition-all duration-200 group flex items-center justify-between gap-4 shadow-sm"
            >
              <div className="flex items-center gap-3.5 overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-[#162132] border border-white/10 flex items-center justify-center text-[#D4AF37] font-mono text-sm font-bold flex-shrink-0 group-hover:border-[#D4AF37]/40 transition-colors">
                  {platform.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="truncate">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {platform.name}
                    </span>
                    {platform.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/25">
                        {platform.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 truncate">
                    {platform.username} • {platform.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => handleCopyHandle(platform.url, platform.name)}
                  className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-mono transition-colors min-h-[44px] flex items-center"
                  title="Copy link"
                >
                  {copiedHandle === platform.name ? (
                    <span className="text-emerald-400 font-sans">Copied</span>
                  ) : (
                    <span>Copy</span>
                  )}
                </button>

                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#D4AF37]/15 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#1B1400] text-xs font-bold transition-all duration-200 min-h-[44px] flex items-center gap-1.5"
                >
                  <span>Open</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}

          {/* Direct Email Card */}
          <div className="rounded-2xl bg-[#111A28]/85 backdrop-blur-xl border border-white/10 p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-[#162132] border border-white/10 flex items-center justify-center text-emerald-400 font-mono text-sm font-bold flex-shrink-0">
                @
              </div>
              <div className="truncate">
                <span className="text-base font-bold text-white block">
                  Direct Studio Email
                </span>
                <span className="text-xs text-slate-400 block truncate">
                  {studioConfig.email}
                </span>
              </div>
            </div>

            <a
              href={`mailto:${studioConfig.email}`}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors min-h-[44px] flex items-center gap-1.5 flex-shrink-0"
            >
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs font-mono text-slate-500 space-y-1">
          <p>© {new Date().getFullYear()} {studioConfig.name}. Cairo, Egypt.</p>
          <p className="text-slate-400">Founder: {founderData.name}</p>
        </div>

      </div>
    </div>
  );
}
