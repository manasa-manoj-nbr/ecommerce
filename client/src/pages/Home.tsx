import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Accordion from "../components/Accordion";

const Home: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Banner />
      <Gallery />
      <ProductCard />
      <Accordion />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
