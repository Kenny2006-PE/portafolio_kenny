import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroCv from './components/HeroCv';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import EducationCerts from './components/EducationCerts';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CvModal from './components/CvModal';
import BackgroundAmbient from './components/BackgroundAmbient';
import ParticleCanvas from './components/ParticleCanvas';
import CursorGlow from './components/CursorGlow';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('kp_theme') || 'dark';
  });

  const [lang, setLang] = useState(() => {
    return localStorage.getItem('kp_lang') || 'es';
  });

  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('kp_theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('kp_lang', lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const t = portfolioData[lang];

  return (
    <div className="app-container">
      {/* Dynamic Interactive Backgrounds */}
      <BackgroundAmbient />
      <ParticleCanvas theme={theme} />
      <CursorGlow theme={theme} />

      {/* Navigation Bar with customized toggles */}
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenCv={() => setIsCvModalOpen(true)}
        t={t}
      />

      {/* Main Content */}
      <main>
        {/* CV Presentation Hero Section */}
        <HeroCv t={t} onOpenCv={() => setIsCvModalOpen(true)} />

        {/* Work Experience */}
        <Experience t={t} />

        {/* Projects (MonIA, MarketMap, ReservaTec) */}
        <Projects t={t} />

        {/* Technical Skills */}
        <Skills t={t} />

        {/* Education & Certifications */}
        <EducationCerts t={t} />

        {/* Contact & Interactive Form */}
        <Contact t={t} />
      </main>

      {/* Footer */}
      <Footer t={t} lang={lang} />

      {/* Interactive & Printable CV Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        t={t}
        lang={lang}
      />
    </div>
  );
}
