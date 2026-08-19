"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { HeroScene } from "./HeroScene";

export default function ExperienceCanvas() {
  const host = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const element = host.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting && !document.hidden),
      { rootMargin: "120px" },
    );
    const onVisibility = () =>
      setActive(!document.hidden && element.getBoundingClientRect().bottom > 0);
    observer.observe(element);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div ref={host} className="hero-canvas" aria-hidden="true">
      <Canvas
        frameloop={active ? "always" : "never"}
        dpr={[1, 1.5]}
        camera={{ fov: 42, position: [0, 0, 7.6] }}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: "high-performance",
        }}
        fallback={null}
      >
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
