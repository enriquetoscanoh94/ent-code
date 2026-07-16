import { useEffect, useRef } from "react";

/*
 * Spotlight sobrio tipo Linear/Vercel: un resplandor azul tenue
 * sigue el cursor dentro de la tarjeta que está bajo el mouse.
 * No mueve nada (no es efecto "magnético"), solo ilumina.
 * Se apaga solo en móvil/touch y con prefers-reduced-motion.
 */
export function useSpotlight() {
  const ref = useRef(null);

  useEffect(() => {
    const grid = ref.current;
    if (!grid) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e) => {
      const card = e.target.closest(".card");
      if (!card || !grid.contains(card)) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };

    grid.addEventListener("mousemove", onMove);
    return () => grid.removeEventListener("mousemove", onMove);
  }, []);

  return ref;
}
