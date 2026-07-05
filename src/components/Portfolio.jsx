import { PORTFOLIO } from "../data/portfolio";
import { useApp } from "../context/useApp";

export default function Portfolio({ t }) {
  const { lang } = useApp();

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
      <div className="portfolioCard portfolioListCard">
        <ul className="portfolioList">
          {PORTFOLIO.map((project) => {
            const text = project[lang];
            const inner = (
              <>
                <span
                  className="portfolioListAccent"
                  style={{ background: project.gradient }}
                />
                <div className="portfolioListBody">
                  <span className="portfolioCategory">{text.category}</span>
                  <h3>{text.name}</h3>
                </div>
                {project.link && <span className="portfolioListArrow">→</span>}
              </>
            );
            return (
              <li key={project.id} className="portfolioListItem">
                {project.link ? (
                  <a
                    href={`https://${project.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolioListLink"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="portfolioListLink portfolioListLinkDisabled">
                    {inner}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
