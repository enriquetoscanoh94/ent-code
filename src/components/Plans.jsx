const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <circle cx="6.5" cy="6.5" r="6.5" fill="#22c55e" fillOpacity="0.15" />
    <path d="M3.5 6.5l2 2 4-4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Plans({ t, lang }) {
  const popularLabel = lang === "es" ? "Más popular" : "Most popular";
  const ctaLabel = lang === "es" ? "Empezar" : "Get started";

  return (
    <section id="plans" className="section">
      <div className="sectionHead">
        <h2>{t.plansTitle}</h2>
        <p>{t.plansSubtitle}</p>
      </div>
      <div className="plansGrid">
        {t.plans.map((plan) => (
          <div key={plan.name} className={`planCard${plan.popular ? " planCard--popular" : ""}`}>
            {plan.popular && <div className="planAccentBar" />}
            <div className="planCardInner">
              {plan.popular && <span className="planBadge">{popularLabel}</span>}
              <p className="planName">{plan.name}</p>
              <p className="planPrice">{plan.price}</p>
              <p className="planTagline">{plan.tagline}</p>
              <ul className="planFeatures">
                {plan.features.map((f) => (
                  <li key={f}>
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`btn planCta ${plan.popular ? "primary" : "ghost"}`}>
                {ctaLabel}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
