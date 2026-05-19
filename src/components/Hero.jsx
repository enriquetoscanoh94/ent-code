export default function Hero({ t }) {
  return (
    <section id="home" className="hero section">
      <div className="heroGlow" />
      <p className="eyebrow">{t.eyebrow}</p>
      <h1 className="heroHeadline">
        {t.headline.before}<em>{t.headline.highlight}</em>
      </h1>
      <p className="subtitle">{t.subtitle}</p>
    </section>
  );
}
