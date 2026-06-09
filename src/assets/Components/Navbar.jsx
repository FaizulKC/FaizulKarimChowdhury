import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ active, NAV_LINKS }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    const section = id.toLowerCase();
    setMenuOpen(false); // Close menu after clicking
    if (section === "home") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    navigate(`/${section}`);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="nav-logo" onClick={() => scrollTo("home")}>
        <span className="logo-bracket">[</span>FK
        <span className="logo-bracket">]</span>
      </div>
      
      {/* hamburger menu */}
      <button 
        className={`hamburger ${menuOpen ? "hamburger--active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <ul className={`nav-links ${menuOpen ? "nav-links--mobile-open" : ""}`}>
        {NAV_LINKS.map((n) => (
          <li key={n}>
            <button
              className={`nav-link ${active === n.toLowerCase() ? "nav-link--active" : ""}`}
              onClick={() => scrollTo(n)}
            >
              {n}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
