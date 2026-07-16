import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Check, Bell, Home, MessageCircle, BookOpen, Calendar, User, Sparkles, ChevronRight, Send, TrendingUp, Award } from "lucide-react";
import t1dHero from "@/assets/t1d-hero.jpg.asset.json";

export const Route = createFileRoute("/case-studies/t1d")({
  head: () => ({
    meta: [
      { title: "T1D Care Transition — AI Companion for Young Adults · Parvathi K" },
      {
        name: "description",
        content:
          "AI-powered digital companion helping young adults confidently transition from pediatric to adult Type 1 Diabetes care.",
      },
      { property: "og:title", content: "T1D Care Transition — Case Study" },
      {
        property: "og:description",
        content:
          "Designing an empathetic, AI-supported transition companion for young adults with Type 1 Diabetes.",
      },
      { property: "og:image", content: t1dHero.url },
    ],
  }),
  component: T1DCaseStudy,
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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-3 text-foreground/85">
          <Check className="h-5 w-5 mt-0.5 text-accent shrink-0" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function T1DCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full bg-lavender/50 blur-3xl animate-float-slow" />
        <div className="absolute top-[40%] -right-32 h-[560px] w-[560px] rounded-full bg-blush/50 blur-3xl animate-float-slower" />
        <div className="absolute bottom-0 left-1/3 h-[460px] w-[460px] rounded-full bg-mint/40 blur-3xl animate-float-slow" />
      </div>

      {/* Top nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
            <ArrowLeft className="h-4 w-4" /> Back to portfolio
          </Link>
          <div className="font-mono text-xs text-muted-foreground">Case 03 · 2025</div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-16 md:pt-24 pb-16">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 animate-rise">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">
                <span className="h-px w-8 bg-accent" />
                Case Study 03 · 2025
              </div>
              <h1 className="font-display font-light text-[clamp(2.5rem,7vw,6rem)] leading-[0.98] tracking-[-0.02em]">
                T1D Care <span className="italic text-accent">Transition</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl leading-relaxed text-foreground/85 max-w-xl">
                An AI-powered digital companion for young adults transitioning from pediatric to adult diabetes care —
                built around empathy, education, and independence.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Healthcare", "Mobile App", "AI", "UX Research", "Product Design"].map((p) => (
                  <Pill key={p}>{p}</Pill>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
                <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Duration</div>
                  <div className="font-display text-lg mt-1">12 Weeks</div>
                </div>
                <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Role</div>
                  <div className="font-display text-lg mt-1">UX/UI Designer</div>
                </div>
                <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Platform</div>
                  <div className="font-display text-lg mt-1">Mobile App</div>
                </div>
              </div>

              <div className="mt-6 text-sm text-muted-foreground">
                <span className="uppercase tracking-[0.2em] text-xs mr-2">Tools</span>
                Figma · FigJam · Miro · ChatGPT · Perplexity · Gemini
              </div>
            </div>

            <div className="lg:col-span-5 order-first lg:order-last animate-rise" style={{ animationDelay: "0.15s" }}>
              <div className="relative">
                <div className="absolute -inset-8 rounded-[2.4rem] bg-gradient-to-tr from-accent/25 via-lavender/25 to-blush/25 blur-2xl animate-float-slow" aria-hidden />
                <div className="absolute -inset-2 rounded-[2rem] bg-mint/40 rotate-2 animate-float-slower" aria-hidden />
                <div className="relative rounded-[2rem] overflow-hidden border border-border/60 bg-card/40 backdrop-blur-sm shadow-[0_30px_80px_-30px_rgba(60,80,120,0.35)]">
                  <img
                    src={t1dHero.url}
                    alt="Young adult using a T1D care companion app on mobile"
                    width={1200}
                    height={900}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <Section eyebrow="The Challenge" title="Problem Statement" tone="lavender">
        <div className="space-y-5 text-lg leading-relaxed text-foreground/85 max-w-3xl">
          <p>
            Transitioning from pediatric to adult healthcare is one of the most vulnerable phases in the life of a
            young person living with Type 1 Diabetes.
          </p>
          <p>
            During childhood, parents and pediatricians manage most healthcare decisions. As they become adults,
            patients are suddenly expected to independently manage insulin, appointments, prescriptions, emergencies,
            nutrition, and emotional wellbeing.
          </p>
          <p>
            Many struggle with this transition, leading to missed appointments, poor glycemic control, anxiety,
            and reduced engagement with healthcare providers.
          </p>
          <p className="text-foreground italic border-l-2 border-accent pl-5">
            How might we design a digital experience that empowers young adults with Type 1 Diabetes to confidently
            transition into adult care while improving independence, education, and emotional wellbeing?
          </p>
        </div>
      </Section>

      {/* Why it matters */}
      <Section eyebrow="Context" title="Why This Problem Matters">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-5 text-foreground/85 leading-relaxed">
            <p>
              Type 1 Diabetes is an autoimmune disease requiring lifelong insulin therapy and continuous
              self-management.
            </p>
            <p>
              The transition from pediatric to adult care has been identified globally as one of the largest gaps in
              diabetes care.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card/60 backdrop-blur p-8">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">Global Statistics</div>
            <BulletList
              items={[
                "1.2 million children and adolescents (0–19) live with Type 1 Diabetes worldwide.",
                "Thousands of adolescents enter adult healthcare systems every year.",
                "Nearly one-third experience gaps in care after transition.",
                "Missed appointments and poor disease management rise significantly during this period.",
                "Emotional stress, burnout, and lack of structured guidance remain major barriers.",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Design goal */}
      <Section eyebrow="Design Goal" title="A transition-focused companion, not another tracker." tone="blush">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <p className="text-lg leading-relaxed text-foreground/85">
            The objective was not to build another diabetes tracker. The goal was to create a transition-focused
            digital companion that supports young adults emotionally, educationally, and clinically throughout one
            of the biggest changes in their healthcare journey.
          </p>
          <BulletList
            items={[
              "Promote self-management",
              "Reduce missed appointments",
              "Improve confidence",
              "Support emotional wellbeing",
              "Educate patients gradually",
              "Build transition readiness",
              "Strengthen communication with healthcare teams",
            ]}
          />
        </div>
      </Section>

      {/* Research */}
      <Section eyebrow="Research Process" title="Understanding transition from multiple perspectives." tone="mint">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">Research Included</div>
            <BulletList
              items={[
                "Literature Review",
                "Competitive Analysis",
                "Expert Research",
                "User Interviews",
                "Affinity Mapping",
                "Journey Mapping",
                "Persona Creation",
                "Opportunity Mapping",
              ]}
            />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">Research Questions</div>
            <BulletList
              items={[
                "At what age does transition usually happen?",
                "What challenges do young adults experience?",
                "How do hospitals currently support transitions?",
                "Which diabetes apps exist today?",
                "What emotional barriers affect self-management?",
                "What support do caregivers need?",
                "What tools do endocrinologists currently lack?",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Competitive */}
      <Section eyebrow="Competitive Analysis" title="Strong on tracking. Silent on transition.">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-border bg-card/60 p-6">
            <div className="font-display text-xl mb-3">Platforms analyzed</div>
            <ul className="text-foreground/80 space-y-2">
              <li>One Drop</li>
              <li>Glucose Buddy</li>
              <li>BeatO</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card/60 p-6">
            <div className="font-display text-xl mb-3">Common strengths</div>
            <BulletList items={["Glucose logging", "Medication reminders", "Reports", "Device integrations", "Coaching"]} />
          </div>
          <div className="rounded-3xl border border-border bg-card/60 p-6">
            <div className="font-display text-xl mb-3">Missing capabilities</div>
            <BulletList
              items={[
                "Transition readiness assessment",
                "Adult care onboarding",
                "Emotional transition support",
                "Parent independence guidance",
                "Pediatric-to-adult care coordination",
                "Personalized transition milestones",
              ]}
            />
          </div>
        </div>
        <p className="mt-8 text-foreground/85 max-w-3xl">
          None of these platforms specifically support the transition from pediatric to adult care — the biggest
          opportunity we uncovered.
        </p>
      </Section>

      {/* User Interviews */}
      <Section eyebrow="User Interviews" title="Voices from four stakeholder groups." tone="butter">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Young Adults",
              quotes: [
                "I feel confident checking my sugar levels but not talking to a new doctor.",
                "I don't want my parents to manage everything anymore.",
              ],
            },
            {
              title: "Parents",
              quotes: [
                "I'm worried about letting go.",
                "What if my child forgets insulin while living alone?",
              ],
            },
            {
              title: "Endocrinologists",
              quotes: [
                "I don't have enough time during appointments to prepare patients for adulthood.",
              ],
            },
            {
              title: "Caregivers",
              quotes: ["We need visibility without controlling every decision."],
            },
          ].map((g) => (
            <div key={g.title} className="rounded-3xl border border-border bg-background/70 backdrop-blur p-6">
              <div className="font-display text-xl mb-4">{g.title}</div>
              <div className="space-y-3">
                {g.quotes.map((q) => (
                  <p key={q} className="text-foreground/85 italic border-l-2 border-accent/60 pl-4">
                    "{q}"
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Key insights */}
      <Section eyebrow="Key Insights" title="Recurring themes across every conversation.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { h: "Emotional", p: "Transition is emotionally harder than medically." },
            { h: "Knowledge", p: "Young adults lack confidence in navigating adult healthcare." },
            { h: "Independence", p: "Patients want independence but still require guidance." },
            { h: "Communication", p: "Little continuity exists between pediatric and adult providers." },
            { h: "Existing Apps", p: "Current diabetes apps focus on monitoring, not life transitions." },
          ].map((i) => (
            <div key={i.h} className="rounded-3xl border border-border bg-card/60 p-6">
              <div className="text-xs uppercase tracking-[0.22em] text-accent mb-3">{i.h}</div>
              <p className="text-foreground/85 leading-relaxed">{i.p}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Affinity + Empathy */}
      <Section eyebrow="Affinity & Empathy" title="Six themes. One emotional core." tone="lavender">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">Affinity Themes</div>
            <BulletList
              items={[
                "Self-management",
                "Education",
                "Emotional Support",
                "Adult Care Transition",
                "Accessibility",
                "Motivation",
              ]}
            />
          </div>
          <div className="rounded-3xl border border-border bg-card/60 p-6 space-y-5">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-accent mb-2">Says</div>
              <p className="italic text-foreground/85">"I'm scared to leave my pediatric doctor." · "I forget insulin during college."</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-accent mb-2">Thinks</div>
              <p className="italic text-foreground/85">"What if I make a mistake?" · "Will my new doctor understand my history?"</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-accent mb-2">Feels</div>
              <p className="text-foreground/85">Anxious · Overwhelmed · Lonely · Burned out</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-accent mb-2">Does</div>
              <p className="text-foreground/85">Uses reminders · Misses appointments · Searches online communities · Tracks glucose inconsistently</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Personas */}
      <Section eyebrow="Personas" title="Four personas, four sets of needs.">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { t: "Young Adult", n: "Needs confidence and independence.", p: ["Anxiety", "Missed appointments", "Lack of guidance"] },
            { t: "Parent", n: "Needs reassurance without micromanaging.", p: ["Fear of letting go", "Loss of visibility"] },
            { t: "Endocrinologist", n: "Needs continuous engagement between visits.", p: ["Limited consultation time", "Poor follow-up"] },
            { t: "Caregiver", n: "Needs collaborative communication.", p: ["Difficult coordination", "Fragmented updates"] },
          ].map((p) => (
            <div key={p.t} className="rounded-3xl border border-border bg-card/60 p-6">
              <div className="font-display text-2xl">{p.t}</div>
              <p className="text-foreground/80 mt-1">{p.n}</p>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mt-5 mb-2">Pain points</div>
              <BulletList items={p.p} />
            </div>
          ))}
        </div>
      </Section>

      {/* Journey */}
      <Section eyebrow="Journey Mapping" title="Six stages, one long emotional arc." tone="blush">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {["Awareness", "Exploration", "Skill Building", "Emotional Support", "Transition Planning", "Adult Care"].map((s, i) => (
            <div key={s} className="rounded-2xl border border-border bg-background/70 backdrop-blur p-5">
              <div className="font-mono text-xs text-muted-foreground mb-2">Stage {i + 1}</div>
              <div className="font-display text-lg leading-tight">{s}</div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-foreground/85 max-w-3xl">
          Pain points appeared throughout — most sharply during emotional support and transition planning.
        </p>
      </Section>

      {/* Opportunity */}
      <Section eyebrow="Opportunity Areas" title="Five directions worth designing for." tone="mint">
        <BulletList
          items={[
            "AI-guided onboarding",
            "Transition readiness scoring",
            "Personalized education",
            "Emotional wellbeing support",
            "Coordinated care between pediatric and adult providers",
          ]}
        />
      </Section>

      {/* Solution */}
      <Section eyebrow="Final Product Vision" title="An AI-powered transition companion that grows with the patient.">
        <p className="text-lg leading-relaxed text-foreground/85 max-w-3xl mb-10">
          Instead of functioning as another glucose tracker, the solution prepares young adults for independent
          healthcare — combining education, tracking, and emotional support in one companion.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              t: "Personalized Onboarding",
              i: ["User profile", "Medical history", "Transition readiness assessment", "Personalized dashboard"],
            },
            {
              t: "Learning Hub",
              i: ["Bite-sized lessons", "Videos", "Interactive guides", "Diabetes myths", "Localized education"],
            },
            {
              t: "Smart Health Tracking",
              i: ["Glucose logs", "Insulin reminders", "Medication tracking", "Mood tracking", "Progress visualization"],
            },
            {
              t: "Transition Planning",
              i: ["Adult clinic preparation", "Appointment checklist", "Insurance guidance", "Medical record transfer", "Milestone tracker"],
            },
          ].map((f) => (
            <div key={f.t} className="rounded-3xl border border-border bg-card/60 p-6">
              <div className="font-display text-2xl mb-4">{f.t}</div>
              <BulletList items={f.i} />
            </div>
          ))}
        </div>
      </Section>

      {/* App Screens Showcase */}
      <AppScreensShowcase />

      {/* AI Companion */}
      <Section eyebrow="AI Companion" title="Contextual coaching, not just a chatbot." tone="butter">
        <p className="text-lg leading-relaxed text-foreground/85 max-w-3xl mb-8">
          Unlike traditional chatbots, the AI Companion provides support that adapts to each user's transition stage.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-border bg-background/70 backdrop-blur p-6">
            <div className="font-display text-xl mb-4">Capabilities</div>
            <BulletList
              items={[
                "Explains medical terms in simple language",
                "Prepares users for appointments",
                "Personalized motivational nudges",
                "Transition milestone coaching",
                "Daily check-ins",
                "Confidence-building guidance",
                "Emergency preparedness education",
                "Emotional wellbeing conversations",
                "Detects burnout and suggests support",
                "Generates personalized appointment questions",
              ]}
            />
          </div>
          <div className="rounded-3xl border border-accent/40 bg-accent/10 p-6">
            <div className="text-xs uppercase tracking-[0.22em] text-accent mb-3">Safety-first Design</div>
            <p className="text-foreground/85 leading-relaxed">
              The AI does not diagnose, prescribe medication, or recommend insulin dosage changes. Clinical decisions
              always remain with licensed healthcare professionals.
            </p>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mt-6 mb-3">Adapts to</div>
            <BulletList
              items={[
                "Transition readiness",
                "Learning progress",
                "Emotional wellbeing check-ins",
                "Medication adherence patterns",
                "Upcoming appointments",
                "Life events (college, moving out)",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Care Coordination */}
      <Section eyebrow="Care Coordination" title="Separate experiences. Shared care.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Patient", d: "Owns the journey with adaptive guidance and independence-building milestones." },
            { t: "Parent", d: "Visibility and reassurance without controlling every decision." },
            { t: "Doctor", d: "Continuity between visits, better-prepared consultations, richer context." },
          ].map((c) => (
            <div key={c.t} className="rounded-3xl border border-border bg-card/60 p-6">
              <div className="font-display text-2xl mb-3">{c.t}</div>
              <p className="text-foreground/85 leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Principles */}
      <Section eyebrow="Design Principles" title="What guided every decision." tone="lavender">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Simplicity over complexity",
            "Emotional-first healthcare",
            "Personalization",
            "Accessibility",
            "Clinical trust",
            "Privacy by design",
            "Explainable AI",
          ].map((p) => (
            <div key={p} className="rounded-2xl border border-border bg-background/70 backdrop-blur p-5 text-foreground/85">
              {p}
            </div>
          ))}
        </div>
      </Section>

      {/* Impact */}
      <Section eyebrow="Expected Impact" title="Value across every stakeholder.">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: "For Patients", i: ["Increased self-management confidence", "Better medication adherence", "Reduced anxiety", "Higher transition readiness"] },
            { t: "For Parents", i: ["Greater peace of mind", "Healthy reduction in dependency"] },
            { t: "For Providers", i: ["Improved continuity of care", "Better patient preparedness", "More productive consultations"] },
            { t: "For Systems", i: ["Fewer missed appointments", "Improved long-term engagement", "Better clinical outcomes"] },
          ].map((c) => (
            <div key={c.t} className="rounded-3xl border border-border bg-card/60 p-6">
              <div className="font-display text-xl mb-4">{c.t}</div>
              <BulletList items={c.i} />
            </div>
          ))}
        </div>
      </Section>

      {/* Learnings */}
      <Section eyebrow="Key Learnings" title="Empathy is the real design tool." tone="blush">
        <div className="space-y-5 text-lg leading-relaxed text-foreground/85 max-w-3xl">
          <p>
            Designing for healthcare goes far beyond solving clinical problems. The greatest challenges often live in
            emotions, behavior, and life transitions. Successful healthcare products must balance empathy with
            evidence — ensuring technology supports people without replacing medical expertise.
          </p>
          <p>
            This project also deepened my understanding of designing AI responsibly — where the role of AI is to
            educate, guide, and build confidence, while keeping clinicians firmly in control of diagnosis and treatment.
          </p>
        </div>
      </Section>

      {/* Footer nav */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-16 flex flex-wrap items-center justify-between gap-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
            <ArrowLeft className="h-4 w-4" /> Back to portfolio
          </Link>
          <Link to="/case-studies/sponsorsphere" className="inline-flex items-center gap-2 text-sm hover:text-accent transition">
            Next case study — SponsorSphere →
          </Link>
        </div>
      </section>
    </div>
  );
}

// ---------------- App Screens Showcase ----------------

type ScreenKey = "welcome" | "assessment" | "dashboard" | "chat" | "learning" | "journey";

const SCREENS: { key: ScreenKey; label: string; sub: string }[] = [
  { key: "welcome", label: "Welcome", sub: "Onboarding" },
  { key: "assessment", label: "Assessment", sub: "Readiness" },
  { key: "dashboard", label: "Dashboard", sub: "Daily view" },
  { key: "chat", label: "AI Chat", sub: "Companion" },
  { key: "learning", label: "Learning", sub: "Hub" },
  { key: "journey", label: "Journey", sub: "Transition" },
];

function AppScreensShowcase() {
  const [active, setActive] = useState<ScreenKey>("chat");
  return (
    <section className="border-t border-border relative overflow-hidden">
      <div className="mx-auto max-w-[1300px] px-6 md:px-10 py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">(App Screens)</div>
          <h2 className="font-display font-light text-3xl md:text-5xl leading-[1.05] tracking-tight">
            Six screens. One companion for the whole <span className="italic text-accent">transition</span>.
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14">
          {SCREENS.map((s) => (
            <button
              key={s.key}
              onClick={() => setActive(s.key)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm border transition ${
                active === s.key
                  ? "bg-accent text-accent-foreground border-accent shadow-[0_10px_30px_-10px_rgba(120,140,255,0.6)]"
                  : "bg-background/60 text-foreground/80 border-border hover:border-accent/50"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Phones row */}
        <div className="relative">
          <div className="hidden md:flex items-end justify-center gap-6 lg:gap-8 pb-4">
            {SCREENS.map((s, i) => {
              const isActive = s.key === active;
              // stagger heights for depth
              const offset = [40, 20, 8, 0, 20, 44][i];
              return (
                <button
                  key={s.key}
                  onClick={() => setActive(s.key)}
                  style={{ transform: `translateY(${isActive ? 0 : offset}px) scale(${isActive ? 1.05 : 0.92})` }}
                  className={`transition-all duration-500 ${isActive ? "z-20" : "z-10 opacity-70 hover:opacity-100"}`}
                >
                  <Phone screen={s.key} dim={!isActive} />
                </button>
              );
            })}
          </div>

          {/* Mobile: single phone with swipe-like buttons */}
          <div className="md:hidden flex justify-center">
            <Phone screen={active} />
          </div>

          <div className="text-center mt-10">
            <div className="font-display text-2xl">{SCREENS.find((x) => x.key === active)?.label}</div>
            <div className="text-sm text-muted-foreground mt-1">{SCREENS.find((x) => x.key === active)?.sub}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Phone({ screen, dim = false }: { screen: ScreenKey; dim?: boolean }) {
  return (
    <div
      className={`relative w-[240px] h-[500px] rounded-[2.4rem] p-2 bg-gradient-to-b from-neutral-800 to-neutral-950 border border-neutral-700/60 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] ${
        dim ? "" : ""
      }`}
    >
      {/* Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 rounded-b-2xl bg-neutral-950 z-10" />
      <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-neutral-950">
        {screen === "welcome" && <WelcomeScreen />}
        {screen === "assessment" && <AssessmentScreen />}
        {screen === "dashboard" && <DashboardScreen />}
        {screen === "chat" && <ChatScreen />}
        {screen === "learning" && <LearningScreen />}
        {screen === "journey" && <JourneyScreen />}
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="h-8 flex items-center justify-between px-5 pt-2 text-[9px] text-white/70 font-medium">
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
      </span>
    </div>
  );
}

function BottomNav({ active }: { active: "home" | "chat" | "learn" | "plan" | "profile" }) {
  const items = [
    { k: "home", i: Home },
    { k: "chat", i: MessageCircle },
    { k: "learn", i: BookOpen },
    { k: "plan", i: Calendar },
    { k: "profile", i: User },
  ] as const;
  return (
    <div className="absolute bottom-0 inset-x-0 h-14 bg-black/70 backdrop-blur border-t border-white/10 flex items-center justify-around">
      {items.map(({ k, i: Icon }) => (
        <div key={k} className={`flex flex-col items-center gap-0.5 ${active === k ? "text-accent" : "text-white/40"}`}>
          <Icon className="h-4 w-4" />
          <span className="text-[8px] capitalize">{k}</span>
        </div>
      ))}
    </div>
  );
}

function WelcomeScreen() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#1a1b3a] via-[#0f1226] to-black text-white flex flex-col">
      <StatusBar />
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-accent to-lavender flex items-center justify-center mb-6 shadow-[0_20px_40px_-10px_rgba(120,140,255,0.5)]">
          <Sparkles className="h-8 w-8 text-white" />
        </div>
        <div className="font-display text-lg leading-tight mb-2">Hi, I'm your T1D Companion</div>
        <p className="text-[10px] text-white/60 leading-relaxed mb-6">
          I'll help you move from pediatric to adult care — one confident step at a time.
        </p>
        <div className="w-full space-y-2 mb-6">
          {["Personalized guidance", "Emotional support", "Learn at your pace"].map((t) => (
            <div key={t} className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-[10px]">
              <Check className="h-3 w-3 text-accent" /> {t}
            </div>
          ))}
        </div>
        <button className="w-full rounded-full bg-accent text-accent-foreground text-[11px] font-medium py-3">
          Let's begin →
        </button>
        <div className="text-[9px] text-white/40 mt-3">Already have an account? Sign in</div>
      </div>
    </div>
  );
}

function AssessmentScreen() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#141426] to-black text-white flex flex-col">
      <StatusBar />
      <div className="px-5 pt-2 pb-3">
        <div className="text-[9px] uppercase tracking-widest text-white/50">Readiness Assessment · 3/8</div>
        <div className="h-1 w-full bg-white/10 rounded-full mt-2 overflow-hidden">
          <div className="h-full w-[38%] bg-gradient-to-r from-accent to-lavender rounded-full" />
        </div>
      </div>
      <div className="flex-1 px-5">
        <div className="text-[9px] uppercase tracking-widest text-white/40 mb-2">Self-Management</div>
        <div className="font-display text-[15px] leading-tight mb-5">
          How comfortable are you managing insulin doses independently?
        </div>
        <div className="space-y-2">
          {[
            { t: "Very comfortable — I'm confident", sel: false, e: "💪" },
            { t: "Mostly fine, with occasional help", sel: true, e: "🙂" },
            { t: "Need reminders or support sometimes", sel: false, e: "🤔" },
            { t: "Still relying on parents / caregivers", sel: false, e: "🫶" },
          ].map((o) => (
            <div
              key={o.t}
              className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-[10px] ${
                o.sel ? "bg-accent/15 border-accent" : "bg-white/5 border-white/10"
              }`}
            >
              <span>{o.e}</span>
              <span className="flex-1">{o.t}</span>
              <span className={`h-3 w-3 rounded-full border ${o.sel ? "bg-accent border-accent" : "border-white/30"}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="px-5 pb-5 pt-3 flex items-center justify-between">
        <button className="text-[10px] text-white/60">← Back</button>
        <button className="rounded-full bg-accent text-accent-foreground text-[10px] px-5 py-2">Next →</button>
      </div>
    </div>
  );
}

function DashboardScreen() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#0e1024] to-black text-white flex flex-col relative">
      <StatusBar />
      <div className="px-4 pt-1 pb-2 flex items-center justify-between">
        <div>
          <div className="text-[9px] text-white/50">Wednesday, Jul 16</div>
          <div className="font-display text-sm">Good morning 👋</div>
        </div>
        <div className="flex items-center gap-2">
          <Bell className="h-3.5 w-3.5 text-white/60" />
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-accent to-lavender" />
        </div>
      </div>
      <div className="px-4 space-y-2.5 overflow-hidden">
        <div className="rounded-2xl bg-gradient-to-br from-accent/40 to-lavender/40 p-3 border border-white/10">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[8px] uppercase tracking-widest text-white/60">Blood Glucose · Now</div>
              <div className="font-display text-2xl mt-0.5">128<span className="text-[10px] text-white/70 ml-1">mg/dL</span></div>
              <div className="text-[9px] text-mint mt-0.5">↑ In range</div>
            </div>
            <div className="text-right">
              <div className="text-[8px] uppercase tracking-widest text-white/60">Time in range</div>
              <div className="font-display text-xl text-mint">84%</div>
              <div className="text-[8px] text-white/60">Today so far</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-white/5 border border-white/10 p-2.5">
            <Calendar className="h-3 w-3 text-accent mb-1" />
            <div className="text-[8px] text-white/50">Next Visit</div>
            <div className="text-[11px] font-display">Jul 24</div>
            <div className="text-[8px] text-white/50">3 days away</div>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-2.5">
            <TrendingUp className="h-3 w-3 text-mint mb-1" />
            <div className="text-[8px] text-white/50">Readiness</div>
            <div className="text-[11px] font-display">72%</div>
            <div className="text-[8px] text-mint">+5 this week</div>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-2.5">
            <div className="text-[8px] text-white/50">Mood today</div>
            <div className="text-[11px] font-display">Good 🙂</div>
            <div className="text-[8px] text-white/50">Logged 9am</div>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-2.5">
            <div className="text-[8px] text-white/50">HbA1c</div>
            <div className="text-[11px] font-display">6.8%</div>
            <div className="text-[8px] text-white/50">Updated Jun</div>
          </div>
        </div>
        <div className="rounded-xl bg-accent/10 border border-accent/30 p-2.5">
          <div className="flex items-start gap-2">
            <Sparkles className="h-3 w-3 text-accent mt-0.5" />
            <div>
              <div className="text-[10px] font-medium">Appointment tomorrow at 2pm</div>
              <div className="text-[8px] text-white/60 leading-tight mt-0.5">
                I've prepared 3 questions based on your recent glucose patterns.
              </div>
              <div className="text-[9px] text-accent mt-1">Review questions →</div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav active="home" />
    </div>
  );
}

function ChatScreen() {
  return (
    <div className="w-full h-full bg-white text-neutral-900 flex flex-col relative">
      <div className="h-8 flex items-center justify-between px-5 pt-2 text-[9px] text-neutral-500 font-medium">
        <span>9:41</span>
        <span>•••</span>
      </div>
      <div className="px-4 pb-2 flex items-center gap-2 border-b border-neutral-100">
        <div className="h-7 w-7 rounded-full bg-gradient-to-br from-accent to-lavender flex items-center justify-center">
          <Sparkles className="h-3.5 w-3.5 text-white" />
        </div>
        <div className="flex-1">
          <div className="text-[11px] font-semibold">AI Companion</div>
          <div className="text-[8px] text-mint">● Active</div>
        </div>
        <div className="text-[8px] rounded-full bg-lavender/40 px-2 py-1">📅 Appt. Tomorrow</div>
      </div>
      <div className="flex-1 px-3 py-3 space-y-2 overflow-hidden">
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-neutral-100 px-3 py-2 text-[10px] leading-snug">
          Hi Alex! Your appointment with Dr. Chen is tomorrow at 2pm. I've been analyzing your patterns.
        </div>
        <div className="max-w-[75%] ml-auto rounded-2xl rounded-tr-sm bg-accent text-accent-foreground px-3 py-2 text-[10px]">
          I'm a bit anxious. What should I bring up?
        </div>
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-neutral-100 px-3 py-2 text-[10px]">
          Based on your last 2 weeks, I've put together 3 personalized questions:
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-2 space-y-1.5">
          <div className="text-[8px] font-semibold text-accent flex items-center gap-1">
            <Sparkles className="h-2.5 w-2.5" /> 3 SUGGESTED QUESTIONS
          </div>
          {[
            "Why did glucose spike +40 on Jul 11?",
            "Should I adjust my evening basal rate?",
            "What A1C target is right for my age?",
          ].map((q, i) => (
            <div key={q} className="flex items-start gap-1.5 text-[9px] leading-snug">
              <span className="text-accent font-semibold">{i + 1}</span>
              <span>{q}</span>
            </div>
          ))}
        </div>
        <div className="max-w-[70%] ml-auto rounded-2xl rounded-tr-sm bg-accent text-accent-foreground px-3 py-2 text-[10px]">
          These are perfect, thank you!
        </div>
      </div>
      <div className="px-3 pb-2 flex gap-1.5">
        {["Save to notes", "Add reminder", "Ask follow-up"].map((c) => (
          <div key={c} className="text-[8px] rounded-full border border-neutral-200 px-2 py-1">{c}</div>
        ))}
      </div>
      <div className="px-3 pb-4 flex items-center gap-2">
        <div className="flex-1 rounded-full bg-neutral-100 px-3 py-2 text-[9px] text-neutral-400">Ask anything...</div>
        <button className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">
          <Send className="h-3.5 w-3.5 text-white" />
        </button>
      </div>
    </div>
  );
}

function LearningScreen() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#0f1226] to-black text-white flex flex-col relative">
      <StatusBar />
      <div className="px-4 pt-1 pb-3 flex items-center justify-between">
        <div>
          <div className="font-display text-sm">Learning Hub</div>
          <div className="text-[9px] text-white/50">Build your independence</div>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-butter/30 border border-butter/40 px-2 py-1 text-[9px]">
          <Award className="h-3 w-3 text-butter" /> 12 day streak
        </div>
      </div>
      <div className="px-4 space-y-2.5">
        <div className="rounded-2xl p-3 bg-gradient-to-br from-lavender/50 to-accent/40 border border-white/10">
          <div className="text-[8px] uppercase tracking-widest text-white/70">Today's Lesson</div>
          <div className="font-display text-base mt-1 leading-tight">Understanding<br/>Your A1C</div>
          <div className="flex items-center justify-between mt-3">
            <div className="text-[9px] text-white/70">⏱ 5 min · +50 pts</div>
            <button className="text-[10px] bg-white/20 rounded-full px-3 py-1">Start →</button>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-[10px] font-medium">Your Progress</div>
            <div className="text-[8px] text-white/50">4 of 12 complete</div>
          </div>
          <div className="flex gap-1 mb-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className={`h-1 flex-1 rounded-full ${i < 4 ? "bg-accent" : "bg-white/10"}`} />
            ))}
          </div>
        </div>
        <div className="space-y-1.5">
          {[
            { t: "Navigating Adult Clinics", p: "+120pts", done: true },
            { t: "Insurance & Coverage", p: "+80pts", done: false },
            { t: "Emergency Protocols", p: "+90pts", done: false },
          ].map((l) => (
            <div key={l.t} className="rounded-xl bg-white/5 border border-white/10 p-2.5 flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-mint/50 to-accent/40" />
              <div className="flex-1">
                <div className="text-[10px] font-medium">{l.t}</div>
                <div className="text-[8px] text-white/50">{l.p}</div>
              </div>
              {l.done ? <Check className="h-3.5 w-3.5 text-mint" /> : <ChevronRight className="h-3.5 w-3.5 text-white/40" />}
            </div>
          ))}
        </div>
      </div>
      <BottomNav active="learn" />
    </div>
  );
}

function JourneyScreen() {
  const stages = [
    { t: "Discovery", done: true },
    { t: "Skills", done: true },
    { t: "Bridging", done: false, current: true },
    { t: "Independence", done: false },
  ];
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#141530] to-black text-white flex flex-col relative">
      <StatusBar />
      <div className="px-4 pt-1 pb-3">
        <div className="font-display text-sm">Transition Journey</div>
        <div className="text-[9px] text-white/50">Your path to adult care</div>
      </div>
      <div className="px-4">
        <div className="flex items-center justify-between mb-6">
          {stages.map((s, i) => (
            <div key={s.t} className="flex-1 flex flex-col items-center relative">
              {i > 0 && (
                <div className={`absolute right-1/2 top-3 h-0.5 w-full ${stages[i - 1].done ? "bg-accent" : "bg-white/15"}`} />
              )}
              <div
                className={`relative z-10 h-6 w-6 rounded-full flex items-center justify-center text-[8px] font-semibold ${
                  s.done ? "bg-accent text-accent-foreground" : s.current ? "bg-lavender text-neutral-900 ring-2 ring-lavender/40" : "bg-white/10 text-white/50"
                }`}
              >
                {s.done ? <Check className="h-3 w-3" /> : i + 1}
              </div>
              <div className="text-[8px] mt-1.5 text-center leading-tight">{s.t}</div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl p-3 bg-gradient-to-br from-lavender/40 to-accent/30 border border-white/10">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[8px] uppercase tracking-widest text-white/70">Current Phase</div>
              <div className="font-display text-base mt-0.5">Phase 3: Bridging</div>
            </div>
            <div className="font-display text-lg">4/6</div>
          </div>
        </div>

        <div className="mt-3 space-y-1.5">
          {[
            { t: "Review insurance coverage", d: true },
            { t: "Set up pharmacy account", d: true },
            { t: "First adult clinic visit", d: false },
            { t: "Transfer medical records", d: false },
          ].map((m) => (
            <div key={m.t} className="rounded-xl bg-white/5 border border-white/10 p-2 flex items-center gap-2">
              <div className={`h-3.5 w-3.5 rounded-full border-2 flex items-center justify-center ${m.d ? "bg-mint border-mint" : "border-white/30"}`}>
                {m.d && <Check className="h-2 w-2 text-neutral-900" />}
              </div>
              <div className="text-[10px] flex-1">{m.t}</div>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-xl bg-white/5 border border-white/10 p-2.5">
          <div className="text-[8px] uppercase tracking-widest text-white/50">Next Milestone</div>
          <div className="text-[10px] mt-1">Phase 4: Independence — est. 6 weeks</div>
        </div>
      </div>
      <BottomNav active="plan" />
    </div>
  );
}
