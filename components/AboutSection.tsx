
import React from "react";
import { Youtube, Linkedin, Award, Star, Briefcase, CircleDollarSign } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-black/80 overflow-hidden relative scroll-mt-24">

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-white/5 rounded-3xl blur-2xl group-hover:opacity-100 opacity-50 transition" />
            <div className="relative rounded-3xl border border-white/10 overflow-hidden w-full aspect-[4/5]">
              <img
                src="/luka-portrait.png"
                alt="Porträt von Luka Knieling, Gründer von AI Partner"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <span className="text-purple-400 font-bold uppercase text-xs tracking-widest mb-4 block">Wer steckt dahinter?</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Luka Knieling</h2>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed italic">
              "Wir bauen keine Konzepte. Wir bauen Systeme. Der Unterschied zwischen Erfolg und Scheitern bei AI ist nicht das Tool, es ist die Umsetzung in den echten Arbeitsalltag deines Teams."
            </p>
            <p className="text-neutral-300 mb-10 leading-relaxed">
              Ich helfe KMU dabei, das Rauschen um AI zu ignorieren und sich auf die 2-3 Hebel zu konzentrieren, die echte Zeit und echtes Geld sparen. Mein Ansatz ist pragmatisch, ehrlich und immer darauf ausgerichtet, dass dein Team am Ende unabhängig von mir ist.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-5 text-center">
                <Star className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                <span className="text-2xl font-bold text-white block">93%</span>
                <span className="text-xs text-neutral-400">Job Success</span>
              </div>
              <div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-5 text-center">
                <Award className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                <span className="text-2xl font-bold text-white block">Top Rated</span>
                <span className="text-xs text-neutral-400">auf Upwork</span>
              </div>
              <div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-5 text-center">
                <Briefcase className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                <span className="text-2xl font-bold text-white block">15+</span>
                <span className="text-xs text-neutral-400">Projekte umgesetzt</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="flex items-center gap-2 text-neutral-300 hover:text-white transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md">
                <Youtube className="w-5 h-5 text-red-500" /> YouTube
              </a>
              <a href="#" className="flex items-center gap-2 text-neutral-300 hover:text-white transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md">
                <Linkedin className="w-5 h-5 text-blue-500" /> LinkedIn
              </a>
              <a href="#" className="flex items-center gap-2 text-neutral-300 hover:text-white transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md">
                <CircleDollarSign className="w-5 h-5 text-green-500" /> Upwork
              </a>
            </div>
            <p className="mt-8 text-sm text-neutral-400">
              Schau auf YouTube vorbei, dort zeige ich wöchentlich, wie AI-Projekte in der Praxis wirklich funktionieren.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
