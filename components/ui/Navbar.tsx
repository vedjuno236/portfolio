"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { copy, Language, navLabels } from "@/lib/i18n";

const navItems = ["about", "skills", "projects", "experience", "contact"];
const languageFlags: Record<Language, string> = {
  en: "🇺🇸",
  lo: "🇱🇦",
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = usePortfolioStore((state) => state.activeSection);
  const language = usePortfolioStore((state) => state.language);
  const toggleLanguage = usePortfolioStore((state) => state.toggleLanguage);
  const isReducedMotion = usePortfolioStore((state) => state.isReducedMotion);
  const setReducedMotion = usePortfolioStore((state) => state.setReducedMotion);

  const handleNavClick = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#09090b]/40 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white font-bold text-xl tracking-wider uppercase cursor-pointer"
        onClick={() => handleNavClick("hero")}
      >
        🍀<span className="text-blue-500">.</span>
      </motion.div>

      <nav className="hidden md:flex space-x-1 items-center bg-zinc-900/50 rounded-full border border-white/10 p-1">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => handleNavClick(item)}
            className="relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 text-zinc-400 hover:text-white"
          >
            {activeSection === item && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-blue-600/20 border border-blue-500/40 rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{navLabels[item][language]}</span>
          </button>
        ))}
      </nav>

      <div className="flex items-center space-x-2 md:space-x-4">
        <button
          onClick={toggleLanguage}
          aria-label={copy.nav.switchLabel[language]}
          title={copy.nav.switchLabel[language]}
          className="interactive flex h-9 w-11 items-center justify-center rounded-md border border-emerald-500/30 bg-emerald-500/10 text-xl hover:border-emerald-400/60 hover:bg-emerald-500/15 transition-all"
        >
          <span aria-hidden="true">{languageFlags[language === "en" ? "lo" : "en"]}</span>
        </button>
        <button
          onClick={() => setReducedMotion(!isReducedMotion)}
          className="text-xs px-3 py-1.5 rounded-md border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
        >
          {isReducedMotion ? copy.nav.motionOn[language] : copy.nav.motionOff[language]}
        </button>
        <button
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="interactive flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-zinc-300 hover:border-white/20 hover:text-white transition-all md:hidden"
        >
          {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="absolute left-4 right-4 top-[calc(100%+0.5rem)] z-50 rounded-lg border border-white/10 bg-zinc-950/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-md md:hidden"
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`interactive flex w-full items-center justify-between rounded-md px-4 py-3 text-left text-sm font-semibold transition-colors ${activeSection === item
                ? "bg-blue-600/20 text-white"
                : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
            >
              <span>{navLabels[item][language]}</span>
              {activeSection === item && <span className="h-2 w-2 rounded-full bg-blue-400" />}
            </button>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
