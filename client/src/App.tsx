import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';

// import other pages when created

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
