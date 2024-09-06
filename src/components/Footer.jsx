import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 text-center text-white">
        <p className="mb-4">
          © {new Date().getFullYear()} SidLabs. All Rights Reserved.
        </p>
        <ul className="flex justify-center space-x-6 mb-4">
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/facebook-icon.png" alt="Facebook" className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/twitter-icon.png" alt="Twitter" className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedin-icon.png" alt="LinkedIn" className="h-6 w-6" />
            </a>
          </li>
        </ul>
        <p>Crafted with ♥ by SidLabs Team</p>
      </div>
    </footer>
  );
};

export default Footer;
