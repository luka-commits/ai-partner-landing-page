
import React from "react";
import { Compare } from "./ui/compare";
import { AIVoiceInput } from "./ui/ai-voice-input";
import { GlowingEffect } from "./ui/glowing-effect";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import {
  CircleHelp,
  Clock,
  Timer,
  Unplug,
  UserX,
  ScanSearch,
  Zap,
  Rocket,
  GitBranch,
  Users,
  Check,
  Target,
  RefreshCw,
  Link,
  FileText,
  Bot,
  AlertTriangle,
  MessageCircle,
  Coins,
} from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";

const problemStructure = [
  {
    id: "problem-1",
    problemIcon: CircleHelp,
    bulletIcons: [ScanSearch, Target, FileText],
  },
  {
    id: "problem-2",
    problemIcon: Clock,
    bulletIcons: [RefreshCw, Bot, Zap],
  },
  {
    id: "problem-3",
    problemIcon: Timer,
    bulletIcons: [Rocket, Target, Users],
  },
  {
    id: "problem-4",
    problemIcon: Unplug,
    bulletIcons: [Link, GitBranch, Zap],
  },
  {
    id: "problem-5",
    problemIcon: UserX,
    bulletIcons: [FileText, Bot, AlertTriangle],
  },
];

export function ProblemCompareSection() {
  const { t } = useTranslation();

  const problemData = problemStructure.map((item, i) => ({
    ...item,
    problem: t.compare.problems[i].problem,
    intro: t.compare.problems[i].intro,
    bullets: item.bulletIcons.map((icon, j) => ({
      icon,
      text: t.compare.problems[i].bullets[j],
    })),
    highlight: {
      value: t.compare.problems[i].highlightValue,
      label: t.compare.problems[i].highlightLabel,
    },
  }));

  return (
    <section className="py-24 bg-black/80 relative overflow-hidden">

      {/* Nebula Vortex */}
      <div
        className="absolute animate-nebula-vortex pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          width: '700px',
          height: '700px',
          opacity: 0.3,
          filter: 'blur(50px)',
          background: `
            radial-gradient(ellipse 40% 50% at 45% 40%, rgba(168,85,247,0.6) 0%, transparent 70%),
            radial-gradient(ellipse 50% 35% at 60% 55%, rgba(59,130,246,0.55) 0%, transparent 70%),
            radial-gradient(ellipse 35% 45% at 35% 60%, rgba(6,182,212,0.45) 0%, transparent 65%),
            radial-gradient(ellipse 30% 30% at 55% 45%, rgba(255,255,255,0.2) 0%, transparent 50%)
          `,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          {t.compare.heading}
        </h2>
        <p className="text-neutral-300 text-lg mb-16 max-w-2xl mx-auto">
          {t.compare.subheading}
        </p>

        {/* Problem/Lösung Accordion */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative rounded-2xl">
            <GlowingEffect spread={30} glow={false} proximity={80} disabled={false} inactiveZone={0.3} borderWidth={1} />
          <div className="relative rounded-2xl border border-white/20 bg-neutral-950 p-2">
            <Accordion type="single" collapsible className="w-full">
              {problemData.map((item) => {
                const ProblemIcon = item.problemIcon;
                return (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border-b border-white/10 last:border-b-0"
                  >
                    <AccordionTrigger className="text-left py-4 px-4 hover:no-underline rounded-lg hover:bg-white/[0.02] cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-red-500/15">
                          <ProblemIcon className="w-4 h-4 text-red-400" />
                        </div>
                        <span className="text-sm md:text-base text-neutral-200 font-medium leading-snug">
                          &ldquo;{item.problem}&rdquo;
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <div className="pl-11">
                        {/* Intro */}
                        <p className="text-neutral-400 italic text-sm mb-4">
                          {item.intro}
                        </p>

                        {/* Bullet Points */}
                        <ul className="space-y-2.5 mb-4">
                          {item.bullets.map((bullet, idx) => {
                            const BulletIcon = bullet.icon;
                            return (
                              <li
                                key={idx}
                                className="flex items-start gap-2.5"
                              >
                                <div className="mt-0.5 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 bg-emerald-500/15">
                                  <BulletIcon className="w-3 h-3 text-emerald-400" />
                                </div>
                                <span className="text-sm text-neutral-300 leading-relaxed">
                                  {bullet.text}
                                </span>
                              </li>
                            );
                          })}
                        </ul>

                        {/* Highlight Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-xs font-bold text-emerald-300">
                            {item.highlight.value}
                          </span>
                          <span className="text-xs text-neutral-400">
                            {item.highlight.label}
                          </span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative rounded-3xl">
            <GlowingEffect spread={30} glow={false} proximity={80} disabled={false} inactiveZone={0.3} borderWidth={1} />
          <div className="relative w-full md:w-auto p-3 border rounded-3xl bg-neutral-950 border-white/20 overflow-hidden" style={{ boxShadow: '0 4px 60px rgba(255,255,255,0.05), 0 0 1px rgba(255,255,255,0.15)' }}>
            <Compare
              firstImage="/before.jpg"
              secondImage="/after.jpg"
              firstImageClassName="rounded-2xl"
              secondImageClassname="rounded-2xl"
              className="h-[350px] w-full md:h-[500px] md:w-[800px]"
              slideMode="hover"
              autoplay={false}
            />
          </div>
          </div>
        </div>

        {/* Voice Input CTA */}
        <div className="relative max-w-3xl mx-auto mt-16">
          {/* Glow backdrop */}
          <div
            className="absolute -inset-4 rounded-3xl pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(168,85,247,0.20) 0%, rgba(59,130,246,0.12) 50%, transparent 70%)',
              filter: 'blur(30px)',
            }}
          />
          {/* GlowingEffect wrapper */}
          <div className="relative rounded-2xl p-px">
            <GlowingEffect
              spread={30}
              glow={false}
              proximity={80}
              disabled={false}
              inactiveZone={0.3}
              borderWidth={1}
            />
            <div className="relative rounded-2xl border border-white/25 bg-neutral-950/90 p-10 text-center"
              style={{ boxShadow: '0 0 60px rgba(168,85,247,0.20), 0 0 120px rgba(59,130,246,0.10), inset 0 1px 0 rgba(255,255,255,0.08)' }}
            >
              {/* Top white glass-edge highlight */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-2xl" />

              {/* Live Badge */}
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-medium bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-cyan-300 tracking-wide">
                    {t.compare.voiceBadge}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {t.compare.voiceCta}
              </h3>
              <p className="text-neutral-400 text-sm md:text-base mb-6 max-w-lg mx-auto">
                {t.compare.voiceSubtext}
              </p>

              {/* Feature Chips */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {[MessageCircle, Coins, Target].map((Icon, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/20 text-xs text-neutral-300"
                  >
                    <Icon className="w-3.5 h-3.5 text-purple-400" />
                    {t.compare.voiceFeatures[i]}
                  </div>
                ))}
              </div>

              <AIVoiceInput
                listeningText={t.voiceInput.listening}
                clickToSpeakText={t.voiceInput.clickToSpeak}
                connectingText={t.voiceInput.connecting}
              />

              {/* Disclaimer */}
              <p className="text-xs text-neutral-500 mt-2">
                {t.compare.voiceDisclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
