import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WaitlistPage from "../components/WaitlistPage";

const Waitlist: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <WaitlistPage />
      <Footer />
    </div>
  );
};

export default Waitlist;
