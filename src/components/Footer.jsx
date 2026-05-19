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
          <a href="#plans">{t.nav[0]}</a>
          <a href="#services">{t.nav[1]}</a>
          <a href="#contact">{t.nav[3]}</a>
        </div>
      </div>
    </footer>
  );
}
