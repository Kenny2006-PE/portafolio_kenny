import React, { useState } from 'react';
import { 
  RiCpuLine,
  RiLayoutMasonryLine, 
  RiServerLine, 
  RiSmartphoneLine, 
  RiDatabase2Line, 
  RiToolsLine, 
  RiBrainLine, 
  RiGitBranchLine, 
  RiTranslate2, 
  RiSearch2Line,
  RiCodeLine
} from 'react-icons/ri';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiVuedotjs,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiPhp,
  SiLaravel,
  SiFlutter,
  SiDart,
  SiKotlin,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiGooglegemini,
  SiVercel
} from 'react-icons/si';

export default function Skills({ t }) {
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <RiLayoutMasonryLine size={19} />;
      case 'Server': return <RiServerLine size={19} />;
      case 'Smartphone': return <RiSmartphoneLine size={19} />;
      case 'Database': return <RiDatabase2Line size={19} />;
      case 'Wrench': return <RiToolsLine size={19} />;
      case 'Cpu': return <RiBrainLine size={19} />;
      case 'Workflow': return <RiGitBranchLine size={19} />;
      case 'Globe': return <RiTranslate2 size={19} />;
      default: return <RiCodeLine size={19} />;
    }
  };

  const getSkillLogo = (skill) => {
    const s = skill.toLowerCase();
    if (s.includes('html5')) return <SiHtml5 size={13} color="#E34F26" />;
    if (s.includes('css3')) return <SiCss size={13} color="#1572B6" />;
    if (s.includes('typescript')) return <SiTypescript size={13} color="#3178C6" />;
    if (s.includes('javascript')) return <SiJavascript size={13} color="#F7DF1E" />;
    if (s.includes('next.js')) return <SiNextdotjs size={13} color="#ffffff" />;
    if (s.includes('react')) return <SiReact size={13} color="#61DAFB" />;
    if (s.includes('angular')) return <SiAngular size={13} color="#DD0031" />;
    if (s.includes('vue.js')) return <SiVuedotjs size={13} color="#4FC08D" />;
    if (s.includes('bootstrap')) return <SiBootstrap size={13} color="#7952B3" />;
    if (s.includes('node.js')) return <SiNodedotjs size={13} color="#339933" />;
    if (s.includes('express')) return <SiExpress size={13} color="#ffffff" />;
    if (s.includes('spring boot')) return <SiSpringboot size={13} color="#6DB33F" />;
    if (s.includes('laravel')) return <SiLaravel size={13} color="#FF2D20" />;
    if (s.includes('php')) return <SiPhp size={13} color="#777BB4" />;
    if (s.includes('flutter')) return <SiFlutter size={13} color="#02569B" />;
    if (s.includes('dart')) return <SiDart size={13} color="#0175C2" />;
    if (s.includes('kotlin')) return <SiKotlin size={13} color="#7F52FF" />;
    if (s.includes('postgresql')) return <SiPostgresql size={13} color="#4169E1" />;
    if (s.includes('mysql')) return <SiMysql size={13} color="#4479A1" />;
    if (s.includes('mongodb')) return <SiMongodb size={13} color="#47A248" />;
    if (s.includes('sqlite')) return <SiSqlite size={13} color="#003B57" />;
    if (s.includes('github')) return <SiGithub size={13} color="#ffffff" />;
    if (s.includes('git')) return <SiGit size={13} color="#F05032" />;
    if (s.includes('postman')) return <SiPostman size={13} color="#FF6C37" />;
    if (s.includes('figma')) return <SiFigma size={13} color="#F24E1E" />;
    if (s.includes('gemini')) return <SiGooglegemini size={13} color="#ef4444" />;
    if (s.includes('vercel')) return <SiVercel size={13} color="#ffffff" />;
    return null;
  };

  return (
    <section className="section-padding" id="habilidades">
      <div className="content-wrapper">
        {/* Section Header */}
        <div className="section-header animate__animated animate__fadeIn">
          <div className="section-tag">
            <RiCpuLine size={15} />
            <span>{t.nav.skills}</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">{t.skills.title}</span>
          </h2>
          <p className="section-subtitle">
            {t.skills.subtitle}
          </p>

          {/* Quick Skill Search Bar for Recruiters */}
          <div style={{ maxWidth: '420px', margin: '1.5rem auto 0 auto', position: 'relative' }}>
            <RiSearch2Line size={17} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder={t.lang === 'en' ? "Search tech (e.g., React, Gemini, Spring)..." : "Buscar tecnología (ej: React, Gemini, Spring)..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{ width: '100%', paddingLeft: '2.6rem', borderRadius: '9999px' }}
            />
          </div>
        </div>

        {/* Skills Category Grid */}
        <div className="skills-grid">
          {t.skills.categories.map((category, idx) => {
            const matchesCategory = category.skills.filter(s => 
              s.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (searchQuery && matchesCategory.length === 0) return null;

            return (
              <div key={idx} className="skill-category-card animate__animated animate__fadeIn">
                <div className="skill-card-head">
                  <div className="skill-icon-badge">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3>{category.name}</h3>
                </div>

                <div className="skill-chips-wrap">
                  {category.skills.map((skill, sIdx) => {
                    const isMatched = searchQuery && skill.toLowerCase().includes(searchQuery.toLowerCase());
                    const logo = getSkillLogo(skill);

                    return (
                      <span 
                        key={sIdx} 
                        className="skill-pill"
                        style={isMatched ? {
                          background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.3), rgba(139, 92, 246, 0.3))',
                          borderColor: '#ef4444',
                          fontWeight: 700,
                          transform: 'scale(1.05)'
                        } : {}}
                      >
                        {logo}
                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
