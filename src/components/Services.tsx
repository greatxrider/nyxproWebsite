"use client";

import { useState, useEffect } from "react";
import {
  Brain,
  Stethoscope,
  Database,
  Calculator,
  Workflow,
  Globe,
  Code,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Target,
  ChevronRight,
  X,
  Cpu,
  Network,
  Activity,
  BarChart3,
  FileText,
  Building,
  CreditCard,
} from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    {
      icon: Zap,
      title: "AI Automation & Integration",
      shortDescription: "Process automation solutions",
      description:
        "We help businesses automate repetitive tasks and integrate systems to improve efficiency. Our team specializes in connecting different business tools and creating automated workflows that save time and reduce errors.",
      features: [
        "Business Process Automation",
        "System Integration",
        "Workflow Design",
        "Custom Automation Solutions",
        "API Integrations",
        "Process Optimization",
      ],
      benefits:
        "Streamline your operations and reduce manual work with reliable automation",
      color: "primary",
      connections: [1, 2],
    },
    {
      icon: Globe,
      title: "Web & Software Development",
      shortDescription: "Custom development solutions",
      description:
        "We build websites, web applications, and custom software solutions tailored to your business needs. Our development team creates user-friendly, functional solutions that help your business grow.",
      features: [
        "Website Development",
        "Web Applications",
        "Custom Software Solutions",
        "E-commerce Platforms",
        "Database Management",
        "Mobile-Responsive Design",
      ],
      benefits:
        "Professional websites and software that represent your business well",
      color: "electric",
      connections: [0, 2],
    },
    {
      icon: Database,
      title: "Data Analysis & Management",
      shortDescription: "Business data solutions",
      description:
        "We help organize, analyze, and manage your business data effectively. Our team provides data entry services, creates reports, and helps you understand your business metrics to make better decisions.",
      features: [
        "Data Entry Services",
        "Data Analysis & Reporting",
        "Database Setup & Management",
        "Business Intelligence Reports",
        "Data Cleaning & Organization",
        "Performance Dashboards",
      ],
      benefits:
        "Better understand your business with organized data and clear reports",
      color: "accent",
      connections: [0, 1, 3],
    },
    {
      icon: Stethoscope,
      title: "Medical Billing & Payment Services",
      shortDescription: "Healthcare billing solutions",
      description:
        "We provide medical billing, data entry, and payment posting services for healthcare providers. Our experienced team ensures accurate billing and timely payment processing.",
      features: [
        "Medical Billing Services",
        "Insurance Claims Processing",
        "Payment Posting",
        "Medical Data Entry",
        "Claims Follow-up",
        "Billing Report Generation",
      ],
      benefits:
        "Accurate medical billing and faster payment processing for healthcare providers",
      color: "primary",
      connections: [2, 4],
    },
    {
      icon: Calculator,
      title: "Accounting & Financial Services",
      shortDescription: "Complete financial management",
      description:
        "We offer comprehensive accounting and bookkeeping services including financial management, tax filing, and record-keeping to help businesses maintain accurate financial records.",
      features: [
        "Bookkeeping Services",
        "Financial Record Management",
        "Tax Filing Assistance",
        "Payroll Management",
        "Financial Reporting",
        "Budget Planning Support",
      ],
      benefits:
        "Professional financial management with accurate records and tax compliance",
      color: "electric",
      connections: [3, 5],
    },
    {
      icon: Building,
      title: "Business Registration & Compliance",
      shortDescription: "Government registration services",
      description:
        "We assist with business registration, permits, and government compliance requirements. Our team handles the paperwork and processes for business setup, registration, and closure.",
      features: [
        "Business Name Registration",
        "BIR Registration Services",
        "Business Permit Processing",
        "SSS, PhilHealth, Pag-IBIG Registration",
        "DOLE Registration",
        "Business Closure Assistance",
      ],
      benefits:
        "Hassle-free business registration and compliance with government requirements",
      color: "accent",
      connections: [4],
    },
    {
      icon: FileText,
      title: "Land Title & Documentation Services",
      shortDescription: "Property documentation assistance",
      description:
        "We provide assistance with land title transfers, tax declarations, and property-related documentation. Our team helps navigate the requirements for property transactions and documentation.",
      features: [
        "Land Title Transfer Services",
        "Land Tax Declaration",
        "Property Titling Assistance",
        "Document Preparation",
        "Government Office Coordination",
        "Property Documentation Review",
      ],
      benefits:
        "Professional assistance with property documentation and title transfers",
      color: "primary",
      connections: [5],
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          icon: "text-primary-300",
          border: "border-primary-300/50",
          glow: "shadow-primary-300/20",
          bg: "bg-primary-300/10",
          accent: "primary-300",
        };
      case "electric":
        return {
          icon: "text-electric-400",
          border: "border-electric-400/50",
          glow: "shadow-electric-400/20",
          bg: "bg-electric-400/10",
          accent: "electric-400",
        };
      case "accent":
        return {
          icon: "text-accent-400",
          border: "border-accent-400/50",
          glow: "shadow-accent-400/20",
          bg: "bg-accent-400/10",
          accent: "accent-400",
        };
      default:
        return {
          icon: "text-primary-300",
          border: "border-primary-300/50",
          glow: "shadow-primary-300/20",
          bg: "bg-primary-300/10",
          accent: "primary-300",
        };
    }
  };

  const renderNeuralConnections = (serviceIndex: number) => {
    const service = services[serviceIndex];
    return service.connections.map((targetIndex) => (
      <div
        key={`${serviceIndex}-${targetIndex}`}
        className={`neural-connection absolute ${
          hoveredService === serviceIndex ? "opacity-100" : "opacity-0"
        }`}
        style={{
          top: "50%",
          left: serviceIndex % 3 < targetIndex % 3 ? "100%" : "0%",
          width: "50px",
          transform: "translateY(-50%)",
        }}
      />
    ));
  };

  return (
    <section
      id="services"
      className="section-padding bg-black relative overflow-hidden"
    >
      {/* Advanced Parallax Background */}
      <div className="absolute inset-0">
        {/* Particle Field Background */}
        <div className="absolute inset-0 bg-particle-field opacity-60"></div>

        {/* Floating Parallax Elements */}
        <div
          className="parallax-element floating-particle-1 top-20 left-[10%]"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        />
        <div
          className="parallax-element floating-particle-2 top-40 right-[20%]"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${
              mousePosition.y * 0.015
            }px)`,
          }}
        />
        <div
          className="parallax-element floating-particle-3 bottom-40 left-[30%]"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${
              mousePosition.y * 0.01
            }px)`,
          }}
        />
        <div
          className="parallax-element floating-particle-1 bottom-20 right-[15%]"
          style={{
            transform: `translate(${mousePosition.x * 0.025}px, ${
              mousePosition.y * 0.025
            }px)`,
          }}
        />

        {/* Dynamic Circuit Grid */}
        <div className="absolute inset-0 ai-grid opacity-30"></div>

        {/* Animated Neural Network Lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300/50 to-transparent animate-data-flow"></div>
        <div
          className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-400/50 to-transparent animate-data-flow"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Morphing Background Elements */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-300/5 to-electric-400/5 rounded-full blur-3xl animate-morph"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-electric-400/5 to-accent-400/5 rounded-full blur-3xl animate-morph"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 text-primary-300 mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-primary-300 animate-data-flow"></div>
            <span className="text-sm font-medium tracking-wide px-6 py-3 bg-primary-300/10 rounded-full border border-primary-300/30 font-logo backdrop-blur-sm">
              <Cpu className="inline w-4 h-4 mr-2 animate-neural-pulse" />
              Our Business Solutions
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-primary-300 animate-data-flow"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 ai-heading">
            Complete Business Solutions
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-logo">
            From automation and development to accounting and government
            registration, we provide comprehensive business services that help
            you focus on what matters most. Our experienced team treats your
            business challenges as our own.
          </p>
        </div>

        {/* Advanced Services Grid */}
        <div className="service-grid-container mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const colors = getColorClasses(service.color);

              return (
                <div
                  key={index}
                  className="ai-service-panel group"
                  onClick={() => setSelectedService(index)}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Neural Network Connections */}
                  {renderNeuralConnections(index)}

                  {/* Morphing Background */}
                  <div className="morph-bg"></div>

                  {/* Particle System */}
                  <div className="ai-particles">
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                  </div>

                  {/* Data Flow Lines */}
                  <div className="data-flow-line horizontal"></div>
                  <div className="data-flow-line vertical"></div>

                  {/* Enhanced Icon Container */}
                  <div className="ai-icon-container mb-6 group-hover:scale-110 transition-all duration-500">
                    <IconComponent
                      className={`w-10 h-10 ${colors.icon} group-hover:text-white transition-colors duration-500`}
                    />

                    {/* Rotating Neural Ring */}
                    <div className="absolute inset-0 border border-primary-300/30 rounded-2xl animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Pulsing Inner Core */}
                    <div
                      className={`absolute inset-2 ${colors.bg} rounded-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-neural-pulse`}
                    ></div>
                  </div>

                  {/* Content with Enhanced Typography */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary-300 transition-colors duration-500 font-logo">
                      {service.title}
                    </h3>

                    <p className="text-primary-300/80 text-sm mb-4 font-logo font-medium">
                      {service.shortDescription}
                    </p>

                    <p className="text-gray-300 mb-6 leading-relaxed font-logo">
                      {service.description.substring(0, 120)}...
                    </p>

                    {/* Enhanced Features Preview */}
                    <ul className="space-y-2 mb-6">
                      {service.features
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center space-x-3 group/item"
                          >
                            <div
                              className={`w-1.5 h-1.5 ${colors.bg} rounded-full flex-shrink-0 group-hover/item:animate-pulse`}
                            ></div>
                            <span className="text-sm text-gray-300 font-logo group-hover/item:text-gray-200 transition-colors duration-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      <li className="flex items-center space-x-3 text-xs text-primary-300/60 font-logo">
                        <span>
                          +{service.features.length - 3} more features
                        </span>
                      </li>
                    </ul>

                    {/* Interactive CTA */}
                    <button className="flex items-center space-x-2 text-primary-300 hover:text-white font-medium group/cta transition-all duration-300 font-logo">
                      <span>Learn More</span>
                      <div className="relative">
                        <ChevronRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-primary-300 rounded-full opacity-0 group-hover/cta:opacity-20 group-hover/cta:animate-ping transition-opacity duration-300"></div>
                      </div>
                    </button>
                  </div>

                  {/* Advanced Hover Effects */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Scanning Line Effect */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-data-flow transition-opacity duration-500"></div>

                    {/* Corner Accent Lines */}
                    <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-primary-300/0 group-hover:border-primary-300/60 transition-colors duration-500"></div>
                    <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-primary-300/0 group-hover:border-primary-300/60 transition-colors duration-500"></div>
                    <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-primary-300/0 group-hover:border-primary-300/60 transition-colors duration-500"></div>
                    <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-primary-300/0 group-hover:border-primary-300/60 transition-colors duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced AI Innovation Section */}
        <div className="bg-gradient-to-r from-black via-gray-900/30 to-black rounded-3xl p-12 border border-gray-800 ai-glow relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 neural-bg opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-300/5 via-transparent to-electric-400/5 animate-circuit"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-8 ai-heading">
                Why Choose <span className="text-white">NYX</span>
                <span style={{ color: "#5CE2E7" }}>PRO</span>?
              </h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="ai-icon-container !w-12 !h-12">
                    <Brain className="w-6 h-6 text-primary-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-white font-logo text-lg">
                      AI-Equipped Developer Team
                    </h4>
                    <p className="text-gray-300 font-logo leading-relaxed">
                      Our unified team of 50+ AI-trained developers collaborates
                      seamlessly to deliver intelligent solutions that automate
                      your business processes and accelerate growth.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="ai-icon-container !w-12 !h-12">
                    <Zap className="w-6 h-6 text-electric-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-white font-logo text-lg">
                      Proven Business Efficiency
                    </h4>
                    <p className="text-gray-300 font-logo leading-relaxed">
                      We specialize in applying AI to real business challenges,
                      making operations faster, smarter, and more efficient for
                      companies across multiple industries.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="ai-icon-container !w-12 !h-12">
                    <Shield className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-white font-logo text-lg">
                      Collective Expertise & Trust
                    </h4>
                    <p className="text-gray-300 font-logo leading-relaxed">
                      As a collaborative team, we bring diverse skills and
                      perspectives to every project, ensuring robust solutions
                      backed by collective knowledge and experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="p-8 bg-black/60 rounded-2xl border border-gray-800 hover:border-primary-300/50 transition-all duration-500 group">
                  <div className="flex items-center justify-center mb-4">
                    <Activity className="w-8 h-8 text-primary-300 group-hover:animate-pulse" />
                  </div>
                  <div className="text-4xl font-bold ai-heading mb-2">50+</div>
                  <div className="text-gray-300 text-sm font-logo">
                    AI-Equipped Developers
                  </div>
                </div>
                <div className="p-8 bg-black/60 rounded-2xl border border-gray-800 hover:border-electric-400/50 transition-all duration-500 group">
                  <div className="flex items-center justify-center mb-4">
                    <Network className="w-8 h-8 text-electric-400 group-hover:animate-spin-slow" />
                  </div>
                  <div className="text-4xl font-bold ai-heading mb-2">100+</div>
                  <div className="text-gray-300 text-sm font-logo">
                    Clients Served
                  </div>
                </div>
                <div className="p-8 bg-black/60 rounded-2xl border border-gray-800 hover:border-accent-400/50 transition-all duration-500 group">
                  <div className="flex items-center justify-center mb-4">
                    <BarChart3 className="w-8 h-8 text-accent-400 group-hover:animate-bounce-slow" />
                  </div>
                  <div className="text-4xl font-bold ai-heading mb-2">85%</div>
                  <div className="text-gray-300 text-sm font-logo">
                    Efficiency Improvement
                  </div>
                </div>
                <div className="p-8 bg-black/60 rounded-2xl border border-gray-800 hover:border-primary-300/50 transition-all duration-500 group">
                  <div className="flex items-center justify-center mb-4">
                    <Cpu className="w-8 h-8 text-primary-300 group-hover:animate-glow" />
                  </div>
                  <div className="text-4xl font-bold ai-heading mb-2">300%</div>
                  <div className="text-gray-300 text-sm font-logo">
                    Growth in 2024
                  </div>
                </div>
              </div>

              <a
                href="https://calendly.com/jephmari-nyxpro/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full lg:w-auto group font-logo text-lg px-8 py-4 inline-flex items-center justify-center"
              >
                Schedule Consultation
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Service Detail Modal */}
      {selectedService !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4">
          <div className="ai-modal shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Enhanced Header */}
            <div className="flex items-center justify-between p-8 border-b border-gray-800/50">
              <div className="flex items-center space-x-4">
                <div className="ai-icon-container !w-16 !h-16">
                  {(() => {
                    const IconComponent = services[selectedService].icon;
                    const colors = getColorClasses(
                      services[selectedService].color
                    );
                    return (
                      <IconComponent className={`w-8 h-8 ${colors.icon}`} />
                    );
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-logo">
                    {services[selectedService].title}
                  </h3>
                  <p className="text-primary-300/80 font-logo">
                    {services[selectedService].shortDescription}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-3 hover:bg-gray-800 rounded-xl transition-colors group"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-gray-400 group-hover:text-white" />
              </button>
            </div>

            {/* Enhanced Content */}
            <div className="p-8">
              <p className="text-gray-300 mb-8 leading-relaxed text-lg font-logo">
                {services[selectedService].description}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold mb-6 text-white font-logo flex items-center">
                    <Cpu className="w-5 h-5 mr-3 text-primary-300" />
                    Core Capabilities
                  </h4>
                  <div className="space-y-3">
                    {services[selectedService].features.map(
                      (feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 group"
                        >
                          <div className="w-2 h-2 bg-primary-300 rounded-full flex-shrink-0 group-hover:animate-pulse"></div>
                          <span className="text-gray-300 font-logo group-hover:text-gray-200 transition-colors">
                            {feature}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-primary-300/10 rounded-2xl border border-primary-300/30">
                    <h4 className="font-semibold text-primary-300 mb-3 font-logo flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      Expected Outcomes
                    </h4>
                    <p className="text-gray-300 font-logo leading-relaxed">
                      {services[selectedService].benefits}
                    </p>
                  </div>

                  <div className="p-6 bg-electric-400/10 rounded-2xl border border-electric-400/30">
                    <h4 className="font-semibold text-electric-400 mb-3 font-logo flex items-center">
                      <Activity className="w-5 h-5 mr-2" />
                      Project Timeline
                    </h4>
                    <p className="text-gray-300 font-logo">
                      Typical project completion in 2-6 weeks depending on scope
                      and requirements
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendly.com/jephmari-nyxpro/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 group font-logo inline-flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <button
                  className="btn-secondary flex-1 font-logo"
                  onClick={() => setSelectedService(null)}
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
