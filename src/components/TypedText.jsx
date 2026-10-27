import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function TypedText({ strings }) {
  const elRef = useRef(null);

  useEffect(() => {
    if (!elRef.current) return;

    const typed = new Typed(elRef.current, {
      strings,
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1900,
      loop: true,
      showCursor: true,
      cursorChar: '▋'
    });

    return () => {
      typed.destroy();
    };
  }, [strings]);

  return (
    <span 
      ref={elRef} 
      className="hero-typed-role"
      style={{ fontWeight: 700, color: 'var(--text-primary)' }}
    />
  );
}
