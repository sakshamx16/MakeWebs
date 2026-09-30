import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { faqList, getWhatsAppUrl } from '../config/agency';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-neutral-950 relative scroll-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Common Questions Local Owners Ask Us
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Honest answers to the most common queries. Have another question? Message us anytime.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-14 space-y-3 text-left">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-xl border border-neutral-800 bg-neutral-900/60 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left text-sm sm:text-base font-semibold text-white hover:text-emerald-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 animate-in fade-in duration-150">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra question helper */}
        <div className="mt-12 text-center">
          <p className="text-xs text-neutral-400">
            Still have a question not listed here?
          </p>
          <a
            href={getWhatsAppUrl("Hi! I have a question about your web design services that wasn't in the FAQ.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 mt-2 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Ask us directly on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
