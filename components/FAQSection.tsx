
"use client";
import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqData = [
  {
    id: 1,
    title: "Ist mein Unternehmen die richtige Größe dafür?",
    image: "https://images.unsplash.com/photo-1522071823991-b9671f903f6d?w=800&q=80",
    description: "Ideal sind Teams zwischen 20-100 Mitarbeitern. Groß genug für echte Prozesse, aber agil genug, um AI schnell einzuführen. Unter 20? Sprich mit uns, manchmal passt es trotzdem. Über 100? Du brauchst wahrscheinlich eher eine interne AI-Abteilung.",
  },
  {
    id: 2,
    title: "In welcher Reihenfolge machen wir das?",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description: "Workshop → Audit → Implementation ist der empfohlene Weg. Aber nicht bindend. Weißt du schon, wo der Hebel ist? Spring direkt zum Audit. Willst du sofort bauen? Direkt zur Implementation. Unsicher? Workshop zuerst.",
  },
  {
    id: 3,
    title: "Was kostet das?",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    description: "Workshop: ab 950€ | Audit: Festpreis nach Umfang | Implementation: Projektabhängig. Im kostenlosen Strategiegespräch klären wir, wo du stehst und was sinnvoll ist. Keine Überraschungen, volle Transparenz.",
  },
  {
    id: 4,
    title: "Wie schnell sehe ich Ergebnisse?",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    description: "Erste Quick Wins (z.B. Leads 40% schneller beantwortet) oft schon nach 4-6 Wochen. Eine vollständige Implementierung komplexer Systeme dauert ca. 3-6 Monate.",
  },
];

export function FAQSection() {
  const [activeImage, setActiveImage] = useState(faqData[0].image);

  return (
    <section id="faq" className="py-24 bg-black/80 scroll-mt-24 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center md:text-left">Häufig gestellte Fragen</h2>
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-1/2">
            <Accordion type="single" className="w-full" defaultValue="item-1">
              {faqData.map((tab) => (
                <AccordionItem key={tab.id} value={`item-${tab.id}`}>
                  <AccordionTrigger onClick={() => setActiveImage(tab.image)} className="text-left text-lg py-5 hover:text-purple-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md">
                    {tab.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-300 leading-relaxed">
                    {tab.description}
                    <div className="mt-4 md:hidden rounded-xl overflow-hidden">
                       <img src={tab.image} alt={`Illustration zur Frage: ${tab.title}`} loading="lazy" className="w-full h-48 object-cover" />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="hidden md:block w-1/2 sticky top-40 h-[400px] rounded-3xl overflow-hidden border border-white/10 group">
             <img
               src={activeImage}
               alt="Vorschaubild zur ausgewählten Frage"
               loading="lazy"
               className="w-full h-full object-cover transition duration-500 grayscale group-hover:grayscale-0"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
