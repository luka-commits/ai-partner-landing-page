
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: Newsletter-API anbinden (z.B. Mailchimp, ConvertKit, Brevo)
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="py-24 bg-black/80 relative overflow-hidden scroll-mt-24">
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className="rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur-xl p-10 md:p-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 mb-8">
            <Mail className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">AI-Updates</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Noch nicht bereit?{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Bleib dran.
            </span>
          </h2>

          <p className="text-neutral-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Erhalte praxisnahe AI-Insights, Automations-Tipps und Case Studies
            direkt in dein Postfach. Kein Spam, nur Substanz.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="deine@email.de"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-neutral-900/80 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-500 hover:to-blue-500 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                Abonnieren
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 max-w-lg mx-auto">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-emerald-300 font-medium">
                Du bist dabei! Schau in dein Postfach.
              </span>
            </div>
          )}

          <p className="text-neutral-500 text-xs mt-4">
            Kein Spam. Jederzeit abbestellbar. Max. 2 E-Mails pro Monat.
          </p>
        </motion.div>
        </div>
      </div>

    </section>
  );
}
