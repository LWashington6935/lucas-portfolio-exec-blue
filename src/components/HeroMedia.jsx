import React from "react";

export default function HeroMedia() {
  const heroSrc = `${import.meta.env.BASE_URL}hero-collage.webp`; // lives in /public

  return (
    <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-900 dark:border-zinc-800">
      <img
        src={heroSrc}
        alt="Collage: Shopify, React, JavaScript, HTML, API, Buy SDK, AWS, CompTIA"
        className="block w-full h-auto"
        loading="eager"
        decoding="async"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent" />
    </div>
  );
}
