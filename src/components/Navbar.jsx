import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { to: "sobre", label: "Sobre" },
  { to: "formacao", label: "Formação" },
  { to: "fellowships", label: "Títulos" },
  { to: "experiencia", label: "Experiência" },
  { to: "together", label: "TOGETHER Trial" },
  { to: "numeros", label: "Números" },
  { to: "contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link
          to="hero"
          smooth
          duration={600}
          offset={-70}
          className={styles.logo}
        >
          Dr. Gilmar Reis
        </Link>

        <button
          className={`${styles.toggle} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
          {NAV_ITEMS.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                duration={600}
                offset={-70}
                spy
                activeClass={styles.activeLink}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
