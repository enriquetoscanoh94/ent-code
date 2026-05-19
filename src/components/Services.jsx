export default function Services({ t }) {
  return (
    <section id="services" className="section">
      <div className="sectionHead">
        <h2>{t.servicesTitle}</h2>
        <p>{t.servicesSubtitle}</p>
      </div>
      <div className="grid servicesGrid">
        {t.services.map(([title, desc]) => (
          <article className="card" key={title}>
            <h3>{title}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
