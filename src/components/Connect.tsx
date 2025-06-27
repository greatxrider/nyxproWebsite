"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Brain,
  Zap,
  Shield,
  Clock,
  MessageSquare,
  User,
  Building,
  Briefcase,
  ChevronDown,
  Facebook,
  Linkedin,
  Activity,
  BarChart3,
  Cpu,
} from "lucide-react";

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const aiServices = [
    "AI Automation Solutions",
    "Healthcare AI Billing",
    "Intelligent Data Management",
    "AI Financial Analytics",
    "Neural Workflow Engine",
    "AI-Driven Web Platforms",
    "AI Software Architecture",
    "Custom AI Consultation",
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "AI Command Center",
      value: "hello@nyxpro.us",
      description: "Neural network-powered support",
    },
    {
      icon: Phone,
      label: "Direct Neural Link",
      value: "+1 (555) AI-NYXPRO",
      description: "24/7 intelligent assistance",
    },
    {
      icon: MapPin,
      label: "AI Innovation Hub",
      value: "Digital Transformation Center",
      description: "Global AI operations base",
    },
  ];

  const aiStats = [
    {
      icon: Activity,
      value: "99.9%",
      label: "Neural Uptime",
      color: "primary",
    },
    {
      icon: BarChart3,
      value: "24/7",
      label: "AI Monitoring",
      color: "electric",
    },
    { icon: Cpu, value: "500+", label: "Active Models", color: "accent" },
    { icon: Brain, value: "< 1ms", label: "Response Time", color: "primary" },
  ];

  const getStatColor = (color: string) => {
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
      id="connect"
      className="section-padding bg-black relative overflow-hidden"
    >
      {/* AI Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 neural-bg opacity-20"></div>
        <div className="absolute inset-0 ai-grid opacity-30"></div>

        {/* Floating AI Particles */}
        <div className="absolute top-20 left-10 w-12 h-12 border border-primary-300/20 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute bottom-32 right-20 w-16 h-16 bg-gradient-to-r from-electric-400/20 to-primary-300/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-10 w-8 h-8 bg-accent-400/30 rounded-xl animate-spin-slow"></div>

        {/* Neural Network Lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300/40 to-transparent animate-data-flow"></div>
        <div
          className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-400/40 to-transparent animate-data-flow"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 text-primary-300 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary-300"></div>
            <span className="text-sm font-medium tracking-wide px-4 py-2 bg-primary-300/10 rounded-full border border-primary-300/30 font-logo">
              <MessageSquare className="inline w-4 h-4 mr-2" />
              Connect with AI Experts
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary-300"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 ai-heading">
            Initialize AI Transformation
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-logo">
            Ready to revolutionize your business with intelligent AI solutions?
            Connect with our neural network experts and begin your journey
            toward unprecedented efficiency and growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="ai-panel">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white font-logo">
                  Start Your AI Journey
                </h3>
                <p className="text-gray-300 font-logo">
                  Tell us about your project and let our AI specialists design
                  the perfect intelligent solution for your needs.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="ai-icon-container mx-auto mb-6 animate-scale-in">
                    <CheckCircle className="w-12 h-12 text-primary-300" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 font-logo">
                    Neural Link Established!
                  </h4>
                  <p className="text-gray-300 font-logo">
                    Your message has been processed by our AI systems. Expect a
                    response within 24 hours from our expert team.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-300 mb-2 font-logo">
                        <User className="inline w-4 h-4 mr-2" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-primary-300 focus:ring-1 focus:ring-primary-300 text-white placeholder-gray-400 transition-all duration-300 font-logo"
                        placeholder="Enter your full name"
                      />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-300/10 to-electric-400/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-300 mb-2 font-logo">
                        <Mail className="inline w-4 h-4 mr-2" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-primary-300 focus:ring-1 focus:ring-primary-300 text-white placeholder-gray-400 transition-all duration-300 font-logo"
                        placeholder="your.email@company.com"
                      />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-300/10 to-electric-400/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-300 mb-2 font-logo">
                        <Building className="inline w-4 h-4 mr-2" />
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-primary-300 focus:ring-1 focus:ring-primary-300 text-white placeholder-gray-400 transition-all duration-300 font-logo"
                        placeholder="Your company name"
                      />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-300/10 to-electric-400/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-300 mb-2 font-logo">
                        <Phone className="inline w-4 h-4 mr-2" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-primary-300 focus:ring-1 focus:ring-primary-300 text-white placeholder-gray-400 transition-all duration-300 font-logo"
                        placeholder="+1 (555) 123-4567"
                      />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-300/10 to-electric-400/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-300 mb-2 font-logo">
                      <Briefcase className="inline w-4 h-4 mr-2" />
                      AI Service Interest
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        title="Select the AI service you are interested in"
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-primary-300 focus:ring-1 focus:ring-primary-300 text-white appearance-none transition-all duration-300 font-logo"
                      >
                        <option value="" className="font-logo">
                          Select an AI service...
                        </option>
                        {aiServices.map((service, index) => (
                          <option
                            key={index}
                            value={service}
                            className="font-logo"
                          >
                            {service}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-300/10 to-electric-400/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-300 mb-2 font-logo">
                      <MessageSquare className="inline w-4 h-4 mr-2" />
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-primary-300 focus:ring-1 focus:ring-primary-300 text-white placeholder-gray-400 resize-none transition-all duration-300 font-logo"
                      placeholder="Describe your AI transformation goals, current challenges, and how our intelligent solutions can help your business..."
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-300/10 to-electric-400/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary group relative overflow-hidden font-logo text-lg py-4"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-3"></div>
                          Processing Neural Data...
                        </>
                      ) : (
                        <>
                          Initialize AI Partnership
                          <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>

                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-300/20 to-electric-400/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information & Stats */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="ai-panel">
              <h3 className="text-2xl font-bold mb-8 text-white font-logo flex items-center">
                <Brain className="mr-3 w-6 h-6 text-primary-300" />
                AI Command Center
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="ai-icon-container !w-12 !h-12 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-primary-300 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1 font-logo group-hover:text-primary-300 transition-colors duration-300">
                          {info.label}
                        </h4>
                        <p className="text-primary-300 font-medium mb-1 font-logo">
                          {info.value}
                        </p>
                        <p className="text-gray-400 text-sm font-logo">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-800">
                <h4 className="font-semibold text-white mb-4 font-logo">
                  Connect on Neural Networks
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/nyxpro2022"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ai-icon-container !w-12 !h-12 hover:scale-110 transition-all duration-300 group"
                    aria-label="Follow Nyxpro AI on Facebook"
                  >
                    <Facebook className="w-5 h-5 text-primary-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jephmari/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ai-icon-container !w-12 !h-12 hover:scale-110 transition-all duration-300 group"
                    aria-label="Connect with Nyxpro AI on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-primary-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* AI System Stats */}
            <div className="ai-panel">
              <h3 className="text-2xl font-bold mb-8 text-white font-logo flex items-center">
                <Activity className="mr-3 w-6 h-6 text-electric-400" />
                Live AI System Status
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {aiStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  const colorClasses = getStatColor(stat.color);

                  return (
                    <div
                      key={index}
                      className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 group ${colorClasses}`}
                    >
                      <div className="flex items-center justify-center mb-3">
                        <IconComponent
                          className={`w-6 h-6 ${
                            colorClasses.split(" ")[0]
                          } group-hover:animate-pulse`}
                        />
                      </div>
                      <div className="text-center">
                        <div
                          className={`text-2xl font-bold mb-1 ${
                            colorClasses.split(" ")[0]
                          } font-logo`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-gray-300 text-sm font-logo">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Real-time Status Indicator */}
              <div className="mt-6 p-4 bg-gradient-to-r from-primary-300/10 to-electric-400/10 rounded-xl border border-primary-300/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary-300 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium font-logo">
                      AI Systems Operational
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm font-logo">
                      Real-time monitoring
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Consultation CTA */}
            <div className="ai-panel">
              <div className="text-center">
                <div className="ai-icon-container mx-auto mb-6">
                  <Zap className="w-8 h-8 text-electric-400" />
                </div>

                <h3 className="text-xl font-bold mb-4 text-white font-logo">
                  Need Immediate AI Consultation?
                </h3>

                <p className="text-gray-300 mb-6 font-logo">
                  Schedule a direct neural link with our AI experts for
                  personalized guidance and strategic planning.
                </p>

                <button className="btn-secondary w-full group font-logo">
                  <Shield className="mr-2 w-4 h-4" />
                  Schedule AI Strategy Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
