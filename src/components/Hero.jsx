import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero({ t }) {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const root = rootRef.current;

      // reveal sobrio: fade + leve subida, sin efecto letra-por-letra
      const ctx = gsap.context(() => {
        gsap.set([".eyebrow", ".heroHeadline", ".hero .subtitle", ".heroCtas .btn"], {
          autoAlpha: 0,
          y: 22,
        });
        gsap.set(".heroGlow", { autoAlpha: 0 });
        gsap.set(".heroVisual", { autoAlpha: 0, y: 24 });

        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
        tl.to(".heroGlow", { autoAlpha: 1, duration: 1.4 }, 0)
          .to(".eyebrow", { autoAlpha: 1, y: 0, duration: 0.7 }, 0.1)
          .to(".heroHeadline", { autoAlpha: 1, y: 0, duration: 0.9 }, "-=0.4")
          .to(".hero .subtitle", { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.5")
          .to(".heroCtas .btn", { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.09 }, "-=0.4")
          .to(".heroVisual", { autoAlpha: 1, y: 0, duration: 0.9 }, "-=0.7");
      }, root);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [t]);

  return (
    <section id="home" className="hero section" ref={rootRef}>
      <div className="heroGlow" aria-hidden="true" />

      <div className="heroContent">
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
      </div>

      {/* el sitio del cliente, ya online (asimetría lado derecho) */}
      <div className="heroVisual" aria-hidden="true">
        <div className="browserMock">
          <div className="browserBar">
            <span className="browserDot" /><span className="browserDot" /><span className="browserDot" />
            <span className="browserUrl">tunegocio.com</span>
          </div>
          <div className="browserView">
            <div className="mockNav">
              <span className="mockLogo">Tu Negocio</span>
              <span className="mockLinks"><i /><i /><i /></span>
            </div>
            <div className="mockH1">Más clientes con tu <b>sitio profesional</b></div>
            <span className="mockText" />
            <span className="mockText short" />
            <span className="mockCta">Contáctanos</span>
            <div className="mockCards">
              <span className="mockCard" />
              <span className="mockCard" />
              <span className="mockCard" />
            </div>
          </div>
        </div>
        <div className="mockBadge">
          <span className="dot" />
          <span><b>+ Clientes</b><br />tu negocio en línea</span>
        </div>
      </div>
    </section>
  );
}
