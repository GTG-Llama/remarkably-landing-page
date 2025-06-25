import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BookDemoCTA, TryFreeCTA, LearnMoreCTA } from '@/components/ui/cta-button';
import { Brain, Zap, Clock, CheckCircle, Users, Award, Sparkles } from "lucide-react";

const ImprovedHeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for subtle interactions
  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.innerWidth < 768) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { icon: <Clock className="w-6 h-6" />, value: "7x", label: "Faster Grading" },
    { icon: <Users className="w-6 h-6" />, value: "500+", label: "Teachers Trust Us" },
    { icon: <Award className="w-6 h-6" />, value: "99%", label: "Accuracy Rate" },
  ];

  return (
    <section
      ref={sectionRef}
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center bg-neural overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-yellow-50" />
      
      {/* Animated Background Dots */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Main Content */}
      <div className="container-standard px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 border-2 border-black text-black font-bold text-sm shadow-md">
              <Sparkles className="w-4 h-4" />
              Trusted by 500+ Schools Worldwide
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-black text-black mb-6 leading-tight"
          >
            Grade Essays{" "}
            <span className="relative">
              <span className="bg-yellow-300 px-2 py-1 -rotate-1 inline-block border-4 border-black shadow-lg">
                7x Faster
              </span>
            </span>
            {" "}with AI
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Remarkably helps teachers grade handwritten essays in seconds, not hours. 
            Upload, analyze, and provide personalized feedback using your own rubric and style.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <TryFreeCTA size="lg" />
            <BookDemoCTA size="lg" />
            <LearnMoreCTA size="lg" />
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>Free 1-month trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>Cancel anytime</span>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white border-4 border-black p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center justify-center mb-4 text-indigo-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black text-black mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-16 h-16 bg-yellow-300 border-4 border-black rotate-12 hidden lg:block"
        animate={{
          rotate: [12, 18, 12],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-10 w-12 h-12 bg-pink-300 border-4 border-black -rotate-12 hidden lg:block"
        animate={{
          rotate: [-12, -6, -12],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle Mouse Follower */}
      {mousePosition.x > 0 && (
        <div
          className="absolute pointer-events-none rounded-full bg-gradient-radial from-yellow-200/20 to-transparent hidden lg:block"
          style={{
            left: mousePosition.x - 150,
            top: mousePosition.y - 150,
            width: 300,
            height: 300,
            transition: 'all 0.3s ease',
          }}
        />
      )}
    </section>
  );
};

export default ImprovedHeroSection;