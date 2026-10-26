import React, { useState } from 'react';
import { 
  Code, 
  Layout, 
  Server, 
  Smartphone, 
  Database, 
  Wrench, 
  Cpu, 
  Workflow, 
  Globe, 
  Search 
} from 'lucide-react';

export default function Skills({ t }) {
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout size={18} />;
      case 'Server': return <Server size={18} />;
      case 'Smartphone': return <Smartphone size={18} />;
      case 'Database': return <Database size={18} />;
      case 'Wrench': return <Wrench size={18} />;
      case 'Cpu': return <Cpu size={18} />;
      case 'Workflow': return <Workflow size={18} />;
      case 'Globe': return <Globe size={18} />;
      default: return <Code size={18} />;
    }
  };

  return (
    <section className="section-padding" id="habilidades">
      <div className="content-wrapper">
        {/* Section Header */}
        <div className="section-header animate__animated animate__fadeIn">
          <div className="section-tag">
            <Cpu size={14} />
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
            <Search size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
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
                        {skill}
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
