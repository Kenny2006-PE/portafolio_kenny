import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function Contact({ t }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#ef4444', '#8b5cf6', '#3b82f6', '#10b981']
    });

    const mailtoSubject = encodeURIComponent(`Contacto desde Portafolio: ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Hola Kenny,\n\nSoy ${formData.name} (${formData.email}).\n\n${formData.message}`);
    
    // Fallback opening user's mail client
    window.location.href = `mailto:${t.personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section className="section-padding" id="contacto">
      <div className="content-wrapper">
        <div className="contact-container-grid animate__animated animate__fadeIn">
          {/* Left Side: Direct Contact Details */}
          <div>
            <div className="section-tag" style={{ marginBottom: '1rem' }}>
              <Sparkles size={14} />
              <span>{t.nav.contact}</span>
            </div>
            
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
              <span className="gradient-text">{t.contact.title}</span>
            </h2>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '2rem' }}>
              {t.contact.subtitle}
            </p>

            <div className="contact-quick-list">
              {/* Email item */}
              <div className="contact-info-card">
                <div className="contact-info-icon" style={{ background: 'rgba(59, 130, 246, 0.12)', color: '#3b82f6' }}>
                  <Mail size={20} />
                </div>
                <div style={{ flexGrow: 1, overflow: 'hidden' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.contact.emailLabel}</div>
                  <div style={{ fontWeight: 600, fontSize: '0.92rem', wordBreak: 'break-all' }}>
                    {t.personal.email}
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(t.personal.email, 'email')}
                  className="btn-icon"
                  title="Copiar correo"
                  aria-label="Copiar correo"
                >
                  {copiedEmail ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone item */}
              <div className="contact-info-card">
                <div className="contact-info-icon" style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#10b981' }}>
                  <Phone size={20} />
                </div>
                <div style={{ flexGrow: 1 }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.contact.phoneLabel}</div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>
                    {t.personal.phone}
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(t.personal.phone, 'phone')}
                  className="btn-icon"
                  title="Copiar teléfono"
                  aria-label="Copiar teléfono"
                >
                  {copiedPhone ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location item */}
              <div className="contact-info-card">
                <div className="contact-info-icon" style={{ background: 'rgba(239, 68, 68, 0.12)', color: '#ef4444' }}>
                  <MapPin size={20} />
                </div>
                <div style={{ flexGrow: 1 }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.contact.locationLabel}</div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>
                    {t.personal.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Quick Form */}
          <div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label">{t.contact.form.name}</label>
                <input
                  type="text"
                  required
                  placeholder={t.contact.form.placeholderName}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t.contact.form.email}</label>
                <input
                  type="email"
                  required
                  placeholder={t.contact.form.placeholderEmail}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t.contact.form.message}</label>
                <textarea
                  required
                  rows="4"
                  placeholder={t.contact.form.placeholderMessage}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                <Send size={18} />
                <span>{t.contact.form.send}</span>
              </button>

              {submitted && (
                <div
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(16, 185, 129, 0.35)',
                    color: '#10b981',
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    marginTop: '0.5rem'
                  }}
                >
                  {t.contact.form.sentSuccess}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
