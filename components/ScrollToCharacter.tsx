// /components/ScrollToCharacter.tsx
// Lets a link use ?character=lunarr as well as #lunarr — TikTok bio links
// are often built that way, alongside utm_ tags.

"use client";

import { useEffect } from "react";

export function ScrollToCharacter() {
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("character");
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);
  return null;
}
