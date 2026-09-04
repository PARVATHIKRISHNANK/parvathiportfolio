import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft, ArrowRight, Sparkles, ShieldCheck, MousePointer2, Check, X, Clock,
} from "lucide-react";
import { LedgerDemo, type ScreenKey } from "@/components/ledger/LedgerDemo";
import { journey } from "@/lib/ledger-data";
import { useStoryReveal, useCountUp } from "@/lib/use-story";

export const Route = createFileRoute("/case-studies/ledger")({
  head: () => ({
    meta: [
      { title: "Ledger — AI-Assisted Compliance Workbench | Parvathi K" },
      {
        name: "description",
        content:
          "A portfolio POC case study: designing an AI-assisted compliance and reconciliation workbench where AI recommends and the analyst decides.",
      },
      { property: "og:title", content: "Ledger — AI-Assisted Compliance Workbench" },
      {
        property: "og:description",
        content:
          "Problem, user, AI principle, workflow redesign, interactive prototype and target impact for an enterprise tax reconciliation workbench.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LedgerCase,
});

const sections = [
  { id: "context", n: "01", label: "Context" },
  { id: "problem", n: "02", label: "Problem" },
  { id: "user", n: "03", label: "User" },
  { id: "challenge", n: "04", label: "Challenge" },
  { id: "principle", n: "05", label: "AI Principle" },
  { id: "workflow", n: "06", label: "Workflow" },
  { id: "product", n: "07", label: "Product" },
  { id: "impact", n: "08", label: "Impact" },
  { id: "transparency", n: "09", label: "AI Transparency" },
  { id: "takeaways", n: "10", label: "Takeaways" },
];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-[#6B7280]">{children}</div>
  );
}

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-[1200px] px-6 md:px-10 py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

function LedgerCase() {
  useStoryReveal();
  const [active, setActive] = useState("context");
  const [screen, setScreen] = useState<ScreenKey>("dashboard");
  const [stage, setStage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const goto = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="ledger-scope min-h-screen overflow-x-hidden">
      {/* top bar */}
      <header className="sticky top-0 z-40 border-b border-[#E5E7EB] bg-[#F7F8FA]/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 md:px-10 py-3">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-medium text-[#6B7280] hover:text-[#111827]">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to portfolio
          </Link>
          <span className="rounded-full border border-[#8B5CF6]/30 bg-gradient-to-r from-[#8B5CF6]/10 to-[#EC4899]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#8B5CF6]">
            Portfolio POC
          </span>
        </div>
        {/* mobile section nav */}
        <nav className="lg:hidden flex gap-1.5 overflow-x-auto border-t border-[#E5E7EB] px-4 py-2">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => goto(s.id)}
              className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-medium ${
                active === s.id ? "bg-[#12213B] text-white" : "border border-[#E5E7EB] bg-white text-[#6B7280]"
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>
      </header>

      {/* desktop progress rail */}
      <aside className="hidden lg:block fixed left-6 top-1/2 z-30 -translate-y-1/2">
        <ul className="space-y-2.5">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => goto(s.id)}
                className={`group flex items-center gap-2.5 text-left transition ${
                  active === s.id ? "text-[#111827]" : "text-[#6B7280]"
                }`}
              >
                <span
                  className={`h-px transition-all ${active === s.id ? "w-7 bg-[#2DD4BF]" : "w-3 bg-[#6B7280]/40 group-hover:w-5"}`}
                />
                <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
                  {s.n} {s.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <Hero onExplore={() => goto("context")} onPrinciple={() => goto("principle")} onProduct={() => goto("product")} />

      {/* 01 CONTEXT */}
      <Section id="context">
        <Label>01 / Context</Label>
        <h2 className="max-w-4xl font-display text-3xl md:text-5xl leading-[1.1] tracking-tight" data-story>
          High-volume compliance workflows aren't difficult because there are too few tools.
        </h2>
        <p className="mt-6 max-w-3xl text-lg md:text-2xl text-[#6B7280]" data-story data-story-delay="120">
          They're difficult because the analyst has to make{" "}
          <span className="text-[#111827]">too many decisions across too many records</span>.
        </p>
        <ol className="mt-14 grid gap-3 md:grid-cols-6">
          {["Thousands of records", "Multiple checks", "Exceptions", "Manual review", "Action", "Submission"].map((s, i) => (
            <li
              key={s}
              data-story
              data-story-delay={i * 90}
              className="rounded-xl border border-[#E5E7EB] bg-white p-4"
            >
              <div className="font-mono text-[10px] text-[#6B7280]">{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-1.5 text-sm font-medium">{s}</div>
            </li>
          ))}
        </ol>
      </Section>

      {/* 02 PROBLEM */}
      <Section id="problem" className="!max-w-none bg-[#12213B] text-white">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">02 / The problem</div>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight" data-story>
            Every exception becomes a decision.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["High volume", "Thousands of records can require review during a single filing cycle."],
              ["Scattered decisions", "The analyst moves between records, status information, actions and exceptions."],
              ["High consequence", "A wrong action can affect credit availability and downstream filing outcomes."],
            ].map(([t, d], i) => (
              <div key={t} data-story data-story-delay={i * 120} className="rounded-2xl border border-white/12 bg-white/[0.04] p-6">
                <div className="text-lg font-semibold">{t}</div>
                <p className="mt-2.5 text-sm leading-relaxed text-white/65">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-white/12 p-6" data-story>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">Manual workflow</div>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              {["Find record", "Inspect", "Compare", "Determine risk", "Decide", "Action", "Verify"].map((s, i) => (
                <span key={s} className="inline-flex items-center gap-2">
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5">{s}</span>
                  {i < 6 && <ArrowRight className="h-3 w-3 text-white/30" />}
                </span>
              ))}
              <span className="ml-1 rounded-full border border-[#D97706]/40 bg-[#D97706]/15 px-3 py-1.5 text-[#F0B45E]">
                repeat ×4,750
              </span>
            </div>
            <p className="mt-6 text-lg text-white/80">Too much cognitive effort is spent finding what matters.</p>
          </div>
        </div>
      </Section>

      {/* 03 USER */}
      <Section id="user">
        <Label>03 / The user</Label>
        <h2 className="font-display text-3xl md:text-5xl tracking-tight" data-story>
          Designed around the person making the final decision.
        </h2>
        <div className="mt-12 grid gap-4 lg:grid-cols-[340px_1fr]">
          <div className="rounded-2xl border border-[#E5E7EB] bg-[#12213B] p-6 text-white" data-story>
            <div className="grid h-14 w-14 place-items-center rounded-full bg-[#2DD4BF] text-lg font-semibold text-[#12213B]">MI</div>
            <div className="mt-4 text-xl font-semibold">Meera Iyer</div>
            <div className="text-sm text-white/60">Senior Associate · Client Portal</div>
            <dl className="mt-5 space-y-2 text-xs">
              <div className="flex justify-between border-b border-white/10 pb-1.5"><dt className="text-white/50">Client</dt><dd>Nimbus Retail Pvt Ltd</dd></div>
              <div className="flex justify-between border-b border-white/10 pb-1.5"><dt className="text-white/50">Filing period</dt><dd>October 2025</dd></div>
            </dl>
            <p className="mt-4 text-[11px] text-white/40">All names, clients and suppliers in this case study are fictional.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:col-span-2" data-story data-story-delay="100">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6B7280]">Goal</div>
              <p className="mt-2 text-lg">Resolve exceptions quickly while maintaining confidence in every action.</p>
            </div>
            {[
              ["Frustrations", ["Too many records to inspect", "Difficult to identify high-risk items", "Repetitive review decisions", "Limited visibility into why an item is flagged", "Fear of making an incorrect bulk decision"]],
              ["Needs", ["Prioritisation", "Explainable recommendations", "Confidence", "Fast actions", "Human control"]],
            ].map(([t, list], i) => (
              <div key={String(t)} className="rounded-2xl border border-[#E5E7EB] bg-white p-6" data-story data-story-delay={150 + i * 100}>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6B7280]">{t}</div>
                <ul className="mt-3 space-y-1.5 text-sm text-[#111827]">
                  {(list as string[]).map((l) => (
                    <li key={l} className="flex gap-2"><span className="text-[#2DD4BF]">•</span>{l}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 04 CHALLENGE */}
      <Challenge />

      {/* 05 PRINCIPLE */}
      <Principle />

      {/* 06 WORKFLOW */}
      <Section id="workflow">
        <Label>06 / Workflow</Label>
        <h2 className="max-w-3xl font-display text-3xl md:text-5xl tracking-tight" data-story>
          From searching for problems to seeing what needs attention.
        </h2>
        <BeforeAfter />
        <h3 className="mt-24 font-display text-2xl md:text-3xl" data-story>The workflow becomes a decision journey.</h3>
        <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,320px)_1fr]">
          <ol className="flex gap-2 overflow-x-auto lg:block lg:space-y-2 lg:overflow-visible">
            {journey.map((j, i) => (
              <li key={j.n} className="shrink-0 lg:w-full">
                <button
                  onClick={() => { setStage(i); setScreen(j.screen as ScreenKey); }}
                  className={`w-64 lg:w-full rounded-xl border p-4 text-left transition ${
                    stage === i ? "border-[#2DD4BF] bg-white shadow-[0_12px_40px_-24px_rgba(18,33,59,0.6)]" : "border-[#E5E7EB] bg-white/60 hover:bg-white"
                  }`}
                >
                  <div className="font-mono text-[10px] text-[#6B7280]">{j.n}</div>
                  <div className="mt-1 text-sm font-semibold">{j.title}</div>
                  <div className="mt-1 text-[11px] text-[#8B5CF6]">{j.ai}</div>
                </button>
              </li>
            ))}
          </ol>
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6B7280]">
              Stage {journey[stage]!.n} · {journey[stage]!.title}
            </div>
            <p className="mt-3 text-lg leading-relaxed">{journey[stage]!.desc}</p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/25 bg-[#8B5CF6]/8 px-3 py-1.5 text-xs text-[#8B5CF6]">
              <Sparkles className="h-3.5 w-3.5" /> {journey[stage]!.ai}
            </div>
            <button
              onClick={() => goto("product")}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#12213B] px-4 py-2.5 text-xs font-semibold text-white"
            >
              Open this screen in the prototype <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </Section>

      {/* 07 PRODUCT */}
      <Section id="product" className="!max-w-none bg-white border-y border-[#E5E7EB]">
        <div className="mx-auto max-w-[1200px]">
          <Label>07 / Product</Label>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl md:text-5xl tracking-tight">Now, step into Ledger.</h2>
            <p className="max-w-sm text-sm text-[#6B7280]">
              Explore the workflow as an analyst would. Decisions you make here carry across screens.
            </p>
          </div>
          <div className="mt-10">
            <LedgerDemo screen={screen} setScreen={setScreen} />
          </div>
        </div>
      </Section>

      {/* 08 IMPACT */}
      <Impact />

      {/* 09 TRANSPARENCY */}
      <Section id="transparency" className="!max-w-none bg-[#12213B] text-white">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">09 / AI transparency</div>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight" data-story>Don't hide the AI. Explain it.</h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-6" data-story>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[["Recommendation", "Reject"], ["Confidence", "94%"], ["Risk", "High"], ["Impact", "₹2.48 L"]].map(([k, v]) => (
                  <div key={k} className="rounded-xl border border-white/10 p-3">
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">{k}</div>
                    <div className="mt-1 text-lg font-semibold">{v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">Rationale</div>
              <ul className="mt-2 space-y-1.5 text-sm text-white/80">
                {["Vendor return not filed.", "Tax mismatch detected.", "Duplicate pattern detected."].map((r) => (
                  <li key={r} className="flex gap-2"><span className="text-[#2DD4BF]">•</span>{r}</li>
                ))}
              </ul>
              <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">User control</div>
              <div className="mt-2 flex gap-2 text-xs">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2"><Check className="h-3.5 w-3.5 text-[#2DD4BF]" /> Accept</span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2"><X className="h-3.5 w-3.5" /> Reject</span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2"><Clock className="h-3.5 w-3.5" /> Pending</span>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6" data-story data-story-delay="120">
              <p className="font-display text-2xl md:text-3xl leading-snug">
                Every AI recommendation is explainable, reviewable and overridable.
              </p>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">Progressive disclosure</div>
                <h3 className="mt-2 text-xl font-semibold">Each step narrows the problem.</h3>
                <ol className="mt-4 space-y-2">
                  {[
                    ["Dashboard", "All work", 100],
                    ["Workbench", "Relevant records", 78],
                    ["Bulk action", "Grouped decisions", 58],
                    ["Error center", "Exceptions", 38],
                    ["Save", "Controlled submission", 24],
                    ["Report", "Outcome", 14],
                  ].map(([t, d, w]) => (
                    <li key={String(t)} className="flex items-center gap-3 text-xs">
                      <span className="w-24 shrink-0 font-medium">{t}</span>
                      <span
                        className="h-7 rounded-md bg-gradient-to-r from-[#2DD4BF]/70 to-[#2DD4BF]/15"
                        style={{ width: `${w}%` }}
                      />
                      <span className="whitespace-nowrap text-white/55">{d}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 10 DECISIONS + TAKEAWAYS */}
      <Section id="takeaways">
        <Label>10 / Design decisions</Label>
        <h2 className="font-display text-3xl md:text-5xl tracking-tight" data-story>Three decisions shaped the experience.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["01", "AI stays visible but secondary.", "AI is visually distinct but never dominates the analyst's workflow or layout hierarchy."],
            ["02", "Risk appears before action.", "Confidence, rationale and financial exposure are shown before any decision control."],
            ["03", "Actions are staged before submission.", "Decision making is separated from final submission, with remarks and an audit trail."],
          ].map(([n, t, d], i) => (
            <div
              key={n}
              data-story
              data-story-delay={i * 110}
              className="group rounded-2xl border border-[#E5E7EB] bg-white p-6 transition hover:-translate-y-1 hover:border-[#2DD4BF] hover:shadow-[0_24px_60px_-40px_rgba(18,33,59,0.6)]"
            >
              <div className="font-mono text-xs text-[#2DD4BF]">{n}</div>
              <div className="mt-3 text-lg font-semibold">{t}</div>
              <p className="mt-2 text-sm text-[#6B7280]">{d}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-24 max-w-3xl font-display text-2xl md:text-4xl tracking-tight" data-story>
          What I learned designing AI for enterprise workflows.
        </h3>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            "AI works best when it reduces cognitive load — not when it removes agency.",
            "Confidence without rationale isn't enough for high-impact decisions.",
            "Enterprise AI needs visible states, auditability and human override.",
          ].map((t, i) => (
            <li key={t} data-story data-story-delay={i * 110} className="rounded-2xl border border-[#E5E7EB] bg-white p-6 text-sm leading-relaxed">
              {t}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-20 max-w-3xl text-center font-display text-2xl md:text-4xl leading-snug" data-story>
          Good AI UX doesn't make the human disappear.
          <br />
          <span className="text-[#2DD4BF]">It makes the human more confident.</span>
        </p>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-[#E5E7EB] bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-14">
          <div className="font-display text-2xl">Ledger</div>
          <p className="text-sm text-[#6B7280]">AI-assisted compliance &amp; reconciliation workbench</p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#6B7280]">Portfolio POC · 2026</p>
          <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-[#E5E7EB] pt-6 text-sm">
            <Link to="/case-studies/sponsorsphere" className="inline-flex items-center gap-2 hover:text-[#2DD4BF]">
              <ArrowLeft className="h-4 w-4" /> Previous case · SponsorSphere
            </Link>
            <Link to="/case-studies/glumate" className="inline-flex items-center gap-2 hover:text-[#2DD4BF]">
              Next case · Glumate <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero({ onExplore, onPrinciple, onProduct }: { onExplore: () => void; onPrinciple: () => void; onProduct: () => void }) {
  return (
    <section className="relative overflow-hidden border-b border-[#E5E7EB]">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 md:px-10 py-20 md:py-28 lg:grid-cols-[1fr_460px] lg:items-center">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#6B7280]">
            Case 02 · 2026 <span className="mx-2 text-[#E5E7EB]">|</span>
            <span className="text-[#8B5CF6]">Portfolio POC</span>
          </div>
          <h1 className="mt-6 font-display text-[clamp(3.5rem,9vw,7rem)] leading-[0.92] tracking-tight">Ledger</h1>
          <p className="mt-8 max-w-2xl text-xl md:text-3xl leading-snug">
            Helping tax analysts move from record-by-record reconciliation to{" "}
            <span className="text-[#2DD4BF]">confident, AI-assisted decision making.</span>
          </p>
          <p className="mt-5 max-w-xl text-sm md:text-base text-[#6B7280]">
            An AI-assisted compliance and reconciliation workbench designed for professional services teams managing
            high-volume indirect-tax workflows.
          </p>

          <dl className="mt-10 grid gap-4 sm:grid-cols-4 border-t border-[#E5E7EB] pt-6">
            {[
              ["Role", "Product Designer"],
              ["Type", "Concept / Portfolio POC"],
              ["Domain", "Professional Services · Tax · Enterprise"],
              ["Focus", "AI-assisted workflows · Enterprise UX · Decision support"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6B7280]">{k}</dt>
                <dd className="mt-1 text-sm">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button onClick={onExplore} className="rounded-full bg-[#12213B] px-6 py-3 text-sm font-semibold text-white hover:bg-[#12213B]/90">
              Explore the workflow
            </button>
            <button onClick={onPrinciple} className="rounded-full border border-[#12213B]/25 px-6 py-3 text-sm font-semibold hover:bg-black/5">
              View AI principle
            </button>
            <button onClick={onProduct} className="rounded-full bg-[#2DD4BF] px-6 py-3 text-sm font-semibold text-[#12213B] hover:brightness-95">
              Jump to product
            </button>
          </div>
          <p className="mt-4 text-xs text-[#6B7280]">
            How to explore: read the story end-to-end, or jump straight into the interactive prototype. Scroll to see how
            the experience was designed.
          </p>
        </div>

        {/* layered preview */}
        <div className="relative">
          <div aria-hidden className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#8B5CF6]/12 to-[#2DD4BF]/12 blur-2xl" />
          <div className="relative rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-[0_40px_100px_-50px_rgba(18,33,59,0.6)]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6B7280]">AI Priority Insights</span>
              <span className="rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] px-2 py-0.5 text-[10px] font-semibold text-white">AI</span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              {[["Auto-accept", "6,240", "#16A34A"], ["Review", "652", "#D97706"], ["Reject", "306", "#DC2626"]].map(([l, v, c]) => (
                <div key={l} className="rounded-lg border border-[#E5E7EB] p-2">
                  <div className="text-[10px] text-[#6B7280]">{l}</div>
                  <div className="text-sm font-semibold" style={{ color: c }}>{v}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-xl border border-[#E5E7EB] p-3">
              <div className="text-[10px] uppercase tracking-[0.14em] text-[#6B7280]">Record Review</div>
              <div className="mt-2 space-y-1.5 text-[11px]">
                {[["INV-24817", "Reject", "94%", "#DC2626"], ["INV-24902", "Accept", "98%", "#16A34A"], ["CDN-1188", "Review", "71%", "#D97706"]].map(([d, r, c, col]) => (
                  <div key={d} className="flex items-center justify-between rounded-md bg-[#F7F8FA] px-2 py-1.5">
                    <span className="font-mono">{d}</span>
                    <span style={{ color: col }}>{r}</span>
                    <span className="text-[#6B7280]">{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3 rounded-xl border border-[#DC2626]/25 bg-[#DC2626]/5 p-3">
              <div className="text-[10px] uppercase tracking-[0.14em] text-[#6B7280]">Business impact at risk</div>
              <div className="text-lg font-semibold text-[#DC2626]">₹3.8 Cr</div>
            </div>
            <MousePointer2 aria-hidden className="pointer-events-none absolute left-0 top-0 h-4 w-4 text-[#12213B] animate-l-cursor" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 04 Challenge ---------------- */
function Challenge() {
  const [open, setOpen] = useState(0);
  const items = [
    ["AI must explain itself.", "A recommendation without a rationale is just another opinion the analyst has to verify from scratch."],
    ["AI must expose uncertainty.", "Confidence is shown numerically and visually, so low-certainty items are routed to human review, not bulk action."],
    ["The human must remain accountable.", "Every staged action carries the analyst's identity, remark and timestamp in the audit trail."],
  ];
  return (
    <Section id="challenge">
      <Label>04 / Design challenge</Label>
      <h2 className="mx-auto max-w-4xl text-center font-display text-3xl md:text-5xl leading-tight tracking-tight" data-story>
        How might we reduce review effort without taking the decision away from the analyst?
      </h2>
      <div className="mt-14 grid gap-3 md:grid-cols-3">
        {items.map(([t, d], i) => (
          <button
            key={t}
            onMouseEnter={() => setOpen(i)}
            onFocus={() => setOpen(i)}
            onClick={() => setOpen(i)}
            className={`rounded-2xl border p-6 text-left transition ${
              open === i ? "border-[#2DD4BF] bg-white shadow-[0_24px_60px_-40px_rgba(18,33,59,0.6)]" : "border-[#E5E7EB] bg-white/60"
            }`}
          >
            <div className="font-mono text-xs text-[#6B7280]">{i + 1}</div>
            <div className="mt-2 text-lg font-semibold">{t}</div>
            <p className={`grid text-sm text-[#6B7280] transition-all duration-500 ${open === i ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <span className="overflow-hidden">{d}</span>
            </p>
          </button>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- 05 Principle + decision model ---------------- */
function Principle() {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (e) => {
        if (!e[0]?.isIntersecting) return;
        io.disconnect();
        let i = 0;
        const iv = setInterval(() => {
          i += 1;
          setStep(i);
          if (i >= 4) clearInterval(iv);
        }, 700);
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const stages = [
    ["Input", "4,750 records"],
    ["AI analyses", "Match status · Risk · Historical patterns · Vendor · Tax values"],
    ["AI output", "Recommendation · Confidence · Rationale · Potential exposure"],
    ["Human action", "Accept · Reject · Pending"],
    ["Final state", "Staged action · Audit trail · Save"],
  ];

  return (
    <Section id="principle" className="!max-w-none bg-white border-y border-[#E5E7EB]">
      <div className="mx-auto max-w-[1200px]">
        <Label>05 / AI principle</Label>
        <h2 className="font-display text-3xl md:text-5xl tracking-tight" data-story>
          AI should recommend. Humans decide.
        </h2>

        <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-2xl border border-[#8B5CF6]/25 bg-gradient-to-br from-[#8B5CF6]/8 to-[#EC4899]/8 p-6" data-story>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8B5CF6]">AI · surfaces</div>
            <ul className="mt-4 space-y-2 text-sm">
              {["Confidence", "Rationale", "Risk", "Potential impact", "Suggested action"].map((s) => (
                <li key={s} className="flex items-center gap-2 rounded-lg border border-[#8B5CF6]/15 bg-white/70 px-3 py-2">
                  <Sparkles className="h-3.5 w-3.5 text-[#8B5CF6]" /> {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 px-2" data-story data-story-delay="120">
            <svg width="80" height="60" viewBox="0 0 80 60" aria-hidden className="hidden lg:block">
              <path d="M2 30 H78" stroke="#2DD4BF" strokeWidth="2" strokeDasharray="6 8" className="animate-l-flow" fill="none" />
            </svg>
            <div className="text-center font-mono text-[11px] uppercase tracking-[0.16em] leading-6 text-[#111827]">
              AI recommends
              <br />
              <span className="text-2xl text-[#DC2626]">≠</span>
              <br />
              AI decides
            </div>
            <span className="rounded-full border border-[#2DD4BF]/40 bg-[#2DD4BF]/12 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#0f766e]">
              Human-in-the-loop
            </span>
          </div>

          <div className="rounded-2xl border border-[#12213B]/15 bg-[#12213B] p-6 text-white" data-story data-story-delay="180">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#2DD4BF]">Human · decides</div>
            <ul className="mt-4 space-y-2 text-sm">
              {[["Accept", Check], ["Reject", X], ["Pending", Clock]].map(([s, Icon]) => {
                const I = Icon as typeof Check;
                return (
                  <li key={String(s)} className="flex items-center gap-2 rounded-lg border border-white/12 bg-white/5 px-3 py-2">
                    <I className="h-3.5 w-3.5 text-[#2DD4BF]" /> {String(s)}
                  </li>
                );
              })}
            </ul>
            <p className="mt-6 flex items-center gap-2 text-xs text-white/60">
              <ShieldCheck className="h-4 w-4 text-[#2DD4BF]" /> Nothing reaches the portal without an explicit human action.
            </p>
          </div>
        </div>

        <p className="mt-8 text-lg text-[#6B7280]">Ledger uses AI as decision support, not decision replacement.</p>

        {/* decision model */}
        <div ref={ref} className="mt-16 grid gap-3 md:grid-cols-5">
          {stages.map(([t, d], i) => (
            <div
              key={t}
              className={`rounded-2xl border p-5 transition-all duration-500 ${
                step >= i ? "border-[#2DD4BF] bg-white opacity-100 translate-y-0" : "border-[#E5E7EB] bg-white/50 opacity-40 translate-y-2"
              }`}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6B7280]">{t}</div>
              <div className="mt-2 text-sm font-medium leading-relaxed">{d}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Before / After slider ---------------- */
function BeforeAfter() {
  const [v, setV] = useState(50);
  const before = ["Open records", "Search", "Compare", "Identify mismatch", "Interpret issue", "Decide", "Action", "Repeat"];
  const after = ["AI prioritises", "Analyst reviews", "AI explains", "Analyst decides", "Bulk action", "Exception resolution", "Save", "Report"];
  return (
    <div className="mt-12 rounded-2xl border border-[#E5E7EB] bg-white p-6" data-story>
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-[#6B7280]">
        <span>Manual</span>
        <span className="text-[#2DD4BF]">AI-assisted</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={v}
        aria-label="Compare manual and AI-assisted workflow"
        onChange={(e) => setV(Number(e.target.value))}
        className="mt-3 w-full accent-[#2DD4BF]"
      />
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <ol className="space-y-2" style={{ opacity: 0.35 + (1 - v / 100) * 0.65 }}>
          {before.map((b, i) => (
            <li key={b} className="flex items-center gap-3 rounded-lg border border-[#E5E7EB] bg-[#F7F8FA] px-3 py-2 text-xs">
              <span className="font-mono text-[10px] text-[#6B7280]">{String(i + 1).padStart(2, "0")}</span> {b}
            </li>
          ))}
        </ol>
        <ol className="space-y-2" style={{ opacity: 0.35 + (v / 100) * 0.65 }}>
          {after.map((a, i) => (
            <li key={a} className="flex items-center gap-3 rounded-lg border border-[#2DD4BF]/30 bg-[#2DD4BF]/8 px-3 py-2 text-xs">
              <span className="font-mono text-[10px] text-[#0f766e]">{String(i + 1).padStart(2, "0")}</span> {a}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

/* ---------------- 08 Impact ---------------- */
function Kpi({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, value } = useCountUp(target);
  return (
    <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
      <div className="font-display text-4xl md:text-5xl tracking-tight text-[#12213B]">
        <span ref={ref}>{Math.round(value)}</span>
        {suffix}
      </div>
      <div className="mt-2 text-sm text-[#6B7280]">{label}</div>
    </div>
  );
}

function Impact() {
  return (
    <Section id="impact">
      <Label>08 / Impact</Label>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="max-w-2xl font-display text-3xl md:text-5xl tracking-tight" data-story>
          Designed around measurable operational impact.
        </h2>
        <span className="rounded-full border border-[#D97706]/30 bg-[#D97706]/8 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#D97706]">
          Target / POC impact
        </span>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <Kpi target={80} suffix="%" label="Faster exception resolution" />
        <Kpi target={90} suffix="%" label="Reduction in clicks" />
        <Kpi target={50} suffix="%" label="Less invoice review effort" />
        <Kpi target={70} suffix="%" label="Reduction in manual decision making" />
        <div className="rounded-2xl border border-[#E5E7EB] bg-[#12213B] p-6 text-white">
          <div className="font-display text-4xl md:text-5xl tracking-tight">₹9.6L+</div>
          <div className="mt-2 text-sm text-white/60">Annual operational savings</div>
        </div>
      </div>
      <p className="mt-4 text-xs text-[#6B7280]">
        Illustrative POC impact targets based on the proposed workflow and a 500 batches/month scenario — not measured
        production results.
      </p>

      <h3 className="mt-20 font-display text-2xl md:text-3xl" data-story>How the design creates each number.</h3>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {[
          ["80% faster exception resolution", ["AI prioritisation", "Root-cause suggestions", "Guided fixes"], "Less time spent searching for the problem → faster resolution."],
          ["90% reduction in clicks", ["Progressive disclosure", "Contextual actions", "Bulk workflows"], "Fewer navigation steps between deciding and acting."],
          ["50% less invoice review effort", ["AI recommendation", "Confidence", "Rationale"], "Less manual inspection per record."],
          ["70% less manual decision making", ["AI categorisation", "Risk prioritisation", "Batch recommendations"], "The analyst focuses only on genuine exceptions."],
        ].map(([t, chips, out], i) => (
          <div key={String(t)} data-story data-story-delay={i * 90} className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
            <div className="text-lg font-semibold">{t}</div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {(chips as string[]).map((c) => (
                <span key={c} className="rounded-full border border-[#8B5CF6]/25 bg-[#8B5CF6]/8 px-2.5 py-1 text-[11px] text-[#8B5CF6]">{c}</span>
              ))}
            </div>
            <div className="mt-3 flex items-start gap-2 text-sm text-[#6B7280]">
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[#2DD4BF]" /> {out}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
