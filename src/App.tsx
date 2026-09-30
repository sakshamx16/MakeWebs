/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustValue } from './components/TrustValue';
import { ServicesSection } from './components/ServicesSection';
import { DirectOrderingSection } from './components/DirectOrderingSection';
import { PortfolioSection } from './components/PortfolioSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { UrbanBitesDemo } from './demos/urban-bites/UrbanBitesDemo';
import { RoyalSweetsDemo } from './demos/royal-sweets/RoyalSweetsDemo';
import { VeloraStudioDemo } from './demos/velora-studio/VeloraStudioDemo';

type ActiveDemoType = 'urban-bites' | 'royal-sweets' | 'velora-studio' | null;

export default function App() {
  const [activeDemo, setActiveDemo] = useState<ActiveDemoType>(null);

  // Sync with browser hash so demo links are shareable directly
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#demo-urban-bites' || hash === '#urban-bites') {
        setActiveDemo('urban-bites');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#demo-royal-sweets' || hash === '#royal-sweets') {
        setActiveDemo('royal-sweets');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#demo-velora-studio' || hash === '#velora-studio') {
        setActiveDemo('velora-studio');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (
        activeDemo &&
        !hash.startsWith('#demo-') &&
        !hash.startsWith('#ub-') &&
        !hash.startsWith('#rs-') &&
        !hash.startsWith('#vs-')
      ) {
        setActiveDemo(null);
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, [activeDemo]);

  const handleOpenDemo = (demoId: string) => {
    if (demoId === 'urban-bites' || demoId === 'royal-sweets' || demoId === 'velora-studio') {
      setActiveDemo(demoId);
      window.location.hash = `#demo-${demoId}`;
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleBackToAgency = () => {
    setActiveDemo(null);
    window.location.hash = '#work';
    setTimeout(() => {
      const el = document.getElementById('work');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  // If a live demo website is active, render the full demo experience
  if (activeDemo === 'urban-bites') {
    return <UrbanBitesDemo onBack={handleBackToAgency} />;
  }

  if (activeDemo === 'royal-sweets') {
    return <RoyalSweetsDemo onBack={handleBackToAgency} />;
  }

  if (activeDemo === 'velora-studio') {
    return <VeloraStudioDemo onBack={handleBackToAgency} />;
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section with device preview */}
        <Hero />

        {/* 2. Trust & Value Proposition */}
        <TrustValue />

        {/* 3. Core Services Grid */}
        <ServicesSection />

        {/* 4. Restaurant & Direct Customer Ordering Feature */}
        <DirectOrderingSection />

        {/* 5. Our Work / Demo Showcase (Only 3 high-quality demos) */}
        <PortfolioSection onOpenDemo={handleOpenDemo} />

        {/* 6. Why Choose Us */}
        <WhyChooseUs />

        {/* 7. 5-Step Process */}
        <ProcessSection />

        {/* 8. Pricing Packages */}
        <PricingSection />

        {/* 9. Frequently Asked Questions */}
        <FAQSection />

        {/* 10. Contact & Free Demo Inquiry */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
