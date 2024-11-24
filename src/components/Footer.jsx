import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <p className="text-xl font-semibold">Let's Connect!</p>
        </div>
        <div className="flex justify-center gap-6 mb-4">
          {/* Social Media Icons */}
          <a href="https://twitter.com" className="text-2xl hover:text-blue-400" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://github.com" className="text-2xl hover:text-gray-400" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" className="text-2xl hover:text-blue-600" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="text-sm text-gray-400">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
