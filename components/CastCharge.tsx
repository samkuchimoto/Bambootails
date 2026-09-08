// /components/CastCharge.tsx
//
// The charge.
//
// Every shonen key visual solves the same compositional problem the same
// way: put the cast on a rising diagonal, scale them up as the eye moves
// right, and let the largest figure break the frame edge. The reader's
// eye is pulled across and off the page, and "off the page" reads as
// forward — as somewhere still to go. A row of evenly-sized characters
// standing in a line reads as a cast photo. The same characters on a
// diagonal read as a run.
//
// Speed lines do the rest. Alternating wedges from a single vanishing
// point behind the group is what turns a still illustration into an
// illustration of momentum, and it is the device the site was missing
// entirely.
//
// Everything is derived from the index so the server and client agree,
// and the leap animation is staggered so the group bounds rather than
// pulses.

import Image from "next/image";
import { GUILD, FOUNDERS } from "@/lib/universe";

export function CastCharge({ className = "" }: { className?: string }) {
  // Founders last, so the two who carry the story are the largest and
  // the closest to breaking the right edge. The guild runs ahead of them
  // in ascending scale.
  const runners = [...GUILD, ...FOUNDERS];

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {/* Directional lines under the whole group — the ground moving. */}
      <div className="speedlines-h absolute inset-0 text-white" />

      {/* The burst, positioned off to the right where the leaders are
          headed, so the lines converge on the direction of travel rather
          than on the middle of nothing. */}
      <div
        className="speedlines absolute inset-0 text-white"
        style={{ ["--burst-x" as string]: "88%", ["--burst-y" as string]: "42%" }}
      />

      {runners.map((mascot, i) => {
        const t = i / (runners.length - 1); // 0 → 1 across the row

        // The diagonal: rightward, upward, and growing. The curve on
        // size is deliberate — linear growth reads as a chart, easing
        // reads as perspective.
        const left = 2 + t * 86;
        const bottom = 4 + Math.pow(t, 1.35) * 34;
        const size = 52 + Math.pow(t, 1.6) * 132;

        return (
          <div
            key={mascot.slug}
            className="charge-item cutout absolute"
            style={
              {
                left: `${left}%`,
                bottom: `${bottom}%`,
                width: `${size}px`,
                height: `${size}px`,
                zIndex: i,
                "--charge-delay": `${(i % 5) * 0.16}s`,
                "--charge-duration": `${2.4 + (i % 3) * 0.45}s`,
                "--charge-tilt": `${-9 + (i % 4) * 3}deg`,
              } as React.CSSProperties
            }
          >
            <Image
              src={mascot.portrait}
              alt=""
              fill
              sizes="200px"
              priority={i >= runners.length - 2}
              className="object-contain"
            />
          </div>
        );
      })}
    </div>
  );
}
