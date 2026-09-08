import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export function SkillsScene() {
  const meshRef = useRef<THREE.Mesh>(null);
  const isReducedMotion = usePortfolioStore((state) => state.isReducedMotion);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.35;
      if (!isReducedMotion) {
        meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.5) * 0.1;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={1.1}>
      <torusKnotGeometry args={[0.8, 0.25, 120, 16]} />
      <meshStandardMaterial
        color="#3b82f6"
        roughness={0.1}
        metalness={0.9}
        wireframe
      />
    </mesh>
  );
}