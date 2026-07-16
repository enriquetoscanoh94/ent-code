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
import { useSpotlight } from "../hooks/useSpotlight";

// El ícono se asocia por nombre (no por índice del array):
// así el dato y su ícono nunca se desfasan.
const ICONS = {
  world: WorldIcon,
  automation: SettingsIcon,
  ai: CpuIcon,
  webapp: MonitorIcon,
  branding: EditIcon,
  integrations: LinkIcon,
  ecommerce: BagIcon,
  hosting: ServerIcon,
};

export default function Services({ t }) {
  const gridRef = useSpotlight();
  return (
    <section id="services" className="section">
      <div className="sectionHead">
        <h2>{t.servicesTitle}</h2>
        <p>{t.servicesSubtitle}</p>
      </div>
      <div className="grid servicesGrid" ref={gridRef}>
        {t.services.map(({ icon, title, description }) => {
          const Icon = ICONS[icon];
          return (
            <article className="card" key={title}>
              <div className="serviceIcon">{Icon && <Icon />}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
