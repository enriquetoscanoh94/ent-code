import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function Hero({ t }) {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const root = rootRef.current;
      let split = null;
      let killed = false;

      // estados iniciales antes del primer paint (evita parpadeo)
      const ctx = gsap.context(() => {
        gsap.set(".heroHeadline", { visibility: "hidden" });
        gsap.set(".eyebrow", { clipPath: "inset(0 100% 0 0)", filter: "blur(6px)" });
        gsap.set([".hero .subtitle", ".heroCtas .btn"], { autoAlpha: 0, y: 24 });
        gsap.set(".heroGlow", { autoAlpha: 0, scale: 0.8 });
      }, root);

      // esperar fuentes para que SplitText mida bien las letras
      document.fonts.ready.then(() => {
        if (killed) return;
        ctx.add(() => {
          split = new SplitText(".heroHeadline", {
            type: "words,chars",
            mask: "words",
            charsClass: "silverChar",
          });
          gsap.set(".heroHeadline", { visibility: "visible" });

          const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
          tl.to(".heroGlow", { autoAlpha: 1, scale: 1, duration: 1.8, ease: "power2.out" }, 0)
            .to(".eyebrow", {
              clipPath: "inset(0 0% 0 0)",
              filter: "blur(0px)",
              duration: 1,
            }, 0.15)
            .from(split.chars, { yPercent: 130, duration: 0.85, stagger: 0.016 }, 0.35)
            .to(".hero .subtitle", { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.45")
            .to(".heroCtas .btn", { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.09 }, "-=0.4");
        });
      });

      return () => {
        killed = true;
        if (split) split.revert();
        ctx.revert();
      };
    });

    return () => mm.revert();
  }, [t]);

  return (
    <section id="home" className="hero section" ref={rootRef}>
      <div className="heroGlow" aria-hidden="true" />
      <p className="eyebrow">{t.eyebrow}</p>
      <h1 className="heroHeadline">
        {t.headline.before}<em>{t.headline.highlight}</em>
      </h1>
      <p className="subtitle">{t.subtitle}</p>
      <div className="heroCtas">
        <a href="#contact" className="btn primary">
          {t.ctaPrimary}
        </a>
        <a href="#portfolio" className="btn ghost">
          {t.ctaSecondary}
        </a>
      </div>
    </section>
  );
}
