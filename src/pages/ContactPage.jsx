import { Link } from "react-router-dom";
import copy from "../data/copy";
import { useApp } from "../context/AppContext";
import { PhoneIcon, SmsIcon, WhatsappIcon, FacebookIcon, GlobeIcon, InstagramIcon, EmailIcon, SaveContactIcon } from "../components/icons";
import { TEL_HREF, SMS_HREF, EMAIL_HREF, WHATSAPP_URL, FACEBOOK_URL, INSTAGRAM_URL, WEBSITE_URL, PHONE_DISPLAY, PHONE, EMAIL } from "../data/contact";

function downloadVCard() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:ENT-CODE Digital Agency",
    "ORG:ENT-CODE",
    `TEL;TYPE=CELL:${PHONE}`,
    `EMAIL:${EMAIL}`,
    `URL:${WEBSITE_URL}`,
    `X-SOCIALPROFILE;TYPE=instagram:${INSTAGRAM_URL}`,
    "END:VCARD",
  ].join("\r\n");

  const blob = new Blob([vcard], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "ENT-CODE.vcf";
  a.click();
  URL.revokeObjectURL(url);
}

export default function ContactPage() {
  const { lang, toggleLang } = useApp();
  const t = copy[lang];

  const buttons = [
    { href: TEL_HREF,      Icon: PhoneIcon,     label: `${t.callBtn} · ${PHONE_DISPLAY}`, btnClass: "nfcBtn--secondary", iconClass: "nfcBtnIcon--phone" },
    { href: WHATSAPP_URL,  Icon: WhatsappIcon,  label: t.whatsappBtn,                     btnClass: "nfcBtn--secondary", iconClass: "nfcBtnIcon--wa",    external: true },
    { href: INSTAGRAM_URL, Icon: InstagramIcon, label: t.instagramBtn,                    btnClass: "nfcBtn--secondary", iconClass: "nfcBtnIcon--ig",    external: true },
    { href: SMS_HREF,      Icon: SmsIcon,       label: t.smsBtn,                          btnClass: "nfcBtn--secondary", iconClass: "nfcBtnIcon--sms" },
    { href: EMAIL_HREF,    Icon: EmailIcon,     label: t.emailBtn,                        btnClass: "nfcBtn--secondary", iconClass: "nfcBtnIcon--email", external: true },
    { href: FACEBOOK_URL,  Icon: FacebookIcon,  label: t.facebookBtn,                     btnClass: "nfcBtn--secondary", iconClass: "nfcBtnIcon--fb",    external: true },
    { href: WEBSITE_URL,   Icon: GlobeIcon,     label: `ent-code.com · ${t.visitWebsite}`, btnClass: "nfcBtn--secondary", iconClass: "nfcBtnIcon--web",   external: true },
  ];

  return (
    <div className="site dark nfcPage">
      <div className="nfcHeader">
        <Link to="/">
          <img src="/logo.png" alt="ENT-CODE" />
        </Link>
        <p>{t.agencyTagline}</p>
      </div>

      <button
        className="iconBtn nfcLangBtn"
        onClick={toggleLang}
        aria-label="Cambiar idioma"
      >
        {t.lang}
      </button>

      <div className="nfcButtons">
        <button className="nfcBtn nfcBtn--save" onClick={downloadVCard}>
          <span><SaveContactIcon /></span>
          {t.saveContactBtn}
        </button>

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
