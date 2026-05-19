import { useState } from "react";
import copy from "./data/copy";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Plans from "./components/Plans";
import Services from "./components/Services";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [lang, setLang] = useState("es");
  const [dark, setDark] = useState(true);
  const t = copy[lang];

  return (
    <div className={dark ? "site dark" : "site"}>
      <Navbar
        t={t}
        dark={dark}
        onLangToggle={() => setLang(lang === "es" ? "en" : "es")}
        onDarkToggle={() => setDark(!dark)}
      />
      <Hero t={t} />
      <Plans t={t} lang={lang} />
      <Services t={t} />
      <Process t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}
