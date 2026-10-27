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
          ? `radial-gradient(550px circle at ${pos.x}px ${pos.y}px, rgba(255, 255, 255, 0.025), transparent 70%)`
          : `radial-gradient(550px circle at ${pos.x}px ${pos.y}px, rgba(15, 23, 42, 0.02), transparent 70%)`
      }}
    />
  );
}
