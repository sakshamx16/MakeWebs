import React from 'react';
import { Eye, PhoneCall, LayoutGrid, Globe, ArrowRight } from 'lucide-react';
import { valuePoints, agencyInfo, getWhatsAppUrl } from '../config/agency';

export const TrustValue: React.FC = () => {
  const icons = [Eye, PhoneCall, LayoutGrid, Globe];

  return (
    <section className="py-20 bg-neutral-900/40 border-y border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Intro */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
            Why Your Local Business Needs A Website
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Customers Search Online Before They Walk Into Your Store
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Whether someone is looking for a nearby dinner spot, a birthday cake, a gym membership,
            or a salon appointment—they search online first. A clean website ensures they choose you instead of your competitor.
          </p>
        </div>

        {/* 4 Value Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {valuePoints.map((point, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={point.title}
                className="bg-neutral-950/80 border border-neutral-800/90 rounded-xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-105 group-hover:bg-emerald-500/20 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {point.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-neutral-400 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-900 text-xs text-neutral-500 flex items-center justify-between">
                  <span>Advantage {index + 1}</span>
                  <span className="text-neutral-400">Essential</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action strip */}
        <div className="mt-12 text-center">
          <a
            href={getWhatsAppUrl("Hi! I would like to see how a professional website can help my local business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>Ask us how your business can get online this week</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
