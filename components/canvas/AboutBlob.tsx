import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { MeshDistortMaterial } from "@react-three/drei";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export function AboutBlob() {
  const meshRef = useRef<THREE.Mesh>(null);
  const isReducedMotion = usePortfolioStore((state) => state.isReducedMotion);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotation & gentle float
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.z += delta * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={1.2}>
      <sphereGeometry args={[1, 16, 16]} />
      <MeshDistortMaterial
        color="#ec4899" // Pink accent for contrast
        roughness={0.2}
        metalness={0.8}
        distort={isReducedMotion ? 0 : 0.45}
        speed={isReducedMotion ? 0 : 1.5}
      />
    </mesh>
  );
}