# Professional Web Design Agency Website

A modern, high-converting, fully responsive agency website built specifically to pitch and onboard local businesses (restaurants, cafés, bakeries, salons, gyms, coaching institutes, sweet shops, and boutiques).

---

## 🚀 Key Features

- **Centralized Configuration (`src/config/agency.ts`)**: Change your agency name, WhatsApp number, phone, email, prices, services, and demo projects in **one single file**.
- **Conversion-Driven WhatsApp Funnel**: Instant 1-tap WhatsApp chat buttons with smart pre-filled messages for inquiries, demos, and pricing tiers.
- **Direct Ordering Showcase**: Demonstrates the direct customer channel (Google/QR Code → Website → Menu → WhatsApp → Order in) with an interactive live order calculator.
- **6 Polished Demo Concepts**: Interactive showcase for Restaurants, Bakeries, Gyms, Salons, Coaching Academies, and Sweet Shops, complete with high-resolution imagery and a live preview modal.
- **Honest & Trustworthy Copy**: Zero fake reviews, fake statistics, or misleading claims—crafted specifically to earn trust with local brick-and-mortar store owners.
- **Mobile-First & Ultra Fast**: Clean Tailwind CSS styling, responsive navigation with mobile drawer, and floating WhatsApp access.
- **Production & Vercel Ready**: Clean build without unnecessary backend dependencies or paid APIs. Includes `vercel.json` for seamless SPA routing.

---

## 📁 File Structure

```
├── index.html                  # HTML entry point with SEO metadata and Google Fonts
├── metadata.json               # App metadata
├── package.json                # Project scripts and dependencies
├── vercel.json                 # Vercel SPA routing configuration
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── src/
│   ├── config/
│   │   └── agency.ts           # ⭐️ THE ONLY FILE YOU NEED TO EDIT TO CUSTOMIZE YOUR AGENCY!
│   ├── assets/
│   │   └── images/             # High-res photography assets for demo projects & hero
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky top bar with mobile drawer
│   │   ├── Hero.tsx            # Hero section with interactive phone/desk preview
│   │   ├── TrustValue.tsx      # 4 core value points for local business owners
│   │   ├── ServicesSection.tsx # 8 service cards with icons and WhatsApp triggers
│   │   ├── DirectOrderingSection.tsx # Direct ordering flow + interactive order simulator
│   │   ├── PortfolioSection.tsx # 6 demo projects with filter and preview triggers
│   │   ├── DemoPreviewModal.tsx # Interactive preview modal for demo projects
│   │   ├── WhyChooseUs.tsx     # 7 honest reasons why local owners choose you
│   │   ├── ProcessSection.tsx  # 5-step timeline (Day 1 to Day 7)
│   │   ├── PricingSection.tsx  # Starter, Business, Premium tiers
│   │   ├── FAQSection.tsx      # Accordion for 8 common business owner questions
│   │   ├── ContactSection.tsx  # Contact information & multi-option inquiry form
│   │   ├── FloatingWhatsApp.tsx# Subtle floating WhatsApp button with status pulse
│   │   ├── Footer.tsx          # Agency wordmark, links, legal triggers
│   │   └── LegalModal.tsx      # Privacy Policy and Terms modal
│   ├── App.tsx                 # Main application layout
│   ├── main.tsx                # React root mount
│   └── index.css               # Global Tailwind CSS and typography
└── README.md                   # This documentation guide
```

---

## 🛠️ How to Customize Your Agency Information

You **do not need to search through dozens of files**. All your business details are located in:

👉 `src/config/agency.ts`

### 1. Update Your Business Details
Open `src/config/agency.ts` and edit the `agencyInfo` object:
```typescript
export const agencyInfo = {
  name: "Your Brand Name",           // Your agency's name
  whatsappNumber: "919876543210",    // Your phone with country code (NO '+' or spaces)
  whatsappDisplayNumber: "+91 98765 43210", // Formatted phone shown to visitors
  phoneNumber: "+91 98765 43210",    // Calling phone number
  email: "hello@youragency.com",     // Your business email
  instagramHandle: "@youragency",    // Your Instagram handle
  instagramUrl: "https://instagram.com/youragency",
  address: "Main Market Road, City Center",
  city: "Your City Name",
};
```

### 2. Update Pricing Tiers
In `src/config/agency.ts`, scroll to `pricingPlans`:
- Edit `price` (e.g. `₹4,999`, `₹9,999`, or any currency).
- Modify included features as your offerings expand.

### 3. Replace Demo Projects with Real Client Sites
When you launch actual client websites, update the `portfolioProjects` array in `src/config/agency.ts`. You can set `isDemo: false` and supply the client's actual website in `demoUrl`.

---

## 💻 Running Locally

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or yarn

### Steps
1. Open a terminal in the project directory:
   ```bash
   npm install
   ```
2. Start the local development server:
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to:
   `http://localhost:3000`

4. To test a production build:
   ```bash
   npm run build
   npm run preview
   ```

---

## 🌐 Deploying to GitHub

1. Initialize git in your local directory (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Local business web design agency website"
   ```
2. Create a new repository on [GitHub](https://github.com/new).
3. Link your remote repository and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

---

## ⚡ Deploying to Vercel (Free & Instant)

1. Log in to [Vercel](https://vercel.com).
2. Click **"Add New..."** → **"Project"**.
3. Import your GitHub repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your website will be live in under 1 minute with a custom URL and free SSL!
6. (Optional) Connect your custom domain in Vercel under **Project Settings → Domains**.

---

## 📬 Connecting the Contact Form (Optional)

The contact form currently formats all details and offers an instant **"Send via WhatsApp"** button, ensuring you receive leads immediately on your phone.

If you also want submissions emailed to you via a backend service without running a server:
1. Sign up for a free service like [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
2. In `src/components/ContactSection.tsx`, find the `handleSubmit` function.
3. Uncomment or add the 4-line `fetch()` call:
   ```typescript
   await fetch("https://formspree.io/f/YOUR_FORM_ID", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(formData)
   });
   ```
