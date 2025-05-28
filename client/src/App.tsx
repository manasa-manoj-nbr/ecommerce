import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import About from './pages/About';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/aboutus" element={<About />} />
        {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
