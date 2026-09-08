import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export function CameraRig() {
  const { camera } = useThree();
  const mousePosition = usePortfolioStore((state) => state.mousePosition);
  const activeSection = usePortfolioStore((state) => state.activeSection);
  const isReducedMotion = usePortfolioStore((state) => state.isReducedMotion);
  
  const targetPosition = useRef(new THREE.Vector3(0, 0, 5));
  const targetRotation = useRef(new THREE.Euler(0, 0, 0));

  useFrame((state, delta) => {
    // 1. Position camera based on active section
    switch (activeSection) {
      case "hero":
        targetPosition.current.set(0, 0, 5);
        break;
      case "about":
        targetPosition.current.set(-1.5, 0, 4);
        break;
      case "skills":
        targetPosition.current.set(1.5, 0, 4);
        break;
      case "projects":
        targetPosition.current.set(0, -1, 4.5);
        break;
      case "experience":
        targetPosition.current.set(0, 0, 6);
        break;
      case "contact":
        targetPosition.current.set(0, 1.5, 3.5);
        break;
      default:
        targetPosition.current.set(0, 0, 5);
    }

    // Lerp camera position
    camera.position.lerp(targetPosition.current, delta * 2.5);

    // 2. Parallax effect based on mouse movement (unless reduced motion is enabled)
    if (!isReducedMotion) {
      const mouseX = mousePosition.x * 0.4;
      const mouseY = mousePosition.y * 0.4;

      targetRotation.current.set(mouseY, mouseX, 0);
      camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, targetRotation.current.x, delta * 3);
      camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, targetRotation.current.y, delta * 3);
    }
  });

  return null;
}