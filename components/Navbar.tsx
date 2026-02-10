
import React, { useState, useEffect, useCallback, useRef } from "react";
import { cn } from "../lib/utils";
import { Mail, Menu, X } from "lucide-react";
import { ButtonColorful } from "./ui/button-colorful";
import { LanguageToggle } from "./LanguageToggle";
import { useTranslation } from "../i18n/LanguageContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      // Focus first menu item when opening
      requestAnimationFrame(() => {
        const firstItem = mobileMenuRef.current?.querySelector<HTMLElement>('button, a');
        firstItem?.focus();
      });
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Escape key and focus trap for mobile menu
  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        hamburgerRef.current?.focus();
        return;
      }

      if (e.key === 'Tab') {
        const focusable = mobileMenuRef.current?.querySelectorAll<HTMLElement>(
          'button, a, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = '';
      requestAnimationFrame(() => {
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      });
    }
    setMobileOpen(false);
  }, []);

  const navigateHome = () => {
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={cn(
        "fixed top-4 left-4 right-4 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between rounded-2xl",
        scrolled ? "bg-black/80 backdrop-blur-md border border-white/10 shadow-2xl" : "bg-transparent"
      )}>
        <div className="flex items-center gap-2">
          <button onClick={navigateHome} className="flex items-center gap-2 text-xl font-bold tracking-tighter text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md">
            <img src="/logo.png" alt="Flouence Logo" className="w-12 h-12 object-contain" />
            <span style={{ fontFamily: 'Quicksand, sans-serif' }}>{t.navbar.brand}</span>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-neutral-300 hover:text-white transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1">{t.navbar.services}</button>
          <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-neutral-300 hover:text-white transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1">{t.navbar.about}</button>
          <button onClick={() => scrollToSection('faq')} className="text-sm font-medium text-neutral-300 hover:text-white transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1">{t.navbar.faq}</button>
        </div>

        <div className="flex items-center gap-4">
          <div className="group/tooltip relative hidden lg:block">
            <button
              aria-label={t.navbar.newsletterAriaLabel}
              onClick={() => scrollToSection('newsletter')}
              className="text-neutral-300 hover:text-white transition cursor-pointer p-3 hover:bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              <Mail className="w-5 h-5" />
            </button>
            <div role="tooltip" className="absolute top-full right-0 mt-2 p-2 bg-neutral-900 border border-white/10 rounded-md opacity-0 group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100 transition-opacity whitespace-nowrap text-xs pointer-events-none">
              {t.navbar.newsletterTooltip}
            </div>
          </div>
          <LanguageToggle />
          <ButtonColorful
            label={t.navbar.cta}
            onClick={() => scrollToSection('calendar')}
            className="hidden md:inline-flex items-center gap-2 h-9 px-5 text-sm font-bold rounded-full cursor-pointer"
          />
          <button
            ref={hamburgerRef}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={() => setMobileOpen(false)} />
          <nav ref={mobileMenuRef} className="relative z-10 flex flex-col items-center justify-center gap-6 h-full" aria-label="Mobile navigation">
            <button onClick={() => scrollToSection('services')} className="text-2xl font-semibold text-neutral-200 hover:text-white transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md px-4 py-2">{t.navbar.services}</button>
            <button onClick={() => scrollToSection('about')} className="text-2xl font-semibold text-neutral-200 hover:text-white transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md px-4 py-2">{t.navbar.about}</button>
            <button onClick={() => scrollToSection('faq')} className="text-2xl font-semibold text-neutral-200 hover:text-white transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md px-4 py-2">{t.navbar.faq}</button>
            <button onClick={() => scrollToSection('newsletter')} className="text-2xl font-semibold text-neutral-200 hover:text-white transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md px-4 py-2">{t.navbar.newsletterTooltip}</button>
            <ButtonColorful
              label={t.navbar.cta}
              onClick={() => scrollToSection('calendar')}
              className="inline-flex items-center gap-2 h-12 px-8 text-base font-bold rounded-full cursor-pointer mt-4"
            />
          </nav>
        </div>
      )}
    </>
  );
}
