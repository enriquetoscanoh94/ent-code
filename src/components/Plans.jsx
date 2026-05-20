import { Link } from "react-router-dom";
import { PLANS_META } from "../data/plans";

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <circle cx="6.5" cy="6.5" r="6.5" fill="#22c55e" fillOpacity="0.15" />
    <path d="M3.5 6.5l2 2 4-4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Plans({ t }) {
  return (
    <section id="plans" className="section">
      <div className="sectionHead">
        <h2>{t.plansTitle}</h2>
        <p>{t.plansSubtitle}</p>
      </div>
      <div className="plansGrid">
        {PLANS_META.map((meta, i) => {
          const plan = t.plans[i];
          return (
            <div key={meta.id} className={`planCard${meta.popular ? " planCard--popular" : ""}`}>
              {meta.popular && <div className="planAccentBar" />}
              <div className="planCardInner">
                {meta.popular && <span className="planBadge">{t.popularLabel}</span>}
                <p className="planName">{meta.name}</p>
                <p className="planPrice">{meta.price}</p>
                <p className="planTagline">{plan.tagline}</p>
                <ul className="planFeatures">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`btn planCta ${meta.popular ? "primary" : "ghost"}`}>
                  {t.ctaLabel}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
