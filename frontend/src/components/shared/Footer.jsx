import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Company Info */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Job Hunt</h3>
          {/* <p className="text-gray-400 mb-4">
            We are committed to delivering the best job opportunities for your career growth.
          </p> */}
          <p className="text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a href="https://facebook.com" className="text-gray-400 hover:text-white">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
