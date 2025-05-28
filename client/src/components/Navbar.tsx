import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-between px-8 py-4">
      <div className="flex items-center">
        <div className="w-10 h-10 flex items-center justify-center">
          <a href="/">
            <img src="/images/logo.png" alt="logo" />
          </a>
        </div>
      </div>

      {/* Right: Nav Links */}
      <div className="flex items-center space-x-10">
        <a
          href="/aboutus"
          className="text-lg font-medium text-white hover:text-white/90"
        >
          About Us
        </a>
        <a
          href="#waitlist"
          className="text-lg font-medium text-white hover:text-white/90"
        >
          Waitlist
        </a>
        <a
          href="#cart"
          className="text-lg font-medium text-white hover:text-white/90"
        >
          Cart
        </a>
        <button
          className="text-lg font-medium w-[100px] px-2 py-3 rounded transition-colors duration-200 text-black bg-white hover:bg-white/95"
        >
          <a href="#buy">Buy</a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
