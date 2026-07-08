import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import research from "@/assets/sponsorsphere-research.png.asset.json";
import design from "@/assets/sponsorsphere-design.png.asset.json";
import ideation from "@/assets/sponsorsphere-ideation.png.asset.json";
import market from "@/assets/sponsorsphere-market.png.asset.json";

export const Route = createFileRoute("/case-studies/sponsorsphere")({
  head: () => ({
    meta: [
      { title: "SponsorSphere — AI-Powered Sponsorship Platform · Parvathi K" },
      {
        name: "description",
        content:
          "A mobile-first AI-assisted sponsorship platform helping brands discover, evaluate and manage motorsport sponsorships.",
      },
      { property: "og:title", content: "SponsorSphere — Case Study" },
      {
        property: "og:description",
        content:
          "Designing an AI-assisted platform that simplifies motorsport sponsorship discovery, management and ROI tracking.",
      },
    ],
  }),
  component: SponsorSphere,
});

function Section({
  eyebrow,
  title,
  children,
  tone = "default",
}: {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  tone?: "default" | "blush" | "mint" | "lavender" | "butter";
}) {
  const bg =
    tone === "blush"
      ? "bg-blush/30"
      : tone === "mint"
        ? "bg-mint/30"
        : tone === "lavender"
          ? "bg-lavender/30"
          : tone === "butter"
            ? "bg-butter/40"
            : "";
  return (
    <section className={`${bg} border-t border-border`}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-28">
        {eyebrow && (
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">
            ({eyebrow})
          </div>
        )}
        {title && (
          <h2 className="font-display font-light text-3xl md:text-5xl leading-[1.05] tracking-tight mb-10 max-w-3xl">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs border border-border bg-background/60 backdrop-blur">
      {children}
    </span>
  );
}

function SponsorSphere() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full bg-lavender/50 blur-3xl animate-float-slow" />
        <div className="absolute top-[40%] -right-32 h-[560px] w-[560px] rounded-full bg-blush/50 blur-3xl animate-float-slower" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="font-display text-2xl tracking-tight">
            Parvathi<span className="text-accent">.</span>
          </Link>
          <Link
            to="/"
            className="text-sm inline-flex items-center gap-1.5 border border-foreground/80 rounded-full px-4 py-2 hover:bg-foreground hover:text-background transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to work
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-16 md:pt-24 pb-16 animate-rise">
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">
            Case Study 01 · 2024
          </div>
          <h1 className="font-display font-light text-[clamp(2.5rem,7vw,6rem)] leading-[0.98] tracking-[-0.02em]">
            Sponsor<span className="italic text-accent">Sphere</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-foreground/85 leading-relaxed">
            AI-Powered Sponsorship Platform for Motorsport Events. Designing an
            AI-assisted platform that simplifies how brands discover, evaluate,
            and manage sponsorship opportunities in motorsports.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Role</div>
              <div className="font-display text-lg">UX / UI Designer</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Team</div>
              <div className="font-display text-lg">Lead UX · Product · Design</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Duration</div>
              <div className="font-display text-lg">Jul — Aug 2024</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Platform</div>
              <div className="font-display text-lg">Mobile-first</div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {[
              "Product Discovery",
              "UX Research",
              "IA",
              "User Flows",
              "Wireframing",
              "Visual Design",
              "AI-assisted Exploration",
              "Prototype",
            ].map((r) => (
              <Pill key={r}>{r}</Pill>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="text-xs uppercase tracking-widest text-muted-foreground mr-2 self-center">
              Tools
            </span>
            {["Figma", "ChatGPT", "Miro", "Whimsical", "Visily", "Uizard", "Motiff"].map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <Section eyebrow="About the Project" title="A single, intelligent home for the entire sponsorship journey." tone="lavender">
        <div className="grid md:grid-cols-2 gap-10 text-lg text-foreground/85 leading-relaxed">
          <p>
            SponsorSphere is a mobile-first sponsorship platform designed to
            bridge the gap between sponsors and motorsport teams. Brands can
            discover racing opportunities, evaluate packages, manage payments,
            monitor campaign performance and measure sponsorship ROI from one
            experience.
          </p>
          <p>
            Unlike traditional sponsorship workflows that rely on emails,
            spreadsheets and manual coordination, SponsorSphere centralizes
            the complete sponsorship journey into one intelligent platform.
          </p>
        </div>
      </Section>

      {/* Problem */}
      <Section eyebrow="Problem & Challenge" title="The sponsorship process in motorsports is highly fragmented.">
        <div className="grid md:grid-cols-2 gap-10">
          <p className="text-lg text-foreground/85 leading-relaxed">
            Brands struggle to discover relevant racing events, compare
            sponsorship opportunities and evaluate expected returns. Racing
            teams spend significant effort manually finding sponsors,
            negotiating packages and managing branding logistics. The absence
            of a centralized ecosystem creates delays, poor communication and
            limited visibility.
          </p>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Business Problems
            </div>
            <ul className="space-y-3">
              {[
                "Difficult for sponsors to discover suitable racing opportunities",
                "Manual sponsor-team communication",
                "No transparent ROI tracking",
                "Complex sponsorship package management",
                "Disconnected payment workflows",
              ].map((b) => (
                <li key={b} className="flex gap-3 text-foreground/85">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          <div className="rounded-3xl border border-border bg-mint/30 p-8">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Design Goal
            </div>
            <div className="font-display text-xl mb-4">Enable sponsors to</div>
            <ul className="space-y-2">
              {[
                "Discover events",
                "Select drivers and vehicles",
                "Customize branding",
                "Securely manage sponsorship payments",
                "Track sponsorship performance",
                "Measure ROI",
              ].map((g) => (
                <li key={g} className="flex items-center gap-2 text-foreground/85">
                  <Check className="h-4 w-4 text-accent" /> {g}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-butter/40 p-8">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Success Criteria
            </div>
            <ul className="space-y-3 font-display text-lg leading-snug">
              <li>Reduce sponsorship onboarding complexity.</li>
              <li>Improve sponsor confidence through transparency.</li>
              <li>Enable data-driven sponsorship decisions.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Research */}
      <Section eyebrow="Research & Discovery" title="Understanding sponsors, teams and organizers." tone="blush">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <p className="text-lg text-foreground/85 leading-relaxed">
            Rather than relying on assumptions, I combined secondary research,
            AI-assisted exploration, empathy mapping, personas and journey
            mapping to identify recurring pain points across the sponsorship
            ecosystem.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Secondary Research",
              "Competitive Analysis",
              "Empathy Mapping",
              "Personas",
              "Journey Mapping",
              "Card Sorting",
              "5W1H",
              "SWOT Analysis",
            ].map((m) => (
              <Pill key={m}>{m}</Pill>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <figure className="rounded-3xl overflow-hidden border border-border bg-foreground">
            <img src={market.url} alt="Market analysis" className="w-full h-auto" />
            <figcaption className="text-xs text-muted-foreground p-4 bg-background">
              Market analysis, SWOT, empathy map and 5W1H
            </figcaption>
          </figure>
          <figure className="rounded-3xl overflow-hidden border border-border bg-foreground">
            <img src={research.url} alt="User research" className="w-full h-auto" />
            <figcaption className="text-xs text-muted-foreground p-4 bg-background">
              Objectives, card sorting, value proposition and personas
            </figcaption>
          </figure>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {[
            { t: "Sponsors need confidence", d: "They hesitate to invest without clear visibility into expected returns." },
            { t: "Discovery takes too long", d: "Finding suitable cars, drivers and packages requires extensive manual effort." },
            { t: "Measuring ROI is difficult", d: "Existing sponsorship models rarely provide meaningful analytics after activation." },
            { t: "Communication is fragmented", d: "Most discussions happen across emails and calls, making collaboration inefficient." },
          ].map((i) => (
            <div key={i.t} className="rounded-2xl border border-border p-6 bg-background/70 backdrop-blur">
              <div className="font-display text-xl mb-2">{i.t}</div>
              <div className="text-foreground/75">{i.d}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-foreground text-background p-10 md:p-14">
          <div className="text-xs uppercase tracking-[0.22em] text-background/60 mb-4">
            Opportunity Statement
          </div>
          <p className="font-display font-light text-2xl md:text-4xl leading-tight">
            How might we simplify sponsorship discovery while providing
            sponsors with <em className="text-accent">measurable business value</em>?
          </p>
        </div>
      </Section>

      {/* Defining */}
      <Section eyebrow="Defining the Experience" title="From insights to product architecture.">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Information Architecture
            </div>
            <div className="flex flex-wrap gap-2">
              {["Home", "Events", "Cars", "Drivers", "Brand Customization", "Payments", "ROI Dashboard", "Community", "Profile"].map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Sponsor Journey
            </div>
            <ol className="space-y-2">
              {["Discover Event","Select Car","Choose Driver","Customize Branding","Review Package","Payment","Track Campaign","View ROI"].map((s, i) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="font-mono text-xs w-6 text-muted-foreground">0{i+1}</span>
                  <span className="font-display text-lg">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          <div className="rounded-3xl border border-border p-8 bg-blush/30">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Pain Points</div>
            <ul className="space-y-2 text-foreground/85">
              {["Searching across multiple sources","Unclear sponsorship value","Manual negotiations","Complex payments","No campaign visibility"].map((p) => (
                <li key={p}>· {p}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border p-8 bg-mint/30">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">UX Opportunities</div>
            <ul className="space-y-2 text-foreground/85">
              {["Personalized recommendations","Simple checkout","Campaign dashboard","Performance analytics","Transparent sponsorship lifecycle"].map((p) => (
                <li key={p}>· {p}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Ideation */}
      <Section eyebrow="Ideation" title="Exploring solutions before pixels." tone="butter">
        <p className="text-lg text-foreground/85 leading-relaxed max-w-3xl mb-10">
          Instead of designing immediately, I explored multiple concepts
          focused on discoverability, transparency and engagement.
          Brainstorming generated ideas around personalization, branding
          flexibility and post-event engagement.
        </p>

        <figure className="rounded-3xl overflow-hidden border border-border bg-foreground mb-12">
          <img src={ideation.url} alt="Ideation and brainstorming mind-map" className="w-full h-auto" />
          <figcaption className="text-xs text-muted-foreground p-4 bg-background">
            Brainstorming with Ideamap.ai — feature clusters
          </figcaption>
        </figure>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-border p-6 bg-background/70">
            <div className="text-xs uppercase tracking-widest text-accent mb-3">High Priority</div>
            <ul className="space-y-1 text-foreground/85">
              {["AI event recommendations","Driver selection","Vehicle selection","Brand customization","ROI tracking","Secure payments"].map((f) => <li key={f}>· {f}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-border p-6 bg-background/70">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Medium Priority</div>
            <ul className="space-y-1 text-foreground/85">
              {["Community","Forums","Networking","Live event updates","VIP access"].map((f) => <li key={f}>· {f}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-border p-6 bg-background/70">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Design Principles</div>
            <ul className="space-y-1 text-foreground/85">
              {["Reduce cognitive load","Guide step by step","Visual-first decisions","Build trust via transparency","Measure success"].map((f) => <li key={f}>· {f}</li>)}
            </ul>
          </div>
        </div>
      </Section>

      {/* Design Solution */}
      <Section eyebrow="Design Solution" title="From ideas to interfaces." tone="lavender">
        <p className="text-lg text-foreground/85 leading-relaxed max-w-3xl mb-10">
          After validating IA, wireframes reduced friction across the
          sponsorship journey and evolved into a modern mobile-first
          interface emphasizing clarity, discoverability and usability.
        </p>

        <figure className="rounded-3xl overflow-hidden border border-border bg-foreground mb-12">
          <img src={design.url} alt="Wireframes and visual design" className="w-full h-auto" />
          <figcaption className="text-xs text-muted-foreground p-4 bg-background">
            Wireframes (Uizard.io) evolving into hi-fi visual design (Motiff)
          </figcaption>
        </figure>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Key Screens</div>
            <div className="flex flex-wrap gap-2">
              {["Home Dashboard","Event Discovery","Car Selection","Driver Selection","Brand Placement","Audience Engagement","Community","Payment Flow","ROI Dashboard","Profile"].map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Design Decisions</div>
            <ul className="space-y-2 text-foreground/85">
              <li>· Large visual cards improve event discovery</li>
              <li>· Step-based flow reduces complexity</li>
              <li>· Consistent CTA placement improves navigation</li>
              <li>· Dashboard analytics increase sponsor confidence</li>
              <li>· Community features encourage long-term engagement</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* AI across UX */}
      <Section eyebrow="AI Across the UX Process" title="Designing with AI as a collaborative assistant.">
        <p className="text-lg text-foreground/85 leading-relaxed max-w-3xl mb-10">
          One unique aspect of this project was integrating AI throughout the
          UX lifecycle — not only for content, but as a design partner
          accelerating exploration.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { p: "Discovery", i: ["Problem statements","Ecosystem exploration","Competitive insights"] },
            { p: "Research", i: ["Personas","Journey maps","Empathy maps","Research summaries"] },
            { p: "Define", i: ["User flows","Information Architecture","Card sorting","Feature grouping"] },
            { p: "Ideation", i: ["Brainstorming","Prioritization","UX copy","Naming & branding"] },
            { p: "Design", i: ["Wireframes","Visual exploration","UI inspiration","Prototype iterations"] },
            { p: "Reflection", i: ["Accelerated repetitive tasks","More time for strategy","Human-centered decisions remain"] },
          ].map((s) => (
            <div key={s.p} className="rounded-2xl border border-border p-6 bg-background/70">
              <div className="font-display text-xl mb-3">{s.p}</div>
              <ul className="space-y-1 text-foreground/80 text-sm">
                {s.i.map((x) => <li key={x}>· {x}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Outcome */}
      <Section eyebrow="Outcome & Learnings" title="A unified mobile experience for the full sponsorship lifecycle." tone="mint">
        <div className="grid md:grid-cols-2 gap-10">
          <p className="text-lg text-foreground/85 leading-relaxed">
            SponsorSphere evolved into a complete ecosystem that streamlines
            discovery, onboarding, branding, payments and performance tracking
            within a unified mobile experience. It also explored how AI can
            augment the end-to-end UX process — from discovery to high-fidelity
            design.
          </p>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Key Features Delivered
            </div>
            <ul className="grid grid-cols-2 gap-2 text-foreground/85">
              {["Event Discovery","Driver Selection","Car Selection","Brand Customization","Payment Management","ROI Dashboard","Community Engagement","Sponsorship Analytics"].map((k) => (
                <li key={k} className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> {k}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-3xl bg-foreground text-background p-10 md:p-14">
          <div className="text-xs uppercase tracking-[0.22em] text-background/60 mb-4">
            What I Learned
          </div>
          <p className="font-display font-light text-2xl md:text-3xl leading-snug max-w-4xl">
            AI is most valuable when it accelerates exploration — freeing
            designers to spend more time <em className="text-accent">validating ideas, refining interactions
            and solving meaningful user problems</em>.
          </p>
        </div>
      </Section>

      {/* Footer nav */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-16 flex flex-wrap items-center justify-between gap-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm hover:text-accent transition">
            <ArrowLeft className="h-4 w-4" /> Back to all work
          </Link>
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-sm font-medium hover:bg-accent transition"
          >
            Let's work together <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
