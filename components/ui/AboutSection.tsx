"use client";

import { motion } from "framer-motion";
import { copy } from "@/lib/i18n";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export function AboutSection() {
  const language = usePortfolioStore((state) => state.language);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 md:px-24 py-20 relative overflow-hidden bg-zinc-950/20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center space-x-2 bg-pink-500/10 border border-pink-500/20 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
            <span className="text-pink-500 text-xs font-bold uppercase tracking-wider">{copy.about.badge[language]}</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {copy.about.titleA[language]} <span className="text-pink-500">{copy.about.art[language]}</span> & <span className="text-blue-500">{copy.about.code[language]}</span>
          </h2>

          <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
            {copy.about.body1[language]}
          </p>

          <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
            {copy.about.body2[language]}
          </p>
        </motion.div>

        {/* This div leaves space on the right for the floating 3D Blob rendered in CanvasRoot */}
        <div className="h-[300px] md:h-[500px] flex items-center justify-center">
          <div className="relative w-72 h-72 rounded-full border border-white/5 bg-zinc-900/20 backdrop-blur-sm flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-pink-500/20 animate-spin" style={{ animationDuration: "25s" }} />
            <p className="text-xs text-zinc-500 uppercase tracking-widest text-center max-w-[180px] leading-relaxed">
              {copy.about.blobNote[language]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
