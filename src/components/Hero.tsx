import React, { useState } from 'react';
import { MessageCircle, ArrowRight, Smartphone, Sparkles, MapPin, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { agencyInfo, getWhatsAppUrl, heroMockupImg } from '../config/agency';

interface HeroProps {
  onOpenWork?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [activeDeviceTab, setActiveDeviceTab] = useState<'mobile' | 'overview'>('mobile');

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background subtle ambient glows (clean and contained) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-72 h-72 bg-emerald-700/5 blur-[100px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Proposition and Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Contextual category identifier (clean, unboxed text per Zero-Pill discipline) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400 uppercase">
              <span>Websites Built For Local Businesses</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-400 font-normal">Restaurants, Cafes, Salons, Gyms & Shops</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
              Professional Websites for Local Businesses
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
              {agencyInfo.subheadline}
            </p>

            {/* Quick Proof Badges (Human editorial style, no fake metrics) */}
            <div className="pt-1 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Mobile-First & Ultra Fast
              </span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Direct WhatsApp Ordering
              </span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Google Maps & Timings
              </span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Live in 5–7 Days
              </span>
            </div>

            {/* Call To Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={getWhatsAppUrl(agencyInfo.defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-lg transition-all shadow-md hover:shadow-emerald-500/25 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{agencyInfo.consultationCtaText}</span>
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-neutral-200 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 rounded-lg transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <span>See Our Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Reassurance text */}
            <p className="text-xs text-neutral-500">
              No pressure or commitment. We discuss your business needs and show you a tailored preview.
            </p>
          </div>

          {/* Right Column: Visually Impressive Device Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[360px] sm:max-w-[420px] lg:max-w-none">
              
              {/* Interactive Device Shell */}
              <div className="relative rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden transition-all duration-300">
                
                {/* Device Header Bar */}
                <div className="px-4 py-3 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    <span className="ml-2 font-mono text-[11px] text-neutral-400 truncate max-w-[160px]">
                      urbanbites-cafe.com
                    </span>
                  </div>

                  {/* Device view switcher */}
                  <div className="flex items-center gap-1 bg-neutral-900 p-0.5 rounded-md border border-neutral-800">
                    <button
                      onClick={() => setActiveDeviceTab('mobile')}
                      className={`px-2 py-0.5 text-[10px] font-medium rounded transition-colors ${
                        activeDeviceTab === 'mobile'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Phone View
                    </button>
                    <button
                      onClick={() => setActiveDeviceTab('overview')}
                      className={`px-2 py-0.5 text-[10px] font-medium rounded transition-colors ${
                        activeDeviceTab === 'overview'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Desk View
                    </button>
                  </div>
                </div>

                {/* Device Content Area */}
                {activeDeviceTab === 'overview' ? (
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                    <img
                      src={heroMockupImg}
                      alt="Local business website mockup on modern devices"
                      className="w-full h-full object-cover"
                      loading="eager"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent flex items-end p-4">
                      <span className="text-xs text-neutral-300">
                        Designed to look crisp across mobile phones, tablets, and laptops.
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Realistic Mobile Screen Simulation of a Local Business Website */
                  <div className="p-4 bg-neutral-950 space-y-3.5 text-left text-neutral-100 font-sans">
                    {/* Simulated Client Nav */}
                    <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                      <div>
                        <div className="font-bold text-sm tracking-tight text-white">Urban Bites Café</div>
                        <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Open today · 9:00 AM – 11:00 PM
                        </div>
                      </div>
                      <div className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded text-[10px] text-emerald-400 font-medium">
                        Direct Order
                      </div>
                    </div>

                    {/* Simulated Hero Banner */}
                    <div className="relative rounded-lg overflow-hidden bg-neutral-900 border border-neutral-800 p-3">
                      <div className="text-xs font-semibold text-white">Artisanal Burgers & Fresh Brews</div>
                      <p className="text-[11px] text-neutral-400 mt-0.5">
                        Order directly on WhatsApp for 15-minute quick takeaway or delivery.
                      </p>
                      
                      {/* Simulated Interactive Sample Dish */}
                      <div className="mt-2.5 p-2 bg-neutral-950 rounded-md border border-neutral-800 flex items-center justify-between text-xs">
                        <div>
                          <div className="font-medium text-neutral-200">Smoked BBQ Double Burger</div>
                          <div className="text-[10px] text-neutral-400">Crispy bacon, cheddar, brioche bun</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-emerald-400 text-xs">₹280</div>
                          <span className="text-[9px] text-neutral-400">+ Order</span>
                        </div>
                      </div>
                    </div>

                    {/* Simulated Live Action Buttons for potential client to appreciate */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 bg-neutral-900/90 rounded-lg border border-neutral-800 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                        <div>
                          <div className="text-[11px] font-medium text-white">Get Directions</div>
                          <div className="text-[9px] text-neutral-400">Civil Lines, City Center</div>
                        </div>
                      </div>
                      <div className="p-2.5 bg-neutral-900/90 rounded-lg border border-neutral-800 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                        <div>
                          <div className="text-[11px] font-medium text-white">Opening Hours</div>
                          <div className="text-[9px] text-neutral-400">7 Days a Week</div>
                        </div>
                      </div>
                    </div>

                    {/* Simulated Direct WhatsApp Trigger */}
                    <a
                      href={getWhatsAppUrl("Hi! I saw the Urban Bites demo on your hero section. Can you show me a website demo for my business?")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-between p-2.5 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-neutral-950 font-semibold text-xs rounded-lg transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>Send Order on WhatsApp</span>
                      </div>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                )}

                {/* Footer caption */}
                <div className="px-4 py-2.5 bg-neutral-900/90 border-t border-neutral-800/80 text-[11px] text-neutral-400 flex items-center justify-between">
                  <span>Client Mockup Prototype</span>
                  <span className="text-emerald-400">100% Mobile Ready</span>
                </div>
              </div>

              {/* Decorative accent card floating slightly */}
              <div className="hidden sm:block absolute -bottom-5 -left-5 bg-neutral-900/95 backdrop-blur-md border border-neutral-800 p-3.5 rounded-xl shadow-xl text-left max-w-[210px]">
                <div className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">
                  Direct Customer Channel
                </div>
                <div className="text-xs font-semibold text-white mt-0.5">
                  Zero Commission Fees
                </div>
                <div className="text-[11px] text-neutral-400 mt-1">
                  Orders come straight to your phone.
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
