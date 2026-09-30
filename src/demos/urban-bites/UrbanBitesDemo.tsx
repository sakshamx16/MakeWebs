import React, { useState } from 'react';
import {
  UtensilsCrossed,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Menu as MenuIcon,
  X,
  ChevronRight,
  Flame,
  Coffee,
  Sparkles,
  ExternalLink,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  Check,
} from 'lucide-react';
import { DemoHeaderBar } from '../DemoHeaderBar';
import { getWhatsAppUrl } from '../../config/agency';
import urbanBitesHeroImg from '../../assets/images/urban_bites_hero_1790773482644.jpg';
import urbanBitesPreviewImg from '../../assets/images/demo_urban_bites_1790712394617.jpg';

interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'pizzas' | 'pastas' | 'burgers' | 'beverages' | 'desserts';
  price: number;
  isVeg: boolean;
  bestseller?: boolean;
  description: string;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  isVeg: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 'ub-1',
    name: 'Truffle Mushroom Bruschetta',
    category: 'starters',
    price: 240,
    isVeg: true,
    bestseller: true,
    description: 'Toasted artisan sourdough rubbed with garlic, wild button mushrooms, parmesan shavings, and black truffle drizzle.',
  },
  {
    id: 'ub-2',
    name: 'Crispy Peri-Peri Cauliflower Bites',
    category: 'starters',
    price: 210,
    isVeg: true,
    description: 'Flash-fried florets tossed in zesty house spice rub, served with smoked paprika aioli and scallions.',
  },
  {
    id: 'ub-3',
    name: 'Spiced Corn & Mozzarella Arancini',
    category: 'starters',
    price: 230,
    isVeg: true,
    description: 'Golden risotto croquettes stuffed with melted mozzarella and sweet corn, over arrabbiata dip.',
  },
  {
    id: 'ub-4',
    name: 'Smoked Chicken & Jalapeño Quesadilla',
    category: 'starters',
    price: 280,
    isVeg: false,
    bestseller: true,
    description: 'Folded grilled tortilla with house-smoked chicken, aged cheddar, pickled jalapeños, and fresh salsa verde.',
  },

  // Pizzas
  {
    id: 'ub-5',
    name: 'Classic Margherita con Bufala',
    category: 'pizzas',
    price: 320,
    isVeg: true,
    description: 'San Marzano tomato coulis, fresh buffalo mozzarella, aromatic sweet basil, and extra virgin olive oil.',
  },
  {
    id: 'ub-6',
    name: 'Wood-Fired Peri-Peri Paneer Pizza',
    category: 'pizzas',
    price: 360,
    isVeg: true,
    bestseller: true,
    description: 'Marinated paneer chunks, roasted bell peppers, red onion rings, mozzarella, and spicy peri-peri dust.',
  },
  {
    id: 'ub-7',
    name: 'Smoked Chicken & Caramelized Onion Pizza',
    category: 'pizzas',
    price: 390,
    isVeg: false,
    bestseller: true,
    description: 'Slow-smoked herb chicken, balsamic caramelized onions, mushroom medley, and house four-cheese blend.',
  },
  {
    id: 'ub-8',
    name: 'Fiery Jalapeño & Sweet Corn Flatbread',
    category: 'pizzas',
    price: 330,
    isVeg: true,
    description: 'Charred sweet corn, sliced pickled jalapeños, cilantro pesto, and smoked scamorza cheese.',
  },

  // Pastas
  {
    id: 'ub-9',
    name: 'Penne Alfredo al Tartufo',
    category: 'pastas',
    price: 340,
    isVeg: true,
    bestseller: true,
    description: 'Penne rigate tossed in velvety parmesan cream, roasted garlic, cracked pepper, and hint of white truffle oil.',
  },
  {
    id: 'ub-10',
    name: 'Spicy Fusilli all\'Arrabbiata',
    category: 'pastas',
    price: 310,
    isVeg: true,
    description: 'Fusilli in slow-simmered plum tomato ragout, bird\'s eye chili flakes, fresh oregano, and capers.',
  },
  {
    id: 'ub-11',
    name: 'Grilled Herb Chicken Fettuccine',
    category: 'pastas',
    price: 380,
    isVeg: false,
    description: 'Handcrafted ribbon pasta, charred chicken tenders, sun-dried tomatoes, and basil cream sauce.',
  },

  // Burgers
  {
    id: 'ub-12',
    name: 'The Urban Bistro Smash Burger',
    category: 'burgers',
    price: 290,
    isVeg: true,
    bestseller: true,
    description: 'Crispy quinoa and black bean patty, melted cheddar, house pickle relish, and mustard crema in brioche.',
  },
  {
    id: 'ub-13',
    name: 'Crispy Southern Buttermilk Chicken Burger',
    category: 'burgers',
    price: 340,
    isVeg: false,
    bestseller: true,
    description: '24-hour brined crunchy chicken breast, purple cabbage slaw, chipotle glaze, and melted pepper jack.',
  },

  // Beverages
  {
    id: 'ub-14',
    name: 'Cold Brew Hibiscus Cooler',
    category: 'beverages',
    price: 180,
    isVeg: true,
    bestseller: true,
    description: '16-hour slow steep hibiscus flowers, kaffir lime, fresh mint sprigs, and organic blossom honey.',
  },
  {
    id: 'ub-15',
    name: 'Salted Caramel Hazelnut Frappe',
    category: 'beverages',
    price: 210,
    isVeg: true,
    description: 'Double espresso shot blended with dark roasted hazelnut paste, salted toffee, and whipped cream.',
  },
  {
    id: 'ub-16',
    name: 'Fresh Mint Lemonade Soda',
    category: 'beverages',
    price: 150,
    isVeg: true,
    description: 'Fresh squeezed local lemons, crushed spearmint, rock salt, and effervescent sparkling soda.',
  },

  // Desserts
  {
    id: 'ub-17',
    name: 'Warm Belgian Chocolate Lava Soufflé',
    category: 'desserts',
    price: 260,
    isVeg: true,
    bestseller: true,
    description: '70% dark Callebaut chocolate sponge with molten center, accompanied by Madagascan vanilla gelato.',
  },
  {
    id: 'ub-18',
    name: 'Baked New York Blueberry Cheesecake',
    category: 'desserts',
    price: 280,
    isVeg: true,
    description: 'Classic dense cream cheese on cinnamon graham crust, crowned with wild blueberry compote.',
  },
];

export const UrbanBitesDemo: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeReservationModal, setActiveReservationModal] = useState(false);
  const [partySize, setPartySize] = useState('2 Guests');
  const [resDate, setResDate] = useState('Today');
  const [resTime, setResTime] = useState('7:30 PM');

  // Cart State
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderType, setOrderType] = useState<'Takeaway' | 'Delivery' | 'Dine-In'>('Takeaway');
  const [customerName, setCustomerName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderNotes, setOrderNotes] = useState('');

  const totalCartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalCartAmount = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, qty: 1, isVeg: item.isVeg }];
    });
  };

  const updateQty = (id: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((i) => {
          if (i.id === id) {
            const nextQty = i.qty + delta;
            return nextQty > 0 ? { ...i, qty: nextQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleCheckoutOnWhatsApp = () => {
    if (cart.length === 0) return;

    const itemLines = cart
      .map((item) => `• ${item.qty}x ${item.name} (₹${item.price * item.qty})`)
      .join('\n');

    let message = `Hi! I would like to place an order from Urban Bites:\n\n${itemLines}\n\n*Total Items:* ${totalCartCount}\n*Total Amount:* ₹${totalCartAmount}\n*Order Type:* ${orderType}`;

    if (customerName.trim()) {
      message += `\n*Customer Name:* ${customerName.trim()}`;
    }
    if (orderType === 'Delivery' && deliveryAddress.trim()) {
      message += `\n*Delivery Address:* ${deliveryAddress.trim()}`;
    }
    if (orderNotes.trim()) {
      message += `\n*Special Instructions:* ${orderNotes.trim()}`;
    }

    message += `\n\nPlease confirm my order and estimated preparation timing.`;

    window.open(getWhatsAppUrl(message), '_blank');
    setIsCartOpen(false);
  };

  const filteredItems = selectedCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'starters', label: 'Small Plates' },
    { id: 'pizzas', label: 'Wood-Fired Pizzas' },
    { id: 'pastas', label: 'Artisan Pastas' },
    { id: 'burgers', label: 'Burgers' },
    { id: 'beverages', label: 'Drinks & Shakes' },
    { id: 'desserts', label: 'Desserts' },
  ];

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi! I would like to reserve a table at Urban Bites for ${partySize} on ${resDate} at ${resTime}. Is a table available?`;
    window.open(getWhatsAppUrl(text), '_blank');
    setActiveReservationModal(false);
  };

  return (
    <div className="min-h-screen bg-[#0d0c0b] text-[#eae5dc] font-sans selection:bg-amber-600 selection:text-white">
      {/* 1. Universal Top Header Bar for Agency Client Context */}
      <DemoHeaderBar
        demoName="Urban Bites"
        demoCategory="Modern Restaurant & Café"
        onBack={onBack}
      />

      {/* 2. Restaurant Brand Navbar */}
      <nav className="sticky top-[41px] z-40 bg-[#121110]/95 backdrop-blur-md border-b border-[#25221e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a href="#ub-home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-amber-600/20 border border-amber-500/40 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-neutral-950 transition-colors">
              <UtensilsCrossed className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="text-lg font-extrabold tracking-tight text-white block leading-tight">
                URBAN BITES
              </span>
              <span className="text-[10px] tracking-widest text-amber-500/90 uppercase block font-semibold">
                Kitchen & Bistro
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7 text-xs font-medium text-[#b5ada0]">
            <a href="#ub-home" className="hover:text-amber-400 transition-colors">Home</a>
            <a href="#ub-menu" className="hover:text-amber-400 transition-colors">Digital Menu</a>
            <a href="#ub-about" className="hover:text-amber-400 transition-colors">Our Story</a>
            <a href="#ub-ambiance" className="hover:text-amber-400 transition-colors">Ambiance</a>
            <a href="#ub-location" className="hover:text-amber-400 transition-colors">Hours & Location</a>
            <a href="#ub-contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>

          {/* Primary Action Button & Cart Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Interactive Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative inline-flex items-center gap-2 px-3.5 py-2 bg-[#1b1917] hover:bg-[#25221e] border border-[#3b362e] rounded-md text-xs font-semibold text-white transition-colors"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span>Cart</span>
              {totalCartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-amber-500 text-neutral-950 font-bold text-[11px] flex items-center justify-center">
                  {totalCartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveReservationModal(true)}
              className="px-3.5 py-2 text-xs font-semibold rounded-md border border-[#3b362e] text-[#d6cec2] hover:bg-[#1f1d19] transition-colors"
            >
              Reserve Table
            </button>

            <a
              href={getWhatsAppUrl("Hi! I would like to place a food order from Urban Bites. Can you share the latest specials?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs rounded-md transition-colors shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Cart & Menu Buttons */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-md bg-[#1b1917] border border-[#3b362e] text-amber-400"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-neutral-950 font-bold text-[10px] flex items-center justify-center">
                  {totalCartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-[#25221e] bg-[#141211] px-4 py-4 space-y-3 text-left">
            <a
              href="#ub-home"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#d6cec2] py-1"
            >
              Home
            </a>
            <a
              href="#ub-menu"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#d6cec2] py-1"
            >
              Digital Menu
            </a>
            <a
              href="#ub-about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#d6cec2] py-1"
            >
              Our Story
            </a>
            <a
              href="#ub-location"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#d6cec2] py-1"
            >
              Hours & Location
            </a>
            <div className="pt-3 border-t border-[#25221e] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActiveReservationModal(true);
                }}
                className="w-full py-2.5 text-xs font-semibold rounded-md border border-[#3b362e] text-[#d6cec2] text-center"
              >
                Reserve a Table
              </button>
              <a
                href={getWhatsAppUrl("Hi! I would like to place a food order from Urban Bites.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-emerald-500 text-neutral-950 font-bold text-xs rounded-md text-center flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* 3. Hero Section */}
      <section id="ub-home" className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden">
        {/* Background Food Photography with Dark Scrim */}
        <div className="absolute inset-0">
          <img
            src={urbanBitesHeroImg}
            alt="Urban Bites artisanal culinary spread"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0b] via-[#0d0c0b]/80 to-[#0d0c0b]/40" />
        </div>

        {/* Content Container */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Flame className="w-3.5 h-3.5" />
            <span>Wood-Fired & Handcrafted in Our Kitchen</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] text-balance">
            Good Food. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
              Great Moments.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#c9c0b1] leading-relaxed">
            Welcome to Urban Bites. We serve artisanal stone-baked pizzas, slow-simmered pastas,
            and signature burgers made with local farm ingredients and served in a warm, unhurried bistro setting.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#ub-menu"
              className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2"
            >
              <span>Explore Digital Menu</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href={getWhatsAppUrl("Hi! I would like to place an order from Urban Bites. Can you share the menu?")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Quick Badges */}
          <div className="pt-8 border-t border-[#2a2620]/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#a39a8c]">
            <div>
              <div className="font-bold text-white text-sm">Open 7 Days</div>
              <div>11:30 AM – 11:00 PM</div>
            </div>
            <div>
              <div className="font-bold text-white text-sm">Woodfire Oven</div>
              <div>450°C Stone Baking</div>
            </div>
            <div>
              <div className="font-bold text-white text-sm">Direct Ordering</div>
              <div>0% Commission via WhatsApp</div>
            </div>
            <div>
              <div className="font-bold text-white text-sm">Dine-In & Takeaway</div>
              <div>Warm Ambient Seating</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Digital Menu Section */}
      <section id="ub-menu" className="py-20 bg-[#121110] border-t border-[#25221e] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">
              Curated Culinary Selection
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interactive Food Menu
            </h2>
            <p className="text-xs sm:text-sm text-[#a39a8c]">
              Select any category to browse our dishes. Tap &quot;Order&quot; on any dish to send your order directly to our kitchen phone on WhatsApp.
            </p>
          </div>

          {/* Category Filter Pills (Functional Buttons) */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500 text-neutral-950 shadow-md font-bold'
                    : 'bg-[#1b1917] text-[#a89f91] hover:text-white hover:bg-[#25221e] border border-[#2d2924]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#181614] border border-[#2a2621] rounded-xl p-5 flex flex-col justify-between hover:border-amber-500/40 hover:bg-[#1e1c19] transition-all group"
              >
                <div>
                  {/* Top Bar: Veg Indicator & Price */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {/* Dietary Mark */}
                      <div
                        className={`w-4 h-4 rounded-sm border flex items-center justify-center ${
                          item.isVeg ? 'border-emerald-500' : 'border-rose-500'
                        }`}
                        title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                          }`}
                        />
                      </div>
                      {item.bestseller && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                          Bestseller
                        </span>
                      )}
                    </div>

                    <div className="text-sm font-extrabold text-white">
                      ₹{item.price}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-xs text-[#a39a8c] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Action: Add to Cart and Quantity Stepper */}
                <div className="mt-6 pt-4 border-t border-[#26221c] flex items-center justify-between">
                  <span className="text-[11px] text-[#787063]">
                    Made fresh to order
                  </span>

                  {cart.find((c) => c.id === item.id) ? (
                    <div className="flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/40 rounded-lg p-1">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-6 h-6 rounded bg-[#1e1c19] hover:bg-amber-500 hover:text-neutral-950 text-amber-400 font-bold text-xs flex items-center justify-center transition-colors"
                        title="Reduce quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-white px-2 min-w-[20px] text-center">
                        {cart.find((c) => c.id === item.id)?.qty}
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        className="w-6 h-6 rounded bg-[#1e1c19] hover:bg-amber-500 hover:text-neutral-950 text-amber-400 font-bold text-xs flex items-center justify-center transition-colors"
                        title="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(item)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-neutral-950 border border-amber-500/30 hover:border-amber-500 text-xs font-semibold transition-all shadow-xs"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Cart</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Notice */}
          <div className="mt-12 p-4 rounded-lg bg-[#161413] border border-[#2b2722] text-center text-xs text-[#9c9384] max-w-xl mx-auto flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Kitchen prepares every order fresh. Average takeaway preparation time: 15–20 minutes.</span>
          </div>

        </div>
      </section>

      {/* 5. Chef & Story Section */}
      <section id="ub-about" className="py-20 bg-[#0d0c0b] border-t border-[#25221e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#2d2924] shadow-2xl">
              <img
                src={urbanBitesPreviewImg}
                alt="Urban Bites cozy bistro seating"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/80 backdrop-blur-md p-3.5 rounded-lg border border-neutral-800 text-left">
                <div className="text-xs font-bold text-white">Crafted for Conversation</div>
                <div className="text-[11px] text-neutral-400">Warm ambient jazz, timber tables, and an open fire pizza kitchen.</div>
              </div>
            </div>

            <div className="space-y-6 text-left">
              <div className="text-xs font-bold tracking-widest text-amber-500 uppercase">
                The Urban Bites Ethos
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Authentic Flavors, Unhurried Dinners & Honest Ingredients.
              </h2>
              <p className="text-sm text-[#b0a79a] leading-relaxed">
                Founded in 2021 by two culinary school alumni, Urban Bites was created to offer an alternative to rushed fast food. We slow-ferment our pizza dough for 48 hours to create a blistered, airy crust and prepare our pasta sauces in small batches every morning.
              </p>
              <p className="text-sm text-[#b0a79a] leading-relaxed">
                Whether you stop by for a morning pour-over and sourdough toast or gather with friends for stone-fired flatbreads at night, our kitchen is always warm and welcoming.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-lg bg-[#161413] border border-[#26221c]">
                  <div className="text-xl font-bold text-amber-400">48-Hr</div>
                  <div className="text-xs text-[#8c8375] mt-1">Slow Dough Fermentation</div>
                </div>
                <div className="p-3.5 rounded-lg bg-[#161413] border border-[#26221c]">
                  <div className="text-xl font-bold text-amber-400">100%</div>
                  <div className="text-xs text-[#8c8375] mt-1">Preservative-Free Recipes</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Hours, Location & Contact */}
      <section id="ub-location" className="py-20 bg-[#121110] border-t border-[#25221e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center space-y-2 mb-14">
            <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">
              Visit Us Today
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Hours & Location
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Address */}
            <div className="p-6 rounded-xl bg-[#181614] border border-[#2a2621] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Bistro Location</h3>
              <p className="text-xs text-[#a39a8c] leading-relaxed">
                XXXXXXXXXX
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 pt-2"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Timings */}
            <div className="p-6 rounded-xl bg-[#181614] border border-[#2a2621] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Opening Hours</h3>
              <div className="text-xs text-[#a39a8c] space-y-1">
                <div className="flex justify-between">
                  <span>Mon – Fri:</span>
                  <span className="text-white font-medium">11:30 AM – 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sat – Sun:</span>
                  <span className="text-white font-medium">11:00 AM – 11:30 PM</span>
                </div>
                <div className="text-[11px] text-amber-500/80 pt-1">
                  Kitchen takes last orders 30 minutes before closing.
                </div>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="p-6 rounded-xl bg-[#181614] border border-[#2a2621] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Direct Connect</h3>
              <p className="text-xs text-[#a39a8c] leading-relaxed">
                For table reservations, party hosting, or bulk takeaway orders:
              </p>
              <div className="flex flex-col gap-2 pt-1">
                <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                  <span>XXXXXXXXXX</span>
                </div>
                <a
                  href={getWhatsAppUrl("Hi! I would like to reserve a table or ask about Urban Bites.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Restaurant Footer */}
      <footer id="ub-contact" className="py-12 bg-[#090807] border-t border-[#1f1d19] text-xs text-[#736c61]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">URBAN BITES BISTRO</span>
            <span>·</span>
            <span>Fictional Portfolio Demo Website</span>
          </div>

          <div className="flex items-center gap-4 text-[#8a8174]">
            <a href="#ub-home" className="hover:text-white transition-colors">Top</a>
            <a href="#ub-menu" className="hover:text-white transition-colors">Menu</a>
            <a href="#ub-about" className="hover:text-white transition-colors">Story</a>
            <a href="#ub-location" className="hover:text-white transition-colors">Location</a>
          </div>
        </div>
      </footer>

      {/* 8. Conversion Banner for Client Pitch (Required by Spec) */}
      <div className="bg-[#121110] border-t border-amber-900/40 p-4 sm:p-5">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <div className="text-xs font-bold text-white flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Want an online menu & ordering website like this for your restaurant?</span>
            </div>
            <div className="text-[11px] text-neutral-400 mt-0.5">
              MakeWebs creates custom mobile websites tailored to your menu, location, and phone number.
            </div>
          </div>
          <a
            href={getWhatsAppUrl("Hi! I explored the Urban Bites restaurant demo and I want a website like this for my restaurant. Can we discuss?")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs rounded-md transition-colors whitespace-nowrap"
          >
            Get My Website
          </a>
        </div>
      </div>

      {/* 9. Floating Sticky Cart Bar (Shown when items are in cart) */}
      {totalCartCount > 0 && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-40 max-w-md w-full animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="bg-[#181614]/95 backdrop-blur-md border border-amber-500/50 rounded-xl p-3.5 shadow-2xl flex items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-sm">
                {totalCartCount}
              </div>
              <div>
                <div className="text-xs font-bold text-white">Dishes in Cart</div>
                <div className="text-xs text-amber-400 font-extrabold">₹{totalCartAmount}</div>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs transition-colors shadow-md shrink-0"
            >
              <span>View Cart & Checkout</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* 10. Interactive Cart Drawer / Checkout Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#181614] border border-[#2d2924] rounded-2xl max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl text-left overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 border-b border-[#2d2924] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-amber-500" />
                <h3 className="text-base font-bold text-white">Your Order Cart</h3>
                <span className="text-xs text-[#a39a8c]">({totalCartCount} {totalCartCount === 1 ? 'item' : 'items'})</span>
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
                  <div className="w-12 h-12 rounded-full bg-[#25221e] flex items-center justify-center mx-auto text-[#a39a8c]">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-bold text-white">Your cart is empty</div>
                  <p className="text-xs text-[#a39a8c] max-w-xs mx-auto">
                    Explore our digital menu and tap &quot;Add to Cart&quot; on pizzas, pastas, or drinks!
                  </p>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      const el = document.getElementById('ub-menu');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-2 rounded-lg bg-amber-500 text-neutral-950 text-xs font-bold inline-block mt-2"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <>
                  {/* Cart Items List */}
                  <div className="space-y-3">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="p-3 rounded-xl bg-[#141211] border border-[#2b2722] flex items-center justify-between gap-3"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-3 h-3 rounded-xs border flex items-center justify-center shrink-0 ${
                                item.isVeg ? 'border-emerald-500' : 'border-rose-500'
                              }`}
                            >
                              <div
                                className={`w-1.5 h-1.5 rounded-full ${
                                  item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                                }`}
                              />
                            </div>
                            <span className="text-xs font-bold text-white truncate">
                              {item.name}
                            </span>
                          </div>
                          <div className="text-[11px] text-[#a39a8c] mt-0.5">
                            ₹{item.price} each · <span className="text-amber-400 font-semibold">₹{item.price * item.qty}</span>
                          </div>
                        </div>

                        {/* Quantity Stepper */}
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1.5 bg-[#1e1c19] border border-[#38332c] rounded-md p-1">
                            <button
                              onClick={() => updateQty(item.id, -1)}
                              className="w-5 h-5 rounded hover:bg-amber-500 hover:text-neutral-950 text-amber-400 font-bold text-xs flex items-center justify-center transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold text-white px-1 min-w-[16px] text-center">
                              {item.qty}
                            </span>
                            <button
                              onClick={() => updateQty(item.id, 1)}
                              className="w-5 h-5 rounded hover:bg-amber-500 hover:text-neutral-950 text-amber-400 font-bold text-xs flex items-center justify-center transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1.5 text-neutral-500 hover:text-rose-400 transition-colors"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Options */}
                  <div className="pt-3 border-t border-[#2d2924] space-y-3 text-xs">
                    <div>
                      <label className="block text-[#c9c0b1] font-medium mb-1">
                        Order Preference
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {(['Takeaway', 'Delivery', 'Dine-In'] as const).map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setOrderType(type)}
                            className={`py-1.5 px-2 rounded-lg border text-center font-semibold transition-all ${
                              orderType === type
                                ? 'bg-amber-500 text-neutral-950 border-amber-500 font-bold'
                                : 'bg-[#121110] text-[#a39a8c] border-[#38332c] hover:border-neutral-500'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[#c9c0b1] font-medium mb-1">
                          Your Name (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Rahul"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          className="w-full bg-[#121110] border border-[#38332c] rounded-lg px-3 py-1.5 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500"
                        />
                      </div>

                      {orderType === 'Delivery' ? (
                        <div>
                          <label className="block text-[#c9c0b1] font-medium mb-1">
                            Delivery Address
                          </label>
                          <input
                            type="text"
                            placeholder="Flat / Society / Area"
                            value={deliveryAddress}
                            onChange={(e) => setDeliveryAddress(e.target.value)}
                            className="w-full bg-[#121110] border border-[#38332c] rounded-lg px-3 py-1.5 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500"
                          />
                        </div>
                      ) : (
                        <div>
                          <label className="block text-[#c9c0b1] font-medium mb-1">
                            Kitchen Notes
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Less spicy, extra sauce"
                            value={orderNotes}
                            onChange={(e) => setOrderNotes(e.target.value)}
                            className="w-full bg-[#121110] border border-[#38332c] rounded-lg px-3 py-1.5 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Modal Footer / Checkout Button */}
            {cart.length > 0 && (
              <div className="p-5 border-t border-[#2d2924] bg-[#141211] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#a39a8c]">Subtotal ({totalCartCount} items):</span>
                  <span className="text-base font-extrabold text-white">₹{totalCartAmount}</span>
                </div>
                <div className="text-[11px] text-emerald-400/90 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>Direct Kitchen WhatsApp Order · 0% commission markup</span>
                </div>

                <button
                  onClick={handleCheckoutOnWhatsApp}
                  className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send Combined Order to WhatsApp (₹{totalCartAmount})</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Table Reservation Dialog Modal */}
      {activeReservationModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#181614] border border-[#2d2924] rounded-2xl max-w-md w-full p-6 text-left space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#2d2924]">
              <div>
                <h3 className="text-base font-bold text-white">Table Reservation Inquiry</h3>
                <p className="text-xs text-neutral-400">Urban Bites Bistro</p>
              </div>
              <button
                onClick={() => setActiveReservationModal(false)}
                className="p-1 rounded text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleReservation} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-neutral-300 font-medium mb-1">Party Size</label>
                <select
                  value={partySize}
                  onChange={(e) => setPartySize(e.target.value)}
                  className="w-full bg-[#121110] border border-[#3b362e] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                >
                  <option>1 Person</option>
                  <option>2 Guests</option>
                  <option>3–4 Guests</option>
                  <option>5–8 Guests (Large Table)</option>
                  <option>8+ Guests (Party Booking)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">Preferred Day</label>
                  <select
                    value={resDate}
                    onChange={(e) => setResDate(e.target.value)}
                    className="w-full bg-[#121110] border border-[#3b362e] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                  >
                    <option>Today</option>
                    <option>Tomorrow</option>
                    <option>This Weekend</option>
                    <option>Next Week</option>
                  </select>
                </div>
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">Preferred Time</label>
                  <select
                    value={resTime}
                    onChange={(e) => setResTime(e.target.value)}
                    className="w-full bg-[#121110] border border-[#3b362e] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                  >
                    <option>12:30 PM (Lunch)</option>
                    <option>1:30 PM (Lunch)</option>
                    <option>7:00 PM (Dinner)</option>
                    <option>8:00 PM (Dinner)</option>
                    <option>9:00 PM (Dinner)</option>
                  </select>
                </div>
              </div>

              <p className="text-[11px] text-neutral-400 leading-relaxed pt-1">
                Your reservation details will be sent directly via WhatsApp to our host desk for instant confirmation.
              </p>

              <button
                type="submit"
                className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Confirm on WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
