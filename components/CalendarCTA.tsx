
"use client";
import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export function CalendarCTA() {
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
    <section id="calendar" className="py-24 bg-black/80 relative scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-6xl font-bold text-white mb-6">
          Finde deinen größten AI-Hebel. In 15 Minuten.
        </h2>
        <p className="text-neutral-300 text-lg mb-12 max-w-2xl mx-auto">
          Wir identifizieren gemeinsam die AI-Chance mit dem höchsten ROI und den konkreten nächsten Schritt.
        </p>
        
        <div className="w-full min-h-[600px] overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur-xl">
          <Cal
            calLink="luka-knieling-gdfhtx/15min"
            style={{ width: "100%", height: "100%", minHeight: "600px", overflow: "hidden" }}
            config={{ layout: "month_view", theme: "dark" }}
          />
        </div>
        
        <p className="text-neutral-400 mt-10 text-sm font-medium tracking-wide uppercase">
          15 Minuten | Kostenlos | Unverbindlich
        </p>
      </div>
      
    </section>
  );
}
