import React, { useEffect, useRef } from 'react';
import { 
  RiMapPin2Line, 
  RiPhoneLine, 
  RiMailLine, 
  RiLinkedinBoxFill, 
  RiGithubFill, 
  RiDownload2Line, 
  RiArrowRightLine, 
  RiWhatsappLine, 
  RiTerminalBoxLine, 
  RiCommandLine, 
  RiFileLine,
  RiVerifiedBadgeLine,
  RiCpuLine
} from 'react-icons/ri';
import { 
  SiGooglegemini, 
  SiNextdotjs, 
  SiReact, 
  SiSpringboot, 
  SiFlutter 
} from 'react-icons/si';
import { motion } from 'framer-motion';
import { animate, stagger } from 'animejs';
import TypedText from './TypedText';
import AnimatedStat from './AnimatedStat';
import TiltCard from './TiltCard';
import confetti from 'canvas-confetti';

export default function HeroCv({ t, onOpenCv }) {
  const codeLinesRef = useRef(null);

  useEffect(() => {
    if (codeLinesRef.current) {
      const lines = codeLinesRef.current.querySelectorAll('.code-line');
      animate(lines, {
        opacity: [0, 1],
        translateX: [-15, 0],
        delay: stagger(35, { start: 150 }),
        ease: 'outQuad',
        duration: 500
      });
    }
  }, []);
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
  };

  return (
    <section className="hero-cv-section" id="inicio">
      <div className="content-wrapper">
        <div className="hero-grid">
          {/* Left Column: CV Presentation & Intro */}
          <div className="animate__animated animate__fadeInLeft">
            {/* Developer Status Badge - No green dot, no AI sparkles */}
            <motion.div 
              className="hero-status-badge dev-status-capsule magictime puffIn"
              whileHover={{ scale: 1.03, y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <RiCommandLine size={15} className="status-dev-icon" />
              <span className="status-tag-prefix">// status:</span>
              <span className="status-text-content">{t.personal.badge}</span>
            </motion.div>

            {/* Name - Sober and bold */}
            <h1 className="hero-name">
              KENNY{' '}
              <span className="hero-name-accent">PALACIN CRISTOBAL</span>
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

            {/* Contact Pills / Direct CV Links with Remix Icons */}
            <div className="hero-contact-chips">
              <span className="contact-chip">
                <RiMapPin2Line size={16} color="#ef4444" />
                {t.personal.location}
              </span>
              <a href={`tel:${t.personal.phone}`} className="contact-chip" title="Llamar">
                <RiPhoneLine size={16} color="#10b981" />
                {t.personal.phone}
              </a>
              <a href={`mailto:${t.personal.email}`} className="contact-chip" title="Enviar correo">
                <RiMailLine size={16} color="#3b82f6" />
                {t.personal.email}
              </a>
              <a 
                href={t.personal.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="contact-chip"
                title="LinkedIn"
              >
                <RiLinkedinBoxFill size={17} color="#0a66c2" />
                LinkedIn
              </a>
              <a 
                href={t.personal.github} 
                target="_blank" 
                rel="noreferrer" 
                className="contact-chip"
                title="GitHub"
              >
                <RiGithubFill size={17} color="#8b5cf6" />
                {t.personal.githubUser}
              </a>
            </div>

            {/* Call to Actions with Sober Executive Buttons & Micro-interactions */}
            <div className="hero-cta-group">
              <motion.a 
                href="/CV_KennyPalacin.pdf"
                download="CV_KennyPalacin.pdf"
                onClick={triggerCelebration} 
                className="btn btn-primary"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <RiDownload2Line size={18} />
                <span>{t.nav.downloadCv}</span>
                <RiFileLine size={16} />
              </motion.a>
              
              <motion.a 
                href="#proyectos" 
                className="btn btn-secondary"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <span>{t.nav.projects}</span>
                <RiArrowRightLine size={17} />
              </motion.a>

              <motion.a 
                href={t.personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <RiWhatsappLine size={18} />
                <span>WhatsApp</span>
              </motion.a>
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
                    <RiTerminalBoxLine size={18} color="var(--accent-purple)" />
                  </div>
                </div>

                {/* Live Code Representation with animejs stagger entrance */}
                <div className="code-snippet" ref={codeLinesRef}>
                  <div className="code-line"><span className="code-keyword">const</span> <span className="code-prop">engineer</span> = &#123;</div>
                  <div className="code-line" style={{ paddingLeft: '1.2rem' }}>
                    <span className="code-prop">name</span>: <span className="code-str">"Kenny Palacin Cristobal"</span>,
                  </div>
                  <div className="code-line" style={{ paddingLeft: '1.2rem' }}>
                    <span className="code-prop">title</span>: <span className="code-str">"Full Stack & AI Developer"</span>,
                  </div>
                  <div className="code-line" style={{ paddingLeft: '1.2rem' }}>
                    <span className="code-prop">education</span>: [
                  </div>
                  <div className="code-line" style={{ paddingLeft: '2.4rem' }}>
                    <span className="code-str">"USIL (Ingeniería de Software)"</span>,
                  </div>
                  <div className="code-line" style={{ paddingLeft: '2.4rem' }}>
                    <span className="code-str">"TECSUP (Diseño & Desarrollo Soft.)"</span>
                  </div>
                  <div className="code-line" style={{ paddingLeft: '1.2rem' }}>],</div>
                  <div className="code-line" style={{ paddingLeft: '1.2rem' }}>
                    <span className="code-prop">recentRole</span>: &#123;
                  </div>
                  <div className="code-line" style={{ paddingLeft: '2.4rem' }}>
                    <span className="code-prop">company</span>: <span className="code-str">"QTECH EXPERIENCE"</span>,
                  </div>
                  <div className="code-line" style={{ paddingLeft: '2.4rem' }}>
                    <span className="code-prop">impact</span>: <span className="code-str">"Real-time AJAX messaging & Ops"</span>
                  </div>
                  <div className="code-line" style={{ paddingLeft: '1.2rem' }}>&#125;,</div>
                  <div className="code-line" style={{ paddingLeft: '1.2rem' }}>
                    <span className="code-prop">coreStack</span>: [
                  </div>
                  <div className="code-line" style={{ paddingLeft: '2.4rem' }}>
                    <span className="code-str">"React"</span>, <span className="code-str">"Next.js"</span>, <span className="code-str">"Spring Boot"</span>,
                  </div>
                  <div className="code-line" style={{ paddingLeft: '2.4rem' }}>
                    <span className="code-str">"Flutter"</span>, <span className="code-str">"Gemini AI"</span>, <span className="code-str">"MySQL"</span>
                  </div>
                  <div className="code-line" style={{ paddingLeft: '1.2rem' }}>],</div>
                  <div className="code-line" style={{ paddingLeft: '1.2rem' }}>
                    <span className="code-prop">englishLevel</span>: <span className="code-str">"B2 Upper-Intermediate"</span>,
                  </div>
                  <div className="code-line" style={{ paddingLeft: '1.2rem' }}>
                    <span className="code-prop">github</span>: <span className="code-str">"Kenny2006-PE"</span>,
                  </div>
                  <div className="code-line" style={{ paddingLeft: '1.2rem' }}>
                    <span className="code-prop">linkedin</span>: <span className="code-str">"kenny-palacin"</span>,
                  </div>
                  <div className="code-line" style={{ paddingLeft: '1.2rem' }}>
                    <span className="code-prop">openToWork</span>: <span className="code-keyword">true</span>
                  </div>
                  <div className="code-line">&#125;;</div>
                </div>

                {/* Floating Official Tech Brand Badges with framer-motion */}
                <div className="card-tech-badges">
                  <motion.span 
                    className="tech-tag-glow float-badge-1" 
                    style={{ borderColor: 'rgba(239, 68, 68, 0.4)', color: '#f87171' }}
                    whileHover={{ scale: 1.12, y: -4, boxShadow: '0 8px 24px rgba(239, 68, 68, 0.45)' }}
                    transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                  >
                    <RiCpuLine size={14} color="#f87171" /> Gemini 1.5 AI
                  </motion.span>
                  <motion.span 
                    className="tech-tag-glow float-badge-2" 
                    style={{ borderColor: 'rgba(59, 130, 246, 0.4)', color: '#60a5fa' }}
                    whileHover={{ scale: 1.12, y: -4, boxShadow: '0 8px 24px rgba(59, 130, 246, 0.45)' }}
                    transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                  >
                    <SiNextdotjs size={14} color="#60a5fa" /> Next.js & React
                  </motion.span>
                  <motion.span 
                    className="tech-tag-glow float-badge-3" 
                    style={{ borderColor: 'rgba(139, 92, 246, 0.4)', color: '#c084fc' }}
                    whileHover={{ scale: 1.12, y: -4, boxShadow: '0 8px 24px rgba(139, 92, 246, 0.45)' }}
                    transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                  >
                    <SiSpringboot size={14} color="#10b981" /> Spring Boot
                  </motion.span>
                  <motion.span 
                    className="tech-tag-glow float-badge-4" 
                    style={{ borderColor: 'rgba(56, 189, 248, 0.4)', color: '#38bdf8' }}
                    whileHover={{ scale: 1.12, y: -4, boxShadow: '0 8px 24px rgba(56, 189, 248, 0.45)' }}
                    transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                  >
                    <SiFlutter size={14} color="#38bdf8" /> Flutter & Dart
                  </motion.span>
                  <motion.span 
                    className="tech-tag-glow float-badge-5" 
                    style={{ borderColor: 'rgba(244, 63, 94, 0.4)', color: '#fb7185' }}
                    whileHover={{ scale: 1.12, y: -4, boxShadow: '0 8px 24px rgba(244, 63, 94, 0.45)' }}
                    transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                  >
                    <RiVerifiedBadgeLine size={14} color="#fb7185" /> Scrum Certified
                  </motion.span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
