import React from 'react';
import { ArrowLeft, Sparkles, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../config/agency';

interface DemoHeaderBarProps {
  demoName: string;
  demoCategory: string;
  onBack: () => void;
}

export const DemoHeaderBar: React.FC<DemoHeaderBarProps> = ({
  demoName,
  demoCategory,
  onBack,
}) => {
  const inquiryMessage = `Hi! I explored the ${demoName} (${demoCategory}) demo website and I want a website like this for my business. Can we discuss?`;

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 text-neutral-200 text-xs py-2 px-3 sm:px-6 flex items-center justify-between gap-3 shadow-lg">
      {/* Back to agency button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700/80 transition-colors font-medium shrink-0"
        title="Return to MakeWebs Agency Website"
      >
        <ArrowLeft className="w-3.5 h-3.5 text-emerald-400" />
        <span>Back to MakeWebs</span>
      </button>

      {/* Subtle Context Indicator */}
      <div className="hidden sm:flex items-center gap-2 text-neutral-400">
        <span className="font-semibold text-white">{demoName}</span>
        <span>·</span>
        <span>{demoCategory}</span>
        <span>·</span>
        <span className="text-neutral-500 text-[11px]">Live Demo Experience</span>
      </div>

      {/* Agency Pitch CTA */}
      <div className="flex items-center gap-2">
        <a
          href={getWhatsAppUrl(inquiryMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold text-xs transition-colors shrink-0 shadow-sm"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current" />
          <span className="hidden xs:inline">Want this for your store?</span>
          <span>Get My Website</span>
        </a>
      </div>
    </header>
  );
};
