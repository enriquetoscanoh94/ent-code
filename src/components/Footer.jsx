import { scrollToSection } from "../utils/scroll";

function FooterLink({ label, href }) {
  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        onClick={(e) => { e.preventDefault(); scrollToSection(href.slice(1)); }}
      >
        {label}
      </a>
    );
  }
  return <a href={href}>{label}</a>;
}

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="brand">
          <img src="/logo.png" alt="ENT-CODE logo" />
        </div>
        <p>{t.footer}</p>
      </div>
      <div className="footerBottom">
        <p>© {new Date().getFullYear()} {t.copyright}</p>
        <div className="footerLinks">
          {t.footerLinks.map(({ label, href }) => (
            <FooterLink key={label} label={label} href={href} />
          ))}
        </div>
      </div>
    </footer>
  );
}
