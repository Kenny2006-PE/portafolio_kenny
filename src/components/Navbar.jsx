import React, { useState } from 'react';
import { 
  RiMenu4Line, 
  RiCloseLine, 
  RiFileTextLine, 
  RiMoonClearFill, 
  RiSunFill,
  RiDownload2Line
} from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ lang, setLang, theme, toggleTheme, onOpenCv, t }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#inicio', label: t.nav.hero },
    { href: '#experiencia', label: t.nav.experience },
    { href: '#proyectos', label: t.nav.projects },
    { href: '#habilidades', label: t.nav.skills },
    { href: '#educacion', label: t.nav.education },
    { href: '#contacto', label: t.nav.contact },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-header" id="navbar">
      <div className="navbar-container">
        {/* Brand Logo - Authentic Developer Monogram <KP /> */}
        <motion.a 
          href="#inicio" 
          className="brand-logo" 
          onClick={(e) => handleNavClick(e, '#inicio')}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <div className="brand-badge brand-badge-dev">
            <span className="brand-code-brackets">&lt;</span>
            <span className="brand-code-name">KP</span>
            <span className="brand-code-brackets">/&gt;</span>
          </div>
          <div className="brand-text-wrap">
            <span style={{ fontWeight: 800 }}>KENNY</span>{' '}
            <span className="brand-name-accent" style={{ fontWeight: 800 }}>PALACIN</span>
          </div>
        </motion.a>

        {/* Desktop Nav Links */}
        <nav>
          <ul className="nav-links-desktop">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Controls: Language Capsule, Red Theme Ring & CV Button */}
        <div className="navbar-controls">
          {/* Custom Language Pill Toggle [ ES | EN ] */}
          <div
            className="lang-toggle-capsule"
            data-lang={lang}
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setLang(lang === 'es' ? 'en' : 'es');
              }
            }}
          >
            <div className="lang-toggle-slider" />
            <span className="lang-toggle-option es">ES</span>
            <span className="lang-toggle-option en">EN</span>
          </div>

          {/* Custom Theme Switch with prominent Red Ring and Starry Moon / Sun */}
          <button
            className="theme-toggle-ring"
            data-theme={theme}
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            title={theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
          >
            <div className="theme-toggle-stars">
              <svg width="100%" height="100%" viewBox="0 0 58 34" fill="none">
                <circle cx="10" cy="10" r="1" fill="#fff" opacity="0.8" />
                <circle cx="15" cy="22" r="0.75" fill="#fff" opacity="0.6" />
                <circle cx="24" cy="8" r="1.2" fill="#fff" opacity="0.9" />
                <circle cx="21" cy="25" r="0.8" fill="#fff" opacity="0.7" />
              </svg>
            </div>
            <div className="theme-toggle-thumb">
              {theme === 'dark' ? (
                <RiMoonClearFill size={14} color="#64748b" style={{ position: 'relative', zIndex: 3 }} />
              ) : (
                <RiSunFill size={15} color="#fff" style={{ position: 'relative', zIndex: 3 }} />
              )}
            </div>
          </button>

          {/* Quick CV Action Button (Desktop & Tablet only, mobile drawer has it) */}
          <button
            onClick={onOpenCv}
            className="btn btn-primary animate__animated animate__fadeIn nav-cv-btn"
            style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}
          >
            <RiFileTextLine size={16} />
            <span style={{ display: 'none', minWidth: '0px' }} className="cv-btn-text">
              {t.nav.viewCv}
            </span>
            <span>CV</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <RiCloseLine size={24} /> : <RiMenu4Line size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <div className="mobile-drawer-links">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <span>{link.label}</span>
                </a>
              ))}
            </div>

            <div className="mobile-drawer-actions">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCv();
                }}
                className="btn btn-secondary mobile-drawer-btn"
              >
                <RiFileTextLine size={17} />
                <span>{t.nav.viewCv}</span>
              </button>
              <a
                href="/CV_KennyPalacin.pdf"
                download="CV_KennyPalacin.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary mobile-drawer-btn"
              >
                <RiDownload2Line size={17} />
                <span>{t.nav.downloadCv}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
