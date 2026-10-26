import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MatchesSection from './components/MatchesSection';
import SquadSection from './components/SquadSection';
import GallerySection from './components/GallerySection';
import FinanceSponsorSection from './components/FinanceSponsorSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white flex flex-col selection:bg-[#0D6EFD] selection:text-white">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Jadwal Pertandingan */}
        <MatchesSection />

        {/* 4. Squad Pemain */}
        <SquadSection />

        {/* 5. Galeri Klub */}
        <GallerySection />

        {/* 6. Banner Sponsor & Dukungan Kas Klub */}
        <FinanceSponsorSection />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
