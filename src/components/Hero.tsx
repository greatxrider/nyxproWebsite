"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Brain,
  Zap,
  Shield,
  ChevronRight,
  ArrowRight,
  BarChart3,
  Target,
  Globe,
} from "lucide-react";
import { useAuth } from "./AuthProvider";
import AuthModal from "./AuthModal";

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { user } = useAuth();

  const rotatingTexts = [
    "Intelligent Technology Solutions",
    "AI-Powered Business Transformation",
    "Neural Network-Driven Growth",
    "Predictive Analytics & Automation",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const aiCapabilities = [
    {
      icon: Brain,
      title: "Neural Automation",
      description: "Self-learning AI systems that evolve with your business",
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Data-driven insights for strategic decision making",
    },
    {
      icon: Target,
      title: "Smart Optimization",
      description: "Continuous process improvement through machine learning",
    },
    {
      icon: Globe,
      title: "Digital Integration",
      description: "Seamless AI-powered ecosystem connections",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-black overflow-hidden"
    >
      {/* Enhanced Neural Network Background */}
      <div className="absolute inset-0">
        {/* Dynamic Neural Grid */}
        <div className="absolute inset-0 ai-grid opacity-20"></div>

        {/* Parallax Floating Elements */}
        <div
          className="absolute top-20 left-[10%] w-3 h-3 bg-primary-300/40 rounded-full blur-sm"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        />
        <div
          className="absolute top-1/3 right-[15%] w-2 h-2 bg-electric-400/40 rounded-full"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${
              mousePosition.y * 0.015
            }px)`,
          }}
        />
        <div
          className="absolute bottom-1/3 left-[20%] w-4 h-4 border border-accent-400/30 rounded-full"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${
              mousePosition.y * 0.01
            }px)`,
          }}
        />

        {/* Morphing Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-300/10 to-electric-400/10 rounded-full blur-3xl animate-morph"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-electric-400/10 to-accent-400/10 rounded-full blur-3xl animate-morph"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Circuit Lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300/30 to-transparent animate-data-flow"></div>
        <div
          className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-400/30 to-transparent animate-data-flow"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Floating Elements with Different Animations */}
        <div className="absolute top-32 right-32 w-6 h-6 border border-primary-300/30 rounded-lg animate-float"></div>
        <div className="absolute bottom-40 left-40 w-8 h-8 bg-gradient-to-r from-electric-400/20 to-primary-300/20 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-accent-400/40 rounded-sm animate-spin-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 text-primary-300 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary-300"></div>
                <span className="text-sm font-medium tracking-wide px-4 py-2 bg-primary-300/10 rounded-full border border-primary-300/30 font-logo backdrop-blur-sm">
                  <Brain className="inline w-4 h-4 mr-2" />
                  Welcome to the Future of AI
                </span>
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary-300"></div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-8">
                <span className="text-white font-logo">For</span>
                <br />
                <span className="ai-heading">{rotatingTexts[currentText]}</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl font-logo">
                Transform your business with cutting-edge AI solutions that
                automate processes, predict outcomes, and drive exponential
                growth through intelligent technology integration.
              </p>

              {/* AI Capabilities Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {aiCapabilities.map((capability, index) => {
                  const IconComponent = capability.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-black/30 backdrop-blur-sm rounded-xl border border-gray-800/50 hover:border-primary-300/50 transition-all duration-500 group"
                    >
                      <div className="ai-icon-container !w-10 !h-10 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-5 h-5 text-primary-300 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1 font-logo group-hover:text-primary-300 transition-colors duration-300">
                          {capability.title}
                        </h3>
                        <p className="text-sm text-gray-400 font-logo leading-relaxed">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {user ? (
                  <button className="btn-primary group font-logo text-lg px-8 py-4">
                    Access AI Dashboard
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                ) : (
                  <a
                    href="https://calendly.com/jephmari-nyxpro/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary group font-logo text-lg px-8 py-4 inline-flex items-center"
                  >
                    Schedule Discovery Call
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                )}

                <button className="btn-secondary group font-logo text-lg px-8 py-4">
                  Explore AI Solutions
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-8 mt-12 pt-8 border-t border-gray-800/50">
                <div className="text-center">
                  <div className="text-2xl font-bold ai-heading">500+</div>
                  <div className="text-sm text-gray-400 font-logo">
                    AI Models
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold ai-heading">99.9%</div>
                  <div className="text-sm text-gray-400 font-logo">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold ai-heading">24/7</div>
                  <div className="text-sm text-gray-400 font-logo">
                    AI Support
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo with Enhanced AI Effects */}
          <div className="text-center lg:text-right">
            <div className="relative inline-block">
              {/* Orbital Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[400px] h-[400px] border border-primary-300/20 rounded-full animate-spin-slow"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[450px] h-[450px] border border-electric-400/15 rounded-full animate-spin-reverse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-[500px] h-[500px] border border-accent-400/10 rounded-full animate-spin-slow"
                  style={{ animationDuration: "15s" }}
                ></div>
              </div>

              {/* Neural Network Nodes */}
              <div className="absolute top-16 left-16 w-3 h-3 bg-primary-300 rounded-full animate-neural-pulse"></div>
              <div
                className="absolute top-32 right-20 w-2 h-2 bg-electric-400 rounded-full animate-neural-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-24 left-24 w-4 h-4 bg-accent-400 rounded-full animate-neural-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute bottom-40 right-12 w-2 h-2 bg-primary-300 rounded-full animate-neural-pulse"
                style={{ animationDelay: "3s" }}
              ></div>

              {/* Connection Lines */}
              <div className="absolute top-20 left-20 w-32 h-px bg-gradient-to-r from-primary-300/50 to-transparent rotate-45 animate-data-flow"></div>
              <div
                className="absolute bottom-28 right-16 w-24 h-px bg-gradient-to-l from-electric-400/50 to-transparent -rotate-45 animate-data-flow"
                style={{ animationDelay: "1.5s" }}
              ></div>

              {/* Main Logo Container */}
              <div className="relative z-10 p-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-300/20 via-electric-400/20 to-accent-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse-slow"></div>

                  <Image
                    src="/images/nyxproLogo.jpg"
                    alt="NYXPRO IT Consulting and Services - Intelligent Technology Solutions"
                    width={320}
                    height={320}
                    className="relative z-10 rounded-full shadow-2xl group-hover:scale-105 transition-all duration-500"
                    style={{
                      filter: "drop-shadow(0 0 30px rgba(94, 224, 229, 0.3))",
                    }}
                  />

                  {/* Pulsing Border */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary-300/30 group-hover:border-primary-300/60 animate-glow transition-colors duration-500"></div>
                </div>
              </div>

              {/* Floating Data Points */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="flex items-center space-x-2 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full border border-primary-300/30">
                  <div className="w-2 h-2 bg-primary-300 rounded-full animate-pulse"></div>
                  <span className="text-xs text-primary-300 font-logo">
                    Neural Processing Active
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="flex items-center space-x-2 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full border border-electric-400/30">
                  <div className="w-2 h-2 bg-electric-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-electric-400 font-logo">
                    AI Systems Online
                  </span>
                </div>
              </div>

              <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 z-20">
                <div className="flex items-center space-x-2 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full border border-accent-400/30">
                  <Zap className="w-3 h-3 text-accent-400" />
                  <span className="text-xs text-accent-400 font-logo">
                    Learning
                  </span>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 z-20">
                <div className="flex items-center space-x-2 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full border border-primary-300/30">
                  <Shield className="w-3 h-3 text-primary-300" />
                  <span className="text-xs text-primary-300 font-logo">
                    Secured
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
