import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Mobile Hamburger */}
        <button
          className="hamburger"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Brand */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={closeMenu}
          aria-label="Dev Stack home"
        >
          <div className="brand-logo">
            <span>&lt;/&gt;</span>
          </div>

          <span className="brand-name">Dev Stack</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="navbar-actions">
          <button className="signin-button" type="button">
            Sign In
          </button>

          <button className="signup-button" type="button">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <nav
        className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;