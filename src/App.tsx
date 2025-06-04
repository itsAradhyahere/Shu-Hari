import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Dealer from './pages/Dealer';
import Contact from './pages/Contact';
import SavingsCalculator from './pages/SavingsCalculator';
import ProductRecommender from './pages/ProductRecommender';

const App = () => {
  const phoneNumber = '+91 9876543210'; // ✅ Change to your desired WhatsApp number

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home phoneNumber={phoneNumber} />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/smart-recommender" element={<ProductRecommender />} />
            
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/dealer" element={<Dealer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/savings-calculator" element={<SavingsCalculator />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppChat phoneNumber={phoneNumber} />
      </div>
    </Router>
  );
};

export default App;
