import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award } from 'lucide-react';

const SupportedByCarousel: React.FC = () => {
  const supporters = [
    {
      name: "Ministry of Education",
      logo: "/nus.png", 
      description: "Co-designed with MOE educators"
    },
    {
      name: "National University of Singapore",
      logo: "/nus-soc.png",
      description: "Research partnership"
    },
    {
      name: "NUS Enterprise", 
      logo: "/nus-enterprise.png",
      description: "Startup incubation support"
    },
    {
      name: "Block71",
      logo: "/block71.png",
      description: "Innovation ecosystem"
    },
    {
      name: "NVIDIA Inception",
      logo: "/nvidia-inception.png", 
      description: "AI technology partner"
    },
    {
      name: "MongoDB",
      logo: "/mongodb.png",
      description: "Database infrastructure"
    },
    {
      name: "Google Cloud",
      logo: "/google.png",
      description: "Cloud computing platform"
    },
    {
      name: "Social Impact Catalyst",
      logo: "/social-impact-catalyst.png",
      description: "Mission-driven support"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <div className="badge-success">
              <Award className="w-4 h-4" />
              Trusted & Supported By
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Backed by Leading <span className="text-gradient-primary">Institutions</span>
            </h3>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              Co-developed with educational institutions and supported by top-tier technology partners across Singapore and beyond.
            </p>
          </motion.div>

          {/* Logos Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
          >
            {supporters.map((supporter, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-6 rounded-xl bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col items-center space-y-3">
                  {/* Logo */}
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img
                      src={supporter.logo}
                      alt={supporter.name}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  
                  {/* Name & Description */}
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-indigo-600 transition-colors">
                      {supporter.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {supporter.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-8 pt-8"
          >
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>SOC2 Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>PDPA Certified</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Enterprise Security</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportedByCarousel;
