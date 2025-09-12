import React, { useMemo, useState, useEffect } from "react";
import HeroMedia from "./components/HeroMedia";

/**
 * Lucas Washington — Portfolio (Executive Edition, Blue Accent)
 * - Neutral palette with single blue accent
 * - Resume download + favicon added
 * - Refined spacing/typography
 */

const ACCENT = {
  ring: "ring-sky-500",
  bg: "bg-sky-600",
  text: "text-sky-600",
  border: "border-sky-600",
  hover: "hover:bg-sky-700",
};

const TAGS = ["Shopify", "Full-Stack", "Frontend", "Backend", "AI/ML", "Testing", "Game", "E-commerce", "Automation"];

const projects = [
  {
    title: "MyBabyFits — Headless Shopify Storefront",
    blurb:
      "Static HTML + Tailwind front-end powered by Shopify Buy SDK + Storefront API. Real products, real checkout, zero backend to maintain.",
    tags: ["Shopify", "Frontend", "E-commerce"],
    year: 2025,
    links: {
      live: "https://www.mybabyfits.com",
      repo: "https://github.com/LWashington6935/Mybabyfitsoriginal",
      // demo video:
      demo: "https://youtu.be/huJUmgkDk0w",
    },
  },
  {
    title: "Playwright E2E — MyBabyFits",
    blurb: "End-to-end add-to-cart flow, health checks, and CI HTML reports (screenshots, video, trace).",
    tags: ["Testing", "Automation"],
    year: 2025,
    links: { live: null, repo: "https://github.com/LWashington6935/playwright-mybabyfits", demo: null },
  },
  {
    title: "AI-Enhanced Knowledge Base App",
    blurb: "Docs chat + semantic search + admin. React + Node + vector DB with RBAC, uploads, and preset prompts.",
    tags: ["Full-Stack", "AI/ML", "Frontend", "Backend"],
    year: 2025,
    links: { live: null, repo: "https://github.com/LWashington6935/support-platform", demo: null },
  },
  {
    title: "UNO Multiplayer (Clean Restart)",
    blurb: "Socket-powered real-time game with custom card assets, lobbies, chat, spectate mode. Stability + tests first.",
    tags: ["Game", "Full-Stack", "Frontend"],
    year: 2025,
    links: { live: null, repo: "https://github.com/LWashington6935/Uno", demo: null },
  },
  {
    title: "Love, Lace & Luxe — Shopify Lite Frontend",
    blurb: "Lightweight product grid, PDP, and cart tied to Shopify checkout. Zendesk widget and clean UX.",
    tags: ["Shopify", "Frontend", "E-commerce"],
    year: 2024,
    links: { live: null, repo: "https://github.com/LWashington6935/love-lace-luxe", demo: null },
  },
];

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-zinc-300 dark:border-zinc-700 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:text-zinc-200">
    {children}
  </span>
);

const LinkBtn = ({ href, children, variant = "ghost", download=false }) => {
  if (!href) return null;
  const base = "inline-flex items-center justify-center gap-1 rounded-lg px-3 py-1.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 " + ACCENT.ring;
  const style =
    variant === "primary"
      ? `${ACCENT.bg} text-white ${ACCENT.hover}`
      : "border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800";
  return (
    <a href={href} target={download ? "_self" : "_blank"} rel={download ? undefined : "noreferrer"} className={`${base} ${style}`} download={download ? "" : undefined}>
      {children}
    </a>
  );
};

const Card = ({ p, onOpen }) => {
  return (
    <div className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
        <span className="text-xs text-zinc-500 tabular-nums">{p.year}</span>
      </div>
      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{p.blurb}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
      <div className="mt-5 flex gap-2">
        <LinkBtn href={p.links.live} variant="primary">Live</LinkBtn>
        <LinkBtn href={p.links.repo}>Repo</LinkBtn>
        <LinkBtn href={p.links.demo}>Demo</LinkBtn>
        <button onClick={onOpen} className="ml-auto text-sm text-zinc-700 dark:text-zinc-200 underline decoration-dotted hover:no-underline">
          Quick details
        </button>
      </div>
    </div>
  );
};

export default function PortfolioExecBlue() {
  const [dark, setDark] = useState(true);
  const [q, setQ] = useState("");
  const [activeTags, setActiveTags] = useState(["All"]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("lucas.theme");
    if (saved) setDark(saved === "dark");
  }, []);
  useEffect(() => {
    localStorage.setItem("lucas.theme", dark ? "dark" : "light");
  }, [dark]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    const tags = activeTags.includes("All") ? [] : activeTags;
    return projects.filter((p) => {
      const hitText =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.blurb.toLowerCase().includes(query) ||
        p.tags.join(" ").toLowerCase().includes(query);
      const hitTags = tags.length === 0 || tags.every((t) => p.tags.includes(t));
      return hitText && hitTags;
    });
  }, [q, activeTags]);

  function toggleTag(tag) {
    if (tag === "All") return setActiveTags(["All"]);
    setActiveTags((prev) => {
      const next = prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev.filter((t) => t !== "All"), tag];
      return next.length ? next : ["All"];
    });
  }

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-900 dark:bg-zinc-950/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <a href="#home" className="font-semibold tracking-tight">Lucas Washington</a>
              <nav className="hidden md:flex items-center gap-6 text-sm">
                <a href="#projects" className="hover:underline underline-offset-4">Projects</a>
                <a href="#about" className="hover:underline underline-offset-4">About</a>
                <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
                {/* fixed resume path (must live in /public/resume/) */}
                <LinkBtn href="/resume/Lucas_Washington_Resume.pdf" download variant="ghost">Resume</LinkBtn>
                <a href="https://github.com/LWashington6935" target="_blank" rel="noreferrer" className="rounded-lg px-3 py-1 text-sm border border-zinc-300 dark:border-zinc-700">GitHub</a>
              </nav>
              <button className="rounded-lg px-3 py-1 text-sm border border-zinc-300 dark:border-zinc-700" onClick={() => setDark((d) => !d)}>
                {dark ? "Dark" : "Light"}
              </button>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section id="home" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                Full-Stack Engineer & Shopify Developer
              </h1>
              <p className="mt-5 text-[17px] leading-7 text-zinc-600 dark:text-zinc-300 max-w-xl">
                I deliver lean, interview-ready projects: headless Shopify storefronts, robust E2E tests, and
                AI-powered tools with clean UX and measurable results.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#projects" className={"rounded-lg px-5 py-2 text-sm font-semibold text-white " + ACCENT.bg + " " + ACCENT.hover + " focus:outline-none focus:ring-2 focus:ring-offset-2 " + ACCENT.ring}>
                  View Projects
                </a>
                <LinkBtn href="/resume/Lucas_Washington_Resume.pdf" download variant="ghost">Download Resume</LinkBtn>
                <a href="mailto:LWashington6935@gmail.com?subject=From%20your%20portfolio" className={"rounded-lg px-5 py-2 text-sm font-semibold border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 " + ACCENT.ring}>
                  Contact
                </a>
              </div>
            </div>

            {/* device mockups collage */}
            <HeroMedia />
          </div>
        </section>

        {/* Controls */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
              <div className="relative flex-1">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search projects (e.g., Shopify, AI, Testing)"
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm outline-none placeholder:text-zinc-400 dark:border-zinc-700 dark:bg-zinc-950"
                />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button onClick={() => toggleTag('All')} className={"rounded-full px-3 py-1.5 text-xs font-medium border " + (activeTags.includes('All') ? ACCENT.bg + ' text-white' : 'border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800')}>All</button>
                {TAGS.map((t) => (
                  <button key={t} onClick={() => toggleTag(t)} className={"rounded-full px-3 py-1.5 text-xs font-medium border transition " + (activeTags.includes(t) ? ACCENT.bg + " text-white" : "border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800")}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
            {(activeTags.length > 0 || q) && (
              <p className="mt-3 text-xs text-zinc-500">
                Showing {filtered.length} of {projects.length}
                {!activeTags.includes("All") && activeTags.length > 0 && <> • Tags: {activeTags.join(", ")}</>}
                {q && ` • Query: "${q}"`}
              </p>
            )}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((p, i) => (
              <Card key={p.title + i} p={p} onOpen={() => setSelected(p)} />
            ))}
          </div>
          {filtered.length === 0 && <p className="mt-6 text-sm text-zinc-500">No matches. Try fewer filters.</p>}
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="rounded-xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="text-2xl font-bold">About</h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                I’m Lucas Washington — OSU Coding Bootcamp grad and hands-on builder. I focus on uncluttered UI,
                clean architecture, and automation that saves real time. Based in Columbus, OH. Open to remote roles.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <Badge>Columbus, OH</Badge>
                <Badge>Open to Contract/FT</Badge>
                <Badge>US Work Eligible</Badge>
              </div>
              <div className="mt-6 flex gap-3">
                <LinkBtn href="https://github.com/LWashington6935">GitHub Profile</LinkBtn>
                <LinkBtn href="/resume/Lucas_Washington_Resume.pdf" download variant="primary">Download Resume</LinkBtn>
              </div>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="font-semibold">Core Skills</h3>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-zinc-700 dark:text-zinc-200">
                <li>React, TypeScript, Tailwind</li>
                <li>Node.js, Express</li>
                <li>Shopify SDKs, Storefront API</li>
                <li>OAuth, Webhooks</li>
                <li>Playwright E2E, CI</li>
                <li>REST, GraphQL</li>
                <li>Postgres, Mongo, Redis</li>
                <li>Vercel, Netlify</li>
              </ul>
              <h3 className="mt-6 font-semibold">Highlights</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-200 space-y-1">
                <li>Shipped headless Shopify storefront with working checkout</li>
                <li>Built automated E2E suite with rich reports</li>
                <li>Designed AI knowledge base with vector search</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14">
          <div className="rounded-xl border border-zinc-200 bg-white p-9 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-2xl font-bold">Let’s build something.</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">Quickest way to reach me is email. I typically reply same day.</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <LinkBtn href="mailto:LWashington6935@gmail.com" variant="primary">Email Lucas</LinkBtn>
              <LinkBtn href="/resume/Lucas_Washington_Resume.pdf" download>Download Resume</LinkBtn>
              <LinkBtn href="https://github.com/LWashington6935">GitHub</LinkBtn>
            </div>
          </div>
        </section>

        {/* Modal */}
        {selected && (
          <div className="fixed inset-0 z-[60] bg-black/60 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
            <div className="w-full max-w-xl rounded-xl border border-zinc-200 bg-white p-6 shadow-xl dark:border-zinc-800 dark:bg-zinc-900" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-start justify-between gap-4">
                <h4 className="text-xl font-semibold leading-snug">{selected.title}</h4>
                <button className="rounded-lg px-2 py-1 text-sm border border-zinc-300 dark:border-zinc-700" onClick={() => setSelected(null)}>Close</button>
              </div>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{selected.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">{selected.tags.map((t) => <Badge key={t}>{t}</Badge>)}</div>
              <div className="mt-5 flex gap-2">
                <LinkBtn href={selected.links.live} variant="primary">Live</LinkBtn>
                <LinkBtn href={selected.links.repo}>Repo</LinkBtn>
                <LinkBtn href={selected.links.demo}>Demo</LinkBtn>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="border-t border-zinc-200 dark:border-zinc-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-7 text-sm text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Lucas Washington</p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="hover:underline">Projects</a>
              <a href="#about" className="hover:underline">About</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
