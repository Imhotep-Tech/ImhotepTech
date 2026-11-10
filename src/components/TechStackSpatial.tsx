'use client';

import React from 'react';
import TiltCard, { TiltLayer } from './TiltCard';
import { techStackCategories } from '../data/studio-data';

export default function TechStackSpatial() {
  return (
    <section id="architecture" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-mono font-medium text-[#D4AF37] mb-4">
            <span>ENGINEERING STACK & FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Architecture chosen for durability, not trends.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We build systems designed to operate smoothly for years. We favor clean service-layer design, typed contracts, relational integrity, and isolated containers.
          </p>
        </div>

        {/* 4-Column / 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techStackCategories.map((category) => (
            <TiltCard
              key={category.id}
              maxTilt={7}
              glareOpacity={0.16}
              glareColor="rgba(212, 175, 55, 0.3)"
              className="h-full flex flex-col"
            >
              <div className="h-full rounded-2xl bg-[#111A28]/85 backdrop-blur-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/45 p-6 sm:p-8 shadow-[0_12px_35px_-10px_rgba(0,0,0,0.6),0_20px_45px_-15px_rgba(212,175,55,0.08)] flex flex-col justify-between transition-colors duration-300">
                
                <div>
                  {/* Category Header */}
                  <TiltLayer depth={22} className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#D4AF37]">
                      {category.tag}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Production Core
                    </span>
                  </TiltLayer>

                  <TiltLayer depth={26} className="mb-2">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {category.category}
                    </h3>
                  </TiltLayer>

                  <TiltLayer depth={20} className="mb-6">
                    <p className="text-sm text-slate-300">
                      {category.description}
                    </p>
                  </TiltLayer>

                  {/* Skills List */}
                  <TiltLayer depth={24} className="space-y-3 pt-2">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#D4AF37]/30 transition-colors"
                      >
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-white">
                            {skill.name}
                          </span>
                          <span className="text-xs text-slate-400">
                            {skill.role}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-300 bg-[#D4AF37]/10 text-[#D4AF37] px-2.5 py-1 rounded-md border border-[#D4AF37]/20">
                          {skill.highlight}
                        </span>
                      </div>
                    ))}
                  </TiltLayer>
                </div>

              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
