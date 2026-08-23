import React from 'react';
import { Sparkles, CheckCircle2, Trees, Shield, ArrowRight, Info, Compass, MapPin } from 'lucide-react';
import { AUTHENTIC_PHOTOS, HOTEL_INFO } from '../data/hotelData';
import { Language, TRANSLATIONS } from '../data/translations';

interface AboutSectionProps {
  currentLang: Language;
  onOpenSeeMore: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang, onOpenSeeMore }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="historia" className="py-20 sm:py-28 bg-[#FDFBF7] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-[#5C6B3A] mb-2">
            <span className="h-px w-8 bg-[#5C6B3A]"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-bold">
              {t.about.badge}
            </span>
            <span className="h-px w-8 bg-[#5C6B3A]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-2 mb-4">
            {t.about.title}
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p className="font-serif text-lg sm:text-xl text-[#1A1A1A] font-medium leading-snug">
              {t.about.p1}
            </p>
            <p className="text-stone-600">
              {t.about.p2}
            </p>
            <p className="text-stone-600">
              {t.about.p3}
            </p>

            {/* Common Spaces Box */}
            <div className="p-6 bg-white rounded-xs border-t-2 border-[#D4AF37] border-x border-b border-stone-200 shadow-sm mt-6">
              <h3 className="font-serif text-base font-bold text-[#1A1A1A] uppercase tracking-wider mb-4 flex items-center space-x-2">
                <Compass className="w-4 h-4 text-[#5C6B3A]" />
                <span>{t.about.commonSpacesTitle}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {t.about.commonSpaces.map((space, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-xs text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-[#5C6B3A] shrink-0" />
                    <span className="font-medium">{space}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Triggers for See More & Google Maps */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenSeeMore}
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#1A1A1A] hover:bg-[#D4AF37] text-white hover:text-stone-950 text-xs font-bold uppercase tracking-widest rounded-xs transition-all shadow-md cursor-pointer group"
              >
                <Info className="w-4 h-4 text-[#D4AF37] group-hover:text-stone-950" />
                <span>{t.about.seeFullDetailBtn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3.5 bg-white hover:bg-stone-100 text-stone-900 text-xs font-bold uppercase tracking-widest rounded-xs border border-stone-300 transition-all shadow-xs group cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#5C6B3A]" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Visual Image Pair */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-xs overflow-hidden border border-stone-200 shadow-md">
              <img
                src={AUTHENTIC_PHOTOS[1] || AUTHENTIC_PHOTOS[0]}
                alt="La Vila d'Argençola fachada y entorno"
                className="w-full aspect-4/3 object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-3 left-3 bg-[#1A1A1A]/80 backdrop-blur-xs text-[#FDFBF7] text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-xs border border-white/10">
                166 Hectáreas Privadas
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xs overflow-hidden border border-stone-200 shadow-sm">
                <img
                  src={AUTHENTIC_PHOTOS[2] || AUTHENTIC_PHOTOS[0]}
                  alt="Detalle masía"
                  className="w-full aspect-4/3 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative rounded-xs overflow-hidden border border-stone-200 shadow-sm">
                <img
                  src={AUTHENTIC_PHOTOS[3] || AUTHENTIC_PHOTOS[0]}
                  alt="Interiores restaurados"
                  className="w-full aspect-4/3 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
