import { useState } from "react";
import { useScrolled } from "../hooks/useScrolled";

const NAV_ANCHORS = ["plans", "services", "process", "contact"];

export default function Navbar({ t, dark, onLangToggle, onDarkToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <a href="#home" className="brand" onClick={closeMenu}>
          <img src="/logo.png" alt="ENT-CODE logo" />
        </a>

        <div className={`navlinks${menuOpen ? " open" : ""}`}>
          {t.nav.map((label, i) => (
            <a key={label} href={`#${NAV_ANCHORS[i]}`} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </div>

        <div className="actions">
          <button className="iconBtn" onClick={onLangToggle} aria-label="Cambiar idioma">
            {t.lang}
          </button>
          <button className="iconBtn" onClick={onDarkToggle} aria-label="Cambiar tema">
            {dark ? "Claro" : "Oscuro"}
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
