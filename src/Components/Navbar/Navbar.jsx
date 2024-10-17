// src/components/Navbar/Navbar.jsx

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import logo from "../../assets/albasa-web-logo.png";
import close_icon from "../../assets/close-icon.png"; // Add a close icon for better UX
import menu_icon from "../../assets/menu-icon.png";
import "./Navbar.css";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    if (mobileMenu) {
      setMobileMenu(false);
    }
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".services-nav")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      {/* Logo linking to Home */}
      <NavLink to="/" onClick={handleLinkClick}>
        <img src={logo} alt="Logo" className="logo" />
      </NavLink>

      {/* Hamburger Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        <img src={mobileMenu ? close_icon : menu_icon} alt="Menu Icon" />
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${mobileMenu ? "active" : ""}`}>
        {/* About Us */}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLinkClick}
          >
            About Us
          </NavLink>
        </li>

        {/* Our Services with Dropdown */}
        <li className="services-nav">
          <button
            className="services-button"
            aria-haspopup="true"
            aria-expanded={dropdownOpen ? "true" : "false"}
            onClick={toggleDropdown}
          >
            Our Services
          </button>
          <div
            className={`services-dropdown ${dropdownOpen ? "open" : ""}`}
            aria-label="submenu"
          >
            {/* Web Development Column */}
            <div className="dropdown-column">
              <h3>Web Development</h3>
              <ul className="sub-services">
                <li>
                  <NavLink
                    to="/services/web-development/custom-web-development"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={handleLinkClick}
                  >
                    Custom Web Development
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/web-development/e-commerce-development"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={handleLinkClick}
                  >
                    E-commerce Development
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/web-development/seo-optimization"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={handleLinkClick}
                  >
                    SEO Optimization
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/web-development/web-maintenance-support"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={handleLinkClick}
                  >
                    Web Maintenance & Support
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Cybersecurity Column */}
            <div className="dropdown-column">
              <h3>Cybersecurity</h3>
              <ul className="sub-services">
                <li>
                  <NavLink
                    to="/services/cybersecurity/penetration-testing"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={handleLinkClick}
                  >
                    Penetration Testing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/cybersecurity/security-awareness-training"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={handleLinkClick}
                  >
                    Security Awareness Training
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/cybersecurity/web-application-security"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={handleLinkClick}
                  >
                    Web Application Security
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/cybersecurity/incident-response-forensics"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={handleLinkClick}
                  >
                    Incident Response & Forensics
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </li>

        {/* Portfolios */}
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLinkClick}
          >
            Portfolios
          </NavLink>
        </li>

        {/* Blogs */}
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLinkClick}
          >
            Blogs
          </NavLink>
        </li>

        {/* Podcasts */}
        <li>
          <NavLink
            to="/podcast"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLinkClick}
          >
            Podcasts
          </NavLink>
        </li>

        {/* Contact Us */}
        <li>
          <NavLink
            to="/contact"
            className="btn dark-btn"
            onClick={handleLinkClick}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
