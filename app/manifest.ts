// /app/manifest.ts
// Makes BambooTails installable to a phone's home screen, and is the
// prerequisite for any later Play Store wrapper.
//
// start_url is /series rather than the homepage on purpose: someone who
// installed the app has already been sold the brand. What brings them
// back is the next episode, not the pitch they've already read.

import type { MetadataRoute } from "next";
import { BRAND } from "@/config/brand";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${BRAND.name} — ${BRAND.tagline}`,
    short_name: BRAND.name,
    description: BRAND.heroSub,
    start_url: "/series",
    display: "standalone",
    orientation: "portrait",
    background_color: "#faf8f5",
    theme_color: "#faf8f5",
    categories: ["shopping", "lifestyle", "entertainment"],
    lang: "en",
    dir: "ltr",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      // Separate maskable entry with a wider safe zone — Android crops
      // launcher icons to the device's shape, and an "any" icon reused
      // as maskable loses its edges.
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      { name: "The Series", url: "/series" },
      { name: "Collection", url: "/collection" },
    ],
  };
}
