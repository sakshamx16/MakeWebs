import React from 'react';
import { Check, ArrowRight, Clock } from 'lucide-react';
import { processSteps, getWhatsAppUrl } from '../config/agency';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-neutral-950 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
            Simple 5-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            From Conversation to Live Website in 7 Days
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            You don't need to know anything about coding, hosting, or domains.
            We guide you through every single step with zero technical stress.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-4 relative text-left">
          {processSteps.map((step, index) => {
            return (
              <div
                key={step.number}
                className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between hover:border-neutral-700 transition-colors relative group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono font-bold text-xs flex items-center justify-center">
                      {step.number}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-neutral-400 font-medium">
                      <Clock className="w-3 h-3 text-neutral-400" />
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-800/80 space-y-1.5">
                  {step.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-1.5 text-[11px] text-neutral-300">
                      <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA banner */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-neutral-900/70 border border-neutral-800">
            <span className="text-xs text-neutral-300">
              Ready to start Step 1? It only takes a quick 5-minute chat.
            </span>
            <a
              href={getWhatsAppUrl("Hi! I would like to start Step 1 and discuss a website for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 text-neutral-950 font-semibold text-xs rounded-md transition-colors whitespace-nowrap"
            >
              Start Step 1 on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
