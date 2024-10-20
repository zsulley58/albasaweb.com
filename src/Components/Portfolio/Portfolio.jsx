import React from "react";
import { Link } from "react-router-dom";
import portfolio_1 from "../../assets/portfolio-1.png";
import portfolio_2 from "../../assets/portfolio-2.png";
import portfolio_3 from "../../assets/portfolio-3.png";
import portfolio_4 from "../../assets/portfolio-4.png";
import white_arrow from "../../assets/white-arrow.png";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolios">
      <div className="portfolio-wrapper">
        <div className="portfolio">
          <img src={portfolio_1} alt="" />
          <p>Agency Website</p>
        </div>
        <div className="portfolio">
          <img src={portfolio_2} alt="" />
          <p>Business Website</p>
        </div>
        <div className="portfolio">
          <img src={portfolio_3} alt="" />
          <p>Cybersecurity Vulnerability Assessment</p>
        </div>
        <div className="portfolio">
          <img src={portfolio_4} alt="" />
          <p>E-commerce Website</p>
        </div>
      </div>
      <Link to="/contact">
        <button className="btn dark-btn">
          Contact us for your project <img src={white_arrow} alt="" />
        </button>
      </Link>
    </div>
  );
};

export default Portfolio;
