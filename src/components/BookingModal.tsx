import React, { useState } from 'react';
import { COMPANY_DETAILS, SERVICES_LIST } from '../data/content';
import { X, Calendar, Phone, MessageCircle, CheckCircle, Sparkles, Send } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceTitle?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedServiceTitle,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(
    selectedServiceTitle || 'Full Wedding Planning & Royal Decoration'
  );
  const [eventDate, setEventDate] = useState('');
  const [guests, setGuests] = useState('300 - 500 Guests');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#0f141d] border border-[#d4af37]/40 rounded-xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl space-y-5">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-cinzel text-xl font-bold text-white">
              Consultation Slot Requested Successfully!
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
              Thank you, <strong className="text-white">{name}</strong>. Your consultation details have been sent automatically to Event Saathi Weddings. Our senior event planner from L.C. Road, Dhanbad will contact you on <strong className="text-white">{phone}</strong> shortly.
            </p>
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="cursor-pointer py-2.5 px-4 text-xs font-semibold text-[#0a0e14] bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#c59b27] hover:brightness-110 rounded-md transition-all"
              >
                Done / Close Window
              </button>
            </div>
          </div>
        ) : (
          <>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#d4af37] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Event Saathi Weddings · Dhanbad</span>
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-1">
                Book Free Consultation
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Meet our expert event directors at LC Road, Dhanbad or schedule a call.
              </p>
            </div>

            <form
              action="https://formspree.io/f/xpppyrov"
              method="POST"
              onSubmit={() => setSubmitted(true)}
              className="space-y-3.5"
            >
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#0a0e14] border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    Mobile / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 87575 83010"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#0a0e14] border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#0a0e14] border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  Select Event Specialization
                </label>
                <select
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#0a0e14] border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#d4af37]"
                >
                  {SERVICES_LIST.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    Tentative Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-3 py-2 bg-[#0a0e14] border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    Guest Count
                  </label>
                  <select
                    name="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3 py-2 bg-[#0a0e14] border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  >
                    <option>Under 100 Guests</option>
                    <option>100 - 300 Guests</option>
                    <option>300 - 600 Guests</option>
                    <option>600 - 1,200 Guests</option>
                    <option>1,200+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full cursor-pointer py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#0a0e14] bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#c59b27] hover:brightness-110 rounded-md transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Confirm Consultation Request</span>
                </button>
              </div>

              <div className="text-center pt-1">
                <span className="text-[11px] text-slate-400">
                  Prefer direct phone discussion?{' '}
                  <a href={`tel:${COMPANY_DETAILS.phoneClean}`} className="text-[#d4af37] hover:underline">
                    Call {COMPANY_DETAILS.phone}
                  </a>
                </span>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};