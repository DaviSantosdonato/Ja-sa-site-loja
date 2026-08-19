"use client";

import { useFrame, type ThreeEvent } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  uniform float uTime;
  uniform float uHover;
  uniform float uScroll;

  void main() {
    vUv = uv;
    vec3 pos = position;
    float wave = sin((uv.y * 5.0) + (uTime * 0.7) + (uv.x * 2.0));
    pos.z += wave * (0.012 + uHover * 0.038);
    pos.x += sin(uv.y * 3.14159) * uScroll * 0.05;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform float uHover;
  uniform float uReveal;

  void main() {
    vec2 uv = vUv;
    uv.x += sin(uv.y * 8.0) * uHover * 0.005;
    vec4 color = texture2D(uTexture, uv);
    float reveal = smoothstep(0.0, 0.18, uReveal - (1.0 - uv.y) * 0.22);
    color.rgb = mix(color.rgb * 0.92, color.rgb * 1.04, uHover);
    gl_FragColor = vec4(color.rgb, color.a * reveal);
  }
`;

type Props = {
  texture: THREE.Texture;
  position: readonly [number, number, number];
  scale: number;
  index: number;
  scroll: React.MutableRefObject<number>;
};

export function ImagePlane({ texture, position, scale, index, scroll }: Props) {
  const mesh =
    useRef<THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>>(null);
  const targetHover = useRef(0);
  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture },
      uTime: { value: 0 },
      uHover: { value: 0 },
      uScroll: { value: 0 },
      uReveal: { value: 0 },
    }),
    [texture],
  );

  useFrame((state, delta) => {
    if (!mesh.current) return;
    const material = mesh.current.material;
    material.uniforms.uTime.value = state.clock.elapsedTime + index * 0.8;
    material.uniforms.uHover.value = THREE.MathUtils.damp(
      material.uniforms.uHover.value,
      targetHover.current,
      5,
      delta,
    );
    material.uniforms.uReveal.value = THREE.MathUtils.damp(
      material.uniforms.uReveal.value,
      1,
      2.2,
      delta,
    );
    material.uniforms.uScroll.value = scroll.current;
    mesh.current.position.x = position[0] + scroll.current * (index - 1) * 0.7;
    mesh.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.45 + index) * 0.045;
    mesh.current.rotation.z =
      (index - 1) * 0.035 + scroll.current * (index - 1) * 0.06;
  });

  const onEnter = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    targetHover.current = 1;
  };

  return (
    <mesh
      ref={mesh}
      position={position}
      scale={[scale * 1.8, scale * 2.42, 1]}
      onPointerEnter={onEnter}
      onPointerLeave={() => (targetHover.current = 0)}
    >
      <planeGeometry args={[1, 1, 24, 24]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        toneMapped={false}
      />
    </mesh>
  );
}
