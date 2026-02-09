
import React, { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Mail } from "lucide-react";
import { ButtonColorful } from "./ui/button-colorful";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={cn(
      "fixed top-4 left-4 right-4 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between rounded-2xl",
      scrolled ? "bg-black/80 backdrop-blur-md border border-white/10 shadow-2xl" : "bg-transparent"
    )}>
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold tracking-tighter text-white">Flouence</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-neutral-300 hover:text-white transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1">Services</button>
        <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-neutral-300 hover:text-white transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1">Über uns</button>
        <button onClick={() => scrollToSection('faq')} className="text-sm font-medium text-neutral-300 hover:text-white transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1">FAQ</button>
      </div>

      <div className="flex items-center gap-4">
        <div className="group relative hidden lg:block">
          <button
            aria-label="AI-Updates erhalten"
            onClick={() => scrollToSection('newsletter')}
            className="text-neutral-300 hover:text-white transition cursor-pointer p-3 hover:bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            <Mail className="w-5 h-5" />
          </button>
          <div className="absolute top-full right-0 mt-2 p-2 bg-neutral-900 border border-white/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs">
            AI-Updates erhalten
          </div>
        </div>
        <ButtonColorful
          label="Jetzt AI-Potenzial entdecken"
          onClick={() => scrollToSection('calendar')}
          className="h-9 px-5 text-sm font-bold rounded-full cursor-pointer"
        />
      </div>
    </nav>
  );
}
