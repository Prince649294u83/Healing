# 🌿 Matangi Healings

> A modern, full-featured holistic healing website for **Dr. Anushka Manoharlal** — Award-winning healer with 15+ years of expertise in holistic healing, energy work, and spiritual guidance.

---

## ✨ Features

- **Video Hero Section** — Immersive autoplay background video on the homepage
- **Fully Localized Assets** — Zero external CDN dependencies; all images & videos bundled locally
- **14 Service Pages** — Akashic Reading, Past Life Therapy, Reiki, Tibetan Healing, Karmic Healing, Vastu Reading, Counselling, Srividya Classes, and more
- **Framer Motion Animations** — Smooth entrance animations throughout with reduced-motion support
- **Impact / Stats Section** — Animated stat cards, live marquee of healing pillars
- **Testimonials Carousel** — Embla-powered infinite carousel
- **Contact Form** — Zod-validated with WhatsApp deep-link integration
- **FAQ Accordions** — On both Services and Contact pages
- **Fully Responsive** — Mobile-first, works across all screen sizes

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Forms | React Hook Form + Zod |
| Routing | Wouter |
| Carousel | Embla Carousel |
| Package Manager | pnpm (workspace) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm 8+

### Install dependencies
```bash
pnpm install
```

### Start development server
```bash
pnpm --filter @workspace/matangi-healings run dev
```

The app will be available at `http://localhost:5173`

### Build for production
```bash
pnpm --filter @workspace/matangi-healings run build
```

---

## 📁 Project Structure

```
artifacts/matangi-healings/
├── src/
│   ├── assets/
│   │   ├── home/          # Hero video, home page images
│   │   └── services/      # Service-specific images (14 total)
│   ├── pages/
│   │   ├── home.tsx       # Homepage with video hero & impact section
│   │   ├── about.tsx      # About Dr. Anushka
│   │   ├── services.tsx   # All 14 services with cards
│   │   └── contact.tsx    # Contact form + WhatsApp integration
│   └── components/        # Shared UI components
├── package.json
└── vite.config.ts
```

---

## 📞 Contact

**Dr. Anushka Manoharlal**  
📧 anushkaheals@gmail.com  
📱 +91 8151926422  
📍 Sangeeta Apartment, Malleswaram, Bangalore — 560003
