import React from 'react';
import AmbientCanvas from '../components/AmbientCanvas';
import HeaderNav from '../components/HeaderNav';
import HeroSpatial from '../components/HeroSpatial';
import ProjectsSectionSpatial from '../components/ProjectsSectionSpatial';
import LibrariesSectionSpatial from '../components/LibrariesSectionSpatial';
import TechStackSpatial from '../components/TechStackSpatial';
import FounderSpatial from '../components/FounderSpatial';
import ContactSpatial from '../components/ContactSpatial';
import FooterSpatial from '../components/FooterSpatial';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#0B1019] text-[#F8FAFC] selection:bg-[#D4AF37]/30 selection:text-white">
      {/* 1. Ambient Floating Canvas with Orbs & Parallax Glyphs */}
      <AmbientCanvas />

      {/* 2. Glassmorphic Navigation Header */}
      <HeaderNav />

      {/* 3. Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <HeroSpatial />
        <ProjectsSectionSpatial />
        <LibrariesSectionSpatial />
        <TechStackSpatial />
        <FounderSpatial />
        <ContactSpatial />
      </main>

      {/* 4. Spatial Studio Footer */}
      <FooterSpatial />
    </div>
  );
}
