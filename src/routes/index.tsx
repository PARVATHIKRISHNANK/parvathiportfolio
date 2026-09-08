import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Download, Mail, Phone, Linkedin, ArrowRight, Award, Star, Sparkles } from "lucide-react";
import parvathi from "@/assets/parvathi.jpg";
import talentai from "@/assets/talentai.png";
import uxindia from "@/assets/uxindia.jpg";
import sponsorsphereCar from "@/assets/sponsorsphere-hero-car.png.asset.json";
import t1dHero from "@/assets/t1d-hero.jpg.asset.json";
import ledgerCard from "@/assets/ledger-card.jpg.asset.json";
import resume from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Parvathi K — UX/UI & Product Designer" },
      {
        name: "description",
        content: "Portfolio of Parvathi Krishnan K, a UX/UI and Product Designer creating accessible, AI-powered digital experiences.",
      },
      { property: "og:title", content: "Parvathi K — UX/UI & Product Designer" },
      {
        property: "og:description",
        content: "Selected product explorations across AI, enterprise, and consumer experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const caseStudies = [
  { n: "01", title: "Ledger", tag: "AI · Professional Services · Compliance", year: "2026", href: "/case-studies/ledger" as const, image: ledgerCard.url },
  { n: "02", title: "Glumate", tag: "Healthcare · AI · Mobile App", year: "2025", href: "/case-studies/glumate" as const, image: t1dHero.url },
  { n: "03", title: "SponsorSphere", tag: "AI · Motorsport Sponsorship", year: "2024", href: "/case-studies/sponsorsphere" as const, image: sponsorsphereCar.url },
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
      <Recognitions />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-3 md:top-5 inset-x-0 z-50">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="rounded-full border border-border bg-background/70 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.5)] px-4 md:px-6 h-14 flex items-center justify-between">
          <a href="#top" className="font-display text-xl tracking-tight">
            Parvathi<span className="text-accent">.</span>
          </a>
          <nav className="hidden md:flex gap-7 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition">Work</a>
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#journey" className="hover:text-foreground transition">Journey</a>
            <a href="#recognitions" className="hover:text-foreground transition">Recognitions</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <a
            href="#contact"
            className="text-sm inline-flex items-center gap-1.5 border border-foreground/80 rounded-full px-4 py-1.5 hover:bg-foreground hover:text-background transition"
          >
            Let's talk <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-28 md:pt-40 pb-20">
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
                href={resume.url}
                download="Parvathi_Krishnan_Resume.pdf"
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

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border mt-10">
            {[
              { n: "4+", l: "Years designing" },
              { n: "8", l: "Projects worked" },
              { n: "7", l: "POCs delivered" },
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

          <a
            href="https://ux-design-awards.com/winners/2025-2-talentai-in"
            target="_blank"
            rel="noreferrer"
            className="group block"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-6 bg-background/10">
              <img src={talentai} alt="TalentAI recognition" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent mb-3">
              🏆 Global UX Recognition
            </div>
            <h3 className="font-display text-3xl mb-3">
              TalentAI — Top 50 globally
            </h3>
            <p className="text-background/70 leading-relaxed">
              Selected among the Top 50 UX Designs globally out of 400+ entries from 49 countries
              for innovation and impact in AI-integrated design workflows. An AI-powered interview
              platform combining conversational AI, resume analysis, sentiment analysis, and
              identity verification for human-like pre-screening. Selected among the top 50
              submissions in an international UX competition.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-accent">
              View recognition <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
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
          Selected product explorations across AI, enterprise, and consumer experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {caseStudies.map((c, i) => {
          const bgImage = `url(${c.image})`;
          return (
            <Link key={i} to={c.href} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-secondary border border-border">
                <div
                  className="absolute inset-0 transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: bgImage,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute top-5 right-5 h-11 w-11 rounded-full bg-background text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-accent group-hover:text-accent-foreground transition">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-5">
                <div className="font-mono text-xs text-muted-foreground mb-1">
                  Case {c.n} · {c.year}
                </div>
                <div className="font-display text-2xl">{c.title}</div>
                <div className="text-sm text-muted-foreground mt-0.5">{c.tag}</div>
                <span className="mt-3 text-sm inline-flex items-center gap-1 group-hover:text-accent transition">
                  View case study <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
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

function Recognitions() {
  const awards = [
    { n: "4×", t: "Star of the Month Award" },
    { n: "2×", t: "SPOT Award — World-class Execution", s: "Appreciations from Senior VP, Experience Design & Director, Experience Design" },
    { n: "6×", t: "SPOT Award — Growth Mindset", s: "Appreciations from my project team" },
  ];
  return (
    <section id="recognitions" className="border-t border-border bg-lavender/20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              (Recognitions & Certification)
            </div>
            <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.05] tracking-tight">
              Recognized for <em className="text-accent">craft</em> and impact.
            </h2>

            <div className="mt-10 rounded-3xl border border-border bg-background/80 backdrop-blur p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-mint/50 border border-border shrink-0">
                  <Award className="h-5 w-5 text-accent" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Certification
                  </div>
                  <div className="font-display text-2xl leading-snug">
                    Digital Skills — User Experience
                  </div>
                  <div className="text-muted-foreground mt-1">Accenture</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6 content-start">
            {awards.map((a) => (
              <div
                key={a.t}
                className="rounded-3xl border border-border bg-background/70 backdrop-blur p-7 hover:-translate-y-1 transition duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Star className="h-5 w-5 text-accent" />
                  <span className="font-display text-3xl">{a.n}</span>
                </div>
                <div className="font-display text-xl leading-snug">{a.t}</div>
                {a.s && (
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{a.s}</p>
                )}
              </div>
            ))}
            <div className="rounded-3xl border border-border bg-butter/40 p-7">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="h-5 w-5 text-accent" />
                <span className="font-display text-3xl">Top 50</span>
              </div>
              <div className="font-display text-xl leading-snug">UX Design Awards 2025</div>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Selected globally from 400+ entries across 49 countries.
              </p>
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
              { icon: Linkedin, label: "LinkedIn", value: "Parvathi Krishnan K", href: "https://www.linkedin.com/in/parvathi-krishnan-k-0ab4b81ba" },
              { icon: ArrowUpRight, label: "Behance", value: "Parvathi Krishnan K", href: "https://www.behance.net/parvathkrishna" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
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
