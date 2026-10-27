import React, { useState } from 'react';
import { 
  RiFolder3Line, 
  RiGithubFill, 
  RiArrowRightUpLine, 
  RiCompassDiscoverLine, 
  RiCalendarScheduleLine,
  RiCodeSSlashLine,
  RiWallet3Line
} from 'react-icons/ri';
import { 
  SiGooglegemini, 
  SiReact, 
  SiNextdotjs, 
  SiFlutter, 
  SiSpringboot, 
  SiMysql, 
  SiSqlite, 
  SiGit, 
  SiNodedotjs, 
  SiTypescript 
} from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import TiltCard from './TiltCard';

export default function Projects({ t }) {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = [
    { id: "Todos", label: t.projects.categories[0] },
    { id: "IA & Mobile", label: t.projects.categories[1] },
    { id: "Web & Full Stack", label: t.projects.categories[2] },
    { id: "APIs & Backend", label: t.projects.categories[3] },
  ];

  const filteredProjects = activeCategory === "Todos"
    ? t.projects.items
    : t.projects.items.filter(item => {
        if (activeCategory === "IA & Mobile") return item.category.includes("IA") || item.category.includes("Mobile");
        if (activeCategory === "Web & Full Stack") return item.category.includes("Web") || item.category.includes("Full");
        if (activeCategory === "APIs & Backend") return item.techStack.some(tech => tech.includes("Spring") || tech.includes("REST") || tech.includes("Node") || tech.includes("Express"));
        return true;
      });

  const getProjectIcon = (id) => {
    switch (id) {
      case 'monia': return <RiWallet3Line size={20} color="#ef4444" />;
      case 'marketmap': return <RiCompassDiscoverLine size={20} color="#3b82f6" />;
      case 'reseratec': return <RiCalendarScheduleLine size={20} color="#8b5cf6" />;
      default: return <RiCodeSSlashLine size={19} color="var(--accent-purple)" />;
    }
  };

  const getTechIcon = (tech) => {
    if (tech.includes('React')) return <SiReact size={12} color="#61dafb" />;
    if (tech.includes('Next.js')) return <SiNextdotjs size={12} color="#ffffff" />;
    if (tech.includes('Flutter')) return <SiFlutter size={12} color="#02569B" />;
    if (tech.includes('Spring')) return <SiSpringboot size={12} color="#6DB33F" />;
    if (tech.includes('MySQL')) return <SiMysql size={12} color="#4479A1" />;
    if (tech.includes('Gemini')) return <SiGooglegemini size={12} color="#ef4444" />;
    if (tech.includes('SQLite')) return <SiSqlite size={12} color="#003B57" />;
    if (tech.includes('Git')) return <SiGit size={12} color="#F05032" />;
    if (tech.includes('Node')) return <SiNodedotjs size={12} color="#339933" />;
    if (tech.includes('TypeScript')) return <SiTypescript size={12} color="#3178C6" />;
    return null;
  };

  return (
    <section className="section-padding" id="proyectos">
      <div className="content-wrapper">
        {/* Section Header */}
        <div className="section-header animate__animated animate__fadeIn">
          <div className="section-tag">
            <RiFolder3Line size={15} />
            <span>{t.nav.projects}</span>
          </div>
          <h2 className="section-title">
            {t.projects.title}
          </h2>
          <p className="section-subtitle">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter Bar with framer-motion sliding pill */}
        <div className="projects-filter-bar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                className={`filter-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                style={{ position: 'relative' }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="filter-btn-active-pill"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <span style={{ position: 'relative', zIndex: 2 }}>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid with 3D TiltCards & AnimatePresence */}
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{ height: '100%' }}
              >
                <TiltCard key={project.id} maxTilt={10} scale={1.02} style={{ height: '100%', display: 'flex' }}>
                  <div className="project-card" style={{ width: '100%', height: '100%' }}>
                    <div className="project-top-row">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        {getProjectIcon(project.id)}
                        <span className="project-category-tag">{project.badge}</span>
                      </div>

                      <div className="project-links">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-icon"
                          title="Ver repositorio en GitHub"
                        >
                          <RiGithubFill size={19} />
                        </a>
                        <a
                          href={project.demo !== '#' ? project.demo : project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-icon"
                          title="Ver detalles del proyecto"
                        >
                          <RiArrowRightUpLine size={19} />
                        </a>
                      </div>
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>

                    <p className="project-description">
                      {project.description}
                    </p>

                    {/* Key Architecture / Impact Highlight */}
                    <div className="project-metrics-box">
                      <strong>Highlight:</strong> {project.metrics}
                    </div>

                    {/* Tech Stack Chips with Brand Logos */}
                    <div className="project-tech-list">
                      {project.techStack.map((tech, index) => {
                        const icon = getTechIcon(tech);
                        return (
                          <span key={index} className="tech-chip" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                            {icon}
                            <span>{tech}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
