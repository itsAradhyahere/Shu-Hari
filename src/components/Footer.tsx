import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} ShuHaRi Renewables. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0 text-lg">
          <a
            href="https://www.facebook.com/shuharirenewables"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/company/shuharirenewables"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:contact@shuharirenewables.com"
            className="hover:text-green-400 transition-colors duration-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="/privacy-policy"
            className="hover:text-green-400 transition-colors duration-300 text-sm"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;