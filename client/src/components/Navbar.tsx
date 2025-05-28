// import React from "react";
// import { useNavigate } from "react-router-dom";
// const Navbar: React.FC = () => {
//     const navigate = useNavigate();
//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-between px-8 py-4">
//       <div className="flex items-center">
//         <div onClick={() => navigate("/")} className="w-10 h-10 cursor-pointer flex items-center justify-center">
//             <img src="/images/logo.png" alt="logo" />
//         </div>
//       </div>

//       {/* Right: Nav Links */}
//       <div className="flex items-center space-x-10">
//         <span onClick={() => navigate("/aboutus")}
//           className="text-lg cursor-pointer font-medium text-white hover:text-white/90"
//         >
//           About Us
//         </span>
//         <span
//           onClick={() => navigate("/waitlist")}
//           className="text-lg cursor-pointer font-medium text-white hover:text-white/90"
//         >
//           Waitlist
//         </span>
//         <span
//           onClick={() => navigate("/cart")}
//           className="text-lg cursor-pointer font-medium text-white hover:text-white/90"
//         >
//           Cart
//         </span>
//         <button onClick={() => navigate("/products")}
//           className="text-lg cursor-pointer font-medium w-[100px] px-2 py-3 rounded transition-colors duration-200 text-black bg-white hover:bg-white/95"
//         >Buy
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-between px-8 py-4">
      <div className="flex items-center">
        <div
          onClick={() => navigate("/")}
          className="w-10 h-10 cursor-pointer flex items-center justify-center"
        >
          <img src="/images/logo.png" alt="logo" />
        </div>
      </div>

      {/* Right: Nav Links */}
      <div className="flex items-center space-x-10">
        <span
          onClick={() => navigate("/aboutus")}
          className={`text-lg cursor-pointer font-medium px-2 py-2 rounded transition-colors duration-200
            ${isActive("/aboutus") ? "bg-white text-black" : "text-white hover:bg-white/95 hover:text-black"}`}
        >
          About Us
        </span>
        <span
          onClick={() => navigate("/waitlist")}
          className={`text-lg cursor-pointer font-medium px-2 py-2 rounded transition-colors duration-200
            ${isActive("/waitlist") ? "bg-white text-black" : "text-white hover:bg-white/95 hover:text-black"}`}
        >
          Waitlist
        </span>
        <span
          onClick={() => navigate("/cart")}
          className={`text-lg cursor-pointer font-medium w-[100px] text-center px-2 py-2 rounded transition-colors duration-200
            ${isActive("/cart") ? "bg-white text-black" : "text-white hover:bg-white/95 hover:text-black"}`}
        >
          Cart
        </span>
        <button
          onClick={() => navigate("/products")}
          className={`text-lg cursor-pointer font-medium w-[100px] px-2 py-3 rounded transition-colors duration-200
            ${isActive("/products") ? "bg-white text-black" : "text-white hover:bg-white/95 hover:text-black"}`}
        >
          Buy
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
