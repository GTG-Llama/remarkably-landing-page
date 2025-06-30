import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Clock, CheckCircle, Users, Award, Sparkles, ChevronDown } from "lucide-react";

// Floating Grading Interface Component
const FloatingGradingInterface: React.FC = () => {
  return (
    <div className="relative max-w-full w-full mx-auto">
      {/* Main Essay Paper - Base Layer (Static) */}
      <div className="relative">
        <img 
          src="/Handwritten Essay for Hero.png" 
          alt="Handwritten Essay" 
          className="w-full h-auto rounded-2xl shadow-2xl"
        />
        
        {/* Floating Essay Type Box - Top Right */}
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-[13%] sm:top-[4%] md:-top-[5%] lg:-top-[12%] -right-[2%] sm:right-[6%] md:right-[4%] lg:-right-[8%] z-10"
        >
          <img 
            src="/Essay Types for Hero.png" 
            alt="Essay Type Selection Interface" 
            className="w-auto h-auto max-w-[170px] sm:max-w-[150px] md:max-w-[220px] lg:max-w-[200px] drop-shadow-xl"
          />
        </motion.div>

        {/* Floating Punctuation Feedback - Next to green underline */}
        <motion.div 
          animate={{ x: [0, -3, 0], y: [0, 2, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
          className="absolute -top-[7%] sm:-top-[1%] md:-top-[4%] lg:-top-[6%] -left-[-4%] sm:-left-[-6%] md:-left-[-15%] lg:left-[-2%] z-10"
        >
          <img 
            src="/Punctuation Mistake for Hero.png" 
            alt="Punctuation Feedback" 
            className="w-auto h-auto max-w-[120px] sm:max-w-[110px] md:max-w-[170px] lg:max-w-[130px] drop-shadow-xl"
          />
        </motion.div>

        {/* Floating Spelling Feedback - Next to red underline */}
        <motion.div 
          animate={{ y: [0, -4, 0], x: [0, 2, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 2 }}
          className="absolute top-[42%] sm:top-[52%] md:top-[44%] lg:top-[42%] left-[2%] sm:left-[4%] md:left-[6%] lg:-left-[8%] z-10"
        >
          <img 
            src="/Spelling Mistake for Hero.png" 
            alt="Spelling Feedback" 
            className="w-auto h-auto max-w-[110px] sm:max-w-[100px] md:max-w-[170px] lg:max-w-[120px] drop-shadow-xl"
          />
        </motion.div>

        {/* Floating Grammar Feedback - Next to blue underline */}
        <motion.div 
          animate={{ scale: [1, 1.02, 1], x: [0, 2, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-[24%] sm:bottom-[22%] md:bottom-[27%] lg:bottom-[24%] right-[1%] sm:right-[6%] md:right-[4%] lg:-right-[6%] z-10"
        >
          <img 
            src="/Grammar Mistake for Hero.png" 
            alt="Grammar Feedback" 
            className="w-auto h-auto max-w-[120px] sm:max-w-[110px] md:max-w-[170px] lg:max-w-[130px] drop-shadow-xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50" />
      
      {/* Animated Background Dots */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Main Content */}
      <div className="container-standard px-2 sm:px-4 lg:px-6 pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-12 sm:pb-16 lg:pb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="text-left lg:pr-12 lg:pl-4">
              {/* Main Headlines */}
              <h1>
                <span className="block -ml-14 text-slate-900 mb-4 sm:mb-6 font-extrabold tracking-tight text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-tight">
                  <span className="block sm:hidden">Stop Spending<br />Weekends<br />Grading</span>
                  <span className="hidden sm:inline">Stop Spending Weekends Grading</span>
                </span>
              </h1>
              
              <span className="block -ml-14 text-indigo-600 mb-8 sm:mb-10 md:mb-12 font-black tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight">Grade 7× Faster with AI</span>

              {/* Subheadline */}
              <span className="block -ml-14 text-base sm:text-lg md:text-lg lg:text-l font-medium text-black-700 leading-relaxed mb-8 sm:mb-10 md:mb-12">Remarkably grades handwritten essays in your style, using your rubric — proven in our pilot program.</span>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 -ml-14">
                <div className="text-left">
                  <a
                    href="https://app.remarkably.ink"
                    className="w-52 sm:w-56 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Try for free
                    <span className="sr-only">For Teachers</span>
                  </a>
                  <div className="text-sm text-gray-500 font-medium mt-2">For Teachers</div>
                </div>
                
                <div className="text-left">
                  <Link
                    to="/beta/contact"
                    className="w-52 sm:w-56 bg-white hover:bg-gray-50 text-gray-800 font-semibold text-base px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 justify-center focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                  >
                    Book free demo
                    <span className="sr-only">For Schools</span>
                  </Link>
                  <div className="text-sm text-gray-500 font-medium mt-2">For Schools</div>
                </div>
              </div>

              {/* Trust Indicators */}
            </div>

            {/* Right Column - Demo Interface */}
            <div className="lg:pl-8 w-full">
              <div className="transform scale-100 sm:scale-105 md:scale-110 lg:scale-125 origin-center">
                <FloatingGradingInterface />
              </div>
            </div>
          </div>

          {/* Stats Section - Full Width Below */}
          <div className="mt-16 lg:mt-20">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Trusted Results</h2>
              <p className="text-gray-600">Real impact for teachers and students</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-center justify-center mb-4 text-indigo-600">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
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
          className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow border border-gray-200"
        >
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-12 h-12 bg-purple-300 rounded-full opacity-60 hidden lg:block"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-10 w-8 h-8 bg-blue-300 rounded-full opacity-40 hidden lg:block"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
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
          className="absolute pointer-events-none rounded-full bg-gradient-radial from-purple-200/20 to-transparent hidden lg:block"
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