import React, { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import { 
  RiBriefcase4Line, 
  RiCalendarLine, 
  RiMapPin2Line, 
  RiCheckboxCircleLine 
} from 'react-icons/ri';

export default function Experience({ t }) {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated && sectionRef.current) {
          setHasAnimated(true);

          // 1. Draw vertical timeline line downwards
          const line = sectionRef.current.querySelector('.timeline-line');
          if (line) {
            line.style.transformOrigin = 'top center';
            animate(line, {
              scaleY: [0, 1],
              duration: 900,
              ease: 'easeOutQuad'
            });
          }

          // 2. Pop timeline markers
          const markers = sectionRef.current.querySelectorAll('.timeline-marker');
          if (markers.length) {
            animate(markers, {
              scale: [0, 1.35, 1],
              opacity: [0, 1],
              delay: stagger(200, { start: 200 }),
              duration: 550,
              ease: 'outBack'
            });
          }

          // 3. Stagger slide-in experience cards
          const cards = sectionRef.current.querySelectorAll('.experience-card');
          if (cards.length) {
            animate(cards, {
              translateX: [35, 0],
              opacity: [0, 1],
              delay: stagger(200, { start: 250 }),
              duration: 650,
              ease: 'outCubic'
            });
          }

          // 4. Cascade bullets
          const bullets = sectionRef.current.querySelectorAll('.exp-bullet-item');
          if (bullets.length) {
            animate(bullets, {
              translateX: [-10, 0],
              opacity: [0, 1],
              delay: stagger(35, { start: 400 }),
              duration: 450,
              ease: 'outExpo'
            });
          }
        }
      },
      { threshold: 0.15 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [hasAnimated]);

  const handleCardMouseEnter = (e) => {
    const item = e.currentTarget.closest('.timeline-item');
    if (item) {
      const marker = item.querySelector('.timeline-marker');
      if (marker) {
        animate(marker, {
          scale: [1, 1.4, 1.25],
          duration: 350,
          ease: 'outBack'
        });
      }
    }
  };

  const handleCardMouseLeave = (e) => {
    const item = e.currentTarget.closest('.timeline-item');
    if (item) {
      const marker = item.querySelector('.timeline-marker');
      if (marker) {
        animate(marker, {
          scale: 1,
          duration: 300,
          ease: 'outExpo'
        });
      }
    }
  };

  return (
    <section className="section-padding" id="experiencia" ref={sectionRef} style={{ position: 'relative' }}>
      <div className="content-wrapper">
        {/* Section Header */}
        <div className="section-header animate__animated animate__fadeIn">
          <div className="section-tag">
            <RiBriefcase4Line size={15} />
            <span>{t.nav.experience}</span>
          </div>
          <h2 className="section-title">
            {t.experience.title}
          </h2>
          <p className="section-subtitle">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-wrapper">
          <div className="timeline-line" />

          {t.experience.jobs.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker" />
              
              <div 
                className="experience-card"
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{job.role}</h3>
                    <div className="exp-company">
                      <span>{job.company}</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>•</span>
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                        <RiMapPin2Line size={14} color="#ef4444" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="exp-period-badge">
                      <RiCalendarLine size={14} style={{ display: 'inline', marginRight: '4px' }} />
                      {job.period}
                    </span>
                  </div>
                </div>

                {/* Achievement Bullets */}
                <ul className="exp-bullets">
                  {job.highlights.map((bullet, bIndex) => (
                    <li key={bIndex} className="exp-bullet-item">
                      <RiCheckboxCircleLine size={17} className="bullet-icon" color="var(--accent-purple)" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="exp-tech-tags">
                  {job.technologies.map((tech, tIndex) => (
                    <span key={tIndex} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
