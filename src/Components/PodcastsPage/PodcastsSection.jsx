/* eslint-disable no-unused-vars */

import React from "react";
import podcast_1 from "../../assets/podcast-images/podcasts-1.jpg";
import podcast_2 from "../../assets/podcast-images/podcasts-2.jpg";
import podcast_3 from "../../assets/podcast-images/podcasts-3.jpg";
import podcast_4 from "../../assets/podcasts-4.jpg";
import "./PodcastsSection.css";

const PodcastsSection = () => {
  return (
    <div className="podcasts-sections">
      {/* First 3 items */}
      <ul className="top-podcasts">
        <li>
          <div className="podcasts-section-info">
            <img src={podcast_1} alt="" />
            <div>
              <h3>
                The $230 million crypto handbag heist, and misinformation on
                social media
              </h3>
            </div>
          </div>
          <p>
            Two men are accused of stealing almost a quarter of a billion
            dollars from one person's cryptocurrency wallet, but why on earth
            would they be handing out handbags to strangers? And social media
            comes under the spotlight once more, as we ask if you are delving
            into misinformation in your most private moments... All this...
            <br />
            <a
              href="https://player.captivate.fm/episode/3fcc0ad1-8df4-4e5b-8b0a-3aa01af80140"
              className="links btn"
              target="_blank"
            >
              Click here to listen to the full podcast.
            </a>
          </p>
        </li>
        <li>
          <div className="podcasts-section-info">
            <img src={podcast_2} alt="" />
            <div>
              <h3>Jim Hates Scams</h3>
            </div>
          </div>
          <p>
            Jim Browning has dedicated himself to combatting scammers, taking a
            proactive stance by infiltrating their computer systems. Through his
            efforts, he not only disrupts these fraudulent operations but also
            shares his findings publicly on YouTube, shedding light on the
            intricacies of scam networks. His work uncovers a myriad of
            intriguing insights into the digital underworld, which he
            articulately discusses, offering viewers a behind-the-scenes look at
            his methods for fighting back against scammers...
            <br />
            <a
              href="https://darknetdiaries.com/episode/143/"
              className="links btn"
              target="_blank"
            >
              Click here to listen to the full podcast.
            </a>
          </p>
        </li>
        <li>
          <div className="podcasts-section-info">
            <img src={podcast_3} alt="" />
            <div>
              <h3>Axact</h3>
            </div>
          </div>
          <p>
            Axact sells fake diplomas and degrees. What could go wrong with this
            business plan?..
            <br />
            <a
              href="https://darknetdiaries.com/episode/142/"
              className="links btn"
              target="_blank"
            >
              Click here to listen to the full podcast.
            </a>
          </p>
        </li>
      </ul>
      {/* Remaining items */}
      <ul className="bottom-podcasts">
        <li>
          <div className="podcasts-section-info">
            <img src={podcast_4} alt="" />
            <div>
              <h3>Cybersecurity Best Practices for Remote Work</h3>
            </div>
          </div>
          <p>
            Remote work has become a standard for many businesses around the
            world, offering flexibility and efficiency...
            <br />
            <a href="#" className="links btn">
              Click here to read the full article.
            </a>
          </p>
        </li>
        <li>
          <div className="podcasts-section-info">
            <img src={podcast_4} alt="" />
            <div>
              <h3>Cybersecurity Best Practices for Remote Work</h3>
            </div>
          </div>
          <p>
            Remote work has become a standard for many businesses around the
            world, offering flexibility and efficiency...
            <br />
            <a href="#" className="links btn">
              Click here to read the full article.
            </a>
          </p>
        </li>
        <li>
          <div className="podcasts-section-info">
            <img src={podcast_4} alt="" />
            <div>
              <h3>Cybersecurity Best Practices for Remote Work</h3>
            </div>
          </div>
          <p>
            Remote work has become a standard for many businesses around the
            world, offering flexibility and efficiency...
            <br />
            <a href="#" className="links btn">
              Click here to read the full article.
            </a>
          </p>
        </li>
        <li>
          <div className="podcasts-section-info">
            <img src={podcast_4} alt="" />
            <div>
              <h3>Cybersecurity Best Practices for Remote Work</h3>
            </div>
          </div>
          <p>
            Remote work has become a standard for many businesses around the
            world, offering flexibility and efficiency...
            <br />
            <a href="#" className="links btn">
              Click here to read the full article.
            </a>
          </p>
        </li>
        <li>
          <div className="podcasts-section-info">
            <img src={podcast_4} alt="" />
            <div>
              <h3>Cybersecurity Best Practices for Remote Work</h3>
            </div>
          </div>
          <p>
            Remote work has become a standard for many businesses around the
            world, offering flexibility and efficiency...
            <br />
            <a href="#" className="links btn">
              Click here to read the full article.
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default PodcastsSection;
