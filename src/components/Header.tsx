import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="w-full fixed top-0 z-50 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-white py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300">
            Jaseunda
          </Link>
          <span className="block text-sm">Web Developer</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </nav>
        <button className="md:hidden text-white">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;