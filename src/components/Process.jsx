export default function Process({ t }) {
  return (
    <section id="process" className="section">
      <div className="sectionHead">
        <h2>{t.processTitle}</h2>
        <p>{t.processSubtitle}</p>
      </div>
      <div className="grid processGrid">
        {t.steps.map(([title, desc], i) => (
          <article className="card" key={title}>
            <span className="stepNumber">{i + 1}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
