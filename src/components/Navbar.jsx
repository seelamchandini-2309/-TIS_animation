import { useState } from "react";
import { navigation } from "../data/content";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <a href="#" className="brand" data-cursor>
        <span className="brand-mark">T</span>

        <span>
          TULA'S
          <small>INTERNATIONAL SCHOOL</small>
        </span>
      </a>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        {navigation.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={closeMenu}
            data-cursor
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
          data-cursor
        >
          {darkMode ? "☀" : "☾"}
        </button>

        <a
          href="https://admission.tis.edu.in/"
          target="_blank"
          rel="noreferrer"
          className="nav-cta"
          data-cursor
        >
          Apply Now
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation"
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default Navbar;
