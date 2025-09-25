
'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky z-10 top-0 py-4 sm:py-5 bg-black px-4 sm:px-6 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Awobona Yetunde</h1>
        </div>
        <nav className="hidden md:flex gap-6 md:gap-8 items-center text-white">
          <a href="#hero" className="hover:text-purple-400 text-sm md:text-base">
            Home
          </a>
          <a href="#about" className="hover:text-purple-400 text-sm md:text-base">
            About
          </a>
          <a href="#projects" className="hover:text-purple-400 text-sm md:text-base">
            Projects
          </a>
          <a href="#skills" className="hover:text-purple-400 text-sm md:text-base">
            Skills
          </a>
          <a href="#contacts" className="hover:text-purple-400 text-sm md:text-base">
            Contact
          </a>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
          {isMenuOpen && (
            <nav className="absolute top-full left-0 right-0 bg-purple-800 w-full rounded-b-lg text-center p-4 flex flex-col gap-3">
              <a
                href="#hero"
                className="text-white hover:text-purple-300 text-sm"
                onClick={handleMenuItemClick}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-purple-300 text-sm"
                onClick={handleMenuItemClick}
              >
                About
              </a>
              <a
                href="#projects"
                className="text-white hover:text-purple-300 text-sm"
                onClick={handleMenuItemClick}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-white hover:text-purple-300 text-sm"
                onClick={handleMenuItemClick}
              >
                Skills
              </a>
              <a
                href="#contacts"
                className="text-white hover:text-purple-300 text-sm"
                onClick={handleMenuItemClick}
              >
                Contact
              </a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

