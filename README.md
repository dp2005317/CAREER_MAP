# 🗺️ CareerMap AI

> **Spatial Career Discovery & Real-Time Job Intelligence across India powered by Mistral AI & Tavily Search.**

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Mistral AI](https://img.shields.io/badge/Mistral%20AI-Small-FF7000?style=flat-square)](https://mistral.ai/)
[![Tavily](https://img.shields.io/badge/Tavily-Web%20Search-4285F4?style=flat-square)](https://tavily.com/)
[![Mapbox](https://img.shields.io/badge/Mapbox-GL-000000?style=flat-square&logo=mapbox)](https://www.mapbox.com/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel)](https://careermap-ai.vercel.app)

---

## 🌟 Overview

**CareerMap AI** reimagines how students and professionals find software engineering jobs and internships in India. Instead of scrolling through infinite text-heavy job boards, CareerMap presents an **interactive 3D spatial map** that geolocates users and uncovers nearby opportunities in real time.

By combining **Tavily Web Search** and **Mistral AI (`mistral-small-latest`)**, the platform continuously searches the web for fresh postings across major Indian tech hubs, heavily targeting MAANG companies and direct application platforms. The extracted opportunities are structured into JSON data with verified, working application links.

---

## 🚀 Key Features

- **📍 Geolocation-Driven Discovery**: Automatically detects your coordinates via browser geolocation and calculates your distance to job postings.
- **🤖 AI-Powered Data Pipeline (Mistral + Tavily)**:
  - **Offline Generation Script**: Uses Tavily for deep web searches in target cities (including explicit MAANG targeting) and Mistral AI to parse unstructured search results into standard JSON.
  - **Graceful Geocoding**: Places valid physical office locations on the map, while remote or vague locations gracefully appear at the bottom of the list without polluting the map.
- **📏 Distance-Based Sorting**: The backend API dynamically sorts jobs closest to the user's current location to prioritize local opportunities.
- **✨ Neumorphic Soft UI & Apple Typography**: High-aesthetic visual design with dual-shadow Neumorphism / Soft UI controls, soft-inset search bars, and electric blue glowing action buttons, paired with native Apple typography (`-apple-system`, San Francisco).
- **🏢 Comprehensive Tech Leader Coverage**: Curated, verified roles from global tech giants (Google, Microsoft, Apple, Amazon, Meta, Intel, Samsung, Cisco, Qualcomm), Indian unicorns (Flipkart, Zomato, Swiggy, PhonePe, Razorpay), and IT leaders (TCS, Infosys, Wipro).
- **🎯 5 Dedicated Interactive Views**:
  - **Map Discovery**: Daylight map with live proximity sorting.
  - **Search**: Live title & domain filtering.
  - **Saved Jobs**: LocalStorage-persisted bookmarks.
  - **Companies Directory**: Aggregated hiring directory with role counts and direct official career portals.
  - **All Jobs Grid**: Searchable grid view with role type filters.
- **🔗 Deep-Linked Official Applications**: Exact search queries and direct 1-click ATS application portals (Greenhouse, Lever, Workday) with zero aggregator redirects.
- **🔐 Firebase Authentication**: Seamless Google and GitHub OAuth sign-in flow with Cloud Firestore integration.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/), [React 19](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling & Motion** | [Tailwind CSS v4](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/), [Lucide React](https://lucide.dev/) |
| **Mapping Engine** | [Mapbox GL](https://www.mapbox.com/), [MapLibre GL](https://maplibre.org/), [React Map GL](https://visgl.github.io/react-map-gl/) |
| **AI & Search** | [Mistral AI API](https://mistral.ai/) (`mistral-small-latest`), [Tavily Search API](https://tavily.com/) |
| **Backend / Auth / DB** | Next.js Edge-ready Route Handlers, [Firebase Auth](https://firebase.google.com/products/auth), [Cloud Firestore](https://firebase.google.com/products/firestore) |
| **Deployment** | [Vercel](https://vercel.com/) (Serverless & Edge Network) |

---

## 📂 Project Structure

```text
Carrer_Map/
├── public/                     # Static assets & icons
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── jobs/
│   │   │       └── route.ts    # Reads jobs.json and dynamically sorts by distance to user
│   │   ├── dashboard/
│   │   │   └── page.tsx        # Main map dashboard with live jobs & filters
│   │   ├── login/
│   │   │   └── page.tsx        # Firebase OAuth login page (Google & GitHub)
│   │   ├── globals.css         # Glassmorphism utilities & global styles
│   │   ├── layout.tsx          # Root layout & font definitions
│   │   └── page.tsx            # Landing page hero
│   ├── components/
│   │   ├── jobs/
│   │   │   ├── JobDetailOverlay.tsx # Overlay modal with job specs & Apply link
│   │   │   └── JobSidebar.tsx       # Searchable sidebar with role filters
│   │   ├── layout/
│   │   │   ├── AnimatedBackground.tsx # Fluid ambient background
│   │   │   ├── LiquidGlass.tsx        # Reusable frosted glass wrapper
│   │   │   └── LiquidNavbar.tsx       # Pill navbar component
│   │   └── maps/
│   │       └── InteractiveMap.tsx     # Mapbox 3D interactive map
│   └── lib/
│       ├── firebase/
│       │   └── config.ts       # Firebase client SDK initialization
│       └── data/
│           └── jobs.json       # Generated structured job data
├── scripts/
│   └── generate_jobs.js        # Offline Node.js script to fetch & compile jobs via Tavily/Mistral
├── .env.local                  # Local environment configuration
├── firebase.json               # Firebase Firestore & functions configuration
├── package.json                # Project dependencies & scripts
├── vercel.json                 # Vercel deployment configuration
└── README.md                   # Project documentation
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
# Mapbox Geocoding & Maps
NEXT_PUBLIC_MAPBOX_TOKEN="your_mapbox_public_token"

# AI & Web Search APIs
MISTRAL_API_KEY="your_mistral_api_key"
TAVILY_API_KEY="your_tavily_api_key"

# Firebase Client Configuration
NEXT_PUBLIC_FIREBASE_API_KEY="your_firebase_api_key"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your_project.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="your_project_id"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your_project.firebasestorage.app"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your_sender_id"
NEXT_PUBLIC_FIREBASE_APP_ID="your_app_id"
```

> **Note for Production Deployments**: When deploying to Vercel, ensure you add `MISTRAL_API_KEY` and `TAVILY_API_KEY` in **Vercel Project Settings → Environment Variables**.

---

## 🏃 Getting Started Locally

### 1. Clone & Install Dependencies

```bash
git clone <repository-url>
cd Carrer_Map
npm install
```

### 2. Configure Environment

Ensure your `.env.local` contains valid API keys for Mapbox, Mistral AI, and Tavily.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📡 API Reference

### `GET /api/jobs`

Returns the pre-generated jobs dataset from `jobs.json`, calculating the Haversine distance from the user's coordinates and returning the list sorted from nearest to farthest. Jobs without physical coordinates are placed at the bottom.

#### Query Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `lat` | `number` | Yes | Latitude of the target location (e.g., `12.9716`) |
| `lng` | `number` | Yes | Longitude of the target location (e.g., `77.5946`) |

#### Sample Response

```json
{
  "jobs": [
    {
      "id": "job_1",
      "title": "Software Development Engineer - Frontend",
      "company": "Tech Innovations India",
      "location": "Bengaluru, Karnataka, India",
      "lat": 12.9782,
      "lng": 77.5991,
      "type": "Full Time",
      "salary": "₹14L - ₹22L/yr",
      "postedAt": "2d ago",
      "logo": "https://ui-avatars.com/api/?name=Tech+Innovations&background=random&color=fff&rounded=true",
      "description": "Join our frontend engineering team to build next-generation high-performance web applications using React and Next.js.",
      "url": "https://careers.example.com/jobs/frontend-sde"
    }
  ]
}
```

### Running the Data Pipeline

To refresh the job database manually, run the offline generation script:

```bash
npm run generate:jobs
```

This updates `src/lib/data/jobs.json` with fresh listings.

---

## 🚢 Deployment

The application is deployed on Vercel with automatic Edge route handling:

```bash
npx vercel --prod
```

Live Production URL: [https://careermap-ai.vercel.app](https://careermap-ai.vercel.app)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
