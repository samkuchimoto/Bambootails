// /components/HeroVideo.tsx
// Cycles the four episode-01 test clips behind the hero instead of
// looping one on repeat. Each clip plays once (no `loop`), and onEnded
// advances to the next — the cycle itself is what loops. `key={src}`
// forces a remount on each switch so autoplay reliably restarts;
// toggling `src` on a live element doesn't always retrigger playback.

"use client";

import { useState } from "react";

const CLIPS = [
  "/videos/episode-01-part-1.mp4",
  "/videos/episode-01-part-2.mp4",
  "/videos/episode-01-part-3.mp4",
  "/videos/episode-01-part-4.mp4",
];

export function HeroVideo() {
  const [index, setIndex] = useState(0);

  return (
    <video
      key={CLIPS[index]}
      src={CLIPS[index]}
      autoPlay
      muted
      playsInline
      onEnded={() => setIndex((i) => (i + 1) % CLIPS.length)}
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}
