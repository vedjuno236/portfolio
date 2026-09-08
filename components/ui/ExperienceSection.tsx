"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/lib/data";
import { copy } from "@/lib/i18n";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export function ExperienceSection() {
  const language = usePortfolioStore((state) => state.language);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center px-6 md:px-24 py-20 relative overflow-hidden bg-zinc-950/20"
    >
      <div className="max-w-4xl mx-auto w-full z-10 space-y-12">
        <div className="flex flex-col space-y-4">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-indigo-500 text-xs font-bold uppercase tracking-wider">{copy.experience.badge[language]}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {copy.experience.titleA[language]} <span className="text-indigo-500">{copy.experience.titleB[language]}</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm md:text-base">
            {copy.experience.body[language]}
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l border-zinc-800 ml-4 md:ml-6 space-y-12"
        >
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline bubble bullet */}
              <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full border-4 border-zinc-950 bg-zinc-800 group-hover:bg-indigo-500 group-hover:border-indigo-500/30 transition-all duration-300" />

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                  {exp.period}
                </span>

                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {exp.role[language]} <span className="text-zinc-500 font-medium">@</span> {exp.company}
                </h3>

                <ul className="space-y-2.5 pt-2">
                  {exp.description[language].map((bullet, idx) => (
                    <li key={idx} className="text-zinc-400 text-sm md:text-base leading-relaxed flex items-start">
                      <span className="text-indigo-500 mr-2.5 mt-1 select-none">✦</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
