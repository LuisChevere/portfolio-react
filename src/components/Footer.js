import React from "react";
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <footer id="footer">
       <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-l text-l font-medium title-font mb-4 text-white">
            Social Links
          </h1>
          <p className="sm:text-l text-l font-medium title-font mb-4 text-white">
          <SocialIcon url="https://github.com/LuisChevere" />
          <SocialIcon url="https://www.linkedin.com/in/luis-chevere-4a417575"></SocialIcon>
       </p>
        </div>
      </div>
    </footer>
  );
}
