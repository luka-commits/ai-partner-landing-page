
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";
import { useTranslation } from "../i18n/LanguageContext";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: Newsletter-API anbinden (z.B. Mailchimp, ConvertKit, Brevo)
    console.log("[Newsletter] Signup:", email);
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="py-24 bg-black/80 relative overflow-hidden scroll-mt-24">
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className="relative rounded-3xl">
          <GlowingEffect spread={30} glow={false} proximity={80} disabled={false} inactiveZone={0.3} borderWidth={1} />
        <div className="relative rounded-3xl border border-white/20 bg-neutral-900/50 backdrop-blur-xl p-10 md:p-14" style={{ boxShadow: '0 0 60px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.1)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 mb-8">
            <Mail className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">{t.newsletter.badge}</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            {t.newsletter.headingPart1}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              {t.newsletter.headingPart2}
            </span>
          </h2>

          <p className="text-neutral-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            {t.newsletter.description}
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
                <label htmlFor="newsletter-email" className="sr-only">{t.newsletter.placeholder}</label>
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" aria-hidden="true" />
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.newsletter.placeholder}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-neutral-900/80 border border-white/20 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-500 hover:to-blue-500 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                {t.newsletter.submit}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 max-w-lg mx-auto">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-emerald-300 font-medium">
                {t.newsletter.success}
              </span>
            </div>
          )}

          <p className="text-neutral-500 text-xs mt-4">
            {t.newsletter.disclaimer}
          </p>
        </motion.div>
        </div>
        </div>
      </div>

    </section>
  );
}
