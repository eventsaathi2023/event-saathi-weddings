import React from 'react';
import { COMPANY_DETAILS, SERVICES_LIST } from '../data/content';
import { PageSection } from '../types';
import { Sparkles, MapPin, Phone, Mail, Clock, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: PageSection) => void;
  onOpenBookingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBookingModal }) => {
  return (
    <footer className="bg-[#070a0e] text-slate-400 border-t border-[#d4af37]/20 pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Introduction Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#d4af37]" />
              <span className="font-cinzel text-lg font-bold text-white tracking-wider">
                Event Saathi Weddings
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              <strong className="text-white">Event Saathi Weddings India Pvt. Ltd.</strong> was established in 2025 in Dhanbad, Jharkhand. We deliver royal wedding planning, precise budget & guest management, corporate conclaves, birthday parties, kitty party galas, and grand exhibitions.
            </p>
            <div className="pt-2 text-[11px] text-[#f3e5ab] font-medium flex items-center gap-1.5">
              <span>{COMPANY_DETAILS.hindiMotto}</span>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services' },
                { id: 'gallery', label: 'Real Photo Gallery' },
                { id: 'work', label: 'Our Work & Portfolio' },
                { id: 'contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id as PageSection)}
                    className="cursor-pointer text-slate-400 hover:text-[#d4af37] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Our Services
            </div>
            <ul className="space-y-1.5 text-slate-400">
              {SERVICES_LIST.slice(0, 6).map((service) => (
                <li key={service.id} className="truncate">
                  <span>• {service.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column - YouTube & Email Positioned Here */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Dhanbad Headquarters
            </div>
            <div className="space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Event Saathi Weddings, L.C Road, Dhanbad, Jharkhand - 826001
                </span>
              </div>
              
              {/* Phone & YouTube side-by-side or stacked cleanly */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phoneClean}`} className="hover:text-white transition-colors">
                  {COMPANY_DETAILS.phone}
                </a>
              </div>

              {/* YouTube Link Top Contact Section Me */}
              <div className="flex items-center gap-2.5">
                <Youtube className="w-4 h-4 text-[#ff0000] shrink-0" />
                <a 
                  href="https://youtube.com/@eventsaathiweddings?si=6nd9nKUtdwHZQtTX" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors font-medium text-[#d4af37]"
                >
                  Watch on YouTube
                </a>
              </div>

              {/* Email Link */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href="mailto:eventsaathidhanbad@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors truncate">
                  eventsaathidhanbad@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>9:00 AM - 9:30 PM (Daily)</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBookingModal}
                className="cursor-pointer w-full py-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-[#0a0e14] bg-gradient-to-r from-[#f3e5ab] to-[#d4af37] hover:brightness-110 rounded transition-all text-center"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Clean Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {COMPANY_DETAILS.establishedYear}–2026 {COMPANY_DETAILS.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span>L.C Road, Dhanbad - 826001</span>
          </div>
        </div>
      </div>
    </footer>
  );
};