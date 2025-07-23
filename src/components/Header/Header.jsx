import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu toggle

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Function to close menu when clicking a link
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          {/* Logo Section */}
          <div className="col-lg-2 col-6">
            <div className="header__logo">
              <Link to="/" onClick={closeMenu}>
                <img width={80} height={80} src="/logo.png" alt="Logo" />
              </Link>
            </div>
          </div>

                    {/* Mobile Menu Toggle Button */}
          <div className="mobile-menu-icon" onClick={toggleMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars/>}
          </div>


          {/* Navigation & Mobile Menu */}
          <div className="col-lg-10 col-6">
            <div className="header__nav__option">

              {/* Navigation Menu */}
              <nav className={`header__nav__menu ${isMobileMenuOpen ? "open" : ""}`}>
                <ul>
                  <li className={location.pathname === "/" ? "active" : ""}>
                    <Link to="/" onClick={closeMenu}>Home</Link>
                  </li>
                  <li className={location.pathname === "/about" ? "active" : ""}>
                    <Link to="/about" onClick={closeMenu}>About</Link>
                  </li>
                  <li className={location.pathname === "/portfolio" ? "active" : ""}>
                    <Link to="/portfolio" onClick={closeMenu}>Portfolio</Link>
                  </li>
                  <li className={location.pathname === "/services" ? "active" : ""}>
                    <Link to="/services" onClick={closeMenu}>Services</Link>
                  </li>
                  <li className={location.pathname === "/contact" ? "active" : ""}>
                    <Link to="/contact" onClick={closeMenu}>Contact</Link>
                  </li>
                </ul>
              </nav>

              {/* Social Icons (Only on Desktop) */}
              <div className={`header__nav__social invisible md:visible`}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-dribbble"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-youtube-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
