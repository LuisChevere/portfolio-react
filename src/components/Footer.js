import React from "react";
import { SocialIcon } from 'react-social-icons';
import Contact from './Contact';

export default function Footer() {

  return (
    <footer>
      <hr className='hr'></hr>
      <div id="footer">
      <Contact />
        {/* Social links */}
        <div className="socials">
          <h1>Social Links</h1>
          <div className="icons">
            <a href="https://github.com/LuisChevere" target="_blank">
              <SocialIcon url="https://github.com/LuisChevere" target="_blank"/>
            </a>
            <a href="https://www.linkedin.com/in/luis-chevere-4a417575">
              <SocialIcon url="https://www.linkedin.com/in/luis-chevere-4a417575" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
