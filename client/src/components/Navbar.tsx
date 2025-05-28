import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

/*Navbar Component Displays the main navigation bar with active link highlighting.*/
const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /* Checks if the given path matches the current route. @param path - Route path to check */
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-between px-8 py-4">
      {/* Logo Section */}
      <div className="flex items-center">
        <div
          onClick={() => navigate("/")}
          className="w-10 h-10 cursor-pointer flex items-center justify-center"
          role="button"
          tabIndex={0}
          aria-label="Go to Home"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") navigate("/");
          }}
        >
          <img src="/images/logo.png" alt="logo" />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-10">
        <span
          onClick={() => navigate("/aboutus")}
          className={`text-lg cursor-pointer font-medium px-2 py-2 rounded transition-colors duration-200
            ${isActive("/aboutus") ? "bg-white text-black" : "text-white hover:bg-white/95 hover:text-black"}`}
          role="button"
          tabIndex={0}
          aria-label="About Us"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") navigate("/aboutus");
          }}
        >
          About Us
        </span>
        <span
          onClick={() => navigate("/waitlist")}
          className={`text-lg cursor-pointer font-medium px-2 py-2 rounded transition-colors duration-200
            ${isActive("/waitlist") ? "bg-white text-black" : "text-white hover:bg-white/95 hover:text-black"}`}
          role="button"
          tabIndex={0}
          aria-label="Waitlist"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") navigate("/waitlist");
          }}
        >
          Waitlist
        </span>
        <span
          onClick={() => navigate("/cart")}
          className={`text-lg cursor-pointer font-medium w-[100px] text-center px-2 py-2 rounded transition-colors duration-200
            ${isActive("/cart") ? "bg-white text-black" : "text-white hover:bg-white/95 hover:text-black"}`}
          role="button"
          tabIndex={0}
          aria-label="Cart"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") navigate("/cart");
          }}
        >
          Cart
        </span>
        <button
          onClick={() => navigate("/products")}
          className={`text-lg cursor-pointer font-medium w-[100px] px-2 py-3 rounded transition-colors duration-200
            ${isActive("/products") ? "bg-white text-black" : "text-white hover:bg-white/95 hover:text-black"}`}
          aria-label="Buy"
        >
          Buy
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
