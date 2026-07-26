/*
 * Única fuente de verdad del portafolio.
 * Cada proyecto lleva su metadata y sus textos ES/EN juntos,
 * unidos por id — así nunca se desfasan al agregar o quitar proyectos.
 */
export const PORTFOLIO = [
  {
    id: "casadelpollo",
    link: "mariscoscasadelpollo.com",
    logo: "/clientes/casadelpollo.webp",
    es: {
      name: "Mariscos Casa del Pollo",
      category: "Restaurante de mariscos / Menú digital",
      description: "Sitio web y menú digital para restaurante de mariscos estilo Sinaloa en Salinas, California. Menú bilingüe con más de 120 platillos y fotos, ubicación y contacto, con dominio propio.",
    },
    en: {
      name: "Mariscos Casa del Pollo",
      category: "Seafood restaurant / Digital menu",
      description: "Website and digital menu for a Sinaloa-style seafood restaurant in Salinas, California. Bilingual menu with 120+ dishes and photos, location and contact, with a custom domain.",
    },
  },
  {
    id: "detailgo",
    link: "detailgo.app",
    logo: "/clientes/detailgo.png",
    es: {
      name: "Detail Go",
      category: "App de lavado de autos / Móvil",
      description: "App móvil para lavado y detallado de autos a domicilio. El cliente agenda desde su teléfono y recibe el servicio en casa.",
    },
    en: {
      name: "Detail Go",
      category: "Car wash app / Mobile",
      description: "Mobile app for on-demand car wash and detailing at home. Customers book from their phone and get the service at their door.",
    },
  },
  {
    id: "vision13",
    link: "vision-13.com",
    logo: "/clientes/vision13.png",
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
    link: "www.sonarproaudio.com",
    logo: "/clientes/sonar.png",
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
    link: "romarecords.llc",
    logo: "/clientes/roma.png",
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
    id: "penguin",
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
    id: "terremoto",
    link: "terremotoproductions.com",
    logo: "/clientes/terremoto.webp",
    es: {
      name: "Terremoto Sound & Lighting",
      category: "Producción de eventos / California",
      description: "Sitio web bilingüe para empresa de producción de eventos. Renta de audio, iluminación, pantallas LED y escenarios, con galería de trabajos y contacto directo.",
    },
    en: {
      name: "Terremoto Sound & Lighting",
      category: "Event production / California",
      description: "Bilingual website for an event production company. Audio, lighting, LED screens and stage rental, with a work gallery and direct contact.",
    },
  },
  {
    id: "frost",
    link: "frosthvacr.com",
    logo: "/clientes/frost.png",
    es: {
      name: "FROST-HVACR",
      category: "Refrigeración y climatización / Nueva York",
      description: "Sitio web para empresa de refrigeración, aire acondicionado y calefacción en Nueva York. Servicios, área de cobertura y contacto para cotización.",
    },
    en: {
      name: "FROST-HVACR",
      category: "Refrigeration & HVAC / New York",
      description: "Website for a refrigeration, air conditioning and heating company in New York. Services, coverage area and quote contact.",
    },
  },
  {
    id: "nelly",
    link: "nellyenriquezsells.com",
    logo: "/clientes/nelly.svg",
    es: {
      name: "Nelly Enríquez",
      category: "Bienes raíces / Realtor®",
      description: "Sitio web para Realtor® en Stockton, Modesto y el Valle Central de California. Presentación profesional, propiedades y formulario de contacto.",
    },
    en: {
      name: "Nelly Enríquez",
      category: "Real estate / Realtor®",
      description: "Website for a Realtor® in Stockton, Modesto and California's Central Valley. Professional presentation, listings and contact form.",
    },
  },
];

/*
 * Tecnologías que usamos — tira aparte de los clientes.
 * Logos oficiales en SVG (siempre nítidos). El nombre es igual en ES/EN.
 */
export const TECH = [
  { id: "claude", name: "Claude Code", logo: "/clientes/claude.svg" },
  { id: "openai", name: "OpenAI", logo: "/clientes/openai.svg" },
  { id: "n8n", name: "n8n", logo: "/clientes/n8n.svg" },
  { id: "react", name: "React", logo: "/clientes/react.svg" },
  { id: "javascript", name: "JavaScript", logo: "/clientes/javascript.svg" },
  { id: "typescript", name: "TypeScript", logo: "/clientes/typescript.svg" },
  { id: "nodejs", name: "Node.js", logo: "/clientes/nodejs.svg" },
  { id: "vite", name: "Vite", logo: "/clientes/vite.svg" },
  { id: "tailwind", name: "Tailwind CSS", logo: "/clientes/tailwind.svg" },
  { id: "python", name: "Python", logo: "/clientes/python.svg" },
  { id: "firebase", name: "Firebase", logo: "/clientes/firebase.svg" },
  { id: "stripe", name: "Stripe", logo: "/clientes/stripe.svg" },
  { id: "paypal", name: "PayPal", logo: "/clientes/paypal.svg" },
  { id: "whatsapp", name: "WhatsApp", logo: "/clientes/whatsapp.svg" },
];
