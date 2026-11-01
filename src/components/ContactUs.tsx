import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Phone, MapPin, Mail } from 'lucide-react';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xpppyrov", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const errorData = await response.json();
        if (errorData && errorData.errors) {
          setErrorMessage(errorData.errors.map((err: any) => err.message).join(", "));
        } else {
          setErrorMessage("Oops! Kuch problem aayi hai. Kripya WhatsApp par contact karein.");
        }
      }
    } catch (error) {
      setErrorMessage("Network error. Kripya apna internet connection check karein.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-amber-400 sm:text-4xl">
            Book Your Dream Event
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Get in touch with Event Saathi Weddings for a seamless planning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-slate-400">Phone / WhatsApp</p>
                    <a href="https://wa.me/918757583010" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-amber-400 transition-colors">
                      +91 8757583010
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-slate-400">Operating Regions</p>
                    <p className="text-lg font-medium">Dhanbad, Bokaro, Ranchi, Jamshedpur & Across India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-slate-400">Direct WhatsApp Chat</p>
                    <a 
                      href="https://wa.me/918757583010?text=Hi%20Event%20Saathi,%20I%20want%20to%20discuss%20an%20event%20booking." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-md"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" /> Chat on WhatsApp Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Box */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold text-white">Consultation Request Received!</h3>
                <p className="text-slate-300">
                  Thank you for reaching out. Our team will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none text-white"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none text-white"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Event Type / Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none text-white"
                    placeholder="Tell us about your wedding or event date and requirements..."
                  ></textarea>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-900/50 border border-red-500 text-red-200 text-sm rounded-lg">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit & Request Callback</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}