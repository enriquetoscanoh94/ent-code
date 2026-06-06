import copy from "../data/copy";
import { useApp } from "../context/AppContext";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Process from "../components/Process";
import Portfolio from "../components/Portfolio";
import Plan from "../components/Plan";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import StarField from "../components/StarField";

export default function MainSite() {
  const { lang, dark, toggleLang, toggleDark } = useApp();
  const t = copy[lang];

  return (
    <div className={dark ? "site dark" : "site"}>
      <StarField dark={dark} />
      <Navbar
        t={t}
        dark={dark}
        onLangToggle={toggleLang}
        onDarkToggle={toggleDark}
      />
      <Hero t={t} />
      <Plan t={t} />
      <Services t={t} />
      <WhyUs t={t} />
      <Process t={t} />
      <Portfolio t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}
