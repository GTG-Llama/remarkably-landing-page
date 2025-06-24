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
  Play
} from "lucide-react";
import CountUp from "./CountUp";

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

  // Animated counter for words graded
  const { count: wordCount, setIsVisible: setWordCountVisible, formatNumber } = useAnimatedCounter(1000000, 2.5);

  // Neural network animation data
  const neuralNodes = [
    { id: 1, x: 10, y: 20, delay: 0 },
    { id: 2, x: 30, y: 40, delay: 0.2 },
    { id: 3, x: 50, y: 15, delay: 0.4 },
    { id: 4, x: 70, y: 35, delay: 0.6 },
    { id: 5, x: 90, y: 25, delay: 0.8 },
    { id: 6, x: 20, y: 70, delay: 1.0 },
    { id: 7, x: 60, y: 80, delay: 1.2 },
    { id: 8, x: 80, y: 60, delay: 1.4 },
  ];

  const connections = [
    { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 },
    { from: 4, to: 5 }, { from: 2, to: 6 }, { from: 3, to: 7 },
    { from: 4, to: 8 }, { from: 6, to: 7 }, { from: 7, to: 8 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const statsVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  // Key metrics data
  const metrics = [
    {
      icon: <Zap className="w-6 h-6" />,
      number: "5–7×",
      label: "Faster Grading",
      description: "Reduce time per essay to 3–5 minutes",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      number: "1.0M+",
      label: "Words Graded", 
      description: "Across real student work",
      color: "from-indigo-500 to-purple-500",
      isAnimated: true
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: "Thousands+",
      label: "Teachers & Students Impacted",
      description: "Grading improved across school levels",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="section-hero relative overflow-hidden bg-white"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

            <div className="container-custom">
        <div className="flex flex-col justify-center min-h-screen py-24">
          {/* Main Content - Centered */}
          <motion.div
            className="text-center space-y-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium"
            >
              <Brain className="w-4 h-4" />
              AI-Powered Education Technology
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block text-gray-900">Grade Handwritten Essays</span>
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
                  7× Faster with AI
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500 rounded-full mx-auto" />
            </motion.div>

            {/* Refined Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-medium"
            >
              Remarkably mirrors your grading style, saves hours each week, and improves student outcomes — trusted by educators in MOE and international schools.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            >
              <motion.button
                className="group relative px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.button>
              
              <motion.button
                className="group px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo Video
                </div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Bottom Stats Row */}
          <motion.div
            className="mt-20"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            onViewportEnter={() => setWordCountVisible(true)}
          >
            {/* Horizontal Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  variants={statsVariants}
                  className="group text-center space-y-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <motion.div 
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${metric.color} text-white shadow-md mx-auto`}
                    whileHover={{ 
                      scale: 1.05
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    {metric.icon}
                  </motion.div>
                  
                  {/* Number */}
                  <div className="text-4xl md:text-5xl font-bold text-gray-900">
                    {metric.isAnimated && isInView ? (
                      <span>
                        <CountUp
                          from={0}
                          to={1000000}
                          separator=","
                          direction="up"
                          duration={2.5}
                          className="count-up-text"
                        />+
                      </span>
                    ) : (
                      metric.number
                    )}
                  </div>
                  
                  {/* Label */}
                  <div className="text-xl font-bold text-gray-900">{metric.label}</div>
                  
                  {/* Description */}
                  <div className="text-gray-600 leading-relaxed max-w-xs mx-auto">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default HeroSection;
