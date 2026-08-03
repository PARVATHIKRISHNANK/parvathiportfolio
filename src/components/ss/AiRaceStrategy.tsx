import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { aiStrategy, aiAccelerated, humanDesigned } from "@/lib/sponsorsphere-data";

/**
 * "AI Race Strategy" — an interactive Formula One strategy board where every
 * UX phase is a pit-stop checkpoint that expands into a glass tool card.
 */
export function AiRaceStrategy() {
  const [open, setOpen] = useState<string | null>(aiStrategy[0].step);

  return (
    <section
      data-strategyboard
      className="relative overflow-hidden border-y border-border carbon-weave"
    >
      <div aria-hidden className="absolute inset-0 blueprint-grid opacity-25" />
      <div
        aria-hidden
        className="absolute left-1/3 top-1/4 h-[45vh] w-[55vw] animate-smoke rounded-full bg-electric/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
        <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.32em] text-muted-foreground">
          <span className="inline-block h-px w-8 bg-racing" />
          Strategy Board
        </div>
        <h2
          data-split
          className="mt-6 max-w-4xl font-display text-[clamp(2rem,5.4vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em]"
        >
          🏎 AI Race Strategy
        </h2>
        <p data-reveal className="mt-6 max-w-2xl font-hand text-2xl leading-tight text-racing">
          Every winning product starts with the right strategy.
        </p>
        <p data-reveal className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          AI wasn't a shortcut—it was my co-pilot throughout the entire UX process. Each stage
          combined AI acceleration with human-centered decision-making to move faster without
          compromising quality.
        </p>

        {/* ---------------- the board ---------------- */}
        <div className="relative mt-16">
          {/* track spine + travelling car */}
          <span
            aria-hidden
            className="absolute left-[19px] top-2 hidden h-[calc(100%-16px)] w-px bg-[repeating-linear-gradient(180deg,var(--electric)_0_10px,transparent_10px_20px)] opacity-60 md:block"
          />
          <span
            data-strategycar
            aria-hidden
            className="absolute -left-1 top-0 hidden text-2xl drop-shadow-[0_0_12px_oklch(0.68_0.19_245/0.7)] md:block"
          >
            🏎
          </span>

          <div className="space-y-4 md:pl-16">
            {aiStrategy.map((s) => {
              const isOpen = open === s.step;
              return (
                <article
                  key={s.step}
                  data-reveal
                  className={`relative rounded-3xl glass-panel transition duration-500 ${
                    isOpen ? "border-electric/50 shadow-[0_0_60px_oklch(0.68_0.19_245/0.12)]" : ""
                  }`}
                >
                  {/* racing tape */}
                  <span
                    aria-hidden
                    className="absolute -top-2.5 left-8 h-5 w-20 rotate-[-3deg] rounded-[2px] bg-[repeating-linear-gradient(45deg,var(--racing)_0_6px,transparent_6px_12px)] opacity-50"
                  />
                  {/* checkpoint node */}
                  <span
                    aria-hidden
                    className={`absolute -left-[62px] top-8 hidden h-4 w-4 rounded-full border-2 md:block ${
                      isOpen
                        ? "animate-node border-electric bg-electric/40"
                        : "border-silver/50 bg-carbon"
                    }`}
                  />

                  <button
                    onClick={() => setOpen(isOpen ? null : s.step)}
                    className="flex w-full items-center gap-4 px-7 py-6 text-left md:px-9"
                  >
                    <span className="text-xl">{s.flag}</span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-electric">
                      Step {s.step}
                    </span>
                    <span className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                      {s.title}
                    </span>
                    <ChevronDown
                      className={`ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-500 ${
                        isOpen ? "rotate-180 text-electric" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-700 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-7 pb-8 md:px-9">
                        <p className="font-hand text-2xl leading-tight text-silver">{s.goal}</p>

                        {s.groups.map((g, gi) => (
                          <div key={gi} className="mt-6">
                            {g.label && (
                              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.26em] text-racing">
                                {g.label}
                              </p>
                            )}
                            <div className="grid gap-3 sm:grid-cols-2">
                              {g.tools.map((t) => (
                                <div
                                  key={g.label ? `${g.label}-${t.name}` : t.name}
                                  className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-500 hover:-translate-y-1 hover:border-electric/50 hover:bg-white/[0.06]"
                                >
                                  <span
                                    aria-hidden
                                    className="absolute -top-1.5 right-6 h-3 w-3 rounded-full border border-racing/60 bg-racing/40 shadow-[0_0_12px_oklch(0.55_0.24_25/0.6)]"
                                  />
                                  <p className="font-display text-lg font-semibold text-foreground transition group-hover:text-electric">
                                    {t.name}
                                  </p>
                                  <ul className="mt-3 space-y-1.5">
                                    {t.purpose.map((p) => (
                                      <li key={p} className="flex gap-2.5 text-sm text-muted-foreground">
                                        <span className="mt-2 h-1 w-3 shrink-0 bg-electric/70" />
                                        {p}
                                      </li>
                                    ))}
                                  </ul>
                                  {t.output && (
                                    <p className="mt-4 border-t border-dashed border-white/10 pt-3 font-hand text-lg leading-snug text-silver">
                                      {t.output}
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}

                        <div className="mt-6 rounded-2xl border border-racing/35 bg-racing/[0.07] p-5">
                          <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-racing">
                            Human Contribution
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-silver">{s.human}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* ---------------- lap tracker ---------------- */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          {aiStrategy.map((s) => (
            <button
              key={s.step}
              onClick={() => setOpen(s.step)}
              aria-label={`Jump to step ${s.step}`}
              className={`h-1.5 w-14 rounded-full transition ${
                open === s.step ? "bg-electric" : "bg-white/12 hover:bg-white/25"
              }`}
            />
          ))}
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Lap {open ? Number(open) : 0} / {aiStrategy.length}
          </span>
        </div>

        {/* ---------------- final glowing panel ---------------- */}
        <div
          data-reveal
          className="relative mt-16 overflow-hidden rounded-[2rem] border border-electric/35 bg-electric/[0.06] p-8 shadow-[0_0_80px_oklch(0.68_0.19_245/0.18)] md:p-12"
        >
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-64 w-64 animate-smoke rounded-full bg-racing/20 blur-[110px]"
          />
          <h3 className="relative font-display text-[clamp(1.6rem,4vw,3rem)] font-bold uppercase tracking-[-0.02em]">
            AI Accelerated. <span className="text-electric">Human Designed.</span>
          </h3>

          <div className="relative mt-10 grid gap-8 md:grid-cols-2">
            {[
              { title: "AI Accelerated", items: aiAccelerated, tone: "electric" },
              { title: "Human Designed", items: humanDesigned, tone: "racing" },
            ].map((col) => (
              <div key={col.title}>
                <p
                  className={`font-mono text-[10px] uppercase tracking-[0.26em] ${
                    col.tone === "electric" ? "text-electric" : "text-racing"
                  }`}
                >
                  {col.title}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {col.items.map((i) => (
                    <li
                      key={i}
                      className={`rounded-full border px-4 py-1.5 text-xs text-silver ${
                        col.tone === "electric"
                          ? "border-electric/30 bg-electric/10"
                          : "border-racing/30 bg-racing/10"
                      }`}
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="relative mt-10 max-w-4xl border-t border-white/10 pt-8 font-display text-lg font-light leading-snug text-silver md:text-2xl">
            AI accelerated execution, but every strategic decision, design rationale, interaction
            pattern, and product experience was driven by human-centered thinking. SponsorSphere
            demonstrates how AI can amplify a designer's capabilities—not replace them.
          </p>
        </div>
      </div>
    </section>
  );
}
