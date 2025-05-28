import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/home/Banner";
import Gallery from "../components/home/Gallery";
import Testimonial from "../components/home/Testimonial";
import Footer from "../components/Footer";
import ProductCard from "../components/home/ProductCard";
import Accordion from "../components/home/Accordion";

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
