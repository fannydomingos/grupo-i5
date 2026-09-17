'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

/* textura de brilho radial gerada no próprio canvas (sem assets externos) */
function useGlowTexture() {
  return useMemo(() => {
    const size = 128;
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const ctx = c.getContext('2d')!;
    const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    g.addColorStop(0, 'rgba(255,240,205,1)');
    g.addColorStop(0.25, 'rgba(245,210,145,0.75)');
    g.addColorStop(0.55, 'rgba(185,154,99,0.25)');
    g.addColorStop(1, 'rgba(185,154,99,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, []);
}

/* a logo i5 como plano texturizado — a luz passa na frente e atrás dela */
function LogoPlane() {
  const texture = useLoader(THREE.TextureLoader, '/img/logo-i5.png');
  texture.colorSpace = THREE.SRGBColorSpace;
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, pointer.x * 0.18, 0.05);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -pointer.y * 0.12, 0.05);
    ref.current.position.y = Math.sin(t * 0.6) * 0.06;
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[2.62, 2.5]} />
      <meshBasicMaterial map={texture} transparent toneMapped={false} />
    </mesh>
  );
}

/* cometa de luz que orbita a logo, com rastro */
function OrbitLight({ glow }: { glow: THREE.Texture }) {
  const group = useRef<THREE.Group>(null);
  const trail = useRef<THREE.Group>(null);
  const TRAIL = 14;
  const radius = 1.95;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const speed = 0.62;

    if (group.current) {
      const a = t * speed;
      group.current.position.set(
        Math.cos(a) * radius,
        Math.sin(a * 1.0) * 0.55,
        Math.sin(a) * radius * 0.85
      );
    }

    if (trail.current) {
      trail.current.children.forEach((child, i) => {
        const a = t * speed - (i + 1) * 0.055;
        child.position.set(
          Math.cos(a) * radius,
          Math.sin(a * 1.0) * 0.55,
          Math.sin(a) * radius * 0.85
        );
        const s = (1 - i / TRAIL) * 0.55;
        child.scale.setScalar(Math.max(0.05, s));
      });
    }
  });

  return (
    <>
      <group ref={trail}>
        {Array.from({ length: TRAIL }).map((_, i) => (
          <sprite key={i}>
            <spriteMaterial
              map={glow}
              transparent
              opacity={0.34 * (1 - i / TRAIL)}
              depthWrite={false}
              blending={THREE.AdditiveBlending}
            />
          </sprite>
        ))}
      </group>

      <group ref={group}>
        <sprite scale={[1.5, 1.5, 1.5]}>
          <spriteMaterial
            map={glow}
            transparent
            opacity={0.95}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </sprite>
        <pointLight color="#F5D291" intensity={14} distance={7} />
      </group>
    </>
  );
}

/* anel fino que marca a órbita */
function OrbitRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.z = clock.getElapsedTime() * 0.05;
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2.32, 0, 0]}>
      <torusGeometry args={[1.95, 0.004, 8, 160]} />
      <meshBasicMaterial color="#B99A63" transparent opacity={0.3} toneMapped={false} />
    </mesh>
  );
}

function Scene() {
  const glow = useGlowTexture();
  return (
    <>
      <ambientLight intensity={1.1} />
      <OrbitRing />
      <LogoPlane />
      <OrbitLight glow={glow} />
    </>
  );
}

export default function LogoOrbit() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 6.2], fov: 42 }}
    >
      <Scene />
    </Canvas>
  );
}
