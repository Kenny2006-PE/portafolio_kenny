import React from 'react';
import { Mail, Heart, Sparkles, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer({ t, lang }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-bar">
      <div className="footer-content">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
            <span style={{ fontWeight: 800, fontSize: '1.05rem' }}>KENNY PALACIN CRISTOBAL</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {lang === 'en'
              ? 'Full Stack Developer • Software Engineering Student (USIL) & Graduate (TECSUP)'
              : 'Desarrollador Full Stack • Estudiante Ing. de Software (USIL) y Egresado (TECSUP)'}
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="footer-socials">
            <a 
              href={t.personal.github} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-icon"
              title="GitHub"
            >
              <GithubIcon size={17} />
            </a>
            <a 
              href={t.personal.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-icon"
              title="LinkedIn"
            >
              <LinkedinIcon size={17} />
            </a>
            <a 
              href={`mailto:${t.personal.email}`} 
              className="btn-icon"
              title="Email"
            >
              <Mail size={17} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="btn-icon"
            style={{ borderRadius: '50%' }}
            title={lang === 'en' ? 'Back to top' : 'Volver arriba'}
            aria-label="Volver arriba"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
