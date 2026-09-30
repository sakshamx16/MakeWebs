import React from 'react';
import { Eye, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { portfolioProjects, getWhatsAppUrl } from '../config/agency';

interface PortfolioSectionProps {
  onOpenDemo: (demoId: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenDemo }) => {
  return (
    <section id="work" className="py-24 bg-neutral-950 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
            Live Interactive Demos
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Explore 3 Real Demo Websites
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Click any demo to open the full website experience. Test real menus, category filters, photo galleries, and WhatsApp order flows just like your customers would.
          </p>
        </div>

        {/* The 3 Core Projects Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className="bg-neutral-900/60 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-neutral-700 hover:bg-neutral-900/90 transition-all duration-300 group shadow-md"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] bg-neutral-950 overflow-hidden cursor-pointer" onClick={() => onOpenDemo(project.id)}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

                  {/* Clean unboxed demo label */}
                  <div className="absolute top-3 left-3 bg-neutral-950/90 backdrop-blur-md border border-neutral-800 px-2.5 py-1 rounded text-[11px] font-mono text-neutral-300">
                    LIVE DEMO
                  </div>

                  {/* Quick Click Hint Overlay on Hover */}
                  <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-lg bg-emerald-500 text-neutral-950 font-bold text-xs shadow-lg flex items-center gap-1.5">
                      <Eye className="w-4 h-4" />
                      <span>Open Full Demo Website</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  {/* Unboxed metadata per Zero-Pill discipline */}
                  <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium">
                    <span className="text-emerald-400 font-semibold">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>100% Mobile Ready</span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-neutral-800/60 mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => onOpenDemo(project.id)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors shadow-sm"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Demo</span>
                </button>

                <a
                  href={getWhatsAppUrl(`Hi! I would like to get a website like ${project.name} (${project.category}) for my business.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-neutral-400 hover:text-emerald-400 transition-colors"
                >
                  <span>Build This</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Client Pitch Reassurance */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Customized for Your Business</span>
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed">
            Want to see how your store, restaurant, or salon will look? Send us your business name and menu/products on WhatsApp, and we will prepare a customized live preview for you this week.
          </p>
          <div className="mt-4">
            <a
              href={getWhatsAppUrl("Hi! I would like to see a custom website demo designed for my specific business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-md transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Request a Custom Concept for Your Store</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
