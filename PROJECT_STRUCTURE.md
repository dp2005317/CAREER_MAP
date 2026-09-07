# CareerMap AI — Project Structure

> **Framework:** Next.js 16 (Full-Stack React)  
> **Deployment:** Vercel  
> **Database:** Firebase Cloud Firestore  
> **AI:** Mistral AI (Resume Parsing)

---

## 📁 Root Directory

```
CAREER_MAP/
├── src/                     # All source code (see below)
├── public/                  # Static assets (images, fonts)
├── .env.local               # Environment variables (API keys)
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies & scripts
├── vercel.json              # Deployment configuration
├── tsconfig.json            # TypeScript settings
└── PROJECT_STRUCTURE.md     # This file
```

---

## 🎨 FRONTEND — `src/app/` & `src/components/`

### `src/app/` — Pages & Routes (Next.js file-based routing)
| File / Folder | Purpose |
|---|---|
| `page.tsx` | Landing page (homepage) |
| `layout.tsx` | Root layout (wraps all pages with AuthProvider) |
| `globals.css` | Global styles & design system |
| `login/page.tsx` | Login / Sign-up page (Google, GitHub, Email) |
| `dashboard/page.tsx` | Main dashboard (jobs, map, search, saved jobs) |
| `courses/page.tsx` | Free courses catalog with filters |
| `courses/[id]/page.tsx` | Individual course classroom with video player |
| `profile/page.tsx` | User profile page |

### `src/components/` — Reusable UI Components
| Folder | Contents |
|---|---|
| `layout/` | `AppSidebar.tsx`, `DashboardHeader.tsx` — app shell & navigation |
| `views/` | `AllJobsView.tsx`, `SavedJobsView.tsx`, `CompaniesView.tsx`, `SearchView.tsx`, `StudentDashboardView.tsx` — dashboard tab panels |
| `courses/` | `CourseCard.tsx`, `FilterSidebar.tsx`, `CertificateModal.tsx`, `RecommendationSection.tsx` — course UI |
| `jobs/` | `JobCardRow.tsx`, `JobDetailOverlay.tsx` — job listing cards |
| `maps/` | `InteractiveMap.tsx` — geographic job map (Leaflet) |
| `profile/` | `UserProfileDrawer.tsx`, `OnboardingModal.tsx`, `ProfileSettings.tsx` — profile & resume |
| `ui/` | `button.tsx` — shared UI primitives |

---

## ⚙️ BACKEND — `src/app/api/` & `src/backend/`

### `src/app/api/` — Server API Routes (Next.js serverless functions)
| Route | Purpose |
|---|---|
| `api/jobs/route.ts` | Fetches live job listings from JSearch / RapidAPI |
| `api/parse-resume/route.ts` | Accepts PDF → extracts text → Mistral AI → returns parsed skills & projects |

### `src/backend/` — Business Logic & Utilities
| File | Purpose |
|---|---|
| `recommendations.ts` | AI-powered job & course recommendation engine (skill matching) |
| `jobUrls.ts` | Maps companies to their real career page URLs |
| `mockData.ts` | Job data types & fallback mock job generator |
| `resume/` | Resume parsing helper utilities |

---

## 🗄️ DATABASE — `src/database/`

### Firebase & Cloud Firestore
| File | Purpose |
|---|---|
| `config.ts` | Firebase app initialization (Firestore + Auth instances) |
| `authContext.tsx` | React Context Provider — handles authentication (Google, GitHub, Email, Guest), user profile CRUD, course progress tracking, certificate management, all synced to Firestore |

### Firestore Collections
| Collection | Key Fields |
|---|---|
| `users/{uid}` | `displayName`, `email`, `skills[]`, `targetRole`, `experienceLevel`, `preferredLocation`, `projects[]`, `resumeName`, `courseProgress{}`, `certificates[]` |

---

## 📊 DATA — `src/data/`

### Static Course Catalog & Type Definitions
| File | Purpose |
|---|---|
| `data.ts` | Hardcoded course catalog (8 courses from Harvard, Stanford, MIT, Google, AWS, IBM, FreeCodeCamp, Meta — with real YouTube playlists & module-level video IDs) |
| `types.ts` | TypeScript interfaces: `Playlist`, `Category`, `Company`, `LearningFilters`, `Resource`, `LearningPath` |
| `classroomData.ts` | YouTube embed URL logic, per-course video ID mapping, course module generation |
| `jobs.json` | Company metadata (logos, descriptions, HQ locations) |

---

## 🔧 UTILITIES — `src/lib/`

| File | Purpose |
|---|---|
| `utils.ts` | General helper functions (e.g., `cn()` for classnames) |

---

## 🏗️ Architecture Diagram

```
┌─────────────────────────────────────────────────┐
│               FRONTEND (src/app + src/components)│
│  Pages: Landing, Login, Dashboard, Courses, Profile│
│  Components: Sidebar, Header, JobCards, CourseCards │
│  Maps: Leaflet interactive job map                 │
├─────────────────────────────────────────────────┤
│               BACKEND (src/app/api + src/backend)  │
│  API Routes: /api/jobs, /api/parse-resume          │
│  Logic: Recommendations engine, Job URL resolver   │
│  AI: Mistral AI resume parsing                     │
├─────────────────────────────────────────────────┤
│               DATABASE (src/database)              │
│  Firebase Auth: Google, GitHub, Email, Guest       │
│  Cloud Firestore: User profiles, progress, certs  │
├─────────────────────────────────────────────────┤
│               DATA (src/data)                      │
│  Course catalog: 8 university/industry courses     │
│  Types: TypeScript interfaces & schemas            │
│  Video mapping: Per-lesson YouTube video IDs       │
└─────────────────────────────────────────────────┘
```

---

## 🔑 Environment Variables (`.env.local`)

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase config (public) |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase Auth domain |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firestore project |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase storage |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | FCM sender |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase app ID |
| `RAPIDAPI_KEY` | JSearch job API key |
| `MISTRAL_API_KEY` | Mistral AI for resume parsing |
