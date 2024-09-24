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
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
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
        <li>
          <Link to="services" smooth={true} offset={-260} duration={500}>
            Services
          </Link>
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
            className="btn red-btn"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
