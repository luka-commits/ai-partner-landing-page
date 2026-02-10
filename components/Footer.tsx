
import React from "react";
import { useTranslation } from "../i18n/LanguageContext";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-20 bg-black/80 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <img src="/logo.png" alt="Flouence Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold text-white" style={{ fontFamily: 'Quicksand, sans-serif' }}>{t.footer.brand}</span>
          </div>
          <p className="text-neutral-400 max-w-sm mb-8">
            {t.footer.description}
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">{t.footer.servicesHeading}</h4>
          <ul className="space-y-4 text-neutral-400">
            {t.footer.serviceItems.map((item: string) => (
              <li key={item}><a href="#services" className="hover:text-purple-400 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md">{item}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">{t.footer.legalHeading}</h4>
          <ul className="space-y-4 text-neutral-400">
            <li><a href="#impressum" className="hover:text-purple-400 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md">{t.footer.imprint}</a></li>
            <li><a href="#datenschutz" className="hover:text-purple-400 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md">{t.footer.privacy}</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 text-center text-neutral-600 text-sm">
        &copy; {new Date().getFullYear()} {t.footer.copyright}
      </div>
    </footer>
  );
}
