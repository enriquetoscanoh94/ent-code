import { useEffect, useRef } from "react";

export default function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    // dpr: nitidez en pantallas retina; tope 2 para no gastar de más
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let animId;
    let stars = [];
    let shooters = [];
    let lastMs = 0;
    let nextShootMs = (1.5 + Math.random() * 3) * 1000;

    function buildStars() {
      // menos estrellas en celulares: misma vibra, menos batería
      const count = w < 640 ? 120 : 320;
      stars = Array.from({ length: count }, () => {
        // mezcla: ~22% tinto, ~12% verde, el resto blancas
        const roll = Math.random();
        let color = `255,255,255`;
        if (roll < 0.22) {
          color = `${190 + Math.floor(Math.random() * 40)},${70 + Math.floor(Math.random() * 40)},${95 + Math.floor(Math.random() * 30)}`;
        } else if (roll < 0.34) {
          color = `${52 + Math.floor(Math.random() * 40)},${211 - Math.floor(Math.random() * 30)},${153 + Math.floor(Math.random() * 30)}`;
        }
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.4 + 0.2,
          base: Math.random() * 0.5 + 0.2,
          phase: Math.random() * Math.PI * 2,
          freq: Math.random() * 0.5 + 0.15,
          speed: Math.random() * 0.08 + 0.02,
          color,
        };
      });
    }

    function spawnShooter(ms) {
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.35;
      const speed = 480 + Math.random() * 280;
      shooters.push({
        x: Math.random() * w * 0.65,
        y: Math.random() * h * 0.45,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: 80 + Math.random() * 70,
        startMs: ms,
        duration: (0.65 + Math.random() * 0.5) * 1000,
      });
    }

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildStars();
    }

    function draw(ms) {
      const dt = Math.min((ms - lastMs) / 1000, 0.05);
      lastMs = ms;
      const t = ms * 0.001;

      ctx.clearRect(0, 0, w, h);

      // Estrellas con parpadeo
      for (const s of stars) {
        const alpha = s.base + Math.sin(t * s.freq + s.phase) * 0.25;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color},${Math.max(0, Math.min(1, alpha))})`;
        ctx.fill();
        s.y -= s.speed;
        if (s.y < -2) { s.y = h + 2; s.x = Math.random() * w; }
      }

      // Spawn shooting star
      if (shooters.length < 2 && ms > nextShootMs) {
        spawnShooter(ms);
        nextShootMs = ms + (3.5 + Math.random() * 5.5) * 1000;
      }

      // Draw & update shooters
      shooters = shooters.filter(s => ms - s.startMs < s.duration);
      for (const s of shooters) {
        const progress = (ms - s.startMs) / s.duration;
        const fade = progress < 0.25 ? progress / 0.25 : 1 - (progress - 0.25) / 0.75;
        const alpha = Math.max(0, fade) * 0.9;

        const angle = Math.atan2(s.vy, s.vx);
        const tailX = s.x - Math.cos(angle) * s.length;
        const tailY = s.y - Math.sin(angle) * s.length;

        // Trail
        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, `rgba(255,255,255,0)`);
        grad.addColorStop(1, `rgba(255,255,255,${alpha})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Glow en la cabeza
        const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 5);
        glow.addColorStop(0, `rgba(255,255,255,${alpha})`);
        glow.addColorStop(1, `rgba(255,255,255,0)`);
        ctx.beginPath();
        ctx.arc(s.x, s.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        s.x += s.vx * dt;
        s.y += s.vy * dt;
      }

      animId = requestAnimationFrame(draw);
    }

    // pausar el loop cuando la pestaña no está visible: ahorra batería/CPU
    function onVisibility() {
      cancelAnimationFrame(animId);
      if (!document.hidden) {
        lastMs = 0;
        animId = requestAnimationFrame(draw);
      }
    }

    resize();
    animId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
