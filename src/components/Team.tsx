"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Zap,
  Brain,
  TrendingUp,
  Globe,
  Star,
  ArrowRight,
  Cpu,
  Network,
  Activity,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Team = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const teamImages = [
    {
      src: "/team/447654682_1879299112492633_1853480028527287143_n.jpg",
      title: "NYXPRO Team Assembly",
      description: "Our complete team gathered for strategic planning",
    },
    {
      src: "/team/447594838_1265012794473501_5598823661079054515_n.jpg",
      title: "Innovation Workshop",
      description: "Collaborative brainstorming and solution development",
    },
    {
      src: "/team/447581557_1165355984663220_6330300067004853930_n.jpg",
      title: "Technical Excellence",
      description: "Our development and engineering specialists",
    },
    {
      src: "/team/441924912_767555228892961_9165608272536660843_n.jpg",
      title: "Project Leadership",
      description: "Strategic minds driving AI innovation",
    },
    {
      src: "/team/448083299_849874943842012_1128381349592465768_n.jpg",
      title: "Creative Solutions Team",
      description: "Designers and solution architects at work",
    },
    {
      src: "/team/476611153_1036490701835180_7721396397016637409_n.jpg",
      title: "Growth Partnership",
      description: "Expanding our global reach and impact",
    },
    {
      src: "/team/507533584_1418250926180789_3433125053061873724_n.jpg",
      title: "AI Research Division",
      description: "Advanced AI and machine learning specialists",
    },
    {
      src: "/team/a0897800-666e-49bc-8d57-d46ddf0f1bc7.jpg",
      title: "Client Success Team",
      description: "Dedicated to delivering exceptional results",
    },
    {
      src: "/team/e56268af-5129-472a-9685-a47c672d5d22.jpg",
      title: "Future Vision",
      description: "Planning the next generation of AI solutions",
    },
    {
      src: "/team/1744058341718.jpg",
      title: "Founding Leadership",
      description: "The visionary founders of NYXPRO",
    },
    {
      src: "/team/1744058359964.jpg",
      title: "Core Development",
      description: "Our original technical foundation team",
    },
    {
      src: "/team/1749486953009.jpg",
      title: "Strategic Operations",
      description: "Operations and business development leaders",
    },
    {
      src: "/team/1750139556264.jpg",
      title: "Global Expansion",
      description: "International growth and partnership team",
    },
  ];

  const teamStats = [
    {
      icon: Users,
      number: "50+",
      label: "Expert Professionals",
      color: "primary",
    },
    {
      icon: TrendingUp,
      number: "300%",
      label: "Growth in 2024",
      color: "electric",
    },
    {
      icon: Brain,
      number: "2020",
      label: "Year Established",
      color: "accent",
    },
    {
      icon: Globe,
      number: "US",
      label: "Primary Market",
      color: "primary",
    },
  ];

  const coreValues = [
    {
      icon: Brain,
      title: "AI-First Innovation",
      description: "Leading the future with intelligent solutions",
    },
    {
      icon: Network,
      title: "Collaborative Excellence",
      description: "Unified expertise delivering extraordinary results",
    },
    {
      icon: Zap,
      title: "Rapid Evolution",
      description: "Adapting and growing at the speed of technology",
    },
  ];

  // Auto-rotate images every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % teamImages.length);
    }, 30000);

    return () => clearInterval(interval);
  }, [teamImages.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % teamImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + teamImages.length) % teamImages.length
    );
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary-300 bg-primary-300/10 border-primary-300/30";
      case "electric":
        return "text-electric-400 bg-electric-400/10 border-electric-400/30";
      case "accent":
        return "text-accent-400 bg-accent-400/10 border-accent-400/30";
      default:
        return "text-primary-300 bg-primary-300/10 border-primary-300/30";
    }
  };

  return (
    <section
      id="team"
      className="section-padding bg-black relative overflow-hidden"
    >
      {/* Advanced AI Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 neural-bg opacity-20"></div>
        <div className="absolute inset-0 ai-grid opacity-30"></div>

        {/* Dynamic Floating Elements */}
        <div className="absolute top-20 left-[10%] w-16 h-16 border-2 border-primary-300/30 rounded-xl rotate-45 animate-float">
          <div className="absolute inset-2 bg-primary-300/20 rounded-lg animate-pulse"></div>
        </div>
        <div className="absolute bottom-32 right-[15%] w-20 h-20 bg-gradient-to-br from-electric-400/20 to-primary-300/20 rounded-full animate-pulse-slow">
          <div className="absolute inset-4 border border-electric-400/40 rounded-full animate-spin-slow"></div>
        </div>
        <div className="absolute top-1/2 right-[8%] w-12 h-12 bg-accent-400/30 rounded-xl animate-spin-slow">
          <div className="absolute inset-2 bg-accent-400/50 rounded-lg"></div>
        </div>

        {/* Data Flow Lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300/40 to-transparent animate-data-flow"></div>
        <div
          className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-400/40 to-transparent animate-data-flow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-400/40 to-transparent animate-data-flow"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Morphing Background Shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-300/5 to-electric-400/5 rounded-full blur-3xl animate-morph"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-electric-400/5 to-accent-400/5 rounded-full blur-3xl animate-morph"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 text-primary-300 mb-8">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-primary-300 animate-data-flow"></div>
            <span className="text-sm font-medium tracking-wide px-8 py-4 bg-primary-300/10 rounded-full border border-primary-300/30 font-logo backdrop-blur-sm">
              <Users className="inline w-5 h-5 mr-3 animate-pulse" />
              Our Growing Team
            </span>
            <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-primary-300 animate-data-flow"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 ai-heading">
            <span className="text-white">50+ Team Members</span>
            <br />
            <span className="text-white">as of </span>
            <span style={{ color: "#5CE2E7" }}>2020</span>
            <span className="text-white"> — And We're</span>
            <br />
            <span className="gradient-text">Still Growing</span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-logo mb-12">
            Behind every solution we build is a team of passionate professionals
            working together to
            <span className="text-primary-300 font-semibold">
              {" "}
              transform business through technology
            </span>
            , strategy, and automation.
          </p>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {teamStats.map((stat, index) => {
              const IconComponent = stat.icon;
              const colorClasses = getColorClasses(stat.color);

              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border transition-all duration-500 hover:scale-110 group ${colorClasses} relative overflow-hidden`}
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="ai-icon-container group-hover:scale-110 transition-transform duration-300">
                        <IconComponent
                          className={`w-8 h-8 ${
                            colorClasses.split(" ")[0]
                          } group-hover:animate-pulse`}
                        />
                      </div>
                    </div>
                    <div
                      className={`text-3xl font-bold mb-2 ${
                        colorClasses.split(" ")[0]
                      } font-logo`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm font-logo leading-tight">
                      {stat.label}
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-primary-300/0 group-hover:border-primary-300/60 transition-colors duration-500"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-primary-300/0 group-hover:border-primary-300/60 transition-colors duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Large Team Gallery - Dedicated Row */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-logo">
              Meet Our <span className="gradient-text">Amazing Team</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto font-logo">
              Discover the faces behind our innovative AI solutions and
              cutting-edge technology implementations
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="ai-panel p-12 relative overflow-hidden">
              {/* Large Image Container */}
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-8">
                <Image
                  src={teamImages[currentImage].src}
                  alt={`NYXPRO Team - ${teamImages[currentImage].title}`}
                  fill
                  className="object-cover transition-all duration-1000 ease-in-out"
                  sizes="100vw"
                  priority
                />

                {/* Enhanced Overlay with Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="max-w-2xl">
                    <h3 className="text-4xl font-bold text-white mb-4 font-logo">
                      {teamImages[currentImage].title}
                    </h3>
                    <p className="text-xl text-primary-300 font-logo">
                      {teamImages[currentImage].description}
                    </p>
                  </div>
                </div>

                {/* Enhanced Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 ai-icon-container !w-16 !h-16 hover:scale-110 transition-all duration-300 group"
                  aria-label="Previous team image"
                >
                  <ChevronLeft className="w-8 h-8 text-primary-300 group-hover:text-white transition-colors" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 ai-icon-container !w-16 !h-16 hover:scale-110 transition-all duration-300 group"
                  aria-label="Next team image"
                >
                  <ChevronRight className="w-8 h-8 text-primary-300 group-hover:text-white transition-colors" />
                </button>

                {/* Enhanced Progress Indicators */}
                <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-4">
                  {teamImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentImage
                          ? "bg-primary-300 scale-125 shadow-lg shadow-primary-300/50"
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`View team image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Enhanced Image Counter */}
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-logo">Team Gallery</span>
                <span className="text-primary-300 font-semibold font-logo">
                  {currentImage + 1} / {teamImages.length}
                </span>
              </div>

              {/* Multiple Animated Scan Lines */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent animate-data-flow"></div>
              <div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-400 to-transparent animate-data-flow"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Core Values & Mission - Separate Row */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 font-logo">
                Driving Innovation Through
                <span className="gradient-text"> Collective Excellence</span>
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed font-logo mb-8">
                Our rapidly expanding team represents the future of AI-driven
                business transformation. Each member brings unique expertise
                that contributes to our mission of revolutionizing how
                organizations operate, compete, and thrive in the digital age.
              </p>

              {/* Core Values */}
              <div className="space-y-6">
                {coreValues.map((value, index) => {
                  const IconComponent = value.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-primary-300/50 transition-all duration-300 group"
                    >
                      <div className="ai-icon-container !w-12 !h-12 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-primary-300 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2 font-logo group-hover:text-primary-300 transition-colors duration-300">
                          {value.title}
                        </h4>
                        <p className="text-gray-300 font-logo leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Call to Action - Enhanced */}
            <div className="lg:pt-16">
              <div className="p-8 bg-gradient-to-r from-primary-300/10 to-electric-400/10 rounded-2xl border border-primary-300/30 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-300/5 to-electric-400/5 animate-pulse-slow"></div>

                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-white mb-6 font-logo">
                    Ready to Join Our Mission?
                  </h4>
                  <p className="text-gray-300 mb-8 font-logo text-lg leading-relaxed">
                    We're always seeking talented individuals who share our
                    passion for AI innovation and business transformation. Join
                    our rapidly growing team of 50+ professionals.
                  </p>
                  <Link
                    href="/careers"
                    className="btn-primary group font-logo w-full inline-flex items-center justify-center"
                  >
                    Explore Career Opportunities
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Enhanced Corner Accents */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary-300/30"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-electric-400/30"></div>
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-accent-400/30"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary-300/30"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Achievement Banner */}
        <div className="ai-panel text-center">
          <div className="relative">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 neural-bg opacity-30"></div>

            <div className="relative z-10 py-8">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Activity className="w-8 h-8 text-electric-400 animate-pulse" />
                <h3 className="text-2xl font-bold text-white font-logo">
                  Powered by Collective Intelligence
                </h3>
                <Cpu className="w-8 h-8 text-primary-300 animate-spin-slow" />
              </div>

              <p className="text-lg text-gray-300 max-w-3xl mx-auto font-logo">
                From strategic visionaries to technical architects, our diverse
                team of 50+ professionals collaborates seamlessly to deliver AI
                solutions that transform industries and accelerate growth.
              </p>

              {/* Live Growth Indicator */}
              <div className="mt-8 inline-flex items-center space-x-3 px-6 py-3 bg-primary-300/10 rounded-full border border-primary-300/30">
                <div className="w-3 h-3 bg-primary-300 rounded-full animate-pulse"></div>
                <span className="text-primary-300 font-medium font-logo">
                  Currently Growing • New Talent Welcome
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
