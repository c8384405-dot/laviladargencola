import React from 'react';
import { ExternalLink, ShieldCheck, Sparkles, Youtube, CheckCircle2, Home, Building2, Trees, Heart } from 'lucide-react';
import { HOTEL_INFO, OFFICIAL_PLATFORMS } from '../data/hotelData';
import { Language, TRANSLATIONS } from '../data/translations';

interface BookingSectionProps {
  currentLang: Language;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const b = t.booking;

  const getPlatformIcon = (iconName: string) => {
    switch (iconName) {
      case 'airbnb':
        return Home;
      case 'booking':
        return Building2;
      case 'escapadarural':
        return Trees;
      case 'bodas':
        return Heart;
      case 'youtube':
        return Youtube;
      default:
        return ExternalLink;
    }
  };

  const platforms = OFFICIAL_PLATFORMS.filter(p => p.icon !== 'youtube');

  return (
    <section id="reservas" className="py-20 sm:py-28 bg-[#1A1A1A] text-white border-b border-stone-800 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-[#D4AF37] mb-2">
            <span className="h-px w-8 bg-[#D4AF37]"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-bold">
              {b.badge}
            </span>
            <span className="h-px w-8 bg-[#D4AF37]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            {b.title}
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {b.subtitle}
          </p>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* 4 Official Booking Platforms Grid: Booking, Airbnb, EscapadaRural, Bodas.net */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {platforms.map((platform, idx) => {
            const Icon = getPlatformIcon(platform.icon);
            return (
              <a
                key={idx}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#242424] hover:bg-[#2A2A2A] rounded-xs border-t-2 border-[#D4AF37] border-x border-b border-stone-800 p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:border-stone-600 cursor-pointer"
              >
                <div>
                  {/* Top: Icon + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xs flex items-center justify-center shadow-md group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: `${platform.color}18`, color: platform.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-stone-300 bg-stone-800/90 px-2.5 py-1 rounded-xs border border-stone-700">
                      {platform.badge}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-2 flex items-center justify-between">
                    <span>{platform.name}</span>
                    <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-[#D4AF37] transition-colors" />
                  </h3>

                  {/* Description */}
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {platform.description}
                  </p>
                </div>

                {/* Direct Action Button */}
                <div className="w-full py-3 bg-[#D4AF37] group-hover:bg-[#c49f2e] text-stone-950 font-bold text-xs uppercase tracking-widest rounded-xs text-center transition-colors flex items-center justify-center space-x-1.5 shadow-md">
                  <span>Reservar en {platform.name}</span>
                </div>
              </a>
            );
          })}
        </div>

        {/* YouTube Channel Banner */}
        <div className="bg-[#242424] rounded-xs border border-stone-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-16 shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-xs bg-red-600/20 border border-red-600/40 flex items-center justify-center shrink-0">
              <Youtube className="w-8 h-8 text-red-500" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-red-400 font-bold mb-0.5">
                Canal Oficial de Vídeos
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                La Vila d'Argençola en YouTube
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-1">
                Descubre vídeos y recorridos de la finca de 166 hectáreas, las estancias y su entorno natural.
              </p>
            </div>
          </div>

          <a
            href="https://www.youtube.com/@LaViladArgen%C3%A7ola"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-xs transition-all shadow-md flex items-center justify-center space-x-2 shrink-0 cursor-pointer"
          >
            <Youtube className="w-4 h-4" />
            <span>Visitar Canal Oficial</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Official Tourism Registrations */}
        <div className="bg-[#141414] rounded-xs border border-stone-800 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-start space-x-3">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-base font-bold text-white mb-1">
                  {b.registrationsTitle}
                </h4>
                <p className="text-xs text-stone-400">
                  {b.directBookingNote}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-stone-300">
              <div className="p-3 bg-stone-900 rounded-xs border border-stone-800">
                <div className="text-[10px] text-stone-400 uppercase font-sans font-semibold mb-1">
                  {b.catReg}
                </div>
                <div className="text-[#D4AF37] font-bold text-sm">
                  {HOTEL_INFO.registrations.catalunya}
                </div>
              </div>

              <div className="p-3 bg-stone-900 rounded-xs border border-stone-800">
                <div className="text-[10px] text-stone-400 uppercase font-sans font-semibold mb-1">
                  {b.esReg}
                </div>
                <div className="text-[#D4AF37] font-bold text-[11px] truncate" title={HOTEL_INFO.registrations.espana}>
                  {HOTEL_INFO.registrations.espana}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
