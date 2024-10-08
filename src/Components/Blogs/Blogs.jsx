import React, { useRef } from "react";
import back_icon from "../../assets/back-icon.png";
import blog_1 from "../../assets/blog-1.png";
import blog_2 from "../../assets/blog-2.png";
import blog_3 from "../../assets/blog-3.png";
import blog_4 from "../../assets/blog-4.png";
import next_icon from "../../assets/next-icon.png";
import "./Blogs.css";

const Blogs = () => {
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
    <div className="blogs">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="blog-slider">
        <ul ref={slider}>
          {[blog_1, blog_2, blog_3, blog_4].map((blog, index) => (
            <li key={index}>
              <div className="blog-slide">
                {/* Blog Info */}
                <div className="blog-info">
                  <img src={blog} alt="" />
                  <div>
                    <h3>
                      {index === 0 &&
                        "Top Web Development Trends to Watch in 2024"}
                      {index === 1 &&
                        "The Benefits of Custom Web Development vs. Templates"}
                      {index === 2 &&
                        "Common Cybersecurity Threats in 2024 and How to Protect Your Business"}
                      {index === 3 &&
                        "Cybersecurity Best Practices for Remote Work"}
                    </h3>
                  </div>
                </div>

                {/* Paragraph should come right after the blog info */}
                <p>
                  {index === 0 &&
                    "The web development landscape is constantly evolving, with new technologies, frameworks, and methodologies emerging every year. As businesses strive to stay competitive and deliver exceptional user experiences, staying up-to-date with the latest trends is crucial. Here are the top web development trends to watch in 2024, which will shape how websites and applications are built in the coming year."}
                  {index === 1 &&
                    "In today’s digital era, having a website is a necessity for any business looking to establish a strong online presence. However, when it comes to building a website, you’re often faced with a critical decision: Should you go for a custom web development approach or use pre-built templates? Each option has its own merits, but choosing the right one depends on your business needs, goals, and resources."}
                  {index === 2 &&
                    "As technology continues to evolve, so do the tactics and strategies used by cybercriminals. In 2024, cybersecurity threats have become more sophisticated, targeting businesses of all sizes across various industries. From ransomware attacks to phishing scams, these threats can cause severe financial, reputational, and operational damage to your organization if left unaddressed."}
                  {index === 3 &&
                    "Remote work has become a standard for many businesses around the world, offering flexibility and efficiency. However, with this convenience comes a new set of cybersecurity challenges. As more employees access company networks and sensitive data from home or other remote locations, the risk of cyber threats increases."}
                  <br />
                  <a href="#" className="links">
                    Click here to read the full article.
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
