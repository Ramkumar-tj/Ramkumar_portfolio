import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import k_logo from '../static/videos/k_logo.mp4';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) =>
    location.pathname === path ? 'text-teal-300 font-semibold' : '';

  return (
    <header className="fixed w-full bg-teal-900 text-slate-300 font-medium shadow-lg z-10">
      <nav className="md:w-[90vw] lg:w-[85vw] mx-auto flex justify-between items-center px-6 md:px-2 py-4">
        {/* Logo */}
        <a href='/'>
        <video
          src={k_logo}
          autoPlay
          loop
          muted
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg shadow-md"
          aria-label="Logo"
        ></video>
      </a>

        {/* Hamburger Icon */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? '✖' : '☰'}
        </button>

        {/* Navigation Links */}
        <ul
          className={`bg-teal-900 flex flex-col md:flex-row absolute md:static w-full md:w-auto top-16 md:top-0 left-0 md:left-auto p-6 md:p-0 space-y-4 md:space-y-0 md:space-x-6 shadow-md md:shadow-none transition-transform duration-300 ${
            isOpen ? 'block' : 'hidden'
          } md:flex`}
        >
          <li>
            <Link
              to="/"
              className={`hover:text-teal-400 ${isActive('/')}`}
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
          </li>

          <li>
            <Link
              to="/career"
              className={`hover:text-teal-400 ${isActive('/career')}`}
              onClick={() => setIsOpen(false)}
            >
              CAREER HIGHLIGHTS
            </Link>
          </li>
          {/* <li>
            <Link
              to="/resume"
              className={`hover:text-teal-400 ${isActive('/resume')}`}
              onClick={() => setIsOpen(false)}
            >
              RESUME
            </Link>
          </li> */}
          <li>
            <Link
              to="/contact"
              className={`hover:text-teal-400 ${isActive('/contact')}`}
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
