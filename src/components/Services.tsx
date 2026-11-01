import React, { useState } from 'react';
import { SERVICES_LIST, COMPANY_DETAILS } from '../data/content';
import { ServiceItem } from '../types';
import {
  Crown,
  Building2,
  Cake,
  Sparkles,
  Store,
  Rocket,
  Music,
  Award,
  ArrowRight,
  CheckCircle2,
  X,
  MessageCircle,
  Phone,
} from 'lucide-react';

interface ServicesProps {
  onOpenBookingModalWithService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBookingModalWithService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown':
        return <Crown className="w-5 h-5 text-[#d4af37]" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#d4af37]" />;
      case 'Cake':
        return <Cake className="w-5 h-5 text-[#d4af37]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#d4af37]" />;
      case 'Store':
        return <Store className="w-5 h-5 text-[#d4af37]" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-[#d4af37]" />;
      case 'Music':
        return <Music className="w-5 h-5 text-[#d4af37]" />;
      case 'Award':
      default:
        return <Award className="w-5 h-5 text-[#d4af37]" />;
    }
  };

  const filteredServices = SERVICES_LIST.filter((service) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'weddings') return service.id === 'wedding-planning' || service.id === 'haldi-mehendi';
    if (activeFilter === 'corporate') return service.id === 'corporate-events' || service.id === 'exhibition-tradeshows';
    if (activeFilter === 'parties') return service.id === 'birthday-kitty';
    if (activeFilter === 'promotions') return service.id === 'product-launches' || service.id === 'concerts-entertainment' || service.id === 'government-brand-promotions';
    return true;
  });

  const handleWhatsAppInquiry = (service: ServiceItem) => {
    const text = encodeURIComponent(
      `Namaste Event Saathi Weddings! I am interested in inquiring about your "${service.title}". Please share package details and available dates.`
    );
    window.open(`https://wa.me/${COMPANY_DETAILS.phoneClean}?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-[#0a0e14] border-t border-[#d4af37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-2">
            Our Core Specializations · हमारी सेवाएँ
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-4">
            Comprehensive Event Planning <span className="text-gold-gradient">Under One Roof</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From regal Rajputana wedding mandaps and intimate ladies kitty parties to major industrial trade shows and celebrity concerts, we execute every affair with royal grandeur.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-slate-900/80 border border-slate-800 rounded-lg inline-flex">
            <button
              onClick={() => setActiveFilter('all')}
              className={`cursor-pointer px-3.5 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-[#f3e5ab] to-[#d4af37] text-[#0a0e14] font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Services ({SERVICES_LIST.length})
            </button>
            <button
              onClick={() => setActiveFilter('weddings')}
              className={`cursor-pointer px-3.5 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeFilter === 'weddings'
                  ? 'bg-gradient-to-r from-[#f3e5ab] to-[#d4af37] text-[#0a0e14] font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Weddings & Haldi
            </button>
            <button
              onClick={() => setActiveFilter('parties')}
              className={`cursor-pointer px-3.5 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeFilter === 'parties'
                  ? 'bg-gradient-to-r from-[#f3e5ab] to-[#d4af37] text-[#0a0e14] font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Birthdays & Kitty Parties
            </button>
            <button
              onClick={() => setActiveFilter('corporate')}
              className={`cursor-pointer px-3.5 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeFilter === 'corporate'
                  ? 'bg-gradient-to-r from-[#f3e5ab] to-[#d4af37] text-[#0a0e14] font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Corporate & Expos
            </button>
            <button
              onClick={() => setActiveFilter('promotions')}
              className={`cursor-pointer px-3.5 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeFilter === 'promotions'
                  ? 'bg-gradient-to-r from-[#f3e5ab] to-[#d4af37] text-[#0a0e14] font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Launches & Concerts
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-[#0f141d] rounded-xl border border-slate-800 hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col overflow-hidden group shadow-lg"
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f141d] via-[#0f141d]/30 to-transparent" />
                
                {/* Badge if present */}
                {service.badge && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#d4af37] text-[#0a0e14] text-[10px] font-bold uppercase tracking-wider rounded">
                    {service.badge}
                  </div>
                )}

                {/* Service Number & Icon */}
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-md bg-[#0a0e14]/90 border border-[#d4af37]/40 flex items-center justify-center">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono text-[#d4af37] font-semibold">
                    0{index + 1}.
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[11px] text-[#d4af37] font-medium">
                    {service.hindiTitle}
                  </div>
                  <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-[#f3e5ab] transition-colors mt-0.5">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Mini Features Checklist */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  {service.keyFeatures.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="pt-2 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="cursor-pointer text-xs font-semibold text-[#d4af37] hover:text-[#f3e5ab] flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleWhatsAppInquiry(service)}
                    className="cursor-pointer px-3 py-1.5 text-[11px] font-medium text-slate-200 bg-slate-800 hover:bg-[#d4af37] hover:text-[#0a0e14] rounded-md transition-colors flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#0f141d] border border-[#d4af37]/40 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            {/* Modal Header */}
            <div className="relative h-48 bg-slate-900">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f141d] via-[#0f141d]/50 to-transparent" />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <div className="text-xs text-[#d4af37] font-medium">
                  {selectedService.hindiTitle}
                </div>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedService.description}
              </p>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-3">
                  Scope of Work & Inclusions
                </h4>
                <div className="space-y-2">
                  {selectedService.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#0a0e14] rounded-lg border border-slate-800 text-xs">
                <div>
                  <div className="text-slate-400">Recommended For:</div>
                  <div className="font-medium text-white mt-0.5">{selectedService.idealFor}</div>
                </div>
                <div>
                  <div className="text-slate-400">Budget Guidance:</div>
                  <div className="font-medium text-[#d4af37] mt-0.5">{selectedService.estimatedBudget}</div>
                </div>
              </div>

              {/* Modal CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-end gap-3 border-t border-slate-800">
                <button
                  onClick={() => setSelectedService(null)}
                  className="cursor-pointer px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
                >
                  Close
                </button>

                <button
                  onClick={() => {
                    handleWhatsAppInquiry(selectedService);
                  }}
                  className="cursor-pointer px-4 py-2 text-xs font-semibold text-[#0a0e14] bg-emerald-500 hover:bg-emerald-400 rounded-md transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </button>

                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    if (onOpenBookingModalWithService) {
                      onOpenBookingModalWithService(title);
                    }
                  }}
                  className="cursor-pointer px-4 py-2 text-xs font-semibold text-[#0a0e14] bg-gradient-to-r from-[#f3e5ab] to-[#d4af37] hover:brightness-110 rounded-md transition-colors"
                >
                  Book Consultation Slot
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
