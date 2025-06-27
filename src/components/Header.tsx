"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Facebook, Linkedin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="/images/nyxproLogo.jpg"
                  alt="Nyxpro IT Consulting and Services Logo"
                  width={45}
                  height={45}
                  className="rounded-xl shadow-lg ai-glow"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary-300/20 to-electric-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <span className="text-2xl font-bold text-white font-logo">
                  Nyxpro
                </span>
                <div className="text-xs text-primary-300/80 font-logo">
                  IT Consulting and Services
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="#home"
              className="text-gray-300 hover:text-primary-300 transition-all duration-300 font-medium relative group font-logo"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-300 to-electric-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#services"
              className="text-gray-300 hover:text-primary-300 transition-all duration-300 font-medium relative group font-logo"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-300 to-electric-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#about"
              className="text-gray-300 hover:text-primary-300 transition-all duration-300 font-medium relative group font-logo"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-300 to-electric-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#team"
              className="text-gray-300 hover:text-primary-300 transition-all duration-300 font-medium relative group font-logo"
            >
              Our Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-300 to-electric-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#connect"
              className="text-gray-300 hover:text-primary-300 transition-all duration-300 font-medium relative group font-logo"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-300 to-electric-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Enhanced Social Media Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com/nyxpro2022"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-300/20 hover:bg-primary-300/30 border border-primary-300/40 hover:border-primary-300/60 rounded-xl transition-all duration-300 ai-glow group shadow-lg shadow-primary-300/10"
                aria-label="Follow Nyxpro on Facebook"
              >
                <Facebook className="w-5 h-5 text-primary-300 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/jephmari/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-300/20 hover:bg-primary-300/30 border border-primary-300/40 hover:border-primary-300/60 rounded-xl transition-all duration-300 ai-glow group shadow-lg shadow-primary-300/10"
                aria-label="Connect with Nyxpro on LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-primary-300 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-primary-300 bg-gray-800/50 hover:bg-primary-300/20 transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-800/50 py-4 mt-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#home"
                className="text-gray-300 hover:text-primary-300 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gray-800/30 font-logo"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#services"
                className="text-gray-300 hover:text-primary-300 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gray-800/30 font-logo"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#about"
                className="text-gray-300 hover:text-primary-300 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gray-800/30 font-logo"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="#team"
                className="text-gray-300 hover:text-primary-300 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gray-800/30 font-logo"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Team
              </Link>
              <Link
                href="#connect"
                className="text-gray-300 hover:text-primary-300 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gray-800/30 font-logo"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile Social Media */}
              <div className="pt-4 border-t border-gray-800/50">
                <div className="flex items-center justify-center space-x-4">
                  <a
                    href="https://www.facebook.com/nyxpro2022"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary-300/20 hover:bg-primary-300/30 border border-primary-300/40 hover:border-primary-300/60 rounded-xl transition-all duration-300 ai-glow group shadow-lg shadow-primary-300/10"
                    aria-label="Follow Nyxpro on Facebook"
                  >
                    <Facebook className="w-5 h-5 text-primary-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jephmari/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary-300/20 hover:bg-primary-300/30 border border-primary-300/40 hover:border-primary-300/60 rounded-xl transition-all duration-300 ai-glow group shadow-lg shadow-primary-300/10"
                    aria-label="Connect with Nyxpro on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-primary-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
