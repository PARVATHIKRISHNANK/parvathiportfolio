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
