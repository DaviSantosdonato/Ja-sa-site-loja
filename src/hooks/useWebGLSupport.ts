"use client";

import { useEffect, useState } from "react";

export function useWebGLSupport() {
  const [supported, setSupported] = useState<boolean | null>(null);

  useEffect(() => {
    let frame = 0;
    try {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("webgl2", {
        failIfMajorPerformanceCaveat: true,
      });
      frame = window.requestAnimationFrame(() =>
        setSupported(Boolean(context)),
      );
      context?.getExtension("WEBGL_lose_context")?.loseContext();
    } catch {
      frame = window.requestAnimationFrame(() => setSupported(false));
    }
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return supported;
}
