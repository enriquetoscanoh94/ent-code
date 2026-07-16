import { TECH } from "../data/portfolio";

/*
 * Respaldo técnico: las tecnologías van más abajo, antes de Contacto.
 * Carrusel infinito con fondo tornasol; duplicamos la lista para que
 * el loop se vea continuo, sin saltos.
 */
export default function TechStack({ t }) {
  return (
    <section id="tech" className="section">
      <div className="sectionHead">
        <h2>{t.techTitle}</h2>
        <p>{t.techSubtitle}</p>
      </div>

      <div className="techMarquee">
        <div className="techMarqueeTrack">
          {[...TECH, ...TECH].map((tech, i) => (
            <div
              key={`${tech.id}-${i}`}
              className="portfolioLogo"
              title={tech.name}
              aria-hidden={i >= TECH.length}
            >
              <img src={tech.logo} alt={`Logo ${tech.name}`} loading="lazy" />
              <span className="portfolioLogoName">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
