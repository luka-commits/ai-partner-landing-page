
import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { GlowingEffect } from "./ui/glowing-effect";
import { useTranslation } from "../i18n/LanguageContext";

export function CalendarCTA() {
  const { t, language } = useTranslation();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#8B5CF6" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section id="calendar" className="py-24 bg-black/80 relative z-[3] scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-6xl font-bold text-white mb-6">
          {t.calendar.heading}
        </h2>
        <p className="text-neutral-300 text-lg mb-12 max-w-2xl mx-auto">
          {t.calendar.subheading}
        </p>

        <div className="relative rounded-3xl">
          <GlowingEffect spread={30} glow={false} proximity={80} disabled={false} inactiveZone={0.3} borderWidth={1} />
          <div className="relative w-full min-h-[600px] overflow-hidden rounded-3xl border border-white/20 bg-neutral-900/50 backdrop-blur-xl" style={{ boxShadow: '0 0 60px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.1)' }}>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
                <span className="text-neutral-500 text-sm">{t.calendar.loading}</span>
              </div>
            </div>
            <Cal
              calLink="luka-knieling-gdfhtx/15min"
              style={{ width: "100%", height: "100%", minHeight: "600px", overflow: "hidden", position: "relative", zIndex: 1 }}
              config={{ layout: "month_view", theme: "dark", locale: language }}
            />
          </div>
        </div>

        <p className="text-neutral-400 mt-10 text-sm font-medium tracking-wide uppercase">
          {t.calendar.footer}
        </p>
      </div>

    </section>
  );
}
