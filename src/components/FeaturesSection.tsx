import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Sparkles, ArrowRight } from "lucide-react";

const FeaturesSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

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

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 12,
        duration: 0.5,
      },
    },
  };

  const features = [
    {
      number: "1",
      title: "Upload Essays",
      description: "Upload handwritten or digital essays with 99% OCR accuracy.",
      mockup: "/lenordemo1-2.mp4",
      isVideo: true,
      gradient: "from-indigo-500 to-purple-600",
      bgGradient: "from-indigo-50 to-purple-50",
      numberBg: "bg-gradient-to-r from-indigo-500 to-purple-600"
    },
    {
      number: "2", 
      title: "AI Analysis",
      description: "Advanced AI evaluates content, structure, and learns your grading style.",
      mockup: "/lenordemo2.mp4", 
      isVideo: true,
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      numberBg: "bg-gradient-to-r from-blue-500 to-cyan-600"
    },
    {
      number: "3",
      title: "Instant Feedback",
      description: "Get detailed feedback with suggestions and personalized comments.",
      mockup: "/lenordemo3-3.mp4",
      isVideo: true,
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-50 to-green-50",
      numberBg: "bg-gradient-to-r from-emerald-500 to-green-600"
    },
    {
      number: "4",
      title: "Track Progress",
      description: "Monitor student development with analytics and insights.",
      mockup: "/paper-texture2.jpg",
      isVideo: false,
      gradient: "from-orange-500 to-amber-600",
      bgGradient: "from-orange-50 to-amber-50",
      numberBg: "bg-gradient-to-r from-orange-500 to-amber-600"
    },
    {
      number: "5",
      title: "Export & Share",
      description: "Download reports and share feedback with students and parents.",
      mockup: "/plastic-texture.jpg",
      isVideo: false,
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50",
      numberBg: "bg-gradient-to-r from-pink-500 to-rose-600"
    }
  ];

  return (
    <section 
      ref={ref} 
      className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-neural-grid opacity-[0.015]" />
      
      {/* Enhanced hover gradient overlay */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #e0e7ff, #c7d2fe, #a5b4fc, #ddd6fe, #c4b5fd, #e0e7ff)',
        }}
        animate={{ opacity: isHovered ? 0.25 : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Compact Header */}
          <motion.div variants={cardVariants} className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-tech-purple-100 to-blue-100 border border-tech-purple-200 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-tech-purple-600" />
              <span className="text-xs font-semibold text-tech-purple-700">How It Works</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Get Better{" "}
              <span className="bg-gradient-to-r from-tech-purple-600 to-blue-600 bg-clip-text text-transparent">
                Results
              </span>
              , Without Increasing Headcount
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your grading workflow with AI in just 5 simple steps.
            </p>
          </motion.div>

          {/* Compact Features Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`relative group rounded-xl bg-gradient-to-br ${feature.bgGradient} border border-gray-200/50 p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                {/* Hover Glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative space-y-3">
                  {/* Number Badge */}
                  <div className={`${feature.numberBg} text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shadow-sm group-hover:scale-105 transition-transform duration-200`}>
                    {feature.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Mini Mockup */}
                  <div className="relative bg-white rounded-lg p-2 shadow-sm border border-gray-100">
                    {feature.isVideo ? (
                      <video 
                        className="w-full h-24 object-cover rounded"
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                      >
                        <source src={feature.mockup} type="video/mp4" />
                      </video>
                    ) : (
                      <div className="w-full h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center">
                        <div className="text-center space-y-1">
                          <div className={`w-8 h-8 ${feature.numberBg} rounded-lg mx-auto flex items-center justify-center`}>
                            <div className="w-4 h-4 bg-white rounded" />
                          </div>
                          <div className="space-y-1">
                            <div className="w-16 h-1.5 bg-gray-300 rounded mx-auto" />
                            <div className="w-12 h-1 bg-gray-200 rounded mx-auto" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call-to-Action */}
          <motion.div variants={cardVariants} className="text-center">
            <motion.button
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-tech-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-tech-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              See It In Action
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
