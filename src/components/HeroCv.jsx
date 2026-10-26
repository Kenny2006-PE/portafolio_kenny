import React from 'react';
import { 
  FileText, 
  Download, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  Code2, 
  Send,
  Zap,
  Flame
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import TypedText from './TypedText';
import AnimatedStat from './AnimatedStat';
import TiltCard from './TiltCard';
import confetti from 'canvas-confetti';

export default function HeroCv({ t, onOpenCv }) {
  const triggerCelebration = () => {
    // Multi-burst fireworks confetti
    const count = 200;
    const defaults = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#ef4444', '#8b5cf6']
    });
    fire(0.2, {
      spread: 60,
      colors: ['#3b82f6', '#ffffff']
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ['#ef4444', '#8b5cf6', '#3b82f6']
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ['#ec4899', '#f59e0b']
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ['#10b981', '#3b82f6']
    });

    onOpenCv();
  };

  return (
    <section className="hero-cv-section" id="inicio">
      <div className="content-wrapper">
        <div className="hero-grid">
          {/* Left Column: CV Presentation & Intro */}
          <div className="animate__animated animate__fadeInLeft">
            {/* Availability Badge with pulsing radar effect */}
            <div className="hero-status-badge animate__animated animate__pulse animate__infinite animate__slower">
              <span className="pulse-dot" />
              <span>{t.personal.badge}</span>
              <Sparkles size={13} color="#10b981" />
            </div>

            {/* Name with Dynamic Shimmer Gradient */}
            <h1 className="hero-name">
              KENNY{' '}
              <span className="gradient-text text-shimmer">PALACIN CRISTOBAL</span>
            </h1>

            {/* Dynamic Typewriter Roles via Typed.js */}
            <div className="hero-roles-bar">
              <span style={{ color: 'var(--accent-red)', fontWeight: 800 }}>&gt;</span>
              <TypedText strings={t.personal.roles} />
            </div>

            {/* Professional Summary (from CV) */}
            <p className="hero-summary-text">
              {t.personal.summary}
            </p>

            {/* Contact Pills / Direct CV Links with hover microinteractions */}
            <div className="hero-contact-chips">
              <span className="contact-chip">
                <MapPin size={14} color="#ef4444" />
                {t.personal.location}
              </span>
              <a href={`tel:${t.personal.phone}`} className="contact-chip" title="Llamar o WhatsApp">
                <Phone size={14} color="#10b981" />
                {t.personal.phone}
              </a>
              <a href={`mailto:${t.personal.email}`} className="contact-chip" title="Enviar correo">
                <Mail size={14} color="#3b82f6" />
                {t.personal.email}
              </a>
              <a 
                href={t.personal.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="contact-chip"
                title="LinkedIn"
              >
                <LinkedinIcon size={14} color="#0a66c2" />
                LinkedIn
              </a>
              <a 
                href={t.personal.github} 
                target="_blank" 
                rel="noreferrer" 
                className="contact-chip"
                title="GitHub"
              >
                <GithubIcon size={14} color="#8b5cf6" />
                GitHub
              </a>
            </div>

            {/* Call to Actions with Glowing Buttons & Ripple */}
            <div className="hero-cta-group">
              <button onClick={triggerCelebration} className="btn btn-primary btn-glow-pulse">
                <Download size={18} />
                <span>{t.nav.downloadCv} / {t.nav.viewCv}</span>
                <Flame size={16} color="#fbbf24" />
              </button>
              
              <a href="#proyectos" className="btn btn-secondary">
                <span>{t.nav.projects}</span>
                <ArrowRight size={17} />
              </a>

              <a 
                href={t.personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-red"
              >
                <Send size={16} />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* CV Highlights Row with animejs Counting Stats */}
            <div className="hero-stats-row">
              {t.personal.stats.map((stat, idx) => (
                <AnimatedStat
                  key={idx}
                  value={stat.value}
                  label={stat.label}
                  desc={stat.desc}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Holographic 3D Interactive Terminal Card */}
          <div className="animate__animated animate__fadeInRight">
            <TiltCard maxTilt={14} scale={1.03}>
              <div className="hero-hologram-card">
                {/* Terminal Window Header */}
                <div className="card-terminal-header">
                  <div className="terminal-dots">
                    <div className="terminal-dot red" />
                    <div className="terminal-dot yellow" />
                    <div className="terminal-dot green" />
                  </div>
                  <div className="terminal-title">kenny-palacin-cv.json</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Zap size={13} color="var(--accent-red)" />
                    <Terminal size={15} color="var(--accent-purple)" />
                  </div>
                </div>

                {/* Live Code Representation */}
                <div className="code-snippet">
                  <div><span className="code-keyword">const</span> <span className="code-prop">engineer</span> = &#123;</div>
                  <div style={{ paddingLeft: '1.2rem' }}>
                    <span className="code-prop">name</span>: <span className="code-str">"Kenny Palacin Cristobal"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.2rem' }}>
                    <span className="code-prop">title</span>: <span className="code-str">"Full Stack & AI Developer"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.2rem' }}>
                    <span className="code-prop">education</span>: [
                  </div>
                  <div style={{ paddingLeft: '2.4rem' }}>
                    <span className="code-str">"USIL (Ingeniería de Software)"</span>,
                  </div>
                  <div style={{ paddingLeft: '2.4rem' }}>
                    <span className="code-str">"TECSUP (Diseño & Desarrollo Soft.)"</span>
                  </div>
                  <div style={{ paddingLeft: '1.2rem' }}>],</div>
                  <div style={{ paddingLeft: '1.2rem' }}>
                    <span className="code-prop">recentRole</span>: &#123;
                  </div>
                  <div style={{ paddingLeft: '2.4rem' }}>
                    <span className="code-prop">company</span>: <span className="code-str">"QTECH EXPERIENCE"</span>,
                  </div>
                  <div style={{ paddingLeft: '2.4rem' }}>
                    <span className="code-prop">impact</span>: <span className="code-str">"Real-time AJAX messaging & Ops"</span>
                  </div>
                  <div style={{ paddingLeft: '1.2rem' }}>&#125;,</div>
                  <div style={{ paddingLeft: '1.2rem' }}>
                    <span className="code-prop">coreStack</span>: [
                  </div>
                  <div style={{ paddingLeft: '2.4rem' }}>
                    <span className="code-str">"React"</span>, <span className="code-str">"Next.js"</span>, <span className="code-str">"Spring Boot"</span>,
                  </div>
                  <div style={{ paddingLeft: '2.4rem' }}>
                    <span className="code-str">"Flutter"</span>, <span className="code-str">"Gemini AI"</span>, <span className="code-str">"MySQL"</span>
                  </div>
                  <div style={{ paddingLeft: '1.2rem' }}>],</div>
                  <div style={{ paddingLeft: '1.2rem' }}>
                    <span className="code-prop">englishLevel</span>: <span className="code-str">"B2 Upper-Intermediate"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.2rem' }}>
                    <span className="code-prop">github</span>: <span className="code-str">"Kenny2006-PE"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.2rem' }}>
                    <span className="code-prop">linkedin</span>: <span className="code-str">"kenny-palacin"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.2rem' }}>
                    <span className="code-prop">openToWork</span>: <span className="code-keyword">true</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Floating Tech Badges with Floating Animation */}
                <div className="card-tech-badges">
                  <span className="tech-tag-glow float-badge-1" style={{ borderColor: 'rgba(239, 68, 68, 0.4)', color: '#f87171' }}>
                    <Sparkles size={12} /> Gemini 1.5 AI
                  </span>
                  <span className="tech-tag-glow float-badge-2" style={{ borderColor: 'rgba(59, 130, 246, 0.4)', color: '#60a5fa' }}>
                    <Code2 size={12} /> Next.js & React
                  </span>
                  <span className="tech-tag-glow float-badge-3" style={{ borderColor: 'rgba(139, 92, 246, 0.4)', color: '#c084fc' }}>
                    <CheckCircle2 size={12} /> Spring Boot
                  </span>
                  <span className="tech-tag-glow float-badge-4" style={{ borderColor: 'rgba(56, 189, 248, 0.4)', color: '#38bdf8' }}>
                    Flutter & Dart
                  </span>
                  <span className="tech-tag-glow float-badge-5" style={{ borderColor: 'rgba(244, 63, 94, 0.4)', color: '#fb7185' }}>
                    Scrum Certified
                  </span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
