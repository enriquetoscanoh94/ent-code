import { CodeIcon, ZapIcon, WorldIcon, MsgIcon, ShieldIcon, GitIcon } from "./icons";

const WHY_ICONS = [CodeIcon, ZapIcon, WorldIcon, MsgIcon, ShieldIcon, GitIcon];

export default function WhyUs({ t }) {
  return (
    <section id="why" className="section">
      <div className="sectionHead">
        <h2>{t.whyTitle}</h2>
        <p>{t.whySubtitle}</p>
      </div>
      <div className="whyGrid">
        {t.why.map(({ title, description }, i) => {
          const Icon = WHY_ICONS[i];
          return (
            <article className="whyCard" key={title}>
              <div className="whyIcon"><Icon /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
