import React from 'react';

export default function MatrixGridBackground() {
  // Columns of vertical code streams inspired by the user's reference
  const columns = [
    { left: '4%', text: '010101constPOST/api/v1/auth', delay: '0s', opacity: 0.35 },
    { left: '11%', text: 'GET/api/cvs2/kenny/developer', delay: '1s', opacity: 0.65, highlight: true },
    { left: '19%', text: 'booleanasync=>res.json(data)', delay: '2s', opacity: 0.4 },
    { left: '27%', text: 'exportdefaultfunctionApp', delay: '0.5s', opacity: 0.25 },
    { left: '36%', text: '.config.env{SECRET_KEY:99}', delay: '1.5s', opacity: 0.7, highlight: true },
    { left: '45%', text: 'SELECT*FROMprojectsWHEREid=1', delay: '2.5s', opacity: 0.3 },
    { left: '54%', text: 'interfaceUser{name:string}', delay: '1.2s', opacity: 0.5 },
    { left: '63%', text: 'fetch(/api/v1/connect)', delay: '0.8s', opacity: 0.65, highlight: true },
    { left: '72%', text: 'import{NextResponse}from"next"', delay: '2.2s', opacity: 0.35 },
    { left: '81%', text: 'classBackendEngineimplementsAPI', delay: '1.7s', opacity: 0.55 },
    { left: '90%', text: '200_OK_VERCEL_DEPLOYED_STREAM', delay: '0.3s', opacity: 0.7, highlight: true },
    { left: '97%', text: '01011100101011010101', delay: '2s', opacity: 0.3 }
  ];

  return (
    <div className="matrix-code-container" aria-hidden="true">
      {/* Grid Mesh */}
      <div className="matrix-mesh-grid" />

      {/* Vertical Code Columns */}
      {columns.map((col, idx) => (
        <div
          key={idx}
          className={`matrix-vertical-col ${col.highlight ? 'col-highlight' : ''}`}
          style={{
            left: col.left,
            opacity: col.opacity,
            animationDelay: col.delay
          }}
        >
          {col.text.split('').map((char, cIdx) => (
            <span 
              key={cIdx} 
              className={`matrix-char ${cIdx % 4 === 0 ? 'char-bright' : ''}`}
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
