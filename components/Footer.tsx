
import React from "react";
import { Youtube, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-20 bg-black/80 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg" />
            <span className="text-xl font-bold text-white">AI PARTNER</span>
          </div>
          <p className="text-neutral-400 max-w-sm mb-8">
            Wir bauen AI-Systeme und Automationen für KMU, die wachsen wollen. Ohne dafür ihr Team zu verdoppeln.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="YouTube" className="p-3 bg-neutral-900 rounded-full text-neutral-400 hover:text-white transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="p-3 bg-neutral-900 rounded-full text-neutral-400 hover:text-white transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-neutral-400">
            <li><a href="#services" className="hover:text-purple-400 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md">AI Workshop</a></li>
            <li><a href="#services" className="hover:text-purple-400 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md">AI Audit</a></li>
            <li><a href="#services" className="hover:text-purple-400 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md">Implementation</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Rechtliches</h4>
          <ul className="space-y-4 text-neutral-400">
            <li><a href="#" className="hover:text-purple-400 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md">Impressum</a></li>
            <li><a href="#" className="hover:text-purple-400 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md">Datenschutz</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center text-neutral-600 text-sm">
        &copy; {new Date().getFullYear()} AI Partner KMU Beratung. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
