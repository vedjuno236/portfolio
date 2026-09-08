"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { copy } from "@/lib/i18n";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export function ContactSection() {
  const language = usePortfolioStore((state) => state.language);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center px-6 md:px-24 py-20 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-500 text-xs font-bold uppercase tracking-wider">{copy.contact.badge[language]}</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {copy.contact.titleA[language]} <span className="text-blue-500">{copy.contact.titleB[language]}</span> {copy.contact.titleC[language]}
          </h2>

          <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
            {copy.contact.body[language]}
          </p>

          <div className="space-y-3 pt-4 text-zinc-400 text-sm">
            <p className="flex items-center space-x-3">
              <span className="text-blue-500 font-bold">📩 {copy.contact.email[language]}</span>
              <a href="mailto:vedjuno236@gmail.com" className="hover:text-blue-400 transition-colors">vedjuno236@gmail.com</a>
            </p>
            <p className="flex items-center space-x-3">
              <span className="text-blue-500 font-bold">📍 {copy.contact.location[language]}</span>
              <span>laos</span>
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Card container */}
          <div className="p-8 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-md relative overflow-hidden">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 space-y-4"
              >
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white">{copy.contact.sentTitle[language]}</h3>
                <p className="text-zinc-400 text-sm max-w-xs leading-relaxed">
                  {copy.contact.sentBody[language]}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-widest"
                >
                  {copy.contact.sendAnother[language]}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-zinc-500 font-bold">
                    {copy.contact.nameLabel[language]}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-950/60 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                    placeholder={copy.contact.namePlaceholder[language]}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-zinc-500 font-bold">
                    {copy.contact.emailLabel[language]}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-950/60 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                    placeholder={copy.contact.emailPlaceholder[language]}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-zinc-500 font-bold">
                    {copy.contact.messageLabel[language]}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-950/60 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200 resize-none"
                    placeholder={copy.contact.messagePlaceholder[language]}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="interactive w-full flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-500 text-white py-3.5 rounded-lg font-semibold shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all disabled:opacity-55"
                >
                  <span>{isSubmitting ? copy.contact.sending[language] : copy.contact.send[language]}</span>
                  {!isSubmitting && <Send className="w-4 h-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
