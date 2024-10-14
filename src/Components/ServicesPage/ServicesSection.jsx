/* eslint-disable no-unused-vars */

import React from "react";
import blog_1 from "../../assets/blog-1.png";
import blog_2 from "../../assets/blog-2.png";
import blog_3 from "../../assets/blog-3.png";
import blog_4 from "../../assets/blog-4.png";
import "./ServicesSection.css";

const ServicesSection = () => {
  return (
    <div className="services-sections">
      <h1>Web Development Services</h1>
      {/* First 3 items */}
      <ul className="top-services">
        <li>
          <div className="services-section-info">
            <img src={blog_1} alt="" />
            <div>
              <h3>Custom Web Development</h3>
            </div>
          </div>
          <p>
            At ALBASA WEB, we specialize in creating websites that are designed
            just for you. Our Custom Web Development service means that we build
            everything from scratch, focusing on your unique needs and business
            goals. Whether you need a sleek portfolio, an e-commerce solution,
            or a fully interactive web application, we deliver a solution that
            perfectly fits your vision.
            <br />
            <a href="#" className="links btn">
              Contact Us.
            </a>
          </p>
        </li>
        <li>
          <div className="services-section-info">
            <img src={blog_2} alt="" />
            <div>
              <h3>E-Commerce Development</h3>
            </div>
          </div>
          <p>
            At ALBASA WEB, we know that selling online is more than just putting
            products on a page—it's about creating an engaging, seamless
            shopping experience that keeps customers coming back. Our E-Commerce
            Development service focuses on building a fully customized online
            store that is designed to convert visitors into loyal customers,
            while keeping your brand and goals at the center.
            <br />
            <a href="#" className="links btn">
              Contact Us.
            </a>
          </p>
        </li>
        <li>
          <div className="services-section-info">
            <img src={blog_3} alt="" />
            <div>
              <h3>Responsive Web Design</h3>
            </div>
          </div>
          <p>
            In today’s digital age, your website needs to perform flawlessly
            across all devices. At ALBASA WEB, we offer Responsive Web Design
            services that ensure your site looks great and functions perfectly,
            whether your visitors are on a smartphone, tablet, or desktop. We
            focus on creating a seamless experience, making it easy for your
            users to engage with your content, no matter how they access it.
            <br />
            <a href="#" className="links btn">
              Contact Us.
            </a>
          </p>
        </li>
      </ul>

      {/* Remaining items */}
      <ul className="bottom-services">
        <li>
          <div className="services-section-info">
            <img src={blog_4} alt="" />
            <div>
              <h3>Content Management System (CMS)</h3>
            </div>
          </div>
          <p>
            Managing your website shouldn't be a hassle. At ALBASA WEB, our
            Content Management System (CMS) Development service provides you
            with powerful, intuitive tools to easily manage your website’s
            content. Whether you need to update information, add new pages, or
            publish blog posts, our CMS solutions make it simple and efficient,
            without the need for technical expertise.
            <br />
            <a href="#" className="links btn">
              Contact Us.
            </a>
          </p>
        </li>
        <li>
          <div className="services-section-info">
            <img src={blog_4} alt="" />
            <div>
              <h3>Web Performance Optimization</h3>
            </div>
          </div>
          <p>
            A fast-loading website is essential for keeping your visitors
            engaged and improving your search engine rankings. At ALBASA WEB,
            our Web Performance Optimization service ensures your website runs
            at its best, providing users with a smooth, fast, and responsive
            experience that keeps them coming back.
            <br />
            <a href="#" className="links btn">
              Contact Us.
            </a>
          </p>
        </li>
        <li>
          <div className="services-section-info">
            <img src={blog_4} alt="" />
            <div>
              <h3>SEO Optimization</h3>
            </div>
          </div>
          <p>
            In today’s digital world, being visible online is crucial for
            success. At ALBASA WEB, our SEO Optimization service is designed to
            help your website rank higher in search engines, drive more traffic,
            and attract the right audience. We use proven strategies to make
            sure your business stands out and reaches potential customers
            effectively.
            <br />
            <a href="#" className="links btn">
              Contact Us.
            </a>
          </p>
        </li>
        <li>
          <div className="services-section-info">
            <img src={blog_4} alt="" />
            <div>
              <h3>Web Maintainance & Support</h3>
            </div>
          </div>
          <p>
            A successful website requires ongoing attention and support to keep
            it secure, up-to-date, and performing at its best. At ALBASA WEB,
            our Web Maintenance & Support service ensures your website stays in
            optimal condition, providing you with peace of mind so you can focus
            on growing your business.
            <br />
            <a href="#" className="links btn">
              Contact Us.
            </a>
          </p>
        </li>
      </ul>
      <h1>Cybersecurity Services</h1>
      {/* First 3 items */}
      <ul className="top-services">
        <li>
          <div className="services-section-info">
            <img src={blog_1} alt="" />
            <div>
              <h3>Penetration Testing</h3>
            </div>
          </div>
          <p>
            In a world where cyber threats are on the rise, it’s essential to
            know your digital defenses are strong enough to protect your
            business. At ALBASA WEB, our Penetration Testing service is designed
            to identify and address vulnerabilities before attackers can exploit
            them, giving you the confidence that your systems are secure.
            <br />
            <a href="#" className="links btn">
              Contact Us.
            </a>
          </p>
        </li>
        <li>
          <div className="services-section-info">
            <img src={blog_2} alt="" />
            <div>
              <h3>Security Awareness Training</h3>
            </div>
          </div>
          <p>
            The strength of your cybersecurity doesn’t rely solely on
            technology—it also depends on your people. At ALBASA WEB, our
            Security Awareness Training service is designed to educate and
            empower your employees to recognize and respond to security threats,
            reducing the risk of human error and enhancing your overall security
            posture.
            <br />
            <a href="#" className="links btn">
              Contact Us.
            </a>
          </p>
        </li>
        <li>
          <div className="services-section-info">
            <img src={blog_3} alt="" />
            <div>
              <h3>Vulnerability Assessment</h3>
            </div>
          </div>
          <p>
            Identifying vulnerabilities before they are exploited is key to
            maintaining a secure environment. At ALBASA WEB, our Vulnerability
            Assessment service is designed to evaluate your systems, networks,
            and applications for weaknesses, providing you with the information
            needed to proactively protect your business from cyber threats.
            <a href="#" className="links btn">
              Contact Us.
            </a>
          </p>
        </li>
      </ul>

      {/* Remaining items */}
      <ul className="bottom-services">
        <li>
          <div className="services-section-info">
            <img src={blog_4} alt="" />
            <div>
              <h3>Security Audit</h3>
            </div>
          </div>
          <p>
            A strong cybersecurity strategy begins with a thorough understanding
            of your current security posture. At ALBASA WEB, our Security Audit
            service provides an in-depth review of your systems, policies, and
            practices to ensure that your organization meets the highest
            standards of security. Our comprehensive audits help identify gaps,
            assess risks, and recommend strategies to enhance your cybersecurity
            resilience.
            <br />
            <a href="#" className="links btn">
              Contact Us.
            </a>
          </p>
        </li>
        <li>
          <div className="services-section-info">
            <img src={blog_4} alt="" />
            <div>
              <h3>Web Application Security</h3>
            </div>
          </div>
          <p>
            Web applications are a critical part of modern business operations,
            but they are also prime targets for cybercriminals. At ALBASA WEB,
            our Web Application Security service is designed to protect your
            applications from threats, ensuring they are secure, reliable, and
            resilient against attacks. We help safeguard your sensitive data and
            maintain the trust of your users by implementing industry-leading
            security measures.
            <br />
            <a href="#" className="links btn">
              Contact Us.
            </a>
          </p>
        </li>
        <li>
          <div className="services-section-info">
            <img src={blog_4} alt="" />
            <div>
              <h3>Network Security</h3>
            </div>
          </div>
          <p>
            In today’s connected world, network security is more important than
            ever. At ALBASA WEB, our Network Security service is designed to
            protect your network infrastructure from unauthorized access, data
            breaches, and cyber attacks. We employ cutting-edge technologies and
            best practices to ensure your network is secure, reliable, and
            resilient against evolving threats.
            <br />
            <a href="#" className="links btn">
              Contact Us.
            </a>
          </p>
        </li>
        <li>
          <div className="services-section-info">
            <img src={blog_4} alt="" />
            <div>
              <h3>Incident Response and Forensics</h3>
            </div>
          </div>
          <p>
            When a security breach occurs, a swift and effective response is
            crucial to minimize damage and recover quickly. At ALBASA WEB, our
            Incident Response and Forensics service helps you contain,
            investigate, and recover from security incidents, providing the
            expertise you need to respond effectively and understand the root
            cause of the incident.
            <br />
            <a href="#" className="links btn">
              Contact Us.
            </a>
          </p>
        </li>
        <li>
          <div className="services-section-info">
            <img src={blog_4} alt="" />
            <div>
              <h3>Compliance and Risk Management</h3>
            </div>
          </div>
          <p>
            In today’s complex regulatory environment, organizations must meet
            strict compliance standards while managing security risks
            effectively. At ALBASA WEB, our Compliance and Risk Management
            service helps you navigate regulatory requirements and build a
            robust risk management framework that keeps your business protected
            and compliant with industry standards.
            <br />
            <a href="#" className="links btn">
              Contact Us.
            </a>
          </p>
        </li>
        <li>
          <div className="services-section-info">
            <img src={blog_4} alt="" />
            <div>
              <h3>Cloud Security</h3>
            </div>
          </div>
          <p>
            Migrating to the cloud provides flexibility, scalability, and cost
            savings, but it also introduces new security challenges. At ALBASA
            WEB, our Cloud Security service is designed to help you protect your
            cloud infrastructure, applications, and data from cyber threats. We
            implement best practices and advanced technologies to ensure your
            cloud environment is secure, compliant, and resilient against
            attacks.
            <br />
            <a href="#" className="links btn">
              Contact Us.
            </a>
          </p>
        </li>
        <li>
          <div className="services-section-info">
            <img src={blog_4} alt="" />
            <div>
              <h3>Data Encryption and Protection</h3>
            </div>
          </div>
          <p>
            Protecting sensitive data is one of the most critical aspects of
            cybersecurity. At ALBASA WEB, our Data Encryption and Protection
            service ensures that your organization's data is safeguarded from
            unauthorized access, both in transit and at rest. We implement
            industry-leading encryption technologies and best practices to keep
            your data private, secure, and compliant with regulatory standards.
            <br />
            <a href="#" className="links btn">
              Contact Us.
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ServicesSection;
