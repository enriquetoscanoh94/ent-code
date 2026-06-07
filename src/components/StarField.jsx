import { useEffect, useRef } from "react";

export default function StarField({ dark }) {
  const canvasRef = useRef(null);
  const darkRef = useRef(dark);

  useEffect(() => { darkRef.current = dark; }, [dark]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let stars = [];
    let shooters = [];
    let lastMs = 0;
    let nextShootMs = (1.5 + Math.random() * 3) * 1000;

    function buildStars() {
      stars = Array.from({ length: 130 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.3 + 0.2,
        base: Math.random() * 0.45 + 0.15,
        phase: Math.random() * Math.PI * 2,
        freq: Math.random() * 0.5 + 0.15,
        speed: Math.random() * 0.08 + 0.02,
      }));
    }

    function spawnShooter(ms) {
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.35;
      const speed = 480 + Math.random() * 280;
      shooters.push({
        x: Math.random() * canvas.width * 0.65,
        y: Math.random() * canvas.height * 0.45,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: 80 + Math.random() * 70,
        startMs: ms,
        duration: (0.65 + Math.random() * 0.5) * 1000,
      });
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      buildStars();
    }

    function draw(ms) {
      const dt = Math.min((ms - lastMs) / 1000, 0.05);
      lastMs = ms;
      const t = ms * 0.001;
      const isDark = darkRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Static stars — solo en dark mode
      if (isDark) {
        for (const s of stars) {
          const alpha = s.base + Math.sin(t * s.freq + s.phase) * 0.2;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${Math.max(0, Math.min(1, alpha))})`;
          ctx.fill();
          s.y -= s.speed;
          if (s.y < -2) { s.y = canvas.height + 2; s.x = Math.random() * canvas.width; }
        }
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
        const alpha = Math.max(0, fade) * (isDark ? 0.9 : 0.35);

        const angle = Math.atan2(s.vy, s.vx);
        const tailX = s.x - Math.cos(angle) * s.length;
        const tailY = s.y - Math.sin(angle) * s.length;

        // Trail
        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, `rgba(255,255,255,0)`);
        grad.addColorStop(1, isDark
          ? `rgba(255,255,255,${alpha})`
          : `rgba(140,120,220,${alpha})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = isDark ? 1.5 : 1;
        ctx.stroke();

        // Glow en la cabeza
        const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, isDark ? 5 : 3);
        glow.addColorStop(0, isDark
          ? `rgba(255,255,255,${alpha})`
          : `rgba(160,140,240,${alpha})`);
        glow.addColorStop(1, `rgba(255,255,255,0)`);
        ctx.beginPath();
        ctx.arc(s.x, s.y, isDark ? 5 : 3, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        s.x += s.vx * dt;
        s.y += s.vy * dt;
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    animId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize, { passive: true });
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
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
