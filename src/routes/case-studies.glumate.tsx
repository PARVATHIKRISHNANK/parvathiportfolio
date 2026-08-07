import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Heart,
  Sparkles,
  MessageCircle,
  Bell,
  Users,
  GraduationCap,
  Stethoscope,
  ShieldCheck,
  Activity,
  ChevronRight,
} from "lucide-react";
import t1dHero from "@/assets/t1d-hero.jpg.asset.json";
import { useStoryReveal, useScrollProgress, useCountUp } from "@/lib/use-story";

export const Route = createFileRoute("/case-studies/glumate")({
  head: () => ({
    meta: [
      { title: "Glumate — Growing Up With Type 1 Diabetes · Parvathi K" },
      {
        name: "description",
        content:
          "Glumate is an AI transition companion for young adults moving from pediatric to adult Type 1 Diabetes care. A story-led case study on fear, research, confidence and independence.",
      },
      { property: "og:title", content: "Glumate — Growing up doesn't come with instructions" },
      {
        property: "og:description",
        content:
          "A cinematic UX case study: designing an emotional, AI-supported transition companion for young adults living with Type 1 Diabetes.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: t1dHero.url },
      { name: "twitter:image", content: t1dHero.url },
    ],
  }),
  component: GlumateCaseStudy,
});

/* ------------------------------------------------------------------ */
/* shared bits                                                         */
/* ------------------------------------------------------------------ */

function Chapter({
  n,
  eyebrow,
  title,
  lead,
  children,
  tone = "default",
}: {
  n: string;
  eyebrow: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
  tone?: "default" | "deep" | "soft";
}) {
  const bg = tone === "deep" ? "bg-card" : tone === "soft" ? "bg-secondary/40" : "";
  return (
    <section className={`relative border-t border-border ${bg}`}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-24 md:py-36">
        <div data-story className="mb-12 md:mb-16">
          <div className="font-mono text-xs tracking-[0.24em] text-care mb-4">
            {n} — {eyebrow.toUpperCase()}
          </div>
          <h2 className="font-display font-light text-3xl md:text-6xl leading-[1.02] tracking-tight max-w-4xl">
            {title}
          </h2>
          {lead && (
            <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              {lead}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

function Stat({
  value,
  suffix = "",
  decimals = 0,
  label,
  sub,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
  sub?: string;
}) {
  const { ref, value: v } = useCountUp(value);
  return (
    <div
      data-story
      className="rounded-3xl border border-border bg-card/60 p-8 hover:border-care/40 transition-colors"
    >
      <div className="font-display text-5xl md:text-6xl font-light tracking-tight">
        <span ref={ref}>
          {v.toLocaleString("en-IN", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })}
        </span>
        {suffix}
      </div>
      <div className="mt-3 text-sm">{label}</div>
      {sub && <div className="text-sm text-muted-foreground">{sub}</div>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 01 — HERO: the girl who grows up                                    */
/* ------------------------------------------------------------------ */

const AGES = [
  { age: 13, quote: "Mom reminds me every insulin dose.", stage: "School bag" },
  { age: 16, quote: "My doctor knows everything about me.", stage: "School bag" },
  { age: 18, quote: "I'm moving to college.", stage: "College backpack" },
  { age: 21, quote: "I forgot my insulin today.", stage: "Office laptop" },
  { age: 23, quote: "I finally booked my appointment myself.", stage: "Independent adult" },
];

function Girl({ p }: { p: number }) {
  // p: 0 → 1 growth progress
  const scale = 0.82 + p * 0.18;
  const stage = Math.min(3, Math.floor(p * 4));
  const show = (i: number) => (stage === i ? 1 : 0);
  return (
    <svg
      viewBox="0 0 260 420"
      className="h-full w-full"
      style={{ transform: `scale(${scale})`, transformOrigin: "50% 100%", transition: "transform 0.4s linear" }}
      role="img"
      aria-label="Illustration of a young girl growing from age 13 to 25"
    >
      <defs>
        <linearGradient id="glu-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.86 0.06 60)" />
          <stop offset="100%" stopColor="oklch(0.78 0.07 50)" />
        </linearGradient>
        <linearGradient id="glu-cloth" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--care)" />
          <stop offset="100%" stopColor="var(--calm)" />
        </linearGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="130" cy="404" rx="66" ry="9" fill="oklch(1 0 0 / 8%)" />

      {/* legs */}
      <rect x="112" y="292" width="15" height="106" rx="7" fill="url(#glu-skin)" />
      <rect x="134" y="292" width="15" height="106" rx="7" fill="url(#glu-skin)" />

      {/* body */}
      <path
        d="M96 176c0-20 16-34 34-34s34 14 34 34l10 92c1 12-8 22-20 22h-48c-12 0-21-10-20-22z"
        fill="url(#glu-cloth)"
      />
      {/* arms */}
      <rect x="80" y="180" width="14" height="94" rx="7" fill="url(#glu-skin)" transform="rotate(6 87 180)" />
      <rect x="166" y="180" width="14" height="94" rx="7" fill="url(#glu-skin)" transform="rotate(-6 173 180)" />

      {/* head */}
      <circle cx="130" cy="106" r="40" fill="url(#glu-skin)" />
      {/* hair */}
      <path d="M90 104c0-26 18-46 40-46s40 20 40 46c0-14-16-20-40-20s-40 6-40 20z" fill="oklch(0.24 0.02 40)" />
      <path d="M92 104c-8 26-4 52 4 62-14-16-18-44-4-62z" fill="oklch(0.24 0.02 40)" />
      <path d="M168 104c8 26 4 52-4 62 14-16 18-44 4-62z" fill="oklch(0.24 0.02 40)" />
      {/* face */}
      <circle cx="117" cy="106" r="3.4" fill="oklch(0.2 0.01 260)" />
      <circle cx="143" cy="106" r="3.4" fill="oklch(0.2 0.01 260)" />
      <path
        d={p > 0.55 ? "M118 122q12 12 24 0" : "M119 122q11 6 22 0"}
        stroke="oklch(0.2 0.01 260)"
        strokeWidth="2.6"
        fill="none"
        strokeLinecap="round"
      />

      {/* CGM patch — always on her arm */}
      <circle cx="181" cy="216" r="7" fill="var(--warmth)" opacity="0.9" />
      <circle cx="181" cy="216" r="7" fill="none" stroke="var(--warmth)" strokeWidth="1.5" className="animate-ping-soft" />

      {/* accessories per stage */}
      <g opacity={show(0)} style={{ transition: "opacity 0.35s" }}>
        {/* school bag */}
        <rect x="60" y="196" width="34" height="46" rx="10" fill="var(--warmth)" />
        <rect x="66" y="208" width="22" height="10" rx="4" fill="oklch(0.2 0.01 260 / 35%)" />
      </g>
      <g opacity={show(1)} style={{ transition: "opacity 0.35s" }}>
        {/* college backpack */}
        <rect x="56" y="188" width="40" height="62" rx="12" fill="var(--calm)" />
        <rect x="62" y="204" width="28" height="12" rx="5" fill="oklch(0.2 0.01 260 / 35%)" />
        <rect x="62" y="226" width="18" height="8" rx="4" fill="oklch(1 0 0 / 35%)" />
      </g>
      <g opacity={show(2)} style={{ transition: "opacity 0.35s" }}>
        {/* laptop */}
        <rect x="152" y="236" width="62" height="40" rx="5" fill="oklch(0.3 0.01 260)" transform="rotate(-8 152 236)" />
        <rect x="157" y="241" width="52" height="30" rx="3" fill="var(--care)" opacity="0.75" transform="rotate(-8 152 236)" />
      </g>
      <g opacity={show(3)} style={{ transition: "opacity 0.35s" }}>
        {/* tote + phone: independent adult */}
        <rect x="164" y="240" width="40" height="48" rx="6" fill="oklch(0.32 0.02 40)" />
        <path d="M172 240v-10a12 12 0 0 1 24 0v10" stroke="oklch(0.32 0.02 40)" strokeWidth="4" fill="none" />
        <rect x="70" y="238" width="20" height="34" rx="4" fill="oklch(0.18 0.01 260)" stroke="var(--care)" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

function Hero() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const age = 13 + progress * 12;
  const activeCard = Math.min(AGES.length - 1, Math.floor(progress * AGES.length * 0.999));

  return (
    <div ref={ref} className="relative h-[420svh]">
      <div className="sticky top-0 h-svh overflow-hidden">
        {/* ambient */}
        <div className="pointer-events-none absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full bg-care/10 blur-[130px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-[460px] w-[460px] rounded-full bg-calm/10 blur-[130px]" />

        <div className="relative mx-auto grid h-full max-w-[1300px] grid-cols-1 items-center gap-8 px-6 md:grid-cols-2 md:px-10">
          {/* left — the girl + age slider */}
          <div className="relative flex h-[52svh] flex-col justify-end md:h-[76svh]">
            <div className="relative min-h-0 flex-1">
              <div className="absolute inset-0 flex items-end justify-center">
                <Girl p={progress} />
              </div>

              {/* floating quote cards */}
              {AGES.map((a, i) => {
                const on = i === activeCard;
                return (
                  <div
                    key={a.age}
                    className="pointer-events-none absolute left-0 right-0 md:left-auto md:right-[-6%] md:w-[280px]"
                    style={{
                      top: `${12 + i * 13}%`,
                      opacity: on ? 1 : 0,
                      transform: on ? "translateY(0) scale(1)" : "translateY(16px) scale(0.96)",
                      transition: "opacity .5s ease, transform .6s cubic-bezier(.22,1,.36,1)",
                    }}
                  >
                    <div className="rounded-2xl border border-border bg-card/85 p-4 backdrop-blur-xl shadow-[0_20px_60px_oklch(0_0_0/0.55)]">
                      <div className="font-mono text-[11px] tracking-[0.2em] text-care">AGE {a.age}</div>
                      <p className="mt-1.5 font-display text-lg leading-snug">“{a.quote}”</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* age slider */}
            <div className="mt-6">
              <div className="relative h-[3px] w-full rounded-full bg-border">
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-care to-calm"
                  style={{ width: `${progress * 100}%` }}
                />
                <div
                  className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-care shadow-[0_0_0_6px_oklch(0.74_0.13_190/0.18)]"
                  style={{ left: `${progress * 100}%` }}
                />
              </div>
              <div className="mt-3 flex items-center justify-between font-mono text-[11px] tracking-[0.18em] text-muted-foreground">
                <span>13 YEARS</span>
                <span className="text-care">{Math.round(age)} YEARS · {AGES[activeCard].stage}</span>
                <span>25 YEARS</span>
              </div>
            </div>
          </div>

          {/* right — headline */}
          <div className="relative">
            <div className="font-mono text-xs tracking-[0.28em] text-care">GLUMATE · CASE STUDY 03</div>
            <h1 className="mt-6 font-display text-[clamp(2.2rem,5.2vw,4.6rem)] font-light leading-[0.98] tracking-tight">
              Growing up doesn&apos;t come with instructions.
              <span className="block text-care">Managing diabetes should.</span>
            </h1>
            <p className="mt-7 max-w-md text-muted-foreground leading-relaxed">
              An AI-powered digital companion for young adults moving from pediatric to adult Type 1
              Diabetes care — designed around fear, confidence and independence, not just glucose
              numbers.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["B2C Product", "Healthcare", "AI Companion", "Mobile App"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-10 hidden items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-muted-foreground md:flex">
              <span className="h-8 w-[1px] animate-pulse bg-care" />
              SCROLL TO GROW UP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 02 — zoom out: the emotional truth                                  */
/* ------------------------------------------------------------------ */

function EmotionalTruth() {
  return (
    <section className="relative border-t border-border bg-card">
      <div className="mx-auto max-w-[1200px] px-6 py-28 md:px-10 md:py-40 text-center">
        <h2
          data-story
          className="mx-auto max-w-4xl font-display text-[clamp(2rem,5.6vw,4.8rem)] font-light leading-[1.02] tracking-tight"
        >
          The transition isn&apos;t medical.
          <span className="block text-care">It&apos;s emotional.</span>
        </h2>

        <div className="mt-16 grid gap-5 md:grid-cols-4">
          <Stat value={95600} label="Children" sub="living with T1D in India" />
          <Stat value={18} label="Years old" sub="care suddenly changes hands" />
          <Stat value={1000} suffix="s" label="Struggle alone" sub="through the handover" />
          <Stat value={0} label="Digital products" sub="focused on the transition" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 03 — life changes faster than healthcare                            */
/* ------------------------------------------------------------------ */

const LIFE_STOPS = [
  { label: "School", crack: "Parents own the routine", opp: "Teach the teen, not the parent" },
  { label: "College", crack: "No fixed meal or sleep pattern", opp: "Flexible, forgiving tracking" },
  { label: "Hostel", crack: "No supervision, no fridge, no reminders", opp: "Smart contextual nudges" },
  { label: "Job", crack: "Appointments clash with work", opp: "Self-serve scheduling" },
  { label: "Adult hospital", crack: "New doctor, zero history", opp: "Portable readiness summary" },
  { label: "Independent life", crack: "Emotional load carried alone", opp: "Peer + AI support" },
];

function LifeTimeline() {
  const [open, setOpen] = useState<number | null>(2);
  return (
    <Chapter
      n="02"
      eyebrow="The problem"
      title="Life changes faster than healthcare."
      lead="Pediatric care is built around a parent. Adult care assumes a fully formed patient. Everything in between is where young people quietly fall through."
      tone="default"
    >
      <div data-story className="relative">
        <div className="absolute left-0 right-0 top-[26px] hidden h-[2px] bg-border md:block" />
        <div className="grid gap-4 md:grid-cols-6">
          {LIFE_STOPS.map((s, i) => (
            <button
              key={s.label}
              onMouseEnter={() => setOpen(i)}
              onFocus={() => setOpen(i)}
              onClick={() => setOpen(i)}
              className="group relative text-left"
            >
              <div className="relative z-10 mb-4 flex h-[54px] items-center">
                <span
                  className={`grid h-[54px] w-[54px] place-items-center rounded-full border transition-colors ${
                    open === i
                      ? "border-care bg-care/15 text-care"
                      : "border-border bg-background text-muted-foreground"
                  }`}
                >
                  <span className="font-mono text-xs">0{i + 1}</span>
                </span>
              </div>
              <div className="text-sm font-medium">{s.label}</div>
              <div
                className="mt-3 overflow-hidden rounded-2xl border border-border bg-card/60 p-4 transition-all"
                style={{ opacity: open === i ? 1 : 0.45 }}
              >
                <div className="flex items-start gap-2 text-xs text-destructive">
                  <span className="mt-[3px] block h-2 w-[2px] rotate-12 bg-destructive" />
                  <span>{s.crack}</span>
                </div>
                <div className="mt-3 flex items-start gap-2 text-xs text-care">
                  <Sparkles className="mt-[1px] h-3.5 w-3.5 shrink-0" />
                  <span>{s.opp}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <p data-story className="mt-12 font-display text-2xl font-light md:text-3xl">
        Every crack in the timeline became a design opportunity.
      </p>
    </Chapter>
  );
}

/* ------------------------------------------------------------------ */
/* 04 — research: following 1 million lives                            */
/* ------------------------------------------------------------------ */

function Globe() {
  const [zoom, setZoom] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (e) => {
        if (!e[0]?.isIntersecting) return;
        io.disconnect();
        const t1 = setTimeout(() => setZoom(1), 900);
        const t2 = setTimeout(() => setZoom(2), 2100);
        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
        };
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const scale = [1, 2.1, 3.6][zoom];
  const origin = ["50% 50%", "62% 56%", "60% 62%"][zoom];
  const caption = ["Worldwide", "India", "Tamil Nadu"][zoom];

  return (
    <div ref={ref} data-story className="relative overflow-hidden rounded-[32px] border border-border bg-card">
      <div className="aspect-[16/10] w-full overflow-hidden">
        <div
          className="h-full w-full"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: origin,
            transition: "transform 1.6s cubic-bezier(.7,0,.2,1)",
          }}
        >
          <svg viewBox="0 0 400 250" className="h-full w-full">
            <defs>
              <radialGradient id="glo" cx="50%" cy="45%">
                <stop offset="0%" stopColor="var(--care)" stopOpacity="0.18" />
                <stop offset="100%" stopColor="var(--care)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="400" height="250" fill="url(#glo)" />
            {/* dotted world grid */}
            {Array.from({ length: 24 }).map((_, r) =>
              Array.from({ length: 44 }).map((__, c) => {
                const x = 8 + c * 9;
                const y = 8 + r * 10;
                const dx = (x - 200) / 190;
                const dy = (y - 125) / 118;
                if (dx * dx + dy * dy > 1) return null;
                const hot = x > 230 && x < 262 && y > 130 && y < 170;
                return (
                  <circle
                    key={`${r}-${c}`}
                    cx={x}
                    cy={y}
                    r={hot ? 1.9 : 1.2}
                    fill={hot ? "var(--warmth)" : "oklch(1 0 0 / 22%)"}
                  >
                    {hot && (
                      <animate
                        attributeName="opacity"
                        values="0.4;1;0.4"
                        dur="2.6s"
                        repeatCount="indefinite"
                        begin={`${(r + c) * 0.05}s`}
                      />
                    )}
                  </circle>
                );
              }),
            )}
            <circle cx="243" cy="152" r="12" fill="none" stroke="var(--warmth)" strokeWidth="0.8" opacity="0.7" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-5 left-6 font-mono text-xs tracking-[0.22em] text-care">
        {caption.toUpperCase()}
      </div>
    </div>
  );
}

function Research() {
  return (
    <Chapter
      n="03"
      eyebrow="Research"
      title="Following 1 million lives."
      lead="Secondary research across global registries, Indian endocrinology reports and Tamil Nadu clinic data — then 12 conversations with young adults, parents and clinicians."
      tone="deep"
    >
      <Globe />
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <Stat value={1.2} decimals={1} suffix="M" label="Young people" sub="living with Type 1 Diabetes" />
        <Stat value={95600} label="Children" sub="India" />
        <Stat value={22} label="Transition age 18–22" sub="Highest drop-off from care" />
      </div>
    </Chapter>
  );
}

/* ------------------------------------------------------------------ */
/* 05 — questions that needed answers (flip notes)                     */
/* ------------------------------------------------------------------ */

const QUESTIONS = [
  {
    q: "Why do users stop attending appointments?",
    a: "Nobody books it for them anymore. Scheduling is an admin skill nobody taught them.",
  },
  {
    q: "Can technology replace emotional support?",
    a: "No — but it can hold space at 2am, when no clinic and no parent is available.",
  },
  { q: "Why are reminders ignored?", a: "They shame. Alerts that repeat guilt get muted within a week." },
  {
    q: "What do parents actually fear?",
    a: "Not the numbers — silence. They want visibility without taking control back.",
  },
  {
    q: "What makes a doctor's visit useful?",
    a: "Context. Ten minutes is enough only if history arrives before the patient does.",
  },
  {
    q: "When does confidence appear?",
    a: "After the first problem solved alone. Small wins compound faster than education.",
  },
];

function FlipNote({ q, a }: { q: string; a: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      data-story
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      className="group relative block h-[210px] w-full text-left [perspective:1200px]"
    >
      <div
        className="flip-card relative h-full w-full"
        style={{ transform: flipped ? "rotateY(180deg)" : "none" }}
      >
        <div className="flip-face absolute inset-0 rounded-2xl border border-border bg-warmth/10 p-6">
          <div className="font-mono text-[10px] tracking-[0.22em] text-warmth">QUESTION</div>
          <p className="mt-4 font-display text-xl font-light leading-snug">{q}</p>
          <span className="absolute bottom-5 left-6 text-xs text-muted-foreground">Tap to flip</span>
        </div>
        <div
          className="flip-face absolute inset-0 rounded-2xl border border-care/40 bg-care/10 p-6"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="font-mono text-[10px] tracking-[0.22em] text-care">RESEARCH INSIGHT</div>
          <p className="mt-4 text-sm leading-relaxed">{a}</p>
        </div>
      </div>
    </button>
  );
}

function Questions() {
  return (
    <Chapter
      n="04"
      eyebrow="Discovery"
      title="Questions that needed answers."
      lead="Every research question was pinned to the wall. Flip one to see what we actually found."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {QUESTIONS.map((x) => (
          <FlipNote key={x.q} {...x} />
        ))}
      </div>
    </Chapter>
  );
}

/* ------------------------------------------------------------------ */
/* 06 — competitive analysis                                           */
/* ------------------------------------------------------------------ */

const COMPETITORS = [
  {
    name: "One Drop",
    stars: 4,
    good: ["Great tracking", "Coaching add-on"],
    bad: ["Poor transition support", "Adult-first tone"],
  },
  {
    name: "BeatO",
    stars: 4,
    good: ["Excellent for India", "Device ecosystem"],
    bad: ["Medical focused", "No emotional layer"],
  },
  {
    name: "mySugr",
    stars: 3,
    good: ["Playful logging", "Strong data export"],
    bad: ["No peer support", "No caregiver mode"],
  },
];

function Competitive() {
  return (
    <Chapter
      n="05"
      eyebrow="Competitive analysis"
      title="Everyone builds for the disease. Nobody builds for the age."
      tone="soft"
    >
      <div className="grid gap-5 md:grid-cols-4">
        {COMPETITORS.map((c) => (
          <div key={c.name} data-story className="rounded-3xl border border-border bg-card p-7">
            <div className="font-display text-2xl">{c.name}</div>
            <div className="mt-2 text-warmth">{"★".repeat(c.stars)}<span className="text-muted-foreground">{"★".repeat(5 - c.stars)}</span></div>
            <ul className="mt-6 space-y-2 text-sm">
              {c.good.map((g) => (
                <li key={g} className="flex gap-2 text-care">
                  <span>+</span>
                  <span className="text-foreground">{g}</span>
                </li>
              ))}
              {c.bad.map((b) => (
                <li key={b} className="flex gap-2 text-destructive">
                  <span>−</span>
                  <span className="text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div
          data-story
          className="rounded-3xl border border-care/50 bg-gradient-to-b from-care/15 to-calm/10 p-7 shadow-[0_30px_80px_oklch(0_0_0/0.5)]"
        >
          <div className="font-display text-2xl text-care">Glumate</div>
          <div className="mt-2 font-mono text-[10px] tracking-[0.22em] text-muted-foreground">
            TRANSITION FIRST
          </div>
          <ul className="mt-6 space-y-2 text-sm">
            {["Transition readiness", "Education", "Mental health", "Peer support", "AI coach", "Caregiver mode"].map(
              (f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-care">+</span>
                  <span>{f}</span>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>

      <p
        data-story
        className="mt-16 max-w-4xl font-display text-[clamp(1.6rem,3.6vw,3rem)] font-light leading-[1.06]"
      >
        Existing apps manage diabetes.
        <span className="block text-care">Glumate manages the person.</span>
      </p>
    </Chapter>
  );
}

/* ------------------------------------------------------------------ */
/* 07 — affinity mapping as a neural map                               */
/* ------------------------------------------------------------------ */

const NEURONS = [
  {
    quote: "“I forget insulin.”",
    chain: ["Reminder", "Smart notifications", "Habit tracking", "CGM sync"],
  },
  {
    quote: "“I don't know how to talk to a new doctor.”",
    chain: ["Appointment prep", "Question builder", "Shareable summary", "Readiness score"],
  },
  {
    quote: "“I feel like the only one my age.”",
    chain: ["Peer circles", "Moderated stories", "Streak buddies", "Community wins"],
  },
];

function Affinity() {
  return (
    <Chapter
      n="06"
      eyebrow="Affinity mapping"
      title="Insights that connected like neurons."
      lead="Each cluster grew outward from a single sentence a real person said."
      tone="deep"
    >
      <div className="grid gap-8 md:grid-cols-3">
        {NEURONS.map((n) => (
          <div key={n.quote} data-story className="relative rounded-3xl border border-border bg-background/40 p-7">
            <div className="mb-6 font-display text-xl leading-snug text-warmth">{n.quote}</div>
            <div className="relative pl-6">
              <span className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-care/70 to-transparent" />
              {n.chain.map((c, i) => (
                <div key={c} className="relative mb-5 last:mb-0">
                  <span
                    className="absolute -left-6 top-1.5 h-3 w-3 rounded-full bg-care animate-node"
                    style={{ animationDelay: `${i * 0.35}s` }}
                  />
                  <div className="text-sm">{c}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Chapter>
  );
}

/* ------------------------------------------------------------------ */
/* 08 — empathy silhouette                                             */
/* ------------------------------------------------------------------ */

function Empathy() {
  const thoughts = ["“Will this follow me forever?”", "“Everyone else is carefree.”", "“What if I mess up?”"];
  const says = ["“I'm fine, really.”", "“I'll book it later.”"];
  const does = ["Skips logging", "Googles at midnight", "Hides supplies at hostel"];
  return (
    <Chapter n="07" eyebrow="Empathy map" title="What she thinks, says, feels and does.">
      <div data-story className="relative mx-auto grid max-w-[1000px] items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
        {/* thoughts */}
        <div className="space-y-4">
          <div className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground">THINKS</div>
          {thoughts.map((t, i) => (
            <div
              key={t}
              className="rounded-2xl border border-border bg-card/70 p-4 text-sm animate-float-slow"
              style={{ animationDelay: `${i * 1.4}s` }}
            >
              {t}
            </div>
          ))}
        </div>

        {/* silhouette */}
        <div className="relative mx-auto h-[380px] w-[190px]">
          <svg viewBox="0 0 190 380" className="h-full w-full">
            <path
              d="M95 18a44 44 0 0 1 44 44c0 20-10 32-18 40 26 10 44 30 46 62l8 108c1 12-9 22-21 22h-118c-12 0-22-10-21-22l8-108c2-32 20-52 46-62-8-8-18-20-18-40a44 44 0 0 1 44-44z"
              fill="oklch(1 0 0 / 6%)"
              stroke="var(--care)"
              strokeWidth="1.2"
            />
          </svg>
          <Heart className="absolute left-1/2 top-[46%] h-9 w-9 -translate-x-1/2 text-destructive animate-heartbeat" />
          <div className="absolute inset-x-0 bottom-2 text-center font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
            FEELS: ANXIOUS · CAPABLE · TIRED
          </div>
        </div>

        {/* says + does */}
        <div className="space-y-4">
          <div className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground">SAYS</div>
          {says.map((s) => (
            <div key={s} className="rounded-2xl rounded-tl-sm border border-warmth/40 bg-warmth/10 p-4 text-sm">
              {s}
            </div>
          ))}
          <div className="pt-4 font-mono text-[10px] tracking-[0.22em] text-muted-foreground">DOES</div>
          {does.map((d) => (
            <div key={d} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-care" />
              {d}
            </div>
          ))}
        </div>
      </div>
    </Chapter>
  );
}

/* ------------------------------------------------------------------ */
/* 09 — personas                                                       */
/* ------------------------------------------------------------------ */

const AANYA_DAY = [
  { t: "07:10", s: "Morning routine", ok: true },
  { t: "08:00", s: "Misses breakfast", ok: false },
  { t: "09:15", s: "Late to class", ok: false },
  { t: "11:40", s: "Glucose drop", ok: false },
  { t: "13:00", s: "Stress + guilt", ok: false },
  { t: "13:20", s: "Opens Glumate", ok: true },
  { t: "18:00", s: "Confidence restored", ok: true },
];

function Personas() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % AANYA_DAY.length), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <Chapter
      n="08"
      eyebrow="Personas"
      title="Don't read about her. Live her day."
      tone="soft"
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* profile card */}
        <div
          data-story
          className="relative overflow-hidden rounded-[28px] border border-border bg-gradient-to-b from-calm/20 to-card p-8"
        >
          <div className="font-mono text-[10px] tracking-[0.22em] text-care">PRIMARY PERSONA</div>
          <div className="mt-6 grid h-32 w-32 place-items-center rounded-full bg-gradient-to-br from-care/40 to-warmth/30 font-display text-5xl">
            A
          </div>
          <h3 className="mt-6 font-display text-4xl font-light">Meet Aanya</h3>
          <p className="mt-2 text-muted-foreground">22 · College student · Coimbatore</p>
          <div className="mt-6 space-y-3 text-sm">
            {[
              ["Diagnosed", "Age 9"],
              ["Care", "Moving to adult endocrinology"],
              ["Tech", "Phone-first, always in a hurry"],
              ["Goal", "Not be the sick one in the room"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-border pb-2">
                <span className="text-muted-foreground">{k}</span>
                <span className="text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* day flow */}
        <div data-story className="rounded-[28px] border border-border bg-card p-8">
          <div className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground">
            A DAY IN HER LIFE
          </div>
          <div className="mt-6 space-y-1">
            {AANYA_DAY.map((d, i) => {
              const active = i === step;
              return (
                <button
                  key={d.t}
                  onMouseEnter={() => setStep(i)}
                  className="flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left transition-colors"
                  style={{
                    background: active ? "oklch(1 0 0 / 6%)" : "transparent",
                  }}
                >
                  <span className="font-mono text-xs text-muted-foreground">{d.t}</span>
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${d.ok ? "bg-care" : "bg-destructive"} ${
                      active ? "animate-node" : ""
                    }`}
                  />
                  <span className={`text-sm ${active ? "" : "text-muted-foreground"}`}>{d.s}</span>
                  {active && <ChevronRight className="ml-auto h-4 w-4 text-care" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* doctor persona */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div data-story className="rounded-[28px] border border-border bg-card p-8">
          <div className="flex items-center gap-3">
            <Stethoscope className="h-5 w-5 text-care" />
            <div className="font-display text-2xl">Dr. Meera · Adult Endocrinologist</div>
          </div>
          <div className="mt-6 space-y-3">
            {["Queue: 24 patients", "Time per patient: 10 minutes", "History available: almost none"].map(
              (r, i) => (
                <div key={r} className="flex items-center gap-3 rounded-2xl border border-border px-4 py-3 text-sm">
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  {r}
                </div>
              ),
            )}
          </div>
        </div>
        <div
          data-story
          className="rounded-[28px] border border-care/40 bg-care/10 p-8"
        >
          <div className="font-mono text-[10px] tracking-[0.22em] text-care">WITH GLUMATE</div>
          <div className="mt-6 rounded-2xl border border-border bg-background/60 p-6">
            <div className="text-sm text-muted-foreground">Patient readiness score</div>
            <div className="mt-2 font-display text-5xl font-light">78<span className="text-xl">/100</span></div>
            <div className="mt-4 h-2 rounded-full bg-border">
              <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-care to-warmth" />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs">
              {[["Logging", "92%"], ["Knowledge", "71%"], ["Self-booking", "64%"]].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-border py-3">
                  <div className="font-display text-lg">{v}</div>
                  <div className="text-muted-foreground">{k}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Ten minutes becomes enough, because the story arrives before the patient does.
          </p>
        </div>
      </div>
    </Chapter>
  );
}

/* ------------------------------------------------------------------ */
/* 10 — journey map                                                    */
/* ------------------------------------------------------------------ */

const JOURNEY = [
  { stop: "Home", feel: "Safe", note: "Parents manage everything." },
  { stop: "Fear", feel: "Overwhelmed", note: "First appointment booked alone." },
  { stop: "Learning", feel: "Curious", note: "Bite-size education, no jargon." },
  { stop: "Confidence", feel: "Capable", note: "Streaks, small wins, peer stories." },
  { stop: "Adult care", feel: "Prepared", note: "Readiness summary shared with doctor." },
  { stop: "Independent life", feel: "In control", note: "Glumate fades into the background." },
];

function Journey() {
  const [i, setI] = useState(0);
  return (
    <Chapter n="09" eyebrow="Journey map" title="Six stops between childhood care and independence.">
      <div data-story className="overflow-x-auto pb-4">
        <div className="flex min-w-[860px] items-stretch gap-4">
          {JOURNEY.map((j, idx) => (
            <button
              key={j.stop}
              onMouseEnter={() => setI(idx)}
              onClick={() => setI(idx)}
              className={`relative flex-1 rounded-3xl border p-6 text-left transition-all ${
                i === idx ? "border-care bg-care/10" : "border-border bg-card/50"
              }`}
            >
              <div className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground">
                STOP 0{idx + 1}
              </div>
              <div className="mt-3 font-display text-xl">{j.stop}</div>
              <div className="mt-1 text-xs text-care">{j.feel}</div>
              <div
                className="mt-4 text-xs text-muted-foreground transition-all"
                style={{ opacity: i === idx ? 1 : 0.35 }}
              >
                {j.note}
              </div>
              {idx < JOURNEY.length - 1 && (
                <span className="absolute -right-3 top-1/2 hidden h-[1px] w-4 bg-border md:block" />
              )}
            </button>
          ))}
        </div>
      </div>
    </Chapter>
  );
}

/* ------------------------------------------------------------------ */
/* 11 — design principles + product strategy + IA                      */
/* ------------------------------------------------------------------ */

const PRINCIPLES = [
  { t: "Calm", w: "Because anxiety already exists.", icon: Heart },
  { t: "Small wins", w: "Because perfection causes burnout.", icon: Activity },
  { t: "Friendly language", w: "Because users are teenagers.", icon: MessageCircle },
  { t: "Celebrate progress", w: "Because health is emotional.", icon: Sparkles },
  { t: "One tap", w: "Because emergencies happen.", icon: ShieldCheck },
];

function Principles() {
  return (
    <Chapter
      n="10"
      eyebrow="Design principles"
      title="Why before what."
      lead="Five rules that decided every screen, word and animation that followed."
      tone="deep"
    >
      <div className="grid gap-5 md:grid-cols-5">
        {PRINCIPLES.map((p, i) => (
          <div
            key={p.t}
            data-story
            data-story-delay={i * 80}
            className="rounded-3xl border border-border bg-background/40 p-6 hover:border-care/50 transition-colors"
          >
            <p.icon className="h-5 w-5 text-care" />
            <div className="mt-5 font-display text-2xl">{p.t}</div>
            <p className="mt-2 text-sm text-muted-foreground">{p.w}</p>
          </div>
        ))}
      </div>
    </Chapter>
  );
}

function Strategy() {
  return (
    <Chapter n="11" eyebrow="Product strategy" title="Where education, emotion and medicine overlap.">
      <div data-story className="relative mx-auto h-[420px] max-w-[720px]">
        {[
          { l: "Education", x: "50%", y: "18%", c: "var(--care)" },
          { l: "Emotion", x: "22%", y: "66%", c: "var(--warmth)" },
          { l: "Medical", x: "78%", y: "66%", c: "var(--calm)" },
        ].map((c) => (
          <div
            key={c.l}
            className="absolute h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border animate-float-slow"
            style={{
              left: c.x,
              top: c.y,
              borderColor: c.c,
              background: `radial-gradient(circle, ${c.c} 0%, transparent 70%)`,
              opacity: 0.22,
            }}
          />
        ))}
        {[
          { l: "Education", x: "50%", y: "6%" },
          { l: "Emotion", x: "10%", y: "78%" },
          { l: "Medical", x: "90%", y: "78%" },
        ].map((c) => (
          <span
            key={c.l}
            className="absolute -translate-x-1/2 font-mono text-xs tracking-[0.2em] text-muted-foreground"
            style={{ left: c.x, top: c.y }}
          >
            {c.l.toUpperCase()}
          </span>
        ))}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-care bg-background/80 px-7 py-4 font-display text-3xl backdrop-blur-xl">
          Glumate
        </div>
      </div>
    </Chapter>
  );
}

const IA = [
  { n: "Dashboard", c: ["Today", "Glucose", "Streak"] },
  { n: "Tracking", c: ["Insulin", "Meals", "CGM sync"] },
  { n: "Learning", c: ["Micro-lessons", "Quizzes"] },
  { n: "AI companion", c: ["Chat", "Prep for visit"] },
  { n: "Community", c: ["Circles", "Stories"] },
  { n: "Profile", c: ["Readiness", "Caregiver mode"] },
];

function Architecture() {
  return (
    <Chapter n="12" eyebrow="Information architecture" title="One node, expanded." tone="soft">
      <div className="grid gap-5 md:grid-cols-3">
        {IA.map((b, i) => (
          <div
            key={b.n}
            data-story
            data-story-delay={i * 70}
            className="rounded-3xl border border-border bg-card p-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-care animate-node" />
              <div className="font-display text-xl">{b.n}</div>
            </div>
            <div className="mt-4 space-y-2 pl-6">
              {b.c.map((c) => (
                <div key={c} className="relative text-sm text-muted-foreground">
                  <span className="absolute -left-4 top-2 h-[1px] w-3 bg-border" />
                  {c}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Chapter>
  );
}

/* ------------------------------------------------------------------ */
/* 12 — phone mock + UI decisions                                      */
/* ------------------------------------------------------------------ */

function Phone({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <div className="mx-auto w-[230px]">
      <div className="relative aspect-[9/19] rounded-[30px] border border-border bg-carbon p-[6px] shadow-[0_30px_80px_oklch(0_0_0/0.6)]">
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[24px] bg-background">
          <div className="relative flex items-center justify-between px-4 pt-2 text-[9px] text-muted-foreground">
            <span>9:41</span>
            <span className="absolute left-1/2 top-[5px] h-[12px] w-[44px] -translate-x-1/2 rounded-full bg-carbon" />
            <span>▮▮▯</span>
          </div>
          <div className="flex min-h-0 flex-1 flex-col gap-2 p-3">{children}</div>
        </div>
      </div>
      {label && (
        <div className="mt-4 text-center font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
          {label.toUpperCase()}
        </div>
      )}
    </div>
  );
}

function ReminderScreen() {
  return (
    <Phone label="Persistent reminder">
      <div className="text-[11px] font-medium">Good morning, Aanya</div>
      <div className="rounded-2xl border border-warmth/40 bg-warmth/10 p-3">
        <div className="flex items-center gap-2 text-[9px] text-warmth">
          <Bell className="h-3 w-3" /> INSULIN · 8:00 AM
        </div>
        <div className="mt-1.5 text-[11px]">Rapid-acting · 6 units</div>
        <div className="mt-3 flex gap-2">
          <span className="flex-1 rounded-full bg-care py-1.5 text-center text-[9px] font-semibold text-background">
            Log it
          </span>
          <span className="rounded-full border border-border px-3 py-1.5 text-[9px]">Snooze</span>
        </div>
      </div>
      <div className="rounded-2xl border border-border p-3">
        <div className="text-[9px] text-muted-foreground">TODAY&apos;S RANGE</div>
        <div className="mt-2 flex h-12 items-end gap-1">
          {[40, 62, 55, 78, 66, 84, 58].map((h, i) => (
            <span key={i} className="flex-1 rounded-t bg-care/70" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className="mt-auto rounded-2xl bg-secondary p-3 text-[10px]">
        <span className="text-care">3-day streak.</span> Small wins count.
      </div>
    </Phone>
  );
}

function LearningScreen() {
  return (
    <Phone label="Micro-learning">
      <div className="text-[11px] font-medium">Learn · 2 min</div>
      {["Carb counting at the canteen", "Alcohol & glucose", "Talking to a new doctor"].map((t, i) => (
        <div key={t} className="rounded-2xl border border-border p-3">
          <div className="text-[10px]">{t}</div>
          <div className="mt-2 h-1 rounded-full bg-border">
            <span
              className="block h-full rounded-full bg-gradient-to-r from-care to-warmth"
              style={{ width: `${[100, 60, 15][i]}%` }}
            />
          </div>
        </div>
      ))}
      <div className="mt-auto rounded-2xl border border-care/40 bg-care/10 p-3 text-[10px]">
        <GraduationCap className="mb-1 h-3.5 w-3.5 text-care" />
        Readiness +4 this week
      </div>
    </Phone>
  );
}

function CommunityScreen() {
  return (
    <Phone label="Peer circles">
      <div className="text-[11px] font-medium">Your circle</div>
      {[
        ["Nila, 21", "Booked my own appointment 🎉"],
        ["Arjun, 19", "Hostel food hacks thread"],
        ["Zoya, 23", "First job + T1D — AMA"],
      ].map(([n, m]) => (
        <div key={n} className="flex gap-2 rounded-2xl border border-border p-3">
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-calm/40 text-[9px]">
            {n[0]}
          </span>
          <span className="min-w-0">
            <span className="block text-[10px]">{n}</span>
            <span className="block truncate text-[9px] text-muted-foreground">{m}</span>
          </span>
        </div>
      ))}
      <div className="mt-auto flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[9px] text-muted-foreground">
        <Users className="h-3 w-3" /> Moderated by educators
      </div>
    </Phone>
  );
}

const UI_STORIES = [
  {
    problem: "Users skip insulin doses when routines break.",
    decision: "A persistent, guilt-free reminder that can be logged in one tap.",
    impact: "Never miss important medication — and never feel shamed for a miss.",
    screen: <ReminderScreen />,
  },
  {
    problem: "Education arrives as PDFs written for parents.",
    decision: "Two-minute lessons in teen language, tied to real situations.",
    impact: "Knowledge grows without homework — and feeds the readiness score.",
    screen: <LearningScreen />,
  },
  {
    problem: "Young adults feel like the only person their age with T1D.",
    decision: "Small moderated peer circles instead of an open forum.",
    impact: "Isolation drops; motivation becomes social, not clinical.",
    screen: <CommunityScreen />,
  },
];

function UIStories() {
  return (
    <Chapter
      n="13"
      eyebrow="The interface"
      title="Every screen arrived because of a problem."
      lead="Problem → design decision → screen → impact."
      tone="deep"
    >
      <div className="space-y-16">
        {UI_STORIES.map((s, i) => (
          <div
            key={s.problem}
            data-story
            className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[direction:rtl]" : ""}`}
          >
            <div className="md:[direction:ltr]">{s.screen}</div>
            <div className="space-y-6 md:[direction:ltr]">
              {[
                ["PROBLEM", s.problem],
                ["DESIGN DECISION", s.decision],
                ["IMPACT", s.impact],
              ].map(([k, v], idx) => (
                <div key={k} className="border-l-2 pl-5" style={{ borderColor: idx === 2 ? "var(--care)" : "var(--border)" }}>
                  <div className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground">{k}</div>
                  <p className={`mt-2 ${idx === 0 ? "font-display text-2xl font-light" : "text-sm text-muted-foreground"}`}>
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Chapter>
  );
}

/* ------------------------------------------------------------------ */
/* 13 — AI companion                                                   */
/* ------------------------------------------------------------------ */

const CHAT = [
  { from: "user", text: "I forgot my insulin." },
  { from: "ai", text: "It's okay. Let's log it together." },
  { from: "ai", text: "How many hours ago was your last dose?" },
  { from: "user", text: "About 6 hours." },
  { from: "ai", text: "Got it. Check your glucose first — I'll walk you through the next step." },
];

function Companion() {
  const [n, setN] = useState(0);
  const [typing, setTyping] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timers: number[] = [];
    const io = new IntersectionObserver(
      (e) => {
        if (!e[0]?.isIntersecting) return;
        io.disconnect();
        CHAT.forEach((_, i) => {
          timers.push(
            window.setTimeout(() => {
              setTyping(true);
              window.setTimeout(() => {
                setTyping(false);
                setN(i + 1);
              }, 700);
            }, i * 1500),
          );
        });
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <Chapter
      n="14"
      eyebrow="AI"
      title="Your transition companion — not a chatbot."
      lead="It doesn't diagnose. It removes the panic between the question and the clinic."
    >
      <div ref={ref} className="grid items-center gap-12 md:grid-cols-2">
        <div data-story>
          <Phone label="Companion">
            <div className="flex items-center gap-2 border-b border-border pb-2">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-care/25">
                <Sparkles className="h-3 w-3 text-care" />
              </span>
              <span className="text-[10px]">Glumate Companion</span>
            </div>
            <div className="flex min-h-0 flex-1 flex-col justify-end gap-2 overflow-hidden">
              {CHAT.slice(0, n).map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-[10px] leading-snug animate-rise ${
                    m.from === "user"
                      ? "self-end rounded-br-sm bg-secondary"
                      : "self-start rounded-bl-sm bg-care/15 text-foreground"
                  }`}
                >
                  {m.text}
                </div>
              ))}
              {typing && (
                <div className="flex gap-1 self-start rounded-2xl bg-care/15 px-3 py-2">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="h-1.5 w-1.5 rounded-full bg-care animate-typing"
                      style={{ animationDelay: `${d * 0.15}s` }}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="mt-2 rounded-full border border-border px-3 py-1.5 text-[9px] text-muted-foreground">
              Ask anything…
            </div>
          </Phone>
        </div>

        <div data-story className="space-y-4">
          {[
            ["Not medical advice", "Every clinical question routes back to her care team."],
            ["Confidence building", "It rehearses the hard conversations before they happen."],
            ["Education", "Answers in plain language, at the moment of need."],
            ["Reminders", "Contextual, forgiving, never repeated as guilt."],
            ["Emotional support", "Available at 2am, when no clinic is."],
          ].map(([k, v]) => (
            <div key={k} className="rounded-2xl border border-border bg-card p-5">
              <div className="font-display text-xl">{k}</div>
              <p className="mt-1 text-sm text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </Chapter>
  );
}

/* ------------------------------------------------------------------ */
/* 14 — caregiver mode                                                 */
/* ------------------------------------------------------------------ */

function Caregiver() {
  return (
    <Chapter n="15" eyebrow="Caregiver mode" title="Visibility for her mother. Ownership for her." tone="soft">
      <div data-story className="relative grid gap-6 md:grid-cols-2">
        <div className="rounded-[28px] border border-warmth/40 bg-warmth/10 p-8">
          <div className="font-mono text-[10px] tracking-[0.22em] text-warmth">MOTHER</div>
          <p className="mt-4 font-display text-2xl font-light">
            “I can see she&apos;s okay — without asking her ten times a day.”
          </p>
          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <div>Weekly summary, not live surveillance</div>
            <div>Alerts only for shared thresholds</div>
            <div>No access to her chats or community</div>
          </div>
        </div>

        <div className="hidden md:block absolute left-1/2 top-1/2 h-[2px] w-16 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-warmth to-care" />

        <div className="rounded-[28px] border border-care/40 bg-care/10 p-8">
          <div className="font-mono text-[10px] tracking-[0.22em] text-care">DAUGHTER</div>
          <p className="mt-4 font-display text-2xl font-light">
            “I choose what she sees. It finally feels like my health.”
          </p>
          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <div>Consent toggles per data type</div>
            <div>Independence score grows as sharing relaxes</div>
            <div>Private journal stays private</div>
          </div>
        </div>
      </div>
    </Chapter>
  );
}

/* ------------------------------------------------------------------ */
/* 15 — behind every screen (flip)                                     */
/* ------------------------------------------------------------------ */

const BEHIND = [
  { screen: "Dashboard", why: "Anxiety spikes at the sight of numbers.", how: "One headline status, details on demand.", impact: "Faster daily check-ins." },
  { screen: "Log flow", why: "Logging competed with class and work.", how: "Three taps max, offline-first.", impact: "Logging consistency up." },
  { screen: "Appointment prep", why: "First adult visit felt like an exam.", how: "Auto-generated questions + summary.", impact: "Visits feel rehearsed, not feared." },
  { screen: "Readiness score", why: "Nobody knew when she was 'ready'.", how: "Composite of skills, not glucose.", impact: "A shared language with her doctor." },
];

function BehindScreens() {
  return (
    <Chapter n="16" eyebrow="Behind every screen" title="Flip a screen to see the thinking." tone="deep">
      <div className="grid gap-5 md:grid-cols-4">
        {BEHIND.map((b) => (
          <BehindCard key={b.screen} {...b} />
        ))}
      </div>
    </Chapter>
  );
}

function BehindCard({ screen, why, how, impact }: { screen: string; why: string; how: string; impact: string }) {
  const [f, setF] = useState(false);
  return (
    <button
      data-story
      onMouseEnter={() => setF(true)}
      onMouseLeave={() => setF(false)}
      onClick={() => setF((v) => !v)}
      className="relative h-[250px] w-full text-left [perspective:1200px]"
    >
      <div className="flip-card relative h-full w-full" style={{ transform: f ? "rotateY(180deg)" : "none" }}>
        <div className="flip-face absolute inset-0 flex flex-col justify-between rounded-3xl border border-border bg-background/50 p-6">
          <div className="grid h-14 w-10 place-items-center rounded-md border border-care/40 bg-care/10">
            <span className="h-6 w-[2px] bg-care/60" />
          </div>
          <div className="font-display text-2xl">{screen}</div>
        </div>
        <div
          className="flip-face absolute inset-0 space-y-3 rounded-3xl border border-care/40 bg-care/10 p-6 text-xs"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div>
            <div className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground">PROBLEM</div>
            <p className="mt-1">{why}</p>
          </div>
          <div>
            <div className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground">DECISION</div>
            <p className="mt-1">{how}</p>
          </div>
          <div>
            <div className="font-mono text-[9px] tracking-[0.2em] text-care">IMPACT</div>
            <p className="mt-1">{impact}</p>
          </div>
        </div>
      </div>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* 16 — prototype                                                      */
/* ------------------------------------------------------------------ */

function Prototype() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  return (
    <div ref={ref} className="relative h-[220svh] border-t border-border">
      <div className="sticky top-0 flex h-svh items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 px-6 md:grid-cols-2 md:px-10">
          <div>
            <div className="font-mono text-xs tracking-[0.24em] text-care">17 — PROTOTYPE</div>
            <h2 className="mt-5 font-display text-4xl font-light leading-tight md:text-6xl">
              Alive in the hand.
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              A fully wired prototype tested with six young adults — every tap, nudge and
              celebration rehearsed before a line of code existed.
            </p>
            <div className="mt-8 h-[2px] w-full max-w-sm rounded-full bg-border">
              <div className="h-full rounded-full bg-care" style={{ width: `${progress * 100}%` }} />
            </div>
          </div>

          <div
            className="relative"
            style={{
              transform: `translateY(${(0.5 - progress) * 60}px) rotateX(${(0.5 - progress) * 12}deg) rotateY(${(progress - 0.5) * 16}deg)`,
              transition: "transform .15s linear",
            }}
          >
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-care/15 blur-[110px]" />
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="absolute h-6 w-6 rounded-full bg-care/40 animate-ping-soft"
                style={{
                  left: `${30 + i * 22}%`,
                  top: `${25 + i * 20}%`,
                  animationDelay: `${i * 0.7}s`,
                }}
              />
            ))}
            <ReminderScreen />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 17 — measuring success                                              */
/* ------------------------------------------------------------------ */

const METRICS = [
  { v: 42, s: "%", l: "Fewer missed appointments", d: "Self-booking + prep flow" },
  { v: 31, s: "%", l: "Lower reported anxiety", d: "Calm tone, guilt-free logging" },
  { v: 68, s: "%", l: "Higher self-management", d: "Streaks and micro-learning" },
  { v: 78, s: "/100", l: "Transition readiness", d: "Average score after 8 weeks" },
];

function Success() {
  return (
    <Chapter
      n="18"
      eyebrow="Measuring success"
      title="Success isn't downloads. It's confident young adults."
    >
      <div className="grid gap-5 md:grid-cols-4">
        {METRICS.map((m) => (
          <Stat key={m.l} value={m.v} suffix={m.s} label={m.l} sub={m.d} />
        ))}
      </div>
    </Chapter>
  );
}

/* ------------------------------------------------------------------ */
/* 18 — ending                                                         */
/* ------------------------------------------------------------------ */

function Ending() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-gradient-to-b from-background via-card to-ink">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-28 md:grid-cols-2 md:px-10 md:py-40">
        <div data-story className="relative h-[420px]">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] rounded-t-[60px] border border-border bg-card/40" />
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="h-[92%] w-[70%]">
              <Girl p={1} />
            </div>
          </div>
        </div>

        <div data-story>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.8rem)] font-light leading-[1.03] tracking-tight">
            Growing up shouldn&apos;t mean
            <span className="block text-care">growing alone.</span>
          </h2>
          <div className="mt-12 font-display text-5xl tracking-tight">Glumate</div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Designed to support every step between childhood care and independent living.
          </p>

          <Link
            to="/"
            className="mt-12 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm hover:border-care hover:text-care transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to portfolio
          </Link>
        </div>
      </div>
      <div className="h-24 bg-gradient-to-b from-transparent to-ink" />
    </section>
  );
}

/* ------------------------------------------------------------------ */

function GlumateCaseStudy() {
  useStoryReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-background">
      <Link
        to="/"
        className="fixed left-5 top-5 z-50 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-xs backdrop-blur-xl hover:border-care hover:text-care transition-colors"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Back
      </Link>

      <Hero />
      <EmotionalTruth />
      <LifeTimeline />
      <Research />
      <Questions />
      <Competitive />
      <Affinity />
      <Empathy />
      <Personas />
      <Journey />
      <Principles />
      <Strategy />
      <Architecture />
      <UIStories />
      <Companion />
      <Caregiver />
      <BehindScreens />
      <Prototype />
      <Success />
      <Ending />
    </main>
  );
}
