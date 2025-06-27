"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Award,
  Users,
  Brain,
  Cpu,
  Globe,
  Zap,
  Target,
  Trophy,
  ChevronLeft,
  ChevronRight,
  Star,
  Code,
  BarChart3,
  Shield,
  Rocket,
} from "lucide-react";

const About = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const founders = [
    {
      name: "Jeph Mari",
      role: "Co-Founder & CEO",
      image: "/images/jephMari.jpg",
      bio: "Visionary leader driving Nyxpro's mission to revolutionize business operations through AI-powered solutions and intelligent automation technologies.",
      expertise: [
        "AI Strategy",
        "Business Development",
        "Digital Transformation",
        "Technology Leadership",
      ],
      achievements: "5+ years in AI implementation",
      focus: "Scaling AI solutions for enterprise clients",
    },
    {
      name: "Jeph Paul",
      role: "Co-Founder & CTO",
      image: "/images/jephPaul.jpg",
      bio: "Technical architect specializing in AI infrastructure, machine learning systems, and scalable technology solutions that power intelligent business operations.",
      expertise: [
        "AI/ML Engineering",
        "System Architecture",
        "Software Development",
        "Cloud Infrastructure",
      ],
      achievements: "Expert in ML model deployment",
      focus: "Building next-generation AI systems",
    },
  ];

  const values = [
    {
      icon: Brain,
      title: "AI Innovation",
      description:
        "We harness cutting-edge artificial intelligence to create solutions that anticipate needs and optimize outcomes.",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description:
        "Our AI-accelerated development process ensures faster time-to-market while maintaining enterprise-grade quality.",
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description:
        "Bank-level security protocols with AI-powered threat detection ensure your data and operations remain protected.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "Every AI solution is designed with measurable ROI and clear business impact in mind, delivering tangible value.",
    },
  ];

  const teamMembers = [
    {
      name: "Jeph Mari Roble",
      role: "CEO & AI Solutions Architect",
      expertise: "Neural Networks & Machine Learning",
      image: "/images/jephMari.jpg",
      description:
        "Visionary leader with 5+ years of experience in AI implementation and digital transformation. Specializes in developing intelligent automation solutions that drive exponential business growth.",
      specialties: [
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
      ],
      achievements: "Led 100+ AI transformation projects",
    },
    {
      name: "Jeph Paul Roble",
      role: "CTO & AI Engineering Lead",
      expertise: "AI Architecture & Software Development",
      image: "/images/jephPaul.jpg",
      description:
        "Technical mastermind behind our cutting-edge AI systems. Expert in scalable architecture design, machine learning operations, and enterprise-grade AI deployment strategies.",
      specialties: ["AI Infrastructure", "Cloud Computing", "DevOps"],
      achievements: "Architected 50+ enterprise AI systems",
    },
  ];

  const aiTechnologies = [
    {
      category: "Neural Intelligence",
      technologies: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn"],
      icon: Brain,
      color: "primary",
    },
    {
      category: "Development Platforms",
      technologies: ["Python", "JavaScript", "Node.js", "React"],
      icon: Code,
      color: "electric",
    },
    {
      category: "Cloud Infrastructure",
      technologies: ["AWS", "Google Cloud", "Azure", "Docker"],
      icon: Globe,
      color: "accent",
    },
    {
      category: "Data Analytics",
      technologies: ["Pandas", "NumPy", "Apache Spark", "Tableau"],
      icon: BarChart3,
      color: "primary",
    },
  ];

  const nextTeamMember = () => {
    setActiveTeamMember((prev) => (prev + 1) % founders.length);
  };

  const prevTeamMember = () => {
    setActiveTeamMember(
      (prev) => (prev - 1 + founders.length) % founders.length
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
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
      id="about"
      className="section-padding bg-black relative overflow-hidden"
    >
      {/* AI Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 neural-bg opacity-20"></div>
        <div className="absolute top-40 right-20 w-40 h-40 border border-electric-400/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-28 h-28 bg-gradient-to-r from-primary-300/10 to-electric-400/10 rounded-xl rotate-45 animate-float"></div>

        {/* Circuit Lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300/30 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-400/30 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-primary-300 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary-300"></div>
            <span className="text-sm font-medium tracking-wide px-4 py-2 bg-primary-300/10 rounded-full border border-primary-300/30 font-logo">
              <Users className="inline w-4 h-4 mr-2" />
              About Nyxpro AI Agency
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary-300"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ai-heading">
            <span className="gradient-text font-logo">
              Intelligent Solutions
            </span>
            <span className="text-white block">for Digital Future</span>
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-logo">
            Nyxpro is a cutting-edge AI agency that transforms businesses
            through intelligent automation, advanced analytics, and innovative
            technology solutions that drive sustainable growth and operational
            excellence.
          </p>
        </div>

        {/* Company Mission */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-white font-logo">
              Our AI-Driven Mission
            </h3>
            <div className="space-y-6 text-gray-300 leading-relaxed font-logo">
              <p className="text-lg">
                <strong className="text-primary-300 font-logo">
                  At Nyxpro AI Agency,
                </strong>{" "}
                we specialize in transforming traditional business operations
                through artificial intelligence, machine learning, and
                intelligent automation solutions that deliver measurable
                results.
              </p>
              <p>
                Our expertise spans across healthcare technology, financial
                systems, data analytics, and custom software development. We
                leverage advanced AI algorithms to optimize workflows, enhance
                decision-making, and create scalable solutions that adapt to
                your evolving business needs.
              </p>
              <p>
                From AI-powered medical billing systems to intelligent workflow
                automation, we bridge the gap between cutting-edge technology
                and practical business applications, ensuring every solution
                delivers tangible value and competitive advantage.
              </p>
            </div>

            {/* AI Capabilities */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="ai-panel">
                <div className="flex items-center space-x-3 mb-2">
                  <Cpu className="w-5 h-5 text-primary-300" />
                  <span className="text-2xl font-bold gradient-text font-logo">
                    100+
                  </span>
                </div>
                <p className="text-gray-300 text-sm">AI Models Deployed</p>
              </div>
              <div className="ai-panel">
                <div className="flex items-center space-x-3 mb-2">
                  <BarChart3 className="w-5 h-5 text-electric-400" />
                  <span className="text-2xl font-bold gradient-text font-logo">
                    99.9%
                  </span>
                </div>
                <p className="text-gray-300 text-sm">System Uptime</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-black via-gray-900/50 to-black rounded-3xl p-8 border border-gray-800 ai-glow">
              <Image
                src="/images/nyxproLogo.jpg"
                alt="Nyxpro AI Agency - Intelligent Technology Solutions"
                width={400}
                height={300}
                className="rounded-2xl shadow-lg"
              />
              {/* AI Overlay Effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-300/20 via-transparent to-electric-400/20 rounded-3xl"></div>

              {/* AI Data Streams */}
              <div className="absolute top-8 right-8 w-2 h-8 bg-gradient-to-b from-primary-300 to-transparent animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-2 h-6 bg-gradient-to-t from-electric-400 to-transparent animate-pulse"></div>

              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary-300 to-electric-400 text-black px-4 py-2 rounded-lg font-semibold text-sm shadow-lg font-logo">
                AI-First Technology
              </div>
            </div>
          </div>
        </div>

        {/* Team Carousel Section */}
        <div className="mb-20" id="team">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-white font-logo">
            Meet Our <span className="gradient-text">AI Leadership Team</span>
          </h3>

          <div className="relative max-w-4xl mx-auto">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {teamMembers.map((member, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="team-carousel-card mx-4">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Left: Image */}
                        <div className="relative">
                          <div className="relative w-64 h-64 mx-auto">
                            <Image
                              src={member.image}
                              alt={`${member.name}, ${member.role} of Nyxpro AI Agency`}
                              fill
                              className="rounded-2xl object-cover border-2 border-primary-300/30 hover:border-primary-300/50 transition-colors duration-300"
                            />
                            {/* AI Enhancement Ring */}
                            <div className="absolute inset-0 border-2 border-electric-400/30 rounded-2xl animate-pulse"></div>
                          </div>

                          {/* AI Badge */}
                          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-primary-300 to-electric-400 rounded-full flex items-center justify-center ai-glow">
                            <Brain className="w-6 h-6 text-black" />
                          </div>
                        </div>

                        {/* Right: Content */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-2xl font-bold mb-2 text-white font-logo">
                              {member.name}
                            </h4>
                            <p className="text-primary-300 font-medium mb-4 font-logo">
                              {member.role}
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-4 font-logo">
                              {member.description}
                            </p>
                          </div>

                          {/* Achievements */}
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <Star className="w-4 h-4 text-primary-300" />
                              <span className="text-sm text-gray-300 font-logo">
                                {member.achievements}
                              </span>
                            </div>
                          </div>

                          {/* Expertise Tags */}
                          <div className="space-y-2">
                            <h5 className="font-semibold text-white text-sm font-logo">
                              Core Expertise:
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {member.specialties.map(
                                (specialty, skillIndex) => (
                                  <span
                                    key={skillIndex}
                                    className="px-3 py-1 bg-primary-300/20 border border-primary-300/30 text-primary-300 text-xs font-medium rounded-full hover:bg-primary-300/30 transition-colors duration-300 font-logo"
                                  >
                                    {specialty}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-black/80 hover:bg-primary-300/20 border border-gray-800 hover:border-primary-300/50 rounded-full flex items-center justify-center transition-all duration-300 ai-glow"
              aria-label="Previous team member"
            >
              <ChevronLeft className="w-5 h-5 text-primary-300" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-black/80 hover:bg-primary-300/20 border border-gray-800 hover:border-primary-300/50 rounded-full flex items-center justify-center transition-all duration-300 ai-glow"
              aria-label="Next team member"
            >
              <ChevronRight className="w-5 h-5 text-primary-300" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-3 mt-8">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-primary-300 shadow-lg shadow-primary-300/50"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-white font-logo">
            Our <span className="gradient-text">AI-Driven Values</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="ai-icon-container mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-primary-300 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h4 className="text-lg font-bold mb-3 text-white group-hover:text-primary-300 transition-colors duration-300 font-logo">
                    {value.title}
                  </h4>

                  <p className="text-gray-300 text-sm leading-relaxed font-logo">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* AI Technology Stack */}
        <div className="bg-gradient-to-r from-black via-gray-900/50 to-black rounded-3xl p-8 lg:p-12 border border-gray-800 ai-glow relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 ai-grid opacity-10"></div>

          <div className="relative z-10 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-8 gradient-text font-logo">
              Our AI Technology Stack
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiTechnologies.map((tech, index) => {
                const IconComponent = tech.icon;
                const colorClasses = getColorClasses(tech.color);

                return (
                  <div key={index} className="ai-panel group cursor-pointer">
                    <div className="ai-icon-container mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent
                        className={`w-8 h-8 ${colorClasses.split(" ")[0]}`}
                      />
                    </div>

                    <h4 className="text-xl font-bold mb-4 text-white group-hover:text-primary-300 transition-colors duration-300 font-logo">
                      {tech.category}
                    </h4>

                    <div className="space-y-3">
                      {tech.technologies.map((technology, techIndex) => (
                        <div
                          key={techIndex}
                          className="flex items-center space-x-3 group/tech"
                        >
                          <div className="w-1.5 h-1.5 bg-primary-300 rounded-full group-hover/tech:animate-pulse"></div>
                          <span className="text-gray-300 font-logo group-hover/tech:text-gray-200 transition-colors">
                            {technology}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
