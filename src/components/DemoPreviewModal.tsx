import React from 'react';
import { X, MessageCircle, ExternalLink, Check, Smartphone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { PortfolioProject, getWhatsAppUrl } from '../config/agency';

interface DemoPreviewModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const DemoPreviewModal: React.FC<DemoPreviewModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const whatsappInquiryUrl = getWhatsAppUrl(project.whatsappDemoMessage);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Content */}
      <div className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl flex flex-col">
        
        {/* Header Bar */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-neutral-600" aria-hidden="true">·</span>
            <span className="text-xs text-neutral-400 font-medium">Demo Concept</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 text-left">
          
          {/* Main Visual Header */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-neutral-900 border border-neutral-800">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent flex items-end p-6">
              <div>
                <div className="text-xs font-mono text-emerald-400 mb-1">PROTOTYPE SHOWCASE</div>
                <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white">
                  {project.name}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl">
                  {project.shortDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-tight uppercase tracking-wider">
              About This Website Concept
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          {/* Included Features */}
          <div className="p-4 rounded-xl bg-neutral-900/70 border border-neutral-800 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Key Features Included in This Website Build:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-xs text-neutral-300">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transparent Notice for Potential Client */}
          <div className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800 text-xs text-neutral-400 space-y-1">
            <div className="font-semibold text-neutral-200">How your website will work:</div>
            <div>
              When you hire us to build your website, it will be 100% personalized with your real business name, your real logo, your real menu or service prices, your photos, and your direct WhatsApp contact number.
            </div>
          </div>

        </div>

        {/* Modal Footer / CTAs */}
        <div className="sticky bottom-0 z-20 px-6 py-4 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-neutral-400 text-center sm:text-left">
            Interested in a website like <strong className="text-white">{project.name}</strong>?
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-medium text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-md transition-colors"
              >
                <span>Live URL</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : null}

            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-md transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Get a Website Like This</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
