import type { Metadata } from "next";
import Link from "next/link";
import { HOOKS, PYRAMID, TIKTOK_RHYTHM, TOOLCHAIN } from "@/lib/production";
import { EPISODES } from "@/lib/universe";

export const metadata: Metadata = {
  title: "How It Is Made",
  description:
    "The production rhythm behind the series, the toolchain that renders it, and the commercial architecture underneath a €249 scarf.",
};

const STATUS_LABEL = {
  live: "Live",
  designed: "Designed",
  planned: "Planned",
} as const;

export default function Production() {
  return (
    <div>
      <section className="bg-[#16130f] text-[#faf8f5]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="label text-white/40">The working method</p>
          <h1 className="display mt-5 max-w-3xl text-5xl sm:text-7xl">
            How it is
            <br />
            actually made.
          </h1>
          <p className="mt-7 max-w-xl leading-relaxed text-white/60">
            A house this small survives on being legible. What follows is the rhythm every episode
            is cut to, the tools that render it, and the commercial structure underneath a single
            expensive scarf — published rather than implied.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        {/* The rhythm. Stated as a constraint with a named failure mode
            per beat, because a structure without consequences is a
            suggestion and gets abandoned by episode three. */}
        <section>
          <p className="label text-[var(--accent)]">The cut</p>
          <h2 className="display mt-3 text-3xl sm:text-5xl">Sixty seconds, four beats</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
            Short-form gives you three seconds before someone decides. A beautiful slow open spends
            all three of them, which is why there is no logo, no fade and no establishing wide
            anywhere in this series.
          </p>

          <ol className="mt-12 space-y-10">
            {TIKTOK_RHYTHM.map((beat) => (
              <li
                key={beat.window}
                className="grid gap-4 border-t border-[var(--rule)] pt-6 sm:grid-cols-[auto_1fr] sm:gap-10"
              >
                <p className="display text-2xl text-[var(--muted)] sm:w-24">{beat.window}</p>
                <div>
                  <h3 className="display text-2xl">{beat.name}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
                    {beat.brief}
                  </p>
                  <p className="mt-3 max-w-2xl border-l-2 border-[var(--accent)] pl-3 text-sm leading-relaxed">
                    <span className="label text-[var(--accent)]">Fails when</span>
                    <br />
                    {beat.failure}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* The hooks. One line per episode, and the single
            highest-leverage sentence in each video — it is the only place
            the stake is stated rather than dramatised, and it decides
            whether the other fifty-seven seconds are watched at all. */}
        <section className="mt-24 border-t-2 border-[var(--foreground)] pt-10">
          <p className="label text-[var(--accent)]">Second zero</p>
          <h2 className="display mt-3 text-3xl sm:text-5xl">Fourteen hooks</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
            The on-screen line in the first three seconds. Every one of them states a cost, because
            a stake nobody can lose is not a hook.
          </p>

          <ol className="mt-10 divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
            {EPISODES.map((episode) => (
              <li key={episode.number} className="grid gap-2 py-5 sm:grid-cols-[auto_1fr] sm:gap-8">
                <p className="label shrink-0 pt-1 text-[var(--muted)] sm:w-32">
                  Ep. {String(episode.number).padStart(2, "0")} · {episode.city}
                </p>
                <div>
                  <p className="display text-xl leading-snug sm:text-2xl">
                    {HOOKS[episode.number]}
                  </p>
                  <p className="label mt-1.5 text-[var(--muted)]">{episode.title}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8">
            <Link
              href="/series"
              className="label border-b border-[var(--foreground)] pb-1 transition-opacity hover:opacity-60"
            >
              Read the episodes
            </Link>
          </div>
        </section>

        {/* The toolchain, with the requirement stated separately from the
            platform. Model names go stale in months; what the phase has
            to achieve does not, so the metric column is the part worth
            keeping when the platform column is replaced. */}
        <section className="mt-24 border-t-2 border-[var(--foreground)] pt-10">
          <p className="label text-[var(--accent)]">The render</p>
          <h2 className="display mt-3 text-3xl sm:text-5xl">Five passes</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
            The platform column is this month&apos;s answer. The bar column is the requirement, and
            it is the half that survives when the tools are replaced.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[46rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--foreground)]">
                  {["Pass", "Platform", "What it does", "The bar"].map((head) => (
                    <th key={head} className="label pb-3 pr-6 font-normal text-[var(--muted)]">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TOOLCHAIN.map((phase) => (
                  <tr key={phase.phase} className="border-b border-[var(--rule)] align-top">
                    <td className="display py-4 pr-6 text-lg">{phase.phase}</td>
                    <td className="py-4 pr-6 text-[var(--muted)]">{phase.platform}</td>
                    <td className="py-4 pr-6 leading-relaxed text-[var(--muted)]">
                      {phase.function}
                    </td>
                    <td className="py-4 leading-relaxed">{phase.metric}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* The pyramid. The uncomfortable number stated plainly: the most
            expensive object in the range has the worst margin in it, and
            the cheapest has the best. That is not a flaw to hide — it is
            the reason the scarf is a halo rather than a business, and
            saying so is what makes the rest of the plan legible. */}
        <section className="mt-24 border-t-2 border-[var(--foreground)] pt-10">
          <p className="label text-[var(--accent)]">The architecture</p>
          <h2 className="display mt-3 text-3xl sm:text-5xl">Four layers</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
            A €249 scarf cannot carry paid acquisition at this margin, and was never meant to. It is
            the proof the craft is real. What compounds is everything underneath it — and the layer
            with the highest margin is the cheapest object in the range.
          </p>

          <div className="mt-12 space-y-10">
            {PYRAMID.map((layer) => (
              <article
                key={layer.layer}
                className="grid gap-5 border-t border-[var(--rule)] pt-6 lg:grid-cols-[1fr_auto] lg:gap-14"
              >
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="display text-2xl sm:text-3xl">{layer.layer}</h3>
                    <span
                      className={`label ${
                        layer.status === "live"
                          ? "text-[var(--foreground)]"
                          : layer.status === "designed"
                            ? "text-[var(--accent)]"
                            : "text-[var(--muted)]"
                      }`}
                    >
                      {STATUS_LABEL[layer.status]}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[var(--muted)]">{layer.asset}</p>
                  <p className="mt-4 max-w-xl leading-relaxed text-[var(--muted)]">
                    {layer.purpose}
                  </p>
                  <p className="label mt-4 text-[var(--muted)]">For — {layer.audience}</p>
                </div>

                <dl className="flex shrink-0 gap-10 lg:flex-col lg:gap-5 lg:text-right">
                  <div>
                    <dt className="label text-[var(--muted)]">Price</dt>
                    <dd className="display mt-1 text-2xl">{layer.price}</dd>
                  </div>
                  <div>
                    <dt className="label text-[var(--muted)]">Margin</dt>
                    <dd className="display mt-1 text-2xl">{layer.margin}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
            <Link
              href="/collection"
              className="label border-b border-[var(--foreground)] pb-1 transition-opacity hover:opacity-60"
            >
              The crown — in the atelier now
            </Link>
            <Link
              href="/mascots"
              className="label border-b border-[var(--foreground)] pb-1 transition-opacity hover:opacity-60"
            >
              The collectibles — vote on the first one
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
