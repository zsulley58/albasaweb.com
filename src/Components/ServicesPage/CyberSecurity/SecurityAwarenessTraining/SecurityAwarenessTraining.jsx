import React, { useRef } from "react";
import arrow_down from "../../../../assets/arrow-down.png"; // Ensure this path is correct
import Contact from "../../../Contact/Contact";
import Portfolio from "../../../Portfolio/Portfolio";
import "./SecurityAwarenessTraining.css";

const SecurityAwarenessTraining = () => {
  // Create a reference to the securityAwarenessTraining section
  const securityAwarenessTrainingRef = useRef(null);

  // Function to handle smooth scrolling
  const handleScroll = () => {
    if (securityAwarenessTrainingRef.current) {
      securityAwarenessTrainingRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Security Awareness Training HERO SECTION */}
      <section className="securityAwarenessTraining-hero container">
        <div className="securityAwarenessTraining-hero-text">
          <h1>Your Partner in Security Awareness Training</h1>
          <p>
            Empowering Your Team with Essential Knowledge to Protect Your
            Business
          </p>
          <button className="btn dark-btn" onClick={handleScroll}>
            Explore More <img src={arrow_down} alt="Explore more" />
          </button>
        </div>
      </section>

      {/* Security Awareness Training SECTION */}
      <div
        ref={securityAwarenessTrainingRef}
        className="securityAwarenessTraining-section"
      >
        <h2>What is Security Awareness Training?</h2>
        <p>
          In today's digital landscape,{" "}
          <strong>Security Awareness Training</strong> is vital for equipping
          your employees with the knowledge and skills to recognize and prevent
          potential security threats. This training focuses on educating your
          team about best practices, common cyber threats, and the importance of
          maintaining a secure work environment. By investing in security
          awareness, you can significantly reduce the risk of data breaches,
          cyber-attacks, and other security incidents.
        </p>

        <h3>
          Why Choose Albasa Web for Your Security Awareness Training Needs?
        </h3>
        <p>
          At <strong>Albasa Web</strong>, we specialize in delivering
          comprehensive Security Awareness Training services that are
          professional, engaging, and tailored to your organization's specific
          needs. Here's why you can count on us:
        </p>

        <h4>1. Expert Team of Security Trainers</h4>
        <p>
          Our team comprises experienced security professionals who are
          well-versed in the latest cybersecurity trends and threats. We ensure
          that your team receives up-to-date and relevant training to
          effectively safeguard your business.
        </p>

        <h4>2. Customized Training Programs</h4>
        <p>
          We understand that every organization has unique security
          requirements. That's why we offer personalized training programs
          designed to address your specific challenges and objectives. From
          basic security principles to advanced threat mitigation strategies,
          our training covers all aspects necessary to enhance your team's
          security awareness.
        </p>

        <h4>3. Interactive and Engaging Content</h4>
        <p>
          Our training sessions are designed to be interactive and engaging,
          ensuring that your employees are actively involved in the learning
          process. We use a variety of training methods, including simulations,
          real-world scenarios, and hands-on exercises to reinforce key concepts
          and best practices.
        </p>

        <h4>4. Continuous Support and Resources</h4>
        <p>
          We provide ongoing support and resources to help your team stay
          informed and vigilant. Our comprehensive training materials, regular
          updates, and follow-up sessions ensure that your organization remains
          proactive in addressing security threats.
        </p>

        <h4>5. Commitment to Quality and Effectiveness</h4>
        <p>
          Quality and effectiveness are at the core of our training services. We
          conduct thorough assessments to measure the impact of our training
          programs and continuously improve our offerings to ensure they meet
          the highest standards.
        </p>

        <div className="divider"></div>

        <h3>Our Security Awareness Training Services</h3>

        <ul>
          <li>
            <strong>Phishing Simulation Exercises:</strong> Conducting simulated
            phishing attacks to test and improve your team's ability to identify
            and respond to phishing attempts.
          </li>
          <li>
            <strong>Cybersecurity Best Practices:</strong> Teaching essential
            security practices such as password management, data protection, and
            safe internet usage.
          </li>
          <li>
            <strong>Incident Response Training:</strong> Preparing your team to
            effectively respond to security incidents and minimize potential
            damage.
          </li>
          <li>
            <strong>Compliance Training:</strong> Ensuring your organization
            meets industry-specific security standards and regulations.
          </li>
          <li>
            <strong>Secure Remote Work Practices:</strong> Educating your team
            on maintaining security while working remotely.
          </li>
          <li>
            <strong>Social Engineering Awareness:</strong> Training employees to
            recognize and prevent social engineering attacks.
          </li>
          <li>
            <strong>Regular Security Updates:</strong> Providing timely
            information on emerging threats and security trends.
          </li>
        </ul>

        <div className="divider"></div>

        <h3>Our Process</h3>

        <ol>
          <li>
            <strong>Assessment and Planning:</strong> We begin by evaluating
            your current security posture and identifying areas that require
            improvement. This involves conducting risk assessments and
            understanding your organization's specific needs.
          </li>
          <li>
            <strong>Program Development:</strong> Based on the assessment, we
            develop a customized training program that addresses your
            organization's unique security challenges and objectives.
          </li>
          <li>
            <strong>Training Delivery:</strong> Our expert trainers deliver
            engaging and interactive training sessions to your team, utilizing
            various training methods to enhance learning and retention.
          </li>
          <li>
            <strong>Evaluation and Feedback:</strong> We assess the
            effectiveness of the training through evaluations and feedback
            mechanisms, ensuring that the training objectives are met.
          </li>
          <li>
            <strong>Ongoing Support:</strong> We provide continuous support and
            resources to help your organization maintain high levels of security
            awareness and adapt to evolving threats.
          </li>
        </ol>

        <div className="divider"></div>

        <h3>Experience the Albasa Web Difference</h3>

        <p>
          Choosing Albasa Web means partnering with a team dedicated to your
          organization's security and success. We are passionate about providing
          Security Awareness Training services that not only educate your
          employees but also empower them to act as the first line of defense
          against cyber threats. Our commitment to excellence and customer
          satisfaction sets us apart.
        </p>

        <div className="divider"></div>

        <button type="button" className="btn dark-btn">
          Contact Us
        </button>

        <p>
          Ready to enhance your organization's security posture? Get in touch
          with us to discuss how our Security Awareness Training services can
          benefit your business.
        </p>

        <p>
          <strong>Albasa Web</strong> – Empowering Businesses Through
          Comprehensive Security Training
        </p>

        <div className="divider"></div>

        <p>
          <em>Educate. Protect. Excel.</em>
        </p>
      </div>

      {/* Security Awareness Training BOTTOM SECTION */}
      <section className="bottom-about container">
        <Portfolio />
        <Contact />
      </section>
    </>
  );
};

export default SecurityAwarenessTraining;
