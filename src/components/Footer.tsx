import React from 'react';
import {
  ExternalLink,
  MapPin,
  Trees,
  Youtube,
  ShieldCheck,
  Globe,
  Heart,
  Sparkles,
  Phone,
  Mail,
  Film
} from 'lucide-react';
import { HOTEL_INFO, OFFICIAL_PLATFORMS } from '../data/hotelData';
import { Language, TRANSLATIONS } from '../data/translations';

interface FooterProps {
  currentLang: Language;
  onOpenSeeMore: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenSeeMore }) => {
  const t = TRANSLATIONS[currentLang];
  const f = t.footer;

  return (
    <footer className="bg-[#141414] text-stone-300 border-t border-stone-800">
      {/* Top Footer Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={HOTEL_INFO.logo}
                alt="Logo La Vila d'Argençola"
                className="w-12 h-12 object-contain bg-white rounded-full p-1 border border-[#D4AF37]"
              />
              <div>
                <h3 className="font-serif text-xl font-bold text-white leading-tight">
                  {HOTEL_INFO.name}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                  Masía 1922 · 166 Ha
                </span>
              </div>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              {f.editorialDesc}
            </p>
          </div>

          {/* Col 2: Official Booking Channels */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-widest border-b border-stone-800 pb-2 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{f.officialReservations}</span>
            </h4>
            <p className="text-xs text-stone-400">
              {f.exclusiveLinks}
            </p>
            <ul className="space-y-2">
              {OFFICIAL_PLATFORMS.map((platform, idx) => (
                <li key={idx}>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-3 py-2 bg-stone-900/90 hover:bg-stone-800 border border-stone-800 hover:border-[#D4AF37]/50 rounded-xs text-xs font-semibold text-stone-200 hover:text-white transition-all group"
                  >
                    <span className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                      <span>{platform.name}</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#D4AF37]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Multimedia & Information */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-widest border-b border-stone-800 pb-2">
              {f.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={HOTEL_INFO.documentaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-stone-400 hover:text-red-400 transition-colors"
                >
                  <Film className="w-3.5 h-3.5 text-red-500" />
                  <span className="font-semibold">Documental "La carta"</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@LaViladArgen%C3%A7ola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-stone-400 hover:text-red-400 transition-colors"
                >
                  <Youtube className="w-3.5 h-3.5 text-red-500" />
                  <span>Canal Oficial de YouTube</span>
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenSeeMore}
                  className="text-stone-400 hover:text-[#D4AF37] transition-colors cursor-pointer text-left font-medium"
                >
                  {f.seeMoreBtn}
                </button>
              </li>
              <li>
                <a href="#historia" className="text-stone-400 hover:text-[#D4AF37] transition-colors">
                  {t.nav.history}
                </a>
              </li>
              <li>
                <a href="#actividades" className="text-stone-400 hover:text-[#D4AF37] transition-colors">
                  {t.nav.experiences}
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-stone-400 hover:text-[#D4AF37] transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-widest border-b border-stone-800 pb-2 flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#5C6B3A]" />
              <span>{f.locationTitle}</span>
            </h4>
            <div className="text-xs text-stone-400 space-y-3">
              <div>
                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-3.5 py-2.5 bg-stone-900 hover:bg-[#D4AF37] text-white hover:text-stone-950 font-semibold rounded-xs border border-stone-800 hover:border-[#D4AF37] transition-all group shadow-xs"
                >
                  <MapPin className="w-4 h-4 text-[#D4AF37] group-hover:text-stone-950" />
                  <span>Ver en Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-950" />
                </a>
              </div>

              <div className="pt-2 border-t border-stone-800/80">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 font-bold block mb-1.5">
                  Teléfono de contacto:
                </span>
                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="inline-flex items-center space-x-2 text-sm font-bold text-[#D4AF37] hover:text-white bg-black/60 px-3.5 py-2 rounded-xs border border-stone-800 hover:border-[#D4AF37] transition-all w-full justify-start"
                  title="Llamar directamente por teléfono"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="font-mono text-sm tracking-wider">{HOTEL_INFO.phone}</span>
                </a>
              </div>

              <div className="pt-2 border-t border-stone-800/80">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 font-bold block mb-1.5">
                  Correo electrónico:
                </span>
                <a
                  href={`mailto:${HOTEL_INFO.email}`}
                  className="inline-flex items-center space-x-2 text-xs font-bold text-[#D4AF37] hover:text-white bg-black/60 px-3 py-2 rounded-xs border border-stone-800 hover:border-[#D4AF37] transition-all break-all w-full"
                  title="Enviar correo electrónico"
                >
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="font-mono text-xs">{HOTEL_INFO.email}</span>
                </a>
              </div>
            </div>

            <div className="pt-2 border-t border-stone-800/80 space-y-1 text-[11px] text-stone-400">
              <p className="font-mono">
                <span className="text-stone-400">Turisme:</span> {HOTEL_INFO.registrations.catalunya}
              </p>
              <p className="font-mono truncate">
                <span className="text-stone-400">Registro:</span> {HOTEL_INFO.registrations.espana}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-stone-900 bg-black/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {HOTEL_INFO.name}. {f.allRightsReserved}
          </p>
          <div className="flex items-center space-x-4">
            <span>{HOTEL_INFO.name}</span>
            <span>·</span>
            <span className="text-[#D4AF37]">166 Hectáreas</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
