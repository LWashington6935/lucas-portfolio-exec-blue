import React from "react";

/** Hero image that perfectly fits the picture (no cropping, no letterbox) */
export default function HeroMedia() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-900 dark:border-zinc-800">
      {/* Let the image define the height; width stretches to the column */}
      <img
        src="/hero-collage.webp" // put file in /public/hero-collage.webp
        alt="Collage: Shopify, React, JavaScript, HTML, API, Buy SDK, AWS, CompTIA"
        className="block w-full h-auto"   // <- key: no fixed aspect, no object-cover
        loading="eager"
        decoding="async"
      />
      {/* optional subtle vignette for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent" />
    </div>
  );
}
