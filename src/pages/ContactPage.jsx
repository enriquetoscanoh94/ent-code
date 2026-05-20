import { useState } from "react";
import { Link } from "react-router-dom";
import copy from "../data/copy";
import { PhoneIcon, SmsIcon, WhatsappIcon, FacebookIcon, GlobeIcon } from "../components/icons";
import { TEL_HREF, SMS_HREF, WHATSAPP_URL, FACEBOOK_URL, WEBSITE_URL, PHONE_DISPLAY } from "../data/contact";

export default function ContactPage() {
  const [lang, setLang] = useState("es");
  const t = copy[lang];

  const buttons = [
    { href: TEL_HREF,     Icon: PhoneIcon,    label: `${t.callBtn} · ${PHONE_DISPLAY}`, btnClass: "nfcBtn--primary",   iconClass: "" },
    { href: SMS_HREF,     Icon: SmsIcon,      label: t.smsBtn,                          btnClass: "nfcBtn--secondary",  iconClass: "nfcBtnIcon--sms" },
    { href: WHATSAPP_URL, Icon: WhatsappIcon, label: t.whatsappBtn,                     btnClass: "nfcBtn--secondary",  iconClass: "nfcBtnIcon--wa",  external: true },
    { href: FACEBOOK_URL, Icon: FacebookIcon, label: t.facebookBtn,                     btnClass: "nfcBtn--secondary",  iconClass: "nfcBtnIcon--fb",  external: true },
    { href: WEBSITE_URL,  Icon: GlobeIcon,    label: `ent-code.com · ${t.visitWebsite}`, btnClass: "nfcBtn--ghost",    iconClass: "nfcBtnIcon--web", external: true },
  ];

  return (
    <div className="site dark nfcPage">
      <div className="nfcHeader">
        <Link to="/">
          <img src="/logo.png" alt="ENT-CODE" />
        </Link>
        <p>Digital Agency</p>
      </div>

      <button
        className="iconBtn nfcLangBtn"
        onClick={() => setLang(lang === "es" ? "en" : "es")}
      >
        {t.lang}
      </button>

      <div className="nfcButtons">
        <p className="directLabel">{t.directLabel}</p>
        {buttons.map(({ href, Icon, label, btnClass, iconClass, external }) => (
          <a
            key={href}
            href={href}
            className={`nfcBtn ${btnClass}`}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <span className={iconClass || undefined}><Icon /></span>
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
