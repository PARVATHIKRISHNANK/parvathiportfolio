import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Download, Mail, Phone, Linkedin, ArrowRight } from "lucide-react";
import parvathi from "@/assets/parvathi.jpg";
import talentai from "@/assets/talentai.png";
import uxindia from "@/assets/uxindia.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const caseStudies = [
  { n: "01", title: "Enterprise Analytics Console", tag: "B2B SaaS · Design System", year: "2025" },
  { n: "02", title: "TalentAI Interview Platform", tag: "AI · Conversational UX", year: "2024" },
  { n: "03", title: "Sports Fan Experience", tag: "Consumer · Mobile", year: "2024" },
  { n: "04", title: "Professional Services Suite", tag: "Workflow · Web App", year: "2023" },
];

const process = [
  { step: "01", label: "Discover", items: ["User Interviews", "Competitive Analysis", "Stakeholder Workshops", "Research"] },
  { step: "02", label: "Define", items: ["Problem Statements", "Journey Mapping", "Personas", "Information Architecture"] },
  { step: "03", label: "Ideate", items: ["Crazy 8s", "Brainstorming", "Wireframes", "Concept Validation"] },
  { step: "04", label: "Design", items: ["UI Design", "Interaction Design", "Design Systems", "Accessibility"] },
  { step: "05", label: "Validate", items: ["Usability Testing", "Iteration", "Feedback"] },
  { step: "06", label: "Deliver", items: ["Developer Handoff", "QA", "Continuous Improvement"] },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Highlights />
      <CaseStudies />
      <Philosophy />
      <Process />
      <Journey />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tight">
          Parvathi<span className="text-accent">.</span>
        </a>
        <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
          <a href="#work" className="hover:text-foreground transition">Work</a>
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#process" className="hover:text-foreground transition">Process</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a
          href="#contact"
          className="text-sm inline-flex items-center gap-1.5 border border-foreground/80 rounded-full px-4 py-2 hover:bg-foreground hover:text-background transition"
        >
          Let's talk <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7 animate-rise">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
              <span className="h-px w-8 bg-accent" />
              Portfolio · 2026
            </div>
            <h1 className="font-display font-light text-[clamp(3rem,8vw,7.5rem)] leading-[0.92] tracking-[-0.02em]">
              Designing<br />
              <span className="italic text-accent">what's</span> next.
            </h1>
            <p className="mt-10 max-w-xl text-lg md:text-xl leading-relaxed text-foreground/80">
              Hi, I'm <span className="font-medium">Parvathi K</span> — a Senior UX/UI &amp; Product
              Designer crafting digital experiences that balance user needs, business goals, and
              technology.
            </p>
            <p className="mt-4 max-w-xl text-base text-muted-foreground leading-relaxed">
              Four years across enterprise platforms, AI-powered solutions, and consumer products —
              turning complex problems into intuitive, accessible, and impactful experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-sm font-medium hover:bg-accent transition group"
              >
                View Case Studies
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-foreground/80 px-6 py-3.5 rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium hover:text-accent transition"
              >
                Let's Connect <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 animate-rise" style={{ animationDelay: "0.15s" }}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-accent/10 -rotate-2" aria-hidden />
              <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-[0_30px_80px_-30px_rgba(60,30,10,0.35)]">
                <img
                  src={parvathi}
                  alt="Portrait of Parvathi Krishnan K"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-background/85 backdrop-blur px-4 py-3 rounded-xl text-sm">
                  <div>
                    <div className="font-medium">Parvathi Krishnan K</div>
                    <div className="text-muted-foreground text-xs">Coimbatore, India</div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Open to roles
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Senior UX/UI Designer",
    "Product Designer",
    "AI-Powered Experiences",
    "Design Systems",
    "Accessibility",
    "Research-Led",
  ];
  const row = [...items, ...items];
  return (
    <div className="border-y border-border bg-secondary/40 overflow-hidden">
      <div className="flex gap-12 py-5 animate-marquee whitespace-nowrap font-display text-2xl md:text-3xl">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12 text-foreground/80">
            {t} <span className="text-accent">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="sticky top-24">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              (About)
            </div>
            <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.05] tracking-tight">
              More than just <em className="text-accent not-italic">designing</em> screens.
            </h2>
          </div>
        </div>
        <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            Design, for me, is about understanding people before creating solutions. Every project
            starts with curiosity — asking the right questions, uncovering user needs, and finding
            opportunities to improve experiences.
          </p>
          <p>
            Over the years, I've collaborated with product managers, developers, business
            stakeholders, and users to create digital products that are intuitive, scalable, and
            accessible.
          </p>
          <p>
            Outside project work, I enjoy mentoring aspiring designers, speaking at design
            communities, exploring AI-powered workflows, and continuously learning new ways to
            improve the design process.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border mt-10">
            {[
              { n: "4+", l: "Years designing" },
              { n: "20+", l: "Products shipped" },
              { n: "Top 50", l: "Global UX Awards" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl md:text-5xl">{s.n}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between mb-16">
          <h2 className="font-display font-light text-4xl md:text-6xl leading-tight max-w-2xl">
            Highlights from the journey.
          </h2>
          <div className="text-xs uppercase tracking-[0.2em] text-background/60 hidden md:block">
            (Milestones)
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <article className="group">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-6 bg-background/10">
              <img src={uxindia} alt="UX India Conference" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent mb-3">2024 · 2025</div>
            <h3 className="font-display text-3xl mb-3">UX India Conference</h3>
            <p className="text-background/70 leading-relaxed">
              Connected with designers, researchers and product leaders from across the industry.
              Explored emerging trends in UX, AI, accessibility and design systems — and conducted
              a UX Process workshop.
            </p>
          </article>

          <article className="group">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-6 bg-background/10">
              <img src={talentai} alt="TalentAI recognition" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent mb-3">
              🏆 Global UX Recognition
            </div>
            <h3 className="font-display text-3xl mb-3">
              TalentAI — Top 50, 150+ countries
            </h3>
            <p className="text-background/70 leading-relaxed">
              An AI-powered interview platform combining conversational AI, resume analysis,
              sentiment analysis, and identity verification for human-like pre-screening. Selected
              among the top 50 submissions in an international UX competition.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section id="work" className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
      <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            (Selected Work)
          </div>
          <h2 className="font-display font-light text-4xl md:text-6xl leading-tight tracking-tight">
            Featured case studies.
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm">
          A glimpse into projects across AI, enterprise, and consumer products. Full case studies
          coming soon.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
        {caseStudies.map((c, i) => (
          <a
            key={i}
            href="#"
            className={`group block ${i % 2 === 1 ? "md:mt-24" : ""}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-secondary border border-border">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    i === 1
                      ? `url(${talentai})`
                      : `linear-gradient(135deg, oklch(0.82 0.06 60) 0%, oklch(0.65 0.14 45) 100%)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 flex items-end p-8">
                <div className="text-background">
                  <div className="font-mono text-xs mb-2 opacity-80">Case {c.n} · {c.year}</div>
                  <div className="font-display text-2xl md:text-3xl leading-tight max-w-sm">
                    {c.title}
                  </div>
                </div>
              </div>
              <div className="absolute top-6 right-6 h-11 w-11 rounded-full bg-background text-foreground flex items-center justify-center group-hover:bg-accent group-hover:text-background transition">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <div className="font-display text-xl">{c.title}</div>
                <div className="text-sm text-muted-foreground mt-0.5">{c.tag}</div>
              </div>
              <span className="text-sm inline-flex items-center gap-1 group-hover:text-accent transition">
                View case study <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="relative bg-secondary/60 border-y border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-28 md:py-40 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          (Design Philosophy)
        </div>
        <blockquote className="font-display font-light text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] tracking-tight max-w-5xl mx-auto">
          Great design isn't about making things look beautiful.
          <br />
          <span className="italic text-accent">
            It's about making complex experiences feel effortless.
          </span>
        </blockquote>
        <p className="mt-10 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          Every interaction should have purpose. Every decision should be backed by research. Every
          product should create value for both users and businesses.
        </p>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
      <div className="mb-16">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          (Design Process)
        </div>
        <h2 className="font-display font-light text-4xl md:text-6xl leading-tight tracking-tight max-w-3xl">
          From curiosity to <em className="not-italic text-accent">craft</em>.
        </h2>
      </div>

      <ol className="relative border-l border-dashed border-border/80 ml-2 md:ml-6 space-y-14">
        {process.map((p) => (
          <li key={p.step} className="pl-8 md:pl-12 relative group">
            <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-background border-2 border-accent group-hover:bg-accent transition" />
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-10">
              <div className="md:w-56 shrink-0">
                <div className="font-mono text-xs text-muted-foreground">{p.step}</div>
                <div className="font-display text-3xl md:text-4xl">{p.label}</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.items.map((it) => (
                  <span
                    key={it}
                    className="px-3.5 py-1.5 text-sm rounded-full border border-border bg-card hover:border-accent hover:text-accent transition"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Journey() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24 md:pb-32">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            (Experience)
          </div>
          <h3 className="font-display font-light text-3xl md:text-4xl leading-tight mb-8">
            Professional Journey
          </h3>
          <div className="border-t border-border pt-6">
            <div className="flex justify-between items-baseline mb-2">
              <div className="font-display text-2xl">UX / UI Designer</div>
              <div className="font-mono text-sm text-muted-foreground">2022 — Present</div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Worked on sports platforms, AI-driven experiences, and professional service platforms
              while collaborating with multidisciplinary teams to deliver user-centered digital
              products.
            </p>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            (Education)
          </div>
          <h3 className="font-display font-light text-3xl md:text-4xl leading-tight mb-8">
            Education
          </h3>
          <div className="space-y-6">
            <div className="border-t border-border pt-6">
              <div className="font-display text-xl">Master of Computer Applications</div>
              <div className="text-muted-foreground mt-1">
                SRM Institute of Science and Technology
              </div>
            </div>
            <div className="border-t border-border pt-6">
              <div className="font-display text-xl">B.Sc. Computer Science</div>
              <div className="text-muted-foreground mt-1">Sri Krishna Arts and Science College</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-foreground text-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-28 md:py-40">
        <div className="text-xs uppercase tracking-[0.2em] text-background/60 mb-8">
          (Contact)
        </div>
        <h2 className="font-display font-light text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tight max-w-5xl">
          Let's build meaningful <em className="not-italic text-accent">digital experiences</em>{" "}
          together.
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-16">
          <div>
            <div className="text-sm text-background/60 mb-4">Currently open to</div>
            <div className="flex flex-wrap gap-3">
              {["Senior UX/UI Designer", "Senior Product Designer"].map((r) => (
                <span
                  key={r}
                  className="px-4 py-2 rounded-full border border-background/30 text-sm"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "parvathikrishnamohan01@gmail.com",
                href: "mailto:parvathikrishnamohan01@gmail.com",
              },
              { icon: Phone, label: "Phone", value: "+91 93609 82121", href: "tel:+919360982121" },
              { icon: Linkedin, label: "LinkedIn", value: "Parvathi Krishnan K", href: "#" },
              { icon: ArrowUpRight, label: "Behance", value: "Parvathi Krishnan K", href: "#" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-center justify-between border-b border-background/20 py-4 group hover:border-accent transition"
              >
                <div className="flex items-center gap-4">
                  <c.icon className="h-5 w-5 text-background/60 group-hover:text-accent transition" />
                  <div>
                    <div className="text-xs uppercase tracking-widest text-background/50">
                      {c.label}
                    </div>
                    <div className="font-display text-lg md:text-xl">{c.value}</div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-background/60 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background/70 border-t border-background/10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
        <div>© {new Date().getFullYear()} Parvathi Krishnan K. Designed & crafted with care.</div>
        <div className="font-mono text-xs">Coimbatore · India</div>
      </div>
    </footer>
  );
}
