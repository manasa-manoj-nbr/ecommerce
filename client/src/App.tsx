import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Waitlist from "./pages/Waitlist";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
