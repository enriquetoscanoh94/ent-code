export default function Services({ t }) {
  return (
    <section id="services" className="section">
      <div className="sectionHead">
        <h2>{t.servicesTitle}</h2>
        <p>{t.servicesSubtitle}</p>
      </div>
      <div className="grid servicesGrid">
        {t.services.map(({ title, description, emoji }) => (
          <article className="card" key={title}>
            <span className="serviceEmoji" aria-hidden="true">{emoji}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
