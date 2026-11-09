import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "Our Story", href: "#story" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faq" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg petal-navbar">
        <div className="container">
          <a className="navbar-brand petal-logo" href="#home" onClick={closeMenu}>
            Skin<span>Care</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`} />
          </button>

          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.label}>
                  <a
                    className="nav-link"
                    href={link.href}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              <a className="nav-icon" href="#shop" aria-label="Search products">
                <i className="bi bi-search" />
              </a>

              <a className="nav-icon" href="#shop" aria-label="Shopping bag">
                <i className="bi bi-bag" />
              </a>

              <a className="btn-petal btn-petal-small" href="#shop">
                Shop now <i className="bi bi-arrow-up-right" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}