import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg px-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-800">
            <a href="/">Logo</a>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-800 hover:text-gray-600">Product</Link>
            <Link to="/cart" className="text-gray-800 hover:text-gray-600">Cart</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
