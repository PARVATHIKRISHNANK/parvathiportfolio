import { useEffect } from "react";

/**
 * Boots Lenis smooth scroll + GSAP ScrollTrigger cinematics for the
 * SponsorSphere case study. Everything is loaded dynamically so the
 * module never enters the SSR graph.
 */
export function useCinematic() {
  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const [{ default: Lenis }, gsapMod, stMod, splitMod] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("split-type"),
      ]);
      if (cancelled) return;

      const gsap = gsapMod.gsap ?? gsapMod.default;
      const ScrollTrigger = stMod.ScrollTrigger ?? stMod.default;
      const SplitType = splitMod.default;
      gsap.registerPlugin(ScrollTrigger);

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const desktop = window.matchMedia("(min-width: 1024px)").matches;

      let lenis: InstanceType<typeof Lenis> | undefined;
      let rafId = 0;

      if (!reduce) {
        lenis = new Lenis({ duration: 1.15, smoothWheel: true, touchMultiplier: 1.6 });
        const loop = (time: number) => {
          lenis!.raf(time);
          rafId = requestAnimationFrame(loop);
        };
        rafId = requestAnimationFrame(loop);
        lenis.on("scroll", ScrollTrigger.update);
      }

      const ctx = gsap.context(() => {
        /* ---- split headline reveals ---- */
        gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
          const split = new SplitType(el, { types: "words,chars" });
          gsap.from(split.chars, {
            yPercent: 115,
            opacity: 0,
            duration: reduce ? 0 : 0.9,
            ease: "power4.out",
            stagger: 0.016,
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
        });

        /* ---- generic cinematic reveals ---- */
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el, i) => {
          gsap.from(el, {
            y: 60,
            opacity: 0,
            filter: "blur(14px)",
            duration: reduce ? 0 : 1,
            ease: "power3.out",
            delay: (i % 3) * 0.06,
            scrollTrigger: { trigger: el, start: "top 88%" },
          });
        });

        /* ---- parallax layers ---- */
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const amt = Number(el.dataset.parallax || 18);
          gsap.to(el, {
            yPercent: amt,
            ease: "none",
            scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
          });
        });

        /* ---- garage doors ---- */
        const garage = document.querySelector("[data-garage]");
        if (garage) {
          gsap.timeline({
            scrollTrigger: { trigger: garage, start: "top 70%", end: "bottom 60%", scrub: 0.6 },
          })
            .to("[data-door='top']", { yPercent: -100, ease: "none" }, 0)
            .to("[data-door='bottom']", { yPercent: 100, ease: "none" }, 0)
            .fromTo("[data-garage-car]", { scale: 1.05, y: 40 }, { scale: 1.18, y: 0, ease: "none" }, 0);
        }

        /* ---- horizontal UI gallery ---- */
        const track = document.querySelector<HTMLElement>("[data-htrack]");
        const hwrap = document.querySelector<HTMLElement>("[data-hwrap]");
        if (track && hwrap && desktop) {
          const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
          gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: hwrap,
              start: "top top",
              // 1.6x the travel distance gives each garage stop time to be read
              end: () => "+=" + distance() * 1.6,
              pin: true,
              pinSpacing: true,
              anticipatePin: 1,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        }

        /* ---- AI race strategy board: car travels the checkpoints ---- */
        const sboard = document.querySelector<HTMLElement>("[data-strategyboard]");
        if (sboard) {
          gsap.to("[data-strategycar]", {
            top: "94%",
            ease: "none",
            scrollTrigger: { trigger: sboard, start: "top 65%", end: "bottom 85%", scrub: 0.5 },
          });
        }


        /* ---- strategy board: race car drives the path ---- */
        const board = document.querySelector<HTMLElement>("[data-board]");
        if (board) {
          gsap.to("[data-racecar]", {
            top: "100%",
            ease: "none",
            scrollTrigger: { trigger: board, start: "top 60%", end: "bottom 80%", scrub: 0.5 },
          });
          gsap.utils.toArray<HTMLElement>("[data-pin-card]").forEach((el, i) => {
            gsap.from(el, {
              y: 70,
              rotate: i % 2 === 0 ? -6 : 5,
              opacity: 0,
              duration: 0.9,
              ease: "back.out(1.4)",
              scrollTrigger: { trigger: el, start: "top 85%" },
            });
          });
        }

        /* ---- speedometer needles ---- */
        gsap.utils.toArray<HTMLElement>("[data-needle]").forEach((el) => {
          const to = Number(el.dataset.needle || 70);
          gsap.fromTo(
            el,
            { rotate: -120 },
            {
              rotate: -120 + (to / 100) * 240,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 90%", end: "top 40%", scrub: 0.8 },
            },
          );
        });

        /* ---- blueprint line drawing ---- */
        gsap.utils.toArray<SVGPathElement>("[data-draw]").forEach((path) => {
          const len = path.getTotalLength?.() ?? 600;
          gsap.fromTo(
            path,
            { strokeDasharray: len, strokeDashoffset: len },
            {
              strokeDashoffset: 0,
              ease: "none",
              scrollTrigger: { trigger: path.closest("svg"), start: "top 85%", end: "bottom 55%", scrub: 0.6 },
            },
          );
        });

        /* ---- progress rail ---- */
        gsap.to("[data-progress]", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.3 },
        });
      });

      ScrollTrigger.refresh();

      cleanup = () => {
        ctx.revert();
        cancelAnimationFrame(rafId);
        lenis?.destroy();
        ScrollTrigger.getAll().forEach((t: { kill: () => void }) => t.kill());
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);
}

/** Scrolls smoothly to an element id. */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}
