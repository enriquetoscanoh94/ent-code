import React, { useMemo, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const EJ_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EJ_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EJ_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const copy = {
  es: {
    nav: ["Paquete", "Servicios", "Proceso", "Contacto"],
    lang: "EN",
    cta: "Empezar proyecto",
    eyebrow: "Agencia digital para negocios modernos",
    headline: "Creamos presencia digital premium que convierte visitas en clientes.",
    subtitle:
      "ENT-CODE construye sitios web, automatizaciones, branding e integraciones listas para lanzar tu negocio con una imagen profesional.",
    primary: "Quiero mi sitio por $249",
    secondary: "Ver paquete",
    badge: "Pago único · Dominio incluido · Deploy listo",
    servicesTitle: "Servicios digitales para lanzar, automatizar y vender mejor",
    servicesSubtitle:
      "Todo se diseña con una metodología interna de análisis de nicho y neuromarketing aplicada al diseño para mejorar claridad, confianza y conversión.",
    services: [
      ["Sitios web", "Landing pages y sitios profesionales optimizados para presentar tu negocio con claridad.", "🌐"],
      ["Automatización", "Flujos simples para ahorrar tiempo, ordenar procesos y reducir trabajo manual.", "⚙️"],
      ["Inteligencia artificial", "Chatbots, agentes, generación de contenido y herramientas inteligentes para tu operación.", "🤖"],
      ["Apps web", "Aplicaciones ligeras, dashboards y herramientas internas hechas a la medida.", "📱"],
      ["Branding y logo", "Identidad visual limpia, profesional y coherente con tu mercado.", "🎨"],
      ["Integraciones y APIs", "Conectamos formularios, plataformas, bases de datos y servicios externos.", "🔗"],
      ["E-commerce", "Estructuras para vender productos, servicios o paquetes digitales de forma directa.", "🛒"],
      ["Dominio, hosting y QR", "Código QR personalizado, dominio, publicación y configuración inicial del sitio.", "🚀"],
    ],
    packageTitle: "Tu página web por $249",
    packageSubtitle:
      "Una solución completa para negocios que necesitan verse profesionales, generar confianza y empezar rápido sin complicarse.",
    priceLabel: "Pago único",
    includes: [
      "Sitio web completo",
      "Estudio de nicho y neuromarketing",
      "Logo e identidad de marca",
      "Dominio .com incluido 1 año",
      "Código QR personalizado",
      "Formulario de contacto",
      "Versión móvil optimizada",
      "SEO básico",
      "Hosting y deploy primer mes",
    ],
    processTitle: "Proceso claro en 4 pasos",
    processSubtitle:
      "Sin vueltas. Primero entendemos tu negocio, después diseñamos una presencia digital lista para vender.",
    steps: [
      ["Contacto", "Recibimos tu información, objetivo, tipo de negocio y referencias visuales."],
      ["Análisis", "Aplicamos estudio de nicho y neuromarketing para definir estructura, mensaje y enfoque visual."],
      ["Diseño y desarrollo", "Construimos el sitio, identidad, formulario, responsive móvil y configuración inicial."],
      ["Entrega", "Publicamos, entregamos enlaces, dominio, QR y dejamos el proyecto listo para compartir."],
    ],
    contactTitle: "Hablemos de tu proyecto",
    contactSubtitle:
      "Déjanos tus datos y cuéntanos qué necesitas. Te responderemos con el siguiente paso para iniciar.",
    directLabel: "Contacto directo",
    smsBtn: "Mensaje de texto",
    whatsappBtn: "WhatsApp",
    facebookBtn: "Facebook",
    form: ["Nombre completo", "Email", "Teléfono", "Tipo de negocio", "Cuéntanos qué quieres construir"],
    submit: "Enviar solicitud",
    successMsg: "¡Solicitud enviada! Te contactamos pronto.",
    footer: "Desarrollo digital, automatización e inteligencia artificial para negocios modernos.",
    copyright: "ENT-CODE. Todos los derechos reservados.",
  },
  en: {
    nav: ["Package", "Services", "Process", "Contact"],
    lang: "ES",
    cta: "Start project",
    eyebrow: "Digital agency for modern businesses",
    headline: "We build premium digital presence that turns visitors into clients.",
    subtitle:
      "ENT-CODE builds websites, automations, branding and integrations ready to launch your business with a professional image.",
    primary: "Get my site for $249",
    secondary: "View package",
    badge: "One-time payment · Domain included · Deploy ready",
    servicesTitle: "Digital services to launch, automate and sell better",
    servicesSubtitle:
      "Everything is designed with an internal niche research and neuromarketing methodology applied to improve clarity, trust and conversion.",
    services: [
      ["Websites", "Landing pages and professional websites optimized to present your business clearly.", "🌐"],
      ["Automation", "Simple workflows to save time, organize processes and reduce manual work.", "⚙️"],
      ["Artificial intelligence", "Chatbots, agents, content generation and intelligent tools for your operation.", "🤖"],
      ["Web apps", "Lightweight applications, dashboards and custom internal tools.", "📱"],
      ["Branding and logo", "Clean, professional and consistent visual identity for your market.", "🎨"],
      ["Integrations and APIs", "We connect forms, platforms, databases and external services.", "🔗"],
      ["E-commerce", "Structures to sell products, services or digital packages directly.", "🛒"],
      ["Domain, hosting and QR", "Custom QR code, domain, publishing and initial website setup.", "🚀"],
    ],
    packageTitle: "Your website for $249",
    packageSubtitle:
      "A complete solution for businesses that need to look professional, build trust and launch quickly without complications.",
    priceLabel: "One-time payment",
    includes: [
      "Complete website",
      "Niche research and neuromarketing",
      "Logo and brand identity",
      ".com domain included 1 year",
      "Custom QR code",
      "Contact form",
      "Mobile optimized version",
      "Basic SEO",
      "Hosting and deploy first month",
    ],
    processTitle: "Clear 4-step process",
    processSubtitle:
      "No confusion. First we understand your business, then we design a digital presence ready to sell.",
    steps: [
      ["Contact", "We receive your information, goal, business type and visual references."],
      ["Analysis", "We apply niche research and neuromarketing to define structure, message and visual direction."],
      ["Design and development", "We build the site, identity, form, mobile responsive version and initial setup."],
      ["Delivery", "We publish, deliver links, domain, QR and leave the project ready to share."],
    ],
    contactTitle: "Let's talk about your project",
    contactSubtitle:
      "Leave your details and tell us what you need. We will reply with the next step to begin.",
    directLabel: "Direct contact",
    smsBtn: "Text message",
    whatsappBtn: "WhatsApp",
    facebookBtn: "Facebook",
    form: ["Full name", "Email", "Phone", "Business type", "Tell us what you want to build"],
    submit: "Send request",
    successMsg: "Request sent! We'll contact you soon.",
    footer: "Digital development, automation and artificial intelligence for modern businesses.",
    copyright: "ENT-CODE. All rights reserved.",
  },
};

function App() {
  const [lang, setLang] = useState("es");
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [fields, setFields] = useState({ name: "", email: "", whatsapp: "", business: "", message: "" });
  const t = useMemo(() => copy[lang], [lang]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function setField(key) {
    return (e) => setFields((f) => ({ ...f, [key]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        EJ_SERVICE,
        EJ_TEMPLATE,
        {
          from_name: fields.name,
          from_email: fields.email,
          reply_to: fields.email,
          phone: fields.whatsapp,
          business: fields.business,
          message: fields.message,
        },
        EJ_KEY
      );
    } catch (_) {}
    setSending(false);
    setSubmitted(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className={dark ? "site dark" : "site"}>
      <style>{css}</style>

      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <a href="#home" className="brand" onClick={closeMenu}>
          <img src="/logo.png" alt="ENT-CODE logo" />
        </a>

        <div className={`navlinks${menuOpen ? " open" : ""}`}>
          {t.nav.map((label, i) => (
            <a key={i} href={`#${["package","services","process","contact"][i]}`} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </div>

        <div className="actions">
          <button className="iconBtn" onClick={() => setLang(lang === "es" ? "en" : "es")} aria-label="Cambiar idioma">
            {t.lang}
          </button>
          <button className="iconBtn" onClick={() => setDark(!dark)} aria-label="Cambiar tema">
            {dark ? "Claro" : "Oscuro"}
          </button>
          <a href="#contact" className="navCta" onClick={closeMenu}>{t.cta}</a>
          <button className={`hamburger${menuOpen ? " active" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {menuOpen && <div className="mobileOverlay" onClick={closeMenu} />}

      <section id="home" className="hero section">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.headline}</h1>
        <p className="subtitle">{t.subtitle}</p>
        <div className="heroButtons">
          <a href="#contact" className="btn primary">{t.primary}</a>
          <a href="#package" className="btn secondary">{t.secondary}</a>
        </div>
        <p className="badge">{t.badge}</p>
      </section>

      <section id="package" className="section packageSection">
        <div className="sectionHead narrow">
          <h2>{t.packageTitle}</h2>
          <p>{t.packageSubtitle}</p>
        </div>

        <div className="pricingCard">
          <div className="priceTop">
            <h3>$249 <span>USD</span></h3>
          </div>

          <div className="includesGrid">
            {t.includes.map((item) => (
              <div key={item} className="includeItem">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="sectionHead">
          <h2>{t.servicesTitle}</h2>
          <p>{t.servicesSubtitle}</p>
        </div>

        <div className="grid servicesGrid">
          {t.services.map(([title, desc]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="section">
        <div className="sectionHead">
          <h2>{t.processTitle}</h2>
          <p>{t.processSubtitle}</p>
        </div>

        <div className="grid processGrid">
          {t.steps.map(([title, desc], i) => (
            <article className="card" key={title}>
              <span className="stepNumber">{i + 1}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contactSection">
        <div className="sectionHead narrow">
          <h2>{t.contactTitle}</h2>
          <p>{t.contactSubtitle}</p>
          <div className="smsBlock">
            <p className="directLabel">{t.directLabel}</p>
            <div className="directBtns">
              <a href="sms:+12098658015" className="directBtn directBtn--sms">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
                {t.smsBtn}
              </a>
              <a href="https://wa.me/12098658015" target="_blank" rel="noopener noreferrer" className="directBtn directBtn--wa">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.523 5.854L.057 23.405a.5.5 0 0 0 .609.625l5.716-1.498A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.886 9.886 0 0 1-5.031-1.371l-.36-.214-3.733.979.997-3.64-.235-.374A9.861 9.861 0 0 1 2.1 12C2.1 6.534 6.534 2.1 12 2.1c5.466 0 9.9 4.434 9.9 9.9 0 5.466-4.434 9.9-9.9 9.9z"/></svg>
                {t.whatsappBtn}
              </a>
              <a href="https://www.facebook.com/profile.php?id=61589234410464" target="_blank" rel="noopener noreferrer" className="directBtn directBtn--fb">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                {t.facebookBtn}
              </a>
            </div>
          </div>
        </div>

        <form className="contactForm" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="successMsg">
              <span>✓</span>
              <p>{t.successMsg}</p>
            </div>
          ) : (
            <>
              <div className="formGrid">
                <input placeholder={t.form[0]} required value={fields.name} onChange={setField("name")} />
                <input placeholder={t.form[1]} type="email" required value={fields.email} onChange={setField("email")} />
                <input placeholder={t.form[2]} value={fields.whatsapp} onChange={setField("whatsapp")} />
                <input placeholder={t.form[3]} value={fields.business} onChange={setField("business")} />
              </div>
              <textarea placeholder={t.form[4]} value={fields.message} onChange={setField("message")} />
              <button type="submit" className="btn primary full" disabled={sending}>
                {sending ? "Enviando..." : t.submit}
              </button>
            </>
          )}
        </form>
      </section>

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
            <a href="#services">{t.nav[0]}</a>
            <a href="#package">{t.nav[1]}</a>
            <a href="#contact">{t.nav[3]}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const css = `
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.site {
  min-height: 100vh;
  color: #08080a;
  background:
    radial-gradient(circle at top left, rgba(34, 197, 94, 0.18), transparent 32rem),
    radial-gradient(circle at top right, rgba(124, 58, 237, 0.14), transparent 34rem),
    #ffffff;
  transition: background 0.3s ease, color 0.3s ease;
}

.site.dark {
  color: #d8d8e8;
  background:
    radial-gradient(circle at top left, rgba(34, 197, 94, 0.12), transparent 32rem),
    radial-gradient(circle at top right, rgba(124, 58, 237, 0.16), transparent 34rem),
    #07070a;
}

a {
  color: inherit;
  text-decoration: none;
}

/* ── NAVBAR ──────────────────────────────── */

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 115px;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 0 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: box-shadow 0.3s ease, background 0.3s ease;
}

.navbar.scrolled {
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
}

.dark .navbar {
  border-bottom-color: rgba(255, 255, 255, 0.1);
  background: rgba(7, 7, 10, 0.8);
}

.dark .navbar.scrolled {
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  flex-shrink: 0;
}

.brand img {
  width: auto;
  height: 160px;
  display: block;
  flex-shrink: 0;
}

.navlinks {
  display: flex;
  gap: 28px;
  font-size: 14px;
  font-weight: 600;
}

.navlinks a {
  color: #5f6368;
  position: relative;
  padding-bottom: 2px;
  transition: color 0.2s ease;
}

.navlinks a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #22c55e, #7c3aed);
  border-radius: 2px;
  transition: width 0.25s ease;
}

.navlinks a:hover {
  color: #08080a;
}

.navlinks a:hover::after {
  width: 100%;
}

.dark .navlinks a {
  color: #a0a0b0;
}

.dark .navlinks a:hover {
  color: #ffffff;
}

.actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.iconBtn {
  min-height: 38px;
  min-width: 52px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 999px;
  background: #ffffff;
  color: #111111;
  padding: 0 14px;
  font-size: 13px;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}

.iconBtn:hover {
  background: #f4f4f8;
}

.dark .iconBtn {
  border-color: rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
}

.dark .iconBtn:hover {
  background: rgba(255, 255, 255, 0.12);
}

.navCta {
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  border-radius: 999px;
  padding: 0 18px;
  font-size: 13px;
  font-weight: 800;
  font-family: inherit;
  background: #08080a;
  color: #ffffff;
  border: 1px solid #08080a;
  transition: opacity 0.2s;
}

.navCta:hover {
  opacity: 0.82;
}

.dark .navCta {
  background: #ffffff;
  color: #08080a;
  border-color: #ffffff;
}

/* ── HAMBURGER ──────────────────────────── */

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  background: transparent;
  cursor: pointer;
  padding: 0 10px;
}

.hamburger span {
  display: block;
  height: 2px;
  background: #08080a;
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.dark .hamburger span {
  background: #ffffff;
}

.hamburger.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.mobileOverlay {
  position: fixed;
  inset: 0;
  z-index: 90;
  background: rgba(0,0,0,0.3);
  backdrop-filter: blur(4px);
}

/* ── HERO ────────────────────────────────── */

.section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 110px 28px;
}

.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 180px;
  max-width: 900px;
}

.eyebrow {
  display: inline-flex;
  margin: 0 0 24px;
  padding: 10px 16px;
  border: 1px solid rgba(34, 197, 94, 0.25);
  border-radius: 999px;
  color: #047857;
  background: rgba(34, 197, 94, 0.1);
  font-size: 13px;
  font-weight: 800;
}

.dark .eyebrow {
  color: #86efac;
}

h1, h2, h3, p {
  margin-top: 0;
}

h1 {
  max-width: 850px;
  margin-bottom: 28px;
  font-size: clamp(48px, 7vw, 88px);
  line-height: 0.92;
  letter-spacing: -0.06em;
  font-weight: 900;
}

.subtitle,
.sectionHead p,
.card p,
.footer p {
  color: #63666d;
}

.dark .subtitle,
.dark .sectionHead p,
.dark .card p,
.dark .footer p {
  color: #b0b0c0;
}

.subtitle {
  max-width: 680px;
  font-size: 19px;
  line-height: 1.7;
}

.heroButtons {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin: 36px 0 18px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 54px;
  border-radius: 999px;
  padding: 0 28px;
  font-size: 15px;
  font-weight: 800;
  font-family: inherit;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.primary {
  color: #ffffff;
  background: linear-gradient(90deg, #22c55e, #7c3aed);
  box-shadow: 0 8px 30px rgba(124, 58, 237, 0.3);
}

.primary:hover {
  box-shadow: 0 14px 40px rgba(124, 58, 237, 0.4);
}

.secondary {
  color: #08080a;
  background: #ffffff;
  border-color: rgba(0, 0, 0, 0.14);
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}

.dark .secondary {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.15);
}

.badge {
  color: #888;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.01em;
}

/* ── HERO CARD ───────────────────────────── */

.pricingCard,
.contactForm,
.card {
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.07);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.dark .pricingCard,
.dark .contactForm,
.dark .card {
  border-color: rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.35);
}

.heroCard {
  padding: 32px;
}

.heroLogo {
  display: block;
  width: 100%;
  height: auto;
  margin: 0 auto 28px;
}

.miniRow {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 12px;
  padding: 16px 18px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  background: rgba(255, 255, 255, 0.7);
}

.dark .miniRow {
  border-color: rgba(255, 255, 255, 0.08);
  background: rgba(0, 0, 0, 0.2);
}

.checkIcon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 50%;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: #fff;
  font-size: 12px;
  font-weight: 900;
}

.miniRow p {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  color: #08080a;
}

.dark .miniRow p {
  color: #e8e8f0;
}

/* ── SECTIONS ────────────────────────────── */

.sectionHead {
  max-width: 780px;
  margin-bottom: 52px;
}

.sectionHead.narrow {
  max-width: 640px;
}

h2 {
  margin-bottom: 18px;
  font-size: clamp(36px, 5vw, 64px);
  line-height: 0.98;
  letter-spacing: -0.055em;
  font-weight: 900;
}

.sectionHead p {
  font-size: 17px;
  line-height: 1.75;
}

.grid {
  display: grid;
  gap: 16px;
}

.servicesGrid {
  grid-template-columns: repeat(4, 1fr);
}

.processGrid {
  grid-template-columns: repeat(4, 1fr);
}

.card {
  padding: 28px;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-5px);
  border-color: rgba(124, 58, 237, 0.3);
  box-shadow: 0 24px 60px rgba(124, 58, 237, 0.1);
}

.dark .card:hover {
  box-shadow: 0 24px 60px rgba(124, 58, 237, 0.18);
}

.cardIcon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(34,197,94,0.12), rgba(124,58,237,0.12));
  font-size: 22px;
  margin-bottom: 20px;
}

.card h3 {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 10px;
}

.card p {
  font-size: 14px;
  line-height: 1.65;
}

/* ── PACKAGE ─────────────────────────────── */

.packageSection {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 44px;
  align-items: center;
}

.pricingCard {
  padding: 36px;
  background: linear-gradient(135deg, rgba(255,255,255,0.97), rgba(236,253,245,0.97));
}

.dark .pricingCard {
  background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(34,197,94,0.07));
}

.priceTop {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: flex-end;
  padding-bottom: 28px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
}

.dark .priceTop {
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

.priceLabel {
  margin-bottom: 8px;
  color: #6d28d9;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.priceTop h3 {
  margin: 0;
  font-size: 72px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.08em;
}

.priceTop h3 span {
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0;
  color: #8888a0;
}

.includesGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 24px;
}

.includeItem {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  background: rgba(255, 255, 255, 0.75);
  font-size: 13px;
  font-weight: 700;
}

.dark .includeItem {
  border-color: rgba(255, 255, 255, 0.08);
  background: rgba(0, 0, 0, 0.2);
}

.checkGreen {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border-radius: 50%;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: #fff;
  font-size: 10px;
  font-weight: 900;
}

/* ── PROCESS ─────────────────────────────── */

.stepNumber {
  display: inline-flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  border-radius: 50%;
  background: #08080a;
  color: #ffffff;
  font-size: 18px;
  font-weight: 900;
}

.dark .stepNumber {
  background: #ffffff;
  color: #08080a;
}

/* ── DIRECT CONTACT BLOCK ────────────────── */

.smsBlock {
  margin-top: 32px;
  padding-top: 28px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.dark .smsBlock {
  border-top-color: rgba(255, 255, 255, 0.1);
}

.directLabel {
  margin-bottom: 14px;
  font-size: 11px;
  font-weight: 800;
  color: #888 !important;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.directBtns {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.directBtn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 44px;
  border-radius: 999px;
  padding: 0 18px;
  font-size: 14px;
  font-weight: 800;
  font-family: inherit;
  color: #ffffff;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
  white-space: nowrap;
}

.directBtn:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

.directBtn--sms {
  background: #08080a;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.dark .directBtn--sms {
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.directBtn--wa {
  background: #25d366;
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.35);
}

.directBtn--fb {
  background: #1877f2;
  box-shadow: 0 6px 20px rgba(24, 119, 242, 0.35);
}

/* ── CONTACT ─────────────────────────────── */

.contactSection {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 44px;
  align-items: start;
}

.contactForm {
  padding: 32px;
}

.formGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

input,
textarea {
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 14px;
  background: #ffffff;
  color: #08080a;
  padding: 15px 16px;
  font: inherit;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input::placeholder,
textarea::placeholder {
  color: #aaaabc;
}

input:focus,
textarea:focus {
  border-color: #7c3aed;
  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.12);
}

.dark input,
.dark textarea {
  border-color: rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
}

.dark input::placeholder,
.dark textarea::placeholder {
  color: #6666a0;
}

.dark input:focus,
.dark textarea:focus {
  border-color: #a855f7;
  box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.15);
}

textarea {
  min-height: 140px;
  resize: vertical;
  margin-top: 12px;
}

.full {
  width: 100%;
  margin-top: 14px;
  border: 0;
  cursor: pointer;
  font-family: inherit;
}

.successMsg {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 48px 24px;
  text-align: center;
}

.successMsg span {
  display: inline-flex;
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: #fff;
  font-size: 24px;
  font-weight: 900;
}

.successMsg p {
  font-size: 18px;
  font-weight: 700;
  color: #08080a;
}

.dark .successMsg p {
  color: #e8e8f0;
}

/* ── FOOTER ──────────────────────────────── */

.footer {
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  margin-top: 40px;
}

.dark .footer {
  border-top-color: rgba(255, 255, 255, 0.1);
}

.footerTop {
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 28px 40px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 32px;
  align-items: center;
}

.footerTop .brand img {
  height: 140px;
}

.footerBottom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.07);
}

.dark .footerBottom {
  border-top-color: rgba(255, 255, 255, 0.08);
}

.footerBottom p {
  margin: 0;
  font-size: 13px;
  color: #a0a0b0;
}

.footerLinks {
  display: flex;
  gap: 20px;
  font-size: 13px;
  font-weight: 600;
  color: #a0a0b0;
}

.footerLinks a:hover {
  color: #08080a;
}

.dark .footerLinks a:hover {
  color: #ffffff;
}

.footer p {
  font-size: 15px;
  line-height: 1.6;
  max-width: 440px;
}

/* ── RESPONSIVE ──────────────────────────── */

@media (max-width: 1020px) {
  .navbar {
    padding: 0 20px;
  }

  .navlinks,
  .navCta {
    display: none;
  }

  .navlinks.open {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 115px;
    left: 0;
    right: 0;
    z-index: 95;
    background: rgba(255, 255, 255, 0.97);
    backdrop-filter: blur(20px);
    padding: 20px 24px 28px;
    gap: 4px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    box-shadow: 0 16px 40px rgba(0,0,0,0.1);
  }

  .dark .navlinks.open {
    background: rgba(10, 10, 14, 0.97);
    border-bottom-color: rgba(255,255,255,0.1);
  }

  .navlinks.open a {
    padding: 14px 8px;
    font-size: 16px;
    border-bottom: 1px solid rgba(0,0,0,0.06);
  }

  .dark .navlinks.open a {
    border-bottom-color: rgba(255,255,255,0.06);
  }

  .hamburger {
    display: flex;
  }

  .hero,
  .packageSection,
  .contactSection {
    grid-template-columns: 1fr;
  }

  .servicesGrid,
  .processGrid {
    grid-template-columns: repeat(2, 1fr);
  }

  .priceTop {
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
  }

  .footerTop {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 640px) {
  .brand span {
    display: none;
  }

  .section {
    padding: 90px 18px;
  }

  .hero {
    padding-top: 120px;
  }

  h1 {
    font-size: 44px;
    line-height: 1;
  }

  .servicesGrid,
  .processGrid,
  .includesGrid,
  .formGrid {
    grid-template-columns: 1fr;
  }

  .priceTop h3 {
    font-size: 58px;
  }

  .footerBottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
`;

export default App;
