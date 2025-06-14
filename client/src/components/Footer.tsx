import React from "react";
import { useNavigate } from "react-router-dom";
/**
 * Footer Component
 * Displays navigation links, contact info, and a scroll-to-top button.
 */
const Footer: React.FC = () => {
  // Scrolls smoothly to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const navigate = useNavigate();
  return (
    <footer className="relative bg-black py-8 text-gray-300 px-8">
      <div className="mx-8 flex flex-col md:flex-row items-end gap-8">
        {/* Left Section: Logo and Navigation */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold mb-8">
            Eclypse
            <sup className="inline-block ml-1 text-gray-400 transform -translate-y-1 text-lg">
              ↗
            </sup>
          </h1>
          <nav className="flex flex-wrap max-w-[220px] tracking-wider text-base gap-2 text-gray-200">
            <span onClick={() => navigate("/")} className="hover:text-white transition cursor-pointer">
              Home
            </span>
            /
            <span onClick={() => navigate("/aboutus")} className="hover:text-white transition cursor-pointer">
              About
            </span>
            /
            <span onClick={() => navigate("/products")} className="hover:text-white transition cursor-pointer">
              Buy
            </span>
            /
            <span onClick={() => navigate("/contact")} className="hover:text-white transition cursor-pointer">
              Our Customers
            </span>
            /
            <span onClick={() => navigate("/contact")} className="hover:text-white transition cursor-pointer">
              Contacts
            </span>
          </nav>
        </div>

        {/* Right Section: Contact Info */}
        <div className="flex flex-col items-center gap-3 tracking-wider text-gray-300">
          <div>
            <p className="uppercase text-sm text-gray-500 mb-2">Contact</p>
            <p className="text-white text-xl font-medium">+91 123-456-7890</p>
          </div>
          <div>
            <p className="uppercase text-xs text-gray-500 mb-2">Email</p>
            <p className="text-lg text-white">eclypse@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Scroll-to-Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute top-20 sm:top-28 right-12 text-3xl bg-white text-black rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:scale-105 transition"
        aria-label="Scroll to Top"
      >
        ↑
      </button>

      {/* Copyright */}
      <div className="text-right text-xs text-gray-500 mt-10">
        © Eclypse 2025
      </div>
    </footer>
  );
};

export default Footer;
