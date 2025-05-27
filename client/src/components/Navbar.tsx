import React, { useState } from "react";
interface NavbarProps {
  darkMode: boolean;
  toggleMode: () => void;
}
const Navbar: React.FC<NavbarProps> = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleMode = () => setDarkMode((prev) => !prev);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-black bg-opacity-60 backdrop-blur-md flex items-center justify-between px-8 py-4 ${
        darkMode ? "bg-black/80" : "bg-white/90"
      }`}
    >
      <div className="flex items-center">
        <div className="w-10 h-10 flex items-center justify-center">
          <a href="/">
            <img src="/images/logo.png" alt="logo" />
          </a>
        </div>
      </div>

      {/* Right: Nav Links and Mode Toggle */}
      <div className="flex items-center space-x-10">
        {/* Light/Dark Mode Toggle Button */}
        <button
          onClick={toggleMode}
          className={`ml-6 px-4 py-2 cursor-pointer rounded transition-colors duration-200 ${
            darkMode ? " hover:bg-gray-200/5" : " hover:bg-gray-800/5"
          }`}
        >
          <img
            src={darkMode ? "/images/sun-solid.svg" : "/images/moon-solid.svg"}
            alt={darkMode ? "Light Mode" : "Dark Mode"}
            className="w-6 h-6"
          />
        </button>
        <a
          href="#about"
          className={`text-lg font-medium ${
            darkMode
              ? "text-white hover:text-white/90"
              : "text-black hover:text-black/60"
          } `}
        >
          About Us
        </a>
        <a
          href="#waitlist"
          className={`text-lg font-medium ${
            darkMode
              ? "text-white hover:text-white/90"
              : "text-black hover:text-black/60"
          } `}
        >
          Waitlist
        </a>
        <a
          href="#cart"
          className={`text-lg font-medium ${
            darkMode
              ? "text-white hover:text-white/90"
              : "text-black hover:text-black/60"
          } `}
        >
          Cart
        </a>
        <button
          className={`text-lg font-medium sm:w-[100px] px-2 py-3 rounded transition-colors duration-200 ${
            darkMode
              ? "text-black bg-white hover:bg-white/95"
              : "text-white bg-black hover:bg-black/80"
          } `}
        >
          <a href="#buy">Buy </a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;