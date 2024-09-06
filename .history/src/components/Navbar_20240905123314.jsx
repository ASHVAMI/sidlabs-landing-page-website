import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="logo">
          <img src="/images/logo.png" alt="SidLabs Logo" className="h-10" />
        </div>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-800">Home</a></li>
          <li><a href="#" className="text-gray-800">About</a></li>
          <li><a href="#" className="text-gray-800">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
