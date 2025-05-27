import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

// import other pages when created

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
