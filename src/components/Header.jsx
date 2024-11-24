import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) =>
    location.pathname === path ? 'text-teal-500 font-semibold' : '';

  return (
    <header className="fixed w-full bg-slate-600/20 text-slate-200 font-medium shadow-lg z-10">
      <nav className="container mx-auto flex justify-between items-center p-4 py-6">
        {/* Logo */}
        <h1 className="text-xl font-bold">Kalpana Portfolio</h1>

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
          className={`flex flex-col md:flex-row absolute md:static w-full md:w-auto top-16 md:top-0 left-0 md:left-auto p-6 md:p-0 space-y-4 md:space-y-0 md:space-x-6 shadow-md md:shadow-none transition-transform duration-300 ${
            isOpen ? 'block' : 'hidden'
          } md:flex`}
        >
          <li>
            <Link
              to="/"
              className={`hover:text-teal-500 ${isActive('/')}`}
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
          </li>

          <li>
            <Link
              to="/experience"
              className={`hover:text-teal-500 ${isActive('/experience')}`}
              onClick={() => setIsOpen(false)}
            >
              CAREER HIGHLIGHTS
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`hover:text-teal-500 ${isActive('/projects')}`}
              onClick={() => setIsOpen(false)}
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="/freelance"
              className={`hover:text-teal-500 ${isActive('/freelance')}`}
              onClick={() => setIsOpen(false)}
            >
              FREELANCE
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
