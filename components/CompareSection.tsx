
import React from "react";
import { Compare } from "./ui/compare";
import { AIVoiceInput } from "./ui/ai-voice-input";
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
} from "lucide-react";

const problemData = [
  {
    id: "problem-1",
    problemIcon: CircleHelp,
    problem:
      "Ich weiß nicht, wo ich mit AI anfangen soll \u2013 alles f\u00fchlt sich \u00fcberw\u00e4ltigend an",
    intro:
      "Wir schauen uns deine Prozesse an und finden heraus, wo der gr\u00f6\u00dfte Hebel liegt.",
    bullets: [
      { icon: ScanSearch, text: "Analyse deiner bestehenden Workflows und Pain Points" },
      { icon: Target, text: "Identifikation der Top 3 Bereiche mit dem h\u00f6chsten AI-Potenzial" },
      { icon: FileText, text: "Klare Roadmap mit konkreten n\u00e4chsten Schritten" },
    ],
    highlight: { value: "Ergebnis:", label: "Du wei\u00dft genau, wo du anfangen sollst." },
  },
  {
    id: "problem-2",
    problemIcon: Clock,
    problem:
      "Mein Team verschwendet 15+ Stunden pro Woche mit Copy-Paste und manueller Dateneingabe",
    intro:
      "Wir automatisieren die repetitiven Aufgaben, damit dein Team sich auf das konzentriert, was z\u00e4hlt.",
    bullets: [
      { icon: RefreshCw, text: "Automatisierung von Daten\u00fcbertragungen zwischen Systemen" },
      { icon: Bot, text: "Intelligente Templates und Auto-Fill f\u00fcr wiederkehrende Eingaben" },
      { icon: Zap, text: "Echtzeit-Synchronisation statt manueller Updates" },
    ],
    highlight: { value: "80\u201390%", label: "Zeitersparnis bei repetitiven Tasks" },
  },
  {
    id: "problem-3",
    problemIcon: Timer,
    problem:
      "Wir reagieren erst nach 3\u20134 Stunden auf Leads \u2013 50% gehen verloren, bevor wir antworten",
    intro:
      "Jeder Lead bekommt sofort eine Antwort \u2014 rund um die Uhr.",
    bullets: [
      { icon: Rocket, text: "Automatische Erstreaktion in unter 60 Sekunden" },
      { icon: Target, text: "Intelligente Qualifizierung: Wer ist kaufbereit, wer braucht Nurturing?" },
      { icon: Users, text: "Nahtlose \u00dcbergabe an den richtigen Ansprechpartner" },
    ],
    highlight: { value: "24/7", label: "aktiv, auch nachts und am Wochenende" },
  },
  {
    id: "problem-4",
    problemIcon: Unplug,
    problem:
      "Unsere Tools und Prozesse sind isoliert \u2013 nichts spricht miteinander, alles ist Flickwerk",
    intro:
      "Wir verbinden alles zu einem System, das mit jedem Projekt st\u00e4rker wird.",
    bullets: [
      { icon: Link, text: "Zentrale Datenverbindung zwischen allen deinen Tools" },
      { icon: GitBranch, text: "Automatisierte Datenfl\u00fcsse ohne manuelles Hin-und-Her" },
      { icon: Zap, text: "Infrastruktur, die bei neuen Tools einfach mitw\u00e4chst" },
    ],
    highlight: { value: "1 System", label: "statt 10 Insell\u00f6sungen" },
  },
  {
    id: "problem-5",
    problemIcon: UserX,
    problem:
      "Mein Team ist abh\u00e4ngig von mir \u2013 ohne mich l\u00e4uft nichts, ich bin der Flaschenhals",
    intro:
      "Dein Team bekommt klare Prozesse und smarte Unterst\u00fctzung \u2014 du beh\u00e4ltst die \u00dcbersicht.",
    bullets: [
      { icon: FileText, text: "Dokumentierte Workflows, die jeder im Team versteht" },
      { icon: Bot, text: "AI-gest\u00fctzte Entscheidungshilfen f\u00fcr wiederkehrende Fragen" },
      { icon: AlertTriangle, text: "Automatische Eskalation nur bei echten Ausnahmen" },
    ],
    highlight: { value: "Du", label: "beh\u00e4ltst die Kontrolle, ohne der Flaschenhals zu sein" },
  },
];

export function ProblemCompareSection() {
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
          Von Experimenten zu Ergebnissen.
        </h2>
        <p className="text-neutral-300 text-lg mb-16 max-w-2xl mx-auto">
          Der Unterschied liegt nicht im Tool. Er liegt im System dahinter.
        </p>

        {/* Problem/Lösung Accordion */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="rounded-2xl border border-white/10 bg-neutral-950 p-2">
            <Accordion type="single" collapsible className="w-full">
              {problemData.map((item) => {
                const ProblemIcon = item.problemIcon;
                return (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border-b border-white/5 last:border-b-0"
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
                          {item.bullets.map((bullet) => {
                            const BulletIcon = bullet.icon;
                            return (
                              <li
                                key={bullet.text}
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

        <div className="flex justify-center">
          <div className="p-3 border rounded-3xl bg-neutral-950 border-white/10 shadow-2xl overflow-hidden">
            <Compare
              firstImage="/before.png"
              secondImage="/after.png"
              firstImageClassName="rounded-2xl"
              secondImageClassname="rounded-2xl"
              className="h-[350px] w-full md:h-[500px] md:w-[800px]"
              slideMode="hover"
              autoplay={false}
            />
          </div>
        </div>

        {/* Voice Input CTA */}
        <div className="relative max-w-3xl mx-auto mt-16">
          {/* Glow backdrop */}
          <div
            className="absolute -inset-4 rounded-3xl pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(168,85,247,0.15) 0%, rgba(59,130,246,0.08) 50%, transparent 70%)',
              filter: 'blur(30px)',
            }}
          />
          <div className="relative rounded-2xl border border-purple-500/20 bg-neutral-950/90 p-10 text-center"
            style={{ boxShadow: '0 0 60px rgba(168,85,247,0.12), 0 0 120px rgba(59,130,246,0.06)' }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
              Noch unsicher? Frag uns einfach.
            </h3>
            <p className="text-neutral-400 text-sm mb-6">
              Sag uns, welches Problem du hast – wir zeigen dir eine konkrete Lösung.
            </p>
            <AIVoiceInput demoMode={true} demoInterval={3000} />
          </div>
        </div>
      </div>

    </section>
  );
}
