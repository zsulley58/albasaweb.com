import React from "react";
import play_icon from "../../assets/play-icon.png";
import video_img from "../../assets/video-img.png";
import white_arrow from "../../assets/white-arrow.png";
import "./About.css";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={video_img} alt="" className="video-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>About Albasa Web</h3>
        <h2>Expert Web Development and Cybersecurity Solutions</h2>
        <p>
          At Albasa Web, we are passionate about creating secure,
          high-performing, and innovative digital solutions tailored to meet the
          unique needs of our clients. With a strong foundation in web
          development, penetration testing, cybersecurity, and a suite of other
          web solutions, we are committed to helping businesses thrive in an
          increasingly digital world.
        </p>
        <p>
          Founded by a team of seasoned professionals, Albasa Web brings
          together a wealth of experience in the tech industry. Our diverse team
          of developers, cybersecurity experts, and web solution specialists
          work collaboratively to deliver projects that exceed expectations. We
          pride ourselves on staying ahead of industry trends, ensuring that our
          clients benefit from the latest technologies and security practices.
        </p>
        <p>
          We believe in building long-term partnerships with our clients. Our
          approach is rooted in understanding your business, your goals, and
          your challenges. We listen carefully, plan strategically, and execute
          flawlessly to deliver solutions that are not only effective but also
          sustainable.
        </p>
        <button className="btn dark-btn">
          Learn more <img src={white_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default About;
