import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { HeroShaderMaterial } from "./HeroShaderMaterial";
import { useResponsiveCanvas } from "@/hooks/useResponsiveCanvas";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export function HeroObject() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const mousePosition = usePortfolioStore((state) => state.mousePosition);
  const isReducedMotion = usePortfolioStore((state) => state.isReducedMotion);
  const { distsortMultiplier } = useResponsiveCanvas();

  // Create custom material using our shader definition
  const shaderArgs = {
    uniforms: THREE.UniformsUtils.clone(HeroShaderMaterial.uniforms),
    vertexShader: HeroShaderMaterial.vertexShader,
    fragmentShader: HeroShaderMaterial.fragmentShader,
  };
  
  // Inject theme color variables (accent blue: #3b82f6, rim magenta/pink: #ec4899)
  shaderArgs.uniforms.uColor.value = new THREE.Color("#1e3a8a"); // deep blue
  shaderArgs.uniforms.uRimColor.value = new THREE.Color("#3b82f6"); // bright blue

  useFrame((state, delta) => {
    if (materialRef.current) {
      // Update time uniform for distortion wave speed
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
      
      // Control distortion amount. Set to zero or low when reduced motion is preferred
      materialRef.current.uniforms.uDistortion.value = isReducedMotion 
        ? 0.1 
        : 1.0 * distsortMultiplier;
    }

    if (meshRef.current) {
      // Idle rotation
      meshRef.current.rotation.y += delta * 0.25;
      meshRef.current.rotation.x += delta * 0.1;

      // Parallax rotation based on normalized mouse
      if (!isReducedMotion) {
        const targetRotX = mousePosition.y * 0.5;
        const targetRotY = mousePosition.x * 0.5;
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotX, delta * 3);
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotY, delta * 3);
      }
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={1.6}>
      <icosahedronGeometry args={[1, 64]} />
      <shaderMaterial
        ref={materialRef}
        attach="material"
        args={[shaderArgs]}
        transparent
      />
    </mesh>
  );
}