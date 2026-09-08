"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CameraRig } from "./CameraRig";
import { Lights } from "./Lights";
import { SceneParticles } from "./SceneParticles";
import { HeroObject } from "./HeroObject";
import { AboutBlob } from "./AboutBlob";
import { SkillsScene } from "./SkillsScene";
import { ProjectsScene } from "./ProjectsScene";
import { usePortfolioStore } from "@/store/usePortfolioStore";

function MainScene() {
  const activeSection = usePortfolioStore((state) => state.activeSection);

  return (
    <>
      <Lights />
      <SceneParticles />
      
      {/* Conditionally render or position elements based on section to keep scene clean */}
      {activeSection === "hero" && <HeroObject />}
      {activeSection === "about" && <AboutBlob />}
      {activeSection === "skills" && <SkillsScene />}
      {activeSection === "projects" && <ProjectsScene />}
      
      <CameraRig />
    </>
  );
}

export default function CanvasRoot() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full bg-[#09090b] pointer-events-none">
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]} // Performance: dpr capping
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        <Suspense fallback={null}>
          <MainScene />
        </Suspense>
      </Canvas>
    </div>
  );
}