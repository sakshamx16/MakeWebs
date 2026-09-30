import React, { useState } from 'react';
import {
  MessageCircle,
  Phone,
  Mail,
  Instagram,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { agencyInfo, getWhatsAppUrl } from '../config/agency';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    businessType: 'Restaurant & Café',
    phone: '',
    needs: [] as string[],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const businessTypes = [
    'Restaurant & Café',
    'Bakery & Cake Shop',
    'Salon & Spa',
    'Gym & Fitness Studio',
    'Coaching & Tuition Institute',
    'Boutique & Fashion Store',
    'Sweet Shop & Confectionery',
    'Other Local Business',
  ];

  const needsOptions = [
    'New Business Website',
    'Digital Menu',
    'WhatsApp Direct Ordering',
    'Google Maps & Location Setup',
    'Website Redesign',
    'Website Maintenance',
  ];

  const handleNeedToggle = (need: string) => {
    setFormData((prev) => {
      const exists = prev.needs.includes(need);
      return {
        ...prev,
        needs: exists ? prev.needs.filter((n) => n !== need) : [...prev.needs, need],
      };
    });
  };

  /**
   * Generates a structured WhatsApp text from the filled contact form.
   */
  const generateWhatsAppMessage = () => {
    const needsText = formData.needs.length > 0 ? formData.needs.join(', ') : 'Not specified';
    return (
      `*New Website Inquiry*\n\n` +
      `*Name:* ${formData.name || 'Not provided'}\n` +
      `*Business Name:* ${formData.businessName || 'Not provided'}\n` +
      `*Business Type:* ${formData.businessType}\n` +
      `*Phone/WhatsApp:* ${formData.phone || 'Not provided'}\n` +
      `*Services Needed:* ${needsText}\n` +
      `*Message:* ${formData.message || 'I would like to see a demo.'}`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    /**
     * =========================================================================
     * BACKEND / FORM INTEGRATION NOTE FOR THE USER:
     * -------------------------------------------------------------------------
     * If you want to connect a backend or email service like Formspree, Web3Forms,
     * or Formcarry without a custom server, you can do:
     * 
     * fetch("https://formspree.io/f/YOUR_FORM_ID", {
     *   method: "POST",
     *   headers: { "Content-Type": "application/json" },
     *   body: JSON.stringify(formData)
     * });
     * 
     * Right now, the form securely formats the lead and provides an immediate
     * 1-click WhatsApp submission so you never lose a client!
     * =========================================================================
     */
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const handleSendViaWhatsAppNow = () => {
    const url = getWhatsAppUrl(generateWhatsAppMessage());
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 bg-neutral-900/40 border-t border-neutral-800 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
            Let's Talk About Your Website
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white text-balance">
            Ready to Take Your Business Online?
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Contact us today for a free, no-obligation discussion. We will show you an example demo
            tailored to your exact business and explain everything clearly.
          </p>
        </div>

        {/* Primary Large CTA Banner */}
        <div className="mt-12 max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-neutral-950 to-neutral-950 border border-emerald-500/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Fastest Response Option</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white">
              Direct Chat on WhatsApp
            </div>
            <div className="text-xs text-neutral-300 max-w-md">
              Message us directly. We usually reply within minutes with demo links and pricing.
            </div>
          </div>

          <a
            href={getWhatsAppUrl(agencyInfo.defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 text-sm font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Get a Free Demo (WhatsApp)</span>
          </a>
        </div>

        {/* Two-Column Layout: Direct Details + Contact Form */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Local Availability */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-7 space-y-6">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Direct Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                We work directly with local business owners in {agencyInfo.city}.
                Feel free to call, message on WhatsApp, or send an email.
              </p>

              <div className="space-y-4 pt-2">
                {/* WhatsApp */}
                <a
                  href={getWhatsAppUrl(agencyInfo.defaultWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-lg bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800/80 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400">WhatsApp (Recommended)</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-300">
                      {agencyInfo.whatsappDisplayNumber}
                    </div>
                  </div>
                </a>

                {/* Phone Call */}
                <a
                  href={`tel:${agencyInfo.phoneNumber.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-3.5 p-3 rounded-lg bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800/80 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-300 group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400">Direct Phone</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-300">
                      {agencyInfo.phoneNumber}
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${agencyInfo.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-lg bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800/80 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-300 group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400">Email Inquiry</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-300">
                      {agencyInfo.email}
                    </div>
                  </div>
                </a>

                {/* Instagram (Only rendered if configured) */}
                {agencyInfo.instagramUrl ? (
                  <a
                    href={agencyInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3 rounded-lg bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800/80 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-300 group-hover:text-white transition-colors">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-neutral-400">Instagram Profile</div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-300">
                        {agencyInfo.instagramHandle || 'View Profile'}
                      </div>
                    </div>
                  </a>
                ) : null}

                {/* Store visits */}
                <div className="flex items-start gap-3.5 p-3 rounded-lg bg-neutral-900/40 border border-neutral-800/60">
                  <div className="w-9 h-9 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-300 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400">In-Person Meeting</div>
                    <div className="text-xs text-neutral-300">
                      {agencyInfo.address}
                    </div>
                  </div>
                </div>
              </div>

              {/* Working hours indicator */}
              <div className="pt-3 border-t border-neutral-800/80 flex items-center gap-2 text-xs text-neutral-400">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Available Mon–Sat: 9:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 text-left">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Send an Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Fill in your business details below. You can send it directly or transfer it to WhatsApp in 1 click.
            </p>

            {submitted ? (
              <div className="mt-8 p-6 rounded-xl bg-neutral-900/90 border border-emerald-500/40 space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Inquiry Details Prepared!</h4>
                    <p className="text-xs text-neutral-300">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry for <strong className="text-white">{formData.businessName || 'your business'}</strong> is ready.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 text-xs font-mono text-neutral-300 whitespace-pre-wrap leading-relaxed max-h-36 overflow-y-auto">
                  {generateWhatsAppMessage()}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    onClick={handleSendViaWhatsAppNow}
                    className="w-full sm:w-auto flex-1 py-2.5 px-4 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 text-neutral-950 font-bold text-xs rounded-md transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Send This to WhatsApp Now</span>
                  </button>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        businessName: '',
                        businessType: 'Restaurant & Café',
                        phone: '',
                        needs: [],
                        message: '',
                      });
                    }}
                    className="w-full sm:w-auto py-2.5 px-4 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-medium text-xs rounded-md transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                
                {/* Row 1: Name and Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Business Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Royal Sweets & Bakery"
                      className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Business Type & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Business Type
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    >
                      {businessTypes.map((type) => (
                        <option key={type} value={type} className="bg-neutral-950 text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Phone / WhatsApp Number <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                {/* What do you need checkboxes */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-2">
                    What features do you need?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {needsOptions.map((need) => {
                      const checked = formData.needs.includes(need);
                      return (
                        <button
                          key={need}
                          type="button"
                          onClick={() => handleNeedToggle(need)}
                          className={`px-3 py-2 text-left text-xs rounded-lg border transition-colors flex items-center justify-between ${
                            checked
                              ? 'bg-emerald-500/10 border-emerald-500/50 text-white'
                              : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900'
                          }`}
                        >
                          <span>{need}</span>
                          <span
                            className={`w-3.5 h-3.5 rounded border flex items-center justify-center text-[10px] ${
                              checked
                                ? 'bg-emerald-500 border-emerald-500 text-neutral-950 font-bold'
                                : 'border-neutral-700'
                            }`}
                          >
                            {checked ? '✓' : ''}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Any specific details or questions?
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you have in mind (e.g., We have a cafe with 20 items, need WhatsApp ordering)..."
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex-1 py-3 px-6 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 text-neutral-950 font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Preparing Inquiry...' : 'Submit Inquiry'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsAppNow}
                    className="w-full sm:w-auto py-3 px-4 bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current text-emerald-400" />
                    <span>Open in WhatsApp</span>
                  </button>
                </div>

                <div className="pt-2 text-[11px] text-neutral-400 text-center sm:text-left">
                  We respect your privacy. No spam. You will only be contacted regarding your website demo.
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
