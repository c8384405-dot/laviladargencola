import React from 'react';
import { Info, Trees, Users, Bed, Mountain, Image as ImageIcon } from 'lucide-react';
import { AUTHENTIC_PHOTOS } from '../data/hotelData';
import { Language, TRANSLATIONS } from '../data/translations';

interface HeroProps {
  currentLang: Language;
  onOpenSeeMore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenSeeMore }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <header
      id="inicio"
      className="relative min-h-[88vh] sm:min-h-screen flex items-center justify-center text-white overflow-hidden pt-20"
    >
      {/* Background Photography (Authentic photo of La Vila) */}
      <div className="absolute inset-0 z-0">
        <img
          src={AUTHENTIC_PHOTOS[0]}
          alt="La Vila d'Argençola"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Editorial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-black/55 to-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/30 to-black/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center">
        {/* Top Eyebrow */}
        <div className="inline-flex items-center space-x-2 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#D4AF37]/50 mb-6 shadow-md">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#FDFBF7]">
            {t.hero.tagline}
          </span>
        </div>

        {/* Main Display Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-[1.12]">
          {t.hero.title}
        </h1>

        {/* Subtitle description */}
        <p className="text-stone-200 text-sm sm:text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-10 text-balance">
          {t.hero.description}
        </p>

        {/* CTA Buttons Row - Reservar, Saber Más & Ver Galería */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-2xl mb-12">
          {/* Direct Booking on Platforms Link */}
          <a
            href="#reservas"
            className="w-full sm:w-auto px-7 py-3.5 bg-[#D4AF37] hover:bg-[#c49f2e] text-stone-950 font-bold text-xs uppercase tracking-widest rounded-xs transition-all shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2 cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>{t.nav.bookNow} (Plataformas)</span>
          </a>

          {/* See More Complete Info */}
          <button
            onClick={onOpenSeeMore}
            className="w-full sm:w-auto px-6 py-3.5 bg-stone-900/80 hover:bg-stone-900 text-white font-bold text-xs uppercase tracking-widest rounded-xs border border-[#D4AF37]/60 hover:border-[#D4AF37] transition-all backdrop-blur-md flex items-center justify-center space-x-2 cursor-pointer transform hover:-translate-y-0.5"
          >
            <Info className="w-4 h-4 text-[#D4AF37]" />
            <span>{t.nav.seeMore}</span>
          </button>

          {/* View Gallery Link */}
          <a
            href="#galeria"
            className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-xs border border-white/40 hover:border-white transition-all backdrop-blur-md flex items-center justify-center space-x-2 cursor-pointer"
          >
            <ImageIcon className="w-4 h-4 text-[#D4AF37]" />
            <span>{t.nav.gallery}</span>
          </a>
        </div>

        {/* Key Estate Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-4xl pt-4 border-t border-white/15">
          <div className="p-3.5 bg-black/40 backdrop-blur-sm rounded-xs border border-white/10 flex flex-col items-center">
            <Trees className="w-5 h-5 text-[#D4AF37] mb-1" />
            <span className="text-base sm:text-lg font-bold font-serif text-white">{t.hero.estatesize}</span>
            <span className="text-[10px] uppercase tracking-wider text-stone-400">Naturaleza libre</span>
          </div>

          <div className="p-3.5 bg-black/40 backdrop-blur-sm rounded-xs border border-white/10 flex flex-col items-center">
            <Users className="w-5 h-5 text-[#D4AF37] mb-1" />
            <span className="text-base sm:text-lg font-bold font-serif text-white">{t.hero.capacity}</span>
            <span className="text-[10px] uppercase tracking-wider text-stone-400">Familias & Grupos</span>
          </div>

          <div className="p-3.5 bg-black/40 backdrop-blur-sm rounded-xs border border-white/10 flex flex-col items-center">
            <Bed className="w-5 h-5 text-[#D4AF37] mb-1" />
            <span className="text-base sm:text-lg font-bold font-serif text-white">{t.hero.rooms}</span>
            <span className="text-[10px] uppercase tracking-wider text-stone-400">Baños en suite</span>
          </div>

          <div className="p-3.5 bg-black/40 backdrop-blur-sm rounded-xs border border-white/10 flex flex-col items-center">
            <Mountain className="w-5 h-5 text-[#D4AF37] mb-1" />
            <span className="text-base sm:text-lg font-bold font-serif text-white">{t.hero.geopark}</span>
            <span className="text-[10px] uppercase tracking-wider text-stone-400">Cataluña Central</span>
          </div>
        </div>
      </div>
    </header>
  );
};
