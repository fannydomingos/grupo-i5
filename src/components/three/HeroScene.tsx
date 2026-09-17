'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Edges, Float } from '@react-three/drei';
import * as THREE from 'three';

/* Cinco pilares de vidro — uma para cada empresa do grupo. */
function Pillars() {
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const scale = Math.min(0.88, viewport.width / 10.5);

  const pillars = useMemo(
    () =>
      [0, 1, 2, 3, 4].map((i) => ({
        x: (i - 2) * 1.32,
        height: [3.1, 4.2, 5.4, 4.2, 3.1][i],
        delay: i * 0.35,
      })),
    []
  );

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      pointer.x * 0.35 + Math.sin(t * 0.12) * 0.12,
      0.04
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -pointer.y * 0.16,
      0.04
    );
  });

  return (
    <group ref={group} scale={scale} position={[0, -0.4, 0]}>
      {pillars.map((p, i) => (
        <Float
          key={i}
          speed={1.1}
          rotationIntensity={0.12}
          floatIntensity={0.5}
          floatingRange={[-0.14, 0.14]}
        >
          <mesh position={[p.x, 0, 0]} castShadow>
            <boxGeometry args={[0.72, p.height, 0.72]} />
            <meshPhysicalMaterial
              color="#2b2b30"
              roughness={0.12}
              metalness={0.55}
              transmission={0.35}
              thickness={1.4}
              ior={1.45}
              clearcoat={1}
              clearcoatRoughness={0.12}
              emissive="#0f0f12"
              emissiveIntensity={0.6}
              envMapIntensity={1.1}
            />
            <Edges threshold={15} color="#F5D291" scale={1.001} />
          </mesh>
          {/* filete dourado na base de cada pilar */}
          <mesh position={[p.x, -p.height / 2 - 0.06, 0]}>
            <boxGeometry args={[0.78, 0.035, 0.78]} />
            <meshStandardMaterial
              color="#F5D291"
              emissive="#B99A63"
              emissiveIntensity={1.4}
              roughness={0.3}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

/* Poeira luminosa suspensa. */
function Dust({ count = 240 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    if (!points.current) return;
    points.current.rotation.y = clock.getElapsedTime() * 0.018;
    points.current.position.y = Math.sin(clock.getElapsedTime() * 0.18) * 0.22;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#F5D291"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0.4, 9.2], fov: 38 }}
    >
      <color attach="background" args={['#0C0C0D']} />
      <fog attach="fog" args={['#0C0C0D', 9, 20]} />

      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 6, 5]} intensity={2.2} color="#fff6e4" />
      <directionalLight position={[-6, 2, 4]} intensity={1.2} color="#F5D291" />
      <pointLight position={[-5, -1, 3]} intensity={55} color="#B99A63" distance={20} />
      <pointLight position={[5, 3, -3]} intensity={40} color="#9aa5bb" distance={22} />
      <spotLight
        position={[0, 8, 4]}
        angle={0.6}
        penumbra={1}
        intensity={70}
        color="#F5D291"
        distance={26}
      />

      <Pillars />
      <Dust />
    </Canvas>
  );
}
