import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartPage from "../components/CartPage";

const Cart: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <CartPage />
      <Footer />
    </div>
  );
};

export default Cart;
