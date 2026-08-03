import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, X } from "lucide-react";

import { useCinematic, scrollToId } from "@/lib/use-cinematic";
import { AiRaceStrategy } from "@/components/ss/AiRaceStrategy";
import { ScreenMock } from "@/components/ss/ScreenMock";
import {
  problemCards,
  visionSignals,
  telemetry,
  decisions,
  screens,
  strategy,
  gauges,
  buildStages,
  competitiveFindings,
  designOpportunity,
} from "@/lib/sponsorsphere-data";

import heroCar from "@/assets/sponsorsphere-hero-car.png.asset.json";
import design from "@/assets/sponsorsphere-design.png.asset.json";
import ideation from "@/assets/sponsorsphere-ideation.png.asset.json";
import competitive from "@/assets/ss-competitive.jpg.asset.json";
import garageImg from "@/assets/ss-garage.jpg";
import brakesImg from "@/assets/ss-brakes.jpg";
import trophyImg from "@/assets/ss-trophy.jpg";
import trackImg from "@/assets/ss-track.jpg";

const BEHANCE = "https://www.behance.net/gallery/212163931/AI-Powered-UX-Case-Study";

export const Route = createFileRoute("/case-studies/sponsorsphere")({
  head: () => ({
    meta: [
      { title: "SponsorSphere — Designing the Future of Motorsport Sponsorship with AI" },
      {
        name: "description",
        content:
          "A cinematic UX case study: an AI-powered platform connecting motorsport teams, sponsors and organizers through intelligent recommendations and predictive insights.",
      },
      { property: "og:title", content: "SponsorSphere — AI-Powered Motorsport Sponsorship" },
      {
        property: "og:description",
        content:
          "Scroll through the race: problem, research, AI-assisted UX process, design decisions and outcomes behind SponsorSphere.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SponsorSphere — AI-Powered Motorsport Sponsorship" },
      {
        name: "twitter:description",
        content: "A cinematic UX case study on AI-assisted product design for motorsport sponsorship.",
      },
    ],
  }),
  component: SponsorSphere,
});

/* ------------------------------------------------------------------ */
/* Shared atoms                                                        */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.32em] text-muted-foreground">
      <span className="inline-block h-px w-8 bg-racing" />
      {children}
    </div>
  );
}

function Shell({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">{children}</div>
    </section>
  );
}

function Streaks() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {[18, 42, 71].map((top, i) => (
        <span
          key={top}
          className="absolute h-px w-40 animate-streak bg-gradient-to-r from-transparent via-electric to-transparent"
          style={{ top: `${top}%`, animationDelay: `${i * 1.6}s` }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function SponsorSphere() {
  useCinematic();
  const [openDecision, setOpenDecision] = useState<string | null>(null);
  const [explored, setExplored] = useState<string[]>([]);
  const [activeNode, setActiveNode] = useState(0);

  const openCard = (id: string) => {
    setOpenDecision(id);
    setExplored((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const allExplored = explored.length === decisions.length;

  return (
    <main className="relative bg-carbon text-foreground selection:bg-racing">
      {/* progress rail */}
      <div className="fixed inset-x-0 top-0 z-50 h-[3px] bg-white/5">
        <div
          data-progress
          className="h-full origin-left scale-x-0 bg-gradient-to-r from-electric via-silver to-racing"
        />
      </div>

      {/* floating back nav */}
      <div className="fixed left-4 top-5 z-50 md:left-8">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 rounded-full glass-panel px-4 py-2 text-xs font-medium tracking-wide text-foreground/80 transition hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
          Back to portfolio
        </Link>
      </div>

      {/* ============ 01 · HERO ============ */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden carbon-weave">
        <div aria-hidden className="absolute inset-0">
          <img
            src={trackImg}
            alt=""
            width={1600}
            height={912}
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon/60 via-carbon/85 to-carbon" />
          <div className="absolute left-1/2 top-1/3 h-[60vh] w-[80vw] -translate-x-1/2 animate-smoke rounded-full bg-electric/10 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 h-[40vh] w-[40vw] animate-smoke rounded-full bg-racing/10 blur-[130px]" />
        </div>
        <Streaks />

        <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-12 px-6 pb-24 pt-32 md:px-10 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Eyebrow>Case Study 01 · Motorsport × AI</Eyebrow>
            <h1
              data-split
              className="mt-6 font-display text-[clamp(3rem,9vw,7.5rem)] font-black uppercase leading-[0.86] tracking-[-0.04em]"
            >
              Sponsor
              <span className="text-stroke">Sphere</span>
            </h1>
            <p className="mt-6 max-w-xl font-display text-xl font-light leading-snug text-silver md:text-2xl">
              Designing the Future of Motorsport Sponsorship with AI
            </p>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Finding the right sponsor shouldn't feel like searching the entire paddock before race
              day. SponsorSphere transforms sponsorship discovery into an AI-powered experience by
              connecting racing teams, sponsors and organizers through intelligent recommendations
              and predictive insights.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToId("garage")}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-racing px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition-transform duration-300 hover:scale-[1.04]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Start the Race
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href={BEHANCE}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass-panel px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-silver transition hover:text-foreground"
              >
                Full Behance case <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
              {[
                ["Role", "End-to-end UX/UI"],
                ["Platform", "B2B Product"],
                ["Timeline", "7 weeks"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="mt-1 text-sm text-silver">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div aria-hidden className="absolute inset-0 scale-90 rounded-full bg-electric/25 blur-[90px]" />
            <img
              src={heroCar.url}
              alt="Formula-style race car representing the SponsorSphere case study"
              className="relative w-full animate-float-slow drop-shadow-[0_40px_80px_oklch(0_0_0/0.7)]"
            />
            <div
              aria-hidden
              className="absolute -bottom-6 left-1/2 h-6 w-3/4 -translate-x-1/2 rounded-[100%] bg-black/70 blur-2xl"
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <div className="mx-auto h-10 w-px bg-gradient-to-b from-transparent to-silver/60" />
          <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Scroll
          </span>
        </div>
      </section>

      {/* ============ 02 · ENTER THE GARAGE ============ */}
      <section id="garage" data-garage className="relative isolate overflow-hidden">
        <div className="relative h-[70svh] overflow-hidden md:h-[86svh]">
          <img
            data-garage-car
            src={garageImg}
            alt="Race car inside a dark garage as the doors open"
            loading="lazy"
            width={1600}
            height={912}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon/70 via-transparent to-carbon" />
          {/* garage doors */}
          <div
            data-door="top"
            aria-hidden
            className="absolute inset-x-0 top-0 h-1/2 bg-[repeating-linear-gradient(180deg,var(--gunmetal)_0_10px,var(--carbon)_10px_20px)]"
          />
          <div
            data-door="bottom"
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/2 bg-[repeating-linear-gradient(180deg,var(--gunmetal)_0_10px,var(--carbon)_10px_20px)]"
          />
        </div>

        <Shell className="py-20 md:py-28">
          <Eyebrow>Chapter 01 · The Garage</Eyebrow>
          <h2
            data-split
            className="mt-6 max-w-4xl font-display text-[clamp(2rem,5.4vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em]"
          >
            Every Championship Begins Inside the Garage
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div data-reveal className="space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Behind every winning race is months of preparation. Behind every successful
                sponsorship is the same.
              </p>
              <p>
                Yet sponsorship discovery remains fragmented, manual and driven by spreadsheets,
                personal networks and endless cold outreach.
              </p>
            </div>
            <div data-reveal className="space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>Teams struggle to find relevant sponsors.</p>
              <p>Sponsors struggle to identify the right teams.</p>
              <p>Organizers struggle to create meaningful partnerships.</p>
              <p className="font-display text-xl font-semibold text-foreground md:text-2xl">
                The opportunity wasn't a lack of sponsors. It was a lack of intelligence.
              </p>
            </div>
          </div>
        </Shell>
      </section>

      {/* ============ 03 · RED FLAG ============ */}
      <section className="relative overflow-hidden border-y border-border">
        <div aria-hidden className="absolute inset-0">
          <img
            src={brakesImg}
            alt=""
            loading="lazy"
            width={1600}
            height={912}
            className="h-full w-full object-cover opacity-[0.18]"
          />
          <div className="absolute inset-0 bg-carbon/85" />
        </div>

        <Shell className="py-24 md:py-32">
          <div className="flex flex-wrap items-center gap-4">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="h-3 w-3 animate-caution rounded-full bg-racing"
                style={{ animationDelay: `${i * 0.25}s` }}
              />
            ))}
            <Eyebrow>Red Flag · The Challenge</Eyebrow>
          </div>

          <h2
            data-split
            className="mt-6 max-w-3xl font-display text-[clamp(2rem,5.4vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em]"
          >
            The Race Was Slowing Down
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {problemCards.map((card) => (
              <article
                key={card.title}
                data-reveal
                className="group relative rounded-3xl glass-panel p-7 transition duration-500 hover:-translate-y-2"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-racing to-transparent opacity-0 transition group-hover:opacity-100"
                />
                <div className="text-3xl">{card.icon}</div>
                <h3 className="mt-5 font-display text-2xl font-semibold">{card.title}</h3>
                <ul className="mt-5 space-y-3">
                  {card.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 h-1 w-4 shrink-0 bg-racing/70" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p
            data-reveal
            className="mt-14 max-w-3xl font-display text-2xl font-light leading-tight text-silver md:text-4xl"
          >
            Great sponsorship opportunities were being lost{" "}
            <span className="text-racing">before the race even began.</span>
          </p>
        </Shell>
      </section>

      {/* ============ 04 · THE STARTING GRID ============ */}
      <Shell className="py-24 md:py-32">
        <div aria-hidden className="absolute inset-x-0 top-0 h-full blueprint-grid opacity-30" />
        <div className="relative">
          <Eyebrow>The Starting Grid</Eyebrow>
          <h2
            data-split
            className="mt-6 font-display text-[clamp(2.2rem,6vw,5rem)] font-bold uppercase tracking-[-0.03em]"
          >
            The Vision
          </h2>
          <p
            data-reveal
            className="mt-8 max-w-3xl font-display text-2xl font-light leading-snug text-silver md:text-3xl"
          >
            Imagine if sponsorship worked like an AI race engineer.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visionSignals.map((s, i) => (
              <div
                key={s}
                data-reveal
                className="flex items-center gap-4 rounded-2xl glass-panel px-6 py-5 transition hover:border-electric/40"
              >
                <span className="font-mono text-xs text-electric">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium tracking-wide">{s}</span>
              </div>
            ))}
          </div>

          <p data-reveal className="mt-12 max-w-2xl text-base text-muted-foreground">
            …and instantly recommends the perfect partnership.
          </p>
          <p data-reveal className="mt-3 font-display text-3xl font-bold uppercase md:text-5xl">
            That became <span className="text-electric">SponsorSphere.</span>
          </p>
        </div>
      </Shell>

      {/* ============ 05 · AI RACE STRATEGY ============ */}
      <AiRaceStrategy />


      {/* ============ 06 · READING THE TRACK ============ */}
      <Shell className="py-24 md:py-32">
        <Eyebrow>Reading the Track · Research</Eyebrow>
        <h2
          data-split
          className="mt-6 max-w-3xl font-display text-[clamp(2rem,5.4vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em]"
        >
          Telemetry Before Tactics
        </h2>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {telemetry.map((t) => (
            <article
              key={t.label}
              data-reveal
              className="rounded-2xl glass-panel p-6 transition hover:border-electric/40"
            >
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  {t.label}
                </p>
                <span className="h-2 w-2 rounded-full bg-electric" />
              </div>
              <p className="mt-4 font-display text-2xl font-bold tracking-tight">{t.value}</p>
              <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-electric to-racing"
                  style={{ width: `${t.bar}%` }}
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.note}</p>
            </article>
          ))}
        </div>

        {/* ---- Competitive Analysis · the engineer's notebook page ---- */}
        <div className="relative mt-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-racing">
            Competitive Analysis
          </p>
          <h3 data-split className="mt-4 font-hand text-4xl text-foreground md:text-5xl">
            Nine platforms, one missing lap
          </h3>

          <figure data-reveal className="relative mx-auto mt-10 max-w-4xl">
            <div aria-hidden className="absolute -inset-6 blueprint-grid rounded-[2rem] opacity-40" />
            {/* clipboard clip */}
            <span
              aria-hidden
              className="absolute -top-4 left-1/2 z-20 h-7 w-24 -translate-x-1/2 rounded-md border border-white/20 bg-gunmetal shadow-lg"
            />
            {/* racing tape corners */}
            <span
              aria-hidden
              className="absolute -left-4 -top-2 z-20 h-6 w-24 -rotate-[18deg] bg-[repeating-linear-gradient(45deg,var(--racing)_0_7px,transparent_7px_14px)] opacity-70"
            />
            <span
              aria-hidden
              className="absolute -bottom-2 -right-4 z-20 h-6 w-24 -rotate-[18deg] bg-[repeating-linear-gradient(45deg,var(--racing)_0_7px,transparent_7px_14px)] opacity-70"
            />
            <img
              src={competitive.url}
              alt="Handwritten competitive analysis comparison sheet from the race engineer's notebook"
              loading="lazy"
              width={1408}
              height={1008}
              data-parallax="6"
              className="relative z-10 w-full rotate-[-1.2deg] rounded-lg border border-white/15 shadow-[0_40px_90px_oklch(0_0_0/0.65)]"
            />
          </figure>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div data-reveal className="rounded-3xl glass-panel p-8">
              <h4 className="font-display text-2xl font-semibold">Key Findings</h4>
              <p className="mt-3 text-sm text-muted-foreground">
                After evaluating nine leading sponsorship and partnership platforms, several
                patterns emerged.
              </p>
              <ul className="mt-6 space-y-3">
                {competitiveFindings.map((f) => (
                  <li key={f} className="flex gap-3 text-sm leading-relaxed text-silver">
                    <span className="mt-0.5 text-electric">✔</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div data-reveal className="rounded-3xl border border-electric/30 bg-electric/[0.06] p-8">
              <h4 className="font-display text-2xl font-semibold">Design Opportunity</h4>
              <p className="mt-3 text-sm text-muted-foreground">
                These insights revealed an opportunity to rethink sponsorship discovery. Instead of
                another sponsorship management platform, SponsorSphere was designed as an AI-powered
                sponsorship intelligence platform that combines:
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {designOpportunity.map((o) => (
                  <li
                    key={o}
                    className="rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-xs text-silver"
                  >
                    {o}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                By addressing the gaps identified during competitive analysis, SponsorSphere creates
                a faster, smarter, and more contextual sponsorship experience.
              </p>
            </div>
          </div>
        </div>

        <p
          data-reveal
          className="mt-14 max-w-3xl font-display text-2xl font-light leading-tight text-silver md:text-4xl"
        >
          Final insight — <span className="text-foreground">matching</span> was the biggest
          challenge, not funding.
        </p>

      </Shell>

      {/* ============ 06.5 · WHY I DESIGNED IT THIS WAY ============ */}
      <section className="relative overflow-hidden border-y border-border">
        <div aria-hidden className="absolute inset-0 blueprint-grid opacity-25" />
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[50vh] w-[70vw] -translate-x-1/2 -translate-y-1/2 animate-smoke rounded-full bg-racing/10 blur-[140px]"
        />
        <Shell className="py-24 md:py-32">
          <Eyebrow>🏎 Strategy Room</Eyebrow>
          <h2
            data-split
            className="mt-6 max-w-4xl font-display text-[clamp(2rem,5.4vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em]"
          >
            Why I Designed It This Way
          </h2>
          <p data-reveal className="mt-6 font-display text-xl font-light text-silver md:text-2xl">
            Every winning move has a strategy.
          </p>
          <p data-reveal className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            "Great products aren't built by chance—they're built through thousands of intentional
            decisions." Throughout SponsorSphere, every screen was designed to solve a specific user
            problem while balancing business goals, usability and technical feasibility. Explore the
            key decisions behind the product.
          </p>

          {/* racing line connecting the hotspots */}
          <div className="relative mt-14">
            <svg
              aria-hidden
              viewBox="0 0 1200 60"
              className="absolute -top-8 left-0 hidden h-14 w-full lg:block"
            >
              <path
                data-draw
                d="M0 40 C 200 0, 400 60, 600 30 S 1000 0, 1200 35"
                fill="none"
                stroke="var(--electric)"
                strokeWidth="1.5"
                strokeOpacity="0.6"
              />
            </svg>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {decisions.map((d) => {
                const done = explored.includes(d.id);
                return (
                  <button
                    key={d.id}
                    data-reveal
                    onClick={() => openCard(d.id)}
                    className="group relative overflow-hidden rounded-3xl glass-panel p-7 text-left transition duration-500 hover:-translate-y-2 hover:border-electric/50"
                  >
                    <span
                      aria-hidden
                      className={`absolute right-6 top-6 h-2.5 w-2.5 rounded-full ${
                        done ? "bg-electric" : "animate-node bg-racing"
                      }`}
                    />
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                      Decision {d.id}
                    </p>
                    <h3 className="mt-4 font-display text-2xl font-semibold leading-tight">
                      {d.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">{d.hook}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-electric">
                      {done ? "Revisit" : "Open"}{" "}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-electric transition-all duration-700"
                style={{ width: `${(explored.length / decisions.length) * 100}%` }}
              />
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              {explored.length}/{decisions.length} decisions explored
            </span>
          </div>

          {allExplored && (
            <div className="mt-12 animate-rise rounded-3xl border border-racing/40 bg-racing/[0.08] p-10 text-center">
              <p className="mx-auto max-w-3xl font-display text-2xl font-light leading-snug text-silver md:text-3xl">
                "Every screen you saw wasn't designed because it looked good. It was designed
                because it solved a real problem."
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <span className="text-3xl">🏎</span>
                <span className="h-px w-40 bg-gradient-to-r from-racing to-transparent" />
                <button
                  onClick={() => scrollToId("machine")}
                  className="text-xs font-semibold uppercase tracking-[0.24em] text-electric"
                >
                  Accelerate to Building the Machine
                </button>
              </div>
            </div>
          )}
        </Shell>

        {/* decision modal */}
        {openDecision && (
          <div
            className="fixed inset-0 z-[60] flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm md:items-center md:p-6"
            onClick={() => setOpenDecision(null)}
          >
            {(() => {
              const d = decisions.find((x) => x.id === openDecision)!;
              return (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="max-h-[88svh] w-full max-w-3xl animate-rise overflow-y-auto rounded-t-3xl glass-panel p-8 md:rounded-3xl md:p-12"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-electric">
                        🎯 Decision {d.id}
                      </p>
                      <h3 className="mt-3 font-display text-3xl font-bold md:text-4xl">{d.title}</h3>
                    </div>
                    <button
                      onClick={() => setOpenDecision(null)}
                      aria-label="Close decision"
                      className="rounded-full border border-border p-2 text-muted-foreground transition hover:text-foreground"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-8 space-y-7">
                    {[
                      ["🚩 Problem", d.problem],
                      ["💡 Design Decision", d.decision],
                      ["🧠 Why This Approach?", d.reasoning],
                    ].map(([label, body]) => (
                      <div key={label}>
                        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                          {label}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-silver md:text-base">{body}</p>
                      </div>
                    ))}
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                        🚀 Impact
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {d.impact.map((i) => (
                          <li
                            key={i}
                            className="rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-xs text-silver"
                          >
                            {i}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </section>

      {/* ============ 07 · BUILDING THE MACHINE ============ */}
      <section id="machine" className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 blueprint-grid opacity-40" />
        <Shell className="py-24 md:py-32">
          <Eyebrow>Building the Machine</Eyebrow>
          <h2
            data-split
            className="mt-6 max-w-3xl font-display text-[clamp(2rem,5.4vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em]"
          >
            From Blueprint to Bodywork
          </h2>

          <svg aria-hidden viewBox="0 0 1200 180" className="mt-12 h-32 w-full md:h-44">
            <path
              data-draw
              d="M20 150 H 260 L 320 60 H 620 L 680 150 H 1180"
              fill="none"
              stroke="var(--electric)"
              strokeWidth="1.5"
              strokeOpacity="0.7"
            />
            <path
              data-draw
              d="M20 120 C 300 120, 300 30, 600 30 S 900 120, 1180 120"
              fill="none"
              stroke="var(--silver)"
              strokeWidth="1"
              strokeOpacity="0.35"
              strokeDasharray="6 8"
            />
          </svg>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {buildStages.map((s, i) => (
              <div
                key={s.label}
                data-reveal
                className="rounded-2xl border border-dashed border-electric/25 bg-carbon/60 p-6 transition hover:border-electric/60"
              >
                <span className="font-mono text-[10px] tracking-[0.24em] text-electric">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">{s.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6">
            {[
              { src: ideation.url, alt: "Ideation mind map of SponsorSphere features" },
              { src: design.url, alt: "Wireframes and high fidelity UI screens for SponsorSphere" },
            ].map((img) => (
              <figure
                key={img.src}
                data-reveal
                className="overflow-hidden rounded-3xl border border-border bg-white"
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full" />
              </figure>
            ))}
          </div>
        </Shell>
      </section>

      {/* ============ 08 · FULL THROTTLE UI ============ */}
      <section
        data-hwrap
        className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden border-y border-border carbon-weave"
      >
        <div className="mx-auto w-full max-w-[1280px] shrink-0 px-6 pt-16 md:px-10 md:pt-20">
          <Eyebrow>Full Throttle UI</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(1.8rem,4.6vw,3.6rem)] font-bold uppercase tracking-[-0.03em]">
            The Product at Speed
          </h2>
        </div>

        <div className="flex flex-1 items-center overflow-x-auto py-10 lg:overflow-visible">
          <div
            data-htrack
            className="flex items-center gap-6 px-6 md:px-10"
            style={{ willChange: "transform" }}
          >
            {screens.map((s, i) => (
              <article
                key={s.name}
                data-hcard
                className="group relative flex w-[86vw] shrink-0 flex-col rounded-3xl glass-panel p-5 transition duration-500 hover:-translate-y-1.5 sm:w-[560px]"
              >
                <div className="relative h-[min(46svh,340px)] overflow-hidden rounded-2xl bg-gradient-to-br from-gunmetal/60 to-carbon p-2">
                  <ScreenMock index={i} />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.24em] text-electric">
                  Screen {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1.5 font-display text-xl font-semibold md:text-2xl">{s.name}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-silver">
                    Purpose ·{" "}
                  </span>
                  {s.purpose}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-racing">
                    UX Focus ·{" "}
                  </span>
                  {s.focus}
                </p>
              </article>
            ))}
            <span aria-hidden className="block w-[8vw] shrink-0 lg:w-[24vw]" />
          </div>
        </div>
      </section>


      {/* ============ 09 · THE RACE STRATEGY ============ */}
      <section data-board className="relative overflow-hidden carbon-weave">
        <Shell className="py-24 md:py-32">
          <Eyebrow>The Race Strategy</Eyebrow>
          <h2
            data-split
            className="mt-6 max-w-3xl font-display text-[clamp(2rem,5.4vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em]"
          >
            The Engineer's Board
          </h2>
          <p className="mt-4 font-hand text-3xl text-racing">five weeks. one racing line.</p>

          <div className="relative mt-16">
            {/* circuit spine */}
            <span
              aria-hidden
              className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-electric via-silver/40 to-racing md:block"
            />
            <span
              data-racecar
              aria-hidden
              className="absolute left-0 top-0 hidden text-2xl md:block"
            >
              🏎
            </span>

            <div className="space-y-8 md:pl-16">
              {strategy.map((s) => (
                <article
                  key={s.week}
                  data-pin-card
                  className="relative rounded-3xl glass-panel p-8"
                >
                  <span
                    aria-hidden
                    className="absolute -top-3 left-10 h-6 w-24 rotate-[-4deg] rounded-sm bg-silver/20 backdrop-blur-sm"
                  />
                  <div className="flex flex-wrap items-baseline gap-4">
                    <span className="text-2xl">{s.flag}</span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-electric">
                      {s.week}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                      {s.phase}
                    </span>
                  </div>
                  <h3 className="mt-3 font-hand text-4xl text-foreground">{s.title}</h3>
                  <div className="mt-6 grid gap-8 md:grid-cols-[1.3fr_1fr]">
                    <ul className="space-y-2">
                      {s.items.map((it) => (
                        <li key={it} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="mt-2 h-1 w-3 shrink-0 bg-electric/70" />
                          {it}
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-2xl border border-dashed border-racing/40 p-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-racing">
                        Deliverables
                      </p>
                      <ul className="mt-3 space-y-1.5 font-hand text-xl leading-tight text-silver">
                        {s.deliverables.map((d) => (
                          <li key={d}>— {d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Shell>
      </section>

      {/* ============ 10 · PERFORMANCE DASHBOARD ============ */}
      <section className="relative overflow-hidden border-y border-border">
        <Shell className="py-24 md:py-32">
          <Eyebrow>Performance Dashboard</Eyebrow>
          <h2
            data-split
            className="mt-6 max-w-3xl font-display text-[clamp(2rem,5.4vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em]"
          >
            Reading the Gauges
          </h2>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {gauges.map((g) => (
              <div key={g.label} data-reveal className="text-center">
                <div className="relative mx-auto h-32 w-32">
                  <svg viewBox="0 0 100 100" className="h-full w-full -rotate-[0deg]">
                    <path
                      d="M15 78 A 45 45 0 1 1 85 78"
                      fill="none"
                      stroke="var(--gunmetal)"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M15 78 A 45 45 0 1 1 85 78"
                      fill="none"
                      stroke="var(--electric)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray="212"
                      strokeDashoffset={212 - (g.value / 100) * 212}
                      opacity="0.85"
                    />
                  </svg>
                  <span
                    data-needle={g.value}
                    className="absolute bottom-[30%] left-1/2 h-[34%] w-[2px] origin-bottom -translate-x-1/2 rounded-full bg-racing"
                  />
                  <span className="absolute bottom-[27%] left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1/2 rounded-full border border-racing bg-carbon" />
                </div>
                <p className="mt-3 font-display text-lg font-semibold">{g.read}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  {g.label}
                </p>
              </div>
            ))}
          </div>
        </Shell>
      </section>

      {/* ============ 11 · VICTORY LANE ============ */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <img
            src={trophyImg}
            alt=""
            loading="lazy"
            width={1600}
            height={912}
            data-parallax="12"
            className="h-[120%] w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon via-carbon/85 to-carbon" />
        </div>
        <Shell className="py-28 md:py-36">
          <Eyebrow>Victory Lane</Eyebrow>
          <h2
            data-split
            className="mt-6 font-display text-[clamp(2.4rem,7vw,6rem)] font-black uppercase leading-[0.9] tracking-[-0.04em]"
          >
            The Finish Line
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <p data-reveal className="text-base leading-relaxed text-silver">
              SponsorSphere demonstrates how AI can enhance—not replace—the product design process.
              By combining AI with human-centered thinking, the project accelerated research,
              improved ideation and enabled faster design exploration while maintaining strategic UX
              decision-making.
            </p>
            <p data-reveal className="font-display text-2xl font-light leading-snug text-foreground md:text-3xl">
              This wasn't about designing another sponsorship platform. It was about reimagining how
              AI and designers collaborate to build better products.
            </p>
          </div>
        </Shell>
      </section>

      {/* ============ FINAL ============ */}
      <section className="relative overflow-hidden border-t border-border carbon-weave">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-24 bg-[repeating-conic-gradient(var(--carbon)_0%_25%,var(--gunmetal)_0%_50%)] bg-[length:48px_48px] opacity-40"
        />
        <Shell className="py-28 text-center md:py-40">
          <h2
            data-split
            className="mx-auto max-w-4xl font-display text-[clamp(2rem,5.6vw,4.8rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em]"
          >
            Every Great Race Ends. Every Great Product Begins.
          </h2>
          <p data-reveal className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            SponsorSphere represents my vision of the future of Product Design—where AI acts as a
            co-pilot, enabling designers to spend less time on repetitive tasks and more time
            solving meaningful user problems.
          </p>
          <p data-reveal className="mx-auto mt-6 max-w-2xl font-display text-xl text-silver">
            The finish line of this project is only the starting line for what's next.
          </p>
          <p className="mt-10 font-hand text-4xl text-racing">Thank you for taking the ride.</p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full glass-panel px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition hover:border-electric/50"
            >
              <ArrowLeft className="h-4 w-4" /> Back to portfolio
            </Link>
            <Link
              to="/case-studies/talentai"
              className="inline-flex items-center gap-2 rounded-full bg-racing px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition hover:scale-[1.03]"
            >
              Next case study <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Shell>
      </section>

      {/* ============ FLOATING BEHANCE FAB ============ */}
      <a
        href={BEHANCE}
        target="_blank"
        rel="noreferrer"
        className="group fixed bottom-6 right-6 z-[70] flex items-center gap-3 overflow-hidden rounded-full glass-panel py-4 pl-4 pr-4 shadow-[0_0_40px_oklch(0.68_0.19_245/0.35)] transition-all duration-500 hover:pr-6"
      >
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-electric/20 text-electric">
          <BehanceIcon />
        </span>
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-medium tracking-wide text-silver transition-all duration-500 group-hover:max-w-[280px]">
          View the Complete Behance Case Study
        </span>
      </a>
    </main>
  );
}


function BehanceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M9.1 5.5c1.1 0 2 .1 2.7.4.7.2 1.3.6 1.7 1 .4.4.7.9.9 1.4.2.6.3 1.2.3 1.9 0 .8-.2 1.4-.5 2-.4.5-.9 1-1.6 1.3.9.3 1.6.8 2 1.5.5.7.7 1.5.7 2.5 0 .8-.2 1.5-.5 2.1-.3.6-.7 1.1-1.2 1.5-.5.4-1.1.7-1.8.8-.7.2-1.4.3-2.1.3H0V5.5h9.1zM8.6 12c.6 0 1.1-.2 1.5-.5.4-.3.6-.8.6-1.4 0-.4-.1-.7-.2-.9-.1-.3-.3-.4-.5-.6-.2-.1-.5-.2-.8-.3-.3 0-.6-.1-1-.1H3.6V12h5zm.2 6.7c.4 0 .7 0 1.1-.1.3-.1.6-.2.8-.4.2-.2.4-.4.6-.7.1-.3.2-.6.2-1.1 0-.8-.2-1.4-.7-1.8-.5-.3-1.1-.5-1.9-.5H3.6v4.6h5.2zM19.2 18.6c.5.5 1.2.7 2.1.7.6 0 1.2-.2 1.7-.5.5-.3.8-.7.9-1h2.6c-.4 1.3-1.1 2.3-2 2.9-.9.6-2 .9-3.3.9-.9 0-1.7-.2-2.4-.4-.7-.3-1.3-.7-1.8-1.3-.5-.5-.9-1.2-1.1-1.9-.3-.8-.4-1.6-.4-2.5 0-.9.1-1.7.4-2.4.3-.8.7-1.4 1.2-1.9.5-.6 1.1-1 1.8-1.3.7-.3 1.5-.5 2.3-.5 1 0 1.8.2 2.5.6.7.4 1.3.9 1.8 1.5.5.6.8 1.4 1 2.2.2.8.3 1.7.2 2.6h-8.4c0 1 .3 1.8.9 2.3zm3.7-6.3c-.4-.4-1-.7-1.9-.7-.5 0-1 .1-1.3.3-.4.2-.6.4-.9.7-.2.3-.4.5-.4.8-.1.3-.1.5-.1.8h5.2c-.2-.9-.4-1.5-.6-1.9zM17.4 6.9h6.5v1.6h-6.5z" />
    </svg>
  );
}
