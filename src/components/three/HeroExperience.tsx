"use client";

import { useEffect, useState, type ComponentType } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";
import { HeroFallback } from "./HeroFallback";

export function HeroExperience() {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const mobile = useMediaQuery("(max-width: 720px)");
  const webglSupported = useWebGLSupport();
  const [ExperienceCanvas, setExperienceCanvas] =
    useState<ComponentType | null>(null);

  useEffect(() => {
    if (reducedMotion || mobile || webglSupported !== true) return;

    let cancelled = false;
    const load = () => {
      void import("./ExperienceCanvas").then((module) => {
        if (!cancelled) setExperienceCanvas(() => module.default);
      });
    };
    const idleId = window.requestIdleCallback(load, { timeout: 1400 });

    return () => {
      cancelled = true;
      window.cancelIdleCallback(idleId);
    };
  }, [mobile, reducedMotion, webglSupported]);

  if (reducedMotion || mobile || webglSupported !== true || !ExperienceCanvas) {
    return <HeroFallback />;
  }

  return <ExperienceCanvas />;
}
