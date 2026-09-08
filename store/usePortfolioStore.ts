import { create } from "zustand";
import { Language } from "@/lib/i18n";

interface PortfolioState {
  activeSection: string;
  setActiveSection: (section: string) => void;
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  mousePosition: { x: number; y: number };
  setMousePosition: (x: number, y: number) => void;
  isReducedMotion: boolean;
  setReducedMotion: (reduced: boolean) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  activeSection: "hero",
  setActiveSection: (section) => set({ activeSection: section }),
  language: "en",
  setLanguage: (language) => set({ language }),
  toggleLanguage: () => set((state) => ({ language: state.language === "en" ? "lo" : "en" })),
  mousePosition: { x: 0, y: 0 },
  setMousePosition: (x, y) => set({ mousePosition: { x, y } }),
  isReducedMotion: false,
  setReducedMotion: (reduced) => set({ isReducedMotion: reduced }),
}));
