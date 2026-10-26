import React, { useEffect, useState } from 'react';

export default function CursorGlow({ theme }) {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, [visible]);

  const isDark = theme === 'dark';

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.4s ease',
        background: isDark
          ? `radial-gradient(650px circle at ${pos.x}px ${pos.y}px, rgba(139, 92, 246, 0.12), rgba(239, 68, 68, 0.06), transparent 70%)`
          : `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(139, 92, 246, 0.08), rgba(59, 130, 246, 0.05), transparent 70%)`
      }}
    />
  );
}
