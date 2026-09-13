import React, { useEffect, useState } from "react";
import { identity, social } from "../../profile";

const links = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Hobbies", "hobbies"],
  ["Contact", "contact"],
];

const Nav = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand">
          <span className="nav__brand-mark">DR</span>
          <span className="nav__brand-name">{identity.name}</span>
        </a>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav__resume"
            href={social.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé
          </a>
        </nav>

        <div className="nav__actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            <i className={theme === "dark" ? "fas fa-sun" : "fas fa-moon"} />
          </button>
          <button
            className="icon-btn nav__burger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <i className={open ? "fas fa-times" : "fas fa-bars"} />
          </button>
        </div>
      </div>
      <div className="nav__progress" style={{ transform: `scaleX(${progress / 100})` }} />
    </header>
  );
};

export default Nav;
