"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { projectsData, Project } from "@/lib/data";
import { copy, Language } from "@/lib/i18n";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { ExternalLink, Github } from "lucide-react";

function ProjectCard({ project, language }: { project: Project; language: Language }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    setRotateY(mouseX * 20);
    setRotateX(-mouseY * 20);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.1s ease-out",
      }}
      className="interactive relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30 backdrop-blur-md hover:border-emerald-500/30 transition-colors duration-300 group"
    >
      {/* Dynamic Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-500/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Decorative procedural image placeholder */}
      <div
        className="h-48 w-full bg-gradient-to-br from-zinc-850 to-zinc-950 flex items-center justify-center relative border-b border-white/5 overflow-hidden"
        style={{ transform: "translateZ(10px)" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
        <span
          className="text-6xl group-hover:scale-125 transition-transform duration-500 ease-out select-none"
          style={{ transform: "translateZ(25px)" }}
        >
          {project.image}
        </span>
      </div>

      <div className="p-6 space-y-4" style={{ transform: "translateZ(20px)" }}>
        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
          {project.title[language]}
        </h3>

        <p className="text-zinc-400 text-sm leading-relaxed min-h-[60px]">
          {project.description[language]}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-800/80 border border-white/5 text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-xs text-zinc-400 hover:text-white transition-colors group/link"
          >
            <Github className="w-4 h-4" />
            <span>{copy.projects.repository[language]}</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-xs text-emerald-400 hover:text-emerald-300 transition-colors group/link"
          >
            <span>{copy.projects.liveDemo[language]}</span>
            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const language = usePortfolioStore((state) => state.language);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center px-6 md:px-24 py-20 relative overflow-hidden bg-zinc-950/10"
    >
      <div className="max-w-6xl mx-auto w-full z-10 space-y-12">
        <div className="flex flex-col space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-500 text-xs font-bold uppercase tracking-wider">{copy.projects.badge[language]}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {copy.projects.titleA[language]} <span className="text-emerald-500">{copy.projects.titleB[language]}</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm md:text-base">
            {copy.projects.body[language]}
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} language={language} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
