import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AUTHENTIC_PHOTOS } from '../data/hotelData';
import { Language, TRANSLATIONS } from '../data/translations';

interface MasonryGalleryProps {
  currentLang: Language;
}

export const MasonryGallery: React.FC<MasonryGalleryProps> = ({ currentLang }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const t = TRANSLATIONS[currentLang];

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex]);

  const prevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev === 0 ? AUTHENTIC_PHOTOS.length - 1 : (prev as number) - 1
    );
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev === AUTHENTIC_PHOTOS.length - 1 ? 0 : (prev as number) + 1
    );
  };

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-[#FDFBF7] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center space-x-2 text-[#5C6B3A] mb-2">
            <span className="h-px w-8 bg-[#5C6B3A]"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-bold">
              {t.gallery.badge}
            </span>
            <span className="h-px w-8 bg-[#5C6B3A]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-2 mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            {t.gallery.subtitle}
          </p>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Pure Image Masonry / Grid - NO TEXT IN CARDS AS STRICTLY REQUESTED */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {AUTHENTIC_PHOTOS.map((photoUrl, index) => (
            <div
              key={index}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group relative aspect-4/3 rounded-xs overflow-hidden bg-stone-200 border border-stone-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={photoUrl}
                alt={`La Vila d'Argençola foto ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
              {/* Subtle hover overlay with icon only (no text) */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                  <Maximize2 className="w-5 h-5 text-[#D4AF37]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal (Images only with minimal navigation) */}
      {selectedPhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          {/* Top Bar: Counter & Close */}
          <div
            className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs uppercase tracking-widest font-bold text-[#D4AF37] bg-black/60 px-3 py-1.5 rounded-xs border border-white/10">
              {t.gallery.counter} {selectedPhotoIndex + 1} / {AUTHENTIC_PHOTOS.length}
            </span>
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/30 text-white transition-colors cursor-pointer"
              aria-label={t.gallery.close}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Previous Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 hover:bg-[#D4AF37] text-white hover:text-stone-950 transition-colors cursor-pointer"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 hover:bg-[#D4AF37] text-white hover:text-stone-950 transition-colors cursor-pointer"
            aria-label="Foto siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Display */}
          <div
            className="relative max-w-5xl max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={AUTHENTIC_PHOTOS[selectedPhotoIndex]}
              alt={`La Vila d'Argençola ampliación ${selectedPhotoIndex + 1}`}
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-xs shadow-2xl border border-stone-800"
            />
          </div>
        </div>
      )}
    </section>
  );
};
