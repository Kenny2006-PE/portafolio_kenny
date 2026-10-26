import React, { useState } from 'react';
import { 
  RiMailSendLine, 
  RiWhatsappLine, 
  RiGithubFill, 
  RiLinkedinBoxFill, 
  RiFileCopyLine, 
  RiCheckLine,
  RiMapPin2Line,
  RiTerminalBoxLine,
  RiMailLine
} from 'react-icons/ri';
import confetti from 'canvas-confetti';

export default function Contact({ t }) {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);

    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#ef4444', '#8b5cf6', '#3b82f6', '#10b981']
    });

    setTimeout(() => setCopiedId(null), 2000);
  };

  const getChannelIcon = (type) => {
    switch (type) {
      case 'github': return <RiGithubFill size={19} />;
      case 'linkedin': return <RiLinkedinBoxFill size={19} />;
      case 'whatsapp': return <RiWhatsappLine size={19} />;
      case 'email': return <RiMailSendLine size={19} />;
      default: return <RiMailSendLine size={19} />;
    }
  };

  return (
    <section className="section-padding" id="contacto">
      <div className="content-wrapper">
        {/* Section Header */}
        <div className="section-header animate__animated animate__fadeIn">
          <div className="section-tag">
            <RiTerminalBoxLine size={15} />
            <span>// 05 {t.nav.contact.toUpperCase()}</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">{t.contact.title}</span>
          </h2>
          <p className="section-subtitle">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Developer CMD Terminal Container */}
        <div className="contact-terminal-wrapper animate__animated animate__fadeInUp">
          <div className="contact-terminal-card">
            {/* Terminal Window Header */}
            <div className="terminal-card-header">
              <div className="terminal-window-controls">
                <span className="term-dot close" />
                <span className="term-dot minimize" />
                <span className="term-dot maximize" />
              </div>
              <div className="terminal-window-title">
                {t.contact.terminalUser}: {t.contact.terminalPath}
              </div>
              <div className="terminal-status-badge">
                <span className="status-live-dot" />
                <span>{t.contact.statusText}</span>
              </div>
            </div>

            {/* Terminal Content Body */}
            <div className="terminal-card-body">
              {/* Command execution line */}
              <div className="terminal-prompt-row">
                <span className="prompt-host">{t.contact.terminalUser}</span>
                <span className="prompt-colon">:</span>
                <span className="prompt-dir">{t.contact.terminalPath}</span>
                <span className="prompt-dollar">$</span>
                <span className="prompt-command">{t.contact.terminalCmd}</span>
                <span className="prompt-cursor">_</span>
              </div>

              {/* Channels List (CMD Style Horizontal Bars) */}
              <div className="cmd-channels-stack">
                {t.contact.channels.map((channel) => (
                  <div key={channel.id} className="cmd-channel-row">
                    {/* Left: User handle in programming monospace */}
                    <div className="cmd-user-handle">
                      <span className="cmd-prompt-symbol">&gt;</span>
                      <span className="cmd-handle-text">{channel.user}</span>
                    </div>

                    {/* Right: Pill action buttons */}
                    <div className="cmd-row-actions">
                      {/* Direct External Link */}
                      <a
                        href={channel.url}
                        target="_blank"
                        rel="noreferrer"
                        className="cmd-pill-btn primary"
                        title={channel.actionText}
                      >
                        {getChannelIcon(channel.type)}
                        <span>{channel.actionText}</span>
                      </a>

                      {/* Copy action for Email and WhatsApp */}
                      {(channel.type === 'email' || channel.type === 'whatsapp') && (
                        <button
                          onClick={() => handleCopy(channel.user, channel.id)}
                          className={`cmd-pill-btn copy ${copiedId === channel.id ? 'is-copied' : ''}`}
                          title={t.contact.copyBtn}
                          aria-label={`Copiar ${channel.label}`}
                        >
                          {copiedId === channel.id ? (
                            <>
                              <RiCheckLine size={15} color="#10b981" />
                              <span style={{ color: '#10b981' }}>{t.contact.copiedText}</span>
                            </>
                          ) : (
                            <>
                              <RiFileCopyLine size={14} />
                              <span>{t.contact.copyBtn}</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Terminal Bottom Monospace Strip */}
              <div className="cmd-terminal-footer-strip">
                <div 
                  className="footer-strip-item copyable"
                  onClick={() => handleCopy(t.personal.email, 'footer-email')}
                  title="Copiar email"
                >
                  <RiMailLine size={14} color="var(--accent-red)" />
                  <span>{t.personal.email}</span>
                  {copiedId === 'footer-email' && <span className="mini-copied">{t.contact.copiedText}</span>}
                </div>

                <div className="footer-strip-separator">/</div>

                <div 
                  className="footer-strip-item copyable"
                  onClick={() => handleCopy(t.personal.phone, 'footer-phone')}
                  title="Copiar teléfono"
                >
                  <RiWhatsappLine size={14} color="#10b981" />
                  <span>{t.personal.phone}</span>
                  {copiedId === 'footer-phone' && <span className="mini-copied">{t.contact.copiedText}</span>}
                </div>

                <div className="footer-strip-separator">/</div>

                <div className="footer-strip-item location">
                  <RiMapPin2Line size={14} color="var(--accent-blue)" />
                  <span>{t.personal.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
