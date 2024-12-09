import React from "react";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold">Designed and Developed by Arun Vijo</h3>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold">Copyright © {year}</h3>
          </div>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/arunvijo04"
              className="text-white hover:text-yellow-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="text-2xl" />
            </a>
            <a
              href="https://twitter.com/arunvijo04"
              className="text-white hover:text-yellow-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/arunvijo04/"
              className="text-white hover:text-yellow-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/arunvijo04"
              className="text-white hover:text-yellow-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
