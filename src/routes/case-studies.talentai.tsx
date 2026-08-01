import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Trophy } from "lucide-react";
import talentai from "@/assets/talentai.png";

export const Route = createFileRoute("/case-studies/talentai")({
  head: () => ({
    meta: [
      { title: "TalentAI — AI-Powered Recruitment Platform · Parvathi K" },
      {
        name: "description",
        content:
          "Designing an AI-powered recruitment platform for smarter, faster and fairer hiring — Top 50, UX Design Awards 2025.",
      },
      { property: "og:title", content: "TalentAI — Case Study" },
      {
        property: "og:description",
        content:
          "AI-assisted pre-screening platform that empowers recruiters with transparent, unbiased insights.",
      },
    ],
  }),
  component: TalentAI,
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

function TalentAI() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full bg-lavender/50 blur-3xl animate-float-slow" />
        <div className="absolute top-[40%] -right-32 h-[560px] w-[560px] rounded-full bg-mint/50 blur-3xl animate-float-slower" />
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
            Case Study 02 · 2025
          </div>
          <h1 className="font-display font-light text-[clamp(2.5rem,7vw,6rem)] leading-[0.98] tracking-[-0.02em]">
            Talent<span className="italic text-accent">AI</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-foreground/85 leading-relaxed">
            Designing an AI-Powered Recruitment Platform for Smarter, Faster
            & Fairer Hiring.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Role</div>
              <div className="font-display text-lg">Product · UX/UI Designer</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Timeline</div>
              <div className="font-display text-lg">3 Weeks</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Platform</div>
              <div className="font-display text-lg">Enterprise SaaS · Responsive Web</div>
            </div>
          </div>


          <div className="mt-8">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Responsibilities
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "UX Research",
                "Product Strategy",
                "Information Architecture",
                "UX Design",
                "User Flow",
                "Wireframing",
                "UI Design",
                "AI Experience Design",
                "Interactive Prototype",
              ].map((r) => (
                <Pill key={r}>{r}</Pill>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-border bg-butter/40 p-8 md:p-10 flex gap-5 items-start">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-background border border-border shrink-0">
              <Trophy className="h-5 w-5 text-accent" />
            </span>
            <div>
              <div className="text-xs uppercase tracking-widest text-accent mb-2">
                Recognition · UX Design Awards 2025
              </div>
              <p className="font-display text-xl md:text-2xl leading-snug">
                Selected among the Top 50 UX Designs globally, chosen from
                400+ submissions across 49 countries — recognized for
                innovation in AI-integrated design workflows and a
                human-centered approach to recruitment.
              </p>
            </div>
          </div>

          <figure className="mt-12 rounded-3xl overflow-hidden border border-border">
            <img src={talentai} alt="TalentAI product visual" className="w-full h-auto block" />
          </figure>
        </div>
      </section>

      {/* Overview */}
      <Section eyebrow="Overview" title="Recruitment today is becoming increasingly difficult." tone="lavender">
        <div className="grid md:grid-cols-2 gap-10 text-lg text-foreground/85 leading-relaxed">
          <p>
            Organizations receive hundreds of applications for every opening,
            yet recruiters spend countless hours conducting repetitive
            first-round interviews, scheduling candidates, and filtering
            applicants who may not meet the required qualifications.
          </p>
          <p>
            At the same time, candidates often experience inconsistent
            interview processes, delayed responses, and subjective
            evaluations that impact fairness. TalentAI introduces an
            AI-assisted pre-screening platform that helps recruiters
            identify qualified candidates faster while keeping hiring
            transparent, unbiased, and human-led.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          <div className="rounded-3xl border border-border p-8 bg-background/70">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Project Goal
            </div>
            <p className="font-display text-xl leading-snug">
              Design an AI-powered recruitment platform that streamlines
              hiring while maintaining fairness, transparency, and a
              positive candidate experience.
            </p>
          </div>
          <div className="rounded-3xl border border-border p-8 bg-mint/30">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Business Objectives
            </div>
            <ul className="space-y-2">
              {[
                "Reduce recruiter workload",
                "Improve hiring efficiency",
                "Standardize candidate evaluation",
                "Reduce interview no-shows",
                "Increase recruitment scalability",
              ].map((g) => (
                <li key={g} className="flex items-center gap-2 text-foreground/85">
                  <Check className="h-4 w-4 text-accent" /> {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Problem */}
      <Section eyebrow="Understanding the Problem" title="Repetitive screening consumes half the hiring cycle.">
        <p className="text-lg text-foreground/85 leading-relaxed max-w-3xl mb-10">
          Through secondary research and stakeholder interviews, several
          recurring problems emerged across recruiters, candidates and
          technical teams.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Recruiters",
              items: [
                "Repetitive first-round interviews",
                "Time on unsuitable candidates",
                "Delays from no-shows",
                "No standardized evaluation",
              ],
            },
            {
              t: "Candidates",
              items: [
                "Inconsistent interviews",
                "Nervous during live rounds",
                "Limited feedback",
                "Perceived subjectivity",
              ],
            },
            {
              t: "Technical Teams",
              items: [
                "Interviewing under-qualified candidates",
                "Need better shortlists",
              ],
            },
          ].map((g) => (
            <div key={g.t} className="rounded-2xl border border-border p-6 bg-background/70 backdrop-blur">
              <div className="font-display text-xl mb-3">{g.t}</div>
              <ul className="space-y-2 text-foreground/85">
                {g.items.map((i) => (
                  <li key={i}>· {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-foreground text-background p-10 md:p-14">
          <div className="text-xs uppercase tracking-[0.22em] text-background/60 mb-4">
            Problem Statement
          </div>
          <p className="font-display font-light text-2xl md:text-4xl leading-tight">
            How might we help recruiters efficiently identify qualified
            candidates while creating a <em className="text-accent">transparent, engaging and unbiased</em> recruitment experience?
          </p>
        </div>
      </Section>

      {/* Research */}
      <Section eyebrow="Research & Discovery" title="Understanding the recruitment ecosystem." tone="blush">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <p className="text-lg text-foreground/85 leading-relaxed">
            I conducted qualitative research focused on four key
            stakeholders — hiring managers, HR specialists, candidates and
            technical evaluators — to map pain points and opportunities
            across the hiring lifecycle.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Stakeholder Interviews",
              "Qualitative Research",
              "Personas",
              "Competitor Analysis",
              "Journey Mapping",
              "AI Opportunity Mapping",
            ].map((m) => (
              <Pill key={m}>{m}</Pill>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {[
            {
              t: "Hiring Managers",
              n: "Better-qualified candidates, less screening effort.",
              p: ["Too many irrelevant applications", "Repetitive interviews", "Time pressure"],
            },
            {
              t: "HR Specialists",
              n: "Scalable, compliant and manageable processes.",
              p: ["Scheduling", "Follow-ups", "Recruitment tracking"],
            },
            {
              t: "Candidates",
              n: "Comfortable interviews that evaluate skills fairly.",
              p: ["Interview anxiety", "Lack of feedback", "Inconsistent expectations"],
            },
            {
              t: "Technical Evaluators",
              n: "Only technically qualified candidates in final rounds.",
              p: ["Wasted interview time", "Poor candidate quality"],
            },
          ].map((g) => (
            <div key={g.t} className="rounded-2xl border border-border p-6 bg-background/70 backdrop-blur">
              <div className="font-display text-xl mb-2">{g.t}</div>
              <p className="text-foreground/75 mb-3">{g.n}</p>
              <ul className="space-y-1 text-foreground/85 text-sm">
                {g.p.map((i) => (
                  <li key={i}>· {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Defining */}
      <Section eyebrow="Defining the Experience" title="Balancing AI automation with human decision-making.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Human-Centered AI", d: "AI recommends. Recruiters decide." },
            { t: "Transparent Evaluation", d: "Explainable insights instead of mysterious AI scores." },
            { t: "Candidate-First Experience", d: "Guided interviews with clear expectations and feedback." },
          ].map((p) => (
            <div key={p.t} className="rounded-3xl border border-border p-8 bg-lavender/25">
              <div className="font-display text-2xl mb-3">{p.t}</div>
              <p className="text-foreground/80">{p.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            User Journey
          </div>
          <ol className="grid md:grid-cols-7 gap-3">
            {[
              "Recruiter Creates Job",
              "Candidate Invited",
              "AI Video Interview",
              "AI Evaluation",
              "Recruiter Dashboard",
              "Technical Interview",
              "Final Decision",
            ].map((s, i) => (
              <li key={s} className="rounded-2xl border border-border p-4 bg-background/70">
                <div className="font-mono text-xs text-muted-foreground mb-1">0{i + 1}</div>
                <div className="font-display leading-snug">{s}</div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Solution */}
      <Section eyebrow="Solution" title="Conversational AI meets structured recruitment workflows." tone="mint">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              t: "AI Video Interview",
              d: "Candidates complete structured interviews from anywhere, at their convenience.",
            },
            {
              t: "Intelligent Candidate Analysis",
              d: "Evaluates technical knowledge, communication, confidence, answer relevance and behavior.",
            },
            {
              t: "Recruiter Dashboard",
              d: "AI summaries, rankings, recordings, skill insights and hiring recommendations.",
            },
            {
              t: "Fraud Prevention",
              d: "Identity verification, voice matching and recorded-interview validation.",
            },
            {
              t: "ATS Integration",
              d: "Integrates seamlessly with existing recruitment systems.",
            },
            {
              t: "Human Validation",
              d: "Recruiters always make the final call — AI supports, never replaces, judgment.",
            },
          ].map((f) => (
            <div key={f.t} className="rounded-2xl border border-border p-6 bg-background/70 backdrop-blur">
              <div className="font-display text-xl mb-2">{f.t}</div>
              <p className="text-foreground/80">{f.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Design Process */}
      <Section eyebrow="Design Process" title="Minimize recruiter effort, maximize candidate confidence." tone="butter">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Recruiter IA
            </div>
            <div className="flex flex-wrap gap-2">
              {["Dashboard", "Jobs", "Candidates", "Reports", "Settings"].map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Candidate IA
            </div>
            <div className="flex flex-wrap gap-2">
              {["Invitation", "Interview", "Progress", "Results", "Feedback"].map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          <div className="rounded-3xl border border-border p-8 bg-background/70">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Design Principles
            </div>
            <ul className="space-y-2 text-foreground/85">
              {[
                "Reduce cognitive load",
                "Build trust through transparency",
                "Simplify complex workflows",
                "Encourage recruiter confidence",
                "Support accessibility",
              ].map((p) => (
                <li key={p}>· {p}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border p-8 bg-blush/30">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Visual Design
            </div>
            <ul className="space-y-2 text-foreground/85">
              {[
                "Clear hierarchy",
                "Dashboard-first layouts",
                "Status indicators",
                "Data visualization",
                "Guided interactions",
              ].map((p) => (
                <li key={p}>· {p}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Results */}
      <Section eyebrow="Results & Impact" title="AI that enhances recruitment without replacing expertise.">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Reduced first-round screening effort",
            "Faster hiring workflows",
            "Improved evaluation consistency",
            "Better-qualified candidate shortlists",
            "Reduced recruiter workload",
            "Enhanced candidate experience",
          ].map((r) => (
            <div key={r} className="rounded-2xl border border-border p-6 bg-background/70 flex items-center gap-3">
              <Check className="h-5 w-5 text-accent shrink-0" />
              <span className="text-foreground/85">{r}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-foreground text-background p-10 md:p-14 flex gap-5 items-start">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-background/10 border border-background/20 shrink-0">
            <Trophy className="h-5 w-5 text-accent" />
          </span>
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-background/60 mb-3">
              UX Design Awards 2025
            </div>
            <p className="font-display font-light text-2xl md:text-4xl leading-tight">
              Top 50 UX Designs globally — from 400+ submissions across 49
              countries — recognizing innovation in <em className="text-accent">AI-integrated design workflows</em>.
            </p>
          </div>
        </div>
      </Section>

      {/* Reflection */}
      <Section eyebrow="Reflection" title="AI should enhance human decision-making — not replace it." tone="lavender">
        <p className="text-lg text-foreground/85 leading-relaxed max-w-3xl mb-10">
          The biggest challenge wasn't designing AI features — it was
          designing confidence. Recruiters needed to understand why
          recommendations were made, and candidates needed to feel they were
          being evaluated fairly.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "AI delivers the greatest value when it augments, rather than replaces, human expertise.",
            "Explainable AI builds trust and encourages adoption in enterprise workflows.",
            "Multi-stakeholder products require balancing business goals with user needs.",
            "Research-driven decisions create more meaningful and scalable product experiences.",
            "Designing enterprise products means optimizing operational efficiency and UX together.",
          ].map((l) => (
            <div key={l} className="rounded-2xl border border-border p-6 bg-background/70">
              <p className="text-foreground/85">{l}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm border border-foreground/80 rounded-full px-5 py-3 hover:bg-foreground hover:text-background transition"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all work
          </Link>
          <Link
            to="/case-studies/sponsorsphere"
            className="inline-flex items-center gap-2 text-sm bg-foreground text-background rounded-full px-5 py-3 hover:bg-accent transition"
          >
            Previous: SponsorSphere
          </Link>
        </div>
      </Section>
    </div>
  );
}
