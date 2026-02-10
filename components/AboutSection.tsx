
import React from "react";
import { Award, Star, Briefcase } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";
import { useTranslation } from "../i18n/LanguageContext";

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-black/80 overflow-hidden relative scroll-mt-24">

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-white/10 rounded-3xl blur-2xl group-hover:opacity-100 opacity-50 transition" />
            <div className="relative rounded-3xl border border-white/20 overflow-hidden w-full aspect-[4/5]">
              <img
                src="/luka-portrait.jpg"
                alt={t.about.portraitAlt}
                loading="lazy"
                width={1200}
                height={995}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <span className="text-purple-400 font-bold uppercase text-xs tracking-widest mb-4 block">{t.about.eyebrow}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.about.name}</h2>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed italic">
              {t.about.quote}
            </p>
            <p className="text-neutral-300 mb-10 leading-relaxed">
              {t.about.bio}
            </p>
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="relative rounded-2xl">
                <GlowingEffect spread={30} glow={false} proximity={80} disabled={false} inactiveZone={0.3} borderWidth={1} />
                <div className="relative bg-neutral-900/50 border border-white/20 rounded-2xl p-5 text-center" style={{ boxShadow: '0 0 30px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.1)' }}>
                  <Star className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                  <span className="text-2xl font-bold text-white block">97%</span>
                  <span className="text-xs text-neutral-400">{t.about.stats.jobSuccess}</span>
                </div>
              </div>
              <div className="relative rounded-2xl">
                <GlowingEffect spread={30} glow={false} proximity={80} disabled={false} inactiveZone={0.3} borderWidth={1} />
                <div className="relative bg-neutral-900/50 border border-white/20 rounded-2xl p-5 text-center" style={{ boxShadow: '0 0 30px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.1)' }}>
                  <Award className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                  <span className="text-2xl font-bold text-white block">{t.about.stats.topRated}</span>
                  <span className="text-xs text-neutral-400">{t.about.stats.topRatedPlatform}</span>
                </div>
              </div>
              <div className="relative rounded-2xl">
                <GlowingEffect spread={30} glow={false} proximity={80} disabled={false} inactiveZone={0.3} borderWidth={1} />
                <div className="relative bg-neutral-900/50 border border-white/20 rounded-2xl p-5 text-center" style={{ boxShadow: '0 0 30px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.1)' }}>
                  <Briefcase className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                  <span className="text-2xl font-bold text-white block">15+</span>
                  <span className="text-xs text-neutral-400">{t.about.stats.projects}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
