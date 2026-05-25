import { useState } from "react";
import emailjs from "@emailjs/browser";
import { SmsIcon, WhatsappIcon, FacebookIcon } from "./icons";
import { SMS_HREF, WHATSAPP_URL, FACEBOOK_URL } from "../data/contact";

const EJ_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EJ_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EJ_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (!EJ_SERVICE || !EJ_TEMPLATE || !EJ_KEY) {
  console.warn("EmailJS: faltan variables de entorno (VITE_EMAILJS_*)");
}

const EMPTY_FIELDS = { name: "", email: "", phone: "", business: "", message: "", honeypot: "" };

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
          reply_to:  fields.email,
          phone:     fields.phone,
          business:  fields.business,
          message:   fields.message,
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
            <a href={SMS_HREF} className="directBtn directBtn--sms">
              <SmsIcon />
              {t.smsBtn}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="directBtn directBtn--wa">
              <WhatsappIcon />
              {t.whatsappBtn}
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="directBtn directBtn--fb">
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
              <input placeholder={t.form.name}     required value={fields.name}     onChange={setField("name")} />
              <input placeholder={t.form.email}    type="email" required value={fields.email}    onChange={setField("email")} />
              <input placeholder={t.form.phone}    value={fields.phone}    onChange={setField("phone")} />
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
