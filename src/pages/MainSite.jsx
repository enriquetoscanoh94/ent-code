import copy from "../data/copy";
import { useApp } from "../context/useApp";
import { useGsapEffects } from "../hooks/useGsapEffects";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Process from "../components/Process";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import StarField from "../components/StarField";

export default function MainSite() {
  const { lang, toggleLang } = useApp();
  const t = copy[lang];

  useGsapEffects(lang);

  return (
    <div className="site">
      <StarField />
      <Navbar t={t} onLangToggle={toggleLang} />
      {/* key={lang}: remonta las secciones al cambiar idioma para que
          los textos partidos por SplitText se regeneren con el idioma nuevo */}
      <main key={lang}>
        <Hero t={t} />
        <Services t={t} />
        <WhyUs t={t} />
        <Process t={t} />
        <Portfolio t={t} />
        <Contact t={t} />
        <Footer t={t} />
      </main>
    </div>
  );
}
