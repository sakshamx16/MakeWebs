import React, { useState } from 'react';
import {
  Globe,
  UtensilsCrossed,
  MenuSquare,
  MessageCircle,
  MapPin,
  Smartphone,
  Search,
  Wrench,
  Check,
  ArrowRight,
} from 'lucide-react';
import { servicesList, ServiceItem, getWhatsAppUrl } from '../config/agency';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: ServiceItem['icon']) => {
    switch (iconName) {
      case 'globe':
        return <Globe className="w-5 h-5" />;
      case 'utensils':
        return <UtensilsCrossed className="w-5 h-5" />;
      case 'menu':
        return <MenuSquare className="w-5 h-5" />;
      case 'message-circle':
        return <MessageCircle className="w-5 h-5" />;
      case 'map-pin':
        return <MapPin className="w-5 h-5" />;
      case 'smartphone':
        return <Smartphone className="w-5 h-5" />;
      case 'search':
        return <Search className="w-5 h-5" />;
      case 'wrench':
        return <Wrench className="w-5 h-5" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-neutral-950 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
            Services We Provide
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Everything Your Local Business Needs Online
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            From modern responsive websites to instant WhatsApp ordering and Google Maps placement,
            we handle everything from start to finish.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {servicesList.map((service, index) => {
            return (
              <div
                key={service.id}
                className="bg-neutral-900/60 border border-neutral-800/80 rounded-xl p-6 flex flex-col justify-between hover:border-neutral-700 hover:bg-neutral-900 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700/70 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors">
                      {getServiceIcon(service.icon)}
                    </div>
                    <span className="text-xs font-mono text-neutral-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs text-emerald-400/90 font-medium">
                    {service.tagline}
                  </p>

                  <p className="mt-2.5 text-xs text-neutral-400 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="mt-4 pt-4 border-t border-neutral-800/60 space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-[11px] text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800/80">
                  <a
                    href={getWhatsAppUrl(`Hi! I am interested in your service: ${service.title}. Could you share more details and pricing?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>Inquire About This</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 rounded-xl bg-neutral-900/80 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-semibold text-white">
              Not sure which services your business needs?
            </div>
            <div className="text-xs text-neutral-400 mt-1">
              Message us on WhatsApp. We'll examine your store and give you an honest recommendation.
            </div>
          </div>
          <a
            href={getWhatsAppUrl("Hi! I am not sure which website package or services my business needs. Can you give me a recommendation?")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 text-neutral-950 font-semibold text-xs rounded-md transition-colors whitespace-nowrap"
          >
            Ask for Free Guidance
          </a>
        </div>

      </div>
    </section>
  );
};
