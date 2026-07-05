/*
 * Única fuente de verdad del portafolio.
 * Cada proyecto lleva su metadata y sus textos ES/EN juntos,
 * unidos por id — así nunca se desfasan al agregar o quitar proyectos.
 */
export const PORTFOLIO = [
  {
    id: "vision13",
    gradient: "linear-gradient(135deg, #022c22 0%, #064e3b 50%, #047857 100%)",
    link: "vision-13.com",
    es: {
      name: "Vision13",
      category: "Óptica online / E-commerce",
      description: "Tienda online de lentes graduados y de sol en USA. Pago con Stripe, subida segura de receta médica, panel admin y bilingüe EN/ES.",
    },
    en: {
      name: "Vision13",
      category: "Online optics / E-commerce",
      description: "Online store for prescription and sunglasses in the USA. Stripe checkout, secure prescription upload, admin panel and bilingual EN/ES.",
    },
  },
  {
    id: "sonar",
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #3b0764 100%)",
    link: "www.sonarproaudio.com",
    es: {
      name: "Sonar Pro Audio",
      category: "Tienda de audio / E-commerce",
      description: "Sitio web para distribuidor de equipos de audio profesional en South Florida. Catálogo de productos, formulario de contacto y posicionamiento local.",
    },
    en: {
      name: "Sonar Pro Audio",
      category: "Audio store / E-commerce",
      description: "Website for a professional audio equipment distributor in South Florida. Product catalog, contact form and local positioning.",
    },
  },
  {
    id: "roma",
    gradient: "linear-gradient(135deg, #1a0505 0%, #3b0000 50%, #7f1d1d 100%)",
    link: "romarecords.llc",
    es: {
      name: "Roma Records",
      category: "Sello discográfico / Música",
      description: "Sitio web para sello discográfico independiente. Presenta artistas, lanzamientos y contenido de la disquera con diseño oscuro y elegante.",
    },
    en: {
      name: "Roma Records",
      category: "Record label / Music",
      description: "Website for an independent record label. Showcases artists, releases and label content with a dark, elegant design.",
    },
  },
  {
    id: "calderoni",
    gradient: "linear-gradient(135deg, #052e16 0%, #14532d 50%, #166534 100%)",
    link: "calderoniservice.com",
    es: {
      name: "Calderoni Gardens",
      category: "Landscaping / South Florida",
      description: "Sitio web para empresa de paisajismo con galería de proyectos, formulario de cotización y posicionamiento en Google Maps.",
    },
    en: {
      name: "Calderoni Gardens",
      category: "Landscaping / South Florida",
      description: "Website for a landscaping company with project gallery, quote form and Google Maps positioning.",
    },
  },
  {
    id: "carwash",
    gradient: "linear-gradient(135deg, #0c0a09 0%, #1c1917 50%, #292524 100%)",
    link: "carwahsdetailgo.com",
    es: {
      name: "Carwash Detail Go",
      category: "Auto detailing / Servicios",
      description: "Sitio web para empresa de lavado y detallado de autos a domicilio. Presentación de servicios, paquetes y formulario de reserva.",
    },
    en: {
      name: "Carwash Detail Go",
      category: "Auto detailing / Services",
      description: "Website for a mobile car wash and detailing company. Service presentation, packages and booking form.",
    },
  },
  {
    id: "penguin",
    gradient: "linear-gradient(135deg, #18181b 0%, #450a0a 50%, #dc2626 100%)",
    link: "thepenguincardetailing.com",
    es: {
      name: "The Penguin Auto Mobile Detailing",
      category: "Auto detailing móvil / Georgia, USA",
      description: "Sitio web para empresa de detallado móvil en Georgia. Paquetes de servicio, galería y posicionamiento local con dominio propio.",
    },
    en: {
      name: "The Penguin Auto Mobile Detailing",
      category: "Mobile auto detailing / Georgia, USA",
      description: "Website for a mobile detailing company in Georgia. Service packages, gallery and local positioning with custom domain.",
    },
  },
  {
    id: "gallardos",
    gradient: "linear-gradient(135deg, #082f49 0%, #0369a1 50%, #0ea5e9 100%)",
    link: "gallardoshousecleaning.com",
    es: {
      name: "Gallardo's House Cleaning",
      category: "Limpieza de casas / Servicios",
      description: "Sitio web para empresa de limpieza residencial y comercial. Servicios, área de cobertura y formulario de cotización rápida.",
    },
    en: {
      name: "Gallardo's House Cleaning",
      category: "House cleaning / Services",
      description: "Website for a residential and commercial cleaning company. Services, coverage area and quick quote form.",
    },
  },
  {
    id: "vega",
    gradient: "linear-gradient(135deg, #0c1a3a 0%, #1e3a5f 50%, #1e40af 100%)",
    link: null,
    es: {
      name: "OpenClaw VEGA",
      category: "Bot de ventas / IA",
      description: "Bot de Messenger con inteligencia artificial para automatizar respuestas y ventas 24/7, integrado con OpenAI y la API de Meta.",
    },
    en: {
      name: "OpenClaw VEGA",
      category: "Sales bot / AI",
      description: "Messenger bot with artificial intelligence to automate 24/7 responses and sales, integrated with OpenAI and Meta API.",
    },
  },
  {
    id: "wa-agenda",
    gradient: "linear-gradient(135deg, #082f49 0%, #0c4a6e 55%, #075985 100%)",
    link: null,
    es: {
      name: "Bot WhatsApp Citas",
      category: "Automatización / WhatsApp",
      description: "Sistema de agendamiento automático por WhatsApp para salones, clínicas y servicios. Confirma, reagenda y recuerda citas 24/7.",
    },
    en: {
      name: "WhatsApp Appointment Bot",
      category: "Automation / WhatsApp",
      description: "Automatic scheduling system via WhatsApp for salons, clinics and services. Confirms, reschedules and reminds clients 24/7.",
    },
  },
  {
    id: "wa-ventas",
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #2e1065 55%, #4c1d95 100%)",
    link: null,
    es: {
      name: "Bot WhatsApp Ventas",
      category: "E-commerce / WhatsApp",
      description: "Catálogo interactivo y sistema de ventas por WhatsApp. El cliente navega productos, hace pedidos y paga sin salir de la app.",
    },
    en: {
      name: "WhatsApp Sales Bot",
      category: "E-commerce / WhatsApp",
      description: "Interactive catalog and sales system via WhatsApp. Customers browse products, place orders and pay without leaving the app.",
    },
  },
];
