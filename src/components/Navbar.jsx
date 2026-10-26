import React, { useState } from 'react';
import { Menu, X, FileText, Sparkles, Moon, Sun } from 'lucide-react';

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
        {/* Brand Logo */}
        <a href="#inicio" className="brand-logo" onClick={(e) => handleNavClick(e, '#inicio')}>
          <div className="brand-badge">KP</div>
          <div>
            <span style={{ fontWeight: 800 }}>KENNY</span>{' '}
            <span className="gradient-text" style={{ fontWeight: 800 }}>PALACIN</span>
          </div>
        </a>

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
                <Moon size={13} color="#64748b" style={{ position: 'relative', zIndex: 3 }} />
              ) : (
                <Sun size={15} color="#fff" style={{ position: 'relative', zIndex: 3 }} />
              )}
            </div>
          </button>

          {/* Quick CV Action Button */}
          <button
            onClick={onOpenCv}
            className="btn btn-primary animate__animated animate__fadeIn"
            style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}
          >
            <FileText size={15} />
            <span style={{ display: 'none', minWidth: '0px' }} className="cv-btn-text">
              {t.nav.viewCv}
            </span>
            <span>CV</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              style={{ fontSize: '1.1rem', padding: '0.5rem 0' }}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCv();
            }}
            className="btn btn-primary"
            style={{ marginTop: '0.5rem' }}
          >
            <FileText size={16} />
            {t.nav.viewCv}
          </button>
        </div>
      )}
    </header>
  );
}
