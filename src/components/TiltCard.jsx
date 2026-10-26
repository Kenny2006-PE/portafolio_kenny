import React, { useRef, useState } from 'react';

export default function TiltCard({ children, className = '', maxTilt = 12, scale = 1.02, style = {} }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, x: '50%', y: '50%' });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`);
    
    // Update local CSS vars for border spotlight
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);

    setGlareStyle({
      opacity: 0.22,
      x: `${(x / rect.width) * 100}%`,
      y: `${(y / rect.height) * 100}%`
    });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlareStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: 'transform 0.15s ease-out, box-shadow 0.2s ease-out',
        position: 'relative',
        transformStyle: 'preserve-3d',
        ...style
      }}
    >
      {children}
      {/* Dynamic 3D Glare Sheen */}
      <div
        className="tilt-glare"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          borderRadius: 'inherit',
          background: `radial-gradient(circle at ${glareStyle.x} ${glareStyle.y}, rgba(255, 255, 255, 0.35) 0%, transparent 60%)`,
          opacity: glareStyle.opacity,
          transition: 'opacity 0.25s ease-out',
          zIndex: 10
        }}
      />
    </div>
  );
}
