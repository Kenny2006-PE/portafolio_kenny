import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Sparkles, Layers, ShieldCheck, Map, Calendar, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
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
      case 'monia': return <Sparkles size={18} color="#ef4444" />;
      case 'marketmap': return <Map size={18} color="#3b82f6" />;
      case 'reseratec': return <Calendar size={18} color="#8b5cf6" />;
      default: return <Layers size={18} color="var(--accent-purple)" />;
    }
  };

  return (
    <section className="section-padding" id="proyectos">
      <div className="content-wrapper">
        {/* Section Header */}
        <div className="section-header animate__animated animate__fadeIn">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>{t.nav.projects}</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">{t.projects.title}</span>
          </h2>
          <p className="section-subtitle">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="projects-filter-bar">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid with 3D TiltCards */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <TiltCard key={project.id} maxTilt={10} scale={1.02} style={{ height: '100%', display: 'flex' }}>
              <div className="project-card animate__animated animate__fadeInUp" style={{ width: '100%', height: '100%' }}>
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
                      <GithubIcon size={17} />
                    </a>
                    <a
                      href={project.demo !== '#' ? project.demo : project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-icon"
                      title="Ver detalles del proyecto"
                    >
                      <ArrowUpRight size={17} />
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

                {/* Tech Stack Chips */}
                <div className="project-tech-list">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
