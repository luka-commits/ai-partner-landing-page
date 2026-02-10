
import React, { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";

interface LegalSection {
  readonly heading: string;
  readonly content: string;
}

interface LegalPageProps {
  title: string;
  sections: readonly LegalSection[];
  backLabel: string;
  onBack: () => void;
}

export function LegalPage({ title, sections, backLabel, onBack }: LegalPageProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <main className="min-h-screen pt-28 pb-20 relative z-10">
      <div className="max-w-3xl mx-auto px-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition mb-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md"
        >
          <ArrowLeft className="w-4 h-4" />
          {backLabel}
        </button>
        <h1
          ref={headingRef}
          tabIndex={-1}
          className="text-4xl md:text-5xl font-bold text-white mb-12 outline-none"
        >
          {title}
        </h1>
        {sections.map((section, i) => (
          <div key={i} className="mb-10">
            <h2 className="text-xl font-bold text-white mb-4">{section.heading}</h2>
            <p className="text-neutral-300 leading-relaxed whitespace-pre-line">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
