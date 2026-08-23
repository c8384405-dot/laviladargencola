import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Info } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { Language, TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenSeeMore: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onSelectLang, onOpenSeeMore }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.history, href: "#historia" },
    { label: t.nav.experiences, href: "#actividades" },
    { label: t.nav.gallery, href: "#galeria" },
    { label: t.nav.bookNow, href: "#reservas" },
    { label: t.nav.reviews, href: "#opiniones" },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1A1A1A]/95 text-white backdrop-blur-md shadow-lg py-3 border-b border-[#D4AF37]/30'
          : 'bg-gradient-to-b from-black/85 via-black/50 to-transparent text-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Details */}
          <a
            href="#inicio"
            className="flex items-center space-x-3 group cursor-pointer focus:outline-none"
            aria-label="La Vila d'Argençola"
          >
            <img
              src={HOTEL_INFO.logo}
              alt="Logo La Vila d'Argençola"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain bg-white/95 rounded-full p-1 shadow-md border border-[#D4AF37]/70 group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                {HOTEL_INFO.name}
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-[#D4AF37] font-semibold">
                Masía 1922 · 166 Hectáreas Privadas
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-xs uppercase tracking-widest font-semibold text-stone-200 hover:text-[#D4AF37] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions: Language Switcher & Direct Booking link */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-black/40 border border-stone-700/80 rounded-xs p-0.5 text-xs font-semibold">
              <span className="px-1.5 text-stone-400">
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
              </span>
              {(['es', 'ca', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onSelectLang(lang)}
                  className={`px-2.5 py-1 uppercase rounded-xs text-[11px] font-bold transition-colors cursor-pointer ${
                    currentLang === lang
                      ? 'bg-[#D4AF37] text-stone-950 shadow-xs'
                      : 'text-stone-300 hover:text-white'
                  }`}
                  aria-label={`Cambiar a ${lang.toUpperCase()}`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Quick Book Now Button */}
            <a
              href="#reservas"
              className="px-3.5 py-1.5 bg-[#D4AF37] hover:bg-[#c49f2e] text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xs transition-all shadow-md cursor-pointer"
            >
              {t.nav.bookNow}
            </a>
          </div>

          {/* Mobile Menu Button & Mini Switcher */}
          <div className="flex sm:hidden items-center space-x-2">
            {/* Language Switcher Mobile Mini */}
            <div className="flex bg-black/50 border border-stone-700 rounded-xs text-[10px] font-bold">
              {(['es', 'ca', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onSelectLang(lang)}
                  className={`px-1.5 py-1 uppercase ${
                    currentLang === lang ? 'bg-[#D4AF37] text-stone-950' : 'text-stone-300'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xs text-stone-300 hover:text-white bg-black/40 border border-stone-700"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1A1A1A] border-b border-[#D4AF37]/40 px-4 pt-4 pb-6 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-wider uppercase text-stone-200 hover:text-[#D4AF37] py-2 border-b border-stone-800"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSeeMore();
              }}
              className="w-full text-left text-sm font-bold tracking-wider uppercase text-[#D4AF37] py-2 border-b border-stone-800 flex items-center justify-between cursor-pointer"
            >
              <span>{t.nav.seeMore}</span>
              <Info className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

