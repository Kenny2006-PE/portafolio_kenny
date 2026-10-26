import React, { useState } from 'react';
import { 
  RiMailSendLine, 
  RiWhatsappLine, 
  RiGithubFill, 
  RiLinkedinBoxFill, 
  RiFileCopyLine, 
  RiCheckLine,
  RiArrowRightUpLine
} from 'react-icons/ri';
import confetti from 'canvas-confetti';

export default function Contact({ t }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(t.personal.email);
    setCopiedEmail(true);

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#ef4444', '#8b5cf6', '#3b82f6', '#10b981']
    });

    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const getChannelIcon = (type) => {
    switch (type) {
      case 'github': return <RiGithubFill size={19} />;
      case 'linkedin': return <RiLinkedinBoxFill size={19} />;
      case 'whatsapp': return <RiWhatsappLine size={19} />;
      default: return <RiArrowRightUpLine size={19} />;
    }
  };

  return (
    <section className="section-padding" id="contacto">
      <div className="content-wrapper">
        <div className="contact-developer-section animate__animated animate__fadeIn">
          <div className="contact-dev-grid">
            {/* Left Column: Heading, Punchline & Action Pills */}
            <div style={{ position: 'relative', zIndex: 4 }}>
              <span className="contact-mono-tag">{t.contact.tag}</span>
              
              <h2 className="contact-main-heading">{t.contact.title}</h2>

              <div className="contact-punchline">
                {t.contact.punchline}
              </div>

              <p className="contact-desc-text">
                {t.contact.desc}
              </p>

              {/* Action Buttons Row */}
              <div className="contact-action-pills">
                <a 
                  href={`mailto:${t.personal.email}?subject=Contacto%20desde%20Portafolio`} 
                  className="btn-pill-red"
                >
                  {t.contact.writeEmailBtn}
                </a>

                <button 
                  onClick={handleCopyEmail} 
                  className="btn-pill-outline"
                  aria-label="Copiar correo electrónico"
                >
                  {copiedEmail ? (
                    <>
                      <RiCheckLine size={18} color="#10b981" />
                      <span style={{ color: '#10b981', fontFamily: "'JetBrains Mono', monospace" }}>{t.contact.copiedEmailText}</span>
                    </>
                  ) : (
                    <>
                      <RiFileCopyLine size={18} />
                      <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>{t.contact.copyEmailBtn}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column: Direct Channels Stack & Glowing Mail Indicator */}
            <div className="contact-channels-column">
              {/* Top-Right Glowing Red Mail Indicator */}
              <div className="contact-floating-mail-box" title="Disponible para mensajes">
                <RiMailSendLine size={24} />
              </div>

              {/* Stack of Developer Channel Cards with Monospace Typography */}
              {t.contact.channels.map((channel, idx) => (
                <a
                  key={idx}
                  href={channel.url}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-channel-bar"
                  title={`Abrir ${channel.label}`}
                >
                  <span className="channel-user-handle">{channel.user}</span>
                  <span className="channel-tag-pill">
                    {getChannelIcon(channel.type)}
                    <span>{channel.label}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Monospace Meta Strip */}
          <div className="contact-footer-strip" style={{ position: 'relative', zIndex: 4 }}>
            <a href={`mailto:${t.personal.email}`}>{t.personal.email}</a>
            <a href={`tel:${t.personal.phone}`}>{t.personal.phone}</a>
            <span>{t.personal.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
