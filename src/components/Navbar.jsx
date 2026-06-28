import React, { useState } from "react";
import "./Navbar.css";
import logo from "../image/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="/#home" className="logo-box" onClick={closeMenu}>
          <img src={logo} alt="Lira Cafe Logo" />
        </a>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <a href="/#home" onClick={closeMenu}>Home</a>
          <a href="/#about" onClick={closeMenu}>About</a>
          <a href="/#menu" onClick={closeMenu}>Menu</a>
          <a href="/gallery" onClick={closeMenu}>Gallery</a>
          <a href="/#contact" onClick={closeMenu}>Contact</a>

          <a href="/#contact" className="book-btn" onClick={closeMenu}>
            Book Table
          </a>
        </nav>

        <button
          className={menuOpen ? "hamburger active" : "hamburger"}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;