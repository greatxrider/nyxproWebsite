"use client";

import {
  ArrowRight,
  Sparkles,
  Target,
  Users,
  Globe,
  Zap,
  Star,
} from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-black overflow-hidden"
    >
      {/* AI-Inspired Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-primary-500/30 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full animate-bounce"></div>
        <div
          className="absolute bottom-40 left-20 w-24 h-24 border-2 border-accent-500/30 rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-tr from-accent-400/30 to-primary-400/30 transform rotate-12 animate-pulse"></div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-900/20 via-transparent to-accent-900/20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-800/10 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-primary-400">
                <div className="flex items-center space-x-2 px-4 py-2 bg-primary-500/10 rounded-full border border-primary-500/30">
                  <Sparkles size={18} className="animate-pulse" />
                  <span className="text-sm font-medium tracking-wide">
                    AI-Adaptive Outsourcing Solutions
                  </span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text block">Your Trusted</span>
                <span className="text-white">Outsourcing Partner</span>
                <span className="text-gray-300 block text-3xl sm:text-4xl lg:text-5xl">
                  for Scalable Growth
                </span>
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                At Nyxpro Business Solutions, Inc., we specialize in providing
                outsourced services that help your business grow faster, lower
                costs, and tap into top-tier talent from the Philippines.
              </p>
            </div>

            {/* Key Value Props */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-900/50 rounded-lg border border-gray-800 ai-glow">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-white font-medium block">
                    Cost-Effective
                  </span>
                  <span className="text-gray-400 text-sm">
                    Up to 70% savings
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-900/50 rounded-lg border border-gray-800 ai-glow">
                <div className="w-10 h-10 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-white font-medium block">
                    Top Talent
                  </span>
                  <span className="text-gray-400 text-sm">
                    Filipino professionals
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-900/50 rounded-lg border border-gray-800 ai-glow">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-400 to-accent-400 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-white font-medium block">Scalable</span>
                  <span className="text-gray-400 text-sm">
                    Grow with your needs
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-900/50 rounded-lg border border-gray-800 ai-glow">
                <div className="w-10 h-10 bg-gradient-to-r from-accent-400 to-primary-400 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-white font-medium block">
                    24/7 Support
                  </span>
                  <span className="text-gray-400 text-sm">
                    Always available
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary group">
                Start Outsourcing Today
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">View Our Services</button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">500+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">98%</div>
                <div className="text-sm text-gray-400">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-gray-400">Global Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Logo and Visual */}
          <div className="relative">
            <div className="relative z-10 flex justify-center">
              <div className="relative">
                {/* Animated Rings */}
                <div
                  className="absolute inset-0 animate-spin"
                  style={{ animationDuration: "20s" }}
                >
                  <div className="w-96 h-96 border border-primary-500/30 rounded-full"></div>
                </div>
                <div
                  className="absolute inset-8 animate-spin"
                  style={{
                    animationDuration: "15s",
                    animationDirection: "reverse",
                  }}
                >
                  <div className="w-80 h-80 border border-accent-500/30 rounded-full"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full opacity-80 animate-pulse flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full opacity-70 animate-pulse flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-8 -right-8 w-10 h-10 bg-gradient-to-r from-primary-300 to-accent-300 rounded-lg opacity-60 animate-bounce"></div>
                <div className="absolute -bottom-4 -left-8 w-14 h-14 border-2 border-primary-400/50 rounded-full animate-pulse"></div>

                {/* Main Logo Container */}
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-12 rounded-3xl shadow-2xl border border-gray-700 ai-glow">
                  <div className="relative">
                    <Image
                      src="/images/nyxproLogo.jpg"
                      alt="Nyxpro Business Solutions - Your Trusted Outsourcing Partner"
                      width={320}
                      height={320}
                      className="rounded-2xl shadow-xl"
                      priority
                    />
                    {/* Logo Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 via-transparent to-accent-500/20 rounded-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-primary-400/10 to-transparent rounded-2xl"></div>
                  </div>

                  {/* Tech Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
                    AI-Adaptive Solutions
                  </div>
                </div>

                {/* Gradient Background */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-primary-500/20 via-accent-500/10 to-transparent rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
