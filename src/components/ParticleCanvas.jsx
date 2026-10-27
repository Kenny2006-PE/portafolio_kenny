import React, { useEffect, useRef } from 'react';

export default function ParticleCanvas({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const isDark = theme === 'dark';
    let step = 0;

    // Sober mathematical wave streams (no bright glowing dots, no neon fireflies)
    const waves = [
      { amplitude: 40, frequency: 0.0028, speed: 0.009, offset: 0, opacity: isDark ? 0.07 : 0.04 },
      { amplitude: 60, frequency: 0.0018, speed: 0.007, offset: 2.1, opacity: isDark ? 0.05 : 0.035 },
      { amplitude: 35, frequency: 0.0035, speed: 0.011, offset: 4.2, opacity: isDark ? 0.06 : 0.03 },
      { amplitude: 75, frequency: 0.0014, speed: 0.005, offset: 1.3, opacity: isDark ? 0.045 : 0.025 },
      { amplitude: 48, frequency: 0.0022, speed: 0.008, offset: 3.4, opacity: isDark ? 0.055 : 0.035 }
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      const mouseFactorY = (mouseY / height - 0.5) * 45;
      const mouseFactorX = (mouseX / width - 0.5) * 0.0008;

      step += 1;

      // Draw each smooth, sober geometric line
      waves.forEach((wave, idx) => {
        ctx.beginPath();
        ctx.lineWidth = 1.1;

        // Subtle sober slate tones
        const baseColor = isDark 
          ? (idx % 2 === 0 ? '148, 163, 184' : '203, 213, 225') 
          : (idx % 2 === 0 ? '100, 116, 139' : '148, 163, 184');
        
        ctx.strokeStyle = `rgba(${baseColor}, ${wave.opacity})`;

        const centerY = height * 0.55 + Math.sin(step * 0.004 + wave.offset) * 25 + mouseFactorY;

        for (let x = 0; x <= width; x += 12) {
          const distanceToMouse = Math.abs(x - mouseX);
          const mouseDamping = Math.max(0, 1 - distanceToMouse / 380);
          const mouseLift = Math.sin(distanceToMouse * 0.008 - step * 0.015) * 16 * mouseDamping;

          const y =
            centerY +
            Math.sin(x * (wave.frequency + mouseFactorX) + step * wave.speed + wave.offset) * wave.amplitude +
            Math.cos(x * 0.0012 + step * 0.006) * (wave.amplitude * 0.35) +
            mouseLift;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
}
