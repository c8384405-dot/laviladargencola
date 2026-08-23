import React from 'react';
import {
  Crosshair,
  Compass,
  Wine,
  Mountain,
  Castle,
  Palette,
  Bike,
  Flame,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface ExperiencesSectionProps {
  currentLang: Language;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const e = t.experiences;

  const activities = [
    {
      id: "caza",
      title: e.huntingTitle,
      badge: e.huntingBadge,
      desc: e.huntingDesc,
      icon: Crosshair,
      iconColor: "text-amber-700",
      category: "Especial"
    },
    {
      id: "drones",
      title: e.droneTitle,
      badge: e.droneBadge,
      desc: e.droneDesc,
      icon: Compass,
      iconColor: "text-sky-700",
      category: "Tecnología & Paisaje"
    },
    {
      id: "vino",
      title: e.wineTitle,
      badge: e.wineBadge,
      desc: e.wineDesc,
      icon: Wine,
      iconColor: "text-rose-800",
      category: "Enoturismo"
    },
    {
      id: "geoparque",
      title: e.geoparkTitle,
      badge: e.geoparkBadge,
      desc: e.geoparkDesc,
      icon: Mountain,
      iconColor: "text-emerald-800",
      category: "Geología UNESCO"
    },
    {
      id: "historia",
      title: e.historyTitle,
      badge: e.historyBadge,
      desc: e.historyDesc,
      icon: Castle,
      iconColor: "text-stone-800",
      category: "Patrimonio Medieval"
    },
    {
      id: "barroco",
      title: e.baroqueTitle,
      badge: e.baroqueBadge,
      desc: e.baroqueDesc,
      icon: Palette,
      iconColor: "text-amber-800",
      category: "Arte & Cultura"
    },
    {
      id: "turismo-activo",
      title: e.tourismTitle,
      badge: e.tourismBadge,
      desc: e.tourismDesc,
      icon: Bike,
      iconColor: "text-[#5C6B3A]",
      category: "Deporte & Ocio"
    },
    {
      id: "barbacoa",
      title: e.bbqTitle,
      badge: e.bbqBadge,
      desc: e.bbqDesc,
      icon: Flame,
      iconColor: "text-orange-700",
      category: "Gastronomía"
    }
  ];

  return (
    <section id="actividades" className="py-20 sm:py-28 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-[#5C6B3A] mb-2">
            <span className="h-px w-8 bg-[#5C6B3A]"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-bold">
              {e.badge}
            </span>
            <span className="h-px w-8 bg-[#5C6B3A]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-2 mb-4">
            {e.title}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            {e.subtitle}
          </p>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Text-Only Editorial Cards Grid (NO IMAGES AS REQUESTED) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FDFBF7] rounded-xs border-t-2 border-[#D4AF37] border-x border-b border-stone-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 hover:border-stone-400 group"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xs bg-white border border-stone-200 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                      <Icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-stone-700 bg-stone-100 px-2.5 py-1 rounded-xs border border-stone-200">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-[#1A1A1A] group-hover:text-[#5C6B3A] transition-colors mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom subtle tag */}
                <div className="pt-5 mt-5 border-t border-stone-200/70 flex items-center justify-between text-[11px] text-stone-500 font-medium">
                  <span>{item.category}</span>
                  <span className="text-[#D4AF37] font-semibold">166 Ha & Bages</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
