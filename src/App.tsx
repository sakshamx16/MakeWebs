/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
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

export default function App() {
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

        {/* 5. Our Work / Demo Showcase */}
        <PortfolioSection />

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
