"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Facebook, Linkedin, User, LogOut } from "lucide-react";
import { useAuth } from "./AuthProvider";
import AuthModal from "./AuthModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, signOut, loading } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
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
                  alt="Nyxpro AI Agency Logo"
                  width={45}
                  height={45}
                  className="rounded-xl shadow-lg ai-glow"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary-300/20 to-electric-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <span className="text-2xl font-bold gradient-text font-logo">
                  Nyxpro
                </span>
                <div className="text-xs text-gray-400 font-logo">AI Agency</div>
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
              AI Services
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

          {/* Social Media Icons & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3 pr-4 border-r border-gray-700">
              <a
                href="https://www.facebook.com/nyxpro2022"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-primary-300 bg-gray-800/50 hover:bg-primary-300/20 rounded-lg transition-all duration-300 ai-glow"
                aria-label="Follow Nyxpro AI on Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/jephmari/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-primary-300 bg-gray-800/50 hover:bg-primary-300/20 rounded-lg transition-all duration-300 ai-glow"
                aria-label="Connect with Nyxpro AI on LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>

            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 px-3 py-2 bg-gray-800/50 rounded-lg">
                  <User className="w-4 h-4 text-primary-300" />
                  <span className="text-sm text-gray-300 font-logo">
                    {user.email}
                  </span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="p-2 text-gray-400 hover:text-red-400 bg-gray-800/50 hover:bg-red-500/20 rounded-lg transition-all duration-300"
                  aria-label="Sign out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                className="btn-primary font-logo"
                onClick={() => setIsAuthModalOpen(true)}
                disabled={loading}
              >
                {loading ? "Loading..." : "Get Started"}
              </button>
            )}
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
                AI Services
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

              {/* Mobile Social & Auth */}
              <div className="pt-4 border-t border-gray-800/50">
                <div className="flex items-center space-x-4 mb-4">
                  <a
                    href="https://www.facebook.com/nyxpro2022"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-primary-300 bg-gray-800/50 hover:bg-primary-300/20 rounded-lg transition-all duration-300"
                    aria-label="Follow Nyxpro AI on Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jephmari/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-primary-300 bg-gray-800/50 hover:bg-primary-300/20 rounded-lg transition-all duration-300"
                    aria-label="Connect with Nyxpro AI on LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>

                {user ? (
                  <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-primary-300" />
                      <span className="text-sm text-gray-300 font-logo">
                        {user.email}
                      </span>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="p-2 text-gray-400 hover:text-red-400 rounded-lg transition-colors"
                      aria-label="Sign out"
                    >
                      <LogOut className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    className="btn-primary w-full font-logo"
                    onClick={() => setIsAuthModalOpen(true)}
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Get Started"}
                  </button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </header>
  );
};

export default Header;
