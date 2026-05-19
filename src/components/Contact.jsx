import { useState } from "react";
import emailjs from "@emailjs/browser";

const EJ_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EJ_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EJ_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const EMPTY_FIELDS = { name: "", email: "", phone: "", business: "", message: "", honeypot: "" };

const SmsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
  </svg>
);

const WhatsappIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.523 5.854L.057 23.405a.5.5 0 0 0 .609.625l5.716-1.498A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.886 9.886 0 0 1-5.031-1.371l-.36-.214-3.733.979.997-3.64-.235-.374A9.861 9.861 0 0 1 2.1 12C2.1 6.534 6.534 2.1 12 2.1c5.466 0 9.9 4.434 9.9 9.9 0 5.466-4.434 9.9-9.9 9.9z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export default function Contact({ t }) {
  const [fields, setFields] = useState(EMPTY_FIELDS);
  const [status, setStatus] = useState("idle");

  function setField(key) {
    return (e) => setFields((f) => ({ ...f, [key]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (fields.honeypot) return;
    setStatus("sending");
    try {
      await emailjs.send(
        EJ_SERVICE,
        EJ_TEMPLATE,
        {
          from_name: fields.name,
          from_email: fields.email,
          reply_to: fields.email,
          phone: fields.phone,
          business: fields.business,
          message: fields.message,
        },
        EJ_KEY
      );
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section contactSection">
      <div className="sectionHead narrow">
        <h2>{t.contactTitle}</h2>
        <p>{t.contactSubtitle}</p>
        <div className="smsBlock">
          <p className="directLabel">{t.directLabel}</p>
          <div className="directBtns">
            <a href="sms:+12098658015" className="directBtn directBtn--sms">
              <SmsIcon />
              {t.smsBtn}
            </a>
            <a href="https://wa.me/12098658015" target="_blank" rel="noopener noreferrer" className="directBtn directBtn--wa">
              <WhatsappIcon />
              {t.whatsappBtn}
            </a>
            <a href="https://www.facebook.com/profile.php?id=61589234410464" target="_blank" rel="noopener noreferrer" className="directBtn directBtn--fb">
              <FacebookIcon />
              {t.facebookBtn}
            </a>
          </div>
        </div>
      </div>

      <form className="contactForm" onSubmit={handleSubmit}>
        {status === "success" && (
          <div className="successMsg">
            <span>✓</span>
            <p>{t.successMsg}</p>
          </div>
        )}
        {status === "error" && (
          <div className="errorMsg">
            <span>✕</span>
            <p>{t.errorMsg}</p>
          </div>
        )}
        {(status === "idle" || status === "sending") && (
          <>
            <input
              type="text"
              name="website"
              value={fields.honeypot}
              onChange={setField("honeypot")}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />
            <div className="formGrid">
              <input placeholder={t.form.name} required value={fields.name} onChange={setField("name")} />
              <input placeholder={t.form.email} type="email" required value={fields.email} onChange={setField("email")} />
              <input placeholder={t.form.phone} value={fields.phone} onChange={setField("phone")} />
              <input placeholder={t.form.business} value={fields.business} onChange={setField("business")} />
            </div>
            <textarea placeholder={t.form.message} value={fields.message} onChange={setField("message")} />
            <button type="submit" className="btn primary full" disabled={status === "sending"}>
              {status === "sending" ? "Enviando..." : t.submit}
            </button>
          </>
        )}
      </form>
    </section>
  );
}
