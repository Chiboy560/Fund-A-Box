# Fund‑A‑Box

Empowering community involvement to make creating community or personal gardens effortless and accessible.

## What it does

Fund‑A‑Box is a React web app that helps people plan, grow, and share community gardens.

Current features:

- **Onboarding Home + Seasonal Guide** — friendly, actionable growing tips for popular crops.
- **Plant Identification (image upload)** — uses the Plant.id API to ID a plant and show likely matches/details.
- **Gardening Chat (Q&A)** — ask follow‑ups about the identified plant via Plant.id Conversations.
- **Nearby Food Distribution Map** — Google Maps (Places) to locate food distribution centers near South Bend, IN.
- **Feed (cards)** — scaffold for community posts (connect to Firestore).
- **Donations (multi‑step UI)** — placeholder flow for monetary/in‑kind donations.
- **Auth & Session** — Firebase (Email/Password + Google), with protected app shell and logout.
- **Responsive UI** — Tailwind + Bootstrap + Lucide icons; mobile‑friendly navbar & loading screen.

## 🧱 Tech stack

- **Frontend**: React 19 + Vite 6, React Router 7
- **Styling**: Tailwind CSS 4, Bootstrap 5, custom CSS
- **APIs/Libraries**: Google Maps JavaScript API (Places), Axios, Lucide
- **Platform**: Firebase (Auth, Analytics, Firestore scaffolded)
- **Build**: ESLint, PostCSS/Autoprefixer
## 🔑 Service configuration (quick notes)

## 📂 Project structure (high level)

```
FundABox/
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ LoadingScreen.jsx
│  │  ├─ auth.jsx
│  │  ├─ card.jsx
│  │  ├─ plantID.jsx
│  │  └─ chatbot.jsx
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ Guide.jsx
│  │  ├─ Feed.jsx
│  │  ├─ Donate.jsx
│  │  └─ Map.jsx
│  ├─ config/firebase.jsx
│  ├─ App.jsx, main.jsx, index.css
│  └─ styles/
└─ index.html, package.json, vite config, etc.
```

## 🛣️ Roadmap / next steps

- Wire **Feed** to Firestore (CRUD posts with images, tags, likes).
- Replace hard‑coded API keys with **`.env`** variables and add key restrictions.
- Add **Stripe** (or other) for real donation processing.
- Add **location search / user geolocation** on the map.
- Persist plant chats and identifications per user.
- Add e2e tests (Playwright) and CI for build & lint.
