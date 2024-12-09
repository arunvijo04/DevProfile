import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineFileText } from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <nav className={`fixed top-0 w-full z-50 ${navColour ? "bg-gray-800" : "bg-transparent"} transition-all`}>
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h4 className="text-white text-xl font-semibold">Arun Vijo</h4>
        </div>
        <div className="lg:flex hidden space-x-4">
          <Link to="/home" className="text-white hover:text-yellow-400">Home</Link>
          <Link to="/about" className="text-white hover:text-yellow-400">About</Link>
          <Link to="/project" className="text-white hover:text-yellow-400">Projects</Link>
          <Link to="/resume" className="text-white hover:text-yellow-400">Resume</Link>
        </div>
        <div className="lg:hidden flex items-center">
          <button className="text-white p-2" onClick={() => setExpand(!expand)}>
            {/* Toggle Button */}
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white"></span>
          </button>
        </div>
      </div>
      {expand && (
        <div className="lg:hidden p-4 bg-gray-800">
          <Link to="/home" className="text-white block py-2">Home</Link>
          <Link to="/about" className="text-white block py-2">About</Link>
          <Link to="/project" className="text-white block py-2">Projects</Link>
          <Link to="/resume" className="text-white block py-2">Resume</Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
