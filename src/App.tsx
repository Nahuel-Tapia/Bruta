import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { GithubShowcase } from './components/GithubShowcase';
import { ServicesBento } from './components/ServicesBento';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { BudgetCalculator } from './components/BudgetCalculator';
import { PricingPackages } from './components/PricingPackages';
import { AboutFounder } from './components/AboutFounder';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0C0D0E] text-[#F4F4F5] selection:bg-[#C6FF00] selection:text-black relative">
      {/* Sticky Navigation */}
      <Navbar />

      <main>
        {/* 1. Minimalist Editorial Hero (Uncluttered, monumental impact) */}
        <Hero />

        {/* 2. Infinite Tech Ticker */}
        <Marquee />

        {/* 3. Selected Real Projects & Production Code (Card 02/07) */}
        <GithubShowcase />

        {/* 4. Services & Digital Capabilities (Card 03/07) */}
        <ServicesBento />

        {/* 5. Interactive Before vs. After Transformation (Card 04/07) */}
        <BeforeAfterSlider />

        {/* 6. Interactive Scope & Budget Calculator (Card 05/07) */}
        <BudgetCalculator />

        {/* 7. Turnkey Packages & Monthly Maintenance (Card 06/07) */}
        <PricingPackages />

        {/* 8. About Nahuel & Direct Technical Guarantees (Card 07/07) */}
        <AboutFounder />

        {/* 9. Objection Buster FAQ Accordion */}
        <FaqSection />
      </main>

      {/* 10. Minimalist Footer & Conversion Close */}
      <Footer />

      {/* 11. Persistent Floating WhatsApp Trigger */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
