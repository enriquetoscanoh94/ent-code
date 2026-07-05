export default function Process({ t }) {
  return (
    <section id="process" className="section">
      <div className="sectionHead">
        <h2>{t.processTitle}</h2>
        <p>{t.processSubtitle}</p>
      </div>
      <div className="grid processGrid">
        {t.steps.map(({ title, description }, i) => (
          <article className="card" key={title}>
            <span className="stepNumber">{i + 1}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
