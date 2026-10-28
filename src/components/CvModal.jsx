import React, { useEffect } from 'react';
import { RiPrinterLine, RiCloseLine, RiDownload2Line } from 'react-icons/ri';
import confetti from 'canvas-confetti';

export default function CvModal({ isOpen, onClose, t, lang }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.5 }
    });
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-card magictime puffIn" onClick={(e) => e.stopPropagation()}>
        {/* Header Bar */}
        <div className="modal-header-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>
              {t.cvModal.title}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a 
              href="/CV_KennyPalacin.pdf" 
              download="CV_KennyPalacin.pdf" 
              className="btn btn-primary" 
              style={{ padding: '0.45rem 1rem', fontSize: '0.85rem', textDecoration: 'none' }}
            >
              <RiDownload2Line size={17} />
              <span>{t.nav.downloadCv}</span>
            </a>
            <button onClick={handlePrint} className="btn btn-secondary" style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}>
              <RiPrinterLine size={17} />
              <span>{t.cvModal.printBtn}</span>
            </button>
            <button onClick={onClose} className="btn-icon" aria-label="Cerrar ventana">
              <RiCloseLine size={22} />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Paper CV */}
        <div className="modal-body-scroll">
          <div className="cv-document-paper" id="printable-cv">
            {/* CV Header */}
            <div className="cv-doc-header">
              <h1 className="cv-doc-name">{t.personal.name}</h1>
              <div className="cv-doc-contact">
                <span>📍 {t.personal.location}</span>
                <a href={`tel:${t.personal.phone}`} style={{ color: 'inherit' }}>📞 {t.personal.phone}</a>
                <a href={`mailto:${t.personal.email}`} style={{ color: 'inherit' }}>✉️ {t.personal.email}</a>
                <a href={t.personal.linkedin} target="_blank" rel="noreferrer" style={{ color: '#0a66c2', fontWeight: 600 }}>💼 LinkedIn</a>
                <a href={t.personal.github} target="_blank" rel="noreferrer" style={{ color: '#111827', fontWeight: 600 }}>🐙 GitHub: {t.personal.githubUser}</a>
              </div>
            </div>

            {/* Profile Summary */}
            <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: '#334155', marginBottom: '1.5rem', textAlign: 'justify' }}>
              {t.personal.summary}
            </p>

            {/* Experiencia Profesional */}
            <h2 className="cv-doc-section-title">
              {lang === 'en' ? 'PROFESSIONAL EXPERIENCE' : 'EXPERIENCIA PROFESIONAL'}
            </h2>
            {t.experience.jobs.map((job, idx) => (
              <div key={idx} style={{ marginBottom: '1.25rem' }}>
                <div className="cv-doc-job-head">
                  <span>{job.company}</span>
                  <span>{job.location}</span>
                </div>
                <div className="cv-doc-subhead">
                  <span>{job.role}</span>
                  <span>{job.period}</span>
                </div>
                <ul className="cv-doc-bullets">
                  {job.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Proyectos Relevantes */}
            <h2 className="cv-doc-section-title">
              {lang === 'en' ? 'RELEVANT PROJECTS' : 'PROYECTOS RELEVANTES'}
            </h2>
            {t.projects.items.map((proj, pIdx) => (
              <div key={pIdx} style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontWeight: 800, fontSize: '0.98rem', color: '#0f172a' }}>
                  {proj.title} - {proj.subtitle}
                </div>
                <p style={{ fontSize: '0.9rem', color: '#334155', margin: '0.25rem 0 0.4rem 0', textAlign: 'justify' }}>
                  {proj.description}
                </p>
                <div style={{ fontSize: '0.85rem', color: '#475569' }}>
                  <strong>{lang === 'en' ? 'Technologies:' : 'Tecnologías:'}</strong> {proj.techStack.join(', ')}
                </div>
              </div>
            ))}

            {/* Educación */}
            <h2 className="cv-doc-section-title">
              {lang === 'en' ? 'EDUCATION' : 'EDUCACIÓN'}
            </h2>
            {t.education.degrees.map((deg, dIdx) => (
              <div key={dIdx} style={{ marginBottom: '0.85rem' }}>
                <div className="cv-doc-job-head">
                  <span>{deg.institution}</span>
                  <span>{deg.location}</span>
                </div>
                <div className="cv-doc-subhead">
                  <span>{deg.degree}</span>
                  <span>{deg.period}</span>
                </div>
              </div>
            ))}

            {/* Certificaciones y Actividades */}
            <h2 className="cv-doc-section-title">
              {lang === 'en' ? 'CERTIFICATIONS & ACTIVITIES' : 'CERTIFICACIONES Y ACTIVIDADES'}
            </h2>
            <ul className="cv-doc-bullets" style={{ columns: 2, columnGap: '2rem' }}>
              {t.education.certifications.map((c, cIdx) => (
                <li key={cIdx}>
                  <strong>{c.title}</strong> - {c.issuer}
                </li>
              ))}
            </ul>

            {/* Habilidades Adicionales */}
            <h2 className="cv-doc-section-title">
              {lang === 'en' ? 'ADDITIONAL SKILLS' : 'HABILIDADES ADICIONALES'}
            </h2>
            <div style={{ fontSize: '0.88rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {t.skills.categories.map((cat, sIdx) => (
                <div key={sIdx}>
                  <strong>{cat.name}:</strong> {cat.skills.join(', ')}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
