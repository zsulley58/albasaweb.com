/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
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

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      {/* Link the logo to the Home page */}
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        {/* Use Link from react-router-dom to navigate to AboutPage */}
        <li>
          <Link to="/about">About us</Link>
        </li>

        {/* Other navigation items remain the same */}
        <li>
          <Link to="/services">Our Services</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolios</Link>
        </li>
        <li>
          <Link to="/blog">Blogs</Link>
        </li>
        <li>
          <Link to="/podcast">Podcasts</Link>
        </li>
        <li>
          <Link to="/contact" className="red-btn">
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
