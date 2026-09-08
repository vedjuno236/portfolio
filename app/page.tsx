"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { HeroSection } from "@/components/ui/HeroSection";
import { AboutSection } from "@/components/ui/AboutSection";
import { SkillsSection } from "@/components/ui/SkillsSection";
import { ProjectsSection } from "@/components/ui/ProjectsSection";
import { ExperienceSection } from "@/components/ui/ExperienceSection";
import { ContactSection } from "@/components/ui/ContactSection";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { useMousePosition } from "@/hooks/useMousePosition";
import { copy } from "@/lib/i18n";

// GSAP Client-Side Imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Dynamic import of the entire <Canvas> tree with ssr: false and an animated fallback loader
const CanvasRoot = dynamic(
  () => import("@/components/canvas/CanvasRoot"),
  {
    ssr: false,
    
    loading: () => (
      <div className="fixed inset-0 bg-[#09090b] z-50 flex flex-col items-center justify-center">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <svg className="w-full h-full animate-spin text-blue-500" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="4"
              strokeDasharray="80 120"
              fill="none"
              strokeLinecap="round"
            />
            <circle 
              cx="50"
              cy="50"
              r="25"
              stroke="#ec4899"
              strokeWidth="3"
              strokeDasharray="40 60"
              fill="none"
              strokeLinecap="round"
              className="animate-pulse"
              style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
            />
          </svg>
          <div className="absolute text-white font-bold text-xs tracking-widest uppercase">
            3D PORTFOLIO
          </div>
        </div>
        <p className="text-zinc-500 text-xs tracking-wider mt-6 animate-pulse uppercase">
          Initializing WebGL Context...
        </p>
      </div>
    ),
  }
);

export default function Home() {
  // Initialize mouse tracker
  useMousePosition();

  const setActiveSection = usePortfolioStore((state) => state.setActiveSection);
  const isReducedMotion = usePortfolioStore((state) => state.isReducedMotion);
  const language = usePortfolioStore((state) => state.language);
  const containerRef = useRef<HTMLDivElement>(null);

  // Use Intersection Observer to seamlessly update current section in Zustand store
  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "experience", "contact"];
    const observers = sections.map((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          });
        },
        {
          root: null,
          rootMargin: "-45% 0px -45% 0px", // triggers when section occupies the sweet spot of viewport
          threshold: 0,
        }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, [setActiveSection]);

  // GSAP ScrollTrigger integration
  useEffect(() => {
    if (isReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    // Timeline scroll sequencing example: fade & shift section text content
    const ctx = gsap.context(() => {
      // Create animations for section title entries
      ["about", "skills", "projects", "experience", "contact"].forEach((section) => {
        gsap.fromTo(
          `#${section} h2`,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: `#${section}`,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Experience Timeline reveal sequencing
      gsap.fromTo(
        "#experience .relative.pl-8",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 1.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: "#experience",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isReducedMotion]);

  return (
    <main ref={containerRef} className="relative min-h-screen">
      {/* 3D Canvas Background */}
      <CanvasRoot />

      {/* Custom Floating Cursor */}
      <CustomCursor />

      {/* Main Navigation Header */}
      <Navbar />

      {/* Content Sections */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>

      {/* Footer copyright */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center text-xs text-zinc-600 tracking-widest uppercase bg-zinc-950/60 backdrop-blur-md">
        © {new Date().getFullYear()} Tabbit. {copy.footer.built[language]}
      </footer>
    </main>
  );
}
