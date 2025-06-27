"use client";

import Image from "next/image";
import {
  Award,
  Users,
  Heart,
  Star,
  Globe,
  Zap,
  Target,
  Trophy,
} from "lucide-react";

const About = () => {
  const founders = [
    {
      name: "Jeph Mari",
      role: "Co-Founder & CEO",
      image: "/images/jephMari.jpg",
      bio: "Visionary leader driving Nyxpro's mission to connect global businesses with exceptional Filipino talent for scalable growth.",
      expertise: [
        "Strategic Planning",
        "Business Development",
        "Outsourcing Strategy",
        "Client Relations",
      ],
    },
    {
      name: "Jeph Paul",
      role: "Co-Founder & CTO",
      image: "/images/jephPaul.jpg",
      bio: "Technical expert specializing in building robust systems and processes that enable seamless remote collaboration.",
      expertise: [
        "Technical Leadership",
        "Remote Team Management",
        "System Architecture",
        "Process Optimization",
      ],
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We deliver exceptional quality through our carefully vetted Filipino professionals who exceed client expectations.",
    },
    {
      icon: Users,
      title: "Partnership",
      description:
        "We build lasting relationships with clients and talent, creating a collaborative ecosystem for mutual success.",
    },
    {
      icon: Heart,
      title: "Cultural Bridge",
      description:
        "We connect global businesses with Filipino talent, fostering understanding and creating meaningful opportunities.",
    },
    {
      icon: Star,
      title: "Innovation",
      description:
        "We continuously evolve our outsourcing solutions to meet the changing needs of modern businesses.",
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-40 h-40 border border-accent-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-28 h-28 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-xl rotate-45 animate-bounce"></div>
        <div className="absolute top-20 left-1/3 w-3 h-24 bg-gradient-to-b from-accent-400 to-transparent"></div>
        <div className="absolute bottom-40 right-1/4 w-2 h-20 bg-gradient-to-b from-primary-400 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-primary-400 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary-500"></div>
            <span className="text-sm font-medium tracking-wide px-4 py-2 bg-primary-500/10 rounded-full border border-primary-500/30">
              About Nyxpro
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary-500"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Dedicated Team</span>
            <span className="text-white block">Empowering Business Growth</span>
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At Nyxpro Business Solutions, Inc., we specialize in providing
            outsourced services that help your business grow faster, lower
            costs, and tap into top-tier talent from the Philippines.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              Our Mission
            </h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                <strong className="text-primary-400">
                  At Nyxpro Business Solutions, Inc.,
                </strong>{" "}
                we specialize in providing outsourced services that help your
                business grow faster, lower costs, and tap into top-tier talent
                from the Philippines.
              </p>
              <p>
                By tapping into the renowned focus and discipline of Filipino
                talent, we secure top professionals who deliver innovative,
                tailor-made solutions to propel your business forward. Our
                approach combines cultural understanding with technical
                excellence to create lasting partnerships.
              </p>
              <p>
                We believe in empowering businesses to operate efficiently at
                greatly lower costs while supporting the growing tech community
                in Mindanao and enhancing corporate social responsibility
                initiatives.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-700 ai-glow">
                <div className="flex items-center space-x-3 mb-2">
                  <Globe className="w-5 h-5 text-primary-400" />
                  <span className="text-2xl font-bold gradient-text">70%</span>
                </div>
                <p className="text-gray-300 text-sm">Average Cost Savings</p>
              </div>
              <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-700 ai-glow">
                <div className="flex items-center space-x-3 mb-2">
                  <Trophy className="w-5 h-5 text-accent-400" />
                  <span className="text-2xl font-bold gradient-text">500+</span>
                </div>
                <p className="text-gray-300 text-sm">Successful Projects</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 ai-glow">
              <Image
                src="/images/nyxproLogo.jpg"
                alt="Nyxpro Business Solutions - Outsourcing Excellence"
                width={400}
                height={300}
                className="rounded-2xl shadow-lg"
              />
              {/* Overlay Effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 via-transparent to-accent-500/20 rounded-3xl"></div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
                Philippine Excellence
              </div>
            </div>
          </div>
        </div>

        {/* Founders Section */}
        <div className="mb-20" id="team">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-white">
            Meet Our <span className="gradient-text">Leadership Team</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="card p-8 text-center group hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 mx-auto relative">
                    <Image
                      src={founder.image}
                      alt={`${founder.name}, ${founder.role} of Nyxpro Business Solutions`}
                      fill
                      className="rounded-full object-cover border-4 border-primary-500/30 group-hover:border-primary-400/50 transition-colors duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center ai-glow">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h4 className="text-xl font-bold mb-2 text-white group-hover:text-primary-300 transition-colors duration-300">
                  {founder.name}
                </h4>

                <p className="text-primary-400 font-medium mb-4">
                  {founder.role}
                </p>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {founder.bio}
                </p>

                <div className="space-y-2">
                  <h5 className="font-semibold text-white text-sm">
                    Expertise:
                  </h5>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {founder.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary-500/20 border border-primary-500/30 text-primary-300 text-xs font-medium rounded-full hover:bg-primary-500/30 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-white">
            Our <span className="gradient-text">Core Values</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 ai-glow">
                    <IconComponent className="w-8 h-8 text-primary-400 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h4 className="text-lg font-bold mb-3 text-white group-hover:text-primary-300 transition-colors duration-300">
                    {value.title}
                  </h4>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Value Propositions */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 lg:p-12 border border-gray-700 ai-glow relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(244, 63, 94, 0.1) 0%, transparent 50%)
              `,
              }}
            ></div>
          </div>

          <div className="relative z-10 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-8 gradient-text">
              Our Value Proposition
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700">
                <Target className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold mb-2 text-white">
                  Cost-Effective
                </h4>
                <p className="text-gray-300 text-sm">
                  Leverage skilled professionals at competitive rates with up to
                  70% cost savings.
                </p>
              </div>

              <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700">
                <Zap className="w-12 h-12 text-accent-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold mb-2 text-white">
                  Scalable Solutions
                </h4>
                <p className="text-gray-300 text-sm">
                  Flexible outsourcing options that expand with your business
                  growth.
                </p>
              </div>

              <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700">
                <Trophy className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold mb-2 text-white">
                  Quality-Driven
                </h4>
                <p className="text-gray-300 text-sm">
                  Experienced Filipino professionals ensure top-notch quality
                  and results.
                </p>
              </div>

              <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700">
                <Globe className="w-12 h-12 text-accent-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold mb-2 text-white">
                  Local Impact
                </h4>
                <p className="text-gray-300 text-sm">
                  Support the growing tech community in Mindanao and enhance
                  CSR.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
