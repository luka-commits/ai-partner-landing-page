
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { GlowingEffect } from "./ui/glowing-effect";
import { useTranslation } from "../i18n/LanguageContext";

export function FAQSection() {
  const { t } = useTranslation();

  return (
    <section id="faq" className="py-24 bg-black/80 scroll-mt-24 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">{t.faq.heading}</h2>
        <div className="relative rounded-2xl">
          <GlowingEffect spread={30} glow={false} proximity={80} disabled={false} inactiveZone={0.3} borderWidth={1} />
          <div className="relative rounded-2xl border border-white/20 bg-neutral-950 p-2">
            <Accordion type="single" className="w-full" defaultValue="item-0">
              {t.faq.items.map((tab, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg py-5 hover:text-purple-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md">
                    {tab.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-300 leading-relaxed">
                    {tab.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
