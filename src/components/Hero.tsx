import { COMPANY_DETAILS, IMAGES } from '../data/content';
import {
  ArrowRight,
  Calculator,
  ShieldCheck,
  Sparkles,
  MapPin,
  Users,
  Award,
} from 'lucide-react';

interface HeroProps {
  onOpenBookingModal: () => void;
  onOpenBudgetCalculator: () => void;
  onNavigateToGallery: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBookingModal,
  onOpenBudgetCalculator,
  onNavigateToGallery,
}) => {
  return (
    <section
      className="relative min-h-[90vh] flex flex-col justify-between bg-[#0a0e14] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroRoyalWedding}
          alt="Royal Indian wedding mandap and wedding decoration by Event Saathi Weddings"
          fetchPriority="high"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = './assets/images/hero_royal_wedding.jpg';
          }}
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e14] via-[#0a0e14]/85 to-[#0a0e14]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e14] via-transparent to-black/50" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          {/* Location and Business Information */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#d4af37]/15 border border-[#d4af37]/30 rounded-full text-xs font-medium text-[#f3e5ab] tracking-wide backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>
              Based in Dhanbad, Jharkhand · Serving Clients Across India
            </span>
          </div>

          {/* Brand Motto */}
          <p className="text-sm sm:text-base font-medium tracking-wide text-[#d4af37] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span>{COMPANY_DETAILS.hindiMotto}</span>
          </p>

          {/* Main SEO Heading: One clear H1 */}
          <h1
            id="hero-heading"
            className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Wedding Planner & Event Management{' '}
            <span className="text-gold-gradient">
              Across India
            </span>
          </h1>

          {/* Services and Coverage */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Welcome to{' '}
            <span className="text-white font-medium">
              {COMPANY_DETAILS.name}
            </span>
            . We plan memorable weddings, destination weddings, wedding
            decorations, stage designs, baraat, DJ and band arrangements,
            birthday parties, private celebrations, kitty parties, corporate
            events, exhibitions, brand promotions and concerts. Based in
            Dhanbad, we serve clients across Jharkhand, Bihar and other
            locations throughout India, with event planning tailored to your
            occasion and budget.
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenBookingModal}
              className="cursor-pointer px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0a0e14] bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#c59b27] hover:brightness-110 rounded-md shadow-lg shadow-[#d4af37]/20 transition-all flex items-center gap-2 group whitespace-nowrap"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenBudgetCalculator}
              className="cursor-pointer px-5 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-[#d4af37]/40 rounded-md backdrop-blur-sm transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <Calculator className="w-4 h-4 text-[#d4af37]" />
              <span>Event Budget Calculator</span>
            </button>

            <button
              onClick={onNavigateToGallery}
              className="cursor-pointer px-4 py-3 text-xs sm:text-sm font-medium text-slate-300 hover:text-white underline underline-offset-4 decoration-[#d4af37]/60 hover:decoration-[#d4af37] transition-colors whitespace-nowrap"
            >
              Explore Real Event Photos →
            </button>
          </div>
        </div>
      </div>

      {/* Trust and Service Highlights */}
      <div className="relative z-10 border-t border-[#d4af37]/20 bg-[#0a0e14]/90 backdrop-blur-md py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <div className="font-mono tabular-nums text-lg font-bold text-white">
                  100%
                </div>
                <div className="text-xs text-slate-400">
                  On-Time Execution
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  Guest Concierge
                </div>
                <div className="text-xs text-slate-400">
                  End-to-End Hospitality
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <div className="font-mono tabular-nums text-lg font-bold text-white">
                  100+
                </div>
                <div className="text-xs text-slate-400">
                  Curated Local Vendors
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  Transparent Budget
                </div>
                <div className="text-xs text-slate-400">
                  Clear Event Cost Planning
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};