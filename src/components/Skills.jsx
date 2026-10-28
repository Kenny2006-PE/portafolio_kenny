import React, { useState, useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { 
  RiCpuLine,
  RiLayoutMasonryLine, 
  RiServerLine, 
  RiSmartphoneLine, 
  RiDatabase2Line, 
  RiToolsLine, 
  RiGitBranchLine, 
  RiTranslate2, 
  RiSearch2Line,
  RiCloseLine,
  RiCodeLine
} from 'react-icons/ri';
import { motion } from 'framer-motion';
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
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const quickFilters = ['React', 'Next.js', 'Spring Boot', 'Flutter', 'Gemini AI', 'MySQL'];

  const totalMatches = searchQuery ? t.skills.categories.reduce((acc, cat) => {
    return acc + cat.skills.filter(s => s.toLowerCase().includes(searchQuery.toLowerCase())).length;
  }, 0) : 0;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && document.activeElement !== inputRef.current && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape' && document.activeElement === inputRef.current) {
        setSearchQuery('');
        inputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated && skillsSectionRef.current) {
          setHasAnimated(true);

          // 1. Stagger category cards
          const cards = skillsSectionRef.current.querySelectorAll('.skill-category-card');
          if (cards.length) {
            animate(cards, {
              opacity: [0, 1],
              translateY: [24, 0],
              scale: [0.97, 1],
              delay: stagger(70, { start: 100 }),
              duration: 550,
              ease: 'outExpo'
            });
          }

          // 2. Cascade skill pills
          const pills = skillsSectionRef.current.querySelectorAll('.skill-pill');
          if (pills.length) {
            animate(pills, {
              opacity: [0, 1],
              scale: [0.8, 1],
              delay: stagger(10, { start: 200 }),
              duration: 400,
              ease: 'outBack'
            });
          }
        }
      },
      { threshold: 0.15 }
    );

    const el = skillsSectionRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [hasAnimated]);

  // Reactive micro-pulse when searching
  useEffect(() => {
    if (searchQuery && skillsSectionRef.current) {
      const matched = skillsSectionRef.current.querySelectorAll('.skill-pill.is-matched');
      if (matched.length) {
        animate(matched, {
          scale: [1, 1.15, 1.05],
          duration: 320,
          ease: 'outBack'
        });
      }
    }
  }, [searchQuery]);

  const handleIconHover = (e) => {
    animate(e.currentTarget, {
      rotate: [-8, 8, -4, 4, 0],
      scale: [1, 1.25, 1],
      duration: 450,
      ease: 'outBack'
    });
  };

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <RiLayoutMasonryLine size={19} />;
      case 'Server': return <RiServerLine size={19} />;
      case 'Smartphone': return <RiSmartphoneLine size={19} />;
      case 'Database': return <RiDatabase2Line size={19} />;
      case 'Wrench': return <RiToolsLine size={19} />;
      case 'Cpu': return <RiCpuLine size={19} />;
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
    <section className="section-padding" id="habilidades" ref={skillsSectionRef}>
      <div className="content-wrapper">
        {/* Section Header */}
        <div className="section-header animate__animated animate__fadeIn">
          <div className="section-tag">
            <RiCpuLine size={15} />
            <span>{t.nav.skills}</span>
          </div>
          <h2 className="section-title">
            {t.skills.title}
          </h2>
          <p className="section-subtitle">
            {t.skills.subtitle}
          </p>

          {/* Executive Spotlight Search Bar for Recruiters */}
          <div className="skills-search-wrapper">
            <div className={`skills-search-box ${isFocused ? 'is-focused' : ''}`}>
              <div className="skills-search-icon">
                <RiSearch2Line size={19} />
              </div>
              <input
                ref={inputRef}
                type="text"
                placeholder={t.lang === 'en' ? "Search tech stack (e.g. React, Gemini, Spring Boot)..." : "Buscar tecnología (ej: React, Gemini, Spring Boot)..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="skills-search-input"
                aria-label="Buscar habilidades técnicas"
              />
              <div className="skills-search-actions">
                {searchQuery ? (
                  <>
                    <span className="skills-search-counter">
                      {totalMatches} {t.lang === 'en' ? (totalMatches === 1 ? 'match' : 'matches') : (totalMatches === 1 ? 'coincidencia' : 'coincidencias')}
                    </span>
                    <button
                      type="button"
                      onClick={() => { setSearchQuery(''); inputRef.current?.focus(); }}
                      className="skills-search-clear-btn"
                      title={t.lang === 'en' ? "Clear search" : "Limpiar búsqueda"}
                      aria-label="Limpiar búsqueda"
                    >
                      <RiCloseLine size={18} />
                    </button>
                  </>
                ) : (
                  <kbd className="skills-search-kbd" title="Presiona / para enfocar">/</kbd>
                )}
              </div>
            </div>

            {/* Quick Popular Technology Filter Suggestions */}
            <div className="skills-quick-tags">
              <span className="skills-quick-tag-label">
                {t.lang === 'en' ? 'Quick filter:' : 'Filtro rápido:'}
              </span>
              {quickFilters.map((tech) => {
                const isActive = searchQuery.toLowerCase() === tech.toLowerCase();
                return (
                  <button
                    key={tech}
                    type="button"
                    className={`skills-quick-tag-btn ${isActive ? 'is-active' : ''}`}
                    onClick={() => setSearchQuery(isActive ? '' : tech)}
                  >
                    {tech}
                  </button>
                );
              })}
            </div>
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
              <div key={idx} className="skill-category-card">
                <div className="skill-card-head">
                  <div 
                    className="skill-icon-badge" 
                    onMouseEnter={handleIconHover}
                    style={{ cursor: 'pointer' }}
                  >
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3>{category.name}</h3>
                </div>

                <div className="skill-chips-wrap">
                  {category.skills.map((skill, sIdx) => {
                    const isMatched = searchQuery && skill.toLowerCase().includes(searchQuery.toLowerCase());
                    const logo = getSkillLogo(skill);

                    return (
                      <motion.span 
                        key={sIdx} 
                        className={`skill-pill ${isMatched ? 'is-matched' : ''}`}
                        whileHover={{ scale: 1.08, y: -2 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        style={isMatched ? {
                          background: 'rgba(239, 68, 68, 0.15)',
                          borderColor: 'var(--accent-red)',
                          fontWeight: 700,
                          transform: 'scale(1.05)'
                        } : {}}
                      >
                        {logo}
                        <span>{skill}</span>
                      </motion.span>
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
