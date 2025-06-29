import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import ComponentErrorBoundary from '../../components/ComponentErrorBoundary';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Target, 
  Users, 
  Building,
  Shield,
  BarChart3,
  ChevronLeft,
  Play,
  Sparkles,
  BookOpen,
  FileText,
  Timer,
  Award,
  Star,
  TrendingUp,
  MessageSquare,
  Calendar,
  Lightbulb,
  Eye,
  Gauge,
  RefreshCw,
  Download,
  Upload
} from 'lucide-react';

const InstantGrading: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string>('dashboard');
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null);

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
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Interactive Dashboard Demos
  const dashboardDemos = {
    dashboard: {
      title: "Main Grading Dashboard",
      description: "Get an overview of all your classes, assignments, and grading progress in one unified interface.",
              image: "/Essay Grader Dashboard.png?cb=1",
      imageAlt: "Remarkably Essay Grader Dashboard showing class overview and assignment tracking",
      stats: { processed: "2,847", accuracy: "95%", timesSaved: "847 hrs" },
      features: [
        "Class management and organization",
        "Assignment tracking and progress",
        "Student performance analytics",
        "Quick access to recent grades"
      ]
    },
    grading: {
      title: "Live Grading Interface",
      description: "Experience real-time essay processing with detailed analysis, scoring, and instant feedback generation.",
              image: "/Grading Interface .png?cb=1",
      imageAlt: "Active grading interface showing real-time essay analysis and scoring",
      stats: { speed: "< 60s", feedback: "Comprehensive", accuracy: "95%+" },
      features: [
        "Real-time essay analysis",
        "Instant rubric scoring",
        "Comprehensive feedback generation",
        "Grammar and structure evaluation"
      ]
    },
    analytics: {
      title: "Grade Analytics Dashboard", 
      description: "Track performance trends, identify learning patterns, and generate insights across all your students.",
              image: "/Grade and User Dashboard.png?cb=1",
      imageAlt: "Analytics dashboard showing student performance trends and grading insights",
      stats: { insights: "Deep", trends: "Real-time", reports: "Automated" },
      features: [
        "Student performance tracking",
        "Class progress analytics",
        "Learning trend identification",
        "Automated report generation"
      ]
    }
  };

  // Interactive Speed Comparison
  const speedComparison = [
    {
      task: "Read 30 Essays",
      manual: { time: "6-8 hours", steps: ["Individual reading", "Note taking", "Multiple reviews"] },
      ai: { time: "60 seconds", steps: ["Bulk upload", "Instant processing", "Ready for review"] },
      savings: "80% faster"
    },
    {
      task: "Generate Feedback",
      manual: { time: "15 min/essay", steps: ["Analyze content", "Write comments", "Check consistency"] },
      ai: { time: "15 seconds", steps: ["Auto analysis", "Personalized feedback", "Quality assurance"] },
      savings: "99% faster"
    },
    {
      task: "Calculate Scores",
      manual: { time: "5-10 min/essay", steps: ["Manual calculation", "Rubric reference", "Double checking"] },
      ai: { time: "Instant", steps: ["Automated scoring", "Rubric alignment", "Accuracy verified"] },
      savings: "100% automated"
    }
  ];

  // Performance Metrics
  const performanceMetrics = [
    {
      value: "5-7×",
      label: "Faster Grading",
      description: "Average speed improvement across all teachers",
      icon: <Zap className="h-8 w-8" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      value: "98.2%",
      label: "Accuracy Rate",
      description: "Matches expert teacher evaluations",
      icon: <Target className="h-8 w-8" />,
      color: "from-indigo-500 to-purple-600"
    },
    {
      value: "< 60s",
      label: "Per Essay",
      description: "Complete analysis and feedback generation",
      icon: <Timer className="h-8 w-8" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      value: "200K+",
      label: "Words Graded",
      description: "Successfully processed this month",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "from-pink-500 to-rose-600"
    }
  ];

  // Simulate timer function
  const startTimer = () => {
    setIsTimerRunning(true);
    setCurrentTime(0);
    const interval = setInterval(() => {
      setCurrentTime(prev => {
        if (prev >= 60) {
          setIsTimerRunning(false);
          clearInterval(interval);
          return 60;
        }
        return prev + 1;
      });
    }, 50);
  };

  return (
    <>
      <SEOHead 
        config={{
          title: "Instant Grading - Grade Essays 6-7× Faster | Remarkably",
          description: "Grade handwritten and digital essays in under 60 seconds with detailed feedback and rubric scoring. Experience 6-7× faster grading with AI.",
          keywords: ["instant grading", "fast essay assessment", "AI grading", "automated scoring", "teacher productivity"]
        }} 
        pageKey="instant-grading" 
      />

      {/* Breadcrumb Navigation */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/beta" className="text-gray-600 hover:text-blue-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/beta/features" className="text-gray-600 hover:text-blue-600">Features</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Instant Grading</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column - Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <Link to="/beta/features" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Features
              </Link>

              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-medium">
                  <Zap className="h-4 w-4 mr-2" />
                  Lightning-Fast Processing
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Grade Essays in
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent block">
                    Under 60 Seconds
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Transform your grading workflow with AI that delivers detailed feedback, rubric scoring, and comprehensive analysis 6-7× faster than traditional methods.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/beta/demo" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 font-semibold py-4 px-8 rounded-xl inline-flex items-center justify-center"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Live Demo
                </Link>
                <Link 
                  to="/beta/contact" 
                  className="border-2 border-blue-200 text-blue-700 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 font-semibold py-4 px-8 rounded-xl inline-flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                {performanceMetrics.slice(0, 3).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Interactive Speed Demo */}
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Speed Comparison Demo</h3>
                  <p className="text-gray-600">See the difference in action</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl border border-red-200">
                    <div>
                      <div className="font-semibold text-red-700">Manual Grading</div>
                      <div className="text-sm text-red-600">30 essays • Traditional method</div>
                    </div>
                    <div className="text-2xl font-bold text-red-700">8-10 hrs</div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl border border-green-200">
                    <div>
                      <div className="font-semibold text-green-700">Remarkably AI</div>
                      <div className="text-sm text-green-600">30 essays • Instant processing</div>
                    </div>
                    <div className="text-2xl font-bold text-green-700">
                      {isTimerRunning ? `${currentTime}s` : '90 min'}
                    </div>
                  </div>
                </div>

                <button
                  onClick={startTimer}
                  disabled={isTimerRunning}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                    isTimerRunning 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg'
                  }`}
                >
                  {isTimerRunning ? (
                    <span className="flex items-center justify-center">
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Play className="h-4 w-4 mr-2" />
                      Start Demo
                    </span>
                  )}
                </button>

                {currentTime >= 60 && (
                  <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-200 text-center">
                    <div className="text-green-700 font-semibold">Demo Complete! ✨</div>
                    <div className="text-sm text-green-600">Save 7+ hours every time</div>
                </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proven Performance Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real metrics from teachers and schools using Remarkably's instant grading technology.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredMetric(index)}
                onMouseLeave={() => setHoveredMetric(null)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${metric.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 transition-transform duration-300 ${
                  hoveredMetric === index ? 'scale-110' : ''
                }`}>
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Showcase */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Eye className="h-4 w-4 mr-2" />
                Product Showcase
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                See Our Dashboard in Action
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore different views of our grading platform. Click between demo types to experience the interface.
              </p>
            </motion.div>

            {/* Demo Selector */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {Object.entries(dashboardDemos).map(([key, demo]) => (
                  <button
                    key={key}
                    onClick={() => setActiveDemo(key)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeDemo === key
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md border border-gray-200'
                    }`}
                  >
                    {demo.title}
                  </button>
                ))}
              </div>

              {/* Active Demo Content */}
                <motion.div 
                key={activeDemo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Screenshot with Browser Mockup */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl shadow-2xl border-2 border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-3 border-b flex items-center space-x-2">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <Gauge className="h-4 w-4 text-gray-600" />
                        <span className="text-sm text-gray-600">Remarkably Dashboard - {dashboardDemos[activeDemo].title}</span>
                      </div>
                    </div>
                    <img 
                      src={dashboardDemos[activeDemo].image}
                      alt={dashboardDemos[activeDemo].imageAlt}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Content and Features */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {dashboardDemos[activeDemo].title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {dashboardDemos[activeDemo].description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {dashboardDemos[activeDemo].features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
              ))}
            </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                    {Object.entries(dashboardDemos[activeDemo].stats).map(([key, value], index) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key}</div>
              </div>
                    ))}
                  </div>
              </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Speed Breakdown */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Step-by-Step Speed Comparison
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See exactly how Remarkably transforms each part of your grading workflow.
              </p>
            </motion.div>

            <div className="space-y-8">
              {speedComparison.map((comparison, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 shadow-lg"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{comparison.task}</h3>
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-medium">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      {comparison.savings}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Manual Process */}
                    <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Clock className="h-8 w-8 text-red-600" />
                        </div>
                        <h4 className="text-lg font-semibold text-red-700 mb-2">Manual Method</h4>
                        <div className="text-2xl font-bold text-red-700">{comparison.manual.time}</div>
                      </div>
                      <div className="space-y-3">
                        {comparison.manual.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center text-red-700 text-sm font-bold">
                              {stepIndex + 1}
                            </div>
                            <span className="text-red-700">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* AI Process */}
                    <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Zap className="h-8 w-8 text-green-600" />
                        </div>
                        <h4 className="text-lg font-semibold text-green-700 mb-2">Remarkably AI</h4>
                        <div className="text-2xl font-bold text-green-700">{comparison.ai.time}</div>
                      </div>
                      <div className="space-y-3">
                        {comparison.ai.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center text-green-700 text-sm font-bold">
                              {stepIndex + 1}
                            </div>
                            <span className="text-green-700">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Grade 6× Faster?
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Join thousands of teachers who've transformed their grading workflow. Start your free trial and experience instant grading today.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/beta/demo" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Live Demo
              </Link>
              <Link 
                to="/beta/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default InstantGrading;