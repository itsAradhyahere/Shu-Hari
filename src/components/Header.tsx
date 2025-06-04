import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4 px-6 flex justify-between items-center animate-fade-in">
      <Link to="/">
        <img 
          src="/src/Assets/ShuHari Logo.png"  // ✅ Correct path without /public
          alt="ShuHaRi Logo" 
          className="h-20 w-auto max-h-25 object-contain" 
        />
      </Link>

      <nav className="hidden md:flex gap-6 font-semibold text-gray-700">
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/dealer">Dealer</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/savings-calculator">Calculator</Link>
      </nav>

      <div className="text-green-600 font-bold text-lg whitespace-nowrap">
        📞 +91-12345-67890
      </div>
    </header>
  );
};

export default Header;
