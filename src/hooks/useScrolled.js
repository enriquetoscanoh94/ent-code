import { useState, useEffect } from "react";

export function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    let currentScrolled = false;

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

    currentScrolled = window.scrollY > threshold;
    setScrolled(currentScrolled);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
