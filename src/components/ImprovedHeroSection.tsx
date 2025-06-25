import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BookDemoCTA, TryFreeCTA, LearnMoreCTA } from '@/components/ui/cta-button';
import { Brain, Zap, Clock, CheckCircle, Users, Award, Sparkles, ChevronDown } from "lucide-react";

const ImprovedHeroSection: React.FC = () => {
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

  const stats = [
    { icon: <Clock className="w-6 h-6" />, value: "7x", label: "Faster Grading" },
    { icon: <Users className="w-6 h-6" />, value: "Hundreds", label: "Teachers and Students Trust Us" },
    { icon: <Award className="w-6 h-6" />, value: "99%", label: "Accuracy Rate" },
  ];

  return (
    <section
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
      <div className="container-standard px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 border-2 border-black text-black font-bold text-sm shadow-md">
              <Sparkles className="w-4 h-4" />
              Trusted by Thousands Worldwide
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-black text-black mb-6 leading-tight">
            Grade Essays{" "}
            <span className="relative">
              <span className="bg-yellow-300 px-2 py-1 -rotate-1 inline-block border-4 border-black shadow-lg">
                7x Faster
              </span>
            </span>
            {" "}with AI
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Remarkably helps teachers grade handwritten essays in seconds, not hours. 
            Upload, analyze, and provide personalized feedback using your own rubric and style.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <TryFreeCTA size="lg" />
            <BookDemoCTA size="lg" />
            <LearnMoreCTA size="lg" />
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600 mb-16">
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
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white border-4 border-black p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center mb-4 text-indigo-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black text-black mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        onClick={() => {
          const metricsSection = document.getElementById('metrics-section');
          metricsSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <p className="text-sm text-gray-600 mb-2 font-medium">See our impact</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
        >
          <ChevronDown className="w-4 h-4 text-black" />
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