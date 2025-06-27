"use client";

import {
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  Users,
} from "lucide-react";

const Connect = () => {
  return (
    <section
      id="connect"
      className="section-padding bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-36 h-36 border border-primary-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-xl rotate-12 animate-bounce"></div>
        <div className="absolute top-1/2 right-10 w-3 h-28 bg-gradient-to-b from-accent-400 to-transparent"></div>
        <div className="absolute bottom-1/3 left-10 w-2 h-24 bg-gradient-to-b from-primary-400 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-primary-400 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary-500"></div>
            <span className="text-sm font-medium tracking-wide px-4 py-2 bg-primary-500/10 rounded-full border border-primary-500/30">
              Connect With Nyxpro
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary-500"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Scale Your Business</span>
            <span className="text-white block">with Filipino Excellence?</span>
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Connect with us today to discover how Nyxpro can help you achieve
            your outsourcing goals. Let's discuss your business needs and create
            a tailored solution that drives growth and reduces costs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info & Social */}
          <div className="space-y-8">
            {/* Social Media Section */}
            <div className="card p-8 relative overflow-hidden">
              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Follow Our Journey
                </h3>

                <p className="text-gray-300 mb-8 leading-relaxed">
                  Stay connected with Nyxpro and join our community of
                  successful businesses leveraging Filipino talent. Get
                  insights, updates, and success stories from our outsourcing
                  partnership network.
                </p>

                {/* Social Media Links */}
                <div className="space-y-4">
                  <a
                    href="https://www.facebook.com/nyxpro2022"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-xl hover:border-blue-400/50 transition-all duration-300 group ai-glow"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Facebook className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        Follow us on Facebook
                      </h4>
                      <p className="text-sm text-gray-300">
                        Join our community and get the latest updates on
                        outsourcing trends
                      </p>
                    </div>
                    <div className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Send className="w-5 h-5" />
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/jephmari/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-700/10 to-blue-800/10 border border-blue-600/30 rounded-xl hover:border-blue-500/50 transition-all duration-300 group ai-glow"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        Connect on LinkedIn
                      </h4>
                      <p className="text-sm text-gray-300">
                        Professional insights and business outsourcing expertise
                      </p>
                    </div>
                    <div className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Send className="w-5 h-5" />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="card p-8 relative overflow-hidden">
              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-primary-500/5"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Get In Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center ai-glow">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email Us</h4>
                      <p className="text-gray-300">contact@nyxpro.com</p>
                      <p className="text-xs text-gray-400">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg flex items-center justify-center ai-glow">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Call Us</h4>
                      <p className="text-gray-300">+63 (920) 123-4567</p>
                      <p className="text-xs text-gray-400">
                        Mon-Fri, 8AM-6PM (Philippine Time)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-accent-400 rounded-lg flex items-center justify-center ai-glow">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Location</h4>
                      <p className="text-gray-300">Mindanao, Philippines</p>
                      <p className="text-xs text-gray-400">
                        Serving clients worldwide
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-700">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Clock className="w-4 h-4 text-primary-400" />
                      <span className="text-lg font-bold gradient-text">
                        24/7
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">Response Time</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Users className="w-4 h-4 text-accent-400" />
                      <span className="text-lg font-bold gradient-text">
                        98%
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">Client Satisfaction</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <MessageCircle className="w-4 h-4 text-primary-400" />
                      <span className="text-lg font-bold gradient-text">
                        500+
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">Projects Delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="card p-8 relative overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Start Your Outsourcing Journey
              </h3>

              <p className="text-gray-300 mb-8">
                Tell us about your business needs and let's explore how our
                Filipino talent can help you achieve your goals.
              </p>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-800/50 text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-800/50 text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-800/50 text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="john@company.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-800/50 text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Your Company Inc."
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-800/50 text-white transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="customer-support">Customer Support</option>
                    <option value="technical-development">
                      Technical Development
                    </option>
                    <option value="virtual-assistant">Virtual Assistant</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="bpo">Business Process Outsourcing</option>
                    <option value="remote-team">Remote Team Integration</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-800/50 text-white placeholder-gray-400 transition-all duration-300 resize-none"
                    placeholder="Tell us about your outsourcing needs, team size requirements, timeline, and any specific skills you're looking for..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary group">
                  Start Your Outsourcing Journey
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-gray-400 text-center">
                  By submitting this form, you agree to our privacy policy.
                  We'll respond within 24 hours with a customized outsourcing
                  proposal.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary-500/10 via-accent-500/10 to-primary-500/10 rounded-2xl border border-primary-500/20">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Ready to Reduce Costs by 70%?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join hundreds of successful businesses that have transformed their
            operations with Nyxpro's Filipino talent. Let's discuss your
            outsourcing needs today.
          </p>
          <button className="btn-primary mx-auto">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Connect;
