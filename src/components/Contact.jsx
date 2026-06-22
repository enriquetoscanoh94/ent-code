import { useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { SmsIcon, WhatsappIcon, FacebookIcon } from "./icons";
import { SMS_HREF, WHATSAPP_URL, FACEBOOK_URL } from "../data/contact";
import { fadeUp, staggerParent, viewportOnce, EASE_OUT_EXPO } from "../utils/motion";

const EJ_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EJ_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EJ_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAIL_READY = Boolean(EJ_SERVICE && EJ_TEMPLATE && EJ_KEY);

if (!EMAIL_READY) {
  console.warn("EmailJS: faltan variables de entorno (VITE_EMAILJS_*). El form caerá a WhatsApp.");
}

const EMPTY_FIELDS = { name: "", email: "", phone: "", business: "", message: "", honeypot: "" };

const directBtnVariant = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT_EXPO } },
};

export default function Contact({ t }) {
  const [fields, setFields] = useState(EMPTY_FIELDS);
  const [status, setStatus] = useState("idle");

  function setField(key) {
    return (e) => setFields((f) => ({ ...f, [key]: e.target.value }));
  }

  function resetForm() {
    setFields(EMPTY_FIELDS);
    setStatus("idle");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (fields.honeypot) return;
    if (!EMAIL_READY) {
      setStatus("error");
      return;
    }
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
      <motion.div
        className="sectionHead narrow"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <h2>{t.contactTitle}</h2>
        <p>{t.contactSubtitle}</p>
        <div className="smsBlock">
          <p className="directLabel">{t.directLabel}</p>
          <motion.div
            className="directBtns"
            variants={staggerParent(0.08, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.a href={SMS_HREF} className="directBtn directBtn--sms" variants={directBtnVariant}>
              <SmsIcon />
              {t.smsBtn}
            </motion.a>
            <motion.a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="directBtn directBtn--wa" variants={directBtnVariant}>
              <WhatsappIcon />
              {t.whatsappBtn}
            </motion.a>
            <motion.a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="directBtn directBtn--fb" variants={directBtnVariant}>
              <FacebookIcon />
              {t.facebookBtn}
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      <motion.form
        className="contactForm"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
      >
        {status === "success" && (
          <div className="successMsg">
            <span>✓</span>
            <p>{t.successMsg}</p>
            <button type="button" className="btn ghost" onClick={resetForm}>
              {t.sendAnother || (t.submit + " otro")}
            </button>
          </div>
        )}
        {status === "error" && (
          <div className="errorMsg">
            <span>✕</span>
            <p>{t.errorMsg}</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn primary">
              {t.whatsappBtn}
            </a>
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
              <div className="fieldWrap">
                <label htmlFor="f-name" className="srOnly">{t.form.name}</label>
                <input id="f-name" placeholder={t.form.name} required value={fields.name} onChange={setField("name")} />
              </div>
              <div className="fieldWrap">
                <label htmlFor="f-email" className="srOnly">{t.form.email}</label>
                <input id="f-email" type="email" placeholder={t.form.email} required value={fields.email} onChange={setField("email")} />
              </div>
              <div className="fieldWrap">
                <label htmlFor="f-phone" className="srOnly">{t.form.phone}</label>
                <input id="f-phone" placeholder={t.form.phone} value={fields.phone} onChange={setField("phone")} />
              </div>
              <div className="fieldWrap">
                <label htmlFor="f-business" className="srOnly">{t.form.business}</label>
                <input id="f-business" placeholder={t.form.business} value={fields.business} onChange={setField("business")} />
              </div>
            </div>
            <div className="fieldWrap">
              <label htmlFor="f-message" className="srOnly">{t.form.message}</label>
              <textarea id="f-message" placeholder={t.form.message} value={fields.message} onChange={setField("message")} />
            </div>
            <button type="submit" className="btn primary full" disabled={!EMAIL_READY || status === "sending"}>
              {status === "sending" ? t.sending : t.submit}
            </button>
          </>
        )}
      </motion.form>
    </section>
  );
}
