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

export default function Services({ t }) {
  return (
    <section id="services" className="section">
      <div className="sectionHead">
        <h2>{t.servicesTitle}</h2>
        <p>{t.servicesSubtitle}</p>
      </div>
      <div className="grid servicesGrid">
        {t.services.map(({ title, description }, i) => {
          const Icon = SERVICE_ICONS[i];
          return (
            <article className="card" key={title}>
              <div className="serviceIcon"><Icon /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
