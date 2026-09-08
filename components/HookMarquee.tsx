// /components/HookMarquee.tsx
//
// A running band of the fourteen three-second hooks.
//
// This does two jobs at once. Visually it is the moving element the site
// has never had — every critique landed on "static", and a page where
// nothing moves reads as a table of contents for something dynamic
// rather than the thing itself.
//
// Editorially it is a better advertisement for the series than any
// summary, because each hook is already written to make a stranger stop
// scrolling. Fourteen of them in a row is fourteen chances to catch
// someone, and it puts the stakes — a loom dying, ninety seconds of
// contempt, ten thousand units by Friday — on the homepage where the
// prose used to be polite.
//
// The track holds the list twice and translates exactly -50%, so the
// loop is seamless. Hovering pauses it, because a line someone is trying
// to read should not slide away from them.

import { HOOKS } from "@/lib/production";
import { EPISODES } from "@/lib/universe";

export function HookMarquee({ duration = 70 }: { duration?: number }) {
  const items = EPISODES.map((e) => ({ n: e.number, hook: HOOKS[e.number] })).filter((i) => i.hook);
  const doubled = [...items, ...items];

  return (
    <div
      className="marquee border-y-2 border-[var(--foreground)] py-4"
      style={{ ["--marquee-duration" as string]: `${duration}s` }}
      aria-label="Opening lines from the series"
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center gap-5 pr-10" aria-hidden={i >= items.length}>
            <span className="pop text-xs text-[var(--madder)]">
              {String(item.n).padStart(2, "0")}
            </span>
            <span className="display whitespace-nowrap text-lg sm:text-2xl">{item.hook}</span>
            <span className="text-[var(--gold)]" aria-hidden>
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
