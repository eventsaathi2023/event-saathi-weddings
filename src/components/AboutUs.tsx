import { COMPANY_DETAILS, IMAGES } from '../data/content';
import { MapPin, Phone, Mail, CheckCircle2, Shield, HeartHandshake, Eye, TrendingUp } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0d1219] border-t border-[#d4af37]/20 relative overflow-hidden">
      {/* Background Subtle Motifs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#996515]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-2">
            About Our Company · हमारी कहानी
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-4">
            Aapke Har Utsav Ka <span className="text-gold-gradient">Shahi Saathi</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Founded in 2025 in the heart of Dhanbad, Jharkhand, <span className="text-white font-medium">Event Saathi Weddings India Pvt. Ltd.</span> was born out of a passion to transform celebrations into timeless royal memories.
          </p>
        </div>

        {/* 2-Column Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden border border-[#d4af37]/30 shadow-2xl">
              <img
                src={IMAGES.weddingStageRoyal}
                alt="Royal Event Saathi Wedding Stage Decor"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = './assets/images/wedding_stage_royal.jpg';
                }}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e14] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0a0e14]/90 backdrop-blur-md rounded-lg border border-[#d4af37]/20">
                <div className="font-cinzel text-sm font-semibold text-[#f3e5ab]">
                  Event Saathi Weddings India Pvt. Ltd.
                </div>
                <div className="text-xs text-slate-300 flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Headquarters: L.C Road, Dhanbad, Jharkhand - 826001</span>
                </div>
              </div>
            </div>

            {/* Inset Decorative Card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-gradient-to-br from-[#1a140f] to-[#0d1219] p-4 sm:p-5 rounded-lg border border-[#d4af37]/40 shadow-xl hidden sm:block max-w-[240px]">
              <div className="font-mono text-2xl font-bold text-[#d4af37]">2025</div>
              <div className="text-xs font-semibold text-white mt-1">Established with Pride</div>
              <div className="text-[11px] text-slate-400 mt-1">Serving Dhanbad, Bokaro, Ranchi & all Eastern India</div>
            </div>
          </div>

          {/* Right Column: Mission, Vision & Execution Discipline */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-cinzel text-2xl sm:text-3xl font-semibold text-white leading-snug">
              Redefining Event Planning in Jharkhand with Royal Elegance & Transparency
            </h3>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              In traditional event planning, families and corporate managers often suffer from fragmented vendor coordination, runaway costs, and chaotic execution on the main day. At Event Saathi Weddings, we introduced a systematic, corporate approach to weddings and social events.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              From grand royal vivahs with authentic Rajputana mandaps to intimate birthday & kitty party gatherings, high-tech corporate conferences, and massive public exhibitions—our dedicated Saathi managers orchestrate every single detail so you can celebrate without stress.
            </p>

            {/* Key Differentiators Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-lg border border-slate-800">
                <Shield className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-white">Full Budget Transparency</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Itemized cost estimations with no hidden charges</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-lg border border-slate-800">
                <HeartHandshake className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-white">Guest Concierge & Care</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Station pick-ups, hotel check-ins & warm hospitality</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-lg border border-slate-800">
                <Eye className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-white">3D Stage & Mandap Mockups</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">See your decor and layout before you finalize</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-lg border border-slate-800">
                <TrendingUp className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-white">Turnkey Production</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Sound, lighting, catering & artist logistics under 1 roof</div>
                </div>
              </div>
            </div>

            {/* Quick Contact Line */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-300 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <a href={`tel:${COMPANY_DETAILS.phoneClean}`} className="hover:text-white transition-colors">
                  {COMPANY_DETAILS.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#d4af37]" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white transition-colors">
                  {COMPANY_DETAILS.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Steps How Event Saathi Works */}
        <div className="mt-16 pt-12 border-t border-[#d4af37]/20">
          <div className="text-center mb-10">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-1">Our Process</div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              How We Turn Your Vision Into Reality
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-[#0a0e14] rounded-lg border border-slate-800 relative group hover:border-[#d4af37]/40 transition-colors">
              <div className="text-xs font-mono font-bold text-[#d4af37] mb-2">01. Discovery & Budgeting</div>
              <div className="text-sm font-semibold text-white mb-2">Requirement Analysis</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                We meet at our LC Road office or online to map your guest count, preferred dates, aesthetic desires, and budget boundaries.
              </p>
            </div>

            <div className="p-5 bg-[#0a0e14] rounded-lg border border-slate-800 relative group hover:border-[#d4af37]/40 transition-colors">
              <div className="text-xs font-mono font-bold text-[#d4af37] mb-2">02. Design & Vendor Curation</div>
              <div className="text-sm font-semibold text-white mb-2">Customized Blueprint</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                We curate venue options, design thematic 3D decor setups, and present verified catering, photo, and entertainment vendors.
              </p>
            </div>

            <div className="p-5 bg-[#0a0e14] rounded-lg border border-slate-800 relative group hover:border-[#d4af37]/40 transition-colors">
              <div className="text-xs font-mono font-bold text-[#d4af37] mb-2">03. Guest & Logistics Sync</div>
              <div className="text-sm font-semibold text-white mb-2">RSVP & Travel Concierge</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Complete guest tracking, room allocations, transport pickups, ritual schedules, and multi-cuisine menu tastings.
              </p>
            </div>

            <div className="p-5 bg-[#0a0e14] rounded-lg border border-slate-800 relative group hover:border-[#d4af37]/40 transition-colors">
              <div className="text-xs font-mono font-bold text-[#d4af37] mb-2">04. Flawless D-Day Execution</div>
              <div className="text-sm font-semibold text-white mb-2">Live Saathi Shadowing</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our on-ground team handles the clockwork execution—from baraat entry to bidaai, corporate cueing, or birthday cake cutting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
