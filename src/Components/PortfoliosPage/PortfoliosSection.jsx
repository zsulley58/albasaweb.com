/* eslint-disable no-unused-vars */

import React from "react";
import portfolio_1 from "../../assets/portfolio-images/portfolio-1.jpg";
import portfolio_2 from "../../assets/portfolio-images/portfolio-2.jpg";
import portfolio_3 from "../../assets/portfolio-images/portfolio-3.jpg";
import portfolio_4 from "../../assets/portfolio-images/portfolio-4.jpg";
import portfolio_5 from "../../assets/portfolio-images/portfolio-5.jpg";
import portfolio_6 from "../../assets/portfolio-images/portfolio-6.jpg";
import Contact from "../Contact/Contact";
import "./PortfoliosSection.css";

const PortfoliosSection = () => {
  return (
    <div className="portfolios-sections">
      {/* First 3 items */}
      <ul className="top-portfolios">
        <li>
          <div className="portfolios-section-info">
            <img src={portfolio_1} alt="" />
            <div>
              <h3>Personal Portfolio Website</h3>
            </div>
          </div>
          <a href="#" className="portfolio-links btn">
            Contact Us.
          </a>
        </li>
        <li>
          <div className="portfolios-section-info">
            <img src={portfolio_2} alt="" />
            <div>
              <h3>E-commerce Website</h3>
            </div>
          </div>
          <a href="#" className="portfolio-links btn">
            Contact Us.
          </a>
        </li>
        <li>
          <div className="portfolios-section-info">
            <img src={portfolio_3} alt="" />
            <div>
              <h3>E-commerce Shopping Website</h3>
            </div>
          </div>
          <a href="#" className="links btn">
            Contact Us.
          </a>
        </li>
      </ul>

      {/* Remaining items */}
      <ul className="bottom-portfolios">
        <li>
          <div className="portfolios-section-info">
            <img src={portfolio_4} alt="" />
            <div>
              <h3>Mobile App Development</h3>
            </div>
          </div>
          <a href="#" className="portfolio-links btn">
            Contact Us.
          </a>
        </li>
        <li>
          <div className="portfolios-section-info">
            <img src={portfolio_5} alt="" />
            <div>
              <h3>SEO Optimization</h3>
            </div>
          </div>
          <a href="#" className="portfolio-links btn">
            Contact Us.
          </a>
        </li>
        <li>
          <div className="portfolios-section-info">
            <img src={portfolio_6} alt="" />
            <div>
              <h3>Content Management Systems</h3>
            </div>
          </div>
          <a href={<Contact />} className="portfolio-links btn">
            Contact Us.
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PortfoliosSection;
