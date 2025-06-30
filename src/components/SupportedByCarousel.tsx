import React from 'react';
import { motion } from 'framer-motion';

const SupportedByCarousel: React.FC = () => {
  const supporters = [
    {
      name: "Ministry of Education",
      logo: "/nus.png?cb=1"
    },
    {
      name: "National University of Singapore",
      logo: "/nus-soc.png?cb=1"
    },
    {
      name: "NUS Enterprise", 
      logo: "/nus-enterprise.png?cb=1"
    },
    {
      name: "Block71",
      logo: "/block71.png?cb=1"
    },
    {
      name: "NVIDIA Inception",
      logo: "/nvidia-inception.png?cb=1"
    },
    {
      name: "MongoDB",
      logo: "/mongodb.png?cb=1"
    },
    {
      name: "Google Cloud",
      logo: "/google.png?cb=1"
    },
    {
      name: "Social Impact Catalyst",
      logo: "/social-impact-catalyst.png?cb=1"
    }
  ];

  // Duplicate the supporters array for seamless infinite scroll
  const duplicatedSupporters = [...supporters, ...supporters];

  return (
    <div className="w-full py-2 overflow-hidden">
      <div className="relative">
        {/* Moving carousel container */}
        <motion.div
          className="flex items-center"
          animate={{
            x: [0, '-50%']
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: "linear",
            },
          }}
          style={{ 
            width: 'fit-content',
            gap: '4rem'
          }}
        >
          {duplicatedSupporters.map((supporter, index) => (
            <div
              key={`${supporter.name}-${index}`}
              className="flex-shrink-0"
            >
              <img
                src={supporter.logo}
                alt={supporter.name}
                className="h-12 lg:h-14 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </motion.div>

        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default SupportedByCarousel;
