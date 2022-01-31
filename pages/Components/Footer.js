import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
const Footer = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 bg-gray p-5 text-center justify-items-center font-medium">
      <div className="logo"></div>
      <div className="text-white">
        <p>
          Made with <span className="text-red">❤️</span> by Aryan, Charles and Cyril
        </p>
      </div>
    </div>
  );
};

export default Footer;
