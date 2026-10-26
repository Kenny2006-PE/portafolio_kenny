import React from 'react';
import { 
  RiGithubFill, 
  RiLinkedinBoxFill, 
  RiMailLine, 
  RiArrowUpLine, 
  RiHeartFill 
} from 'react-icons/ri';

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
              <RiGithubFill size={19} />
            </a>
            <a 
              href={t.personal.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-icon"
              title="LinkedIn"
            >
              <RiLinkedinBoxFill size={19} />
            </a>
            <a 
              href={`mailto:${t.personal.email}`} 
              className="btn-icon"
              title="Email"
            >
              <RiMailLine size={19} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="btn-icon"
            style={{ borderRadius: '50%' }}
            title={lang === 'en' ? 'Back to top' : 'Volver arriba'}
            aria-label="Volver arriba"
          >
            <RiArrowUpLine size={19} />
          </button>
        </div>
      </div>
    </footer>
  );
}
