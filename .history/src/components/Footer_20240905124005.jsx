import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-4 md:mb-0">
            <img src="/images/logo.png" alt="SidLabs Logo" className="h-10" />
            <p className="mt-2 text-gray-400">© 2024 SidLabs. All rights reserved.</p>
          </div>

          {/* Links Section */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              Home
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              About
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
