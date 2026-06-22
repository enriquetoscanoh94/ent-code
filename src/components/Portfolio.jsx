import { motion } from "motion/react";
import { PORTFOLIO } from "../data/portfolio";
import { fadeUp, slideLeft, staggerParent, viewportOnce } from "../utils/motion";

export default function Portfolio({ t }) {
  return (
    <section id="portfolio" className="section">
      <motion.div
        className="sectionHead"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <h2>
          {t.portfolioTitle}{" "}
          <span className="portfolioHearts" aria-hidden="true">
            <span className="portfolioHeart">♥</span>
            <span className="portfolioHeart">♥</span>
            <span className="portfolioHeart">♥</span>
          </span>
        </h2>
        <p>{t.portfolioSubtitle}</p>
      </motion.div>
      <motion.div
        className="portfolioCard portfolioListCard"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.ul
          className="portfolioList"
          variants={staggerParent(0.06, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {PORTFOLIO.map((meta, i) => {
            const project = t.portfolio[i];
            const inner = (
              <>
                <span
                  className="portfolioListAccent"
                  style={{ background: meta.gradient }}
                />
                <div className="portfolioListBody">
                  <span className="portfolioCategory">{project.category}</span>
                  <h3>{project.name}</h3>
                </div>
                {meta.link && <span className="portfolioListArrow">→</span>}
              </>
            );
            return (
              <motion.li
                key={meta.id}
                className="portfolioListItem"
                variants={slideLeft}
              >
                {meta.link ? (
                  <a
                    href={`https://${meta.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolioListLink"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="portfolioListLink portfolioListLinkDisabled">
                    {inner}
                  </div>
                )}
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </section>
  );
}
