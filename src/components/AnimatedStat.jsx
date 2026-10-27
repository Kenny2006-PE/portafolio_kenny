import React, { useEffect, useRef, useState } from 'react';
import { animate } from 'animejs';

export default function AnimatedStat({ value, label, desc }) {
  const statRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Extract numerical part and suffix (e.g. "+1 Año" -> num: 1, prefix: "+", suffix: " Año")
  // Or "3+" -> num: 3, suffix: "+"
  const numMatch = value.match(/\d+/);
  const number = numMatch ? parseInt(numMatch[0], 10) : null;
  const isNumeric = number !== null && !isNaN(number);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated && isNumeric && statRef.current) {
          setHasAnimated(true);

          const obj = { val: 0 };
          animate(obj, {
            val: number,
            duration: 1600,
            ease: 'outExpo',
            onUpdate: () => {
              if (statRef.current) {
                const rounded = Math.round(obj.val);
                statRef.current.innerText = value.replace(number.toString(), rounded.toString());
              }
            }
          });
        }
      },
      { threshold: 0.3 }
    );

    const currentElem = statRef.current;
    if (currentElem) observer.observe(currentElem);

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, [hasAnimated, isNumeric, number, value]);

  return (
    <div className="stat-item">
      <span ref={statRef} className="stat-value">
        {value}
      </span>
      <span className="stat-label">{label}</span>
      <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>{desc}</span>
    </div>
  );
}
