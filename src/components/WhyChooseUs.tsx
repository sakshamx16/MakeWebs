import React from 'react';
import {
  Store,
  Smartphone,
  Zap,
  MessageCircle,
  Palette,
  BadgePercent,
  LifeBuoy,
  CheckCircle,
} from 'lucide-react';
import { whyChooseUsPoints, getWhatsAppUrl } from '../config/agency';

export const WhyChooseUs: React.FC = () => {
  const icons = [Store, Smartphone, Zap, MessageCircle, Palette, BadgePercent, LifeBuoy];

  return (
    <section id="why-us" className="py-24 bg-neutral-900/40 border-y border-neutral-800 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
            Why Local Business Owners Trust Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Practical Web Design Built for Real World Local Sales
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            We focus on what actually matters for a neighborhood business: fast loading, easy mobile browsing,
            accurate menus, and direct WhatsApp contact without confusing technical jargon.
          </p>
        </div>

        {/* Points Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {whyChooseUsPoints.map((point, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={point.title}
                className="bg-neutral-950/80 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-900 flex items-center gap-1.5 text-[11px] text-neutral-400 font-mono">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}

          {/* Quick Consultation Card */}
          <div className="bg-gradient-to-br from-emerald-950/30 to-neutral-950 border border-emerald-500/20 rounded-xl p-6 flex flex-col justify-between text-left">
            <div>
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                Have Specific Questions?
              </div>
              <h3 className="text-base font-semibold text-white tracking-tight">
                Let's Talk About Your Store
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Whether you need a digital menu, a single-page business presence, or full WhatsApp ordering, we will explain everything clearly.
              </p>
            </div>

            <div className="mt-6 pt-3">
              <a
                href={getWhatsAppUrl("Hi! I have a few questions about getting a website for my business. Can we talk?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 text-neutral-950 font-semibold text-xs rounded-md transition-colors w-full justify-center"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Talk to Us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
