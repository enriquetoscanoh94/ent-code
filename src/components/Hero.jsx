import { motion } from "motion/react";
import { EASE_OUT_EXPO } from "../utils/motion";

export default function Hero({ t }) {
  return (
    <section id="home" className="hero section">
      <motion.div
        className="heroGlow"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: EASE_OUT_EXPO }}
      />
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.1 }}
      >
        {t.eyebrow}
      </motion.p>
      <motion.h1
        className="heroHeadline"
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.2 }}
      >
        {t.headline.before}<em>{t.headline.highlight}</em>
      </motion.h1>
      <motion.p
        className="subtitle"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.4 }}
      >
        {t.subtitle}
      </motion.p>
    </section>
  );
}
