import React, { useEffect } from 'react';
import { 
  RiCloseLine, 
  RiDownload2Line, 
  RiExternalLinkLine, 
  RiFilePdfLine
} from 'react-icons/ri';
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

  const handleDownload = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.5 },
      colors: ['#ef4444', '#8b5cf6', '#3b82f6', '#10b981']
    });
  };

  const pdfUrl = '/CV_KennyPalacin.pdf';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content-card pdf-modal magictime puffIn" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={t.cvModal?.title || "Previsualización del CV"}
      >
        {/* Header Bar */}
        <div className="modal-header-bar pdf-modal-header">
          <div className="pdf-modal-title-wrap">
            <div className="pdf-icon-badge">
              <RiFilePdfLine size={22} color="#ef4444" />
            </div>
            <div>
              <div className="pdf-doc-title">
                {t.cvModal?.title || "Currículum Vitae Oficial"}
              </div>
              <div className="pdf-doc-subtitle">
                <span>{t.cvModal?.fileName || "CV_KennyPalacin.pdf"}</span>
                <span className="pdf-badge">{t.cvModal?.badge || "PDF"}</span>
              </div>
            </div>
          </div>

          <div className="pdf-modal-actions">
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noreferrer"
              className="btn btn-secondary pdf-action-btn"
              title="Abrir en pestaña nueva"
            >
              <RiExternalLinkLine size={16} />
              <span className="btn-text-responsive">{t.cvModal?.openTabBtn || "Abrir pestaña"}</span>
            </a>

            <a 
              href={pdfUrl} 
              download="CV_KennyPalacin.pdf" 
              onClick={handleDownload}
              className="btn btn-primary pdf-action-btn" 
              title="Descargar documento PDF"
            >
              <RiDownload2Line size={16} />
              <span>{t.cvModal?.downloadBtn || t.nav.downloadCv || "Descargar PDF"}</span>
            </a>

            <button 
              onClick={onClose} 
              className="btn-icon pdf-close-btn" 
              aria-label="Cerrar vista previa"
              title={t.cvModal?.closeBtn || "Cerrar"}
            >
              <RiCloseLine size={22} />
            </button>
          </div>
        </div>

        {/* PDF Viewer Container */}
        <div className="pdf-viewer-container">
          <iframe
            src={`${pdfUrl}#view=FitH&toolbar=1`}
            title="Previsualización del CV en PDF"
            className="pdf-iframe"
          />

          {/* Quick Notice / Fallback footer strip */}
          <div className="pdf-fallback-strip">
            <span>{t.cvModal?.fallbackText || "¿Deseas ver el archivo en pantalla completa? También puedes abrirlo o descargarlo directamente."}</span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <a href={pdfUrl} target="_blank" rel="noreferrer" className="pdf-strip-link">
                {t.cvModal?.openTabBtn || "Abrir en nueva pestaña"} &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
