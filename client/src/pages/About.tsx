import AboutPage from '../components/AboutPage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const About: React.FC = () => {
  return (
    <div className="bg-black text-white">
    <Navbar />
      <AboutPage />
      <Footer />
    </div>
  );
};
 
export default About;
