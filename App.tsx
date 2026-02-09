
import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
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
import { LegalPage } from './components/LegalPage';
import { useTranslation } from './i18n/LanguageContext';

type Page = 'home' | 'impressum' | 'datenschutz';

function getPageFromHash(): Page {
  const hash = window.location.hash.replace('#', '');
  if (hash === 'impressum') return 'impressum';
  if (hash === 'datenschutz') return 'datenschutz';
  return 'home';
}

function App() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      if (page !== 'home') {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (currentPage === 'impressum') {
      document.title = `${t.legal.imprint.title} | Flouence`;
    } else if (currentPage === 'datenschutz') {
      document.title = `${t.legal.privacy.title} | Flouence`;
    } else {
      document.title = t.meta.title;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", t.meta.description);
    }
  }, [t, currentPage]);

  const navigateHome = () => {
    window.location.hash = '';
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

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
            background: `linear-gradient(35deg, transparent 0%, transparent 28%, rgba(168,85,247,0.10) 35%, rgba(59,130,246,0.13) 40%, rgba(255,255,255,0.15) 46%, rgba(168,85,247,0.14) 50%, rgba(255,255,255,0.15) 54%, rgba(59,130,246,0.13) 60%, rgba(168,85,247,0.10) 65%, transparent 72%, transparent 100%)`,
            filter: 'blur(30px)',
          }}
        />
      </div>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-1/2 focus:-translate-x-1/2 focus:z-[100] focus:bg-white focus:text-black focus:px-6 focus:py-3 focus:rounded-full focus:font-bold focus:shadow-2xl"
      >
        {t.app.skipToContent}
      </a>
      <Navbar />
      {currentPage === 'home' ? (
        <main id="main-content">
          <Hero />
          <SocialProof />
          <ProblemCompareSection />
          <ServiceTimeline />
          <AboutSection />
          <ErrorBoundary><CalendarCTA /></ErrorBoundary>
          <NewsletterSection />
          <FAQSection />
        </main>
      ) : currentPage === 'impressum' ? (
        <LegalPage
          title={t.legal.imprint.title}
          sections={t.legal.imprint.sections}
          backLabel={t.legal.backToHome}
          onBack={navigateHome}
        />
      ) : (
        <LegalPage
          title={t.legal.privacy.title}
          sections={t.legal.privacy.sections}
          backLabel={t.legal.backToHome}
          onBack={navigateHome}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
