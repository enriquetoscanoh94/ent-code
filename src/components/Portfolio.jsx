import { PORTFOLIO } from "../data/portfolio";

export default function Portfolio({ t }) {
  return (
    <section id="portfolio" className="section">
      <div className="sectionHead">
        <h2>{t.portfolioTitle}</h2>
        <p>{t.portfolioSubtitle}</p>
      </div>
      <div className="portfolioGrid">
        {PORTFOLIO.map((meta, i) => {
          const project = t.portfolio[i];
          return (
            <article key={meta.id} className="portfolioCard">
              <div className="portfolioPreview" style={{ background: meta.gradient }}>
                <div className="portfolioPreviewDots" />
                <div className="portfolioPreviewBar">
                  <div className="portfolioPreviewDot" />
                  <div className="portfolioPreviewDot" />
                  <div className="portfolioPreviewDot" />
                </div>
              </div>
              <div className="portfolioBody">
                <span className="portfolioCategory">{project.category}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="portfolioTags">
                  {meta.tags.map((tag) => (
                    <span key={tag} className="portfolioTag">{tag}</span>
                  ))}
                </div>
                {meta.link && (
                  <a
                    href={`https://${meta.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolioLink"
                  >
                    {project.linkLabel} →
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
