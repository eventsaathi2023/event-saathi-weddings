
import React, { useState, useEffect } from 'react';
import { COMPANY_DETAILS } from '../data/content';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Namaste Event Saathi Weddings! I would like to inquire about wedding/event planning services in Dhanbad.`
    );
    window.open(`https://wa.me/${COMPANY_DETAILS.phoneClean}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="cursor-pointer w-10 h-10 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-white hover:border-[#d4af37] flex items-center justify-center shadow-lg transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Direct Call Button (Mobile & Desktop) */}
      <a
        href={`tel:${COMPANY_DETAILS.phoneClean}`}
        className="cursor-pointer w-11 h-11 rounded-full bg-[#17120a] border border-[#d4af37]/60 text-[#d4af37] hover:scale-105 flex items-center justify-center shadow-xl transition-all"
        title="Call Event Saathi Office: +91 8893870565"
        aria-label="Call Event Saathi"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Floating Trigger */}
      <button
        onClick={openWhatsApp}
        className="cursor-pointer group flex items-center gap-2 pl-3.5 pr-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/40 hover:scale-105 transition-all"
        title="Chat with Event Saathi on WhatsApp"
        aria-label="WhatsApp Event Saathi"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-semibold whitespace-nowrap hidden sm:inline">
          Chat with Event Saathi
        </span>
      </button>
    </div>
  );
};
