import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export function ProjectsScene() {
  const meshRef = useRef<THREE.Mesh>(null);
  const isReducedMotion = usePortfolioStore((state) => state.isReducedMotion);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      if (!isReducedMotion) {
        meshRef.current.position.y = Math.cos(state.clock.getElapsedTime() * 1.2) * 0.08;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={1.1}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#10b981" // Emerald/Green accent for projects section
        roughness={0.3}
        metalness={0.7}
        flatShading
      />
    </mesh>
  );
}