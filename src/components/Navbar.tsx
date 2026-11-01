import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../data/content';
import { PageSection } from '../types';
import { Phone, Menu, X, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection: PageSection;
  onNavigate: (section: PageSection) => void;
  onOpenBookingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenBookingModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageSection; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'work', label: 'Our Work' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleLinkClick = (section: PageSection) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#0d1219]/95 backdrop-blur-md border-b border-[#d4af37]/20 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-20">
            {/* Zone 1: Single text element wordmark */}
            <button
              onClick={() => handleLinkClick('home')}
              className="text-left group cursor-pointer shrink-0 focus:outline-none"
              aria-label="Event Saathi Weddings Home"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#d4af37] transition-transform duration-300 group-hover:rotate-12" />
                <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#f3e5ab] transition-colors whitespace-nowrap">
                  Event Saathi Weddings
                </span>
              </div>
              <div className="text-[10px] tracking-widest text-[#d4af37]/80 uppercase pl-7 -mt-1 hidden sm:block">
                India Pvt. Ltd. · Dhanbad
              </div>
            </button>

            {/* Zone 2: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`cursor-pointer whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                      isActive
                        ? 'text-[#f3e5ab] font-semibold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#d4af37] to-[#f3e5ab] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Desktop Actions */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href={`tel:${COMPANY_DETAILS.phoneClean}`}
                className="hidden xl:flex items-center gap-2 text-xs text-slate-300 hover:text-[#d4af37] px-3 py-2 border border-slate-700/60 rounded-md transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{COMPANY_DETAILS.phone}</span>
              </a>
              <button
                onClick={onOpenBookingModal}
                className="cursor-pointer px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0d1219] bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#c59b27] hover:brightness-110 rounded-md shadow-md transition-all whitespace-nowrap flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Consultation</span>
              </button>
            </div>

            {/* Mobile menu trigger button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenBookingModal}
                className="cursor-pointer px-2.5 py-1.5 text-[11px] font-semibold text-[#0d1219] bg-[#d4af37] rounded-md whitespace-nowrap"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-slate-300 hover:text-white focus:outline-none"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Left-Side Sliding Drawer / Sidebar */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop Overlay */}
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-[#0d1219] border-r border-[#d4af37]/30 shadow-2xl flex flex-col justify-between p-6 transform transition-transform duration-300 ease-in-out">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div>
                  <span className="font-cinzel text-lg font-bold text-white tracking-wide">
                    Event Saathi
                  </span>
                  <div className="text-[10px] tracking-widest text-[#d4af37] uppercase">
                    Weddings · Dhanbad
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-full"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <div className="flex flex-col space-y-2 mt-6">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-[#d4af37]/20 text-[#f3e5ab] border-l-4 border-[#d4af37]'
                          : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-6 border-t border-slate-800 flex flex-col gap-3">
              <a
                href={`tel:${COMPANY_DETAILS.phoneClean}`}
                className="flex items-center justify-center gap-2.5 py-3 text-xs font-medium text-slate-200 bg-slate-900/90 border border-slate-700/80 rounded-lg hover:border-[#d4af37] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call: {COMPANY_DETAILS.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full py-3 text-xs font-semibold text-[#0d1219] bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#c59b27] rounded-lg uppercase tracking-wider text-center shadow-lg"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};