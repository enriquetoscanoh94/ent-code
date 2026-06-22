import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrolled } from "../hooks/useScrolled";
import { scrollToSection } from "../utils/scroll";
import { SunIcon, MoonIcon } from "./icons";

export default function Navbar({ t, dark, onLangToggle, onDarkToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <Link to="/" className="brand" onClick={closeMenu}>
          <img src="/logo.png" alt="ENT-CODE logo" />
        </Link>

        <div className={`navlinks${menuOpen ? " open" : ""}`}>
          {t.nav.map((item) =>
            item.route ? (
              <Link key={item.route} to={item.route} onClick={closeMenu}>
                {item.label}
              </Link>
            ) : (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.id); closeMenu(); }}
              >
                {item.label}
              </a>
            )
          )}
        </div>

        <div className="actions">
          <button className="iconBtn" onClick={onLangToggle} aria-label="Cambiar idioma">
            {t.lang}
          </button>
          <button
            className="iconBtn iconBtn--theme"
            onClick={onDarkToggle}
            aria-label={dark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className={`hamburger${menuOpen ? " active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {menuOpen && <div className="mobileOverlay" onClick={closeMenu} />}
    </>
  );
}
