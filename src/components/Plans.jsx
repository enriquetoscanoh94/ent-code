import { CheckIcon } from "./icons";
import { PLANS_META } from "../data/plans";
import { scrollToSection } from "../utils/scroll";

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
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`btn planCta ${meta.popular ? "primary" : "ghost"}`}
                >
                  {t.ctaLabel}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
