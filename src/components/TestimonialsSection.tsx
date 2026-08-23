import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, ExternalLink, MapPin } from 'lucide-react';
import { TESTIMONIALS_DATA, HOTEL_INFO } from '../data/hotelData';
import { Language, TRANSLATIONS } from '../data/translations';

interface TestimonialsSectionProps {
  currentLang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ currentLang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = TRANSLATIONS[currentLang];
  const reviewsT = t.testimonials;

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];
  const currentReview = current[currentLang];

  return (
    <section id="opiniones" className="py-20 sm:py-28 bg-[#FDFBF7] border-b border-stone-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center space-x-2 text-[#5C6B3A] mb-2">
            <span className="h-px w-8 bg-[#5C6B3A]"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-bold">
              {reviewsT.badge}
            </span>
            <span className="h-px w-8 bg-[#5C6B3A]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-2 mb-4">
            {reviewsT.title}
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Google Reviews Summary Header Banner with Direct Google Maps Link */}
        <div className="bg-white rounded-xs border border-stone-200 p-4 sm:p-5 mb-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            {/* Google G visual emblem */}
            <div className="w-11 h-11 rounded-full bg-white shadow-md border border-stone-200 flex items-center justify-center font-bold font-serif text-xl text-stone-900 shrink-0">
              <span className="text-blue-600">G</span>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-serif text-xl font-bold text-stone-900">4,5</span>
                <div className="flex items-center space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4
                          ? 'fill-[#F4B400] text-[#F4B400]'
                          : 'fill-[#F4B400]/70 text-[#F4B400]'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-xs text-stone-600 font-medium">
                {reviewsT.googleRatingText} · <span className="text-stone-500">Google Resum</span>
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-2 text-xs text-stone-600 bg-[#FDFBF7] px-3.5 py-1.5 rounded-full border border-stone-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#5C6B3A]" />
              <span>{reviewsT.verifiedReviewsNote}</span>
            </div>

            {/* Direct Google Maps Link Button */}
            <a
              href={HOTEL_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 bg-[#1A1A1A] hover:bg-[#D4AF37] text-white hover:text-stone-950 text-xs font-bold uppercase tracking-wider rounded-xs transition-all shadow-xs group"
              title="Abrir ficha y reseñas en Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-stone-950" />
              <span>Google Maps</span>
              <ExternalLink className="w-3 h-3 text-stone-400 group-hover:text-stone-950" />
            </a>
          </div>
        </div>

        {/* Carousel Testimonial Quote Card */}
        <div className="relative bg-white rounded-xs border-t-4 border-[#D4AF37] border-x border-b border-stone-200 p-8 sm:p-12 shadow-md transition-all duration-300">
          <Quote className="w-14 h-14 text-[#D4AF37]/25 absolute top-6 right-8 pointer-events-none" />

          {/* Stars & Source */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
              <span className="text-xs font-bold text-stone-800 ml-2">
                5.0 / 5.0
              </span>
            </div>

            <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
              {current.source}
            </span>
          </div>

          {/* Main Headline Quote */}
          <blockquote className="font-serif text-xl sm:text-2xl text-[#1A1A1A] italic leading-relaxed mb-6 font-medium">
            "{currentReview.quote}"
          </blockquote>

          {/* Detailed impression */}
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-8 border-l-2 border-[#5C6B3A]/50 pl-4 py-0.5">
            {currentReview.detail}
          </p>

          {/* Author info & controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-stone-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#5C6B3A] text-white flex items-center justify-center font-serif font-bold text-base shadow-sm">
                {current.avatarLetter}
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-[#1A1A1A]">
                  {current.author}
                </h4>
                <p className="text-xs text-stone-500">
                  <span className="text-[#5C6B3A] font-medium">{currentReview.stayType}</span>
                </p>
              </div>
            </div>

            {/* Navigation Arrows & Review Counter */}
            <div className="flex items-center space-x-2">
              <button
                onClick={prev}
                className="p-2.5 rounded-xs bg-[#FDFBF7] hover:bg-[#D4AF37] text-stone-800 hover:text-stone-950 border border-stone-300 transition-colors cursor-pointer shadow-xs active:scale-95"
                aria-label={reviewsT.previousBtn}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-1.5 px-3">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentIndex === idx ? 'w-6 bg-[#D4AF37]' : 'w-2 bg-stone-300 hover:bg-stone-400'
                    }`}
                    aria-label={`Ir a reseña ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2.5 rounded-xs bg-[#FDFBF7] hover:bg-[#D4AF37] text-stone-800 hover:text-stone-950 border border-stone-300 transition-colors cursor-pointer shadow-xs active:scale-95"
                aria-label={reviewsT.nextBtn}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
