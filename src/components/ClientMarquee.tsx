"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Star, Award, TrendingUp } from "lucide-react";

const ClientMarquee = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslateX, setCurrentTranslateX] = useState(0);
  const [persistentTranslateX, setPersistentTranslateX] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [isDecelerating, setIsDecelerating] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const lastMoveTime = useRef<number>(Date.now());
  const lastPosition = useRef<number>(0);
  const animationFrame = useRef<number | null>(null);
  const clients = [
    {
      name: "The Wellness Center",
      logo: "/clients/thewellnesscenter.png",
      alt: "The Wellness Center - Healthcare Partner",
    },
    {
      name: "Alliance Medical Partners",
      logo: "/clients/alliancemedicalpartners.jpg",
      alt: "Alliance Medical Partners - Medical Services",
    },
    {
      name: "Healthcare Solutions",
      logo: "/clients/305480157_496408075820242_715287000281272617_n.jpg",
      alt: "Healthcare Solutions Partner",
    },
    {
      name: "Medical Practice Group",
      logo: "/clients/305978704_453491306798221_5783195351828510705_n.jpg",
      alt: "Medical Practice Group Client",
    },
    {
      name: "Healthcare Innovation",
      logo: "/clients/CD68DF04-D8B7-44A9-AD93-7492393E5444.avif",
      alt: "Healthcare Innovation Partner",
    },
  ];

  // Duplicate the clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  // Physics-based deceleration
  const startDeceleration = (initialVelocity: number) => {
    setIsDecelerating(true);
    let currentVel = initialVelocity;
    const friction = 0.92; // Friction coefficient (lower = more friction)
    const minVelocity = 0.1; // Stop when velocity is very small

    const decelerate = () => {
      currentVel *= friction;

      if (Math.abs(currentVel) < minVelocity) {
        setIsDecelerating(false);
        if (animationFrame.current) {
          cancelAnimationFrame(animationFrame.current);
        }
        return;
      }

      setPersistentTranslateX((prev) => prev + currentVel);
      animationFrame.current = requestAnimationFrame(decelerate);
    };

    animationFrame.current = requestAnimationFrame(decelerate);
  };

  // Drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    // Cancel any ongoing deceleration
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
    setIsDecelerating(false);
    setIsDragging(true);
    setStartX(e.pageX);
    lastMoveTime.current = Date.now();
    lastPosition.current = e.pageX;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setPersistentTranslateX((prev) => prev + currentTranslateX);
      setCurrentTranslateX(0);

      // Start momentum-based deceleration
      if (Math.abs(velocity) > 0.5) {
        startDeceleration(velocity * 0.5);
      }
    }
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setPersistentTranslateX((prev) => prev + currentTranslateX);
      setCurrentTranslateX(0);

      // Start momentum-based deceleration
      if (Math.abs(velocity) > 0.5) {
        startDeceleration(velocity * 0.5);
      }
    }
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 0.8; // Increased sensitivity for smoother feel
    setCurrentTranslateX(walk);

    // Calculate velocity for momentum
    const now = Date.now();
    const timeDelta = now - lastMoveTime.current;
    const positionDelta = x - lastPosition.current;

    if (timeDelta > 0) {
      const currentVelocity = (positionDelta / timeDelta) * 16; // Scale for 60fps
      setVelocity(currentVelocity);
    }

    lastMoveTime.current = now;
    lastPosition.current = x;
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    // Cancel any ongoing deceleration
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
    setIsDecelerating(false);
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    lastMoveTime.current = Date.now();
    lastPosition.current = e.touches[0].pageX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 0.8;
    setCurrentTranslateX(walk);

    // Calculate velocity for momentum
    const now = Date.now();
    const timeDelta = now - lastMoveTime.current;
    const positionDelta = x - lastPosition.current;

    if (timeDelta > 0) {
      const currentVelocity = (positionDelta / timeDelta) * 16;
      setVelocity(currentVelocity);
    }

    lastMoveTime.current = now;
    lastPosition.current = x;
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      setPersistentTranslateX((prev) => prev + currentTranslateX);
      setCurrentTranslateX(0);

      // Start momentum-based deceleration
      if (Math.abs(velocity) > 0.5) {
        startDeceleration(velocity * 0.5);
      }
    }
    setIsDragging(false);
  };

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-black to-gray-900/50 relative overflow-hidden">
      {/* AI Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 neural-bg opacity-10"></div>
        <div className="absolute inset-0 ai-grid opacity-15"></div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-[20%] w-4 h-4 bg-primary-300/20 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-[25%] w-6 h-6 border border-electric-400/30 rounded-lg rotate-45 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-[15%] w-3 h-3 bg-accent-400/30 rounded-full animate-bounce-slow"></div>

        {/* Data Flow Lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300/20 to-transparent animate-data-flow"></div>
        <div
          className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-400/20 to-transparent animate-data-flow"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-primary-300 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary-300"></div>
            <span className="text-sm font-medium tracking-wide px-6 py-3 bg-primary-300/10 rounded-full border border-primary-300/30 font-logo backdrop-blur-sm">
              <Award className="inline w-4 h-4 mr-2" />
              Trusted Partners
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary-300"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ai-heading">
            <span className="text-white">Trusted by Leading</span>
            <br />
            <span className="gradient-text">Healthcare Organizations</span>
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-logo">
            We're proud to partner with forward-thinking healthcare
            organizations who trust
            <span className="text-white font-semibold"> NYX</span>
            <span style={{ color: "#5CE2E7" }} className="font-semibold">
              PRO
            </span>{" "}
            to transform their operations through AI-powered solutions.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="ai-icon-container mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Star className="w-8 h-8 text-primary-300 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-logo">
              Proven Results
            </h3>
            <p className="text-gray-300 font-logo">
              Delivering measurable improvements in operational efficiency
            </p>
          </div>

          <div className="text-center group">
            <div className="ai-icon-container mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-8 h-8 text-electric-400 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-logo">
              Industry Recognition
            </h3>
            <p className="text-gray-300 font-logo">
              Recognized leader in healthcare AI automation
            </p>
          </div>

          <div className="text-center group">
            <div className="ai-icon-container mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-8 h-8 text-accent-400 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-logo">
              Growing Network
            </h3>
            <p className="text-gray-300 font-logo">
              Expanding partnerships across the healthcare sector
            </p>
          </div>
        </div>

        {/* Logo Marquee */}
        <div className="relative">
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div className="overflow-hidden py-12">
            <div
              ref={marqueeRef}
              className={`flex space-x-16 items-center cursor-grab select-none ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              } ${!isDragging && !isDecelerating ? "animate-marquee" : ""}`}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                transform: `translateX(${
                  persistentTranslateX + currentTranslateX
                }px)`,
                animationPlayState:
                  isDragging || isDecelerating ? "paused" : "running",
                transition: !isDragging && !isDecelerating ? "none" : "none",
                userSelect: "none",
                WebkitUserSelect: "none",
                MozUserSelect: "none",
                msUserSelect: "none",
              }}
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 group"
                  style={{ pointerEvents: isDragging ? "none" : "auto" }}
                >
                  <div className="relative w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28">
                    <Image
                      src={client.logo}
                      alt={client.alt}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out opacity-70 group-hover:opacity-100"
                      sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                      draggable={false}
                    />

                    {/* Hover overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-300/5 via-transparent to-electric-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>

                    {/* Subtle border on hover */}
                    <div className="absolute inset-0 border border-transparent group-hover:border-primary-300/30 rounded-lg transition-colors duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="ai-panel max-w-4xl mx-auto">
            <div className="relative">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-300/5 to-electric-400/5 rounded-2xl"></div>

              <div className="relative z-10 py-12 px-8">
                <h3 className="text-2xl font-bold text-white mb-6 font-logo">
                  Ready to Join Our Network of Success Stories?
                </h3>
                <p className="text-gray-300 mb-8 font-logo text-lg leading-relaxed">
                  Discover how NYXPRO's AI-powered solutions can transform your
                  healthcare organization's efficiency, reduce costs, and
                  improve patient outcomes.
                </p>
                <button className="btn-primary group font-logo text-lg px-8 py-4">
                  Start Your Transformation
                  <Star className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary-300/30"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-electric-400/30"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-electric-400/30"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary-300/30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for smooth infinite scroll and drag */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover:not(.cursor-grabbing) {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 20s;
          }
        }

        /* Enhance drag experience */
        .cursor-grab {
          cursor: grab;
        }

        .cursor-grabbing {
          cursor: grabbing !important;
        }

        /* Smooth scroll behavior */
        .marquee-container {
          scroll-behavior: smooth;
        }

        /* Disable text selection during drag */
        .select-none {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}</style>
    </section>
  );
};

export default ClientMarquee;
