'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { studioSocials, studioConfig } from '../data/studio-data';

interface CommunityHubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommunityHubModal({ isOpen, onClose }: CommunityHubModalProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedPlatform, setCopiedPlatform] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentShareUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/community`
    : 'https://www.imhotep-tech.com/community';

  const handleCopyShareLink = () => {
    navigator.clipboard.writeText(currentShareUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2400);
  };

  const handleCopyHandle = (text: string, platformName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPlatform(platformName);
    setTimeout(() => setCopiedPlatform(null), 2000);
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'Imhotep Tech — Community & Social Hub',
          text: 'Connect with Imhotep Tech across GitHub, LinkedIn, X, Threads, and Instagram.',
          url: currentShareUrl,
        });
      } catch {
        // User cancelled or failed; fallback to copy
        handleCopyShareLink();
      }
    } else {
      handleCopyShareLink();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="community-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-[#111A28] border border-[#D4AF37]/30 p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.2)] text-white overflow-hidden animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Top Gold Glow */}
        <div
          aria-hidden="true"
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-32 bg-[#D4AF37]/20 rounded-full blur-3xl pointer-events-none"
        />

        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-[#162132] border-2 border-[#D4AF37]/40 shadow-lg flex-shrink-0">
              <Image
                src="/it-square.jpeg"
                alt="Imhotep Tech Insignia"
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] font-semibold">
                Official Studio Channels
              </span>
              <h2 id="community-modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Imhotep Tech Community Hub
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            aria-label="Close dialog"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Quick Link Share Action Banner */}
        <div className="my-6 p-4 rounded-2xl bg-[#162132]/90 border border-[#D4AF37]/25 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-3 overflow-hidden w-full sm:w-auto">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
            <div className="truncate">
              <span className="text-xs text-slate-400 block font-mono">Shareable Link-in-Bio URL:</span>
              <span className="text-xs sm:text-sm font-mono text-slate-200 truncate block">
                {currentShareUrl}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end flex-shrink-0">
            <button
              type="button"
              onClick={handleNativeShare}
              className="px-4 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#E5C058] text-[#1B1400] font-bold text-xs sm:text-sm shadow-md transition-all duration-200 flex items-center justify-center gap-1.5 min-h-[44px] flex-1 sm:flex-initial focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              <span>Share Link</span>
            </button>

            <button
              type="button"
              onClick={handleCopyShareLink}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs sm:text-sm border border-white/10 transition-colors flex items-center justify-center gap-1.5 min-h-[44px] flex-1 sm:flex-initial focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
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
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Channels List */}
        <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1 relative z-10">
          {studioSocials.map((platform) => (
            <div
              key={platform.name}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3.5 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-[#162132] border border-white/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0 group-hover:border-[#D4AF37]/50 transition-colors">
                  <span className="font-mono text-xs font-bold uppercase">
                    {platform.name.slice(0, 2)}
                  </span>
                </div>
                <div className="truncate">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {platform.name}
                    </h3>
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
                  className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono transition-colors min-h-[38px] flex items-center"
                  title={`Copy ${platform.name} URL`}
                >
                  {copiedPlatform === platform.name ? (
                    <span className="text-emerald-400 font-sans text-xs">Copied</span>
                  ) : (
                    <span>Copy</span>
                  )}
                </button>

                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-[#D4AF37]/20 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#1B1400] text-xs font-semibold transition-all duration-200 min-h-[38px] flex items-center gap-1"
                >
                  <span>Open</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer Note */}
        <div className="pt-5 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>{studioConfig.name} • Cairo, Egypt</span>
          <a
            href={`mailto:${studioConfig.email}`}
            className="text-[#D4AF37] hover:underline"
          >
            {studioConfig.email}
          </a>
        </div>

      </div>
    </div>
  );
}
