"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Brain,
  Mail,
  MapPin,
  Clock,
  Briefcase,
  Star,
  CheckCircle,
  Send,
  Zap,
  Target,
  Award,
} from "lucide-react";

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const jobOpenings = [
    {
      id: "general-support",
      title: "General Support Staff",
      type: "Full-time",
      location: "MEA Building, Benito Labao Street, Iligan City, Philippines",
      department: "Operations",
      posted: "2025-01-15",
      description:
        "Join our dynamic team as a General Support Staff member and be part of NYXPRO's growing AI operations.",
      responsibilities: [
        "Provide administrative support across multiple departments",
        "Assist with client communications and documentation",
        "Support project coordination and team collaboration",
        "Handle data entry and basic operational tasks",
        "Contribute to team meetings and process improvements",
        "Maintain organized filing systems and databases",
      ],
      requirements: [
        "High school diploma or equivalent required",
        "Strong communication skills in English and Filipino",
        "Basic computer literacy and Microsoft Office skills",
        "Excellent organizational and time management abilities",
        "Positive attitude and willingness to learn",
        "Ability to work in a fast-paced, collaborative environment",
      ],
      benefits: [
        "Competitive salary and benefits package",
        "Opportunities for professional growth and development",
        "Exposure to cutting-edge AI technologies",
        "Collaborative and innovative work environment",
        "Health and wellness programs",
        "Flexible work arrangements",
      ],
    },
    {
      id: "ai-automation-intern",
      title: "AI Automation Interns",
      type: "Internship",
      location: "MEA Building, Benito Labao Street, Iligan City, Philippines",
      department: "AI Development",
      posted: "2025-01-15",
      description:
        "Kickstart your AI career with hands-on experience in automation, machine learning, and intelligent system development.",
      responsibilities: [
        "Assist in developing AI automation workflows",
        "Support machine learning model development and testing",
        "Help create and maintain AI documentation",
        "Participate in client project implementations",
        "Learn healthcare AI applications and medical billing automation",
        "Contribute to research and development initiatives",
      ],
      requirements: [
        "Currently pursuing or recently completed degree in Computer Science, Engineering, or related field",
        "Basic understanding of programming languages (Python, JavaScript preferred)",
        "Interest in artificial intelligence and machine learning",
        "Strong analytical and problem-solving skills",
        "Eagerness to learn and adapt to new technologies",
        "Good English communication skills",
      ],
      benefits: [
        "Hands-on experience with cutting-edge AI technologies",
        "Mentorship from experienced AI professionals",
        "Exposure to real-world healthcare AI projects",
        "Certificate of completion and recommendation letter",
        "Potential for full-time employment upon successful completion",
        "Networking opportunities within the AI industry",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* AI Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 neural-bg opacity-10"></div>
        <div className="absolute inset-0 ai-grid opacity-15"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-[10%] w-4 h-4 bg-primary-300/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-[15%] w-6 h-6 border border-electric-400/30 rounded-lg rotate-45 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-[20%] w-3 h-3 bg-accent-400/30 rounded-full animate-bounce-slow"></div>

        {/* Data Flow Lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300/20 to-transparent animate-data-flow"></div>
        <div
          className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-400/20 to-transparent animate-data-flow"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="container-padding py-24">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-primary-300 hover:text-white transition-colors duration-300 mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-logo">Back to Home</span>
            </Link>

            {/* Page Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 text-primary-300 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary-300"></div>
                <span className="text-sm font-medium tracking-wide px-6 py-3 bg-primary-300/10 rounded-full border border-primary-300/30 font-logo backdrop-blur-sm">
                  <Briefcase className="inline w-4 h-4 mr-2" />
                  Career Opportunities
                </span>
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary-300"></div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ai-heading">
                <span className="text-white">Join the</span>
                <br />
                <span className="gradient-text">
                  <span className="text-white">NYX</span>
                  <span style={{ color: "#5CE2E7" }}>PRO</span>
                </span>
                <span className="text-white"> Team</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-logo">
                Shape the future of AI automation and healthcare technology.
                Join our growing team of innovators in Iligan City, Philippines.
              </p>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="text-center group">
                <div className="ai-icon-container mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-primary-300 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-logo">
                  50+ Team Members
                </h3>
                <p className="text-gray-300 font-logo">
                  Growing every quarter in 2025
                </p>
              </div>

              <div className="text-center group">
                <div className="ai-icon-container mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-electric-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-logo">
                  AI-First Culture
                </h3>
                <p className="text-gray-300 font-logo">
                  Leading innovation in automation
                </p>
              </div>

              <div className="text-center group">
                <div className="ai-icon-container mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-accent-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-logo">
                  300% Growth
                </h3>
                <p className="text-gray-300 font-logo">
                  Rapid expansion in 2024
                </p>
              </div>
            </div>

            {/* Job Openings */}
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 font-logo">
                  Current Openings
                </h2>
                <p className="text-gray-300 font-logo">
                  Join us in revolutionizing healthcare through AI
                </p>
              </div>

              {jobOpenings.map((job) => (
                <div key={job.id} className="ai-panel group">
                  <div className="relative">
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-300/5 to-electric-400/5 rounded-2xl"></div>

                    <div className="relative z-10 p-8">
                      {/* Job Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="p-2 bg-primary-300/20 rounded-lg">
                              {job.department === "AI Development" ? (
                                <Brain className="w-6 h-6 text-primary-300" />
                              ) : (
                                <Users className="w-6 h-6 text-electric-400" />
                              )}
                            </div>
                            <span className="px-3 py-1 bg-accent-400/20 text-accent-400 rounded-full text-sm font-medium font-logo">
                              {job.type}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2 font-logo">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-gray-300 text-sm font-logo">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>Iligan City, Philippines</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Briefcase className="w-4 h-4" />
                              <span>{job.department}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>Posted January 15, 2025</span>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() =>
                            setSelectedJob(
                              selectedJob === job.id ? null : job.id
                            )
                          }
                          className="btn-secondary mt-4 lg:mt-0 font-logo group"
                        >
                          {selectedJob === job.id
                            ? "Show Less"
                            : "View Details"}
                          <Zap className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        </button>
                      </div>

                      {/* Job Description */}
                      <p className="text-gray-300 mb-6 font-logo leading-relaxed">
                        {job.description}
                      </p>

                      {/* Expanded Details */}
                      {selectedJob === job.id && (
                        <div className="space-y-8 border-t border-gray-700/50 pt-8">
                          {/* Responsibilities */}
                          <div>
                            <h4 className="text-xl font-bold text-white mb-4 font-logo flex items-center">
                              <Target className="w-5 h-5 mr-2 text-primary-300" />
                              Key Responsibilities
                            </h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map(
                                (responsibility, index) => (
                                  <li
                                    key={index}
                                    className="flex items-start space-x-3 text-gray-300 font-logo"
                                  >
                                    <CheckCircle className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0" />
                                    <span>{responsibility}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>

                          {/* Requirements */}
                          <div>
                            <h4 className="text-xl font-bold text-white mb-4 font-logo flex items-center">
                              <Star className="w-5 h-5 mr-2 text-electric-400" />
                              Requirements
                            </h4>
                            <ul className="space-y-2">
                              {job.requirements.map((requirement, index) => (
                                <li
                                  key={index}
                                  className="flex items-start space-x-3 text-gray-300 font-logo"
                                >
                                  <CheckCircle className="w-5 h-5 text-electric-400 mt-0.5 flex-shrink-0" />
                                  <span>{requirement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Benefits */}
                          <div>
                            <h4 className="text-xl font-bold text-white mb-4 font-logo flex items-center">
                              <Award className="w-5 h-5 mr-2 text-accent-400" />
                              What We Offer
                            </h4>
                            <ul className="space-y-2">
                              {job.benefits.map((benefit, index) => (
                                <li
                                  key={index}
                                  className="flex items-start space-x-3 text-gray-300 font-logo"
                                >
                                  <CheckCircle className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary-300/30"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-electric-400/30"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-electric-400/30"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary-300/30"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Application Section */}
            <div className="mt-20">
              <div className="ai-panel max-w-4xl mx-auto">
                <div className="relative">
                  {/* Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-300/10 to-electric-400/10 rounded-2xl"></div>

                  <div className="relative z-10 py-12 px-8 text-center">
                    <div className="ai-icon-container mx-auto mb-6">
                      <Send className="w-12 h-12 text-primary-300" />
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-6 font-logo">
                      Ready to Apply?
                    </h3>

                    <p className="text-gray-300 mb-8 font-logo text-lg leading-relaxed max-w-2xl mx-auto">
                      Send your resume and cover letter to our HR team. We're
                      excited to learn about your experience and how you can
                      contribute to NYXPRO's mission.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center justify-center space-x-2 text-xl">
                        <Mail className="w-6 h-6 text-primary-300" />
                        <a
                          href="mailto:hr@nyxpro.com"
                          className="text-white hover:text-primary-300 transition-colors duration-300 font-logo font-semibold"
                        >
                          hr@nyxpro.com
                        </a>
                      </div>
                      <p className="text-sm text-gray-400 font-logo">
                        Subject: [Position Title] - [Your Name]
                      </p>
                    </div>

                    <a
                      href="mailto:hr@nyxpro.com?subject=Job Application - [Position Title] - [Your Name]"
                      className="btn-primary group font-logo text-lg px-8 py-4 inline-flex items-center"
                    >
                      Send Application
                      <Send className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary-300/50"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-electric-400/50"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-electric-400/50"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary-300/50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
