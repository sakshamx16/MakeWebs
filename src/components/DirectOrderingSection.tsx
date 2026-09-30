import React, { useState } from 'react';
import {
  QrCode,
  ArrowRight,
  MessageCircle,
  Smartphone,
  Store,
  CheckCircle2,
  Plus,
  Minus,
  Sparkles,
  ShoppingBag,
} from 'lucide-react';
import { agencyInfo, getWhatsAppUrl } from '../config/agency';

interface DemoMenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
}

export const DirectOrderingSection: React.FC = () => {
  // Sample dishes for the interactive ordering simulator
  const sampleMenu: DemoMenuItem[] = [
    { id: '1', name: 'Smoked Bacon Cheese Burger', price: 280, category: 'Main' },
    { id: '2', name: 'Truffle Parmesan Fries', price: 160, category: 'Sides' },
    { id: '3', name: 'Iced Vanilla Cold Brew', price: 140, category: 'Beverage' },
    { id: '4', name: 'Warm Molten Choco Cake', price: 190, category: 'Dessert' },
  ];

  const [cart, setCart] = useState<{ [id: string]: number }>({ '1': 1, '3': 1 });

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      const current = prev[id] || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: next };
    });
  };

  const totalAmount = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = sampleMenu.find((m) => m.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const itemCount = Object.values(cart).reduce((a, b) => a + b, 0);

  // Generate the formatted WhatsApp message text
  const getSimulatedOrderMessage = () => {
    const lines = Object.entries(cart)
      .map(([id, qty]) => {
        const item = sampleMenu.find((m) => m.id === id);
        return item ? `• ${qty}x ${item.name} (₹${item.price * qty})` : '';
      })
      .filter(Boolean)
      .join('\n');

    return `Hi, I would like to place an order via your website:\n\n${lines}\n\n*Total Amount:* ₹${totalAmount}\n*Order Type:* Takeaway / Delivery\n*Customer Name:* [Customer Name]`;
  };

  const simulatedWhatsAppUrl = getWhatsAppUrl(
    `Hi! I tested your WhatsApp ordering demo on your agency website and I want to set this up for my restaurant/store:\n\n${getSimulatedOrderMessage()}`
  );

  return (
    <section id="direct-ordering" className="py-24 bg-neutral-900/60 border-y border-neutral-800 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
            Direct Customer Channel
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white text-balance">
            Give Your Customers a Direct Way to Reach You
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Third-party platforms can be useful for discovery, while your own website gives you
            an additional direct channel for customers—with zero per-order commission fees and a direct relationship.
          </p>
        </div>

        {/* 5-Step Visual Flow */}
        <div className="mt-16">
          <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider text-center mb-6">
            How The Direct Customer Flow Works:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            
            {/* Step 1 */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between text-left">
              <div>
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 font-bold text-xs mb-3">
                  01
                </div>
                <div className="text-sm font-bold text-white">Discovery</div>
                <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                  Customer finds you via Google Search, Instagram bio, or scans your table QR code.
                </p>
              </div>
              <div className="mt-4 text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                <span>Google / IG / QR Code</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between text-left">
              <div>
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 font-bold text-xs mb-3">
                  02
                </div>
                <div className="text-sm font-bold text-white">Your Website</div>
                <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                  Your website loads instantly on their phone. No app download or sign-up needed.
                </p>
              </div>
              <div className="mt-4 text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                <span>Fast Mobile Web</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between text-left">
              <div>
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 font-bold text-xs mb-3">
                  03
                </div>
                <div className="text-sm font-bold text-white">Digital Menu</div>
                <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                  Customer browses your categorized dishes, photos, prices, and options.
                </p>
              </div>
              <div className="mt-4 text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                <span>Visual Food Catalog</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between text-left">
              <div>
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 font-bold text-xs mb-3">
                  04
                </div>
                <div className="text-sm font-bold text-white">WhatsApp Order</div>
                <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                  Customer taps "Order on WhatsApp". An organized list of items is formatted automatically.
                </p>
              </div>
              <div className="mt-4 text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                <span>1-Tap Transfer</span>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-neutral-950 border border-emerald-500/30 bg-emerald-950/10 rounded-xl p-5 flex flex-col justify-between text-left">
              <div>
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-xs mb-3">
                  05
                </div>
                <div className="text-sm font-bold text-white">Direct Order In</div>
                <p className="text-xs text-neutral-300 mt-1.5 leading-relaxed">
                  Your kitchen receives the order on WhatsApp. You confirm and prepare it directly.
                </p>
              </div>
              <div className="mt-4 text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                <span>Direct Customer Relationship</span>
              </div>
            </div>

          </div>
        </div>

        {/* Live Interactive Simulator */}
        <div className="mt-16 bg-neutral-950 rounded-2xl border border-neutral-800 p-6 sm:p-8 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side: Explanatory benefits */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Demonstration</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Try the WhatsApp Ordering Flow Right Now
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed">
                See what your customers will experience. Tap items on the right to add them to the demo cart,
                and watch how neatly the order formats into WhatsApp.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <div className="text-xs text-neutral-300">
                    <strong className="text-white font-medium">Keep 100% of your earnings:</strong> Avoid paying 20% to 30% aggregator commission on orders from your regular customers.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <div className="text-xs text-neutral-300">
                    <strong className="text-white font-medium">Own your customer contact list:</strong> Build a database of loyal neighborhood regulars who order directly from you.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <div className="text-xs text-neutral-300">
                    <strong className="text-white font-medium">Both channels can coexist:</strong> You do not have to leave any existing platforms; you simply add a direct channel.
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={getWhatsAppUrl("Hi! I would like to build a direct WhatsApp ordering website for my restaurant/store.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Build My Business Website</span>
                </a>
              </div>
            </div>

            {/* Right side: Interactive Menu Selector & Live Message Generator */}
            <div className="lg:col-span-6 bg-neutral-900/90 rounded-xl border border-neutral-800 p-5 space-y-4 text-left">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <div className="text-xs font-semibold text-white flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-emerald-400" />
                  <span>Sample Menu (Tap + to add items)</span>
                </div>
                <span className="text-[11px] text-neutral-400 font-mono">
                  {itemCount} items · ₹{totalAmount}
                </span>
              </div>

              {/* Sample Menu Items list */}
              <div className="space-y-2">
                {sampleMenu.map((item) => {
                  const qty = cart[item.id] || 0;
                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-2.5 bg-neutral-950 rounded-lg border border-neutral-800 text-xs"
                    >
                      <div>
                        <div className="font-medium text-white">{item.name}</div>
                        <div className="text-[11px] text-neutral-400">₹{item.price} · {item.category}</div>
                      </div>

                      <div className="flex items-center gap-2">
                        {qty > 0 ? (
                          <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-700 rounded-md p-1">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-5 h-5 flex items-center justify-center text-neutral-300 hover:text-white"
                              aria-label={`Decrease ${item.name}`}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-mono text-xs w-4 text-center text-white">{qty}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-5 h-5 flex items-center justify-center text-neutral-300 hover:text-white"
                              aria-label={`Increase ${item.name}`}
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-2.5 py-1 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-md transition-colors"
                          >
                            + Add
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* WhatsApp Message Preview Box */}
              <div className="pt-2">
                <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Simulated WhatsApp Message:</span>
                  <span className="text-emerald-400 text-[10px] font-normal">Auto-formatted</span>
                </div>
                
                <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 text-[11px] font-mono text-neutral-300 whitespace-pre-wrap leading-relaxed max-h-32 overflow-y-auto">
                  {itemCount > 0 ? getSimulatedOrderMessage() : 'Cart is empty. Tap (+ Add) on any item above!'}
                </div>
              </div>

              {/* Test Action */}
              <a
                href={simulatedWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-2.5 px-4 text-xs font-semibold rounded-md flex items-center justify-center gap-2 transition-all ${
                  itemCount > 0
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-md'
                    : 'bg-neutral-800 text-neutral-500 pointer-events-none'
                }`}
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Test Live Order On WhatsApp (Demo)</span>
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
