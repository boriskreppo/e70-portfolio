'use client';

import { useEffect, useRef } from 'react';

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const COUNT = 900;
    const particles: { x: number; y: number; vx: number; vy: number }[] = [];

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      canvas!.width  = parent.offsetWidth;
      canvas!.height = parent.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x:  (Math.random() - 0.5) * canvas.width  * 1.4,
        y:  (Math.random() - 0.5) * canvas.height * 1.4,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
      });
    }

    let raf: number;
    function tick() {
      const w = canvas!.width, h = canvas!.height;
      ctx!.clearRect(0, 0, w, h);
      ctx!.fillStyle = 'rgba(255, 82, 0, 0.28)';
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x >  w * 0.7) p.x = -w * 0.7;
        if (p.x < -w * 0.7) p.x =  w * 0.7;
        if (p.y >  h * 0.7) p.y = -h * 0.7;
        if (p.y < -h * 0.7) p.y =  h * 0.7;
        ctx!.beginPath();
        ctx!.arc(w / 2 + p.x, h / 2 + p.y, 1.1, 0, Math.PI * 2);
        ctx!.fill();
      }
      raf = requestAnimationFrame(tick);
    }
    tick();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
