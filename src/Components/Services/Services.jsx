import React from "react";
import audit from "../../assets/audit.png";
import incident from "../../assets/incident.png";
import penetration_icon from "../../assets/penetration-icon.png";
import pentesting from "../../assets/pentesting.png";
import security_audit_icon from "../../assets/security-audit-icon.png";
import web_dev from "../../assets/web-dev.png";
import web_icon from "../../assets/web-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import white_hat_icon from "../../assets/white-hat-icon.png";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="service-wrapper">
        <div className="service">
          <img src={pentesting} alt="" />
          <div className="caption">
            <img src={penetration_icon} alt="" />
          </div>
          <p>Penetration Testing</p>
        </div>
        <div className="service">
          <img src={audit} alt="" />
          <div className="caption">
            <img src={security_audit_icon} alt="" />
          </div>
          <p>Security Audits</p>
        </div>
        <div className="service">
          <img src={incident} alt="" />
          <div className="caption">
            <img src={white_hat_icon} alt="" />
          </div>
          <p>Incident Response</p>
        </div>
        <div className="service">
          <img src={web_dev} alt="" />
          <div className="caption">
            <img src={web_icon} alt="" />
          </div>
          <p>Web Development</p>
        </div>
      </div>
      <button className="btn dark-btn">
        Explore more here <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Services;
