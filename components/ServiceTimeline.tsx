
import React from "react";
import { Timeline } from "./ui/timeline";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import {
  ArrowRight,
  Lightbulb,
  Clock,
  MonitorPlay,
  Zap,
  Target,
  Presentation,
  ScanSearch,
  FileText,
  Crosshair,
  Calculator,
  TrendingUp,
  Rocket,
  Repeat,
  Timer,
  Gauge,
  Database,
  Cpu,
  GitBranch,
  LayoutDashboard,
  BarChart3,
  Shield,
  CalendarCheck,
  Wrench,
  Sparkles,
} from "lucide-react";
import { cn } from "../lib/utils";

// ─── Theme definitions ───────────────────────────────────────────────

type CardTheme = {
  text: string;
  textLight: string;
  bg: string;
  bgSubtle: string;
  border: string;
  borderSubtle: string;
  gradientVia: string;
  iconBg: string;
  ring: string;
  shadowRgb: string;
  gradientFrom: string;
};

const purpleTheme: CardTheme = {
  text: "text-purple-400",
  textLight: "text-purple-300",
  bg: "bg-purple-500/10",
  bgSubtle: "bg-purple-500/[0.04]",
  border: "border-purple-500/25",
  borderSubtle: "border-purple-500/10",
  gradientVia: "via-purple-400/60",
  iconBg: "bg-purple-500/15",
  ring: "ring-purple-500",
  shadowRgb: "168,85,247",
  gradientFrom: "from-purple-500/[0.12]",
};

const blueTheme: CardTheme = {
  text: "text-blue-400",
  textLight: "text-blue-300",
  bg: "bg-blue-500/10",
  bgSubtle: "bg-blue-500/[0.04]",
  border: "border-blue-500/25",
  borderSubtle: "border-blue-500/10",
  gradientVia: "via-blue-400/60",
  iconBg: "bg-blue-500/15",
  ring: "ring-blue-500",
  shadowRgb: "59,130,246",
  gradientFrom: "from-blue-500/[0.12]",
};

const emeraldTheme: CardTheme = {
  text: "text-emerald-400",
  textLight: "text-emerald-300",
  bg: "bg-emerald-500/10",
  bgSubtle: "bg-emerald-500/[0.04]",
  border: "border-emerald-500/25",
  borderSubtle: "border-emerald-500/10",
  gradientVia: "via-emerald-400/60",
  iconBg: "bg-emerald-500/15",
  ring: "ring-emerald-500",
  shadowRgb: "16,185,129",
  gradientFrom: "from-emerald-500/[0.12]",
};

// ─── Animation variants ──────────────────────────────────────────────

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const listContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

// ─── Sub-components ──────────────────────────────────────────────────

function CardShell({
  theme,
  step,
  children,
}: {
  theme: CardTheme;
  step: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border",
        theme.border,
        `bg-gradient-to-b ${theme.gradientFrom} to-transparent`
      )}
      style={{
        boxShadow: `0 0 40px rgba(${theme.shadowRgb}, 0.06)`,
      }}
    >
      {/* Top shimmer accent line */}
      <div
        className={cn(
          "h-[2px] bg-gradient-to-r from-transparent",
          theme.gradientVia,
          "to-transparent bg-[length:200%_100%]"
        )}
        style={{ animation: "shimmer 4s ease-in-out infinite" }}
      />
      <div className="p-6 md:p-8 lg:p-10">
        {/* Step number watermark */}
        <span
          className={cn(
            "absolute -top-4 -left-2 text-[5rem] md:text-[7rem] font-black leading-none select-none pointer-events-none",
            theme.text,
            "opacity-[0.05]"
          )}
        >
          {step}
        </span>
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}

function HeaderBadge({
  icon: Icon,
  text,
  theme,
}: {
  icon: React.ElementType;
  text: string;
  theme: CardTheme;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5",
        theme.bg,
        "border",
        theme.borderSubtle
      )}
    >
      <Icon className={cn("w-3.5 h-3.5", theme.text)} />
      <span
        className={cn(
          "text-xs font-semibold tracking-wide",
          theme.textLight
        )}
      >
        {text}
      </span>
    </div>
  );
}

function SectionLabel({ text, theme }: { text: string; theme: CardTheme }) {
  return (
    <div className="flex items-center gap-3 mb-4 mt-8 first:mt-0">
      <div
        className={cn(
          "h-px flex-1 bg-gradient-to-r",
          `from-transparent`,
          theme.border.replace("border-", "to-").replace("/25", "/30")
        )}
      />
      <span
        className={cn(
          "text-xs font-bold uppercase tracking-[0.15em]",
          theme.text,
          "opacity-80"
        )}
      >
        {text}
      </span>
      <div
        className={cn(
          "h-px flex-1 bg-gradient-to-l",
          `from-transparent`,
          theme.border.replace("border-", "to-").replace("/25", "/30")
        )}
      />
    </div>
  );
}

function BulletItem({
  icon: Icon,
  lead,
  desc,
  theme,
}: {
  icon: React.ElementType;
  lead: string;
  desc?: string;
  theme: CardTheme;
}) {
  return (
    <motion.li variants={listItemVariants} className="flex items-start gap-3">
      <div
        className={cn(
          "mt-0.5 w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0",
          theme.iconBg
        )}
      >
        <Icon className={cn("w-3.5 h-3.5", theme.text)} />
      </div>
      <div className="text-sm leading-relaxed">
        <span className="text-white font-semibold">{lead}</span>
        {desc && (
          <span className="text-neutral-400"> &ndash; {desc}</span>
        )}
      </div>
    </motion.li>
  );
}

function NumberedStep({
  number,
  title,
  desc,
  theme,
  isLast,
}: {
  number: number;
  title: string;
  desc?: string;
  theme: CardTheme;
  isLast: boolean;
}) {
  return (
    <div className="flex gap-4 relative">
      {!isLast && (
        <div
          className={cn(
            "absolute left-[15px] top-8 bottom-0 w-px bg-gradient-to-b",
            theme.border.replace("border-", "from-").replace("/25", "/30"),
            theme.border.replace("border-", "to-").replace("/25", "/5")
          )}
        />
      )}
      <div
        className={cn(
          "relative z-10 w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0",
          theme.borderSubtle,
          theme.bg
        )}
      >
        <span className={cn("text-xs font-bold", theme.textLight)}>
          {number}
        </span>
      </div>
      <div className={cn("pb-5", isLast && "pb-0")}>
        <span className="text-white font-semibold text-sm">{title}</span>
        {desc && (
          <p className="text-neutral-500 text-xs mt-1 leading-relaxed">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
}

function MetricBadge({
  value,
  label,
  theme,
}: {
  value: string;
  label: string;
  theme: CardTheme;
}) {
  return (
    <div
      className={cn(
        "px-3 py-2 rounded-lg border transition-colors duration-200",
        theme.bg,
        theme.borderSubtle,
        `hover:${theme.border}`
      )}
    >
      <span className={cn("text-xs font-bold", theme.textLight)}>
        {value}
      </span>
      <span className="text-xs text-neutral-500 ml-1.5">{label}</span>
    </div>
  );
}

function LayerItem({
  index,
  name,
  desc,
  icon: Icon,
  theme,
}: React.PropsWithChildren<{
  index: number;
  name: string;
  desc: string;
  icon: React.ElementType;
  theme: CardTheme;
}>) {
  return (
    <motion.div
      className={cn(
        "flex items-center gap-3 p-3 rounded-lg border transition-colors duration-200",
        theme.borderSubtle,
        theme.bgSubtle,
        `hover:${theme.border}`
      )}
      style={{ marginLeft: `${index * 8}px` }}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <div
        className={cn(
          "w-7 h-7 rounded flex items-center justify-center flex-shrink-0",
          theme.iconBg
        )}
      >
        <Icon className={cn("w-3.5 h-3.5", theme.text)} />
      </div>
      <div className="text-sm">
        <span className="text-white font-semibold">{name}</span>
        <span className="text-neutral-500"> &ndash; {desc}</span>
      </div>
    </motion.div>
  );
}

function CardCTA({
  text,
  theme,
}: {
  text: string;
  theme: CardTheme;
}) {
  return (
    <button
      onClick={() =>
        document
          .getElementById("calendar")
          ?.scrollIntoView({ behavior: "smooth" })
      }
      className={cn(
        "group mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl border text-sm font-semibold cursor-pointer transition-all duration-300",
        theme.bg,
        theme.border,
        theme.textLight,
        "hover:bg-opacity-20 hover:border-opacity-40",
        `focus:outline-none focus:ring-2 ${theme.ring}`
      )}
    >
      {text}
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </button>
  );
}

// ─── Card content components ─────────────────────────────────────────

function WorkshopContent() {
  const t = purpleTheme;
  return (
    <CardShell theme={t} step="01">
      <HeaderBadge icon={Presentation} text="60 Min | Online | Live" theme={t} />

      <h4 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
        Dein Team versteht AI &ndash; und ist bereit, es anzuwenden.
      </h4>

      {/* Was du lernst */}
      <SectionLabel text="Was du lernst" theme={t} />
      <motion.ul
        variants={listContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="space-y-3"
      >
        <BulletItem
          icon={TrendingUp}
          lead="Warum AI jetzt unverzichtbar ist"
          desc="Markt-Kontext, Wettbewerb, deine Chance (kein Hype, sondern Business-Notwendigkeit)"
          theme={t}
        />
        <BulletItem
          icon={Zap}
          lead="Sofort umsetzbare AI-Tools"
          desc="Konkrete Use Cases mit 80-90% Zeitersparnis (Email-Entwürfe, Meeting-Zusammenfassungen, Datenanalyse)"
          theme={t}
        />
        <BulletItem
          icon={Lightbulb}
          lead="AI als Unternehmens-Infrastruktur"
          desc="Von einzelnen Tools zu automatisierten Systemen, die 24/7 laufen"
          theme={t}
        />
        <BulletItem
          icon={Sparkles}
          lead="Kundenarbeit transformieren"
          desc="Wie AI deine Response-Zeit von Stunden auf Sekunden reduziert und Conversion um 400% steigert"
          theme={t}
        />
      </motion.ul>

      {/* Das Format */}
      <SectionLabel text="Das Format" theme={t} />
      <motion.ul
        variants={listContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="space-y-3"
      >
        <BulletItem
          icon={Clock}
          lead="1 Stunde Online"
          desc="kompakt, praxisnah, branchenspezifisch angepasst"
          theme={t}
        />
        <BulletItem
          icon={MonitorPlay}
          lead="Live-Demos"
          desc="keine Theorie, sondern echte Workflows in Aktion"
          theme={t}
        />
        <BulletItem
          icon={Zap}
          lead="Sofort-Aktionen"
          desc="jeder Teilnehmer geht mit mindestens einer Idee raus, die er am nächsten Tag umsetzen kann"
          theme={t}
        />
      </motion.ul>

      {/* Das Ergebnis */}
      <SectionLabel text="Das Ergebnis" theme={t} />
      <motion.ul
        variants={listContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="space-y-3"
      >
        <BulletItem
          icon={Target}
          lead="Dein Team versteht AI und ist bereit, es anzuwenden"
          theme={t}
        />
        <BulletItem
          icon={Target}
          lead="Du siehst konkret, wo AI in deinem Business den größten Hebel hat"
          theme={t}
        />
        <BulletItem
          icon={Target}
          lead="Natürliche Brücke zum tieferen AI Audit"
          desc="falls gewünscht"
          theme={t}
        />
      </motion.ul>

      <CardCTA text="Workshop anfragen" theme={t} />
    </CardShell>
  );
}

function AuditContent() {
  const t = blueTheme;

  const steps = [
    {
      title: "Diagnose",
      desc: "Identifizierung deines teuersten Problems (nicht 'irgendwas automatisieren')",
    },
    {
      title: "Prozess-Mapping",
      desc: "Verstehen, was wirklich passiert (nicht die idealisierte Version)",
    },
    {
      title: "Atomic Breakdown",
      desc: "Jeder Prozess wird in kleinste Bestandteile zerlegt und auf KI-Eignung geprüft",
    },
    {
      title: "Priorisierung",
      desc: "Impact-Matrix: Quick Wins (sofort umsetzbar) vs. Big Swings (langfristig)",
    },
    {
      title: "ROI-Berechnung",
      desc: 'Harte Zahlen: Was kostet Inaction? Was bringt die Lösung?',
    },
    {
      title: "Roadmap",
      desc: "3-Phasen-Plan mit klaren Timelines und Prioritäten",
    },
  ];

  return (
    <CardShell theme={t} step="02">
      <HeaderBadge icon={ScanSearch} text="2-8 Wochen | Intensive Begleitung" theme={t} />

      <h4 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
        Finde die größten Chancen &ndash; mit harten Zahlen.
      </h4>
      <p className="text-neutral-400 text-sm mb-2">
        6-Schritt-Prozess zur vollständigen Diagnose:
      </p>

      {/* 6-step process as mini vertical timeline */}
      <SectionLabel text="Was passiert" theme={t} />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={listContainerVariants}
        className="space-y-0"
      >
        {steps.map((step, i) => (
          <motion.div key={step.title} variants={listItemVariants}>
            <NumberedStep
              number={i + 1}
              title={step.title}
              desc={step.desc}
              theme={t}
              isLast={i === steps.length - 1}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Was du bekommst - as metric badges */}
      <SectionLabel text="Was du bekommst" theme={t} />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={listContainerVariants}
        className="space-y-3"
      >
        <motion.div variants={listItemVariants}>
          <div className="flex flex-wrap gap-2 mb-3">
            <MetricBadge value="20-40 Seiten" label="AI-Readiness Report" theme={t} />
            <MetricBadge value="Top 5-10" label="Use Cases priorisiert" theme={t} />
          </div>
        </motion.div>
        <motion.ul variants={listContainerVariants} className="space-y-3">
          <BulletItem
            icon={Calculator}
            lead='Konkrete Zahlen'
            desc='z.B. "$1.040.000 entgangener Umsatz durch langsame Lead-Reaktion"'
            theme={t}
          />
          <BulletItem
            icon={Presentation}
            lead="Live-Präsentation"
            desc="60-90 Min. Walkthrough mit deinem Team"
            theme={t}
          />
        </motion.ul>
      </motion.div>

      {/* Das Ergebnis */}
      <SectionLabel text="Das Ergebnis" theme={t} />
      <motion.ul
        variants={listContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="space-y-3"
      >
        <BulletItem
          icon={TrendingUp}
          lead="Du weißt genau, wo AI bei dir den größten Hebel hat"
          theme={t}
        />
        <BulletItem
          icon={TrendingUp}
          lead="Klare Roadmap für die nächsten 6-12 Monate"
          theme={t}
        />
        <BulletItem
          icon={TrendingUp}
          lead="Die Umsetzung (Implementation) ist der logische nächste Schritt"
          desc="mit klaren Zahlen"
          theme={t}
        />
      </motion.ul>

      <CardCTA text="Audit anfragen" theme={t} />
    </CardShell>
  );
}

function ImplementationContent() {
  const t = emeraldTheme;

  const layers = [
    {
      name: "Data Foundation",
      desc: "Single Source of Truth für alle Daten",
      icon: Database,
    },
    {
      name: "Intelligence Engine",
      desc: "Deine SOPs und Geschäftslogik werden ausführbarer Code",
      icon: Cpu,
    },
    {
      name: "Orchestration",
      desc: "Agents arbeiten zusammen als System, nicht isoliert",
      icon: GitBranch,
    },
    {
      name: "Integration Framework",
      desc: "Verbindungen zu deinen Tools – einmal gebaut, mehrfach genutzt",
      icon: LayoutDashboard,
    },
    {
      name: "Command Center",
      desc: "Dashboard für ROI-Tracking und System-Monitoring",
      icon: BarChart3,
    },
  ];

  return (
    <CardShell theme={t} step="03">
      <HeaderBadge icon={Rocket} text="4-24 Wochen | Maßgeschneidert" theme={t} />

      <h4 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
        Maßgeschneiderte Lösungen für dein Business.
      </h4>
      <p className="text-neutral-400 text-sm mb-1">
        Individuell entwickelte AI-Systeme basierend auf deinem AI Audit. Typische Projekte: AI-Agents, Prozessautomatisierung, Wissensmanagement, Multi-Agent-Systeme, Lead-Qualifizierung, Kundenservice-AI.
      </p>

      {/* Der Prozess - always visible */}
      <SectionLabel text="Der Prozess" theme={t} />
      <motion.ul
        variants={listContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="space-y-3"
      >
        <BulletItem
          icon={Repeat}
          lead="Iterativer Aufbau"
          desc="Sprint-basiert mit wöchentlichen Checkpoints und Live-Demos"
          theme={t}
        />
        <BulletItem
          icon={Timer}
          lead="Quick Wins zuerst"
          desc="2-3 schnelle Erfolge in den ersten 4-8 Wochen (zeigen sofortigen ROI)"
          theme={t}
        />
        <BulletItem
          icon={Gauge}
          lead="Dann Big Swings"
          desc="Komplexere Systeme, die fundamentale Transformation bringen"
          theme={t}
        />
      </motion.ul>

      {/* Accordion for deeper sections */}
      <div className="mt-8">
        <Accordion type="multiple" className="space-y-1">
          {/* AI Core-Konzept */}
          <AccordionItem value="core-concept" className="border-none">
            <AccordionTrigger
              className={cn(
                "py-3 px-4 rounded-lg hover:no-underline transition-colors",
                t.bgSubtle,
                `hover:${t.bg}`
              )}
            >
              <span
                className={cn(
                  "text-xs font-bold uppercase tracking-[0.15em]",
                  t.text,
                  "opacity-80"
                )}
              >
                Das AI Core-Konzept
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <p className="text-neutral-400 text-sm mb-4">
                Wir bauen nicht isolierte Tools, sondern eine 5-Layer-Infrastruktur, die mit jedem Projekt mächtiger wird:
              </p>
              <div className="space-y-1.5">
                {layers.map((layer, i) => (
                  <LayerItem
                    key={layer.name}
                    index={i}
                    name={layer.name}
                    desc={layer.desc}
                    icon={layer.icon}
                    theme={t}
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Der Vorteil */}
          <AccordionItem value="advantage" className="border-none">
            <AccordionTrigger
              className={cn(
                "py-3 px-4 rounded-lg hover:no-underline transition-colors",
                t.bgSubtle,
                `hover:${t.bg}`
              )}
            >
              <span
                className={cn(
                  "text-xs font-bold uppercase tracking-[0.15em]",
                  t.text,
                  "opacity-80"
                )}
              >
                Der Vorteil
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <ul className="space-y-3">
                <BulletItem
                  icon={Shield}
                  lead="Jedes Projekt wird günstiger"
                  desc="Integrationen existieren bereits"
                  theme={t}
                />
                <BulletItem
                  icon={TrendingUp}
                  lead="Jedes Projekt wird mächtiger"
                  desc="Baut auf bestehenden Layers auf"
                  theme={t}
                />
                <BulletItem
                  icon={Shield}
                  lead="Du bist nicht abhängig von einzelnen Tools"
                  desc="Du besitzt die Infrastruktur"
                  theme={t}
                />
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Was du bekommst */}
          <AccordionItem value="deliverables" className="border-none">
            <AccordionTrigger
              className={cn(
                "py-3 px-4 rounded-lg hover:no-underline transition-colors",
                t.bgSubtle,
                `hover:${t.bg}`
              )}
            >
              <span
                className={cn(
                  "text-xs font-bold uppercase tracking-[0.15em]",
                  t.text,
                  "opacity-80"
                )}
              >
                Was du bekommst
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              {/* Phase grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <div
                  className={cn(
                    "text-center p-4 rounded-xl border",
                    t.bgSubtle,
                    t.borderSubtle
                  )}
                >
                  <div className={cn("text-lg font-bold mb-1", t.textLight)}>
                    4-8 Wo.
                  </div>
                  <div className="text-xs text-neutral-400">
                    Phase 1: Quick Wins
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">
                    2-3 schnelle ROI-Nachweise
                  </div>
                </div>
                <div
                  className={cn(
                    "text-center p-4 rounded-xl border",
                    t.bgSubtle,
                    t.borderSubtle
                  )}
                >
                  <div className={cn("text-lg font-bold mb-1", t.textLight)}>
                    8-24 Wo.
                  </div>
                  <div className="text-xs text-neutral-400">
                    Phase 2: Big Swings
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">
                    Fundamentale Prozess-Transformation
                  </div>
                </div>
                <div
                  className={cn(
                    "text-center p-4 rounded-xl border",
                    t.bgSubtle,
                    t.borderSubtle
                  )}
                >
                  <div className={cn("text-lg font-bold mb-1", t.textLight)}>
                    Ongoing
                  </div>
                  <div className="text-xs text-neutral-400">
                    Phase 3: Skalierung
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">
                    Infrastruktur-Ausbau
                  </div>
                </div>
              </div>
              <p className="text-neutral-500 text-xs">
                Timeline: 4-24 Wochen (je nach Scope)
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Nach dem Go-Live */}
          <AccordionItem value="retainer" className="border-none">
            <AccordionTrigger
              className={cn(
                "py-3 px-4 rounded-lg hover:no-underline transition-colors",
                t.bgSubtle,
                `hover:${t.bg}`
              )}
            >
              <span
                className={cn(
                  "text-xs font-bold uppercase tracking-[0.15em]",
                  t.text,
                  "opacity-80"
                )}
              >
                Nach dem Go-Live
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div
                className={cn(
                  "p-4 rounded-xl border",
                  t.bgSubtle,
                  t.borderSubtle
                )}
              >
                <div className="flex items-center gap-2 mb-3">
                  <CalendarCheck className={cn("w-4 h-4", t.text)} />
                  <span className="text-white font-semibold text-sm">
                    Monthly Retainer (empfohlen)
                  </span>
                </div>
                <ul className="space-y-2 mb-3">
                  <li className="flex items-start gap-2 text-sm text-neutral-400">
                    <Wrench className={cn("w-3.5 h-3.5 mt-0.5 flex-shrink-0", t.text)} />
                    Wartung, Monitoring, Optimierung
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-400">
                    <Sparkles className={cn("w-3.5 h-3.5 mt-0.5 flex-shrink-0", t.text)} />
                    Neue Features und Erweiterungen basierend auf Learnings
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-400">
                    <TrendingUp className={cn("w-3.5 h-3.5 mt-0.5 flex-shrink-0", t.text)} />
                    Sicherstellung, dass das System kontinuierlich besser wird
                  </li>
                </ul>
                <div className="flex items-baseline gap-2">
                  <span className={cn("text-lg font-bold", t.textLight)}>
                    $1.000 &ndash; $5.000
                  </span>
                  <span className="text-neutral-500 text-xs">
                    /Monat (je nach System-Komplexität)
                  </span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <CardCTA text="Projekt besprechen" theme={t} />
    </CardShell>
  );
}

// ─── Main component ──────────────────────────────────────────────────

export function ServiceTimeline() {
  const serviceData = [
    {
      title: "AI Workshop",
      titleColor: "#e9e5ff",
      content: <WorkshopContent />,
    },
    {
      title: "AI Audit",
      titleColor: "#dbeafe",
      content: <AuditContent />,
    },
    {
      title: "Implementation",
      titleColor: "#d1fae5",
      content: <ImplementationContent />,
    },
  ];

  return <Timeline data={serviceData} />;
}
