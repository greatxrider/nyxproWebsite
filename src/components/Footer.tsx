"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Brain,
  ArrowRight,
  Zap,
  Shield,
  ChevronRight,
  Cpu,
  Activity,
  BarChart3,
  Globe,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Automation Services", href: "#services" },
    { name: "Business Solutions", href: "#services" },
    { name: "Our Team", href: "#team" },
    { name: "Careers", href: "/careers" },
    { name: "Connect", href: "#connect" },
  ];

  const businessServices = [
    { name: "Automation & Integration", href: "#services" },
    { name: "Medical Billing Services", href: "#services" },
    { name: "Web Development", href: "#services" },
    { name: "Accounting & Bookkeeping", href: "#services" },
    { name: "Business Registration", href: "#services" },
  ];

  const aiStats = [
    {
      icon: Activity,
      value: "100+",
      label: "Projects Delivered",
      color: "primary",
    },
    {
      icon: BarChart3,
      value: "95%",
      label: "Client Satisfaction",
      color: "electric",
    },
    { icon: Cpu, value: "2020", label: "Year Established", color: "accent" },
    {
      icon: Globe,
      value: "Multiple",
      label: "Industries Served",
      color: "primary",
    },
  ];

  const getStatColor = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary-300";
      case "electric":
        return "text-electric-400";
      case "accent":
        return "text-accent-400";
      default:
        return "text-primary-300";
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800 relative overflow-hidden">
      {/* AI Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 neural-bg opacity-10"></div>
        <div className="absolute inset-0 ai-grid opacity-20"></div>

        {/* Floating AI Particles */}
        <div className="absolute top-10 left-[10%] w-6 h-6 border border-primary-300/20 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute bottom-10 right-[15%] w-8 h-8 bg-gradient-to-r from-electric-400/20 to-primary-300/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-[20%] w-4 h-4 bg-accent-400/30 rounded-xl animate-spin-slow"></div>

        {/* Neural Network Lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300/30 to-transparent animate-data-flow"></div>
        <div
          className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-400/30 to-transparent animate-data-flow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src="/images/nyxproLogo.jpg"
                  alt="NYXPRO IT Consulting and Services Logo"
                  width={50}
                  height={50}
                  className="rounded-xl shadow-lg ai-glow"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary-300/20 to-electric-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-logo">
                  <span className="text-white">NYX</span>
                  <span style={{ color: "#5CE2E7" }}>PRO</span>
                </h3>
                <div className="text-sm text-white font-logo">
                  IT Consulting and Services
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed font-logo">
              Providing comprehensive business solutions from automation and
              development to accounting and government registration services.
              Your success is our mission.
            </p>

            {/* AI Performance Stats */}
            <div className="grid grid-cols-2 gap-4">
              {aiStats.map((stat, index) => {
                const IconComponent = stat.icon;
                const colorClass = getStatColor(stat.color);

                return (
                  <div
                    key={index}
                    className="text-center p-3 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-primary-300/50 transition-colors duration-300 group"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <IconComponent
                        className={`w-4 h-4 ${colorClass} group-hover:animate-pulse`}
                      />
                    </div>
                    <div
                      className={`text-lg font-bold ${colorClass} font-logo`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 font-logo">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 font-logo">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/nyxpro2022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ai-icon-container !w-12 !h-12 hover:scale-110 transition-all duration-300 group"
                  aria-label="Follow NYXPRO on Facebook"
                >
                  <Facebook className="w-5 h-5 text-primary-300 group-hover:text-white transition-colors duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jephmari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ai-icon-container !w-12 !h-12 hover:scale-110 transition-all duration-300 group"
                  aria-label="Connect with NYXPRO on LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-primary-300 group-hover:text-white transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white font-logo flex items-center">
              <Brain className="mr-2 w-5 h-5 text-primary-300" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-300 transition-all duration-300 flex items-center space-x-2 group font-logo"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h5 className="text-sm font-semibold text-white mb-3 font-logo">
                Business Updates
              </h5>
              <p className="text-gray-400 text-sm mb-4 font-logo">
                Stay informed about our latest services and business insights
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-l-lg focus:border-primary-300 focus:outline-none text-white text-sm font-logo"
                />
                <button
                  className="px-4 py-2 bg-primary-300 text-black rounded-r-lg hover:bg-primary-400 transition-colors duration-300 font-logo"
                  aria-label="Subscribe to business updates"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white font-logo flex items-center">
              <Zap className="mr-2 w-5 h-5 text-electric-400" />
              Business Services
            </h4>
            <ul className="space-y-3">
              {businessServices.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-electric-400 transition-all duration-300 flex items-center space-x-2 group font-logo"
                  >
                    <div className="w-1.5 h-1.5 bg-electric-400 rounded-full group-hover:animate-pulse"></div>
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-gradient-to-r from-electric-400/10 to-primary-300/10 rounded-lg border border-electric-400/30">
              <h5 className="text-sm font-semibold text-white mb-2 font-logo">
                Custom Business Solutions
              </h5>
              <p className="text-gray-400 text-sm font-logo">
                Need something specific? Our team can create tailored solutions
                for your business needs.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white font-logo flex items-center">
              <Shield className="mr-2 w-5 h-5 text-accent-400" />
              Contact Information
            </h4>

            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="ai-icon-container !w-10 !h-10 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-primary-300 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h5 className="font-semibold text-white font-logo">Email</h5>
                  <p className="text-primary-300 font-logo">hr@nyxpro.com</p>
                  <p className="text-gray-400 text-sm font-logo">
                    Business inquiries
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="ai-icon-container !w-10 !h-10 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-electric-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h5 className="font-semibold text-white font-logo">Phone</h5>
                  <p className="text-electric-400 font-logo">
                    +63 967 859 7645
                  </p>
                  <p className="text-gray-400 text-sm font-logo">
                    Monday to Friday
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="ai-icon-container !w-10 !h-10 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-accent-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h5 className="font-semibold text-white font-logo">
                    Address
                  </h5>
                  <p className="text-accent-400 font-logo">
                    MEA Building, Benito Labao Street
                  </p>
                  <p className="text-gray-400 text-sm font-logo">
                    Iligan City, Philippines
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with AI Circuit Effect */}
        <div className="relative mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
          <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-primary-300/50 to-transparent animate-data-flow"></div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-400 font-logo">
              © 2020 NYXPRO IT Consulting and Services. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm font-logo">
              Delivering Business Solutions with Technical Excellence
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end items-center space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-primary-300 transition-colors duration-300 font-logo"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary-300 transition-colors duration-300 font-logo"
            >
              Quality Assurance
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary-300 transition-colors duration-300 font-logo"
            >
              Terms of Service
            </a>
            <a
              href="#services"
              className="text-gray-400 hover:text-primary-300 transition-colors duration-300 font-logo"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* AI Powered Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-300/10 to-electric-400/10 rounded-full border border-primary-300/30 backdrop-blur-sm">
            <Brain className="w-5 h-5 text-primary-300 animate-pulse" />
            <span className="text-primary-300 font-medium font-logo">
              Professional Business Solutions
            </span>
            <Cpu className="w-5 h-5 text-electric-400 animate-spin-slow" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
