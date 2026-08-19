"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { heroPlanes } from "@/lib/content";
import { ImagePlane } from "./ImagePlane";

export function HeroScene() {
  const group = useRef<THREE.Group>(null);
  const scroll = useRef(0);
  const [mobile, setMobile] = useState(false);
  const viewport = useThree((state) => state.viewport);
  const textures = useTexture(heroPlanes.map((plane) => plane.src));

  useEffect(() => {
    textures.forEach((texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = 2;
    });
    const media = window.matchMedia("(max-width: 720px)");
    const update = () => setMobile(media.matches);
    const onScrollProgress = (event: Event) => {
      scroll.current = (event as CustomEvent<number>).detail;
    };
    update();
    media.addEventListener("change", update);
    window.addEventListener("jaisa:hero-progress", onScrollProgress);
    return () => {
      media.removeEventListener("change", update);
      window.removeEventListener("jaisa:hero-progress", onScrollProgress);
      textures.forEach((texture) => texture.dispose());
    };
  }, [textures]);

  useFrame((state, delta) => {
    if (!group.current) return;
    const damping = 1 - Math.exp(-delta * 2.8);
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      state.pointer.x * 0.045,
      damping,
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -state.pointer.y * 0.025,
      damping,
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      scroll.current * 0.7,
      damping,
    );
  });

  const layout = useMemo(() => {
    if (mobile) {
      return [
        [-1.1, 0.85, -0.8],
        [1.25, -0.5, -1.4],
      ] as const;
    }
    const widthScale = Math.min(1.15, viewport.width / 12);
    return heroPlanes.map((plane) => [
      plane.position[0] * widthScale,
      plane.position[1],
      plane.position[2],
    ]) as readonly (readonly [number, number, number])[];
  }, [mobile, viewport.width]);

  return (
    <group ref={group}>
      {heroPlanes.map((plane, index) => {
        if (mobile && index === 2) return null;
        return (
          <ImagePlane
            key={plane.src}
            texture={textures[index]}
            position={layout[index]}
            scale={mobile ? plane.scale * 0.72 : plane.scale}
            index={index}
            scroll={scroll}
          />
        );
      })}
    </group>
  );
}
