import React, { useRef } from "react";
import arrow_down from "../../../../assets/arrow-down.png"; // Make sure this path is correct
import Contact from "../../../Contact/Contact";
import Portfolio from "../../../Portfolio/Portfolio";
import "./PenetrationTesting.css";

const PenetrationTesting = () => {
  // Create a reference to the penetrationTestings section
  const penetrationTestingRef = useRef(null);

  // Function to handle smooth scrolling
  const handleScroll = () => {
    if (penetrationTestingRef.current) {
      penetrationTestingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Penetration Testing HERO SECTION */}
      <section className="penetrationTesting-hero container">
        <div className="penetrationTesting-hero-text">
          <h1>Your Trusted Partner in Penetration Testing</h1>
          <p>
            Securing Your Digital World with Professional and Customer-Centric
            Cybersecurity Solutions
          </p>
          <button className="btn dark-btn" onClick={handleScroll}>
            Explore more <img src={arrow_down} alt="Explore more" />
          </button>
        </div>
      </section>

      {/* Penetration Testing SECTION */}
      <div ref={penetrationTestingRef} className="penetrationTestings-section">
        <h2>What is Penetration Testing?</h2>
        <p>
          In an era where cyber threats are increasingly sophisticated,
          safeguarding your digital assets is more crucial than ever.
          Penetration testing, or "pen testing," is a proactive cybersecurity
          practice where experts simulate cyber attacks on your systems,
          networks, or applications. The goal is to identify and address
          vulnerabilities before malicious actors can exploit them. By
          uncovering these weaknesses, you not only strengthen your defenses but
          also ensure compliance with industry regulations and protect sensitive
          data.
        </p>
        <h3>Why Choose Albasa Web for Your Penetration Testing Needs?</h3>

        <p>
          At <strong>Albasa Web</strong>, we are committed to providing top-tier
          penetration testing services that are both professional and tailored
          to your unique needs. Here's why you can count on us:
        </p>

        <h4>1. Expert Team of Certified Professionals</h4>
        <p>
          Our team consists of highly skilled cybersecurity experts holding
          industry-recognized certifications such as <strong>CISSP</strong>,{" "}
          <strong>CEH</strong>, and <strong>OSCP</strong>. With a wealth of
          experience across various sectors, we ensure that our testing
          methodologies are thorough, up-to-date, and aligned with the latest
          security standards.
        </p>

        <h4>2. Customized Solutions</h4>
        <p>
          We understand that every organization has its own set of challenges
          and requirements. That's why we offer customized penetration testing
          services designed to address your specific security concerns. Our
          personalized approach ensures that you receive the most effective and
          relevant solutions.
        </p>

        <h4>3. Transparent Communication</h4>
        <p>
          Communication is key to a successful partnership. We keep you informed
          at every stage of the testing process, providing clear and concise
          reports that outline our findings and recommendations. Our team is
          always available to explain technical details in understandable terms,
          ensuring you are fully aware of your security posture.
        </p>

        <h4>4. Commitment to Confidentiality and Ethics</h4>
        <p>
          Your trust is paramount to us. We adhere to strict ethical guidelines
          and maintain the highest levels of confidentiality. You can be assured
          that your sensitive information is handled with the utmost care and
          professionalism.
        </p>

        <div className="divider"></div>

        <h3>Our Penetration Testing Services</h3>

        <ul>
          <li>
            <strong>Network Penetration Testing:</strong> Assessing your network
            infrastructure to identify vulnerabilities that could lead to
            unauthorized access or data breaches.
          </li>
          <li>
            <strong>Web Application Testing:</strong> Evaluating your web
            applications to detect and remediate security flaws such as SQL
            injection, cross-site scripting, and other common threats.
          </li>
          <li>
            <strong>Mobile Application Testing:</strong> Ensuring your mobile
            applications are secure across all platforms and devices.
          </li>
          <li>
            <strong>Wireless Security Testing:</strong> Analyzing your wireless
            networks to prevent unauthorized access and data leakage.
          </li>
          <li>
            <strong>Social Engineering Assessments:</strong> Testing your
            organization's resilience against phishing attacks and other social
            engineering tactics.
          </li>
          <li>
            <strong>Cloud Security Assessments:</strong> Reviewing your cloud
            environments to ensure data integrity and compliance with security
            best practices.
          </li>
        </ul>

        <div className="divider"></div>

        <h3>Our Process</h3>

        <ol>
          <li>
            <strong>Initial Consultation:</strong> We begin by understanding
            your specific needs and objectives.
          </li>
          <li>
            <strong>Scope Definition:</strong> Defining the scope ensures a
            focused and efficient testing process.
          </li>
          <li>
            <strong>Testing Phase:</strong> Our experts perform thorough testing
            using advanced tools and methodologies.
          </li>
          <li>
            <strong>Analysis & Reporting:</strong> We analyze the results and
            compile a detailed report outlining vulnerabilities and recommended
            solutions.
          </li>
          <li>
            <strong>Remediation Support:</strong> We assist you in implementing
            the necessary fixes and improvements.
          </li>
          <li>
            <strong>Retesting:</strong> Verifying that vulnerabilities have been
            effectively addressed.
          </li>
        </ol>

        <div className="divider"></div>

        <h3>Experience the Albasa Web Difference</h3>

        <p>
          Choosing Albasa Web means partnering with a team that values
          professionalism, integrity, and customer satisfaction. We are
          dedicated to helping you achieve a robust security posture that
          protects your assets and gives you peace of mind.
        </p>

        <div className="divider"></div>

        <button type="submit" className="btn dark-btn">
          Contact Us
        </button>

        <p>
          Ready to fortify your cybersecurity defenses? Get in touch with us to
          learn more about how our penetration testing services can benefit your
          organization.
        </p>

        <p>
          <strong>Albasa Web</strong> – Empowering Businesses Through Enhanced
          Cybersecurity
        </p>

        <div className="divider"></div>

        <p>
          <em>Protect. Secure. Succeed.</em>
        </p>
      </div>

      {/* Penetration Testing BOTTOM SECTION */}
      <section className="bottom-about container">
        <Portfolio />
        <Contact />
      </section>
    </>
  );
};

export default PenetrationTesting;
