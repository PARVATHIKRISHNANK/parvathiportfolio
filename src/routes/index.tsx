import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Download, Mail, Phone, Linkedin, ArrowRight, Award } from "lucide-react";
import parvathi from "@/assets/parvathi.jpg";
import talentai from "@/assets/talentai.png";
import uxindia from "@/assets/uxindia.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const caseStudies = [
  { n: "01", title: "SponsorSphere", tag: "AI · Motorsport Sponsorship", year: "2024", href: "/case-studies/sponsorsphere" as const },
  { n: "02", title: "TalentAI Interview Platform", tag: "AI · Conversational UX", year: "2024" },
  { n: "03", title: "Sports Fan Experience", tag: "Consumer · Mobile", year: "2024" },
  { n: "04", title: "Professional Services Suite", tag: "Workflow · Web App", year: "2023" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Ambient pastel blobs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full bg-lavender/60 blur-3xl animate-float-slow" />
        <div className="absolute top-[30%] -right-32 h-[560px] w-[560px] rounded-full bg-blush/60 blur-3xl animate-float-slower" />
        <div className="absolute bottom-0 left-1/3 h-[460px] w-[460px] rounded-full bg-mint/50 blur-3xl animate-float-slow" />
      </div>

      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Highlights />
      <CaseStudies />
      <Philosophy />
      <Journey />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl tracking-tight">
          Parvathi<span className="text-accent">.</span>
        </a>
        <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
          <a href="#work" className="hover:text-foreground transition">Work</a>
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#journey" className="hover:text-foreground transition">Journey</a>
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
            <h1 className="font-display font-light text-[clamp(3rem,8.5vw,8rem)] leading-[0.95] tracking-[-0.02em]">
              Designing<br />
              <span className="italic text-accent">what's</span> next.
            </h1>
            <p className="mt-10 max-w-xl text-lg md:text-xl leading-relaxed text-foreground/85">
              Hi, I'm <span className="font-medium">Parvathi K</span> — a UX/UI Designer with{" "}
              <span className="font-medium">4+ years</span> of experience designing user-centered
              digital products that bridge business goals with human needs.
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
              <div className="absolute -inset-6 rounded-[2.2rem] bg-lavender/70 -rotate-3 animate-float-slow" aria-hidden />
              <div className="absolute -inset-2 rounded-[2rem] bg-blush/60 rotate-2 animate-float-slower" aria-hidden />
              <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-[0_30px_80px_-30px_rgba(90,60,120,0.25)]">
                <img
                  src={parvathi}
                  alt="Portrait of Parvathi Krishnan K"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-background/85 backdrop-blur px-4 py-3 rounded-2xl text-sm">
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
    "UX/UI Designer",
    "Product Designer",
    "AI-Powered Experiences",
    "Design Systems",
    "Accessibility",
    "Research-Led",
  ];
  const row = [...items, ...items];
  return (
    <div className="border-y border-border bg-lavender/25 overflow-hidden">
      <div className="flex gap-12 py-5 animate-marquee whitespace-nowrap font-display text-2xl md:text-3xl">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12 text-foreground/80">
            {t} <span className="text-accent inline-block animate-spin-slow">✳</span>
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
              More than just <em className="text-accent">designing</em> screens.
            </h2>
          </div>
        </div>
        <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            I believe great design begins with empathy and curiosity. Every project is an
            opportunity to understand people, simplify complexity, and create experiences that are
            intuitive, accessible, and meaningful.
          </p>
          <p>
            Beyond product design, I'm passionate about AI in design, mentoring, knowledge sharing,
            and continuously exploring better ways to solve real-world problems.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border mt-10">
            {[
              { n: "4+", l: "Years designing" },
              { n: "15", l: "Projects worked" },
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
        {caseStudies.map((c, i) => {
          const gradients = [
            "linear-gradient(135deg, oklch(0.9 0.06 340) 0%, oklch(0.82 0.09 300) 100%)",
            "",
            "linear-gradient(135deg, oklch(0.9 0.06 165) 0%, oklch(0.82 0.09 200) 100%)",
            "linear-gradient(135deg, oklch(0.94 0.06 90) 0%, oklch(0.85 0.09 55) 100%)",
          ];
          const inner = (
            <>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-secondary border border-border">
                <div
                  className="absolute inset-0 transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: i === 1 ? `url(${talentai})` : gradients[i],
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="text-foreground">
                    <div className="font-mono text-xs mb-2 opacity-70">Case {c.n} · {c.year}</div>
                    <div className="font-display text-2xl md:text-3xl leading-tight max-w-sm">
                      {c.title}
                    </div>
                  </div>
                </div>
                <div className="absolute top-6 right-6 h-11 w-11 rounded-full bg-background text-foreground flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <div className="font-display text-2xl">{c.title}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{c.tag}</div>
                </div>
                <span className="text-sm inline-flex items-center gap-1 group-hover:text-accent transition">
                  View case study <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </>
          );
          const cls = `group block ${i % 2 === 1 ? "md:mt-24" : ""}`;
          return c.href ? (
            <Link key={i} to={c.href} className={cls}>{inner}</Link>
          ) : (
            <a key={i} href="#" className={cls}>{inner}</a>
          );
        })}
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="relative bg-blush/40 border-y border-border">
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

function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
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
            (Education & Certification)
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
            <div className="border-t border-border pt-6 bg-mint/30 -mx-4 px-4 py-5 rounded-2xl mt-6">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background border border-border shrink-0">
                  <Award className="h-4 w-4 text-accent" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Certification
                  </div>
                  <div className="font-display text-xl">Digital Skills — User Experience</div>
                  <div className="text-muted-foreground mt-1">Accenture</div>
                </div>
              </div>
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
          Let's build meaningful <em className="text-accent">digital experiences</em>{" "}
          together.
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-16">
          <div>
            <div className="text-sm text-background/60 mb-4">Currently open to</div>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full border border-background/30 text-sm">
                Senior UX/UI Designer
              </span>
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
