import { PhoneIcon, WhatsappIcon } from "./icons";
import { TEL_HREF, WHATSAPP_URL } from "../data/contact";

/*
 * Botones flotantes fijos: WhatsApp y llamada directa.
 * Siempre visibles en la esquina inferior derecha.
 */
export default function FloatingContact() {
  return (
    <div className="floatContact" aria-label="Contacto rápido">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="floatBtn floatBtn--wa"
        aria-label="WhatsApp"
      >
        <WhatsappIcon />
      </a>
      <a href={TEL_HREF} className="floatBtn floatBtn--call" aria-label="Llamar">
        <PhoneIcon />
      </a>
    </div>
  );
}
