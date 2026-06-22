import { motion } from "motion/react";
import { fadeUp, staggerParent, viewportOnce, EASE_OUT_EXPO } from "../utils/motion";
import { CodeIcon, ZapIcon, WorldIcon, MsgIcon, ShieldIcon, GitIcon } from "./icons";

const WHY_ICONS = [CodeIcon, ZapIcon, WorldIcon, MsgIcon, ShieldIcon, GitIcon];

const whyCardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
};

export default function WhyUs({ t }) {
  return (
    <section id="why" className="section">
      <motion.div
        className="sectionHead"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <h2>{t.whyTitle}</h2>
        <p>{t.whySubtitle}</p>
      </motion.div>
      <motion.div
        className="whyGrid"
        variants={staggerParent(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {t.why.map(({ title, description }, i) => {
          const Icon = WHY_ICONS[i];
          return (
            <motion.article className="whyCard" key={title} variants={whyCardVariant}>
              <div className="whyIcon"><Icon /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
