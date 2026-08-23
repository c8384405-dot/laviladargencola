import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { MasonryGallery } from './components/MasonryGallery';
import { BookingSection } from './components/BookingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { SeeMoreModal } from './components/SeeMoreModal';
import { Language, TRANSLATIONS } from './data/translations';
import { Info } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('es');
  const [isSeeMoreOpen, setIsSeeMoreOpen] = useState<boolean>(false);

  const t = TRANSLATIONS[currentLang];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] flex flex-col selection:bg-[#D4AF37] selection:text-stone-950 font-sans">
      {/* Sticky Navigation Header with Multilingual Switcher and Logo */}
      <Navbar
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        onOpenSeeMore={() => setIsSeeMoreOpen(true)}
      />

      {/* Main Website Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenSeeMore={() => setIsSeeMoreOpen(true)}
        />

        {/* About Section: Masía del XVIII, Modernismo 1922, 166 Ha */}
        <AboutSection
          currentLang={currentLang}
          onOpenSeeMore={() => setIsSeeMoreOpen(true)}
        />

        {/* Experiences & Activities: Text-Only (NO images) */}
        <ExperiencesSection
          currentLang={currentLang}
        />

        {/* Gallery: Photos & Architectural Floor Plans */}
        <MasonryGallery
          currentLang={currentLang}
        />

        {/* Official Direct Booking Channels & Platforms: Booking, Airbnb, EscapadaRural, Bodas.net */}
        <BookingSection
          currentLang={currentLang}
        />

        {/* Guest Reviews & Testimonials Carousel with Google Maps link */}
        <TestimonialsSection
          currentLang={currentLang}
        />
      </main>

      {/* Elegant Footer with Google Maps Link */}
      <Footer
        currentLang={currentLang}
        onOpenSeeMore={() => setIsSeeMoreOpen(true)}
      />

      {/* "See More" Comprehensive Details Modal */}
      <SeeMoreModal
        isOpen={isSeeMoreOpen}
        onClose={() => setIsSeeMoreOpen(false)}
        currentLang={currentLang}
      />

      {/* Floating Action Button for Quick Access to "See More" */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center space-x-2">
        <button
          onClick={() => setIsSeeMoreOpen(true)}
          className="px-4 py-3 bg-[#1A1A1A] hover:bg-[#D4AF37] text-[#FDFBF7] hover:text-stone-950 text-xs font-bold uppercase tracking-wider rounded-full shadow-2xl border border-[#D4AF37]/50 transition-all flex items-center space-x-2 cursor-pointer transform hover:scale-105"
          aria-label="Abrir información completa"
        >
          <Info className="w-4 h-4 text-[#D4AF37] group-hover:text-stone-950" />
          <span>{t.nav.seeMore}</span>
        </button>
      </div>
    </div>
  );
}

