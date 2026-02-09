
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
import { useTranslation } from "../i18n/LanguageContext";

// ─── Theme definitions ───────────────────────────────────────────────

type CardTheme = {
  text: string;
  textLight: string;
  bg: string;
  bgSubtle: string;
  border: string;
  borderSubtle: string;
  hoverBorder: string;
  hoverBg: string;
  gradientVia: string;
  iconBg: string;
  ring: string;
  shadowRgb: string;
  gradientFrom: string;
};

const purpleTheme: CardTheme = {
  text: "text-purple-400",
  textLight: "text-purple-200",
  bg: "bg-purple-500/20",
  bgSubtle: "bg-purple-500/[0.10]",
  border: "border-purple-500/40",
  borderSubtle: "border-purple-500/25",
  hoverBorder: "hover:border-purple-500/50",
  hoverBg: "hover:bg-purple-500/20",
  gradientVia: "via-purple-400/80",
  iconBg: "bg-purple-500/25",
  ring: "ring-purple-500",
  shadowRgb: "168,85,247",
  gradientFrom: "from-purple-500/[0.22]",
};

const blueTheme: CardTheme = {
  text: "text-blue-400",
  textLight: "text-blue-200",
  bg: "bg-blue-500/20",
  bgSubtle: "bg-blue-500/[0.10]",
  border: "border-blue-500/40",
  borderSubtle: "border-blue-500/25",
  hoverBorder: "hover:border-blue-500/50",
  hoverBg: "hover:bg-blue-500/20",
  gradientVia: "via-blue-400/80",
  iconBg: "bg-blue-500/25",
  ring: "ring-blue-500",
  shadowRgb: "59,130,246",
  gradientFrom: "from-blue-500/[0.22]",
};

const emeraldTheme: CardTheme = {
  text: "text-emerald-400",
  textLight: "text-emerald-200",
  bg: "bg-emerald-500/20",
  bgSubtle: "bg-emerald-500/[0.10]",
  border: "border-emerald-500/40",
  borderSubtle: "border-emerald-500/25",
  hoverBorder: "hover:border-emerald-500/50",
  hoverBg: "hover:bg-emerald-500/20",
  gradientVia: "via-emerald-400/80",
  iconBg: "bg-emerald-500/25",
  ring: "ring-emerald-500",
  shadowRgb: "16,185,129",
  gradientFrom: "from-emerald-500/[0.22]",
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
        `bg-gradient-to-b ${theme.gradientFrom} to-transparent`,
        "bg-black/70 backdrop-blur-[12px] backdrop-brightness-[1.15] backdrop-saturate-[1.3]"
      )}
      style={{
        boxShadow: `0 0 40px rgba(${theme.shadowRgb}, 0.15), 0 0 80px rgba(255,255,255,0.04)`,
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
      {/* White glass-edge highlight */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
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
          <span className="text-neutral-300"> &ndash; {desc}</span>
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
          <p className="text-neutral-400 text-xs mt-1 leading-relaxed">
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
        theme.hoverBorder
      )}
    >
      <span className={cn("text-xs font-bold", theme.textLight)}>
        {value}
      </span>
      <span className="text-xs text-neutral-400 ml-1.5">{label}</span>
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
        theme.hoverBorder
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
        <span className="text-neutral-400"> &ndash; {desc}</span>
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
  const theme = purpleTheme;
  const { t } = useTranslation();
  const ws = t.services.workshop;

  const whatYouLearnIcons = [TrendingUp, Zap, Lightbulb, Sparkles];
  const formatIcons = [Clock, MonitorPlay, Zap];
  const resultIcons = [Target, Target, Target];

  return (
    <CardShell theme={theme} step="01">
      <HeaderBadge icon={Presentation} text={ws.badge} theme={theme} />

      <h4 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
        {ws.headline}
      </h4>

      {/* Was du lernst */}
      <SectionLabel text={ws.sections.whatYouLearn} theme={theme} />
      <motion.ul
        variants={listContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="space-y-3"
      >
        {ws.whatYouLearnItems.map((item, i) => (
          <BulletItem
            key={i}
            icon={whatYouLearnIcons[i]}
            lead={item.lead}
            desc={item.desc}
            theme={theme}
          />
        ))}
      </motion.ul>

      {/* Das Format */}
      <SectionLabel text={ws.sections.format} theme={theme} />
      <motion.ul
        variants={listContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="space-y-3"
      >
        {ws.formatItems.map((item, i) => (
          <BulletItem
            key={i}
            icon={formatIcons[i]}
            lead={item.lead}
            desc={item.desc}
            theme={theme}
          />
        ))}
      </motion.ul>

      {/* Das Ergebnis */}
      <SectionLabel text={ws.sections.result} theme={theme} />
      <motion.ul
        variants={listContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="space-y-3"
      >
        {ws.resultItems.map((item, i) => (
          <BulletItem
            key={i}
            icon={resultIcons[i]}
            lead={item.lead}
            desc={item.desc}
            theme={theme}
          />
        ))}
      </motion.ul>

      <CardCTA text={ws.cta} theme={theme} />
    </CardShell>
  );
}

function AuditContent() {
  const theme = blueTheme;
  const { t } = useTranslation();
  const audit = t.services.audit;

  return (
    <CardShell theme={theme} step="02">
      <HeaderBadge icon={ScanSearch} text={audit.badge} theme={theme} />

      <h4 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
        {audit.headline}
      </h4>
      <p className="text-neutral-300 text-sm mb-2">
        {audit.processIntro}
      </p>

      {/* 6-step process as mini vertical timeline */}
      <SectionLabel text={audit.sections.whatHappens} theme={theme} />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={listContainerVariants}
        className="space-y-0"
      >
        {audit.steps.map((step, i) => (
          <motion.div key={i} variants={listItemVariants}>
            <NumberedStep
              number={i + 1}
              title={step.title}
              desc={step.desc}
              theme={theme}
              isLast={i === audit.steps.length - 1}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Was du bekommst - as metric badges */}
      <SectionLabel text={audit.sections.whatYouGet} theme={theme} />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={listContainerVariants}
        className="space-y-3"
      >
        <motion.div variants={listItemVariants}>
          <div className="flex flex-wrap gap-2 mb-3">
            {audit.metrics.map((m, i) => (
              <MetricBadge key={i} value={m.value} label={m.label} theme={theme} />
            ))}
          </div>
        </motion.div>
        <motion.ul variants={listContainerVariants} className="space-y-3">
          {audit.deliverables.map((item, i) => (
            <BulletItem
              key={i}
              icon={i === 0 ? Calculator : Presentation}
              lead={item.lead}
              desc={item.desc}
              theme={theme}
            />
          ))}
        </motion.ul>
      </motion.div>

      {/* Das Ergebnis */}
      <SectionLabel text={audit.sections.result} theme={theme} />
      <motion.ul
        variants={listContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="space-y-3"
      >
        {audit.resultItems.map((item, i) => (
          <BulletItem
            key={i}
            icon={TrendingUp}
            lead={item.lead}
            desc={item.desc}
            theme={theme}
          />
        ))}
      </motion.ul>

      <CardCTA text={audit.cta} theme={theme} />
    </CardShell>
  );
}

function ImplementationContent() {
  const theme = emeraldTheme;
  const { t } = useTranslation();
  const impl = t.services.implementation;

  const processIcons = [Repeat, Timer, Gauge];
  const layerIcons = [Database, Cpu, GitBranch, LayoutDashboard, BarChart3];
  const advantageIcons = [Shield, TrendingUp, Shield];
  const retainerIcons = [Wrench, Sparkles, TrendingUp];

  return (
    <CardShell theme={theme} step="03">
      <HeaderBadge icon={Rocket} text={impl.badge} theme={theme} />

      <h4 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
        {impl.headline}
      </h4>
      <p className="text-neutral-300 text-sm mb-1">
        {impl.description}
      </p>

      {/* Der Prozess - always visible */}
      <SectionLabel text={impl.sections.process} theme={theme} />
      <motion.ul
        variants={listContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="space-y-3"
      >
        {impl.processItems.map((item, i) => (
          <BulletItem
            key={i}
            icon={processIcons[i]}
            lead={item.lead}
            desc={item.desc}
            theme={theme}
          />
        ))}
      </motion.ul>

      {/* Accordion for deeper sections */}
      <div className="mt-8">
        <Accordion type="multiple" className="space-y-1">
          {/* AI Core-Konzept */}
          <AccordionItem value="core-concept" className="border-none">
            <AccordionTrigger
              className={cn(
                "py-3 px-4 rounded-lg hover:no-underline transition-colors",
                theme.bgSubtle,
                theme.hoverBg
              )}
            >
              <span
                className={cn(
                  "text-xs font-bold uppercase tracking-[0.15em]",
                  theme.text,
                  "opacity-80"
                )}
              >
                {impl.sections.coreConcept}
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <p className="text-neutral-300 text-sm mb-4">
                {impl.coreConceptIntro}
              </p>
              <div className="space-y-1.5">
                {impl.layers.map((layer, i) => (
                  <LayerItem
                    key={i}
                    index={i}
                    name={layer.name}
                    desc={layer.desc}
                    icon={layerIcons[i]}
                    theme={theme}
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
                theme.bgSubtle,
                theme.hoverBg
              )}
            >
              <span
                className={cn(
                  "text-xs font-bold uppercase tracking-[0.15em]",
                  theme.text,
                  "opacity-80"
                )}
              >
                {impl.sections.advantage}
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <ul className="space-y-3">
                {impl.advantageItems.map((item, i) => (
                  <BulletItem
                    key={i}
                    icon={advantageIcons[i]}
                    lead={item.lead}
                    desc={item.desc}
                    theme={theme}
                  />
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Was du bekommst */}
          <AccordionItem value="deliverables" className="border-none">
            <AccordionTrigger
              className={cn(
                "py-3 px-4 rounded-lg hover:no-underline transition-colors",
                theme.bgSubtle,
                theme.hoverBg
              )}
            >
              <span
                className={cn(
                  "text-xs font-bold uppercase tracking-[0.15em]",
                  theme.text,
                  "opacity-80"
                )}
              >
                {impl.sections.deliverables}
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              {/* Phase grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                {impl.phases.map((phase, i) => (
                  <div
                    key={i}
                    className={cn(
                      "text-center p-4 rounded-xl border",
                      theme.bgSubtle,
                      theme.borderSubtle
                    )}
                  >
                    <div className={cn("text-lg font-bold mb-1", theme.textLight)}>
                      {phase.duration}
                    </div>
                    <div className="text-xs text-neutral-300">
                      {phase.label}
                    </div>
                    <div className="text-xs text-neutral-400 mt-1">
                      {phase.desc}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-neutral-400 text-xs">
                {impl.timeline}
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Nach dem Go-Live */}
          <AccordionItem value="retainer" className="border-none">
            <AccordionTrigger
              className={cn(
                "py-3 px-4 rounded-lg hover:no-underline transition-colors",
                theme.bgSubtle,
                theme.hoverBg
              )}
            >
              <span
                className={cn(
                  "text-xs font-bold uppercase tracking-[0.15em]",
                  theme.text,
                  "opacity-80"
                )}
              >
                {impl.sections.postGoLive}
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div
                className={cn(
                  "p-4 rounded-xl border",
                  theme.bgSubtle,
                  theme.borderSubtle
                )}
              >
                <div className="flex items-center gap-2 mb-3">
                  <CalendarCheck className={cn("w-4 h-4", theme.text)} />
                  <span className="text-white font-semibold text-sm">
                    {impl.retainer.title}
                  </span>
                </div>
                <ul className="space-y-2 mb-3">
                  {impl.retainer.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
                      {React.createElement(retainerIcons[i], { className: cn("w-3.5 h-3.5 mt-0.5 flex-shrink-0", theme.text) })}
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-baseline gap-2">
                  <span className={cn("text-lg font-bold", theme.textLight)}>
                    {impl.retainer.price}
                  </span>
                  <span className="text-neutral-400 text-xs">
                    {impl.retainer.priceSuffix}
                  </span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <CardCTA text={impl.cta} theme={theme} />
    </CardShell>
  );
}

// ─── Main component ──────────────────────────────────────────────────

export function ServiceTimeline() {
  const { t } = useTranslation();

  const serviceData = [
    {
      title: t.services.workshop.title,
      titleColor: "#e9e5ff",
      content: <WorkshopContent />,
    },
    {
      title: t.services.audit.title,
      titleColor: "#dbeafe",
      content: <AuditContent />,
    },
    {
      title: t.services.implementation.title,
      titleColor: "#d1fae5",
      content: <ImplementationContent />,
    },
  ];

  return (
    <Timeline
      data={serviceData}
      heading={t.services.heading}
      description={t.services.subheading}
    />
  );
}
