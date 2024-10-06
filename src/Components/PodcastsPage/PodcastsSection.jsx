/* eslint-disable no-unused-vars */

import React from "react";
import podcast_1 from "../../assets/podcast-images/podcasts-1.jpg";
import podcast_2 from "../../assets/podcast-images/podcasts-2.jpg";
import podcast_3 from "../../assets/podcast-images/podcasts-3.jpg";
import {
  default as podcast_4,
  default as podcast_6,
} from "../../assets/podcast-images/podcasts-4.jpg";
import podcast_5 from "../../assets/podcast-images/podcasts-5.jpg";
import "./PodcastsSection.css";

const PodcastsSection = () => {
  return (
    <div className="podcasts-sections">
      {/* First 3 items */}
      <ul className="top-podcasts">
        <li>
          <div className="podcasts-section-info">
            <img src={podcast_1} alt="Podcast 1" />
            <h3>
              The $230 million crypto handbag heist, and misinformation on
              social media
            </h3>
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
              rel="noopener noreferrer"
            >
              Click here to listen to the full podcast.
            </a>
          </p>
        </li>
        <li>
          <div className="podcasts-section-info">
            <img src={podcast_2} alt="Podcast 2" />
            <h3>Jim Hates Scams</h3>
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
              rel="noopener noreferrer"
            >
              Click here to listen to the full podcast.
            </a>
          </p>
        </li>
        <li>
          <div className="podcasts-section-info">
            <img src={podcast_3} alt="Podcast 3" />
            <h3>Axact</h3>
          </div>
          <p>
            Axact sells fake diplomas and degrees. What could go wrong with this
            business plan?..
            <br />
            <a
              href="https://darknetdiaries.com/episode/142/"
              className="links btn"
              target="_blank"
              rel="noopener noreferrer"
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
            <img src={podcast_4} alt="Podcast 4" />
            <h3>Password Manager Injection Attacks</h3>
          </div>
          <p>
            Password Manager Injection Attacks occur when malicious actors
            exploit vulnerabilities in password managers to automatically fill
            login fields with stored credentials on phishing sites. By injecting
            harmful scripts or manipulating autofill features, attackers trick
            password managers into divulging sensitive information like
            usernames and passwords without user consent. This type of attack
            targets the trust users place in their password managers,
            emphasizing the importance of vigilance, proper configuration, and
            using two-factor authentication for added security...
            <br />
            <a
              href="https://twit.tv/shows/security-now/episodes/992?autostart=false"
              className="links btn"
              target="_blank"
            >
              Click here to read the full article.
            </a>
          </p>
        </li>
        <li>
          <div className="podcasts-section-info">
            <img src={podcast_5} alt="Podcast 5" />
            <h3>Things To Do With Your New iPhone 16</h3>
          </div>
          <p>
            Dive into the exciting world of new iPhone features with Mikah
            Sargent and Rosemary Orchard! This week, they explore the latest
            additions to iOS, including:...
            <br />
            <a
              href="https://twit.tv/shows/ios-today/episodes/722?autostart=false"
              className="links btn"
              target="_blank"
            >
              Click here to read the full article.
            </a>
          </p>
        </li>
        <li>
          <div className="podcasts-section-info">
            <img src={podcast_6} alt="Podcast 6" />
            <h3>Is Telegram an Encrypted App?</h3>
          </div>
          <p>
            Telegram is often marketed as a secure messaging app, but its
            encryption practices have faced criticism. By default, Telegram does
            not enable end-to-end encryption for regular chats, instead relying
            on a proprietary client-server encryption method (MTProto). This
            means that while your messages are encrypted in transit, Telegram's
            servers can technically decrypt and access them. Full end-to-end
            encryption is only available in Secret Chats, which users must
            manually enable....
            <br />
            <a
              href="https://twit.tv/shows/security-now/episodes/990?autostart=false"
              className="links btn"
              target="_blank"
            >
              Click here to read the full article.
            </a>
          </p>
        </li>
        {/* More podcast items can be added here in a similar manner */}
      </ul>
    </div>
  );
};

export default PodcastsSection;
