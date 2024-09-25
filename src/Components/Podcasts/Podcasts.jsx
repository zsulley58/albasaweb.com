/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import back_icon from "../../assets/back-icon.png";
import next_icon from "../../assets/next-icon.png";
import podcast_1 from "../../assets/podcast-1.jpg";
import podcast_2 from "../../assets/podcast-2.jpg";
import podcast_3 from "../../assets/podcast-3.jpg";
import podcast_4 from "../../assets/podcast-4.jpg";
import "./Podcasts.css";

const Podcasts = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="podcasts">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="podcast-info">
                <img src={podcast_1} alt="" />
                <div>
                  <h3>What is Social Engineering?</h3>
                </div>
              </div>
              <p>
                Social engineering is a manipulation technique used by
                cybercriminals to deceive individuals into divulging
                confidential information, performing specific actions, or
                granting unauthorized access to secure systems. Instead of
                exploiting technical vulnerabilities, social engineering targets
                human psychology, leveraging trust, fear, urgency, or curiosity
                to trick victims into making mistakes.
                <br />
                <a href="#" className="links">
                  Click here to read listen to the full podcast.
                </a>
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="podcast-info">
                <img src={podcast_2} alt="" />
                <div>
                  <h3>Securing Your Web Applications</h3>
                </div>
              </div>
              <p>
                Securing your web applications involves implementing strategies
                and practices to protect your web applications from unauthorized
                access, data breaches, and cyberattacks. Given that web
                applications are often targeted by attackers due to their
                accessibility over the internet, it’s crucial to incorporate
                robust security measures from the development phase to
                deployment and beyond. <br />
                <a href="#" className="links">
                  Click here to read listen to the full podcast.
                </a>
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="podcast-info">
                <img src={podcast_3} alt="" />
                <div>
                  <h3>Why Is My System Running Slow?</h3>
                </div>
              </div>
              <p>
                Your system may be running slow for several reasons, and
                identifying the root cause can help you improve its performance.
                Here are some common reasons why your system might be sluggish:
                <br />
                <a href="#" className="links">
                  Click here to read listen to the full podcast.
                </a>
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="podcast-info">
                <img src={podcast_4} alt="" />
                <div>
                  <h3>Emerging Cybersecurity Threats</h3>
                </div>
              </div>
              <p>
                Emerging cybersecurity threats refer to the latest and evolving
                tactics used by cybercriminals to exploit vulnerabilities in
                digital systems, networks, and data. As technology advances,
                attackers adapt and create more sophisticated methods to bypass
                security measures. Here’s a brief overview of some of the key
                emerging cybersecurity threats:
                <br />
                <a href="#" className="links">
                  Click here to read listen to the full podcast.
                </a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Podcasts;
