import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import logo from "../../assets/albasa-web-logo.png";
import menu_icon from "../../assets/menu-icon.png";
import "./Navbar.css";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      {/* Link the logo to the Home page */}
      <NavLink to="/">
        <img src={logo} alt="Logo" className="logo" />
      </NavLink>

      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        {/* Use NavLink for navigation items */}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About us
          </NavLink>
        </li>

        {/* Our Services with dropdown */}
        <li className="services-nav">
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Our Services
          </NavLink>
          <div className="services-dropdown">
            <div className="dropdown-column">
              <h3>Web Development</h3>
              <ul className="sub-services">
                <li>
                  <NavLink
                    to="/services/web-development/custom-web-development"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Custom Web Development
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/web-development/e-commerce-development"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    E-commerce Development
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/web-development/responsive-web-design"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Responsive Web Design
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/web-development/cms"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Content Management Systems (CMS)
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/web-development/web-performance-optimization"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Web Performance Optimization
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/web-development/seo-optimization"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    SEO Optimization
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/web-development/web-maintenance-support"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Web Maintenance & Support
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="dropdown-column">
              <h3>Cybersecurity</h3>
              <ul className="sub-services">
                <li>
                  <NavLink
                    to="/services/cybersecurity/penetration-testing"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Penetration Testing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/cybersecurity/security-awareness-training"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Security Awareness Training
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/cybersecurity/vulnerability-assessment"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Vulnerability Assessment
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/cybersecurity/security-audits"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Security Audits
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/cybersecurity/web-application-security"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Web Application Security
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/cybersecurity/network-security"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Network Security
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/cybersecurity/incident-response-forensics"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Incident Response and Forensics
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/cybersecurity/compliance-risk-management"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Compliance and Risk Management
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/cybersecurity/cloud-security"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Cloud Security
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/cybersecurity/data-encryption-protection"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Data Encryption and Protection
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </li>

        {/* Other navigation items */}
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Portfolios
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/podcast"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Podcasts
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="red-btn">
            Contact us
          </NavLink>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt="Menu Icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
