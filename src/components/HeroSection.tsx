import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
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
  Download
} from "lucide-react";
import CountUp from "./CountUp";
import NeuralMapOverlay from "./NeuralMapOverlay";

// Custom animated counter hook with formatting
const useAnimatedCounter = (end: number, duration: number = 2) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isVisible) return;

    const controls = animate(0, end, {
      duration,
      onUpdate: (value) => setCount(Math.floor(value)),
    });

    return controls.stop;
  }, [end, duration, isVisible]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}+ Million`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K+`;
    }
    return num.toLocaleString();
  };

  return { count, nodeRef, setIsVisible, formatNumber };
};

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Mouse spotlight effect state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse tracking for spotlight effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    if (!isMobile) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  const statsVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.7,
      },
    },
  };

  // Enhanced metrics with teacher-focused messaging
  const metrics = [
    {
      icon: <Clock className="w-5 h-5" />,
      number: "5–7×",
      label: "Faster Grading",
      description: "Reduce grading time from hours to minutes",
      gradient: "from-amber-500 via-orange-500 to-orange-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-700",
      borderColor: "border-amber-200"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      number: <CountUp to={1000000} duration={2.5} className="font-bold" />,
      label: "Words Graded", 
      description: "Across real student essays",
      gradient: "from-indigo-500 via-purple-600 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700",
      borderColor: "border-indigo-200",
      isAnimated: true
    },
    {
      icon: <Heart className="w-5 h-5" />,
      number: "95%+",
      label: "Teacher Satisfaction",
      description: "Educators love the time savings",
      gradient: "from-emerald-500 via-teal-600 to-emerald-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-700",
      borderColor: "border-emerald-200"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden min-h-screen group"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Layer 1: Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 animate-gradient-shift"
          style={{
            background: 'linear-gradient(-45deg, #ffffff, #f8fafc, #e0e7ff, #f1f5f9, #ffffff, #eef2ff)',
            backgroundSize: '400% 400%',
          }}
          animate={{ opacity: isHovered ? 0.25 : 0.1 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
        {/* Enhanced hover gradient overlay */}
        <motion.div 
          className="absolute inset-0 animate-gradient-shift"
          style={{
            background: 'linear-gradient(-45deg, #e0e7ff, #c7d2fe, #a5b4fc, #e0e7ff, #ddd6fe, #c4b5fd)',
            backgroundSize: '400% 400%',
          }}
          animate={{ opacity: isHovered ? 0.30 : 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
      </div>

      {/* Layer 2: Neural Network Overlay */}
      <div className="absolute inset-0 z-10">
        <NeuralMapOverlay />
      </div>

      {/* Layer 3: Enhanced Mouse Spotlight Effect */}
      {!isMobile && isHovered && (
        <motion.div
          className="pointer-events-none fixed z-20"
          style={{
            left: mousePosition.x - 175,
            top: mousePosition.y - 175,
            width: 350,
            height: 350,
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(139, 92, 246, 0.15) 30%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(30px)',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      )}

      {/* Layer 4: Hero Content */}
      <div className="container-custom relative z-30 py-20 md:py-24 lg:py-32">
        <div className="flex flex-col justify-center min-h-screen">
          
          {/* Main Content */}
          <motion.div
            className="text-center space-y-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Enhanced Badge with Teacher Focus */}
            <motion.div variants={itemVariants}>
              <div className="badge-primary shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm">
                <Heart className="w-4 h-4" />
                Built with Teachers, for Teachers
              </div>
            </motion.div>

            {/* Main Headline with Enhanced Typography */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-balance">
                <span className="block text-gray-900 mb-2 font-extrabold tracking-tight">Grade Handwritten Essays</span>
                <span className="block text-gradient-primary mb-4 font-black tracking-tight">
                  7× Faster with AI
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl font-medium text-black-600 leading-relaxed max-w-4xl mx-auto text-center">
                  Remarkably grades handwritten essays in your style, using your rubric — just like you would.
                </span>
              </h1>
              
                            <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-4xl mx-auto">
                Remarkably grades directly on your handwritten essays, understands your rubric, and gives feedback just like you would.
              </p>
              
              {/* Enhanced Decorative Element */}
              <div className="flex items-center justify-center space-x-3 py-4">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-indigo-300 to-indigo-400 rounded-full"></div>
                <motion.div 
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center shadow-lg"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </motion.div>
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent via-indigo-300 to-indigo-400 rounded-full"></div>
              </div>
            </motion.div>

            {/* Enhanced Value Proposition with Better Contrast */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-empathetic max-w-3xl mx-auto font-medium backdrop-blur-sm bg-white/30 rounded-2xl py-6 px-8 border border-white/20">
                Remarkably learns your unique grading style and maintains your teaching standards while dramatically reducing time spent on essay marking. Trusted by educators across MOE and international schools.
              </p>
              
              {/* Enhanced Trust Indicators with Better Spacing */}
              <div className="flex flex-wrap justify-center items-center gap-4 pt-6">
                <motion.div 
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-full border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  MOE Co-designed
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-full border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  Handwritten & Digital
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-full border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  Setup in Minutes
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced B2B CTA Section with Better Visual Hierarchy */}
            <motion.div
              variants={itemVariants}
              className="space-y-8 pt-8"
            >
              {/* Primary CTAs with Enhanced Shadows */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="btn-primary hover-lift group relative overflow-hidden shadow-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Live Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
                
                <motion.button
                  className="btn-secondary hover-lift group shadow-md backdrop-blur-sm"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Case Study
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-300" />
                </motion.button>
              </div>

              {/* Secondary CTA with Glass Effect */}
              <motion.div
                variants={itemVariants}
                className="pt-2"
              >
                <motion.button
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-indigo-700 bg-indigo-50/80 backdrop-blur-sm hover:bg-indigo-100/80 rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md border border-indigo-200/50"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="w-4 h-4" />
                  Watch 2-Minute Overview
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Enhanced No Risk Message with Better Typography */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
              <p className="text-sm font-medium text-gray-600 backdrop-blur-sm bg-white/20 rounded-lg py-3 px-6 border border-white/30">
                <span className="text-gray-800 font-semibold">Free 7-day trial</span> • No credit card required • Enterprise support included
              </p>
              <div className="flex justify-center items-center gap-6 text-xs font-medium text-gray-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-emerald-500" />
                  SOC2 Compliant
                </div>
                <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-emerald-500" />
                  PDPA Certified
                </div>
                <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-emerald-500" />
                  99.9% Uptime SLA
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Metrics Section with Professional Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-24 max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Trusted by educators worldwide
              </p>
              <div className="w-24 h-0.5 bg-gradient-to-r from-indigo-300 to-purple-400 mx-auto rounded-full"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  variants={statsVariants}
                  className={`${metric.bgColor} ${metric.borderColor} rounded-2xl p-8 border-2 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden backdrop-blur-sm`}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Enhanced Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <div className="flex items-center justify-center mb-6">
                      <motion.div 
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        animate={{ 
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity, 
                          delay: index * 0.5,
                          ease: "easeInOut" 
                        }}
                      >
                        {metric.icon}
                      </motion.div>
                    </div>
                    
                    <div className="text-center space-y-3">
                      <div className={`text-4xl md:text-5xl font-bold ${metric.textColor} tracking-tight`}>
                        {metric.isAnimated ? metric.number : metric.number}
                      </div>
                      <div className="font-semibold text-gray-900 text-lg">
                        {metric.label}
                      </div>
                      <div className="text-sm font-medium text-gray-600 leading-relaxed">
                        {metric.description}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Social Proof with Better Visual Design */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-20 space-y-6"
          >
            <p className="text-sm font-medium text-gray-600">
              Join thousands of teachers who've transformed their grading workflow
            </p>
            <div className="flex justify-center items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 border-3 border-white flex items-center justify-center text-white text-xs font-bold shadow-lg"
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    animate={{ 
                      y: [0, -5, 0],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: i * 0.2,
                      ease: "easeInOut" 
                    }}
                  >
                    {String.fromCharCode(64 + i)}
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/60">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                2,000+ educators actively using Remarkably
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
