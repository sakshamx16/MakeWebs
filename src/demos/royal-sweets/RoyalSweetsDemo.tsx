import React, { useState } from 'react';
import {
  Sparkles,
  ShoppingBag,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Menu as MenuIcon,
  X,
  ChevronRight,
  Gift,
  HeartHandshake,
  CheckCircle,
  ExternalLink,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  Check,
} from 'lucide-react';
import { DemoHeaderBar } from '../DemoHeaderBar';
import { getWhatsAppUrl } from '../../config/agency';
import royalSweetsHeroImg from '../../assets/images/royal_sweets_hero_1790773496646.jpg';
import royalSweetsGiftsImg from '../../assets/images/royal_sweets_gifts_1790773524484.jpg';

interface SweetProduct {
  id: string;
  name: string;
  category: 'mithai' | 'dryfruits' | 'namkeen' | 'bakery' | 'gifts';
  hindiName?: string;
  pricing: {
    weight: string;
    price: number;
  }[];
  description: string;
  pureGhee?: boolean;
}

interface SweetCartItem {
  cartId: string;
  productId: string;
  name: string;
  hindiName?: string;
  weight: string;
  price: number;
  qty: number;
}

const PRODUCTS: SweetProduct[] = [
  // Mithai
  {
    id: 'rs-1',
    name: 'Silver Vark Kaju Katli',
    hindiName: 'काजू कतली',
    category: 'mithai',
    pureGhee: true,
    pricing: [
      { weight: '250g', price: 260 },
      { weight: '500g', price: 500 },
      { weight: '1 kg', price: 980 },
    ],
    description: 'Thin, melt-in-mouth diamond cuts made with premium Goan cashews and finished with pure edible silver vark.',
  },
  {
    id: 'rs-2',
    name: 'Saffron Motichoor Laddoo',
    hindiName: 'मोतीचूर के लड्डू',
    category: 'mithai',
    pureGhee: true,
    pricing: [
      { weight: '250g', price: 170 },
      { weight: '500g', price: 330 },
      { weight: '1 kg', price: 640 },
    ],
    description: 'Tiny gram flour pearls fried in 100% cow desi ghee, infused with Kashmiri saffron and crushed green cardamom.',
  },
  {
    id: 'rs-3',
    name: 'Gulab Jamun (Pure Ghee)',
    hindiName: 'गुलाब जामुन',
    category: 'mithai',
    pureGhee: true,
    pricing: [
      { weight: '250g', price: 160 },
      { weight: '500g', price: 310 },
      { weight: '1 kg', price: 600 },
    ],
    description: 'Soft golden khoya dumplings fried gently in cow ghee and steeped in cardamom and rose water sugar syrup.',
  },
  {
    id: 'rs-4',
    name: 'Mathura Peda / Malai Peda',
    hindiName: 'मथुरा पेड़ा',
    category: 'mithai',
    pureGhee: true,
    pricing: [
      { weight: '250g', price: 180 },
      { weight: '500g', price: 350 },
      { weight: '1 kg', price: 680 },
    ],
    description: 'Slow-roasted mawa caramelized to a rich caramel brown, dusted with powdered sugar and pistachio flakes.',
  },
  {
    id: 'rs-5',
    name: 'Bikaneri Malai Ghewar (Festive)',
    hindiName: 'मलाई घेवर',
    category: 'mithai',
    pureGhee: true,
    pricing: [
      { weight: 'Piece (Regular)', price: 220 },
      { weight: 'Piece (Jumbo)', price: 380 },
    ],
    description: 'Honeycomb honeycomb disc soaked in saffron syrup and crowned with thick thickened rabri and chopped almonds.',
  },

  // Dry Fruits
  {
    id: 'rs-6',
    name: 'Jumbo Roasted Salted Cashews',
    category: 'dryfruits',
    pricing: [
      { weight: '250g', price: 340 },
      { weight: '500g', price: 660 },
      { weight: '1 kg', price: 1280 },
    ],
    description: 'Hand-selected W180 king size cashews, gently roasted in rock salt and ghee for a rich crunch.',
  },
  {
    id: 'rs-7',
    name: 'California Roasted Almonds',
    category: 'dryfruits',
    pricing: [
      { weight: '250g', price: 290 },
      { weight: '500g', price: 560 },
      { weight: '1 kg', price: 1080 },
    ],
    description: 'Crunchy supreme grade almonds slow-roasted with Himalayan pink salt.',
  },
  {
    id: 'rs-8',
    name: 'Kashmiri Snow Walnut Kernels',
    category: 'dryfruits',
    pricing: [
      { weight: '250g', price: 380 },
      { weight: '500g', price: 740 },
      { weight: '1 kg', price: 1440 },
    ],
    description: 'Directly sourced light amber halves with high natural oil content and zero bitterness.',
  },

  // Namkeen
  {
    id: 'rs-9',
    name: 'Royal Shahi Mixture Namkeen',
    category: 'namkeen',
    pricing: [
      { weight: '250g', price: 120 },
      { weight: '500g', price: 230 },
      { weight: '1 kg', price: 440 },
    ],
    description: 'Crisp chickpea sev mixed with fried cashews, raisins, spiced lentils, and curry leaf seasoning.',
  },
  {
    id: 'rs-10',
    name: 'Special Dalmoth (Pure Ghee)',
    category: 'namkeen',
    pureGhee: true,
    pricing: [
      { weight: '250g', price: 140 },
      { weight: '500g', price: 270 },
      { weight: '1 kg', price: 520 },
    ],
    description: 'Whole brown lentils and fine sev fried in pure desi ghee, tossed in dry roasted clove and pepper masala.',
  },

  // Bakery
  {
    id: 'rs-11',
    name: 'Eggless Rasmalai Fusion Cake',
    category: 'bakery',
    pricing: [
      { weight: '500g', price: 450 },
      { weight: '1 kg', price: 850 },
    ],
    description: 'Spongy vanilla cake layers soaked in saffron cardamom milk, filled with real rasmalai chunks and whipped cream.',
  },
  {
    id: 'rs-12',
    name: 'Traditional Mawa Cake (Cardamom)',
    category: 'bakery',
    pricing: [
      { weight: 'Box of 6', price: 240 },
      { weight: 'Box of 12', price: 450 },
    ],
    description: 'Dense Parsi-style teatime cakes made with fresh reduced milk mawa and cracked green cardamom.',
  },
];

export const RoyalSweetsDemo: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedWeights, setSelectedWeights] = useState<Record<string, number>>({});

  // Cart State
  const [cart, setCart] = useState<SweetCartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [fulfillmentType, setFulfillmentType] = useState<'Pickup' | 'Home Delivery'>('Pickup');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [giftNote, setGiftNote] = useState('');

  const totalCartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalCartAmount = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const addToCart = (product: SweetProduct) => {
    const selectedIdx = selectedWeights[product.id] || 0;
    const tier = product.pricing[selectedIdx] || product.pricing[0];
    const cartId = `${product.id}-${tier.weight}`;

    setCart((prev) => {
      const existing = prev.find((item) => item.cartId === cartId);
      if (existing) {
        return prev.map((item) =>
          item.cartId === cartId ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [
        ...prev,
        {
          cartId,
          productId: product.id,
          name: product.name,
          hindiName: product.hindiName,
          weight: tier.weight,
          price: tier.price,
          qty: 1,
        },
      ];
    });
  };

  const updateQty = (cartId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.cartId === cartId) {
            const nextQty = item.qty + delta;
            return nextQty > 0 ? { ...item, qty: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as SweetCartItem[]
    );
  };

  const removeFromCart = (cartId: string) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleCheckoutOnWhatsApp = () => {
    if (cart.length === 0) return;

    const itemLines = cart
      .map((item) => `• ${item.qty}x ${item.name} (${item.weight}) - ₹${item.price * item.qty}`)
      .join('\n');

    let message = `Hi! I would like to place an order from Royal Sweets:\n\n${itemLines}\n\n*Total Items:* ${totalCartCount}\n*Total Amount:* ₹${totalCartAmount}\n*Fulfillment:* ${fulfillmentType}`;

    if (customerName.trim()) {
      message += `\n*Customer Name:* ${customerName.trim()}`;
    }
    if (fulfillmentType === 'Home Delivery' && deliveryAddress.trim()) {
      message += `\n*Delivery Address:* ${deliveryAddress.trim()}`;
    }
    if (giftNote.trim()) {
      message += `\n*Gift Packaging Note:* ${giftNote.trim()}`;
    }

    message += `\n\nPlease share payment options and dispatch details.`;

    window.open(getWhatsAppUrl(message), '_blank');
    setIsCartOpen(false);
  };

  const filterTabs = [
    { id: 'all', label: 'All Specialties' },
    { id: 'mithai', label: 'Pure Ghee Mithai' },
    { id: 'dryfruits', label: 'Roasted Dry Fruits' },
    { id: 'namkeen', label: 'Crispy Namkeen' },
    { id: 'bakery', label: 'Bakery & Cakes' },
  ];

  const filtered = activeTab === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeTab);

  const handleWeightChange = (productId: string, index: number) => {
    setSelectedWeights((prev) => ({ ...prev, [productId]: index }));
  };

  return (
    <div className="min-h-screen bg-[#faf6f0] text-[#332a24] font-serif selection:bg-[#831843] selection:text-white">
      {/* 1. Universal Top Header Bar for Agency Client Context */}
      <DemoHeaderBar
        demoName="Royal Sweets"
        demoCategory="Traditional Indian Sweets & Bakery"
        onBack={onBack}
      />

      {/* 2. Brand Navbar */}
      <header className="sticky top-[41px] z-40 bg-[#fffdfa]/95 backdrop-blur-md border-b border-[#e9e0d1] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Brand Logo & Wordmark */}
          <a href="#rs-home" className="flex items-center gap-2.5 text-left group">
            <div className="w-9 h-9 rounded-full bg-[#831843] flex items-center justify-center text-amber-300 font-bold text-base shadow-sm">
              👑
            </div>
            <div>
              <span className="text-xl font-bold tracking-wider text-[#631024] block leading-none font-serif">
                ROYAL SWEETS
              </span>
              <span className="text-[10px] tracking-widest text-[#a16207] uppercase block font-sans font-semibold mt-1">
                Pure Desi Ghee Mithai & Bakes
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-sans font-semibold text-[#665a50]">
            <a href="#rs-home" className="hover:text-[#831843] transition-colors">Home</a>
            <a href="#rs-products" className="hover:text-[#831843] transition-colors">Sweets & Mithai</a>
            <a href="#rs-gifts" className="hover:text-[#831843] transition-colors">Festive Gift Boxes</a>
            <a href="#rs-bulk" className="hover:text-[#831843] transition-colors">Weddings & Bulk Orders</a>
            <a href="#rs-story" className="hover:text-[#831843] transition-colors">Our Heritage</a>
            <a href="#rs-location" className="hover:text-[#831843] transition-colors">Store & Timings</a>
          </nav>

          {/* WhatsApp CTA & Cart Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Interactive Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative inline-flex items-center gap-2 px-3.5 py-2 bg-[#faf6f0] hover:bg-[#f0e8dc] border border-[#e2d8c7] rounded-md text-xs font-sans font-bold text-[#5c1020] transition-colors"
            >
              <ShoppingBag className="w-4 h-4 text-[#831843]" />
              <span>Cart</span>
              {totalCartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#631024] text-white font-bold text-[11px] flex items-center justify-center font-sans">
                  {totalCartCount}
                </span>
              )}
            </button>

            <a
              href={getWhatsAppUrl("Hi! I would like to order sweets and gift boxes from Royal Sweets.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#631024] hover:bg-[#7e1730] text-[#fdf8f0] font-sans font-semibold text-xs rounded-md transition-all shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current text-amber-300" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Cart & Menu Buttons */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-md bg-[#faf6f0] border border-[#e2d8c7] text-[#5c1020]"
              aria-label="View Sweets Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#631024] text-white font-bold text-[10px] flex items-center justify-center font-sans">
                  {totalCartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#665a50] hover:text-[#631024]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#e9e0d1] bg-[#fffdfa] px-4 py-5 space-y-3 text-left font-sans text-xs font-semibold">
            <a href="#rs-home" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#423933]">
              Home
            </a>
            <a href="#rs-products" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#423933]">
              Sweets & Mithai Catalog
            </a>
            <a href="#rs-gifts" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#423933]">
              Festive Gift Boxes
            </a>
            <a href="#rs-bulk" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#423933]">
              Weddings & Bulk Orders
            </a>
            <a href="#rs-story" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#423933]">
              Our Heritage
            </a>
            <a href="#rs-location" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#423933]">
              Store & Timings
            </a>
            <div className="pt-3 border-t border-[#e9e0d1]">
              <a
                href={getWhatsAppUrl("Hi! I would like to order sweets from Royal Sweets.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-[#631024] text-[#fdf8f0] font-bold rounded-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current text-amber-300" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. Hero Section */}
      <section id="rs-home" className="relative min-h-[560px] lg:min-h-[620px] flex items-center justify-center overflow-hidden">
        {/* Background Sweet Shop Spread */}
        <div className="absolute inset-0">
          <img
            src={royalSweetsHeroImg}
            alt="Royal Sweets authentic Indian mithai spread"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Subtle warm scrim for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2a060e]/90 via-[#3d0815]/65 to-[#2a060e]/40" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center space-y-6 text-[#fef9f2]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdf5ea]/15 backdrop-blur-md border border-amber-300/40 text-amber-200 text-xs font-sans font-semibold tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Pure Cow Desi Ghee · Handcrafted Fresh Every Morning</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif tracking-tight text-white leading-[1.1] text-balance">
            Tradition Made Delicious.
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#eddcd2] font-sans leading-relaxed">
            From silver-coated Kaju Katli to fragrant saffron motichoor laddoos and artisanal dry fruit hampers. Authentic royal recipes made with pure ingredients.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 font-sans">
            <a
              href="#rs-products"
              className="px-6 py-3 rounded-md bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-1.5"
            >
              <span>Explore Our Sweets</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href={getWhatsAppUrl("Hi! I would like to order sweets from Royal Sweets. Can you share today's fresh availability?")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md bg-[#831843] hover:bg-[#9c1f51] border border-amber-300/30 text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 fill-current text-amber-300" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="pt-8 border-t border-amber-200/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans text-amber-100">
            <div>
              <div className="font-bold text-white text-sm">100% Pure Ghee</div>
              <div className="text-amber-200/70">Cow Desi Ghee</div>
            </div>
            <div>
              <div className="font-bold text-white text-sm">No Preservatives</div>
              <div className="text-amber-200/70">Daily Small Batches</div>
            </div>
            <div>
              <div className="font-bold text-white text-sm">Gift Packaging</div>
              <div className="text-amber-200/70">Custom Wedding Boxes</div>
            </div>
            <div>
              <div className="font-bold text-white text-sm">Open Everyday</div>
              <div className="text-amber-200/70">8:00 AM – 10:30 PM</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Product Catalog & Ordering */}
      <section id="rs-products" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
          <span className="text-xs font-sans font-bold tracking-widest text-[#a16207] uppercase">
            Artisanal Confectionery
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#5c1020] tracking-tight">
            Our Handcrafted Delicacies
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[#706256]">
            Select your preferred weight or quantity, then tap &quot;Order&quot; to send directly to our counter phone via WhatsApp.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 font-sans">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all ${
                activeTab === tab.id
                  ? 'bg-[#631024] text-[#fffdfa] shadow-sm'
                  : 'bg-[#ede6dc] text-[#5e5349] hover:bg-[#e4dbce]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-left font-sans">
          {filtered.map((product) => {
            const activeWeightIdx = selectedWeights[product.id] || 0;
            const activePrice = product.pricing[activeWeightIdx] || product.pricing[0];

            return (
              <div
                key={product.id}
                className="bg-[#fffdfa] border border-[#e8decb] rounded-xl p-5 flex flex-col justify-between hover:border-[#b45309] hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    {product.pureGhee ? (
                      <span className="text-[11px] font-semibold text-[#854d0e] bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                        100% Pure Desi Ghee
                      </span>
                    ) : (
                      <span className="text-[11px] font-semibold text-[#57534e] bg-neutral-100 px-2 py-0.5 rounded">
                        Fresh Specialty
                      </span>
                    )}

                    {product.hindiName && (
                      <span className="text-xs text-[#a16207] font-serif">
                        {product.hindiName}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold font-serif text-[#4a0d1a] tracking-tight group-hover:text-[#7e1730] transition-colors">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-xs text-[#6e6256] leading-relaxed">
                    {product.description}
                  </p>

                  {/* Weight Selector */}
                  <div className="mt-4 pt-3 border-t border-[#f0e8dc]">
                    <div className="text-[11px] font-semibold text-[#8c7e72] mb-1.5">
                      Select Quantity:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {product.pricing.map((p, idx) => (
                        <button
                          key={p.weight}
                          onClick={() => handleWeightChange(product.id, idx)}
                          className={`px-2.5 py-1 text-xs rounded border transition-colors ${
                            activeWeightIdx === idx
                              ? 'bg-[#631024] text-white border-[#631024] font-bold'
                              : 'bg-[#faf6f0] text-[#5c5044] border-[#e2d8c7] hover:border-[#8c7e72]'
                          }`}
                        >
                          {p.weight}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="mt-6 pt-4 border-t border-[#f0e8dc] flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-[#8c7e72]">Price ({activePrice.weight})</div>
                    <div className="text-base font-bold text-[#5c1020]">
                      ₹{activePrice.price}
                    </div>
                  </div>

                  {cart.find((c) => c.cartId === `${product.id}-${activePrice.weight}`) ? (
                    <div className="flex items-center gap-1.5 bg-[#631024]/10 border border-[#631024]/30 rounded-lg p-1">
                      <button
                        onClick={() => updateQty(`${product.id}-${activePrice.weight}`, -1)}
                        className="w-6 h-6 rounded bg-[#fffdfa] hover:bg-[#631024] hover:text-white text-[#631024] font-bold text-xs flex items-center justify-center transition-colors border border-[#e2d8c7]"
                        title="Reduce quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-[#631024] px-1.5 min-w-[20px] text-center font-sans">
                        {cart.find((c) => c.cartId === `${product.id}-${activePrice.weight}`)?.qty}
                      </span>
                      <button
                        onClick={() => addToCart(product)}
                        className="w-6 h-6 rounded bg-[#fffdfa] hover:bg-[#631024] hover:text-white text-[#631024] font-bold text-xs flex items-center justify-center transition-colors border border-[#e2d8c7]"
                        title="Add another"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(product)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#631024] hover:bg-[#7e1730] text-[#fef9f2] text-xs font-semibold rounded-md transition-colors shadow-xs"
                    >
                      <Plus className="w-3.5 h-3.5 text-amber-300" />
                      <span>Add to Cart</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* 5. Festive Gift Boxes Showcase */}
      <section id="rs-gifts" className="py-20 bg-[#f4ece0] border-y border-[#e2d7c5] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Visual Box */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#d9cdba] shadow-xl">
              <img
                src={royalSweetsGiftsImg}
                alt="Festive sweet and dry fruit gift hampers"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#fffdfa]/95 backdrop-blur-md p-4 rounded-xl text-left border border-[#e8decb]">
                <div className="text-xs font-bold text-[#5c1020] font-serif">Royal Shubh Utsav Box</div>
                <div className="text-[11px] text-[#6b5f54] font-sans">Rigid gold-embossed keepsake box with 4 compartments of cashew sweets and salted nuts.</div>
              </div>
            </div>

            {/* Description & CTAs */}
            <div className="space-y-6 text-left font-sans">
              <span className="text-xs font-bold tracking-widest text-[#a16207] uppercase">
                Festivals & Celebrations
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#5c1020] tracking-tight leading-tight">
                Festive Gift Boxes & Corporate Hampers
              </h2>
              <p className="text-sm text-[#665a50] leading-relaxed">
                Make Diwali, Raksha Bandhan, New Year, and personal milestones memorable with our signature gift hampers. Packaged in velvet-touch gold-embossed boxes with customized name ribbons.
              </p>

              <div className="space-y-2.5 text-xs text-[#52473e]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#831843]" />
                  <span>Customizable combinations of Kaju sweets, Mamra almonds & cashews</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#831843]" />
                  <span>Custom logo ribbons & greeting cards for corporate orders</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#831843]" />
                  <span>Hygienically vacuum-sealed for fresh delivery across India</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("Hi! I would like to inquire about Festival Gift Boxes and Corporate Hampers from Royal Sweets.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#631024] hover:bg-[#7e1730] text-[#fef9f2] font-semibold text-xs transition-colors shadow-sm"
                >
                  <Gift className="w-4 h-4 text-amber-300" />
                  <span>Inquire for Gift Boxes on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Weddings & Bulk Orders Section */}
      <section id="rs-bulk" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left scroll-mt-24">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#5c1020] via-[#74152a] to-[#420a16] text-[#fffdfa] border border-amber-300/30 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-amber-300 uppercase tracking-widest">
              <HeartHandshake className="w-4 h-4" />
              <span>Weddings, Anniversaries & Bulk Events</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight text-white">
              Planning a Wedding or Grand Celebration?
            </h2>
            <p className="text-xs sm:text-sm text-amber-100/90 font-sans leading-relaxed">
              We specialize in custom wedding return-gift boxes (Bhaji Boxes), live jalebi/rabri counters, and bulk corporate orders. Speak directly with our master sweet coordinator on WhatsApp for bulk rate cards and tasting boxes.
            </p>
          </div>

          <div className="shrink-0 font-sans text-center">
            <a
              href={getWhatsAppUrl("Hi! I am inquiring about custom wedding / bulk sweet boxes from Royal Sweets. Can you share catalog and bulk rates?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs rounded-lg transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Inquire for Bulk & Wedding Orders</span>
            </a>
            <div className="text-[11px] text-amber-200/80 mt-2">
              Free tasting samples available for wedding bookings
            </div>
          </div>
        </div>
      </section>

      {/* 7. Our Heritage Story */}
      <section id="rs-story" className="py-16 bg-[#fffdfa] border-t border-[#e9e0d1] text-left font-sans">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#a16207] uppercase">
            Since 1991
          </span>
          <h2 className="text-3xl font-bold font-serif text-[#5c1020]">
            The Royal Sweets Legacy
          </h2>
          <p className="text-sm text-[#665a50] leading-relaxed">
            Started over three decades ago with a single brass kadhai, Royal Sweets has remained steadfast in preserving the dignity of traditional Indian confectionery. In an age of artificial essences and palm oil substitutes, our promise has never wavered: 100% cow desi ghee, milk reduced slowly in our own kitchen, sulfur-free sugar, and hand-inspected dry fruits.
          </p>
        </div>
      </section>

      {/* 8. Store Location & Timings */}
      <section id="rs-location" className="py-20 bg-[#faf6f0] border-t border-[#e9e0d1] font-sans scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center space-y-2 mb-12">
            <span className="text-xs font-bold tracking-widest text-[#a16207] uppercase">
              Come Visit Us
            </span>
            <h2 className="text-3xl font-bold font-serif text-[#5c1020]">
              Store Location & Counter Hours
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-xl bg-[#fffdfa] border border-[#e8decb] space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-[#5c1020]/10 flex items-center justify-center text-[#5c1020]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-serif text-[#5c1020]">Store Address</h3>
              <p className="text-xs text-[#6e6256] leading-relaxed">
                XXXXXXXXXX
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#831843] hover:text-[#5c1020] pt-2"
              >
                <span>Get Driving Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 rounded-xl bg-[#fffdfa] border border-[#e8decb] space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-[#5c1020]/10 flex items-center justify-center text-[#5c1020]">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-serif text-[#5c1020]">Counter Timings</h3>
              <div className="text-xs text-[#6e6256] space-y-1">
                <div className="flex justify-between">
                  <span>Open 7 Days a Week:</span>
                  <span className="font-bold text-[#5c1020]">8:00 AM – 10:30 PM</span>
                </div>
                <div className="text-[11px] text-[#a16207] pt-1">
                  Fresh morning batch arrives at counter daily by 8:30 AM.
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#fffdfa] border border-[#e8decb] space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-700">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-serif text-[#5c1020]">Direct Orders</h3>
              <p className="text-xs text-[#6e6256]">
                Call counter or send order directly on WhatsApp:
              </p>
              <div className="flex flex-col gap-1.5 pt-1 text-xs">
                <div className="font-semibold text-[#5c1020]">
                  XXXXXXXXXX
                </div>
                <a
                  href={getWhatsAppUrl("Hi! I would like to order sweets from Royal Sweets.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 9. Sweet Shop Footer */}
      <footer className="py-12 bg-[#2d0710] text-[#e8d7d9] text-xs font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white font-serif tracking-wider">ROYAL SWEETS</span>
            <span>·</span>
            <span className="text-amber-200/80">Fictional Demo Website · Portfolio Concept</span>
          </div>
          <div className="flex items-center gap-4 text-amber-100/70">
            <a href="#rs-home" className="hover:text-white">Top</a>
            <a href="#rs-products" className="hover:text-white">Mithai</a>
            <a href="#rs-gifts" className="hover:text-white">Gifts</a>
            <a href="#rs-bulk" className="hover:text-white">Weddings</a>
            <a href="#rs-location" className="hover:text-white">Location</a>
          </div>
        </div>
      </footer>

      {/* 10. Agency Conversion Banner for Potential Sweet Shop Clients */}
      <div className="bg-[#420a16] border-t border-amber-300/30 p-4 sm:p-5 text-white font-sans">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <div className="text-xs font-bold text-amber-200 flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Want a digital catalog & WhatsApp ordering website for your sweet shop?</span>
            </div>
            <div className="text-[11px] text-amber-100/80 mt-0.5">
              MakeWebs builds traditional, mobile-friendly websites with product weight calculators and gift box showcases.
            </div>
          </div>
          <a
            href={getWhatsAppUrl("Hi! I explored the Royal Sweets demo and I want a website like this for my sweet shop/bakery. Can we discuss?")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs rounded-md transition-colors whitespace-nowrap shadow-sm"
          >
            Get My Website
          </a>
        </div>
      </div>
      {/* 11. Floating Sticky Bottom Cart Bar (Shown when items are in cart) */}
      {totalCartCount > 0 && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-40 max-w-md w-full animate-in fade-in slide-in-from-bottom-3 duration-300 font-sans">
          <div className="bg-[#fffdfa]/95 backdrop-blur-md border border-[#831843]/40 rounded-xl p-3.5 shadow-2xl flex items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#831843]/15 border border-[#831843]/30 flex items-center justify-center text-[#631024] font-bold text-sm">
                {totalCartCount}
              </div>
              <div>
                <div className="text-xs font-bold text-[#5c1020]">Sweets in Cart</div>
                <div className="text-xs text-[#831843] font-extrabold">₹{totalCartAmount}</div>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#631024] hover:bg-[#7e1730] text-[#fef9f2] font-bold text-xs transition-colors shadow-md shrink-0"
            >
              <span>View Cart & Order</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
            </button>
          </div>
        </div>
      )}

      {/* 12. Interactive Sweets Cart Drawer / Checkout Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 font-sans">
          <div className="bg-[#fffdfa] border border-[#e8decb] rounded-2xl max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl text-left overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 border-b border-[#e8decb] flex items-center justify-between bg-[#faf6f0]">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#831843]" />
                <h3 className="text-base font-bold text-[#5c1020] font-serif">Your Sweets Cart</h3>
                <span className="text-xs text-[#736559]">({totalCartCount} {totalCartCount === 1 ? 'box' : 'boxes'})</span>
              </div>
              <div className="flex items-center gap-2">
                {cart.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-xs text-rose-600 hover:text-rose-700 px-2 py-1 rounded hover:bg-rose-50 transition-colors"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1 rounded text-[#736559] hover:text-[#5c1020]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body / Items List */}
            <div className="p-5 overflow-y-auto space-y-4 flex-1">
              {cart.length === 0 ? (
                <div className="text-center py-12 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#f4ede3] flex items-center justify-center mx-auto text-[#8c7e72]">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-bold text-[#5c1020] font-serif">Your sweet box is empty</div>
                  <p className="text-xs text-[#6e6256] max-w-xs mx-auto">
                    Explore our pure desi ghee mithai, roasted dry fruits, and festive boxes to add to your order.
                  </p>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      const el = document.getElementById('rs-products');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-2 rounded-lg bg-[#631024] text-[#fdf8f0] text-xs font-bold inline-block mt-2"
                  >
                    Browse Sweets
                  </button>
                </div>
              ) : (
                <>
                  {/* Cart Items List */}
                  <div className="space-y-3">
                    {cart.map((item) => (
                      <div
                        key={item.cartId}
                        className="p-3.5 rounded-xl bg-[#faf6f0] border border-[#e8decb] flex items-center justify-between gap-3"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#5c1020] truncate font-serif">
                              {item.name}
                            </span>
                            {item.hindiName && (
                              <span className="text-[11px] text-[#a16207]">({item.hindiName})</span>
                            )}
                          </div>
                          <div className="text-[11px] text-[#6e6256] mt-0.5">
                            Pack: <span className="font-semibold text-[#3a2f26]">{item.weight}</span> · ₹{item.price} each · <span className="text-[#831843] font-bold">₹{item.price * item.qty}</span>
                          </div>
                        </div>

                        {/* Quantity Stepper */}
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1.5 bg-[#fffdfa] border border-[#d8cca8] rounded-md p-1">
                            <button
                              onClick={() => updateQty(item.cartId, -1)}
                              className="w-5 h-5 rounded hover:bg-[#631024] hover:text-white text-[#631024] font-bold text-xs flex items-center justify-center transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold text-[#5c1020] px-1 min-w-[16px] text-center font-sans">
                              {item.qty}
                            </span>
                            <button
                              onClick={() => updateQty(item.cartId, 1)}
                              className="w-5 h-5 rounded hover:bg-[#631024] hover:text-white text-[#631024] font-bold text-xs flex items-center justify-center transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.cartId)}
                            className="p-1.5 text-neutral-400 hover:text-rose-600 transition-colors"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Options */}
                  <div className="pt-3 border-t border-[#e8decb] space-y-3 text-xs">
                    <div>
                      <label className="block text-[#5c1020] font-semibold mb-1">
                        Fulfillment Preference
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {(['Pickup', 'Home Delivery'] as const).map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFulfillmentType(type)}
                            className={`py-2 px-3 rounded-lg border text-center font-semibold transition-all ${
                              fulfillmentType === type
                                ? 'bg-[#631024] text-[#fffdfa] border-[#631024] font-bold shadow-xs'
                                : 'bg-[#fffdfa] text-[#5e5349] border-[#e2d8c7] hover:border-[#8c7e72]'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[#5c1020] font-semibold mb-1">
                          Your Name (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Priya Sharma"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          className="w-full bg-[#fffdfa] border border-[#e2d8c7] rounded-lg px-3 py-1.5 text-[#3a2f26] placeholder-neutral-400 focus:outline-none focus:border-[#831843]"
                        />
                      </div>

                      {fulfillmentType === 'Home Delivery' ? (
                        <div>
                          <label className="block text-[#5c1020] font-semibold mb-1">
                            Delivery Address
                          </label>
                          <input
                            type="text"
                            placeholder="Door / Flat / Colony"
                            value={deliveryAddress}
                            onChange={(e) => setDeliveryAddress(e.target.value)}
                            className="w-full bg-[#fffdfa] border border-[#e2d8c7] rounded-lg px-3 py-1.5 text-[#3a2f26] placeholder-neutral-400 focus:outline-none focus:border-[#831843]"
                          />
                        </div>
                      ) : (
                        <div>
                          <label className="block text-[#5c1020] font-semibold mb-1">
                            Gifting / Custom Packaging Note
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Festival gift ribbon, greeting message"
                            value={giftNote}
                            onChange={(e) => setGiftNote(e.target.value)}
                            className="w-full bg-[#fffdfa] border border-[#e2d8c7] rounded-lg px-3 py-1.5 text-[#3a2f26] placeholder-neutral-400 focus:outline-none focus:border-[#831843]"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Modal Footer / Combined Checkout Button */}
            {cart.length > 0 && (
              <div className="p-5 border-t border-[#e8decb] bg-[#faf6f0] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#6e6256]">Total Order ({totalCartCount} items):</span>
                  <span className="text-base font-bold text-[#5c1020] font-serif">₹{totalCartAmount}</span>
                </div>
                <div className="text-[11px] text-[#854d0e] flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                  <span>100% Pure Desi Ghee Fresh Preparation · Direct WhatsApp Confirmation</span>
                </div>

                <button
                  onClick={handleCheckoutOnWhatsApp}
                  className="w-full py-3 bg-[#631024] hover:bg-[#7e1730] text-[#fef9f2] font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-amber-300" />
                  <span>Send Combined Order on WhatsApp (₹{totalCartAmount})</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
