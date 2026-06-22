import { motion } from "motion/react";
import { CheckIcon } from "./icons";
import { scrollToSection } from "../utils/scroll";
import { fadeUp, scaleIn, staggerParent, viewportOnce, EASE_OUT_EXPO } from "../utils/motion";

const featureItem = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE_OUT_EXPO } },
};

export default function Plan({ t }) {
  return (
    <section id="plan" className="section">
      <motion.div
        className="sectionHead"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <h2>{t.planTitle}</h2>
        <p>{t.planSubtitle}</p>
      </motion.div>

      <motion.div
        className="planSingle"
        variants={scaleIn}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
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

            <motion.ul
              className="planSingleFeatures"
              variants={staggerParent(0.05, 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              {t.planFeatures.map((f) => (
                <motion.li key={f} variants={featureItem}>
                  <CheckIcon />
                  {f}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
