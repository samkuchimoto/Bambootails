// /components/MascotField.tsx
//
// The flower field, with our own flowers.
//
// Murakami's wallpapers do not work because the flower is well drawn.
// They work because there are four hundred of them, flat, outlined, all
// smiling, filling the frame edge to edge with no negative space to rest
// in. The unit is ordinary; the field is overwhelming. That is the whole
// trick, and it costs nothing but repetition.
//
// We have thirteen characters. Tiled, staggered and drifting, they are
// the same instrument — and unlike a flower, each one is also a product
// someone can eventually buy, which means the decoration and the
// merchandising pyramid are the same object.
//
// Determinism matters here: the layout is derived from the index with a
// cheap hash rather than Math.random(), because a random field would
// render differently on the server and the client and React would throw
// a hydration mismatch. Same seed, same field, every time.

import Image from "next/image";
import { MASCOTS } from "@/lib/universe";

/** Cheap deterministic pseudo-random in [0,1) from an integer seed. */
function rand(seed: number): number {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

export function MascotField({
  count = 28,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {Array.from({ length: count }, (_, i) => {
        const mascot = MASCOTS[i % MASCOTS.length];

        // Scatter on a jittered grid rather than pure random. Pure random
        // clumps and leaves holes; a grid with jitter reads as dense and
        // even, which is what makes a field feel infinite instead of
        // merely messy.
        const cols = 7;
        const col = i % cols;
        const row = Math.floor(i / cols);
        const left = (col / cols) * 100 + (rand(i * 3 + 1) - 0.5) * 12;
        const top = row * 26 + (rand(i * 7 + 2) - 0.5) * 14;

        const size = 58 + rand(i * 11 + 3) * 46;
        const tilt = (rand(i * 13 + 5) - 0.5) * 24;

        return (
          <div
            key={`${mascot.slug}-${i}`}
            className="float absolute"
            style={
              {
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                // Staggering both duration and delay is what stops the
                // field pulsing in unison like a screensaver.
                "--float-delay": `${rand(i * 17 + 7) * 4}s`,
                "--float-duration": `${3.4 + rand(i * 19 + 11) * 2.6}s`,
                "--float-tilt": `${tilt}deg`,
                opacity: 0.9,
              } as React.CSSProperties
            }
          >
            <Image
              src={mascot.portrait}
              alt=""
              aria-hidden
              fill
              sizes="110px"
              className="object-contain drop-shadow-[3px_3px_0_rgba(20,17,13,0.35)]"
            />
          </div>
        );
      })}
    </div>
  );
}
