# Lucas Washington — Portfolio (Executive Edition, Blue)

A fast, interview-ready portfolio built with React, Vite, and Tailwind. It showcases Shopify builds, full-stack apps, E2E testing, and real demos. Includes dark mode, tag filters, quick details modal, and a polished hero collage.

> Live demo (GitHub Pages): `https://LWashington6935.github.io/lucas-portfolio-exec-blue/`
> Repo: `https://github.com/LWashington6935/lucas-portfolio-exec-blue`

---

## Highlights

* Modern stack: **React 18**, **Vite**, **Tailwind CSS**
* Clean **hero collage** (Shopify, React, JS, APIs, AWS, CompTIA)
* **Theme toggle** with localStorage
* **Project filters** by tags and search
* **Quick details modal** for each project
* One-click **resume download**
* Easy deploy to **GitHub Pages** or **Vercel**

---

## Tech Stack

* Frontend: React 18, Vite, Tailwind
* Assets: WebP hero collage, responsive layout
* State: React hooks and memoization
* Tooling: gh-pages for GitHub Pages
* Optional: Playwright test links, YouTube demo links

---

## Screenshots

Hero collage (fits perfectly to image):

```
public/hero-collage.webp
```

If you want device mockups instead, swap in `HeroMedia`’s device layout version.

---

## Quick Start

```bash
# 1) Install
npm install

# 2) Run locally
npm run dev

# 3) Build
npm run build
npm run preview
```

Requirements: Node 18 or newer.

---

## Project Structure

```
.
├─ public/
│  ├─ hero-collage.webp         # hero image used in HeroMedia
│  └─ resume/Lucas_Washington_Resume.pdf
├─ src/
│  ├─ App.jsx                   # exports PortfolioExecBlue
│  └─ components/
│     └─ HeroMedia.jsx          # hero image component
├─ package.json
├─ vite.config.js
└─ tailwind.config.js
```

---

## Configuration

### Vite base (needed for GitHub Pages)

Set the repo name as base so routes and assets work under `username.github.io/repo`.

```js
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/lucas-portfolio-exec-blue/",
});
```

### Hero image path (works locally and on Pages)

```jsx
// src/components/HeroMedia.jsx
import React from "react";

export default function HeroMedia() {
  const heroSrc = `${import.meta.env.BASE_URL}hero-collage.webp`; // file in public/

  return (
    <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-900 dark:border-zinc-800">
      <img
        src={heroSrc}
        alt="Collage: Shopify, React, JavaScript, HTML, APIs, Buy SDK, AWS, CompTIA"
        className="block w-full h-auto"
        loading="eager"
        decoding="async"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent" />
    </div>
  );
}
```

Place the image at `public/hero-collage.webp`.

---

## Editing Projects

Open `src/App.jsx` and locate the `projects` array. Example:

```js
const projects = [
  {
    title: "MyBabyFits — Headless Shopify Storefront",
    blurb: "Static HTML + Tailwind front-end powered by Shopify Buy SDK + Storefront API. Real products, real checkout, zero backend to maintain.",
    tags: ["Shopify", "Frontend", "E-commerce"],
    year: 2025,
    links: {
      live: "https://www.mybabyfits.com",
      repo: "https://github.com/LWashington6935/Mybabyfitsoriginal",
      demo: "https://youtu.be/huJUmgkDk0w"
    }
  },
  {
    title: "Playwright E2E — MyBabyFits",
    blurb: "End-to-end add-to-cart flow, health checks, and CI HTML reports (screenshots, video, trace).",
    tags: ["Testing", "Automation"],
    year: 2025,
    links: {
      live: null,
      repo: "https://github.com/LWashington6935/playwright-mybabyfits",
      demo: "https://youtu.be/MpDcTnu_WDc"
    }
  },
  {
    title: "AI-Enhanced Knowledge Base App",
    blurb: "Docs chat + semantic search + admin. React + Node + vector DB with RBAC, uploads, and preset prompts.",
    tags: ["Full-Stack", "AI/ML", "Frontend", "Backend"],
    year: 2025,
    links: {
      live: null,
      repo: "https://github.com/LWashington6935/support-platform",
      demo: "https://youtu.be/1pM6mVItgAc"
    }
  },
  {
    title: "UNO Multiplayer (Clean Restart)",
    blurb: "Socket-powered real-time game with custom card assets, lobbies, chat, spectate mode. Stability + tests first.",
    tags: ["Game", "Full-Stack", "Frontend"],
    year: 2025,
    links: {
      live: null,
      repo: "https://github.com/LWashington6935/Uno",
      demo: "https://youtu.be/b8jqZNgjUUw"
    }
  },
  {
    title: "Love, Lace and Luxe — Shopify Lite Frontend",
    blurb: "Lightweight product grid, PDP, and cart tied to Shopify checkout. Zendesk widget and clean UX.",
    tags: ["Shopify", "Frontend", "E-commerce"],
    year: 2024,
    links: {
      live: null,
      repo: "https://github.com/LWashington6935/love-lace-luxe",
      demo: null
    }
  }
];
```

* `tags` drive the filter chips and search.
* Add a `demo` YouTube link to show a Demo button.

---

## Deployment

### GitHub Pages (repo subpath)

1. Add scripts to `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

2. Publish:

```bash
npm run deploy
```

3. Repo → Settings → Pages → Source: `gh-pages` branch.
   Open:
   `https://LWashington6935.github.io/lucas-portfolio-exec-blue/`

### Vercel (custom domain friendly)

* Import the repo on vercel.com
* Framework: Vite, Build: `npm run build`, Output: `dist`
* Add your domain in Project Settings → Domains
* If using Vercel, set `base: "/"` in `vite.config.js`

---

## Accessibility and SEO

* Descriptive `alt` text on hero image
* Semantic headings and focus styles
* Add `public/robots.txt` and `public/sitemap.xml` if you want SEO crawling
* Consider Open Graph tags by adding a small HTML template or using a meta plugin

---

## Troubleshooting

* **Image not showing:** verify `public/hero-collage.webp` and that `heroSrc` uses `import.meta.env.BASE_URL`.
* **Assets 404 on Pages:** ensure `vite.config.js` has `base: "/lucas-portfolio-exec-blue/"`.
* **Styles missing:** confirm Tailwind is configured and imported in `src/index.css`.
* **Push failed:** run `git pull --rebase origin main` then `git push`.

---

## Roadmap

* Add device-mockup hero variant toggle
* Animated section reveals with Framer Motion
* Project detail pages with MDX
* Lighthouse budget and CI checks
* Contact form with serverless email webhook

---

## License

MIT

---

## Contact

* Email: [LWashington6935@gmail.com](mailto:LWashington6935@gmail.com)
* GitHub: `github.com/LWashington6935`
* Location: Columbus, Ohio

If you want, I can drop this README directly into your repo with your exact Pages URL baked in and a small collage thumbnail reference.
