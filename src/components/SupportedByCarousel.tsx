import React from "react";
import { motion } from "framer-motion";

const SupportedByCarousel: React.FC = () => {
  // Logo data with all partners
  const logos = [
    { src: "/google.png", alt: "Google for Startups" },
    { src: "/nvidia-inception.png", alt: "NVIDIA Inception Program" },
    { src: "/mongodb.png", alt: "MongoDB for Startups" },
    { src: "/nus.png", alt: "NUS Enterprise" },
    { src: "/block71.png", alt: "BLOCK71 Singapore" },
    { src: "/hangar.png", alt: "The HANGAR by NUS Enterprise" },
    { src: "/nus-soc.png", alt: "NUS School of Computing" },
    { src: "/lianhua-primary.png", alt: "Lianhua Primary School" },
    { src: "/nus-enterprise.png", alt: "NUS Enterprise" },
    { src: "/social-impact-catalyst.png", alt: "Social Impact Catalyst" },
    { src: "/nhouse.png", alt: "N.House" },
  ];

  return (
    <section className="w-full bg-white border-t border-b border-gray-200 py-12 overflow-hidden">
      <div className="mb-8">
        <p className="text-center text-lg text-gray-700 font-semibold">
          Supported by global tech leaders and academic partners
        </p>
      </div>
      
      {/* Infinite Scrolling Carousel */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-12 will-change-transform"
          animate={{
            x: [0, -140 * logos.length * 2] // Move through all logos twice (adjusted for larger logos)
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            },
          }}
          style={{ width: "400%" }} // Wide enough for seamless loop
        >
          {/* First set of logos */}
          <div className="flex items-center gap-12 flex-shrink-0">
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center flex-shrink-0 px-6 w-32 h-20"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-16 max-w-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
          </div>
          
          {/* Second set for seamless loop */}
          <div className="flex items-center gap-12 flex-shrink-0">
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center flex-shrink-0 px-6 w-32 h-20"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-16 max-w-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
          </div>
          
          {/* Third set for extra smoothness */}
          <div className="flex items-center gap-12 flex-shrink-0">
            {logos.map((logo, index) => (
              <div
                key={`third-${index}`}
                className="flex items-center justify-center flex-shrink-0 px-6 w-32 h-20"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-16 max-w-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
          </div>
          
          {/* Fourth set for extra smoothness */}
          <div className="flex items-center gap-12 flex-shrink-0">
            {logos.map((logo, index) => (
              <div
                key={`fourth-${index}`}
                className="flex items-center justify-center flex-shrink-0 px-6 w-32 h-20"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-16 max-w-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Subtle fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default SupportedByCarousel;
