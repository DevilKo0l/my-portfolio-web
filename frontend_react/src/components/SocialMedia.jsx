import React from "react";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { FaSteam } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsFacebook />
      </div>
      <div>
        <FaSteam />
      </div>
    </div>
  );
};

export default SocialMedia;
