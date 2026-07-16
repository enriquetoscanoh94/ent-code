import { PORTFOLIO } from "../data/portfolio";
import { useApp } from "../context/useApp";

/*
 * Prueba social: los logos de clientes van justo debajo del Hero.
 * Carrusel que gira de izquierda a derecha; duplicamos la lista para
 * que el loop se vea continuo, sin saltos.
 */
export default function Clients({ t }) {
  const { lang } = useApp();
  const clients = PORTFOLIO.filter((project) => project.link);

  return (
    <section id="portfolio" className="section">
      <div className="sectionHead">
        <h2>
          {t.portfolioTitle}{" "}
          <span className="portfolioHearts" aria-hidden="true">
            <span className="portfolioHeart">♥</span>
            <span className="portfolioHeart">♥</span>
            <span className="portfolioHeart">♥</span>
          </span>
        </h2>
        <p>{t.portfolioSubtitle}</p>
      </div>

      <div className="portfolioLogos">
        <div className="portfolioLogosTrack">
          {[...clients, ...clients].map((project, i) => {
            const text = project[lang];
            // logo local del cliente si lo tenemos; si no, favicon del dominio
            const logo = project.logo || `https://www.google.com/s2/favicons?domain=${project.link}&sz=128`;
            return (
              <a
                key={`${project.id}-${i}`}
                href={`https://${project.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolioLogo"
                title={text.name}
                aria-hidden={i >= clients.length}
              >
                <img src={logo} alt={`Logo ${text.name}`} loading="lazy" />
                <span className="portfolioLogoName">{text.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
