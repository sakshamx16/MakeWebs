import React, { useState } from 'react';
import { ExternalLink, Eye, MessageCircle, ArrowRight } from 'lucide-react';
import { portfolioProjects, PortfolioProject, getWhatsAppUrl } from '../config/agency';
import { DemoPreviewModal } from './DemoPreviewModal';

export const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Demo Concepts' },
    { id: 'food', label: 'Restaurants & Bakeries' },
    { id: 'wellness', label: 'Gyms & Salons' },
    { id: 'services', label: 'Institutes & Retail' },
  ];

  const filteredProjects = portfolioProjects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'food') return project.categorySlug === 'restaurant' || project.categorySlug === 'bakery';
    if (activeFilter === 'wellness') return project.categorySlug === 'fitness' || project.categorySlug === 'salon';
    if (activeFilter === 'services') return project.categorySlug === 'education' || project.categorySlug === 'retail';
    return true;
  });

  return (
    <section id="work" className="py-24 bg-neutral-950 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
            Our Work & Concepts
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Sample Websites Built for Local Businesses
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Explore example websites we designed for local eateries, studios, and shops.
            Every project here demonstrates real features including digital menus, map integration, and WhatsApp ordering.
          </p>
          <div className="pt-1 text-xs text-neutral-400">
            Note: These showcase concepts are clearly labelled demo projects designed to illustrate our layout and mobile functionality.
          </div>
        </div>

        {/* Filter Controls (Functional interactive segmented control buttons) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeFilter === tab.id
                  ? 'bg-neutral-800 text-white border border-neutral-700 shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900 border border-transparent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-left">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden flex flex-col justify-between hover:border-neutral-700 hover:bg-neutral-900/80 transition-all group"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[4/3] bg-neutral-950 overflow-hidden">
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
                  <div className="absolute top-3 left-3 bg-neutral-950/90 backdrop-blur-md border border-neutral-800 px-2.5 py-1 rounded text-[10px] font-mono text-neutral-300">
                    DEMO PROJECT
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  {/* Unboxed metadata per Zero-Pill discipline */}
                  <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium">
                    <span className="text-emerald-400">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>Mobile Ready</span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3">
                    {project.shortDesc}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="p-5 pt-0 border-t border-neutral-800/60 mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-neutral-800 hover:bg-neutral-700 rounded-md transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-neutral-300" />
                  <span>View Demo</span>
                </button>

                <a
                  href={getWhatsAppUrl(project.whatsappDemoMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Build This</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Client Pitch Reassurance */}
        <div className="mt-14 text-center">
          <p className="text-xs text-neutral-400 max-w-lg mx-auto">
            Want to see how your specific business will look? Send us your business name and menu/products on WhatsApp, and we will prepare a customized concept for you.
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

      {/* Interactive Modal */}
      {selectedProject && (
        <DemoPreviewModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
