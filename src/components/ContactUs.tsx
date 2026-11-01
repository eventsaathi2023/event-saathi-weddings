import React, { useState } from 'react';
import { COMPANY_DETAILS, FAQS } from '../data/content';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  ChevronDown,
  Sparkles,
} from 'lucide-react';

interface ContactUsProps {
  initialService?: string;
}

export const ContactUs: React.FC<ContactUsProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: initialService || 'Wedding Planning & Decoration',
    eventDate: '',
    guestCount: '300-500',
    venueCity: 'Dhanbad',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      `Namaste Event Saathi Weddings!\n\n` +
      `I would like to book a consultation:\n` +
      `• Name: ${formData.name || 'Client'}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Event: ${formData.eventType}\n` +
      `• Date: ${formData.eventDate || 'To be decided'}\n` +
      `• Guests: ${formData.guestCount}\n` +
      `• Location: ${formData.venueCity}\n` +
      `• Notes: ${formData.notes || 'Looking for package and availability'}\n\n` +
      `Looking forward to meeting at your LC Road, Dhanbad office or connecting on call.`
    );
    window.open(`https://wa.me/${COMPANY_DETAILS.phoneClean}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#0d1219] border-t border-[#d4af37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch · संपर्क करें</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-4">
            Connect with <span className="text-gold-gradient">Event Saathi Weddings</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Visit our office at L.C. Road, Dhanbad or request a callback. Let's design an extraordinary royal experience tailored to your dream and budget.
          </p>
        </div>

        {/* 2-Column Main Contact Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Left Column: Official Contact Card & Venue Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0f141d] p-6 sm:p-8 rounded-xl border border-[#d4af37]/30 shadow-xl space-y-6">
              <h3 className="font-cinzel text-xl font-bold text-white">
                Official Head Office
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Registered Address</div>
                  <div className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {COMPANY_DETAILS.headquarters}
                  </div>
                  <div className="text-[11px] text-[#d4af37] mt-1 font-medium">
                    (Landmark: L.C. Road, near main commercial center, Dhanbad)
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Direct Phone & WhatsApp</div>
                  <a
                    href={`tel:${COMPANY_DETAILS.phoneClean}`}
                    className="text-xs font-medium text-slate-200 hover:text-[#d4af37] mt-1 block"
                  >
                    {COMPANY_DETAILS.phone}
                  </a>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    24/7 dedicated event helpline for client assistance
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Official Email</div>
                  <a
                    href={`mailto:${COMPANY_DETAILS.email}`}
                    className="text-xs text-slate-200 hover:text-[#d4af37] mt-1 block truncate"
                  >
                    {COMPANY_DETAILS.email}
                  </a>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    For corporate tenders, vendor registrations & proposals
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Consultation Hours</div>
                  <div className="text-xs text-slate-300 mt-1">
                    {COMPANY_DETAILS.workingHours}
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Action Box */}
              <div className="pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="w-full cursor-pointer py-3 text-xs font-semibold text-[#0a0e14] bg-emerald-500 hover:bg-emerald-400 rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start Live WhatsApp Chat</span>
                </button>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-[#0a0e14] p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="font-medium text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Location: L.C Road, Dhanbad (826001)</span>
                </span>
                <span className="text-[10px] text-[#d4af37]">Jharkhand</span>
              </div>
              <div className="h-32 bg-slate-900 rounded-lg overflow-hidden border border-slate-800 flex flex-col items-center justify-center relative p-4 text-center">
                <div className="absolute inset-0 bg-royal-pattern opacity-40" />
                <MapPin className="w-8 h-8 text-[#d4af37] mb-1 animate-bounce" />
                <span className="text-xs font-semibold text-white relative z-10">
                  Event Saathi Weddings Office
                </span>
                <span className="text-[11px] text-slate-400 relative z-10">
                  L.C Road, Dhanbad, Jharkhand - 826001
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7 bg-[#0f141d] p-6 sm:p-8 rounded-xl border border-slate-800 shadow-2xl">
            <h3 className="font-cinzel text-xl font-bold text-white mb-2">
              Book a Free Consultation & Get a Quotation
            </h3>
            <p className="text-xs text-slate-300 mb-6">
              Fill in your celebration details. Our senior wedding & event planner will connect with you within 2 business hours.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-[#0a0e14] rounded-xl border border-[#d4af37]/40 space-y-4 animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-cinzel text-xl font-bold text-white">
                  Consultation Request Received!
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Dhanyawaad, <strong className="text-white">{formData.name}</strong>! Your event details have been logged with our planning desk.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleSendToWhatsApp}
                    className="cursor-pointer px-5 py-3 text-xs font-semibold text-[#0a0e14] bg-emerald-500 hover:bg-emerald-400 rounded-md transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Directly on WhatsApp (+91 8757583010)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="cursor-pointer px-4 py-3 text-xs font-medium text-slate-300 hover:text-white border border-slate-700 rounded-md"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form 
                action="https://formspree.io/f/xpppyrov" 
                method="POST"
                onSubmit={() => setSubmitted(true)}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Mayank Agarwal"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0a0e14] border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">
                      WhatsApp / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 87575 83010"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0a0e14] border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. client@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0a0e14] border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  {/* Event Type */}
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">
                      Event Category *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0a0e14] border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#d4af37]"
                    >
                      <option>Wedding Planning & Decoration</option>
                      <option>Haldi, Mehendi & Sangeet Ceremony</option>
                      <option>Corporate Events & Conferences</option>
                      <option>Birthday & Kitty Party Planning</option>
                      <option>Small Party Functions</option>
                      <option>Exhibition & Trade Shows</option>
                      <option>Product Launches & Brand Activation</option>
                      <option>Concerts & Live Entertainment</option>
                      <option>Government Events</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Event Date */}
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">
                      Expected Date
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0a0e14] border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  {/* Guest Count */}
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">
                      Guest Count
                    </label>
                    <select
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0a0e14] border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#d4af37]"
                    >
                      <option>Under 50 (Kitty / Intimate)</option>
                      <option>50 - 150 (Birthday / Roka)</option>
                      <option>150 - 300 (Haldi / Sangeet)</option>
                      <option>300 - 600 (Wedding / Corporate)</option>
                      <option>600 - 1,200 (Grand Vivah)</option>
                      <option>1,200+ (Mega Exhibition / Concert)</option>
                    </select>
                  </div>

                  {/* City */}
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">
                      City / Location
                    </label>
                    <input
                      type="text"
                      name="venueCity"
                      value={formData.venueCity}
                      onChange={(e) => setFormData({ ...formData, venueCity: e.target.value })}
                      placeholder="Dhanbad / Bokaro / Ranchi"
                      className="w-full px-3.5 py-2.5 bg-[#0a0e14] border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                {/* Additional notes */}
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    Specific Vision or Requirements
                  </label>
                  <textarea
                    rows={3}
                    name="notes"
                    placeholder="Tell us about desired mandap themes, catering preferences, budget preferences, or preferred venues..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0a0e14] border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full cursor-pointer py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#0a0e14] bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#c59b27] hover:brightness-110 rounded-md transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit & Request Callback</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto pt-10 border-t border-[#d4af37]/20">
          <div className="text-center mb-8">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-1">
              Frequently Asked Questions
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              Got Questions? We Have Answers
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#0f141d] rounded-lg border border-slate-800 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/40 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#d4af37] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 bg-[#0a0e14]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};