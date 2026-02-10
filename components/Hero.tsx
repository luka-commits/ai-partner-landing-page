
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight";
import { StarsBackground } from "./ui/stars-background";
import { TrendingUp } from "lucide-react";
import { ButtonColorful } from "./ui/button-colorful";
import { GlowingEffect } from "./ui/glowing-effect";
import { useTranslation } from "../i18n/LanguageContext";

function useAnimatedCounter(target: number, duration: number = 1.5) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    if (prefersReducedMotion.current) {
      setCount(target);
      return;
    }

    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [hasStarted, target, duration]);

  return { count, start: useCallback(() => setHasStarted(true), []) };
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const barHeights = [40, 55, 35, 65, 50, 75, 60, 85, 70, 95];

function AnimatedValue({ target, prefix = "", suffix = "", locale = "de-DE" }: { target: number; prefix?: string; suffix?: string; locale?: string }) {
  const { count, start } = useAnimatedCounter(target);
  return (
    <motion.span onViewportEnter={start} viewport={{ once: true }}>
      {prefix}{count.toLocaleString(locale)}{suffix}
    </motion.span>
  );
}

export function Hero() {
  const { t, language } = useTranslation();
  const locale = language === "de" ? "de-DE" : "en-US";

  return (
    <div className="w-full bg-black relative z-[3] overflow-hidden pt-32 pb-12 md:pt-40 md:pb-20">
      {/* Rotating star field wrapper – scaled up to hide corners during rotation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-[-15%] animate-star-rotate origin-center">
          <StarsBackground />
        </div>
      </div>
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#3B82F6" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Headline */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight mb-5 leading-[1.05]">
            {t.hero.headline} <br />
            <span className="text-gradient-blue-green">{t.hero.headlineHighlight}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-400 text-lg md:text-xl mb-10 leading-relaxed">
            {t.hero.subheadline}
          </p>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          className="relative max-w-4xl mx-auto scale-90 md:scale-100 origin-top"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ boxShadow: '0 0 80px rgba(255,255,255,0.06), 0 0 30px rgba(255,255,255,0.04)' }}
        >
          <GlowingEffect spread={30} glow={false} proximity={80} disabled={false} inactiveZone={0.3} borderWidth={1} />
          {/* Border glow */}
          <div className="absolute -inset-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent rounded-2xl pointer-events-none" />

          {/* Dashboard frame */}
          <div className="relative rounded-2xl border border-white/20 bg-[#080814] backdrop-blur-xl overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 md:px-6 py-3.5 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 tracking-wide font-medium">{t.hero.dashboardLive}</span>
              </div>
            </div>

            {/* Dashboard content */}
            <motion.div
              className="p-2.5 md:p-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Top row: Brand card + 3 metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3">
                {/* Brand / Profile card */}
                <motion.div variants={itemVariants} whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(6,182,212,0.15), 0 0 40px rgba(6,182,212,0.05)" }} transition={{ type: "tween", duration: 0.2 }} className="p-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.04] flex items-center gap-4 cursor-pointer">
                  <img src="/luka-portrait-thumb.jpg" alt="Luka" width={40} height={40} className="w-10 h-10 rounded-full object-cover flex-shrink-0 ring-2 ring-cyan-500/30" />
                  <div className="text-left">
                    <div className="text-white font-bold text-sm">{t.hero.brandName}</div>
                    <div className="text-neutral-500 text-xs">{t.hero.brandSub}</div>
                  </div>
                </motion.div>

                {/* Metric: Gesamtumsatz */}
                <motion.div variants={itemVariants} whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(59,130,246,0.15), 0 0 40px rgba(59,130,246,0.05)" }} transition={{ type: "tween", duration: 0.2 }} className="p-4 rounded-2xl border border-blue-500/15 bg-blue-500/[0.03] cursor-pointer">
                  <span className="text-xs text-blue-300/60 uppercase tracking-widest block mb-1.5">{t.hero.metricRevenue}</span>
                  <div className="text-xl md:text-2xl font-bold text-gradient-white-blue">
                    <AnimatedValue target={985} prefix="€" suffix=".000" locale={locale} />
                  </div>
                  <div className="flex items-center gap-1 text-xs mt-1.5">
                    <span className="text-emerald-400">&#9650; 12%</span>
                    <span className="text-neutral-500">{t.hero.vsLastMonth}</span>
                  </div>
                </motion.div>

                {/* Metric: Pipeline-Wert */}
                <motion.div variants={itemVariants} whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(59,130,246,0.15), 0 0 40px rgba(59,130,246,0.05)" }} transition={{ type: "tween", duration: 0.2 }} className="p-4 rounded-2xl border border-blue-500/15 bg-blue-500/[0.03] cursor-pointer">
                  <span className="text-xs text-blue-300/60 uppercase tracking-widest block mb-1.5">{t.hero.metricPipeline}</span>
                  <div className="text-xl md:text-2xl font-bold text-gradient-white-blue">
                    <AnimatedValue target={320} prefix="€" suffix=".000" locale={locale} />
                  </div>
                  <div className="flex items-center gap-1 text-xs mt-1.5">
                    <span className="text-emerald-400">&#9650; 8%</span>
                    <span className="text-neutral-500">{t.hero.vsLastMonth}</span>
                  </div>
                </motion.div>

                {/* Metric: Gebuchte Calls */}
                <motion.div variants={itemVariants} whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(59,130,246,0.15), 0 0 40px rgba(59,130,246,0.05)" }} transition={{ type: "tween", duration: 0.2 }} className="p-4 rounded-2xl border border-blue-500/15 bg-blue-500/[0.03] cursor-pointer">
                  <span className="text-xs text-blue-300/60 uppercase tracking-widest block mb-1.5">{t.hero.metricCalls}</span>
                  <div className="text-xl md:text-2xl font-bold text-gradient-white-blue">
                    <AnimatedValue target={142} locale={locale} />
                  </div>
                  <div className="flex items-center gap-1 text-xs mt-1.5">
                    <span className="text-emerald-400">&#9650; 24%</span>
                    <span className="text-neutral-500">{t.hero.vsLastMonth}</span>
                  </div>
                </motion.div>
              </div>

              {/* Bottom row: Big number card + Growth chart */}
              <div className="hidden md:grid md:grid-cols-5 gap-3">
                {/* AI Systems deployed card with bar chart */}
                <motion.div variants={itemVariants} whileHover={{ scale: 1.03, boxShadow: "inset 0 1px 0 rgba(52,211,153,0.15), 0 0 20px rgba(16,185,129,0.2), 0 0 40px rgba(16,185,129,0.08)" }} transition={{ type: "tween", duration: 0.2 }} className="md:col-span-2 p-5 rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.06] relative overflow-hidden shadow-[inset_0_1px_0_rgba(52,211,153,0.15),0_0_30px_rgba(16,185,129,0.08)] cursor-pointer">
                  <div className="relative z-10">
                    <div className="text-4xl md:text-5xl font-extrabold mb-1 text-gradient-white-green">
                      <AnimatedValue target={713} locale={locale} />
                    </div>
                    <span className="text-xs text-neutral-400 uppercase tracking-widest">{t.hero.systemsDeployed}</span>
                  </div>
                  {/* Mini bar chart */}
                  <div className="flex items-end gap-1.5 mt-4 h-12">
                    {barHeights.map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-sm bg-emerald-500/50"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 + i * 0.05, ease: "easeOut" }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Weekly Growth chart */}
                <motion.div variants={itemVariants} whileHover={{ scale: 1.03, boxShadow: "inset 0 1px 0 rgba(59,130,246,0.1), 0 0 20px rgba(59,130,246,0.15), 0 0 40px rgba(59,130,246,0.05)" }} transition={{ type: "tween", duration: 0.2 }} className="md:col-span-3 p-5 rounded-2xl border border-blue-500/15 bg-blue-500/[0.03] relative overflow-hidden shadow-[inset_0_1px_0_rgba(59,130,246,0.1)] cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-xs text-blue-300/60 uppercase tracking-widest block mb-1.5">{t.hero.weeklyGrowth}</span>
                      <div className="text-2xl md:text-3xl font-extrabold text-white">+24,5%</div>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] flex items-center justify-center shadow-[0_0_15px_rgba(52,211,153,0.15)]">
                      <TrendingUp className="w-5 h-5 text-emerald-400" />
                    </div>
                  </div>
                  {/* Line chart SVG */}
                  <svg viewBox="0 0 500 120" className="w-full h-20 md:h-28" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="heroLineGradFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(52,211,153,0.3)" />
                        <stop offset="100%" stopColor="rgba(52,211,153,0)" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <motion.path
                      d="M 0 100 C 30 98, 60 95, 100 90 C 140 85, 170 82, 200 78 C 230 74, 260 70, 300 55 C 340 40, 370 28, 420 15 C 450 8, 480 5, 500 3"
                      fill="none"
                      stroke="#34d399"
                      strokeWidth="2.5"
                      filter="url(#glow)"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
                    />
                    <motion.path
                      d="M 0 100 C 30 98, 60 95, 100 90 C 140 85, 170 82, 200 78 C 230 74, 260 70, 300 55 C 340 40, 370 28, 420 15 C 450 8, 480 5, 500 3 L 500 120 L 0 120 Z"
                      fill="url(#heroLineGradFill)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Button below dashboard */}
        <motion.div
          className="mt-8 md:mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ButtonColorful
            label={t.hero.cta}
            onClick={() => document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 h-14 px-12 text-lg font-bold rounded-full hover:scale-105 cursor-pointer"
          />
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent z-[5] pointer-events-none" />
    </div>
  );
}
