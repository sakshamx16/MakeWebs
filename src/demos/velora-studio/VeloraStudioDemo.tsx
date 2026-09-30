import React, { useState } from 'react';
import {
  Sparkles,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Menu as MenuIcon,
  X,
  ChevronRight,
  Scissors,
  Calendar,
  Check,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  ShoppingBag,
} from 'lucide-react';
import { DemoHeaderBar } from '../DemoHeaderBar';
import { getWhatsAppUrl } from '../../config/agency';
import veloraStudioHeroImg from '../../assets/images/velora_studio_hero_1790773508755.jpg';
import veloraServicesImg from '../../assets/images/velora_studio_services_1790773543951.jpg';

interface SalonService {
  id: string;
  name: string;
  category: 'hair' | 'skin' | 'grooming' | 'nails' | 'bridal';
  duration: string;
  price: number;
  description: string;
  details: string[];
}

interface ServiceCartItem {
  id: string;
  name: string;
  duration: string;
  price: number;
}

const SALON_SERVICES: SalonService[] = [
  // Haircut & Styling
  {
    id: 'vs-1',
    name: 'Senior Stylist Precision Cut & Blowout',
    category: 'hair',
    duration: '45 mins',
    price: 750,
    description: 'Bespoke dry cut adapted to your face structure and hair texture, finished with signature blowout and heat styling.',
    details: ['Personalized hair consultation', 'Gentle clarifying wash & scalp massage', 'Precision texture cut', 'Signature bouncy blowout'],
  },
  {
    id: 'vs-2',
    name: 'Balayage & Dimensional Sun-Kissed Color',
    category: 'hair',
    duration: '150 mins',
    price: 4500,
    description: 'Freehand painted seamless lightener for natural, low-maintenance dimension, finished with custom gloss toner.',
    details: ['Full color mapping', 'Bond-protecting treatment included', 'Custom post-color gloss toner', 'Hydrating blowdry styling'],
  },
  {
    id: 'vs-3',
    name: 'Keratin Protein Smoothing Therapy',
    category: 'hair',
    duration: '120 mins',
    price: 3800,
    description: 'Formaldehyde-free organic protein infusion that eliminates frizz, restores shine, and cuts drying time by half.',
    details: ['Deep detox wash', 'Infused botanical keratin seal', 'Thermal infusion lock', 'Smooth up to 16 weeks'],
  },

  // Skin & Facials
  {
    id: 'vs-4',
    name: 'Signature Hydra-Infusion Glow Facial',
    category: 'skin',
    duration: '60 mins',
    price: 2200,
    description: 'Multi-step skin renewal using gentle vacuum extraction, hyaluronic acid peptide infusion, and cold globes.',
    details: ['Ultrasonic deep pore cleanse', 'Enzyme exfoliation peel', 'Hyaluronic hydration saturation', 'Cryo ball lymphatic massage'],
  },
  {
    id: 'vs-5',
    name: '24K Gold Cellular Radiance Ritual',
    category: 'skin',
    duration: '75 mins',
    price: 3400,
    description: 'Luxury brightening treatment with real micro-gold leaf, collagen peptide mask, and neck massage.',
    details: ['Aromatherapy welcome ritual', 'Micro-gold serum infusion', 'Hydrogel firming sheet mask', 'Collagen eye treatment'],
  },
  {
    id: 'vs-6',
    name: 'Organic Botanical Clarifying Cleanse',
    category: 'skin',
    duration: '45 mins',
    price: 1350,
    description: 'Designed for sensitive or breakout-prone skin using organic chamomile, tea tree, and calming zinc clay mask.',
    details: ['Gentle steam extraction', 'Balancing herbal toner', 'Cooling green clay pack', 'SPF 50 protective barrier'],
  },

  // Grooming
  {
    id: 'vs-7',
    name: 'Royal Beard Sculpt & Hot Towel Ritual',
    category: 'grooming',
    duration: '35 mins',
    price: 450,
    description: 'Razor edge definition, warm sandalwood towel compress, organic beard oil soak, and conditioning balm.',
    details: ['Blade perimeter lining', 'Steam towel infusion', 'Cedarwood & jojoba massage', 'Matte styling finish'],
  },
  {
    id: 'vs-8',
    name: 'Purifying Anti-Pollution Scalp Spa',
    category: 'grooming',
    duration: '45 mins',
    price: 1100,
    description: 'Exfoliating sea salt scalp scrub and tea tree steam infusion to eliminate product buildup and stimulate roots.',
    details: ['Micro-exfoliation scrub', 'High frequency ozone wand', 'Invigorating pressure point massage', 'Light styling'],
  },

  // Nails
  {
    id: 'vs-9',
    name: 'Velora Signature Rose Petal Spa Pedicure',
    category: 'nails',
    duration: '50 mins',
    price: 950,
    description: 'Dead Sea salt soak infused with damask rose petals, botanical scrub, callous buffing, and warm paraffin wrap.',
    details: ['Floral botanical soak', 'Apricot kernel scrub', 'Nail shaping & cuticle care', 'Heated paraffin foot bootie'],
  },

  // Bridal
  {
    id: 'vs-10',
    name: 'Couture Pre-Bridal Glow Package',
    category: 'bridal',
    duration: '3 hours',
    price: 8500,
    description: 'Comprehensive head-to-toe rejuvenation including luxury facial, body polishing, hair spa, and deluxe manicure.',
    details: ['Hydra radiance facial', 'Full body walnut polishing', 'Deep restorative hair spa', 'Rose petal mani-pedi duo'],
  },
];

export const VeloraStudioDemo: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  // Cart State for Multi-service Bookings
  const [cart, setCart] = useState<ServiceCartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appointmentNotes, setAppointmentNotes] = useState('');

  // Appointment Form State
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [selectedService, setSelectedService] = useState('Senior Stylist Precision Cut & Blowout');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [preferredSlot, setPreferredSlot] = useState('Morning (10:30 AM – 1:00 PM)');

  const addToCart = (service: SalonService) => {
    setCart((prev) => {
      if (prev.some((s) => s.id === service.id)) return prev;
      return [...prev, { id: service.id, name: service.name, duration: service.duration, price: service.price }];
    });
  };

  const removeFromCart = (serviceId: string) => {
    setCart((prev) => prev.filter((s) => s.id !== serviceId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalAmount = cart.reduce((sum, s) => sum + s.price, 0);

  const totalEstimatedMins = cart.reduce((sum, s) => {
    const match = s.duration.match(/(\d+)\s*(min|hour)/i);
    if (!match) return sum + 45;
    const num = parseInt(match[1], 10);
    return match[2].toLowerCase().startsWith('hour') ? sum + num * 60 : sum + num;
  }, 0);

  const handleCombinedBookingOnWhatsApp = () => {
    if (cart.length === 0) return;

    const serviceList = cart
      .map((s) => `• ${s.name} (${s.duration} - ₹${s.price})`)
      .join('\n');

    const dateFormatted = appointmentDate || 'Upcoming date';

    let message = `Hi! I would like to request an appointment at Velora Studio for the following services:\n\n${serviceList}\n\n*Total Services:* ${cart.length}\n*Estimated Duration:* ~${totalEstimatedMins} mins\n*Estimated Total:* ₹${totalAmount}\n*Preferred Date:* ${dateFormatted}\n*Preferred Time Slot:* ${preferredSlot}`;

    if (clientName.trim()) {
      message += `\n*Client Name:* ${clientName.trim()}`;
    }
    if (clientPhone.trim()) {
      message += `\n*Contact Phone:* ${clientPhone.trim()}`;
    }
    if (appointmentNotes.trim()) {
      message += `\n*Notes / Requests:* ${appointmentNotes.trim()}`;
    }

    message += `\n\nPlease let me know if this slot is available.`;

    window.open(getWhatsAppUrl(message), '_blank');
    setIsCartOpen(false);
  };

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair & Styling' },
    { id: 'skin', label: 'Skin & Facials' },
    { id: 'grooming', label: 'Men\'s Grooming' },
    { id: 'nails', label: 'Hands & Feet' },
    { id: 'bridal', label: 'Bridal & Events' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SALON_SERVICES
    : SALON_SERVICES.filter((s) => s.category === activeCategory);

  const handleBookService = (service: SalonService) => {
    const text = `Hi! I would like to book the "${service.name}" (₹${service.price}, ${service.duration}) at Velora Studio. What slots are available this week?`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dateFormatted = appointmentDate || 'Upcoming date';
    const text = `Hi! I would like to request an appointment at Velora Studio:
• Service: ${selectedService}
• Preferred Date: ${dateFormatted}
• Time Slot: ${preferredSlot}
• Client: ${clientName || 'Guest'} ${clientPhone ? `(${clientPhone})` : ''}

Please confirm availability.`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="min-h-screen bg-[#111215] text-[#e8e6e3] font-sans selection:bg-[#c28854] selection:text-white">
      {/* 1. Universal Top Header Bar for Agency Client Context */}
      <DemoHeaderBar
        demoName="Velora Studio"
        demoCategory="Premium Salon & Beauty Studio"
        onBack={onBack}
      />

      {/* 2. Studio Brand Navbar */}
      <header className="sticky top-[41px] z-40 bg-[#16171b]/95 backdrop-blur-md border-b border-[#27282e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Brand Wordmark */}
          <a href="#vs-home" className="flex items-center gap-2.5 text-left group">
            <div className="w-8 h-8 rounded-full bg-[#c28854]/15 border border-[#c28854]/40 flex items-center justify-center text-[#d4af7a]">
              <Scissors className="w-4 h-4" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-[0.2em] text-white block uppercase">
                VELORA
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#c28854] uppercase block font-medium">
                Hair & Beauty Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-wider uppercase font-medium text-[#9c9aa2]">
            <a href="#vs-home" className="hover:text-white transition-colors">Home</a>
            <a href="#vs-services" className="hover:text-white transition-colors">Services</a>
            <a href="#vs-studio" className="hover:text-white transition-colors">The Studio</a>
            <a href="#vs-booking" className="hover:text-white transition-colors">Book Appointment</a>
            <a href="#vs-location" className="hover:text-white transition-colors">Location</a>
          </nav>

          {/* Desktop Booking CTA & Cart */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Interactive Services Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative inline-flex items-center gap-2 px-3.5 py-2 bg-[#1c1d23] hover:bg-[#25262e] border border-[#2f3039] rounded-md text-xs font-semibold text-white transition-colors"
            >
              <ShoppingBag className="w-4 h-4 text-[#c28854]" />
              <span>Cart</span>
              {cart.length > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#c28854] text-neutral-950 font-bold text-[11px] flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>

            <a
              href="#vs-booking"
              className="px-4 py-2 rounded-md bg-[#c28854] hover:bg-[#b07845] text-neutral-950 font-bold text-xs tracking-wide uppercase transition-all shadow-sm"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Cart & Menu Buttons */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-md bg-[#1c1d23] border border-[#2f3039] text-[#c28854]"
              aria-label="View Selected Services"
            >
              <ShoppingBag className="w-5 h-5" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#c28854] text-neutral-950 font-bold text-[10px] flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#27282e] bg-[#16171b] px-4 py-5 space-y-3 text-left text-xs font-semibold tracking-wider uppercase">
            <a href="#vs-home" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#d0ced6]">
              Home
            </a>
            <a href="#vs-services" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#d0ced6]">
              Services & Pricing
            </a>
            <a href="#vs-studio" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#d0ced6]">
              The Studio
            </a>
            <a href="#vs-booking" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#d0ced6]">
              Book Appointment
            </a>
            <a href="#vs-location" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#d0ced6]">
              Hours & Location
            </a>
            <div className="pt-3 border-t border-[#27282e]">
              <a
                href="#vs-booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 bg-[#c28854] text-neutral-950 font-bold rounded-md block text-center"
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. Hero Section */}
      <section id="vs-home" className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden">
        {/* Background Editorial Salon Image */}
        <div className="absolute inset-0">
          <img
            src={veloraStudioHeroImg}
            alt="Velora Studio luxury salon interior"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111215] via-[#111215]/80 to-[#111215]/40" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c28854]/15 border border-[#c28854]/40 text-[#d4af7a] text-xs tracking-widest uppercase font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bespoke Hair, Skin & Bridal Artistry</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.08] text-balance">
            Your Style. <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#e7d0b3] via-white to-[#c28854]">
              Your Signature.
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#b6b3bc] leading-relaxed">
            A quiet sanctuary for mindful grooming. Specialized cut architecture, dimensional balayage, and clinical hydra-facials crafted by master stylists.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#vs-services"
              className="px-6 py-3 rounded-md bg-[#c28854] hover:bg-[#b07845] text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5"
            >
              <span>View Services</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href={getWhatsAppUrl("Hi! I would like to book a salon appointment at Velora Studio. Can you share available slots?")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book on WhatsApp</span>
            </a>
          </div>

          {/* Highlights */}
          <div className="pt-8 border-t border-[#2a2c35]/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#8c8994]">
            <div>
              <div className="font-bold text-white text-sm">One-on-One</div>
              <div>Dedicated Stylist Attention</div>
            </div>
            <div>
              <div className="font-bold text-white text-sm">Clean Formulations</div>
              <div>Cruelty-Free & Ammonia-Free</div>
            </div>
            <div>
              <div className="font-bold text-white text-sm">Private Suites</div>
              <div>Quiet Calming Atmosphere</div>
            </div>
            <div>
              <div className="font-bold text-white text-sm">Tue – Sun</div>
              <div>10:00 AM – 8:30 PM</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Services Rate Card */}
      <section id="vs-services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
          <span className="text-xs font-bold tracking-widest text-[#c28854] uppercase">
            Curated Service Menu
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
            Services & Transparent Pricing
          </h2>
          <p className="text-xs sm:text-sm text-[#9c9aa2]">
            Tap on any service to view the complete ritual breakdown, or tap &quot;Book&quot; to send an appointment request directly to our reception via WhatsApp.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#c28854] text-neutral-950 shadow-sm font-bold'
                  : 'bg-[#1c1d22] text-[#9c9aa2] hover:text-white hover:bg-[#25262d] border border-[#2c2d36]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {filteredServices.map((service) => {
            const isExpanded = expandedServiceId === service.id;

            return (
              <div
                key={service.id}
                className="bg-[#18191e] border border-[#2b2c34] rounded-xl p-5 flex flex-col justify-between hover:border-[#c28854]/40 transition-all"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[11px] text-[#c28854] font-medium tracking-wider uppercase">
                        {service.duration}
                      </div>
                      <h3 className="text-base font-bold text-white tracking-tight mt-0.5">
                        {service.name}
                      </h3>
                    </div>
                    <div className="text-lg font-bold text-white shrink-0">
                      ₹{service.price}
                    </div>
                  </div>

                  <p className="mt-2 text-xs text-[#9d9aa3] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Accordion Toggle */}
                  <button
                    onClick={() => setExpandedServiceId(isExpanded ? null : service.id)}
                    className="mt-3 text-[11px] font-semibold text-[#c28854] hover:text-[#d4af7a] flex items-center gap-1 transition-colors"
                  >
                    <span>{isExpanded ? 'Hide Included Steps' : 'View What\'s Included'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {/* Expanded Included Steps */}
                  {isExpanded && (
                    <div className="mt-3 pt-3 border-t border-[#2a2b33] space-y-1.5 text-xs text-[#b8b5bf]">
                      {service.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#c28854] shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-[#26272f] flex items-center justify-between">
                  <span className="text-[11px] text-[#716e78]">
                    Pre-booking recommended
                  </span>

                  {cart.some((s) => s.id === service.id) ? (
                    <button
                      onClick={() => removeFromCart(service.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-500/15 hover:bg-rose-500/20 text-emerald-400 hover:text-rose-400 border border-emerald-500/30 hover:border-rose-500/40 text-xs font-semibold transition-all"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>In Cart (Remove)</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => addToCart(service)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#c28854] hover:bg-[#b07845] text-neutral-950 font-bold text-xs transition-colors shadow-sm"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Cart</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* 5. Appointment Booking Form Section */}
      <section id="vs-booking" className="py-20 bg-[#16171c] border-y border-[#27282f] scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-bold tracking-widest text-[#c28854] uppercase">
              Schedule Your Visit
            </span>
            <h2 className="text-3xl font-light text-white tracking-tight">
              Request an Appointment
            </h2>
            <p className="text-xs text-[#9d9aa3]">
              Choose your service and preferred date. Your request will open in WhatsApp where our front desk will verify and lock your slot within 15 minutes.
            </p>
          </div>

          <form
            onSubmit={handleAppointmentSubmit}
            className="bg-[#1c1d23] border border-[#2e2f38] rounded-2xl p-6 sm:p-8 space-y-5 text-left text-xs"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#d0ced6] font-medium mb-1.5">
                  Select Desired Service *
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-[#131418] border border-[#373844] rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-[#c28854]"
                >
                  {SALON_SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} (₹{s.price})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#d0ced6] font-medium mb-1.5">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                  className="w-full bg-[#131418] border border-[#373844] rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-[#c28854]"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#d0ced6] font-medium mb-1.5">
                  Preferred Time Slot *
                </label>
                <select
                  value={preferredSlot}
                  onChange={(e) => setPreferredSlot(e.target.value)}
                  className="w-full bg-[#131418] border border-[#373844] rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-[#c28854]"
                >
                  <option>Morning (10:30 AM – 1:00 PM)</option>
                  <option>Afternoon (1:00 PM – 5:00 PM)</option>
                  <option>Evening (5:00 PM – 8:00 PM)</option>
                </select>
              </div>

              <div>
                <label className="block text-[#d0ced6] font-medium mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ananya Sharma"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-[#131418] border border-[#373844] rounded-lg px-3.5 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-[#c28854]"
                  required
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-[#c28854] hover:bg-[#b07845] text-neutral-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Send Appointment Request to WhatsApp</span>
              </button>
            </div>

            <div className="text-[11px] text-[#716e78] text-center pt-1">
              No prepayment required. Pay at the studio following your appointment.
            </div>
          </form>

        </div>
      </section>

      {/* 6. The Studio & Philosophy */}
      <section id="vs-studio" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
          
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#2b2c34] shadow-xl">
            <img
              src={veloraServicesImg}
              alt="Velora Studio stylist working with client"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/80 backdrop-blur-md p-3.5 rounded-lg border border-neutral-800">
              <div className="text-xs font-bold text-white">Quiet Sanctuary</div>
              <div className="text-[11px] text-neutral-400">Never overcrowded. Each client receives single-stylist concentration.</div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#c28854] uppercase">
              The Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-tight">
              Quiet Luxury. Personalized Artistry.
            </h2>
            <p className="text-sm text-[#9d9aa3] leading-relaxed">
              Velora Studio was established with a simple premise: beauty services should be calming, not rushed. We schedule generous buffers between guests so our stylists can analyze your facial structure, hair history, and daily maintenance routines before cutting or applying color.
            </p>
            <p className="text-sm text-[#9d9aa3] leading-relaxed">
              We exclusively use dermatologically certified, ammonia-free botanical formulas from leading European hair houses to protect your scalp and strand integrity.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#18191e] border border-[#282931]">
                <div className="text-lg font-bold text-white">Cruelty-Free</div>
                <div className="text-xs text-[#8c8994] mt-0.5">Ethical organic product line</div>
              </div>
              <div className="p-4 rounded-xl bg-[#18191e] border border-[#282931]">
                <div className="text-lg font-bold text-white">Sterilized</div>
                <div className="text-xs text-[#8c8994] mt-0.5">Hospital-grade hygiene tools</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Hours & Location */}
      <section id="vs-location" className="py-20 bg-[#16171c] border-t border-[#27282f] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center space-y-2 mb-12">
            <span className="text-xs font-bold tracking-widest text-[#c28854] uppercase">
              Studio Details
            </span>
            <h2 className="text-3xl font-light text-white tracking-tight">
              Hours & Studio Address
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-xl bg-[#1c1d23] border border-[#2d2e37] space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-[#c28854]/10 flex items-center justify-center text-[#c28854]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Studio Address</h3>
              <p className="text-xs text-[#9d9aa3] leading-relaxed">
                XXXXXXXXXX
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#c28854] hover:text-[#d4af7a] pt-2"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 rounded-xl bg-[#1c1d23] border border-[#2d2e37] space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-[#c28854]/10 flex items-center justify-center text-[#c28854]">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Working Hours</h3>
              <div className="text-xs text-[#9d9aa3] space-y-1">
                <div className="flex justify-between">
                  <span>Tuesday – Sunday:</span>
                  <span className="text-white font-medium">10:00 AM – 8:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Mondays:</span>
                  <span className="text-rose-400 font-medium">Closed for Deep Clean</span>
                </div>
                <div className="text-[11px] text-[#c28854] pt-1">
                  Last chemical service appointment at 6:30 PM.
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#1c1d23] border border-[#2d2e37] space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Reception Desk</h3>
              <p className="text-xs text-[#9d9aa3]">
                For instant slot confirmations or styling inquiries:
              </p>
              <div className="flex flex-col gap-1.5 pt-1 text-xs">
                <div className="font-semibold text-white">
                  XXXXXXXXXX
                </div>
                <a
                  href={getWhatsAppUrl("Hi! I would like to check appointment availability at Velora Studio.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Studio Footer */}
      <footer className="py-12 bg-[#0d0e11] text-[#716e78] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white uppercase tracking-wider">VELORA STUDIO</span>
            <span>·</span>
            <span>Fictional Portfolio Demo Website</span>
          </div>
          <div className="flex items-center gap-4 text-[#8a8792]">
            <a href="#vs-home" className="hover:text-white">Top</a>
            <a href="#vs-services" className="hover:text-white">Services</a>
            <a href="#vs-studio" className="hover:text-white">The Studio</a>
            <a href="#vs-booking" className="hover:text-white">Booking</a>
            <a href="#vs-location" className="hover:text-white">Location</a>
          </div>
        </div>
      </footer>

      {/* 9. Agency Pitch Conversion Banner */}
      <div className="bg-[#18191e] border-t border-[#c28854]/30 p-4 sm:p-5 text-white">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <div className="text-xs font-bold text-[#d4af7a] flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Want a modern appointment booking website for your salon or clinic?</span>
            </div>
            <div className="text-[11px] text-neutral-400 mt-0.5">
              MakeWebs creates elegant, high-converting websites with service rate cards and WhatsApp booking integration.
            </div>
          </div>
          <a
            href={getWhatsAppUrl("Hi! I explored the Velora Studio salon demo and I want a website like this for my salon/clinic. Can we discuss?")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#c28854] hover:bg-[#b07845] text-neutral-950 font-bold text-xs rounded-md transition-colors whitespace-nowrap shadow-sm"
          >
            Get My Website
          </a>
        </div>
      </div>
      {/* 10. Floating Sticky Bottom Appointment Bar (Shown when services are selected) */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-40 max-w-md w-full animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="bg-[#18191e]/95 backdrop-blur-md border border-[#c28854]/40 rounded-xl p-3.5 shadow-2xl flex items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#c28854]/20 border border-[#c28854]/40 flex items-center justify-center text-[#d4af7a] font-bold text-sm">
                {cart.length}
              </div>
              <div>
                <div className="text-xs font-bold text-white">Services in Cart</div>
                <div className="text-xs text-[#d4af7a] font-semibold">
                  ~{totalEstimatedMins} mins · <span className="font-extrabold text-white">₹{totalAmount}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#c28854] hover:bg-[#b07845] text-neutral-950 font-bold text-xs uppercase tracking-wide transition-colors shadow-md shrink-0"
            >
              <span>Review & Book</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* 11. Interactive Appointment Cart Drawer / Checkout Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#18191e] border border-[#2b2c34] rounded-2xl max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl text-left overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 border-b border-[#2b2c34] flex items-center justify-between bg-[#14151a]">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#c28854]" />
                <h3 className="text-base font-bold text-white">Selected Salon Services</h3>
                <span className="text-xs text-[#9d9aa3]">({cart.length} {cart.length === 1 ? 'service' : 'services'})</span>
              </div>
              <div className="flex items-center gap-2">
                {cart.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-xs text-rose-400 hover:text-rose-300 px-2 py-1 rounded hover:bg-rose-500/10 transition-colors"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1 rounded text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body / Items List */}
            <div className="p-5 overflow-y-auto space-y-4 flex-1">
              {cart.length === 0 ? (
                <div className="text-center py-12 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#24252c] flex items-center justify-center mx-auto text-[#8c8994]">
                    <Scissors className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-bold text-white">No services selected yet</div>
                  <p className="text-xs text-[#9d9aa3] max-w-xs mx-auto">
                    Browse our haircut, styling, and facial rituals and tap &quot;Add to Cart&quot; to combine them into one appointment.
                  </p>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      const el = document.getElementById('vs-services');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-2 rounded-lg bg-[#c28854] text-neutral-950 text-xs font-bold inline-block mt-2"
                  >
                    Browse Services
                  </button>
                </div>
              ) : (
                <>
                  {/* Selected Services List */}
                  <div className="space-y-3">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="p-3.5 rounded-xl bg-[#14151a] border border-[#272830] flex items-center justify-between gap-3"
                      >
                        <div className="flex-1 min-w-0">
                          <span className="text-xs font-bold text-white block truncate">
                            {item.name}
                          </span>
                          <div className="text-[11px] text-[#9d9aa3] mt-0.5">
                            Duration: {item.duration} · <span className="text-[#d4af7a] font-semibold">₹{item.price}</span>
                          </div>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1.5 text-neutral-500 hover:text-rose-400 transition-colors"
                          title="Remove service"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Appointment Details Form */}
                  <div className="pt-3 border-t border-[#2b2c34] space-y-3 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[#d0ced6] font-medium mb-1">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          value={appointmentDate}
                          onChange={(e) => setAppointmentDate(e.target.value)}
                          className="w-full bg-[#111215] border border-[#353642] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#c28854]"
                        />
                      </div>

                      <div>
                        <label className="block text-[#d0ced6] font-medium mb-1">
                          Preferred Time Slot *
                        </label>
                        <select
                          value={preferredSlot}
                          onChange={(e) => setPreferredSlot(e.target.value)}
                          className="w-full bg-[#111215] border border-[#353642] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#c28854]"
                        >
                          <option>Morning (10:30 AM – 1:00 PM)</option>
                          <option>Afternoon (1:00 PM – 5:00 PM)</option>
                          <option>Evening (5:00 PM – 8:00 PM)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[#d0ced6] font-medium mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Ananya Sharma"
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          className="w-full bg-[#111215] border border-[#353642] rounded-lg px-3 py-2 text-white placeholder-neutral-600 focus:outline-none focus:border-[#c28854]"
                        />
                      </div>

                      <div>
                        <label className="block text-[#d0ced6] font-medium mb-1">
                          Contact Phone (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. XXXXXXXXXX"
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          className="w-full bg-[#111215] border border-[#353642] rounded-lg px-3 py-2 text-white placeholder-neutral-600 focus:outline-none focus:border-[#c28854]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#d0ced6] font-medium mb-1">
                        Styling Requests / Notes (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Prefer organic dyes, sensitive scalp"
                        value={appointmentNotes}
                        onChange={(e) => setAppointmentNotes(e.target.value)}
                        className="w-full bg-[#111215] border border-[#353642] rounded-lg px-3 py-2 text-white placeholder-neutral-600 focus:outline-none focus:border-[#c28854]"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Modal Footer / Combined Checkout Button */}
            {cart.length > 0 && (
              <div className="p-5 border-t border-[#2b2c34] bg-[#14151a] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[#9d9aa3]">Total Services: </span>
                    <span className="font-bold text-white">{cart.length}</span>
                    <span className="text-[#716e78]"> (~{totalEstimatedMins} mins)</span>
                  </div>
                  <div className="text-base font-bold text-white">
                    Estimated: <span className="text-[#d4af7a]">₹{totalAmount}</span>
                  </div>
                </div>

                <div className="text-[11px] text-emerald-400/90 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>No upfront payment required · Slot confirmed instantly via WhatsApp</span>
                </div>

                <button
                  onClick={handleCombinedBookingOnWhatsApp}
                  className="w-full py-3 bg-[#c28854] hover:bg-[#b07845] text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send Combined Booking Request via WhatsApp</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
