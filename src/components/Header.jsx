import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky z-10 top-0 py-6 bg-black px-12">
      <div className="flex justify-between">
        <div className="text-white">
          <h1>Awobona Yetunde</h1>
        </div>
        <nav className="hidden md:flex gap-8 items-center relative text-white">
          <a href="#hero" className="hover:text-purple-400">
            Home
          </a>
          <a href="#about" className="hover:text-purple-400">
            About
          </a>
          <a href="#projects" className="hover:text-purple-400">
            Projects
          </a>
          <a href="#skills" className="hover:text-purple-400">
            Skills
          </a>
          <a href="#contacts" className="hover:text-purple-400">
            Contact
          </a>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
          {isMenuOpen && (
            <nav className="flex flex-col gap-3 absolute bg-purple-800 w-[80%] rounded-lg text-center p-3 left-0">
              <a href="#hero" className=" hover:text-purple-300">
                Home
              </a>
              <a href="#about" className=" hover:text-purple-300">
                About
              </a>
              <a href="#projects" className=" hover:text-purple-300">
                Projects
              </a>
              <a href="#skills" className=" hover:text-purple-300">
                Skills
              </a>
              <a href="#contacts" className=" hover:text-purple-300">
                Contact
              </a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
