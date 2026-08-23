import React from 'react';
import { Youtube, Film, Play, ExternalLink, Sparkles } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { Language, TRANSLATIONS } from '../data/translations';

interface VideoSectionProps {
  currentLang: Language;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const v = t.video;

  return (
    <section id="video-documental" className="py-16 sm:py-24 bg-[#141414] text-white border-b border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center space-x-2 text-[#D4AF37] mb-2">
            <span className="h-px w-8 bg-[#D4AF37]"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-bold">
              {v.badge}
            </span>
            <span className="h-px w-8 bg-[#D4AF37]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            {v.title}
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {v.subtitle}
          </p>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Video Player Card */}
        <div className="relative bg-[#1A1A1A] rounded-xs border-t-2 border-[#D4AF37] border-x border-b border-stone-800 p-3 sm:p-6 shadow-2xl overflow-hidden">
          <div className="relative w-full aspect-video rounded-xs overflow-hidden bg-black shadow-inner border border-stone-800">
            <iframe
              src={HOTEL_INFO.documentaryEmbedUrl}
              title="Documental La carta - La Vila d'Argençola"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
            />
          </div>

          {/* Description & YouTube Action */}
          <div className="mt-6 pt-4 border-t border-stone-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                <Film className="w-4 h-4 text-[#D4AF37]" />
                <span>{v.docuTitle}</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-400 max-w-2xl leading-relaxed">
                {v.docuDesc}
              </p>
            </div>

            <div className="flex items-center space-x-3 shrink-0 w-full md:w-auto">
              <a
                href={HOTEL_INFO.documentaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xs transition-all flex items-center justify-center space-x-2 shadow-md cursor-pointer"
              >
                <Youtube className="w-4 h-4 text-white" />
                <span>{v.watchOnYoutube}</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>

              <a
                href="https://www.youtube.com/@LaViladArgen%C3%A7ola"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white font-semibold text-xs uppercase tracking-wider rounded-xs border border-stone-700 transition-all items-center space-x-1.5 cursor-pointer"
              >
                <span>Canal Oficial</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
