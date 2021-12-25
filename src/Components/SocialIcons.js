import React from "react";

function SocialIcon({ EnlaceIcon, SvgPath }) {
  return (
    <a class="text-align-center" href={EnlaceIcon}>
      <svg
        className="dark:fill-gray-300 fill-black w-10 h-auto m-10"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Instagram icon</title>
        <path d={SvgPath}></path>
      </svg>
    </a>
  );
}

export default SocialIcon;
