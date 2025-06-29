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
      name: "Jeph Paul",
      role: "Founder and CEO",
      expertise: "Business Strategy & Leadership",
      image: "/images/jephPaul.jpg",
      description:
        "Visionary business leader and strategic architect driving Nyxpro's mission to transform organizations through intelligent technology solutions. Expert in executive decision-making, business development, and strategic partnerships that accelerate company growth and market expansion.",
      specialties: [
        "Business Strategy",
        "Strategic Planning",
        "Leadership",
        "Business Development",
        "Operations Management",
        "Executive Decision Making",
      ],
      achievements:
        "Led strategic growth initiatives resulting in 300% business expansion",
    },
    {
      name: "Jeph Mari",
      role: "Co-Founder and CTO",
      expertise: "AI Automation & Robotics Engineering",
      image: "/images/jephMari.jpg",
      description:
        "Electronics and Software Engineer specializing in AI automation systems and robotics implementation. Technical visionary behind Nyxpro's cutting-edge AI architecture, driving innovation in intelligent automation solutions and enterprise-grade technology deployment.",
      specialties: [
        "AI Automation Specialist",
        "Robotics Implementation",
        "AI Architecture",
        "Software Engineering",
        "Technical Leadership",
        "Systems Integration",
      ],
      achievements:
        "Architected 200+ AI automation systems across diverse industries",
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
      name: "Jeph Paul",
      role: "Founder and CEO",
      expertise: "Business Strategy & Leadership",
      image: "/images/jephPaul.jpg",
      description:
        "Visionary business leader and strategic architect driving Nyxpro's mission to transform organizations through intelligent technology solutions. Expert in executive decision-making, business development, and strategic partnerships that accelerate company growth and market expansion.",
      specialties: [
        "Business Strategy",
        "Strategic Planning",
        "Leadership",
        "Business Development",
        "Operations Management",
        "Executive Decision Making",
      ],
      achievements:
        "Led strategic growth initiatives resulting in 300% business expansion",
    },
    {
      name: "Jeph Mari",
      role: "Co-Founder and CTO",
      expertise: "AI Automation & Robotics Engineering",
      image: "/images/jephMari.jpg",
      description:
        "Electronics and Software Engineer specializing in AI automation systems and robotics implementation. Technical visionary behind Nyxpro's cutting-edge AI architecture, driving innovation in intelligent automation solutions and enterprise-grade technology deployment.",
      specialties: [
        "AI Automation Specialist",
        "Robotics Implementation",
        "AI Architecture",
        "Software Engineering",
        "Technical Leadership",
        "Systems Integration",
      ],
      achievements:
        "Architected 200+ AI automation systems across diverse industries",
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
              About NYXPRO IT Consulting and Services
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary-300"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ai-heading">
            <span className="gradient-text font-logo">
              Intelligent Solutions
            </span>
            <span className="text-white block">for Digital Future</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-logo">
            At NYXPRO IT Consulting and Services, we're not just building
            software—we're architecting the future of intelligent business
            operations through revolutionary AI solutions that transform how
            organizations operate, compete, and thrive.
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
                  At NYXPRO IT Consulting and Services,
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
                alt="NYXPRO IT Consulting and Services - Intelligent Technology Solutions"
                width={320}
                height={320}
                className="rounded-2xl shadow-xl"
                priority
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

        {/* Founders Section */}
        <div className="mb-20" id="team">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 ai-heading">
              Meet Our Founders
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto font-logo">
              Visionary leaders and technical experts driving the future of
              intelligent business solutions with deep expertise in strategic
              planning, AI automation, and cutting-edge technology
              implementation.
            </p>
          </div>

          <div className="relative">
            {/* Founders Carousel Container */}
            <div className="bg-gradient-to-r from-black via-gray-900/30 to-black rounded-3xl p-12 border border-gray-800 ai-glow overflow-hidden relative">
              {/* Animated Background */}
              <div className="absolute inset-0 neural-bg opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-300/5 via-transparent to-electric-400/5 animate-circuit"></div>

              <div className="relative z-10">
                <div className="relative overflow-hidden rounded-2xl">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {teamMembers.map((founder, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="mx-4">
                          <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Founder Info */}
                            <div className="space-y-8">
                              <div>
                                <div className="flex items-center space-x-3 mb-4">
                                  <div className="w-12 h-1 bg-gradient-to-r from-primary-300 to-electric-400 rounded-full"></div>
                                  <span className="text-primary-300 font-medium font-logo">
                                    Leadership Excellence
                                  </span>
                                </div>

                                <h4 className="text-3xl font-bold text-white mb-2 font-logo">
                                  {founder.name}
                                </h4>

                                <div className="flex flex-col space-y-2 mb-6">
                                  <span className="text-electric-400 text-lg font-semibold font-logo">
                                    {founder.role}
                                  </span>
                                  <span className="text-primary-300/80 font-logo">
                                    {founder.expertise}
                                  </span>
                                </div>
                              </div>

                              <p className="text-gray-300 leading-relaxed text-lg font-logo">
                                {founder.description}
                              </p>

                              {/* Core Specialties */}
                              <div>
                                <h5 className="text-white font-semibold mb-4 font-logo">
                                  Core Specialties:
                                </h5>
                                <div className="grid grid-cols-2 gap-3">
                                  {founder.specialties.map(
                                    (specialty, index) => (
                                      <span
                                        key={index}
                                        className="px-4 py-2 bg-primary-300/10 border border-primary-300/30 rounded-lg text-primary-300 text-sm font-logo text-center hover:bg-primary-300/20 transition-colors duration-300"
                                      >
                                        {specialty}
                                      </span>
                                    )
                                  )}
                                </div>
                              </div>

                              {/* Key Achievement */}
                              <div className="flex items-start space-x-3 p-4 bg-black/50 rounded-xl border border-gray-800">
                                <Trophy className="w-6 h-6 text-electric-400 flex-shrink-0 mt-1" />
                                <div>
                                  <h6 className="font-semibold text-white mb-1 font-logo">
                                    Key Achievement
                                  </h6>
                                  <span className="text-gray-300 font-logo text-sm">
                                    {founder.achievements}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Founder Image */}
                            <div className="text-center">
                              <div className="relative inline-block">
                                {/* Professional Enhancement Rings */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-80 h-80 border border-primary-300/20 rounded-full animate-spin-slow"></div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-96 h-96 border border-electric-400/15 rounded-full animate-spin-reverse"></div>
                                </div>

                                {/* Image Container */}
                                <div className="relative z-10 p-6">
                                  <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary-300/20 to-electric-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                                    <Image
                                      src={founder.image}
                                      alt={`${founder.name} - ${founder.role} of NYXPRO IT Consulting and Services`}
                                      width={280}
                                      height={280}
                                      className="relative z-10 rounded-full shadow-2xl border-4 border-gray-800 group-hover:scale-105 transition-all duration-500"
                                    />

                                    {/* Professional Badge */}
                                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-300 to-electric-400 text-black px-6 py-2 rounded-full font-semibold text-sm shadow-lg font-logo z-20">
                                      {founder.role.includes("CEO")
                                        ? "Chief Executive"
                                        : "Technical Leader"}
                                    </div>
                                  </div>
                                </div>

                                {/* Floating Professional Indicators */}
                                <div className="absolute top-8 -left-8 bg-black/80 backdrop-blur-sm px-3 py-2 rounded-full border border-primary-300/30 z-30">
                                  <div className="flex items-center space-x-2">
                                    <Target className="w-4 h-4 text-primary-300" />
                                    <span className="text-xs text-primary-300 font-logo">
                                      Strategic Vision
                                    </span>
                                  </div>
                                </div>

                                <div className="absolute bottom-8 -right-8 bg-black/80 backdrop-blur-sm px-3 py-2 rounded-full border border-electric-400/30 z-30">
                                  <div className="flex items-center space-x-2">
                                    <Zap className="w-4 h-4 text-electric-400" />
                                    <span className="text-xs text-electric-400 font-logo">
                                      Innovation
                                    </span>
                                  </div>
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
                <div className="flex items-center justify-center space-x-6 mt-12">
                  <button
                    onClick={prevSlide}
                    className="p-3 bg-gray-800 hover:bg-primary-300/20 border border-gray-700 hover:border-primary-300/50 rounded-full transition-all duration-300 group"
                    aria-label="Previous founder"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-primary-300" />
                  </button>

                  {/* Slide Indicators */}
                  <div className="flex space-x-3">
                    {teamMembers.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? "bg-primary-300 scale-125"
                            : "bg-gray-600 hover:bg-gray-500"
                        }`}
                        aria-label={`Go to founder ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextSlide}
                    className="p-3 bg-gray-800 hover:bg-primary-300/20 border border-gray-700 hover:border-primary-300/50 rounded-full transition-all duration-300 group"
                    aria-label="Next founder"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-primary-300" />
                  </button>
                </div>
              </div>
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
