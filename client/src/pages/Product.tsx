import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductGalleryPage from "../components/ProductGalleryPage";

const Product: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <ProductGalleryPage />
      <Footer />
    </div>
  );
};

export default Product;
