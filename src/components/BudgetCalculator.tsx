import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../data/content';
import { Calculator, Sparkles, Check, MessageCircle, ArrowRight, Info, Users, ShieldCheck } from 'lucide-react';

export const BudgetCalculator: React.FC = () => {
  const [eventType, setEventType] = useState<'wedding' | 'reception' | 'haldi' | 'birthday' | 'corporate' | 'expo'>('wedding');
  const [guests, setGuests] = useState<number>(350);
  const [decorTier, setDecorTier] = useState<'standard' | 'royal' | 'imperial'>('royal');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'decor',
    'sound',
    'photo',
    'hospitality',
  ]);

  const addonOptions = [
    { id: 'decor', label: '3D Mandap / Stage & Floral Architecture', costWeight: 1.0 },
    { id: 'sound', label: 'Acoustic Sound, DJ & Smart Intelligent Lights', costWeight: 0.35 },
    { id: 'photo', label: 'Candid Cinematography & Drone Coverage', costWeight: 0.45 },
    { id: 'hospitality', label: 'Guest Concierge, RSVP & Room Management', costWeight: 0.3 },
    { id: 'catering', label: 'Premium Multi-Cuisine Catering Coordination', costWeight: 1.4 },
    { id: 'baraat', label: 'Royal Baraat, Vintage Car, Dhol & Cold Pyro', costWeight: 0.35 },
  ];

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Calculate dynamic estimated budget based on inputs
  const calculateBudget = () => {
    let baseRatePerGuest = 500;
    if (eventType === 'wedding') baseRatePerGuest = 1200;
    else if (eventType === 'reception') baseRatePerGuest = 900;
    else if (eventType === 'haldi') baseRatePerGuest = 600;
    else if (eventType === 'birthday') baseRatePerGuest = 400;
    else if (eventType === 'corporate') baseRatePerGuest = 850;
    else if (eventType === 'expo') baseRatePerGuest = 700;

    let tierMultiplier = 1.0;
    if (decorTier === 'royal') tierMultiplier = 1.45;
    if (decorTier === 'imperial') tierMultiplier = 2.1;

    let addonsFactor = 0.5;
    selectedAddons.forEach((addonId) => {
      const match = addonOptions.find((o) => o.id === addonId);
      if (match) addonsFactor += match.costWeight;
    });

    const totalEstimate = guests * baseRatePerGuest * (addonsFactor / 1.5) * tierMultiplier;
    const minEstimate = Math.round(totalEstimate * 0.85);
    const maxEstimate = Math.round(totalEstimate * 1.15);

    return { minEstimate, maxEstimate };
  };

  const { minEstimate, maxEstimate } = calculateBudget();

  const formatLakhs = (val: number) => {
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakhs`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  const handleWhatsAppSend = () => {
    const eventLabels = {
      wedding: 'Full Royal Wedding Planning',
      reception: 'Reception Gala',
      haldi: 'Haldi & Sangeet Ceremony',
      birthday: 'Birthday & Kitty Party Function',
      corporate: 'Corporate Summit / Conference',
      expo: 'Exhibition & Brand Launch',
    };

    const addonsText = selectedAddons
      .map((id) => addonOptions.find((a) => a.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    const message = encodeURIComponent(
      `Namaste Event Saathi Weddings! I used your Event Budget Calculator:\n` +
      `• Event: ${eventLabels[eventType]}\n` +
      `• Estimated Guests: ${guests}\n` +
      `• Decor Tier: ${decorTier.toUpperCase()}\n` +
      `• Inclusions: ${addonsText}\n` +
      `• Estimated Budget: ${formatLakhs(minEstimate)} - ${formatLakhs(maxEstimate)}\n\n` +
      `Please let me know available dates and customized quotation for Dhanbad/Jharkhand.`
    );

    window.open(`https://wa.me/${COMPANY_DETAILS.phoneClean}?text=${message}`, '_blank');
  };

  return (
    <section id="budget-calculator" className="py-20 bg-[#0a0e14] border-t border-[#d4af37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-2 flex items-center justify-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Tool · बजट एवं गेस्ट प्लानर</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-4">
            Event Cost & <span className="text-gold-gradient">Budget Estimator</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Planning a wedding, kitty party, or corporate conference in Dhanbad? Adjust your guest count and decor preferences to get an instant realistic transparent estimate.
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[#0f141d] p-6 sm:p-8 rounded-xl border border-slate-800 space-y-6 shadow-xl">
            {/* Step 1: Event Type */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-3">
                1. Select Event Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'wedding', label: 'Royal Wedding' },
                  { id: 'reception', label: 'Reception Gala' },
                  { id: 'haldi', label: 'Haldi & Sangeet' },
                  { id: 'birthday', label: 'Birthday / Kitty Party' },
                  { id: 'corporate', label: 'Corporate Summit' },
                  { id: 'expo', label: 'Exhibition / Expo' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setEventType(item.id as any)}
                    className={`cursor-pointer px-3 py-2.5 text-xs font-medium rounded-lg border text-left transition-all ${
                      eventType === item.id
                        ? 'border-[#d4af37] bg-[#d4af37]/15 text-[#f3e5ab] font-semibold'
                        : 'border-slate-800 bg-[#0a0e14] text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Guest Count Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>2. Anticipated Guests</span>
                </label>
                <span className="font-mono tabular-nums text-sm font-bold text-[#d4af37] bg-[#d4af37]/10 px-2.5 py-0.5 rounded border border-[#d4af37]/30">
                  {guests} Guests
                </span>
              </div>
              <input
                type="range"
                min="25"
                max="2000"
                step="25"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>Intimate (25)</span>
                <span>Grand (500)</span>
                <span>Mega Vivah (2000+)</span>
              </div>
            </div>

            {/* Step 3: Decor & Theme Scale */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2.5">
                3. Decor & Ambiance Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: 'standard',
                    name: 'Essential Elegance',
                    desc: 'Clean floral styling & standard lighting',
                  },
                  {
                    id: 'royal',
                    name: 'Royal Palace Grandeur',
                    desc: 'Handcrafted jharokhas, roses & ambient chandeliers',
                  },
                  {
                    id: 'imperial',
                    name: 'Imperial Bespoke',
                    desc: '360° architectural mandap & imported exotic flora',
                  },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setDecorTier(tier.id as any)}
                    className={`cursor-pointer p-3 rounded-lg border text-left transition-all ${
                      decorTier === tier.id
                        ? 'border-[#d4af37] bg-[#d4af37]/15 text-[#f3e5ab]'
                        : 'border-slate-800 bg-[#0a0e14] text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold text-white mb-1">{tier.name}</div>
                    <div className="text-[10px] text-slate-400 leading-tight">{tier.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Add-On Services */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2.5">
                4. Select Required Inclusions
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {addonOptions.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`cursor-pointer p-2.5 rounded-lg border flex items-center gap-2.5 transition-all ${
                        isChecked
                          ? 'border-[#d4af37]/60 bg-[#d4af37]/10 text-white'
                          : 'border-slate-800 bg-[#0a0e14] text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                          isChecked ? 'bg-[#d4af37] border-[#d4af37] text-[#0a0e14]' : 'border-slate-600'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-xs">{addon.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#17120a] to-[#0f141d] p-6 sm:p-8 rounded-xl border border-[#d4af37]/40 shadow-2xl space-y-6">
            <div className="border-b border-[#d4af37]/20 pb-4">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#d4af37]">
                Estimated Budget Bracket
              </div>
              <div className="font-cinzel text-2xl sm:text-3xl font-bold text-white mt-1 tabular-nums">
                {formatLakhs(minEstimate)} – {formatLakhs(maxEstimate)}
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Estimated for {guests} guests with {decorTier.toUpperCase()} decor tier in Dhanbad / Jharkhand.
              </p>
            </div>

            {/* What this estimate includes */}
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Summary of Selected Items
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Dedicated Event Saathi Project Manager & D-Day Team</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Full 3D Stage Visualizer & Blueprint before execution</span>
                </li>
                {selectedAddons.map((id) => (
                  <li key={id} className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span className="truncate">{addonOptions.find((a) => a.id === id)?.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Guarantee Notice */}
            <div className="p-3 bg-[#0a0e14] rounded-lg border border-slate-800 flex items-start gap-2.5 text-[11px] text-slate-400">
              <Info className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <span>
                Final price will be refined during your free consultation based on custom venue layout, menu selection & specific date.
              </span>
            </div>

            {/* Direct Send to WhatsApp CTA */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={handleWhatsAppSend}
                className="w-full cursor-pointer py-3.5 px-4 text-xs font-semibold text-[#0a0e14] bg-emerald-500 hover:bg-emerald-400 rounded-md transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Budget on WhatsApp to Event Saathi</span>
              </button>
              <div className="text-center text-[11px] text-slate-400">
                Or call our LC Road office directly at{' '}
                <a href={`tel:${COMPANY_DETAILS.phoneClean}`} className="text-[#d4af37] hover:underline">
                  {COMPANY_DETAILS.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
