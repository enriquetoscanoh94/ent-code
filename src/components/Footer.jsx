import { Link } from "react-router-dom";

function FooterLink({ label, href }) {
  if (href.startsWith("/")) {
    return <Link to={href}>{label}</Link>;
  }
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {label}
    </a>
  );
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
            <FooterLink key={href} label={label} href={href} />
          ))}
        </div>
      </div>
    </footer>
  );
}
