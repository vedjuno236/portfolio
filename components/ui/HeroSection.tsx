"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { copy } from "@/lib/i18n";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export function HeroSection() {
  const language = usePortfolioStore((state) => state.language);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
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

  const handleExplore = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 md:px-24 py-12 relative overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl z-10 select-none pointer-events-none"
      >
        <motion.p
          variants={itemVariants}
          className="text-blue-500 uppercase tracking-widest text-sm font-bold mb-3"
        >
          {copy.hero.eyebrow[language]}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-8xl font-black text-white tracking-tight leading-none mb-6"
        >
          {copy.hero.titlePrefix[language]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">VEDJUNO</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-zinc-400 font-medium max-w-2xl mb-8 leading-relaxed"
        >
          {copy.hero.body[language]}
        </motion.p>

        <motion.div variants={itemVariants} className="pointer-events-auto">
          <button
            onClick={handleExplore}
            className="group flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-lg font-semibold tracking-wide shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>{copy.hero.cta[language]}</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-zinc-500 text-xs tracking-widest animate-bounce">
        <span>{copy.hero.scroll[language]}</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
}
