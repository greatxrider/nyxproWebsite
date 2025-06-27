"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
  Globe,
  Users,
  Award,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 border border-primary-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-accent-500/5 to-primary-500/5 rounded-xl rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-16 bg-gradient-to-b from-primary-400/30 to-transparent"></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Image
                  src="/images/nyxproLogo.jpg"
                  alt="Nyxpro Business Solutions Logo"
                  width={45}
                  height={45}
                  className="rounded-xl ai-glow"
                />
              </div>
              <div>
                <span className="text-2xl font-bold gradient-text">Nyxpro</span>
                <div className="text-xs text-gray-400">
                  Business Solutions, Inc.
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Your trusted outsourcing partner for scalable growth. We connect
              global businesses with exceptional Filipino talent, delivering
              innovative solutions that reduce costs while maintaining the
              highest quality standards.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/50">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Users className="w-4 h-4 text-primary-400" />
                  <span className="text-lg font-bold gradient-text">500+</span>
                </div>
                <p className="text-xs text-gray-400">Projects</p>
              </div>
              <div className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/50">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Award className="w-4 h-4 text-accent-400" />
                  <span className="text-lg font-bold gradient-text">98%</span>
                </div>
                <p className="text-xs text-gray-400">Satisfaction</p>
              </div>
              <div className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/50">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Globe className="w-4 h-4 text-primary-400" />
                  <span className="text-lg font-bold gradient-text">70%</span>
                </div>
                <p className="text-xs text-gray-400">Cost Savings</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400 font-medium">
                Connect with us:
              </span>
              <a
                href="https://www.facebook.com/nyxpro2022"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/50 hover:bg-blue-600/20 border border-gray-700 hover:border-blue-500/50 rounded-lg flex items-center justify-center transition-all duration-300 ai-glow group"
                aria-label="Follow Nyxpro on Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/jephmari/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/50 hover:bg-blue-700/20 border border-gray-700 hover:border-blue-600/50 rounded-lg flex items-center justify-center transition-all duration-300 ai-glow group"
                aria-label="Connect with Nyxpro on LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#services"
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  Customer Support
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  Technical Development
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  Virtual Assistants
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  Business Process Outsourcing
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  Remote Team Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">contact@nyxpro.com</p>
                  <p className="text-xs text-gray-400">24/7 response time</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">+63 (920) 123-4567</p>
                  <p className="text-xs text-gray-400">Mon-Fri, 8AM-6PM PHT</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">Mindanao, Philippines</p>
                  <p className="text-xs text-gray-400">
                    Serving clients worldwide
                  </p>
                </div>
              </li>
            </ul>

            {/* Quick Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-white">
                Quick Links
              </h4>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="#home"
                  className="text-xs text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Home
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="#services"
                  className="text-xs text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Services
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="#about"
                  className="text-xs text-gray-400 hover:text-primary-400 transition-colors"
                >
                  About
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="#team"
                  className="text-xs text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Team
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="#connect"
                  className="text-xs text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 p-6 bg-gradient-to-r from-primary-500/10 via-accent-500/10 to-primary-500/10 rounded-2xl border border-primary-500/20 text-center">
          <h3 className="text-xl font-bold mb-2 text-white">
            Ready to Scale with Filipino Excellence?
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Join 500+ successful businesses that trust Nyxpro for their
            outsourcing needs.
          </p>
          <button className="btn-primary">
            Start Your Outsourcing Journey
          </button>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Nyxpro Business Solutions, Inc. All rights
              reserved.
            </div>

            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>in the Philippines</span>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
