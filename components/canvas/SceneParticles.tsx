import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useResponsiveCanvas } from "@/hooks/useResponsiveCanvas";

export function SceneParticles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const { particleCount } = useResponsiveCanvas();

  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  // Create stable initial positions, speeds and sizes
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < particleCount; i++) {
      const x = THREE.MathUtils.randFloatSpread(30);
      const y = THREE.MathUtils.randFloatSpread(30);
      const z = THREE.MathUtils.randFloatSpread(30);
      const speed = THREE.MathUtils.randFloat(0.1, 0.5);
      const scale = THREE.MathUtils.randFloat(0.02, 0.08);
      temp.push({ x, y, z, speed, scale });
    }
    return temp;
  }, [particleCount]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    particles.forEach((p, i) => {
      // Create smooth upward floating motion with horizontal wavering
      const currentY = p.y + time * p.speed;
      const wrappedY = ((currentY + 15) % 30) - 15; // wrap within [-15, 15]
      const currentX = p.x + Math.sin(time + p.y) * 0.3;

      dummy.position.set(currentX, wrappedY, p.z);
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null as any, null as any, particleCount]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#3b82f6" transparent opacity={0.3} depthWrite={false} />
    </instancedMesh>
  );
}