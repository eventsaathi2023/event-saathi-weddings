import React, { useState } from 'react';
import { GALLERY_ITEMS, COMPANY_DETAILS } from '../data/content';
import { GalleryImage } from '../types';
import { Maximize2, X, MapPin, Calendar, MessageCircle, Sparkles } from 'lucide-react';

interface GalleryProps {
  onPlanSimilarEvent?: (eventName: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onPlanSimilarEvent }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightboxImage, setActiveLightboxImage] = useState<GalleryImage | null>(null);

  const categories = [
    { id: 'all', label: 'All Celebrations' },
    { id: 'weddings', label: 'Royal Weddings' },
    { id: 'haldi_sangeet', label: 'Haldi & Sangeet' },
    { id: 'corporate', label: 'Corporate & Summits' },
    { id: 'birthdays_kitty', label: 'Birthdays & Kitty Parties' },
    { id: 'concerts_exhibitions', label: 'Concerts & Expos' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const handleShareToWhatsApp = (item: GalleryImage) => {
    const text = encodeURIComponent(
      `Namaste Event Saathi! I loved your work: "${item.title}" (${item.location}). I want to discuss a similar event setup for my upcoming function.`
    );
    window.open(`https://wa.me/${COMPANY_DETAILS.phoneClean}?text=${text}`, '_blank');
  };

  return (
    <section id="gallery" className="py-20 bg-[#0d1219] border-t border-[#d4af37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Event Showcase · हमारी गैलरी</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-4">
            Curated Glimpses of <span className="text-gold-gradient">Royal Grandeur</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Real Indian events executed with passion and precision. Explore authentic wedding mandaps, vibrant Haldi rituals, high-profile corporate stages, and luxury birthday setups across Dhanbad & Jharkhand.
          </p>

          {/* Category Filter Pills (Functional Buttons) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-slate-900/90 border border-slate-800 rounded-lg inline-flex">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`cursor-pointer px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#f3e5ab] to-[#d4af37] text-[#0a0e14] font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden bg-[#0a0e14] border border-slate-800 hover:border-[#d4af37]/50 shadow-md transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => setActiveLightboxImage(item)}
            >
              {/* Image Frame with Zero-Broken-Image Fallback */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Safe fallback if primary image ever fails to load
                    e.currentTarget.src = item.fallbackUrl;
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e14] via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                {/* Top Corner Quick Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-[#f3e5ab] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Tags on Image */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-[#d4af37] block">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-cinzel text-sm font-bold text-white group-hover:text-[#f3e5ab] transition-colors truncate">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Bottom Card Meta Details */}
              <div className="p-3.5 bg-[#0f141d] flex-1 flex flex-col justify-between border-t border-slate-800/80">
                <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 truncate max-w-[140px]">
                    <MapPin className="w-3 h-3 text-[#d4af37] shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </span>
                  <span className="text-[#d4af37] font-medium shrink-0 group-hover:underline">
                    View & Zoom →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner to Plan Your Event */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-[#17120a] via-[#10151f] to-[#17120a] border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-cinzel text-lg font-bold text-white">
              Want a Customized Theme for Your Celebration?
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              Visit our LC Road Dhanbad office to view our full physical catalog of 200+ 3D stage setups and lighting themes.
            </p>
          </div>
          <a
            href={`https://wa.me/${COMPANY_DETAILS.phoneClean}?text=Namaste%20Event%20Saathi!%20I%20want%20to%20view%20more%20photos%20and%20discuss%20decor%20themes.`}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer px-5 py-2.5 text-xs font-semibold text-[#0a0e14] bg-gradient-to-r from-[#f3e5ab] to-[#d4af37] hover:brightness-110 rounded-md whitespace-nowrap flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat With Event Saathi</span>
          </a>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeLightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-4xl w-full bg-[#0a0e14] border border-[#d4af37]/50 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxImage(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors border border-white/20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* High-Res Image Display */}
            <div className="relative max-h-[60vh] sm:max-h-[65vh] w-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeLightboxImage.imageUrl}
                alt={activeLightboxImage.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = activeLightboxImage.fallbackUrl;
                }}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Lightbox Information Bar */}
            <div className="p-5 sm:p-6 bg-[#0f141d] border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-xl">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="text-[#d4af37] font-semibold">{activeLightboxImage.categoryLabel}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                    {activeLightboxImage.location}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {activeLightboxImage.date}
                  </span>
                </div>
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white">
                  {activeLightboxImage.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeLightboxImage.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeLightboxImage.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action in Lightbox */}
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto shrink-0">
                <button
                  onClick={() => handleShareToWhatsApp(activeLightboxImage)}
                  className="cursor-pointer px-4 py-2.5 text-xs font-semibold text-[#0a0e14] bg-emerald-500 hover:bg-emerald-400 rounded-md transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Ask Quote For This Setup</span>
                </button>
                <button
                  onClick={() => {
                    const title = activeLightboxImage.title;
                    setActiveLightboxImage(null);
                    if (onPlanSimilarEvent) {
                      onPlanSimilarEvent(title);
                    }
                  }}
                  className="cursor-pointer px-4 py-2.5 text-xs font-semibold text-[#0a0e14] bg-gradient-to-r from-[#f3e5ab] to-[#d4af37] hover:brightness-110 rounded-md transition-colors flex items-center justify-center whitespace-nowrap"
                >
                  Book Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
