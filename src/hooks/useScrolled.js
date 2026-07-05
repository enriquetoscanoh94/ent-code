import { useState, useEffect } from "react";

export function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(() => window.scrollY > threshold);

  useEffect(() => {
    let ticking = false;
    let currentScrolled = window.scrollY > threshold;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const next = window.scrollY > threshold;
        if (next !== currentScrolled) {
          currentScrolled = next;
          setScrolled(next);
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
