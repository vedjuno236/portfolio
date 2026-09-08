"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { skillsData, Skill } from "@/lib/data";
import { categoryLabels, copy, Language } from "@/lib/i18n";
import { usePortfolioStore } from "@/store/usePortfolioStore";

function SkillCard({ skill, language }: { skill: Skill; language: Language }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate normalized cursor position relative to card center [-0.5, 0.5]
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    // Set rotation degrees (max 15 degrees tilt)
    setRotateY(mouseX * 30);
    setRotateX(-mouseY * 30);
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
      className="interactive relative p-6 rounded-xl border border-white/10 bg-zinc-900/40 backdrop-blur-md hover:border-blue-500/30 transition-colors duration-300 group"
    >
      {/* Gloss reflection overlay */}
      <div
        className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ transform: "translateZ(20px)" }}
      />

      <div className="flex items-center space-x-4" style={{ transform: "translateZ(30px)" }}>
        <span className="text-3xl p-3 bg-zinc-850 rounded-lg border border-white/5 group-hover:scale-110 group-hover:border-blue-500/30 transition-all duration-350">
          {skill.icon}
        </span>
        <div className="flex-1">
          <h3 className="text-white font-bold tracking-wide group-hover:text-blue-400 transition-colors">
            {skill.name}
          </h3>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mt-0.5">
            {categoryLabels[skill.category][language]}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-2" style={{ transform: "translateZ(15px)" }}>
        <div className="flex justify-between items-center text-xs">
          <span className="text-zinc-500 uppercase tracking-wider">{copy.skills.proficiency[language]}</span>
          <span className="text-blue-400 font-bold">{skill.level}%</span>
        </div>
        <div className="w-full h-1.5 bg-zinc-950 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const language = usePortfolioStore((state) => state.language);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center px-6 md:px-24 py-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full z-10 space-y-12">
        <div className="flex flex-col space-y-4">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-500 text-xs font-bold uppercase tracking-wider">{copy.skills.badge[language]}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {copy.skills.titleA[language]} <span className="text-blue-500">{copy.skills.titleB[language]}</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm md:text-base">
            {copy.skills.body[language]}
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((skill) => (
            <motion.div key={skill.name} variants={itemVariants}>
              <SkillCard skill={skill} language={language} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
