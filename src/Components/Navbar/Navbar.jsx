/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/albasa-web-logo.png";
import menu_icon from "../../assets/menu-icon.png";
import "./Navbar.css";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  // State to manage the main Services dropdown visibility
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>

        {/* Main Services Dropdown */}
        <li
          className="services-nav"
          onMouseEnter={() => setShowServicesDropdown(true)}
          onMouseLeave={() => setShowServicesDropdown(false)}
        >
          <Link to="services" smooth={true} offset={-260} duration={500}>
            Our Services
          </Link>

          {/* Dropdown containing Cybersecurity and Web Development Services */}
          {showServicesDropdown && (
            <div className="services-dropdown">
              {/* Cybersecurity Services */}
              <div className="dropdown-column">
                <h3>Cybersecurity Services</h3>
                <ul className="sub-services">
                  <li>
                    <Link to="vapt" smooth={true} offset={-260} duration={500}>
                      Vulnerability Assessment & Penetration Testing (VAPT)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="audits"
                      smooth={true}
                      offset={-260}
                      duration={500}
                    >
                      Security Audits & Compliance
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="incident-response"
                      smooth={true}
                      offset={-260}
                      duration={500}
                    >
                      Incident Response & Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="endpoint-security"
                      smooth={true}
                      offset={-260}
                      duration={500}
                    >
                      Endpoint Security Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="awareness-training"
                      smooth={true}
                      offset={-260}
                      duration={500}
                    >
                      Cybersecurity Awareness Training
                    </Link>
                  </li>
                  <li>
                    <Link to="iam" smooth={true} offset={-260} duration={500}>
                      Identity and Access Management (IAM)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="data-encryption"
                      smooth={true}
                      offset={-260}
                      duration={500}
                    >
                      Data Encryption & Protection
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Web Development Services */}
              <div className="dropdown-column">
                <h3>Web Development Services</h3>
                <ul className="sub-services">
                  <li>
                    <Link
                      to="custom-web"
                      smooth={true}
                      offset={-260}
                      duration={500}
                    >
                      Custom Website Design & Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="e-commerce"
                      smooth={true}
                      offset={-260}
                      duration={500}
                    >
                      E-commerce Development
                    </Link>
                  </li>
                  <li>
                    <Link to="cms" smooth={true} offset={-260} duration={500}>
                      Content Management Systems (CMS) Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="web-apps"
                      smooth={true}
                      offset={-260}
                      duration={500}
                    >
                      Web Application Development
                    </Link>
                  </li>
                  <li>
                    <Link to="seo" smooth={true} offset={-260} duration={500}>
                      Search Engine Optimization (SEO) Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="maintenance"
                      smooth={true}
                      offset={-260}
                      duration={500}
                    >
                      Website Maintenance & Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="performance"
                      smooth={true}
                      offset={-260}
                      duration={500}
                    >
                      Website Performance Optimization
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </li>

        <li>
          <Link to="portfolio" smooth={true} offset={-260} duration={500}>
            Portfolios{" "}
          </Link>
        </li>
        <li>
          <Link to="blog" smooth={true} offset={-260} duration={500}>
            Blogs
          </Link>
        </li>
        <li>
          <Link to="podcast" smooth={true} offset={-260} duration={500}>
            Podcasts
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="red-btn"
          >
            Contact us
          </Link>
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
