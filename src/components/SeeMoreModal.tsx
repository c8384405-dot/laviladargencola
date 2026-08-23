import React, { useState, useEffect } from 'react';
import {
  X,
  Info,
  CheckCircle2,
  ExternalLink,
  Trees,
  Bed,
  Users,
  ShieldCheck,
  Sparkles,
  Youtube,
  DollarSign,
  FileText,
  Printer,
  Film,
  Phone
} from 'lucide-react';
import { HOTEL_INFO, OFFICIAL_PLATFORMS, AUTHENTIC_PHOTOS } from '../data/hotelData';
import { Language, TRANSLATIONS } from '../data/translations';

interface SeeMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const SeeMoreModal: React.FC<SeeMoreModalProps> = ({ isOpen, onClose, currentLang }) => {
  const [activeTab, setActiveTab] = useState<'about' | 'documentary' | 'spaces' | 'subdivisions' | 'quotes' | 'fees'>('about');
  const t = TRANSLATIONS[currentLang];
  const m = t.seeMoreModal;

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-white text-stone-900 w-full max-w-4xl max-h-[92vh] flex flex-col rounded-xs shadow-2xl border-t-4 border-[#D4AF37] border-x border-b border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-[#FDFBF7] border-b border-stone-200 flex items-start justify-between">
          <div className="space-y-1.5">
            <div className="inline-flex items-center space-x-2 text-[#5C6B3A] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-sans font-semibold tracking-wider">{HOTEL_INFO.name}</span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1A1A1A]">
              {m.title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-normal">
              {m.subtitle}
            </p>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={handlePrint}
              className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-xs transition-colors cursor-pointer"
              title="Imprimir información"
            >
              <Printer className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-xs transition-colors cursor-pointer"
              aria-label={m.close}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center overflow-x-auto border-b border-stone-200 bg-stone-50 px-6 py-2.5 gap-2 text-xs font-bold tracking-wide scrollbar-thin">
          <button
            onClick={() => setActiveTab('about')}
            className={`px-4 py-2 rounded-xs whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'about'
                ? 'bg-[#1A1A1A] text-[#FDFBF7]'
                : 'text-stone-600 hover:text-black hover:bg-stone-200'
            }`}
          >
            {m.tabAbout}
          </button>
          <button
            onClick={() => setActiveTab('documentary')}
            className={`px-4 py-2 rounded-xs whitespace-nowrap transition-colors cursor-pointer flex items-center space-x-1.5 ${
              activeTab === 'documentary'
                ? 'bg-[#1A1A1A] text-[#D4AF37]'
                : 'text-stone-600 hover:text-black hover:bg-stone-200'
            }`}
          >
            <Film className="w-3.5 h-3.5 text-red-500" />
            <span>{m.tabDocumentary}</span>
          </button>
          <button
            onClick={() => setActiveTab('spaces')}
            className={`px-4 py-2 rounded-xs whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'spaces'
                ? 'bg-[#1A1A1A] text-[#FDFBF7]'
                : 'text-stone-600 hover:text-black hover:bg-stone-200'
            }`}
          >
            {m.tabSpaces}
          </button>
          <button
            onClick={() => setActiveTab('subdivisions')}
            className={`px-4 py-2 rounded-xs whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'subdivisions'
                ? 'bg-[#1A1A1A] text-[#FDFBF7]'
                : 'text-stone-600 hover:text-black hover:bg-stone-200'
            }`}
          >
            {m.tabSubdivisions}
          </button>
          <button
            onClick={() => setActiveTab('quotes')}
            className={`px-4 py-2 rounded-xs whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'quotes'
                ? 'bg-[#1A1A1A] text-[#FDFBF7]'
                : 'text-stone-600 hover:text-black hover:bg-stone-200'
            }`}
          >
            {m.tabQuotes}
          </button>
          <button
            onClick={() => setActiveTab('fees')}
            className={`px-4 py-2 rounded-xs whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'fees'
                ? 'bg-[#1A1A1A] text-[#FDFBF7]'
                : 'text-stone-600 hover:text-black hover:bg-stone-200'
            }`}
          >
            {m.tabFees}
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm leading-relaxed text-stone-700 font-sans">
          {/* TAB 1: ABOUT */}
          {activeTab === 'about' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-sans text-xl font-bold tracking-tight text-[#1A1A1A] mb-3">
                  {m.aboutHeading}
                </h3>
                <p className="text-stone-600 leading-relaxed mb-4">
                  {m.aboutBody}
                </p>
              </div>

              {/* Estate Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-[#FDFBF7] rounded-xs border border-stone-200">
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-bold text-[#5C6B3A] mb-1">
                    Finca Privada
                  </div>
                  <div className="font-sans text-lg font-bold text-stone-900">166 Hectáreas</div>
                  <p className="text-xs text-stone-600 mt-1">Bosques mediterráneos, arboledas, embalses, fuentes y río.</p>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-bold text-[#5C6B3A] mb-1">
                    Capacidad
                  </div>
                  <div className="font-sans text-lg font-bold text-stone-900">14 a 20 Plazas</div>
                  <p className="text-xs text-stone-600 mt-1">6 habitaciones con 6 baños completos en suite privados.</p>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-bold text-[#5C6B3A] mb-1">
                    Geoparque UNESCO
                  </div>
                  <div className="font-sans text-lg font-bold text-stone-900">Cataluña Central</div>
                  <p className="text-xs text-stone-600 mt-1">En plena Marca Hispánica, ruta de los maquis y D.O. Pla de Bages.</p>
                </div>
              </div>

              {/* Guest Access Section */}
              <div className="p-5 bg-white rounded-xs border-l-4 border-[#D4AF37] border-y border-r border-stone-200">
                <h4 className="font-sans text-base font-bold text-[#1A1A1A] mb-2 flex items-center space-x-2">
                  <Trees className="w-4 h-4 text-[#5C6B3A]" />
                  <span>{m.guestAccessTitle}</span>
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {m.guestAccessDesc}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: DOCUMENTARY "LA CARTA" */}
          {activeTab === 'documentary' && (
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-red-600 uppercase tracking-wider mb-1">
                  <Film className="w-4 h-4 text-red-600" />
                  <span>Documental Oficial</span>
                </div>
                <h3 className="font-sans text-2xl font-bold tracking-tight text-[#1A1A1A] mb-2">
                  {m.documentaryHeading}
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 font-medium mb-4">
                  {m.documentarySub}
                </p>
                <p className="text-stone-700 leading-relaxed mb-6">
                  {m.documentaryText}
                </p>
              </div>

              {/* Embedded Video */}
              <div className="relative w-full aspect-video rounded-xs overflow-hidden bg-black shadow-lg border border-stone-300">
                <iframe
                  src={HOTEL_INFO.documentaryEmbedUrl}
                  title="Documental La carta - La Vila d'Argençola"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>

              {/* Action Button Link Outside */}
              <div className="p-4 bg-[#FDFBF7] rounded-xs border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-stone-600 font-medium">
                  Enlace directo en YouTube al documental:
                </div>
                <a
                  href={HOTEL_INFO.documentaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xs transition-all flex items-center space-x-2 shadow-sm"
                >
                  <Youtube className="w-4 h-4 text-white" />
                  <span>{m.documentaryLinkText}</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          )}

          {/* TAB 3: SPACES & DISTRIBUTION */}
          {activeTab === 'spaces' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-sans text-xl font-bold tracking-tight text-[#1A1A1A] mb-2">
                  {m.spacesHeading}
                </h3>
                <p className="text-xs text-stone-500 mb-4">
                  Distribución completa de dormitorios, baños, salones, cocinas y terrazas.
                </p>
              </div>

              <div className="space-y-3">
                {m.distributionItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#FDFBF7] rounded-xs border border-stone-200/90 flex items-start space-x-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#5C6B3A] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: SUBDIVISIONS */}
          {activeTab === 'subdivisions' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-sans text-xl font-bold tracking-tight text-[#1A1A1A] mb-3">
                  {m.subdivisionsTitle}
                </h3>
                <p className="text-stone-600 whitespace-pre-line leading-relaxed mb-6">
                  {m.subdivisionsDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 bg-[#FDFBF7] rounded-xs border-t-2 border-[#D4AF37] border-x border-b border-stone-200">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#5C6B3A]">
                    Opción 8 Plazas
                  </span>
                  <h4 className="font-sans text-lg font-bold text-[#1A1A1A] mt-1 mb-2">
                    ELS LLACS
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    3 habitaciones con 3 baños en suite, cocina completa, salón independiente y salida a terrazas y jardines.
                  </p>
                  <a href="/ELSLLACS.png" target="_blank" rel="noopener noreferrer" className="block rounded-xs overflow-hidden border border-stone-300 shadow-xs hover:shadow-md transition-shadow">
                    <img src="/ELSLLACS.png" alt="Plano ELS LLACS" className="w-full h-auto object-contain bg-white hover:scale-102 transition-transform" />
                  </a>
                </div>

                <div className="p-5 bg-[#FDFBF7] rounded-xs border-t-2 border-[#D4AF37] border-x border-b border-stone-200">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#5C6B3A]">
                    Opción 6 Plazas
                  </span>
                  <h4 className="font-sans text-lg font-bold text-[#1A1A1A] mt-1 mb-2">
                    LES FONTS
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    3 habitaciones con 3 baños en suite, ambiente íntimo y acogedor, cocina, salón y acceso libre a toda la finca.
                  </p>
                  <a href="/LESFONTS.png" target="_blank" rel="noopener noreferrer" className="block rounded-xs overflow-hidden border border-stone-300 shadow-xs hover:shadow-md transition-shadow">
                    <img src="/LESFONTS.png" alt="Plano LES FONTS" className="w-full h-auto object-contain bg-white hover:scale-102 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Masía Completa Blueprint */}
              <div className="p-5 bg-white rounded-xs border border-stone-200 mt-4">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#D4AF37]">
                  Finca y Masía Completa (14 a 20 Plazas)
                </span>
                <h4 className="font-sans text-base font-bold text-stone-900 mt-1 mb-2">
                  Plano Conjunto: ELS LLACS + LES FONTS
                </h4>
                <a href="/ELSLLACSLESFONTS.png" target="_blank" rel="noopener noreferrer" className="block rounded-xs overflow-hidden border border-stone-300 shadow-xs hover:shadow-md transition-shadow mt-2">
                  <img src="/ELSLLACSLESFONTS.png" alt="Plano Completo ELS LLACS + LES FONTS" className="w-full h-auto max-h-80 object-contain bg-white hover:scale-102 transition-transform" />
                </a>
              </div>
            </div>
          )}

          {/* TAB 5: VISITOR QUOTES */}
          {activeTab === 'quotes' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-sans text-xl font-bold tracking-tight text-[#1A1A1A] mb-2">
                  {m.visitorQuotesTitle}
                </h3>
                <p className="text-xs text-stone-500 mb-6">
                  Extractos textuales de las descripciones compartidas por los visitantes.
                </p>
              </div>

              <div className="space-y-4">
                {m.quotes.map((quote, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-[#FDFBF7] rounded-xs border-l-3 border-[#D4AF37] border-y border-r border-stone-200"
                  >
                    <div className="text-xs font-bold uppercase tracking-wider text-[#5C6B3A] mb-1.5">
                      {quote.label}
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                      "{quote.text}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: ADDITIONAL FEES & REGISTRATION */}
          {activeTab === 'fees' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-sans text-xl font-bold tracking-tight text-[#1A1A1A] mb-2">
                  {m.additionalFeesTitle}
                </h3>
                <p className="text-xs text-stone-500 mb-4">
                  Suplementos y gastos adicionales aplicables durante la estancia:
                </p>
              </div>

              <div className="border border-stone-200 rounded-xs overflow-hidden">
                <table className="min-w-full divide-y divide-stone-200 text-xs font-sans">
                  <thead className="bg-stone-100 font-bold uppercase text-stone-700 tracking-wider">
                    <tr>
                      <th className="px-4 py-3 text-left">Concepto</th>
                      <th className="px-4 py-3 text-right">Tarifa / Importe</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 bg-white">
                    {m.fees.map((fee, idx) => (
                      <tr key={idx} className="hover:bg-stone-50">
                        <td className="px-4 py-3 text-stone-800 font-medium">{fee.concept}</td>
                        <td className="px-4 py-3 text-right font-bold text-[#1A1A1A]">{fee.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Official Registry & Direct Booking Platforms */}
              <div className="p-5 bg-[#1A1A1A] text-white rounded-xs border-t-2 border-[#D4AF37] space-y-4">
                <div className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">
                  {m.registrationTitle}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1 font-mono">
                  <div>
                    <span className="text-stone-400 block font-sans text-[11px]">Cataluña:</span>
                    <strong className="text-white font-bold">{HOTEL_INFO.registrations.catalunya}</strong>
                  </div>
                  <div>
                    <span className="text-stone-400 block font-sans text-[11px]">España:</span>
                    <strong className="text-white font-bold text-[11px] truncate block">{HOTEL_INFO.registrations.espana}</strong>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 font-bold block mb-1">
                      Teléfono directo:
                    </span>
                    <a
                      href={`tel:${HOTEL_INFO.phoneRaw}`}
                      className="inline-flex items-center space-x-2 text-sm font-bold text-[#D4AF37] hover:text-white transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span className="font-mono">{HOTEL_INFO.phone}</span>
                    </a>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-800">
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 font-bold block mb-2">
                    Reservar en canales oficiales:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {OFFICIAL_PLATFORMS.filter(p => p.icon !== 'youtube').map((plat, idx) => (
                      <a
                        key={idx}
                        href={plat.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-stone-900 hover:bg-[#D4AF37] text-stone-200 hover:text-stone-950 rounded-xs text-[11px] font-bold text-center border border-stone-800 transition-colors flex items-center justify-center space-x-1"
                      >
                        <span>{plat.name}</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Direct Booking Links */}
        <div className="p-6 bg-[#FDFBF7] border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-stone-600">
            Reserva disponible exclusivamente en los canales oficiales:
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {OFFICIAL_PLATFORMS.map((plat, idx) => (
              <a
                key={idx}
                href={plat.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#1A1A1A] hover:bg-[#D4AF37] text-white hover:text-stone-950 text-[11px] uppercase tracking-wider font-bold rounded-xs transition-colors flex items-center space-x-1"
              >
                <span>{plat.name}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
