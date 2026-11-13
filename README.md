# ResQLink Web

Public-facing landing page for the **ResQLink** emergency response platform, with an interactive LGU command dashboard demo.

**Live site:** [resqlink-ph.vercel.app](https://resqlink-ph.vercel.app)

The Flutter web interface lives separately at
[resqlink-app.vercel.app](https://resqlink-app.vercel.app). As verified on
2026-10-17, configured backend domains do not resolve and online sign-in/response
flows are unavailable. The standalone demo uses bundled simulated data.

There is no public Android release offered by this source. APK distribution
remains blocked by the tracked licensing, credential, signing and device gates.

## Stack

- **Vite 6** + React 18 + TypeScript
- **Tailwind CSS 4** + shadcn/ui (52 Radix UI primitives)
- **recharts** for KPI charts
- **react-router 7** for client-side routing
- **Lucide React** for icons

## Prerequisites

- **Node.js** v22+ and npm; local checks and the Docker builder use Node 22.

## Getting Started

### 1. Install dependencies

```bash
npm ci
```

### 2. Environment

No `.env` or backend account is required for this static portfolio/demo. The
legacy `VITE_APPWRITE_*` template keys are unused by the source. Do not put
server credentials into any Vite variable: browser configuration is public.

### 3. Run

```bash
# Development
npm run dev               # http://localhost:3000

# Or use the run script
./run.sh                  # Dev server
./run.sh release          # Production build
./run.sh preview          # Preview production bundle locally
```

### 4. Build for production

```bash
npm run build             # Outputs to build/
npm run check             # Unit/regression tests, then production build
npm run preview           # Serves build/ locally; no browser auto-open
```

## Project Structure

```
src/
├── main.tsx                    React Router setup (/, /terms-and-conditions)
├── App.tsx                     Landing page orchestrator
├── index.css                   Tailwind imports
├── styles/globals.css          Theme variables (OKLCH colors, dark mode)
├── components/
│   ├── Navigation.tsx          Sticky header, accessible mobile menu, anchor links
│   ├── HeroSection.tsx         Hero with gradient backgrounds and CTAs
│   ├── Achievements.tsx        InfoTech Productivity Champion badge + photos
│   ├── FeaturesShowcase.tsx    12+ feature cards (SOS, AI Triage, BLE Mesh, etc.)
│   ├── AITriageFlow.tsx        3-step AI triage visualization
│   ├── DashboardPreview.tsx    Interactive demo mode with animated LGU dashboard
│   ├── PlatformOverview.tsx    Citizen / Rescuer / LGU platform cards
│   ├── SDGSection.tsx          UN SDG 11 & 13 impact section
│   ├── AppAvailabilitySection.tsx  Availability and demo links
│   ├── figma/
│   │   └── ImageWithFallback.tsx  Image component with fallback
│   └── ui/                     52 shadcn/ui primitives (button, card, dialog, etc.)
├── context/
│   └── DemoModeContext.tsx     Demo mode toggle (isDemoActive, activateDemo, etc.)
├── hooks/
│   └── useScenarioPlayback.ts  Scenario simulation engine (1s tick, 300s loop)
├── pages/
│   └── terms-and-conditions.tsx  Terms & Conditions page
├── utils/
│   └── seo.ts                  SEO meta tags, Open Graph, JSON-LD structured data
└── assets/
    ├── logos/                  App icons (adaptive, hdpi–xxxhdpi)
    │   └── sdg/                UN SDG goal icons
    ├── data/scenarios/
    │   └── disaster_scenario_1.json  Demo playback data (10 incidents, 14 events)
    └── *.jpg, *.png            Achievement section photos, InfoTech logo

public/
├── resqlink-icon.png           Public favicon and social preview image
├── robots.txt                  Crawl directives + sitemap reference
├── sitemap.xml                 2 URLs (/, /terms-and-conditions)
├── .well-known/assetlinks.json Android deep link verification
└── recovery.html               Error recovery page

```

## Landing Page Sections

1. **Navigation** — Sticky header with logo, nav links, mobile hamburger menu
2. **Hero** — "Actionable Intelligence when lives depend on it" + CTAs
3. **Achievements** — Photo backgrounds + InfoTech Productivity Champion badge
4. **Features** — SOS Reporting, AI Triage, Grab-Style Matching, BLE Mesh, and more
5. **AI Triage Flow** — 3-step visual: Report Submission → AI Summarization → Smart Reranking
6. **Dashboard Preview** — Interactive demo mode with live KPIs, incident cards, responder roster
7. **Platforms** — Citizen Portal, Rescuer Dashboard, LGU Command Center
8. **SDG Impact** — UN Goals 11 (Sustainable Cities) & 13 (Climate Action)
9. **Availability** — Android release unavailable, backend status and demo/web links
10. **Contact/Footer** — Emergency hotline, support emails, partnership inquiries

## Demo Mode

Self-contained scenario playback — no API calls required.

- **Entry**: Demo navigation/hero links lead to the dashboard; use Start Simulated Demo.
- **Playback**: `useScenarioPlayback` hook drives 1-second ticks over a 300-second loop
- **Features**: Live incident spawning, KPI calculations, status changes, responder assignments
- **Data**: `src/assets/data/scenarios/disaster_scenario_1.json` (Typhoon Luzon — 10 incidents, 3 rescue teams, 14 timeline events)

## SEO

- Open Graph + Twitter Card meta tags
- JSON-LD structured data (Organization, SoftwareApplication, BreadcrumbList)
- Sitemap at `/sitemap.xml`
- Robots.txt with crawl directives

## Environment

| File           | Purpose                                  |
| -------------- | ---------------------------------------- |
| `.env.example` | Historical unused Appwrite client-key template |
| `.env`         | Optional legacy local file; not required or loaded by the app |

Public availability text and the Flutter URL are centralized in
`src/utils/availability.ts`. There is no waitlist submission or APK delivery
flow. The terms page is clearly marked as archived thesis-beta terms.

## Docker

Multi-stage build: Node 22/npm lockfile → Nginx serving `build/` with SPA fallback.
The Docker context excludes environments, Git metadata and generated outputs.

```bash
docker build -t resqlink-web .
docker run --rm -p 127.0.0.1:8088:80 resqlink-web
```

No production environment file is required. Local `.env*` files are excluded
from the context; only the non-secret `.env.example` template is retained.

## Authors

- VILLAROSA, Jam Emmanuel A. — Project Manager & Lead Developer
- TENORIO, Rallon Phillip - Research Lead
- CUIZON, Antoinette — QA Lead
- SIAZON, Mark Angelo - Product Designer & Full-Stack Developer

All four are equal copyright holders. Commit counts are not a measure of
contribution; research, documentation, and QA may not appear in `git log`.

## License

**All rights reserved.** © 2025-2026 the authors above. See [LICENSE](LICENSE).

This repository is public so the work can be read and referenced. That is not
a grant of permission to use, copy, modify, or redistribute it.

---

_Last updated: 2026-08-19_
