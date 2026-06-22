import { motion } from "motion/react";
import { fadeUp, staggerParent, viewportOnce, EASE_OUT_EXPO } from "../utils/motion";
import {
  WorldIcon,
  SettingsIcon,
  CpuIcon,
  MonitorIcon,
  EditIcon,
  LinkIcon,
  BagIcon,
  ServerIcon,
} from "./icons";

const SERVICE_ICONS = [WorldIcon, SettingsIcon, CpuIcon, MonitorIcon, EditIcon, LinkIcon, BagIcon, ServerIcon];

const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE_OUT_EXPO },
  },
};

export default function Services({ t }) {
  return (
    <section id="services" className="section">
      <motion.div
        className="sectionHead"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <h2>{t.servicesTitle}</h2>
        <p>{t.servicesSubtitle}</p>
      </motion.div>
      <motion.div
        className="grid servicesGrid"
        variants={staggerParent(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {t.services.map(({ title, description }, i) => {
          const Icon = SERVICE_ICONS[i];
          return (
            <motion.article className="card" key={title} variants={cardVariant}>
              <div className="serviceIcon"><Icon /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
