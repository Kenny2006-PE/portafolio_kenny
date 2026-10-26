import React from 'react';
import { GraduationCap, Award, CheckCircle2, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';

export default function EducationCerts({ t }) {
  const getCertBadgeColor = (type) => {
    switch (type) {
      case 'Inteligencia Artificial':
      case 'Artificial Intelligence':
        return { bg: 'rgba(239, 68, 68, 0.15)', text: '#f87171', border: 'rgba(239, 68, 68, 0.3)' };
      case 'Seguridad':
      case 'Security':
        return { bg: 'rgba(59, 130, 246, 0.15)', text: '#60a5fa', border: 'rgba(59, 130, 246, 0.3)' };
      case 'Idioma':
      case 'Language':
        return { bg: 'rgba(16, 185, 129, 0.15)', text: '#34d399', border: 'rgba(16, 185, 129, 0.3)' };
      default:
        return { bg: 'rgba(139, 92, 246, 0.15)', text: '#a78bfa', border: 'rgba(139, 92, 246, 0.3)' };
    }
  };

  return (
    <section className="section-padding" id="educacion">
      <div className="content-wrapper">
        {/* Section Header */}
        <div className="section-header animate__animated animate__fadeIn">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>{t.nav.education}</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">{t.education.title}</span>
          </h2>
          <p className="section-subtitle">
            {t.education.subtitle}
          </p>
        </div>

        {/* 2-Column Grid: Education on Left, Certifications on Right */}
        <div className="edu-certs-grid">
          {/* Left Column: Higher Education */}
          <div className="edu-column-card animate__animated animate__fadeInLeft">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <div className="brand-badge" style={{ width: '42px', height: '42px', borderRadius: '12px' }}>
                <GraduationCap size={22} color="#fff" />
              </div>
              <h3 style={{ fontSize: '1.45rem' }}>
                {t.lang === 'en' ? 'Academic Background' : 'Formación Universitaria y Técnica'}
              </h3>
            </div>

            <div>
              {t.education.degrees.map((edu, idx) => (
                <div key={idx} className="edu-item">
                  <div className="edu-dot" />
                  <h4 className="edu-degree">{edu.degree}</h4>
                  <div className="edu-institution">{edu.institution}</div>
                  <div className="edu-meta">
                    <span>{edu.period}</span> • <span>{edu.location}</span>
                  </div>
                  <div style={{ marginTop: '0.5rem' }}>
                    <span 
                      style={{ 
                        fontSize: '0.75rem', 
                        fontWeight: 600, 
                        padding: '0.2rem 0.6rem', 
                        borderRadius: '6px', 
                        background: 'rgba(139, 92, 246, 0.15)',
                        color: 'var(--accent-purple-light)'
                      }}
                    >
                      {edu.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Continuous Learning */}
          <div className="certs-column-card animate__animated animate__fadeInRight">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <div 
                className="brand-badge" 
                style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #ef4444 0%, #8b5cf6 100%)' 
                }}
              >
                <Award size={22} color="#fff" />
              </div>
              <h3 style={{ fontSize: '1.45rem' }}>
                {t.lang === 'en' ? 'Certifications & Activities' : 'Certificaciones y Actividades'}
              </h3>
            </div>

            <div className="cert-list">
              {t.education.certifications.map((cert, cIdx) => {
                const badgeStyle = getCertBadgeColor(cert.type);
                return (
                  <div key={cIdx} className="cert-row">
                    <div>
                      <div className="cert-name">{cert.title}</div>
                      <div className="cert-issuer">{cert.issuer}</div>
                    </div>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        background: badgeStyle.bg,
                        color: badgeStyle.text,
                        border: `1px solid ${badgeStyle.border}`,
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {cert.type}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
