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
  Download
} from "lucide-react";
import CountUp from "./CountUp";
import NeuralMapOverlay from "./NeuralMapOverlay";
import HeroVideo from './HeroVideo';
import { useNavigation } from '../contexts/NavigationContext';


const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { getPath } = useNavigation();
  
  // Mouse spotlight effect state (mousePosition removed as unused)
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

  const handleMouseEnter = () => {
    setIsHovered(true);
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
    <>
      <section
        ref={sectionRef}
        className="relative overflow-hidden min-h-screen group bg-white"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label="Hero section introducing Remarkably AI essay grading platform"
      >
      {/* Layer 1: Enhanced gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
                      background: `
              radial-gradient(circle at 70% 60%, rgba(99, 102, 241, 0.5) 0%, rgba(139, 92, 246, 0.18) 30%, rgba(219, 234, 254, 0.15) 40%, transparent 70%),
              linear-gradient(135deg, rgba(241, 245, 249, 1) 0%, rgba(248, 250, 252, 0.95) 40%, rgba(255, 255, 255, 1) 100%)
            `
        }}
        aria-hidden="true"
      ></div>

      {/* Layer 2: Localized Grid Background (visible only in spotlight area) */}
      {isHovered && (
        <div
          className="fixed inset-0 z-5 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3e%3cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%23ffffff' stroke-width='1.5' opacity='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e")`,
            backgroundSize: '60px 60px',
            maskImage: `radial-gradient(circle 200px at ${globalMousePosition.x}px ${globalMousePosition.y}px, white 0%, white 60%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(circle 200px at ${globalMousePosition.x}px ${globalMousePosition.y}px, white 0%, white 60%, transparent 100%)`,
            opacity: 0.8
          }}
          aria-hidden="true"
        />
      )}

      {/* Layer 3: Neural Network Overlay */}
      <div className="absolute inset-0 z-10" aria-hidden="true">
        <NeuralMapOverlay />
      </div>

      {/* Layer 4: Enhanced Blue Spotlight Effect */}
      {isHovered && (
        <motion.div
          className="pointer-events-none fixed z-20"
          style={{
            left: globalMousePosition.x - 200,
            top: globalMousePosition.y - 200,
            width: 400,
            height: 400,
            background: `
              radial-gradient(circle, 
                rgba(99, 102, 241, 0.4) 0%, 
                rgba(139, 92, 246, 0.4) 25%, 
                rgba(99, 102, 241, 0.15) 45%, 
                rgba(139, 92, 246, 0.08) 65%,
                transparent 80%
              )
            `,
            borderRadius: '50%',
            filter: 'blur(15px)',
            mixBlendMode: 'normal'
          }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          aria-hidden="true"
        />
      )}

      {/* Layer 5: Hero Content */}
      <div className="container-custom relative z-30 pt-28 sm:pt-36 md:pt-28 lg:pt-20 xl:pt-20">
        <div className="flex flex-col justify-start">
          {/* Main Content */}
          <motion.div
            className="text-center space-y-2 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Main Headline with Enhanced Typography */}
            <div className="space-y-6">
              <h1
                className="break-words text-balance"
                id="main-heading"
                ref={headlineRef}
              >
                <span className="block text-slate-900 mb-3 font-extrabold tracking-tight text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-tight">
                  <span className="block sm:hidden">
                    Stop Spending<br />Weekends<br />Grading
                  </span>
                  <span className="hidden sm:inline">
                    Stop Spending Weekends Grading
                  </span>
                </span>
                <span className="block text-indigo-600 mb-6 font-black tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                  Grade 7× Faster with AI
                </span>
                <span className="block text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-black-700 leading-relaxed max-w-4xl mx-auto text-center">
                  Remarkably grades handwritten essays in your style, using your rubric — proven in our pilot program.
                </span>
              </h1>
            </div>

            {/* Video Integration - Seamlessly placed after headline */}
            <div className="mt-8 mb-8 flex justify-center">
              <div className="relative w-full max-w-2xl">
                <HeroVideo
                  videoSrc="/remarkably.mp4"
                  fallbackImage="/hero-video-fallback.svg"
                  alt="Remarkably AI essay grading demo"
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-2xl shadow-lg border border-gray-200/50"
                />
                {/* Subtle decorative elements that fit with beta design */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-indigo-500 rounded-full opacity-60 animate-pulse hidden lg:block"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full opacity-40 animate-pulse hidden lg:block" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* Try and Demo Buttons */}
            <div className="mt-6 mb-6 flex justify-center gap-4 flex-col sm:flex-row">
              <div className="flex flex-col items-center">
                <a
                  href="https://app.remarkably.ink"
                  className="w-52 sm:w-56 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Try for free
                  <span className="sr-only">For Teachers</span>
                  </a>
                <span
                  className="text-xs text-gray-500 mt-1 tracking-tight leading-snug"
                  aria-hidden="true"
                >
                  For Teachers
                </span>
              </div>
              <div className="flex flex-col items-center">
                <Link
                  to={getPath('/contact')}
                  className="w-52 sm:w-56 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold text-base px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 justify-center focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                >
                  Book free demo
                  <span className="sr-only">For Schools</span>
                </Link>
                <span
                  className="text-xs text-gray-500 mt-1 tracking-tight leading-snug"
                  aria-hidden="true"
                >
                  For Schools
                </span>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Metrics Section with Professional Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-12 md:mt-32 max-w-5xl mx-auto"
            role="region"
            aria-labelledby="metrics-heading"
          >
            <motion.div variants={itemVariants} className="text-center mb-8 md:mb-12">
              <h2 id="metrics-heading" className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Proven results from pilot program
              </h2>
              <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-indigo-300 to-purple-400 mx-auto rounded-full" aria-hidden="true"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  variants={statsVariants}
                  className={`${metric.bgColor} ${metric.borderColor} rounded-2xl p-6 md:p-8 border-2 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden backdrop-blur-sm focus-within:ring-2 focus-within:ring-indigo-500/50`}
                  whileHover={{ scale: 1.02 }}
                  tabIndex={0}
                  role="article"
                  aria-labelledby={`metric-${index}-label`}
                  aria-describedby={`metric-${index}-desc`}
                >
                  {/* Enhanced Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} aria-hidden="true" />
                  
                  <div className="relative">
                    <div className="flex items-center justify-center mb-6">
                      <motion.div 
                        className={`w-12 md:w-14 h-12 md:h-14 rounded-xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        animate={{ 
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity, 
                          delay: index * 0.5,
                          ease: "easeInOut" 
                        }}
                        aria-hidden="true"
                      >
                        {metric.icon}
                      </motion.div>
                    </div>
                    
                    <div className="text-center space-y-3">
                      <div className={`text-3xl md:text-4xl lg:text-5xl font-bold ${metric.textColor} tracking-tight`}>
                        {metric.isAnimated ? metric.number : metric.number}
                      </div>
                      <div id={`metric-${index}-label`} className="font-semibold text-gray-900 text-base md:text-lg">
                        {metric.label}
                      </div>
                      <div id={`metric-${index}-desc`} className="text-xs md:text-sm font-medium text-gray-600 leading-relaxed">
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
            className="text-center mt-16 md:mt-20 space-y-6"
            role="region"
            aria-label="Social proof and user statistics"
          >
            <p className="text-sm font-medium text-gray-600">
              Join educators who've transformed their grading workflow
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <div className="flex -space-x-3" role="img" aria-label="Educator avatars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 border-2 md:border-3 border-white flex items-center justify-center text-white text-xs font-bold shadow-lg"
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
                    aria-hidden="true"
                  >
                    {String.fromCharCode(64 + i)}
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-gray-700 bg-white/60 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-gray-200/60">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></div>
                <span>Educators saving hours weekly</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      </section>
    </>
  );
};

export default HeroSection;