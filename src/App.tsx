import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { AboutFounder } from './components/AboutFounder';
import { ServicesBento } from './components/ServicesBento';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { RoiCalculator } from './components/RoiCalculator';
import { ResponsiveSimulator } from './components/ResponsiveSimulator';
import { GithubShowcase } from './components/GithubShowcase';
import { PricingPackages } from './components/PricingPackages';
import { ProcessTimeline } from './components/ProcessTimeline';
import { BudgetCalculator } from './components/BudgetCalculator';
import { FreeAuditSection } from './components/FreeAuditSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0C0D0E] text-[#F4F4F5] selection:bg-[#C6FF00] selection:text-black relative">
      {/* Sticky Navigation */}
      <Navbar />

      <main>
        {/* 1. Hero Section (Card 01/09 & 03/09) */}
        <Hero />

        {/* 2. Infinite Live Ticker Marquee */}
        <Marquee />

        {/* 3. About Nahuel & Anti-Risk Technical Guarantees */}
        <AboutFounder />

        {/* 4. Services & Capabilities Bento (Card 02/09) */}
        <ServicesBento />

        {/* 5. Interactive Before vs. After Slider (Card 05/09) */}
        <BeforeAfterSlider />

        {/* 6. Interactive ROI Return on Investment Estimator */}
        <RoiCalculator />

        {/* 7. Interactive Responsive Device Sandbox (Card 04/09) */}
        <ResponsiveSimulator />

        {/* 8. Live GitHub Projects & Ecosystem Hub (Card 08/09) */}
        <GithubShowcase />

        {/* 9. Turnkey Flat-Rate Packages & Monthly Maintenance MRR */}
        <PricingPackages />

        {/* 10. 5-Step Agile Process Timeline (Card 06/09) */}
        <ProcessTimeline />

        {/* 11. Real-time Project Scope & Budget Calculator (Card 07/09) */}
        <BudgetCalculator />

        {/* 12. Free Web Audit Lead Magnet */}
        <FreeAuditSection />

        {/* 13. Objection Buster FAQ Accordion */}
        <FaqSection />
      </main>

      {/* 14. High-Impact Footer & Conversion Close (Card 09/09) */}
      <Footer />

      {/* 15. Persistent Floating WhatsApp Trigger */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
