import React, { useState } from 'react';
import { PageSection } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { BudgetCalculator } from './components/BudgetCalculator';
import { Gallery } from './components/Gallery';
import { OurWork } from './components/OurWork';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<PageSection>('home');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>();

  const handleNavigate = (section: PageSection) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenBookingModal = (serviceTitle?: string) => {
    setSelectedServiceForModal(serviceTitle);
    setIsBookingModalOpen(true);
  };

  const handleScrollToBudgetCalculator = () => {
    const el = document.getElementById('budget-calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0e14] text-slate-100 font-sans-body selection:bg-[#d4af37] selection:text-[#0a0e14]">
      {/* Navigation Top Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenBookingModal={() => handleOpenBookingModal()}
      />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero Section */}
        <div id="home">
          <Hero
            onOpenBookingModal={() => handleOpenBookingModal()}
            onOpenBudgetCalculator={handleScrollToBudgetCalculator}
            onNavigateToGallery={() => handleNavigate('gallery')}
          />
        </div>

        {/* 2. About Us Section */}
        <div id="about">
          <AboutUs />
        </div>

        {/* 3. Services Section */}
        <div id="services">
          <Services
            onOpenBookingModalWithService={(serviceTitle) => handleOpenBookingModal(serviceTitle)}
          />
        </div>

        {/* --- SEO Keyword Rich Content Section for Google Ranking --- */}
        <section className="seo-content-section" style={{ padding: '60px 20px', backgroundColor: '#0f172a', borderTop: '1px solid #1e293b', borderBottom: '1px solid #1e293b' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '15px', color: '#f8fafc', fontWeight: 'bold' }}>
              Best Wedding Planner & Complete Event Management in Dhanbad
            </h1>
            <p style={{ textAlign: 'center', fontSize: '1.05rem', color: '#94a3b8', marginBottom: '40px', maxWidth: '900px', marginInline: 'auto' }}>
              Event Saathi Weddings is the leading event management company and wedding planner in Dhanbad, Bokaro, Ranchi, and Jamshedpur. We specialize in luxury marriage venues, premium catering, stunning stage decorators, live band & DJ, photography, corporate events, school functions, and birthday parties.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
              
              {/* Card 1 */}
              <div style={{ background: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #334155' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#fbbf24', marginBottom: '12px', fontWeight: '600' }}>Wedding Decor & Stages</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#cbd5e1' }}>
                  Royal theme decorations, LED Stage design, Jaimala Stage, Haldi Stage, Mehndi Stage setup, and grand Bride & Groom Entry concepts with special effects in Dhanbad.
                </p>
              </div>

              {/* Card 2 */}
              <div style={{ background: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #334155' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#fbbf24', marginBottom: '12px', fontWeight: '600' }}>Venues, Catering & Media</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#cbd5e1' }}>
                  Marriage venue booking, expert caterers for delicious multi-cuisine food, professional photography, cinematic videography, drone coverage, and honeymoon tour packages.
                </p>
              </div>

              {/* Card 3 */}
              <div style={{ background: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #334155' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#fbbf24', marginBottom: '12px', fontWeight: '600' }}>Band, DJ & Live Music</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#cbd5e1' }}>
                  Traditional wedding bands, live music bands, professional Live DJs, live stage performances, and high-tech line array sound and lighting setups.
                </p>
              </div>

              {/* Card 4 */}
              <div style={{ background: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #334155' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#fbbf24', marginBottom: '12px', fontWeight: '600' }}>Corporate & School Events</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#cbd5e1' }}>
                  Complete corporate event management, annual school functions, sports day meets, drawing competitions, trade fairs, and exhibition stall planning in Dhanbad.
                </p>
              </div>

              {/* Card 5 */}
              <div style={{ background: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #334155' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#fbbf24', marginBottom: '12px', fontWeight: '600' }}>Parties & Kids Play Zone</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#cbd5e1' }}>
                  Birthday party decorations, kitty party setups, small family celebration arrangements, and interactive kids play zones with inflatable bouncers and game stalls.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Interactive Budget & Guest Calculator */}
        <div id="budget-calculator">
          <BudgetCalculator />
        </div>

        {/* 5. Gallery Section */}
        <div id="gallery">
          <Gallery
            onPlanSimilarEvent={(eventName) =>
              handleOpenBookingModal(`Similar to: ${eventName}`)
            }
          />
        </div>

        {/* 6. Our Work & Case Studies */}
        <div id="work">
          <OurWork />
        </div>

        {/* 7. Contact Us Section */}
        <div id="contact">
          <ContactUs initialService={selectedServiceForModal} />
        </div>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBookingModal={() => handleOpenBookingModal()}
      />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions />

      {/* Global Booking Consultation Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedServiceTitle={selectedServiceForModal}
      />
    </div>
  );
}