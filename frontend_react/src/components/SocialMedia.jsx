import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaSteam } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://github.com/DevilKo0l"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://leetcode.com/DevilWalker1337/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/trung-nguyen-cao-303153172/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://steamcommunity.com/id/DevilWalker1337/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSteam />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
