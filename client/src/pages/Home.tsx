import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleMode = () => setDarkMode((prev) => !prev);

  return (
    <div className="bg-black text-white">
      <Navbar darkMode={darkMode} toggleMode={toggleMode} />
      <Banner darkMode={darkMode} />
      <Gallery />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;


