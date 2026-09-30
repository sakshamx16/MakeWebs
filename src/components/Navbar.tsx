import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ChevronRight, Phone } from 'lucide-react';
import { agencyInfo, getWhatsAppUrl } from '../config/agency';

interface NavbarProps {
  onOpenContactForm?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Direct Ordering', href: '#direct-ordering' },
    { label: 'Our Work', href: '#work' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-neutral-950/60 backdrop-blur-sm border-b border-neutral-800/30 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single element Brand Wordmark (Per Frontend Design Top Bar Contract) */}
          <a
            href="#"
            className="flex items-center gap-2 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
            aria-label={`${agencyInfo.name} Home`}
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm tracking-wider group-hover:border-emerald-400 transition-colors">
              {agencyInfo.name.charAt(0) || 'A'}
            </div>
            <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              {agencyInfo.name}
            </span>
          </a>

          {/* Zone 2: Clean text navigation links (Hidden on mobile) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${agencyInfo.phoneNumber.replace(/[^0-9+]/g, '')}`}
              className="text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 px-2.5 py-1.5 transition-colors"
              title="Call us directly"
            >
              <Phone className="w-3.5 h-3.5 text-neutral-400" />
              <span className="hidden xl:inline">{agencyInfo.whatsappDisplayNumber}</span>
            </a>

            <a
              href={getWhatsAppUrl(agencyInfo.defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-md transition-all shadow-sm hover:shadow-emerald-500/20 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>{agencyInfo.consultationCtaText}</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppUrl(agencyInfo.defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden px-3 py-1.5 text-xs font-medium text-neutral-950 bg-emerald-400 rounded-md flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Free Demo</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950/98 border-b border-neutral-800 px-4 pt-4 pb-6 mt-3 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-md hover:bg-neutral-900 hover:text-white transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-800/80 space-y-2">
            <a
              href={getWhatsAppUrl(agencyInfo.defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-neutral-950 bg-emerald-400 rounded-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Get Free Website Demo (WhatsApp)</span>
            </a>

            <div className="flex items-center justify-between text-xs text-neutral-400 px-1 pt-1">
              <span>Direct Phone:</span>
              <a
                href={`tel:${agencyInfo.phoneNumber.replace(/[^0-9+]/g, '')}`}
                className="text-neutral-200 font-medium hover:text-emerald-400"
              >
                {agencyInfo.whatsappDisplayNumber}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
