import React from 'react';
import { 
  RiBriefcase4Line, 
  RiCalendarLine, 
  RiMapPin2Line, 
  RiCheckboxCircleLine 
} from 'react-icons/ri';

export default function Experience({ t }) {
  return (
    <section className="section-padding" id="experiencia" style={{ position: 'relative' }}>
      <div className="content-wrapper">
        {/* Section Header */}
        <div className="section-header animate__animated animate__fadeIn">
          <div className="section-tag">
            <RiBriefcase4Line size={15} />
            <span>{t.nav.experience}</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">{t.experience.title}</span>
          </h2>
          <p className="section-subtitle">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-wrapper">
          <div className="timeline-line" />

          {t.experience.jobs.map((job, index) => (
            <div key={index} className="timeline-item animate__animated animate__fadeInUp">
              <div className="timeline-marker" />
              
              <div className="experience-card">
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
