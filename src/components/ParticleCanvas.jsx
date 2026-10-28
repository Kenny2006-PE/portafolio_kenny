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

    const mouse = {
      x: null,
      y: null,
      radius: 170
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const isDark = theme === 'dark';

    // =========================================================================
    // DARK THEME: SOBER MATHEMATICAL SINE WAVES
    // =========================================================================
    if (isDark) {
      let step = 0;
      let mouseX = width / 2;
      let mouseY = height / 2;

      const waves = [
        { amplitude: 40, frequency: 0.0028, speed: 0.009, offset: 0, opacity: 0.07 },
        { amplitude: 60, frequency: 0.0018, speed: 0.007, offset: 2.1, opacity: 0.05 },
        { amplitude: 35, frequency: 0.0035, speed: 0.011, offset: 4.2, opacity: 0.06 },
        { amplitude: 75, frequency: 0.0014, speed: 0.005, offset: 1.3, opacity: 0.045 },
        { amplitude: 48, frequency: 0.0022, speed: 0.008, offset: 3.4, opacity: 0.055 }
      ];

      const renderDark = () => {
        ctx.clearRect(0, 0, width, height);

        const targetX = mouse.x !== null ? mouse.x : width / 2;
        const targetY = mouse.y !== null ? mouse.y : height / 2;
        mouseX += (targetX - mouseX) * 0.04;
        mouseY += (targetY - mouseY) * 0.04;

        const mouseFactorY = (mouseY / height - 0.5) * 45;
        const mouseFactorX = (mouseX / width - 0.5) * 0.0008;

        step += 1;

        waves.forEach((wave, idx) => {
          ctx.beginPath();
          ctx.lineWidth = 1.1;
          const baseColor = idx % 2 === 0 ? '148, 163, 184' : '203, 213, 225';
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

        animationFrameId = requestAnimationFrame(renderDark);
      };

      renderDark();
    } 
    // =========================================================================
    // LIGHT THEME: ARCHITECTURAL TOPOLOGY NETWORK & MAGNETIC TECH NODES
    // Crisp, highly visible, elegant developer grid on bright canvas
    // =========================================================================
    else {
      const nodeCount = Math.min(Math.floor((width * height) / 22000), 55);
      const nodes = [];

      class TechNode {
        constructor() {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.vx = (Math.random() - 0.5) * 0.65;
          this.vy = (Math.random() - 0.5) * 0.65;
          // 25% crimson red accent, 75% slate navy
          this.isAccent = Math.random() < 0.25;
          // Shapes: circle, cross (+), diamond
          this.shape = Math.random() < 0.6 ? 'circle' : (Math.random() < 0.5 ? 'cross' : 'diamond');
          this.size = this.isAccent ? 3.2 : (this.shape === 'circle' ? 2.8 : 4);
          this.baseAlpha = this.isAccent ? 0.8 : 0.55;
        }

        update() {
          this.x += this.vx;
          this.y += this.vy;

          if (this.x < 0 || this.x > width) this.vx = -this.vx;
          if (this.y < 0 || this.y > height) this.vy = -this.vy;

          // Mouse gentle repulsion
          if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouse.radius && dist > 0) {
              const force = (mouse.radius - dist) / mouse.radius;
              const fx = (dx / dist) * force * 1.8;
              const fy = (dy / dist) * force * 1.8;
              this.x -= fx;
              this.y -= fy;
            }
          }
        }

        draw() {
          ctx.save();
          if (this.isAccent) {
            ctx.fillStyle = `rgba(239, 68, 68, ${this.baseAlpha})`;
            ctx.strokeStyle = `rgba(239, 68, 68, ${this.baseAlpha})`;
          } else {
            ctx.fillStyle = `rgba(30, 41, 59, ${this.baseAlpha})`;
            ctx.strokeStyle = `rgba(51, 65, 85, ${this.baseAlpha})`;
          }

          if (this.shape === 'circle') {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
          } else if (this.shape === 'cross') {
            ctx.lineWidth = 1.3;
            ctx.beginPath();
            ctx.moveTo(this.x - this.size, this.y);
            ctx.lineTo(this.x + this.size, this.y);
            ctx.moveTo(this.x, this.y - this.size);
            ctx.lineTo(this.x, this.y + this.size);
            ctx.stroke();
          } else {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y - this.size);
            ctx.lineTo(this.x + this.size, this.y);
            ctx.lineTo(this.x, this.y + this.size);
            ctx.lineTo(this.x - this.size, this.y);
            ctx.closePath();
            ctx.fill();
          }
          ctx.restore();
        }
      }

      for (let i = 0; i < nodeCount; i++) {
        nodes.push(new TechNode());
      }

      // Draw subtle architectural coordinate markers in background
      const drawGrid = () => {
        const gridSpacing = 110;
        ctx.save();
        ctx.fillStyle = 'rgba(100, 116, 139, 0.16)';
        for (let x = gridSpacing / 2; x < width; x += gridSpacing) {
          for (let y = gridSpacing / 2; y < height; y += gridSpacing) {
            ctx.fillRect(x - 1, y, 3, 1);
            ctx.fillRect(x, y - 1, 1, 3);
          }
        }
        ctx.restore();
      };

      const renderLight = () => {
        ctx.clearRect(0, 0, width, height);

        // 1. Coordinate grid
        drawGrid();

        // 2. Update and draw nodes
        for (let i = 0; i < nodes.length; i++) {
          nodes[i].update();
          nodes[i].draw();
        }

        // 3. Draw inter-node links with crisp contrast
        const maxDist = 125;
        for (let a = 0; a < nodes.length; a++) {
          for (let b = a + 1; b < nodes.length; b++) {
            const dx = nodes[a].x - nodes[b].x;
            const dy = nodes[a].y - nodes[b].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDist) {
              const alpha = (1 - dist / maxDist) * 0.25;
              ctx.beginPath();
              ctx.lineWidth = 0.9;
              if (nodes[a].isAccent || nodes[b].isAccent) {
                ctx.strokeStyle = `rgba(239, 68, 68, ${alpha * 1.3})`;
              } else {
                ctx.strokeStyle = `rgba(51, 65, 85, ${alpha})`;
              }
              ctx.moveTo(nodes[a].x, nodes[a].y);
              ctx.lineTo(nodes[b].x, nodes[b].y);
              ctx.stroke();
            }
          }

          // 4. Interactive connection to mouse cursor
          if (mouse.x !== null && mouse.y !== null) {
            const dx = nodes[a].x - mouse.x;
            const dy = nodes[a].y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouse.radius) {
              const alpha = (1 - dist / mouse.radius) * 0.42;
              ctx.beginPath();
              ctx.lineWidth = 1;
              ctx.strokeStyle = nodes[a].isAccent 
                ? `rgba(239, 68, 68, ${alpha})`
                : `rgba(30, 41, 59, ${alpha})`;
              ctx.moveTo(nodes[a].x, nodes[a].y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.stroke();
            }
          }
        }

        animationFrameId = requestAnimationFrame(renderLight);
      };

      renderLight();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
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
