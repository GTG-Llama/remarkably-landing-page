import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { 
  Brain, 
  Zap, 
  Target, 
  Clock, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Award,
  BookOpen,
  TrendingUp,
  Play,
  Heart,
  Sparkles,
  Calendar,
  Download,
  ChevronDown
} from "lucide-react";
import CountUp from "./CountUp";
import NeuralMapOverlay from "./NeuralMapOverlay";
import { useNavigation } from '../contexts/NavigationContext';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { getPath } = useNavigation();
  
  // Mouse spotlight effect state
  const [globalMousePosition, setGlobalMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const headlineRef = useRef<HTMLHeadingElement>(null);


  // Mouse tracking for spotlight effect
  const handleMouseMove = (e: React.MouseEvent) => {
    // Track global position for fixed elements
    setGlobalMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const stats = [
    { icon: <Clock className="w-6 h-6" />, value: "7x", label: "Faster Grading" },
    { icon: <Users className="w-6 h-6" />, value: "Hundreds", label: "Teachers and Students Trust Us" },
    { icon: <Award className="w-6 h-6" />, value: "99%", label: "Accuracy Rate" },
  ];

  return (
    <>
      <section
        ref={sectionRef}
        id="hero-section"
        className="relative min-h-screen flex items-center justify-center bg-neural overflow-hidden"
        onMouseMove={handleMouseMove}
        aria-label="Hero section introducing Remarkably AI essay grading platform"
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
        <div className="container-standard px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Main Content - Centered */}
            <div className="text-center">
              {/* Badge */}
              <div className="mb-6 lg:mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 border-2 border-black text-black font-bold text-sm shadow-md">
                  <Sparkles className="w-4 h-4" />
                  Trusted by Thousands Worldwide
                </span>
              </div>

              {/* Main Headlines */}
              <h1 
                ref={headlineRef}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black mb-6 sm:mb-8 leading-tight"
              >
                Stop Spending Weekends Grading
              </h1>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black mb-6 sm:mb-8 leading-tight">
                Grade{" "}
                <span className="relative">
                  <span className="bg-yellow-300 px-2 py-1 -rotate-1 inline-block border-4 border-black shadow-lg">
                    7× Faster
                  </span>
                </span>
                {" "}with AI
              </h2>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                Remarkably grades handwritten essays in your style, using your rubric — proven in our pilot program.
              </p>

              {/* CTA Buttons */}
              <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://app.remarkably.ink"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg px-8 py-4 border-4 border-black rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Try for free
                </a>
                <Link
                  to={getPath("/contact")}
                  className="bg-white hover:bg-gray-50 text-gray-900 font-bold text-lg px-8 py-4 border-4 border-black rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Book free demo
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600 px-4 sm:px-0 mb-16">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Free 1-month trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section - Full Width Below */}
          <div className="mt-16 lg:mt-20">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Trusted Results</h2>
              <p className="text-gray-600">Real impact for teachers and students</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white border-2 sm:border-4 border-black p-4 sm:p-6 shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
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
        {globalMousePosition.x > 0 && (
          <div
            className="absolute pointer-events-none rounded-full bg-gradient-radial from-yellow-200/20 to-transparent hidden lg:block"
            style={{
              left: globalMousePosition.x - 150,
              top: globalMousePosition.y - 150,
              width: 300,
              height: 300,
              transition: 'all 0.3s ease',
            }}
          />
        )}
      </section>
    </>
  );
};

export default HeroSection;