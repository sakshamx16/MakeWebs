import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { agencyInfo, getWhatsAppUrl } from '../config/agency';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 group">
      
      {/* Subtle dismissible pill tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-neutral-900/95 backdrop-blur-md border border-neutral-700 text-neutral-200 text-xs rounded-full shadow-lg animate-in fade-in slide-in-from-right-2 duration-200">
          <span>Need a website demo? Chat on WhatsApp</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-neutral-400 hover:text-white"
            aria-label="Dismiss chat tip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl("Hi! I am looking for a website for my local business. Can we chat?")}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-13 sm:h-13 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-neutral-950 rounded-full shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        aria-label="Chat directly on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        
        {/* Subtle status pulse indicator */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 rounded-full border-2 border-neutral-950 animate-ping opacity-75" />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 rounded-full border-2 border-neutral-950" />
      </a>
    </div>
  );
};
