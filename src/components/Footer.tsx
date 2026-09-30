import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, Instagram, ArrowUp } from 'lucide-react';
import { agencyInfo, servicesList, getWhatsAppUrl } from '../config/agency';
import { LegalModal } from './LegalModal';

export const Footer: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-xs text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Agency Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2 text-white font-bold text-lg tracking-tight">
              <div className="w-7 h-7 rounded-md bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs">
                {agencyInfo.name.charAt(0) || 'A'}
              </div>
              <span>{agencyInfo.name}</span>
            </a>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              {agencyInfo.subheadline}
            </p>

            <div className="pt-2 text-xs text-neutral-400">
              Serving local businesses in <span className="text-neutral-200">{agencyInfo.city}</span> & surrounding regions.
            </div>

            {/* Quick Contact Badges */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={getWhatsAppUrl(agencyInfo.defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-emerald-500/50 flex items-center justify-center text-emerald-400 transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href={`tel:${agencyInfo.phoneNumber.replace(/[^0-9+]/g, '')}`}
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
                title="Call Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${agencyInfo.email}`}
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              {agencyInfo.instagramUrl ? (
                <a
                  href={agencyInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              ) : null}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#direct-ordering" className="hover:text-white transition-colors">Direct Ordering</a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">Our Work & Demos</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">5-Step Process</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Pricing Packages</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Solutions
            </div>
            <ul className="space-y-2">
              {servicesList.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors truncate block"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Direct Reach
            </div>
            <div className="space-y-2 text-neutral-300">
              <div>
                <span className="text-neutral-400 block text-[11px]">WhatsApp:</span>
                <a
                  href={getWhatsAppUrl(agencyInfo.defaultWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-mono"
                >
                  {agencyInfo.whatsappDisplayNumber}
                </a>
              </div>
              <div>
                <span className="text-neutral-400 block text-[11px]">Email:</span>
                <a href={`mailto:${agencyInfo.email}`} className="hover:underline">
                  {agencyInfo.email}
                </a>
              </div>
              {agencyInfo.instagramUrl ? (
                <div>
                  <span className="text-neutral-400 block text-[11px]">Instagram:</span>
                  <a
                    href={agencyInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {agencyInfo.instagramHandle || 'Instagram'}
                  </a>
                </div>
              ) : null}
              <div className="pt-1 text-[11px] text-neutral-400">
                Mon–Sat: 9:00 AM – 8:00 PM
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-14 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-neutral-400">
            <span>© {currentYear} {agencyInfo.name}. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setLegalModalType('privacy')}
              className="hover:text-white underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setLegalModalType('terms')}
              className="hover:text-white underline-offset-4 hover:underline"
            >
              Terms of Service
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Legal Dialog */}
      <LegalModal type={legalModalType} onClose={() => setLegalModalType(null)} />
    </footer>
  );
};
