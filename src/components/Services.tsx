"use client";

import {
  Users,
  Headphones,
  Code2,
  Target,
  Globe2,
  Settings,
  CheckCircle,
  ArrowRight,
  Heart,
  Zap,
  Shield,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Headphones,
      title: "Customer Support Outsourcing",
      description:
        "Dedicated Filipino professionals providing exceptional customer service with cultural understanding and English proficiency.",
      features: [
        "24/7 Support Coverage",
        "Multi-channel Support",
        "CRM Integration",
        "Quality Assurance",
      ],
    },
    {
      icon: Code2,
      title: "Technical Development",
      description:
        "Expert software engineers and developers from the Philippines delivering high-quality web and mobile applications.",
      features: [
        "Full-stack Development",
        "Mobile App Development",
        "DevOps & Cloud",
        "Quality Testing",
      ],
    },
    {
      icon: Users,
      title: "Virtual Assistant Services",
      description:
        "Skilled virtual assistants to handle administrative tasks, allowing you to focus on core business activities.",
      features: [
        "Administrative Support",
        "Data Entry & Research",
        "Social Media Management",
        "Project Coordination",
      ],
    },
    {
      icon: Target,
      title: "Digital Marketing",
      description:
        "Strategic digital marketing professionals to boost your online presence and drive sustainable growth.",
      features: [
        "SEO & Content Marketing",
        "Social Media Strategy",
        "PPC Management",
        "Analytics & Reporting",
      ],
    },
    {
      icon: Settings,
      title: "Business Process Outsourcing",
      description:
        "Comprehensive BPO solutions tailored to streamline your operations and increase efficiency.",
      features: [
        "Process Optimization",
        "Finance & Accounting",
        "HR Administration",
        "Supply Chain Support",
      ],
    },
    {
      icon: Globe2,
      title: "Remote Team Integration",
      description:
        "Seamlessly integrate Filipino talent into your existing teams with our proven remote work methodologies.",
      features: [
        "Team Onboarding",
        "Communication Tools",
        "Performance Monitoring",
        "Cultural Integration",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary-500/20 rounded-xl rotate-12 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-10 w-2 h-20 bg-gradient-to-b from-primary-400 to-transparent"></div>
        <div className="absolute top-1/3 right-10 w-2 h-16 bg-gradient-to-b from-accent-400 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-primary-400 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary-500"></div>
            <span className="text-sm font-medium tracking-wide px-4 py-2 bg-primary-500/10 rounded-full border border-primary-500/30">
              Our Outsourcing Services
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary-500"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">End-to-End</span>
            <span className="text-white block">Outsourcing Solutions</span>
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Leverage skilled professionals at competitive rates with our
            scalable outsourcing options. Experience top-notch quality from
            experienced Filipino talent while supporting the growing tech
            community in Mindanao.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="card p-8 group hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                {/* Card Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Icon */}
                <div className="relative w-16 h-16 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ai-glow">
                  <IconComponent className="w-8 h-8 text-primary-400 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary-300 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-4 h-4 text-primary-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <button className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 font-medium group/link transition-colors duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 lg:p-12 border border-gray-700 ai-glow relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                linear-gradient(45deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px),
                linear-gradient(-45deg, rgba(244, 63, 94, 0.1) 1px, transparent 1px)
              `,
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 gradient-text">
                Why Choose Nyxpro for Outsourcing?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-white">
                      Filipino Excellence
                    </h4>
                    <p className="text-gray-300">
                      Tap into the renowned focus, discipline, and English
                      proficiency of Filipino professionals who deliver
                      innovative, tailor-made solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-white">
                      Cost-Effective Growth
                    </h4>
                    <p className="text-gray-300">
                      Achieve up to 70% cost savings while accessing top-tier
                      talent that scales with your business needs and
                      requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-white">
                      Local Impact
                    </h4>
                    <p className="text-gray-300">
                      Support the growing tech community in Mindanao while
                      enhancing your corporate social responsibility
                      initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-700">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    70%
                  </div>
                  <div className="text-gray-300 text-sm">Cost Reduction</div>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-700">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    24/7
                  </div>
                  <div className="text-gray-300 text-sm">Support Coverage</div>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-700">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    500+
                  </div>
                  <div className="text-gray-300 text-sm">
                    Projects Delivered
                  </div>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-700">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    98%
                  </div>
                  <div className="text-gray-300 text-sm">
                    Client Satisfaction
                  </div>
                </div>
              </div>

              <button className="btn-primary w-full lg:w-auto group">
                Start Your Outsourcing Journey
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Remote Work Model Highlight */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary-500/10 via-accent-500/10 to-primary-500/10 rounded-2xl border border-primary-500/20">
          <Globe2 className="w-16 h-16 text-primary-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-white">
            Fully Remote Work Model
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We prioritize communication, productivity, and teamwork with the
            right tools and support. Our remote-first approach ensures seamless
            collaboration across time zones while maintaining the highest
            standards of quality and efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
