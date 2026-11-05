import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { animate, stagger } from 'animejs';
import { 
  RiCloseLine, 
  RiDownload2Line, 
  RiExternalLinkLine, 
  RiFilePdfLine,
  RiZoomInLine,
  RiZoomOutLine,
  RiRestartLine,
  RiLoader4Line,
  RiAlertLine
} from 'react-icons/ri';
import confetti from 'canvas-confetti';

// Configure PDF.js worker using Vite asset URL
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

/**
 * Individual Page Renderer using HTML5 Canvas & PDF.js
 * Compatible with all mobile browsers (Android Chrome, iOS Safari) and desktops/laptops.
 */
function PdfPageItem({ pageNumber, pdfDoc, zoom }) {
  const canvasRef = useRef(null);
  const renderTaskRef = useRef(null);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;

    const render = async () => {
      if (!pdfDoc || !canvasRef.current) return;

      try {
        setPageLoading(true);

        // Cancel previous render if still in progress
        if (renderTaskRef.current) {
          try {
            renderTaskRef.current.cancel();
          } catch {
            // Ignore cancellation error
          }
          renderTaskRef.current = null;
        }

        const page = await pdfDoc.getPage(pageNumber);
        if (isCancelled) return;

        // Base unscaled viewport (A4 is approx 595x842 pt)
        const unscaledViewport = page.getViewport({ scale: 1.0 });

        // High DPI sharpness (Retina/Mobile) capped at 2 for optimal memory/speed
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

        // Responsive width calculation
        const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 800;
        const isMobile = windowWidth < 640;
        
        // Base target width: on mobile fit screen width minus margins, on desktop comfortable 780px
        const baseWidth = isMobile 
          ? Math.max(280, windowWidth - 48)
          : Math.min(780, windowWidth - 96);

        const targetDisplayWidth = baseWidth * zoom;
        const renderScale = (targetDisplayWidth / unscaledViewport.width) * pixelRatio;
        const viewport = page.getViewport({ scale: renderScale });

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: false });
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const cssWidth = viewport.width / pixelRatio;
        const cssHeight = viewport.height / pixelRatio;

        canvas.style.width = `${cssWidth}px`;
        canvas.style.height = `${cssHeight}px`;

        const renderContext = {
          canvasContext: ctx,
          viewport: viewport
        };

        const task = page.render(renderContext);
        renderTaskRef.current = task;
        await task.promise;

        if (!isCancelled) {
          setPageLoading(false);
        }
      } catch (err) {
        if (err?.name !== 'RenderingCancelledException' && !isCancelled) {
          console.error(`Error rendering page ${pageNumber}:`, err);
          setPageLoading(false);
        }
      }
    };

    render();

    return () => {
      isCancelled = true;
      if (renderTaskRef.current) {
        try {
          renderTaskRef.current.cancel();
        } catch {
          // Ignore
        }
        renderTaskRef.current = null;
      }
    };
  }, [pdfDoc, pageNumber, zoom]);

  return (
    <div className="pdf-page-card" id={`pdf-page-${pageNumber}`}>
      <div className="pdf-page-tag">
        <span>{pageNumber}</span>
      </div>
      {pageLoading && (
        <div className="pdf-page-loading-overlay">
          <RiLoader4Line className="pdf-spin-icon" size={24} />
          <span>Renderizando pág. {pageNumber}...</span>
        </div>
      )}
      <canvas ref={canvasRef} className="pdf-page-canvas" />
    </div>
  );
}

export default function CvModal({ isOpen, onClose, t, lang }) {
  const modalRef = useRef(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [zoom, setZoom] = useState(1.0);

  const pdfUrl = '/CV_KennyPalacin.pdf';

  // Load PDF Document when modal opens
  useEffect(() => {
    let isMounted = true;
    let loadingTask = null;

    const loadDoc = async () => {
      try {
        loadingTask = pdfjsLib.getDocument(pdfUrl);
        const doc = await loadingTask.promise;
        if (isMounted) {
          setPdfDoc(doc);
          setNumPages(doc.numPages);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          console.error('Error loading PDF document:', err);
          setError(err?.message || 'Error al cargar el documento');
          setLoading(false);
        }
      }
    };

    loadDoc();

    return () => {
      isMounted = false;
      if (loadingTask) {
        try {
          loadingTask.destroy();
        } catch {
          // Ignore
        }
      }
    };
  }, [pdfUrl]);

  // Entrance animations and escape key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      if (modalRef.current) {
        animate(modalRef.current, {
          scale: [0.92, 1],
          opacity: [0, 1],
          translateY: [15, 0],
          duration: 380,
          ease: 'outBack'
        });

        const actions = modalRef.current.querySelectorAll('.pdf-action-btn, .pdf-close-btn');
        if (actions.length) {
          animate(actions, {
            opacity: [0, 1],
            translateX: [15, 0],
            delay: stagger(45, { start: 100 }),
            duration: 320,
            ease: 'outExpo'
          });
        }
      }
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleDownload = useCallback(() => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.5 },
      colors: ['#ef4444', '#8b5cf6', '#3b82f6', '#10b981']
    });
  }, []);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(2.0, +(prev + 0.15).toFixed(2)));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(0.6, +(prev - 0.15).toFixed(2)));
  };

  const handleResetZoom = () => {
    setZoom(1.0);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        ref={modalRef}
        className="modal-content-card pdf-modal" 
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
                {numPages > 0 && (
                  <span className="pdf-pages-badge">
                    {numPages} {lang === 'en' ? 'Pages' : 'Páginas'}
                  </span>
                )}
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
          {/* Main Scrollable Canvas Document Canvas View */}
          <div className="pdf-scroll-area">
            {loading && (
              <div className="pdf-state-box">
                <RiLoader4Line className="pdf-spin-icon" size={36} color="var(--accent-red)" />
                <div className="pdf-state-title">
                  {lang === 'en' ? 'Rendering CV preview...' : 'Cargando previsualización del CV...'}
                </div>
                <div className="pdf-state-desc">
                  {lang === 'en' 
                    ? 'Generating high-definition interactive view' 
                    : 'Generando vista interactiva de alta definición compatible con cualquier dispositivo'}
                </div>
              </div>
            )}

            {error && (
              <div className="pdf-state-box pdf-error-box">
                <RiAlertLine size={38} color="#ef4444" />
                <div className="pdf-state-title">
                  {lang === 'en' ? 'Preview unavailable directly' : 'No se pudo previsualizar automáticamente'}
                </div>
                <div className="pdf-state-desc">
                  {lang === 'en'
                    ? 'You can open the document directly in a new tab or download it to your device.'
                    : 'Puedes abrir el archivo directamente en una pestaña nueva o descargarlo en tu equipo.'}
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <a href={pdfUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
                    <RiExternalLinkLine size={16} />
                    <span>{t.cvModal?.openTabBtn || "Abrir en nueva pestaña"}</span>
                  </a>
                  <a href={pdfUrl} download="CV_KennyPalacin.pdf" onClick={handleDownload} className="btn btn-primary">
                    <RiDownload2Line size={16} />
                    <span>{t.cvModal?.downloadBtn || "Descargar PDF"}</span>
                  </a>
                </div>
              </div>
            )}

            {!loading && !error && pdfDoc && (
              <div className="pdf-pages-list">
                {Array.from({ length: numPages }, (_, index) => (
                  <PdfPageItem
                    key={index + 1}
                    pageNumber={index + 1}
                    pdfDoc={pdfDoc}
                    zoom={zoom}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Floating Zoom / Page Control Capsule */}
          {!loading && !error && pdfDoc && (
            <div className="pdf-floating-toolbar">
              <button 
                onClick={handleZoomOut} 
                disabled={zoom <= 0.6}
                className="pdf-toolbar-btn" 
                title={t.cvModal?.zoomOut || "Alejar"}
                aria-label="Zoom out"
              >
                <RiZoomOutLine size={16} />
              </button>
              
              <button 
                onClick={handleResetZoom}
                className="pdf-toolbar-zoom-label"
                title={t.cvModal?.resetZoom || "Restablecer zoom (100%)"}
              >
                {Math.round(zoom * 100)}%
              </button>

              <button 
                onClick={handleZoomIn} 
                disabled={zoom >= 2.0}
                className="pdf-toolbar-btn" 
                title={t.cvModal?.zoomIn || "Acercar"}
                aria-label="Zoom in"
              >
                <RiZoomInLine size={16} />
              </button>

              <div className="pdf-toolbar-divider" />

              <button 
                onClick={handleResetZoom} 
                className="pdf-toolbar-btn" 
                title={t.cvModal?.fitWidth || "Ajustar ancho"}
                aria-label="Reset zoom"
              >
                <RiRestartLine size={15} />
              </button>
            </div>
          )}

          {/* Quick Notice / Fallback footer strip */}
          <div className="pdf-fallback-strip">
            <span>{t.cvModal?.fallbackText || "¿Deseas ver el archivo en pantalla completa? También puedes abrirlo o descargarlo directamente."}</span>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
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
