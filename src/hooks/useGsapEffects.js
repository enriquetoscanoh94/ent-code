import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

/*
 * Efectos GSAP globales del sitio:
 * - Títulos de sección que se revelan palabra por palabra (SplitText + ScrollTrigger)
 * - Línea verde del proceso que se dibuja con el scroll (scrub)
 * - Parallax sutil del glow del hero
 * Se re-ejecuta al cambiar idioma porque el texto cambia.
 */
export function useGsapEffects(lang) {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const splits = [];
      let killed = false;
      const ctx = gsap.context(() => {});

      // esperar a que carguen las fuentes para que SplitText mida bien
      document.fonts.ready.then(() => {
        if (killed) return;
        ctx.add(() => {
          // ── Títulos de sección: palabras que suben desde una máscara
          gsap.utils.toArray(".sectionHead").forEach((head) => {
            const h2 = head.querySelector("h2");
            const rest = head.querySelectorAll(":scope > p, :scope > .smsBlock");
            const tl = gsap.timeline({
              scrollTrigger: { trigger: head, start: "top 82%", once: true },
              defaults: { ease: "power4.out" },
            });
            if (h2) {
              if (h2.querySelector("*")) {
                // títulos con elementos dentro (ej. corazones) no se parten
                tl.from(h2, { y: 28, autoAlpha: 0, duration: 0.7 });
              } else {
                const split = new SplitText(h2, {
                  type: "words",
                  mask: "words",
                  wordsClass: "silverWord",
                });
                splits.push(split);
                tl.from(split.words, { yPercent: 130, duration: 0.75, stagger: 0.055 });
              }
            }
            if (rest.length) {
              tl.from(rest, { y: 22, autoAlpha: 0, duration: 0.6, stagger: 0.12 }, "-=0.35");
            }
          });

          // ── Reveals de tarjetas y bloques al entrar en pantalla
          const revealGroups = [
            { items: ".servicesGrid .card", trigger: ".servicesGrid", stagger: 0.06 },
            { items: ".whyCard", trigger: ".whyGrid", stagger: 0.08 },
            { items: ".processGrid .card", trigger: ".processGrid", stagger: 0.12 },
            { items: ".portfolioListItem", trigger: ".portfolioListCard", stagger: 0.05 },
          ];
          revealGroups.forEach(({ items, trigger, stagger }) => {
            const els = gsap.utils.toArray(items);
            if (!els.length) return;
            gsap.from(els, {
              y: 24,
              autoAlpha: 0,
              duration: 0.6,
              ease: "power4.out",
              stagger,
              scrollTrigger: { trigger, start: "top 85%", once: true },
            });
          });

          // contenedores sueltos
          [".portfolioListCard", ".contactForm"].forEach((sel) => {
            if (!document.querySelector(sel)) return;
            gsap.from(sel, {
              y: 30,
              autoAlpha: 0,
              duration: 0.7,
              ease: "power4.out",
              scrollTrigger: { trigger: sel, start: "top 85%", once: true },
            });
          });

          // ── Proceso: la línea verde de cada paso se dibuja con el scroll
          const steps = gsap.utils.toArray(".processGrid .card");
          if (steps.length) {
            gsap.set(steps, { "--lineW": "0%" });
            gsap.to(steps, {
              "--lineW": "100%",
              ease: "none",
              stagger: 0.35,
              scrollTrigger: {
                trigger: ".processGrid",
                start: "top 85%",
                end: "bottom 55%",
                scrub: 0.5,
              },
            });
          }

          // ── Parallax sutil del glow del hero al hacer scroll
          if (document.querySelector(".heroGlow")) {
            gsap.to(".heroGlow", {
              yPercent: 35,
              ease: "none",
              scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            });
          }

          ScrollTrigger.refresh();
        });
      });

      return () => {
        killed = true;
        splits.forEach((s) => s.revert());
        ctx.revert();
      };
    });

    return () => mm.revert();
  }, [lang]);
}
