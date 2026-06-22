import { motion } from "motion/react";
import { fadeUp, staggerParent, viewportOnce, EASE_OUT_EXPO } from "../utils/motion";

const stepVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
};

const numberVariant = {
  hidden: { scale: 0.4, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.55, ease: EASE_OUT_EXPO, delay: 0.1 } },
};

export default function Process({ t }) {
  return (
    <section id="process" className="section">
      <motion.div
        className="sectionHead"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <h2>{t.processTitle}</h2>
        <p>{t.processSubtitle}</p>
      </motion.div>
      <motion.div
        className="grid processGrid"
        variants={staggerParent(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {t.steps.map(({ title, description }, i) => (
          <motion.article className="card" key={title} variants={stepVariant}>
            <motion.span className="stepNumber" variants={numberVariant}>
              {i + 1}
            </motion.span>
            <h3>{title}</h3>
            <p>{description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
