import React from 'react';
import { Check, MessageCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { pricingPlans, getWhatsAppUrl } from '../config/agency';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-neutral-900/50 border-y border-neutral-800 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Simple, Affordable Packages for Every Local Business
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Straightforward pricing with no surprise monthly charges.
            You get a fully tested, mobile-ready website designed to convert customers.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left items-stretch">
          {pricingPlans.map((plan) => {
            const planWhatsAppUrl = getWhatsAppUrl(plan.whatsappInquiryText);
            
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all ${
                  plan.popular
                    ? 'bg-neutral-950 border-2 border-emerald-500/80 shadow-xl shadow-emerald-500/5'
                    : 'bg-neutral-950/80 border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-400 text-neutral-950 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      {plan.tier}
                    </span>
                    <span className="text-[11px] text-neutral-400">
                      One-time investment
                    </span>
                  </div>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
                      {plan.price}
                    </span>
                    <span className="text-xs text-neutral-400">/ project</span>
                  </div>

                  <p className="mt-1 text-xs text-neutral-400 font-medium">
                    {plan.priceNote}
                  </p>

                  <p className="mt-4 text-xs text-neutral-300 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-6 pt-6 border-t border-neutral-800 space-y-3">
                    <div className="text-[11px] font-semibold text-white uppercase tracking-wider">
                      What is included:
                    </div>
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-8 pt-6 border-t border-neutral-800/80">
                  <a
                    href={planWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-all ${
                      plan.popular
                        ? 'bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 text-neutral-950 shadow-md hover:shadow-emerald-500/20'
                        : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>{plan.ctaText}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Clarification & Custom Quote Banner */}
        <div className="mt-12 max-w-3xl mx-auto p-5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-semibold text-white">
                Need something custom or have specific requirements?
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">
                Final pricing depends on your exact business requirements, pages, and feature needs. Let's discuss your idea and we'll provide a fair, customized quote.
              </div>
            </div>
          </div>
          <a
            href={getWhatsAppUrl("Hi, I need a custom website quote for my business. Let's discuss.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs rounded-md transition-colors whitespace-nowrap"
          >
            Let's Discuss
          </a>
        </div>

      </div>
    </section>
  );
};
