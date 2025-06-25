import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Clock, Users, Award, Shield, Zap, Brain } from "lucide-react";

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
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning analyzes essay structure, content quality, and writing style with teacher-level accuracy.",
      gradient: "from-indigo-500 to-purple-600",
      bgGradient: "from-indigo-50 to-purple-50"
    },
    {
      icon: Clock,
      title: "Lightning Fast Results",
      description: "Get comprehensive feedback in seconds, not hours. Save 6-7 hours per week on grading tasks.",
      gradient: "from-blue-500 to-cyan-600", 
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: Users,
      title: "Personalized Feedback",
      description: "AI learns your grading style and provides consistent, personalized comments for each student.",
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-50 to-green-50"
    },
    {
      icon: Award,
      title: "Rubric Alignment",
      description: "Perfectly aligned with your curriculum standards and custom rubrics for accurate assessment.",
      gradient: "from-orange-500 to-amber-600",
      bgGradient: "from-orange-50 to-amber-50"
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "SOC2 certified platform with enterprise-grade security and complete data privacy protection.",
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50"
    },
    {
      icon: Zap,
      title: "Easy Integration",
      description: "Works with existing LMS platforms and supports both handwritten and digital essay submissions.",
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50"
    }
  ];

  return (
    <section 
      id="features"
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
          {/* Header */}
          <motion.div variants={cardVariants} className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-tech-purple-100 to-blue-100 border border-tech-purple-200 rounded-full">
              <CheckCircle className="w-3.5 h-3.5 text-tech-purple-600" />
              <span className="text-xs font-semibold text-tech-purple-700">Platform Features</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-tech-purple-600 to-blue-600 bg-clip-text text-transparent">
                Transform Grading
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful AI capabilities designed specifically for educators, backed by enterprise-grade security and seamless integration.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`relative group rounded-xl bg-gradient-to-br ${feature.bgGradient} border border-gray-200/50 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                {/* Hover Glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {feature.title}
                    </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
