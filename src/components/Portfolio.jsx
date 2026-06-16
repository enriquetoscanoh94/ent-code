import { PORTFOLIO } from "../data/portfolio";

export default function Portfolio({ t }) {
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
          {PORTFOLIO.map((meta, i) => {
            const project = t.portfolio[i];
            const inner = (
              <>
                <span
                  className="portfolioListAccent"
                  style={{ background: meta.gradient }}
                />
                <div className="portfolioListBody">
                  <span className="portfolioCategory">{project.category}</span>
                  <h3>{project.name}</h3>
                </div>
                {meta.link && <span className="portfolioListArrow">→</span>}
              </>
            );
            return (
              <li key={meta.id} className="portfolioListItem">
                {meta.link ? (
                  <a
                    href={`https://${meta.link}`}
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
