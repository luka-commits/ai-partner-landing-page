
import React from 'react';
import { StarsBackground } from './components/ui/stars-background';
import { ShootingStarsOverlay } from './components/ui/shooting-stars';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { ProblemCompareSection } from './components/CompareSection';
import { ServiceTimeline } from './components/ServiceTimeline';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { CalendarCTA } from './components/CalendarCTA';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      {/* Global star field behind all content */}
      <div className="fixed inset-0 z-0">
        <StarsBackground starDensity={0.00025} />
      </div>
      {/* Global shooting stars overlay */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <ShootingStarsOverlay />
      </div>
      {/* Milky Way band - subtle diagonal light band */}
      <div className="fixed inset-0 z-[2] pointer-events-none overflow-hidden">
        <div
          className="absolute animate-milky-way"
          style={{
            top: '-20%',
            left: '-10%',
            width: '140%',
            height: '140%',
            background: `linear-gradient(35deg, transparent 0%, transparent 28%, rgba(168,85,247,0.22) 35%, rgba(59,130,246,0.28) 40%, rgba(255,255,255,0.35) 46%, rgba(168,85,247,0.3) 50%, rgba(255,255,255,0.35) 54%, rgba(59,130,246,0.28) 60%, rgba(168,85,247,0.22) 65%, transparent 72%, transparent 100%)`,
            filter: 'blur(40px)',
          }}
        />
      </div>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-1/2 focus:-translate-x-1/2 focus:z-[100] focus:bg-white focus:text-black focus:px-6 focus:py-3 focus:rounded-full focus:font-bold focus:shadow-2xl"
      >
        Zum Hauptinhalt springen
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <SocialProof />
        <ProblemCompareSection />
        <ServiceTimeline />
        <AboutSection />
        <CalendarCTA />
        <NewsletterSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
