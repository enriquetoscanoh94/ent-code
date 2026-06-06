import { CheckIcon } from "./icons";
import { scrollToSection } from "../utils/scroll";

export default function Plan({ t }) {
  return (
    <section id="plan" className="section">
      <div className="sectionHead">
        <h2>{t.planTitle}</h2>
        <p>{t.planSubtitle}</p>
      </div>

      <div className="planSingle">
        <div className="planSingleCard">
          <div className="planAccentBar" />
          <div className="planSingleInner">
            <div className="planSingleTop">
              <div>
                <span className="planBadge">{t.planBadge}</span>
                <p className="planSingleName">{t.planName}</p>
                <p className="planSinglePrice">{t.planPrice}</p>
                <p className="planSingleTagline">{t.planTagline}</p>
              </div>
              <button
                className="btn primary planSingleCta"
                onClick={() => scrollToSection("contact")}
              >
                {t.planCta}
              </button>
            </div>

            <ul className="planSingleFeatures">
              {t.planFeatures.map((f) => (
                <li key={f}>
                  <CheckIcon />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
