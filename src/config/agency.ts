/**
 * ==============================================================================
 * CENTRAL AGENCY CONFIGURATION
 * ==============================================================================
 * 
 * EDIT THIS FILE TO PERSONALIZE YOUR AGENCY WEBSITE!
 * 
 * You do NOT need to touch multiple component files. All details—such as your
 * agency name, WhatsApp number, phone, email, prices, services, and demo projects—
 * are configured right here in this single file.
 * 
 * ------------------------------------------------------------------------------
 * QUICK INSTRUCTIONS:
 * 1. Change `agencyInfo.name` to your business name (e.g., "WebCrafters Studio").
 * 2. Update `agencyInfo.whatsappNumber` to your real WhatsApp number with country code
 *    (e.g., "919876543210" for India with 91, or "14155552671" for US with 1).
 * 3. Update your email, phone, and social handles in `agencyInfo`.
 * 4. Adjust the pricing amounts in `pricingPlans`.
 * 5. When you launch real client websites, simply update the `portfolioProjects`
 *    array below with your real client names and links!
 * ==============================================================================
 */

// Import generated preview photography assets
import heroMockupImg from '../assets/images/hero_agency_preview_1790712381913.jpg';
import urbanBitesImg from '../assets/images/demo_urban_bites_1790712394617.jpg';
import sweetCravingsImg from '../assets/images/demo_sweet_cravings_1790712405536.jpg';
import fitzoneGymImg from '../assets/images/demo_fitzone_gym_1790712415735.jpg';
import styleSalonImg from '../assets/images/demo_style_salon_1790712426347.jpg';
import brightAcademyImg from '../assets/images/demo_bright_academy_1790712439676.jpg';
import royalSweetsImg from '../assets/images/demo_royal_sweets_1790712450431.jpg';

export interface AgencyInfo {
  name: string;
  wordmarkAccent: string;
  tagline: string;
  subheadline: string;
  city: string;
  whatsappNumber: string; // Digits only, including country code (e.g., "919876543210")
  whatsappDisplayNumber: string;
  phoneNumber: string;
  email: string;
  instagramHandle: string;
  instagramUrl: string;
  address: string;
  defaultWhatsAppMessage: string;
  consultationCtaText: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  features: string[];
  icon: 'globe' | 'utensils' | 'menu' | 'message-circle' | 'map-pin' | 'smartphone' | 'search' | 'wrench';
  tagline: string;
}

export interface PortfolioProject {
  id: string;
  name: string;
  category: string;
  categorySlug: 'restaurant' | 'bakery' | 'fitness' | 'salon' | 'education' | 'retail';
  shortDesc: string;
  fullDesc: string;
  features: string[];
  image: string;
  isDemo: boolean;
  demoUrl?: string; // Leave empty or set to external live URL once built
  whatsappDemoMessage: string;
}

export interface PricingPlan {
  id: string;
  tier: string;
  price: string;
  priceNote: string;
  description: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  whatsappInquiryText: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  duration: string;
  description: string;
  details: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

// ------------------------------------------------------------------------------
// 1. CORE AGENCY BUSINESS DETAILS
// ------------------------------------------------------------------------------
export const agencyInfo: AgencyInfo = {
  // Official brand name
  name: "MakeWebs",
  
  // Optional accent word or suffix for visual styling if desired
  wordmarkAccent: "",
  
  tagline: "Professional Websites for Local Businesses",
  
  subheadline:
    "Turn your local business into a professional online brand with a fast, mobile-friendly website designed to help customers discover, contact and order from you.",
  
  city: "Your Local City / Region",
  
  // Format: CountryCode + Number (NO '+' sign or spaces, e.g. "919693799573")
  whatsappNumber: "919693799573",
  
  // Formatted string to display to human visitors
  whatsappDisplayNumber: "+91 96937 99573",
  
  phoneNumber: "+91 96937 99573",
  
  email: "makewebs4u@gmail.com",
  
  // Kept blank as requested; add your handle when ready (e.g. "@makewebs")
  instagramHandle: "",
  
  // Kept blank as requested; add your URL when ready (e.g. "https://instagram.com/makewebs")
  instagramUrl: "",
  
  address: "Main Market Road, City Center (We visit your business directly)",
  
  defaultWhatsAppMessage:
    "Hi MakeWebs, I am interested in getting a website for my business. I would like to see a demo.",
  
  consultationCtaText: "Get a Free Demo",
};

// ------------------------------------------------------------------------------
// 2. VALUE PROPOSITION BULLETS (Trust Section)
// ------------------------------------------------------------------------------
export const valuePoints = [
  {
    title: "Look Professional Online",
    description:
      "When customers search for your business on Google or social media, a polished website immediately establishes trust and credibility.",
  },
  {
    title: "Make It Easy to Contact You",
    description:
      "Direct 1-tap WhatsApp chat, instant calling, and Google Maps directions so customers never have to struggle to reach you.",
  },
  {
    title: "Showcase Your Products & Services",
    description:
      "Display your complete menu, price list, service catalog, and clean photos so customers know exactly what you offer before visiting.",
  },
  {
    title: "Get Your Own Digital Presence",
    description:
      "Own your direct customer channel instead of relying entirely on social media algorithms or third-party listing platforms.",
  },
];

// ------------------------------------------------------------------------------
// 3. CORE SERVICES LIST (All 8 requested services)
// ------------------------------------------------------------------------------
export const servicesList: ServiceItem[] = [
  {
    id: "business-websites",
    title: "Business Websites",
    tagline: "Modern online presence for your local shop or company",
    shortDesc:
      "Custom, fast-loading websites built specifically for local storefronts, service providers, and neighborhood businesses.",
    features: [
      "Custom brand color & typography",
      "About, Services & Contact sections",
      "High-speed loading on all networks",
      "Social media integration",
    ],
    icon: "globe",
  },
  {
    id: "restaurant-cafe",
    title: "Restaurant & Café Websites",
    tagline: "Attract food lovers with visual menus and direct reach",
    shortDesc:
      "Appetizing digital storefronts showcasing your atmosphere, specialties, dining hours, and easy reservation or ordering options.",
    features: [
      "Visual digital food catalog",
      "Table inquiry & party booking",
      "Clear opening hours & kitchen timings",
      "Direct Google Maps location",
    ],
    icon: "utensils",
  },
  {
    id: "digital-menus",
    title: "Digital Menus",
    tagline: "QR code readable menus with zero printed paper reprints",
    shortDesc:
      "Clean, mobile-optimized digital menus that customers can open instantly on their smartphones via QR code or direct link.",
    features: [
      "Categorized food & drink sections",
      "Clear pricing with dietary tags",
      "Instant price or item updates",
      "Works on any mobile browser without an app",
    ],
    icon: "menu",
  },
  {
    id: "whatsapp-ordering",
    title: "WhatsApp Contact / Ordering",
    tagline: "Direct customer orders sent straight to your phone",
    shortDesc:
      "One-click WhatsApp integration allowing customers to inquire, reserve, or place takeaway orders directly into your WhatsApp chat.",
    features: [
      "Pre-filled item & order details",
      "Zero per-order commission fees",
      "Direct relationship with your customer",
      "Instant confirmation directly on chat",
    ],
    icon: "message-circle",
  },
  {
    id: "google-maps",
    title: "Google Maps & Location Integration",
    tagline: "Help local customers walk straight into your store",
    shortDesc:
      "Seamless interactive map embedding and directions links so local foot traffic can easily locate your physical store or venue.",
    features: [
      "Embedded interactive map",
      "1-tap 'Get Directions' button",
      "Landmark & parking guidelines",
      "Synced Google Business Profile link",
    ],
    icon: "map-pin",
  },
  {
    id: "mobile-friendly",
    title: "Mobile-Friendly Design",
    tagline: "Pixel-perfect experience on Android phones and iPhones",
    shortDesc:
      "Over 85% of local searches happen on mobile devices. Every site we build is thoroughly tested and optimized for all phone screen sizes.",
    features: [
      "Smooth vertical thumb navigation",
      "Fast tap buttons & readable text",
      "Ultra-lightweight data usage",
      "Works on 4G and spotty connections",
    ],
    icon: "smartphone",
  },
  {
    id: "basic-seo",
    title: "Basic SEO Setup",
    tagline: "Be discovered when nearby customers search on Google",
    shortDesc:
      "Foundational on-page search engine optimization so your business appears when people search for your category in your town.",
    features: [
      "Local title tags & meta descriptions",
      "Google Search Console registration",
      "Clean semantic HTML structure",
      "Fast Core Web Vitals performance",
    ],
    icon: "search",
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    tagline: "Continuous updates so your site is never outdated",
    shortDesc:
      "Worry-free maintenance packages to update your prices, seasonal menus, festive offers, phone numbers, and gallery photos whenever you need.",
    features: [
      "Prompt menu & price adjustments",
      "Security & uptime monitoring",
      "Holiday & festive banner updates",
      "Priority WhatsApp technical support",
    ],
    icon: "wrench",
  },
];

// ------------------------------------------------------------------------------
// 4. DEMO PORTFOLIO PROJECTS
// Note: Clearly labelled as DEMO PROJECTS. Fictional examples demonstrating
// real-world layout, typography, menus, and WhatsApp ordering.
// ------------------------------------------------------------------------------
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "urban-bites",
    name: "Urban Bites",
    category: "Restaurant & Bistro",
    categorySlug: "restaurant",
    shortDesc:
      "Modern bistro website featuring an interactive digital food menu, table reservation inquiry, and direct WhatsApp takeaway ordering.",
    fullDesc:
      "A rich dining concept built for upscale casual eateries. Customers can browse chef specials, tap individual menu items, and send an organized order list directly to the restaurant's kitchen WhatsApp number.",
    features: [
      "Categorized food & beverage menu",
      "Direct 1-tap WhatsApp ordering",
      "Kitchen hours & weekend brunch timings",
      "Google Maps turn-by-turn directions",
    ],
    image: urbanBitesImg,
    isDemo: true,
    whatsappDemoMessage:
      "Hi! I liked the Urban Bites restaurant demo. Can you show me how a website like this would work for my restaurant?",
  },
  {
    id: "sweet-cravings",
    name: "Sweet Cravings",
    category: "Artisan Bakery & Pastry Shop",
    categorySlug: "bakery",
    shortDesc:
      "Mouthwatering bakery showcase with custom birthday cake inquiry, pastry flavor catalog, and celebratory gift packaging.",
    fullDesc:
      "Designed specifically for bakeries and home bakers. Highlights signature cakes, daily freshly baked breads, and allows clients to send cake flavor & weight inquiries directly via WhatsApp.",
    features: [
      "Custom celebration cake gallery",
      "Daily fresh-bake availability list",
      "Pre-order for birthdays & anniversaries",
      "Clear allergy & dietary labels (Eggless/Gluten-Free)",
    ],
    image: sweetCravingsImg,
    isDemo: true,
    whatsappDemoMessage:
      "Hi! I saw the Sweet Cravings bakery demo. I run a bakery/cake shop and would love a website demo.",
  },
  {
    id: "fitzone-gym",
    name: "FitZone",
    category: "Gym & Fitness Studio",
    categorySlug: "fitness",
    shortDesc:
      "High-energy fitness studio site highlighting membership tiers, trainer credentials, daily batch timings, and 1-day free trial booking.",
    fullDesc:
      "Tailored for local gyms, crossfit boxes, and yoga studios. Focuses on converting visitors into physical walk-ins through a frictionless 'Book Free Trial Pass on WhatsApp' CTA.",
    features: [
      "Morning & evening batch schedule",
      "Membership pricing breakdown",
      "Trainer profile highlights",
      "1-tap Free Trial pass request on WhatsApp",
    ],
    image: fitzoneGymImg,
    isDemo: true,
    whatsappDemoMessage:
      "Hi! I checked out the FitZone gym demo. I want a modern website for my gym/fitness studio.",
  },
  {
    id: "style-studio",
    name: "Style Studio",
    category: "Hair Salon & Luxury Spa",
    categorySlug: "salon",
    shortDesc:
      "Minimalist salon website displaying treatment rate cards, bridal packages, hair transformations, and WhatsApp appointment booking.",
    fullDesc:
      "Engineered for salons, spas, and beauty parlours looking to reduce no-shows. Clean service price list and instant appointment slot requests sent directly to the reception phone.",
    features: [
      "Hair, skin, and spa service price menu",
      "Bridal & festive styling packages",
      "Stylist portfolio gallery",
      "Direct WhatsApp appointment request",
    ],
    image: styleSalonImg,
    isDemo: true,
    whatsappDemoMessage:
      "Hi! I loved the Style Studio salon demo. I'd like to discuss a website for my salon/spa.",
  },
  {
    id: "bright-academy",
    name: "Bright Academy",
    category: "Coaching & Tuition Institute",
    categorySlug: "education",
    shortDesc:
      "Professional academic website highlighting courses offered, faculty background, batch timings, and WhatsApp admission inquiry.",
    fullDesc:
      "Built for local coaching institutes, tutoring centers, and music/dance schools. Builds trust with parents through clear curriculum outlines, batch schedules, and fast WhatsApp admission help.",
    features: [
      "Grade & subject-wise course listings",
      "Batch schedules & fee structure outline",
      "Direct WhatsApp counseling button",
      "Classroom location & timing details",
    ],
    image: brightAcademyImg,
    isDemo: true,
    whatsappDemoMessage:
      "Hi! I reviewed the Bright Academy demo. I run an educational/coaching institute and want a website.",
  },
  {
    id: "royal-sweets",
    name: "Royal Sweets",
    category: "Traditional Sweet Shop & Confectionery",
    categorySlug: "retail",
    shortDesc:
      "Festive confectionery website showcasing traditional mithai assortments, seasonal gift boxes, and bulk corporate order inquiries.",
    fullDesc:
      "Created for heritage sweet shops and dry fruit stores. Helps capture high-value festive gifting orders and wedding bulk orders through a curated digital menu and direct WhatsApp inquiries.",
    features: [
      "Traditional sweets & dry fruit gift box catalog",
      "Festive special pre-ordering system",
      "Bulk order calculation guidance",
      "Hygiene standards & physical store address",
    ],
    image: royalSweetsImg,
    isDemo: true,
    whatsappDemoMessage:
      "Hi! I saw the Royal Sweets demo. I want to build a digital catalog website for my sweet shop/store.",
  },
];

// ------------------------------------------------------------------------------
// 5. WHY CHOOSE US POINTS (Strictly honest, no fake claims)
// ------------------------------------------------------------------------------
export const whyChooseUsPoints = [
  {
    title: "Designed Specifically for Local Businesses",
    description:
      "We understand your local clientele. We design specifically for neighborhood stores, cafes, and service providers who need direct local customers.",
  },
  {
    title: "Mobile-First Architecture",
    description:
      "Every layout is tailored first for smartphone screens. It loads quickly on cellular networks and has thumb-friendly buttons.",
  },
  {
    title: "Fast & Clean Performance",
    description:
      "No heavy bloatware or slow plugins. Your website loads in seconds so customers never drop off while searching.",
  },
  {
    title: "Direct WhatsApp Ordering & Inquiries",
    description:
      "We connect your website directly to your WhatsApp. Orders, table bookings, and inquiries reach your phone instantly.",
  },
  {
    title: "Personalized Design for Your Store",
    description:
      "Your website will reflect your real store atmosphere, colors, photos, and exact product menu rather than a generic template.",
  },
  {
    title: "Affordable & Transparent Packages",
    description:
      "Fair, upfront pricing with zero hidden surprise charges. You own your website and can easily expand it as your business grows.",
  },
  {
    title: "Ongoing Support & Fast Updates",
    description:
      "Need to change a price or add a new menu dish? We are just a message away to keep your website fresh and up to date.",
  },
];

// ------------------------------------------------------------------------------
// 6. SIMPLE 5-STEP PROCESS
// ------------------------------------------------------------------------------
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Tell Us About Your Business",
    duration: "Day 1",
    description:
      "We have a quick conversation over WhatsApp or in person. You share your menu, photos, timings, and business details with us.",
    details: [
      "Share your menu or service list",
      "Provide your contact and address details",
      "Select your preferred look & colors",
    ],
  },
  {
    number: "02",
    title: "We Create Your Custom Design",
    duration: "Day 2–4",
    description:
      "We build your complete mobile-friendly website with digital menus, location map, and WhatsApp buttons ready to test.",
    details: [
      "Mobile-optimized layout crafted",
      "Digital menu & photo gallery configured",
      "WhatsApp ordering logic connected",
    ],
  },
  {
    number: "03",
    title: "You Review the Live Demo",
    duration: "Day 5",
    description:
      "We send you a private preview link. You can open it on your own smartphone and test every button, menu item, and map link.",
    details: [
      "Test on your own mobile phone",
      "Check all menu items & pricing",
      "Verify WhatsApp message formatting",
    ],
  },
  {
    number: "04",
    title: "We Make Revisions",
    duration: "Day 6",
    description:
      "Any adjustments you need—updating photos, changing wording, or adjusting colors—are fine-tuned until you are completely satisfied.",
    details: [
      "Incorporate your feedback",
      "Fine-tune phone numbers and addresses",
      "Double-check speed and responsiveness",
    ],
  },
  {
    number: "05",
    title: "Your Website Goes Live",
    duration: "Day 7",
    description:
      "We link your domain, submit your site to Google, and provide you with a clean QR code you can print for your store tables or counter!",
    details: [
      "Live on your custom web address",
      "Print-ready QR code provided for your counter",
      "Linked to Google Maps & Instagram bio",
    ],
  },
];

// ------------------------------------------------------------------------------
// 7. PRICING PLANS (Completely editable placeholders)
// ------------------------------------------------------------------------------
export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    tier: "STARTER",
    price: "₹4,999",
    priceNote: "One-time setup · Affordable entry",
    description:
      "Ideal for small local shops, tutors, and boutiques needing a clean, professional online identity.",
    popular: false,
    features: [
      "Single-page responsive business website",
      "Mobile-first, fast-loading design",
      "Direct 1-tap WhatsApp inquiry button",
      "Click-to-call phone buttons",
      "Google Maps location embed",
      "Basic SEO & meta tags",
      "Social media links integration",
      "Print-ready QR code for your store counter",
    ],
    ctaText: "Choose Starter",
    whatsappInquiryText:
      "Hi, I am interested in the STARTER website package (₹4,999). Can we discuss details for my business?",
  },
  {
    id: "business",
    tier: "BUSINESS",
    price: "₹9,999",
    priceNote: "Most popular for restaurants, cafes & salons",
    description:
      "The complete package for cafes, restaurants, bakeries, and salons wanting digital menus & direct ordering.",
    popular: true,
    features: [
      "Everything in Starter package",
      "Multi-section layout or multi-page",
      "Full Digital Menu / Service Catalog",
      "WhatsApp Direct Ordering / Booking flow",
      "Photo gallery showcasing your work / food",
      "Customer review & testimonial showcase",
      "Opening hours & kitchen timing banners",
      "Enhanced local Google Maps optimization",
      "1 month of free content & price updates",
    ],
    ctaText: "Choose Business",
    whatsappInquiryText:
      "Hi, I am interested in the BUSINESS website package (₹9,999). Can we discuss details for my business?",
  },
  {
    id: "premium",
    tier: "PREMIUM",
    price: "₹18,999",
    priceNote: "For established brands & multi-location businesses",
    description:
      "Advanced custom features, priority delivery, and custom integrations tailored to your exact workflow.",
    popular: false,
    features: [
      "Everything in Business package",
      "Fully bespoke visual brand identity",
      "Multi-location or franchise branch selector",
      "Advanced digital catalog with search & filters",
      "Custom inquiry lead forms with email alerts",
      "Priority 4-day delivery timeline",
      "3 months of complimentary website maintenance",
      "Dedicated WhatsApp support priority",
    ],
    ctaText: "Choose Premium",
    whatsappInquiryText:
      "Hi, I am interested in the PREMIUM website package (₹18,999). Can we discuss details for my business?",
  },
];

// ------------------------------------------------------------------------------
// 8. FREQUENTLY ASKED QUESTIONS (Concise & honest answers)
// ------------------------------------------------------------------------------
export const faqList: FAQItem[] = [
  {
    question: "How long does it take to build a website?",
    answer:
      "For most local businesses, we deliver a working preview within 3 to 5 business days once you provide your menu, photos, and basic information. Once you approve revisions, the website can go live within 24 to 48 hours.",
  },
  {
    question: "Can you create a website for my restaurant or café?",
    answer:
      "Yes, absolutely. Restaurant and café websites are one of our core specialties. We include beautiful mobile-friendly food menus, categorized dishes, dietary indicators (veg/non-veg), operating hours, location directions, and 1-tap WhatsApp ordering.",
  },
  {
    question: "Can customers contact me or order through WhatsApp?",
    answer:
      "Yes! When a customer taps the WhatsApp button on your website, it automatically opens WhatsApp on their phone with a pre-filled, organized message specifying what they want to order or ask. You receive it directly on your regular WhatsApp number.",
  },
  {
    question: "Can I update my menu or prices later?",
    answer:
      "Yes. We offer fast maintenance support. Whenever you change a price, introduce a seasonal dish, or adjust store timings, simply send us a message on WhatsApp and we will update your live website promptly.",
  },
  {
    question: "Do I need to buy my own domain name (e.g., yourbusiness.com)?",
    answer:
      "You have full flexibility. If you already have a domain, we connect it for you at no extra cost. If you don't have one yet, we will guide you on registering one in your own name (typically costs around ₹800–₹1,000/year from standard registrars like GoDaddy or Namecheap).",
  },
  {
    question: "Do you provide ongoing website maintenance?",
    answer:
      "Yes. We provide affordable monthly or yearly maintenance plans that cover regular text updates, price changes, holiday banners, security checks, and hosting management so you can focus entirely on running your business.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. If your current website is outdated, slow, or doesn't work well on mobile phones, we can completely redesign it from scratch to be modern, fast, and conversion-focused.",
  },
  {
    question: "Can you create a website for a business with no existing online presence?",
    answer:
      "Definitely! Many of our clients start with zero online presence. We will guide you step by step—from deciding what text and photos to put on your website to linking your Google Maps location and Instagram profile.",
  },
];

// ------------------------------------------------------------------------------
// 9. DIRECT RESTAURANT ORDERING FLOW
// ------------------------------------------------------------------------------
export const orderingFlowSteps = [
  {
    step: "01",
    label: "Customer Discovers You",
    desc: "Customer finds your store on Google Maps, Instagram bio, or scans your QR code on a table/counter flyer.",
  },
  {
    step: "02",
    label: "Visits Your Website",
    desc: "Your clean, fast website loads immediately on their smartphone without forcing them to download any app.",
  },
  {
    step: "03",
    label: "Browses Menu & Selects Items",
    desc: "Customer browses your dishes, drinks, or services with clear prices and photos.",
  },
  {
    step: "04",
    label: "Taps WhatsApp Order",
    desc: "With 1 tap, the selected items format neatly into a pre-filled WhatsApp message.",
  },
  {
    step: "05",
    label: "You Receive Order Directly",
    desc: "Your staff receives the order directly on WhatsApp with zero 20–30% platform commission cuts!",
  },
];

// ------------------------------------------------------------------------------
// HELPER UTILITIES FOR WHATSAPP URL GENERATION
// ------------------------------------------------------------------------------
export function getWhatsAppUrl(customMessage?: string): string {
  let cleanPhone = agencyInfo.whatsappNumber.replace(/[^0-9]/g, '');
  if (cleanPhone.length === 10) {
    cleanPhone = `91${cleanPhone}`;
  }
  const message = customMessage || agencyInfo.defaultWhatsAppMessage;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export function getProjectDemoWhatsAppUrl(projectName: string, category: string): string {
  const msg = `Hi! I saw the ${projectName} (${category}) demo on your website. I would like to see how a similar website would look for my business.`;
  return getWhatsAppUrl(msg);
}

export function getPricingWhatsAppUrl(tier: string, price: string): string {
  const msg = `Hi! I am interested in the ${tier} website package (${price}). Can we discuss building a website for my business?`;
  return getWhatsAppUrl(msg);
}

export { heroMockupImg };
