import { CodeIcon, ZapIcon, WorldIcon, MsgIcon, ShieldIcon, GitIcon } from "./icons";

// El ícono se asocia por nombre (no por índice del array).
const ICONS = {
  code: CodeIcon,
  fast: ZapIcon,
  bilingual: WorldIcon,
  support: MsgIcon,
  shield: ShieldIcon,
  git: GitIcon,
};

export default function WhyUs({ t }) {
  return (
    <section id="why" className="section">
      <div className="sectionHead">
        <h2>{t.whyTitle}</h2>
        <p>{t.whySubtitle}</p>
      </div>
      <div className="whyGrid">
        {t.why.map(({ icon, title, description }) => {
          const Icon = ICONS[icon];
          return (
            <article className="whyCard" key={title}>
              <div className="whyIcon">{Icon && <Icon />}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
