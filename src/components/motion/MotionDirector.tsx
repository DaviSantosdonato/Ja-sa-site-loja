"use client";

import { useEffect } from "react";

export function MotionDirector() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const mobile = window.matchMedia("(max-width: 720px)").matches;
    if (reduced || mobile) return;

    let cleanup: () => void = () => {};
    let cancelled = false;

    const initialize = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      const context = gsap.context(() => {
        const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
        reveals.forEach((element) => {
          if (element.getBoundingClientRect().top < window.innerHeight) return;
          gsap.fromTo(
            element,
            { opacity: 0, y: 34 },
            {
              opacity: 1,
              y: 0,
              duration: 0.78,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            },
          );
        });

        ScrollTrigger.create({
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          onUpdate: ({ progress }) => {
            window.dispatchEvent(
              new CustomEvent("jaisa:hero-progress", { detail: progress }),
            );
          },
        });

        gsap.to("[data-gallery-track]", {
          xPercent: -16,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-gallery-stage]",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        });

        const cards = gsap.utils.toArray<HTMLElement>("[data-category]");
        cards.forEach((card, index) => {
          gsap.to(card, {
            yPercent: index % 2 === 0 ? -5 : 5,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
            },
          });
        });
      });
      cleanup = () => context.revert();
    };

    const idleId = window.requestIdleCallback(() => void initialize(), {
      timeout: 1600,
    });
    return () => {
      cancelled = true;
      window.cancelIdleCallback(idleId);
      cleanup();
    };
  }, []);

  return null;
}
