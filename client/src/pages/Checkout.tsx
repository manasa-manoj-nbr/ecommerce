import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CheckoutPage from "../components/CheckoutPage";

const Checkout: React.FC = () => {
  return (
    <div className="bg-black text-white">
    <Navbar />
      <CheckoutPage />
      <Footer />
    </div>
  );
};
 
export default Checkout;
