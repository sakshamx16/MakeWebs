import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { agencyInfo } from '../config/agency';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl p-6 text-left space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>
              {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-xs sm:text-sm text-neutral-300 space-y-3 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>{agencyInfo.name}</strong> values your privacy. This policy outlines how we handle inquiries and business information when you contact us for website design services.
              </p>
              <h4 className="font-semibold text-white">1. Information We Collect</h4>
              <p>
                We only collect information you voluntarily provide to us—such as your name, business name, phone number, email, and website requirements—when you submit our contact form or contact us via WhatsApp.
              </p>
              <h4 className="font-semibold text-white">2. How We Use Your Information</h4>
              <p>
                Your information is used strictly to prepare website demos, communicate project proposals, and deliver web design services. We never sell, rent, or share your contact details with third-party advertisers or telemarketers.
              </p>
              <h4 className="font-semibold text-white">3. Direct Contact</h4>
              <p>
                If you have questions about our privacy policy or want your information removed from our inquiry records, please email us at <strong className="text-white">{agencyInfo.email}</strong> or message us on WhatsApp.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>{agencyInfo.name}</strong>. By using our website or hiring our web design services, you agree to these standard business terms.
              </p>
              <h4 className="font-semibold text-white">1. Project Scope & Deliverables</h4>
              <p>
                Every web design project begins with a shared scope of work outlining the pages, menu items, features, and timeline. Deliverables are demonstrated on a live preview link prior to final launch.
              </p>
              <h4 className="font-semibold text-white">2. Content & Assets</h4>
              <p>
                Clients provide their business text, menu items, logo, and photos. You retain 100% full ownership of your business content, trademarks, and domain name.
              </p>
              <h4 className="font-semibold text-white">3. Payment & Revisions</h4>
              <p>
                Payment milestones and revision cycles are agreed upon prior to project commencement. We ensure your satisfaction before final handover and domain deployment.
              </p>
            </>
          )}
        </div>

        <div className="pt-4 border-t border-neutral-800 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
