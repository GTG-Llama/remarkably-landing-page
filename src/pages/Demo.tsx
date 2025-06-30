import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { getPageSEO } from '../utils/seo-config';
import CountUp from '../components/CountUp';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  Zap,
  Target,
  Clock,
  Sparkles,
  Brain,
  Users,
  Award,
  Pause,
  Maximize,
  Star,
  Quote,
  TrendingUp,
  MessageSquare,
  Lightbulb,
  PenTool,
  Calendar,
  ChevronRight,
  ExternalLink,
  MousePointer2
} from 'lucide-react';

const Demo: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('essay-analysis');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedComparison, setSelectedComparison] = useState('time');

  // Enhanced demo features with real screenshots and detailed content
  const demoFeatures = [
    {
      id: 'essay-analysis',
      title: 'AI Essay Analysis',
      description: 'Advanced AI analyzes content quality, structure, and writing effectiveness beyond basic grammar checking',
      icon: <Brain className="h-5 w-5" />,
      videoSrc: '/lenordemo1-2.mp4',
      screenshot: '/Essay Grader Dashboard.png',
      processingTime: '45 seconds',
      accuracy: '95%',
      highlights: [
        'Content structure analysis with detailed breakdown',
        'Writing style evaluation and recommendations', 
        'Advanced grammar and syntax checking',
        'Plagiarism detection and originality scoring',
        'Vocabulary sophistication assessment',
        'Logical flow and coherence evaluation'
      ],
      benefits: [
        'Comprehensive feedback beyond surface-level corrections',
        'Identifies areas for improvement with specific suggestions',
        'Maintains consistent evaluation standards',
        'Provides actionable insights for student growth'
      ]
    },
    {
      id: 'grading-process',
      title: 'Automated Grading',
      description: 'Grade complete essays using custom rubrics with unprecedented speed and consistency',
      icon: <Target className="h-5 w-5" />,
      videoSrc: '/lenordemo2.mp4',
      screenshot: '/Grade and User Dashboard.png',
      processingTime: '30 seconds',
      accuracy: '97%',
      highlights: [
        'Custom rubric application and scoring',
        'Detailed scoring breakdown by criteria',
        'Consistent grading standards across all essays',
        'Instant feedback generation with explanations',
        'Grade justification with specific examples',
        'Comparative analysis against class average'
      ],
      benefits: [
        'Eliminates grading bias and inconsistencies',
        'Saves 6-7 hours per week of grading time',
        'Provides transparent scoring methodology',
        'Enables immediate feedback for faster learning'
      ]
    },
    {
      id: 'feedback-generation',
      title: 'Personalized Feedback',
      description: 'Generate detailed, constructive feedback that adapts to your unique teaching style',
      icon: <MessageSquare className="h-5 w-5" />,
      videoSrc: '/lenordemo3-3.mp4',
      screenshot: '/(Student B) Essay Feedback.png',
      processingTime: '25 seconds',
      accuracy: '94%',
      highlights: [
        'Teacher-style learning and mimicking',
        'Constructive and encouraging feedback tone',
        'Specific improvement suggestions with examples',
        'Personalized comments based on student level',
        'Strength identification and reinforcement',
        'Goal-setting recommendations for next steps'
      ],
      benefits: [
        'Maintains your personal teaching voice',
        'Encourages student growth and confidence',
        'Provides specific, actionable guidance',
        'Scales your expertise across all students'
      ]
    },
    {
      id: 'batch-processing',
      title: 'Batch Processing',
      description: 'Grade entire classes simultaneously while maintaining individual attention to each student',
      icon: <Users className="h-5 w-5" />,
      videoSrc: '/remarkably.mp4',
      screenshot: '/Class Avg and Student Scores.png',
      processingTime: '3-5 minutes for 30 essays',
      accuracy: '96%',
      highlights: [
        'Multi-essay processing with individual analysis',
        'Class-wide performance analytics and insights',
        'Comparative scoring and ranking systems',
        'Bulk export capabilities for record keeping',
        'Progress tracking across multiple assignments',
        'Automated report generation for administrators'
      ],
      benefits: [
        'Process entire classes in minutes, not hours',
        'Maintain individual feedback quality at scale',
        'Identify class-wide learning trends',
        'Streamline administrative reporting'
      ]
    },
    {
      id: 'handwriting-recognition',
      title: 'Handwriting OCR',
      description: 'Convert and analyze handwritten essays with industry-leading accuracy across all writing styles',
      icon: <PenTool className="h-5 w-5" />,
      videoSrc: '/remarkably.mp4',
      screenshot: '/(Student B) marking on messy handwriting.png',
      processingTime: '60-90 seconds',
      accuracy: '95%+',
      highlights: [
        'Advanced OCR technology for all handwriting styles',
        'Multiple pen colors and paper types supported',
        'Image preprocessing and enhancement',
        'Text extraction with confidence scoring',
        'Support for various document formats',
        'Batch upload and processing capabilities'
      ],
      benefits: [
        'No need to transition to digital-only assignments',
        'Handles even challenging handwriting accurately',
        'Preserves traditional assessment methods',
        'Enables AI analysis of handwritten work'
      ]
    }
  ];

  const currentFeature = demoFeatures.find(feature => feature.id === activeDemo) || demoFeatures[0];

  // Enhanced statistics with animations
  const stats = [
    { icon: Clock, value: 7, suffix: "×", label: "Faster Grading", description: "Average time savings" },
    { icon: Award, value: 95, suffix: "%", label: "Accuracy Rate", description: "Consistent scoring precision" },
    { icon: FileText, value: 400, suffix: "+", label: "Essays/Month", description: "Currently processed" }
  ];

  // Before/After comparison data
  const comparisonData = {
    time: {
      traditional: { value: "6-8 hours", icon: Clock, color: "text-red-600" },
      remarkably: { value: "45 minutes", icon: Zap, color: "text-green-600" },
      improvement: "7× faster"
    },
    consistency: {
      traditional: { value: "Variable", icon: Target, color: "text-red-600" },
      remarkably: { value: "95% consistent", icon: Award, color: "text-green-600" },
      improvement: "Standardized scoring"
    },
    feedback: {
      traditional: { value: "Basic notes", icon: MessageSquare, color: "text-red-600" },
      remarkably: { value: "Detailed insights", icon: Lightbulb, color: "text-green-600" },
      improvement: "Comprehensive analysis"
    }
  };


  // Trust indicators
  const trustIndicators = [
    { name: "Google for Startups", logo: "/google.png" },
    { name: "NVIDIA Inception", logo: "/nvidia-inception.png" },
    { name: "NUS Enterprise", logo: "/nus-enterprise.png" },
    { name: "MongoDB for Startups", logo: "/mongodb.png" }
  ];

  return (
    <>
      <SEOHead config={getPageSEO('demo')} pageKey="demo" />

      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 pt-20 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-medium mb-8 border border-indigo-200"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Live Demo Experience • Real AI in Action
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight px-4 sm:px-0"
            >
              <span className="block">Experience</span>
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent block">
                AI Grading Magic
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Watch real demonstrations of how Remarkably transforms essay grading. 
              See our AI analyze handwritten essays, generate personalized feedback, and 
              grade entire classes in minutes.
            </motion.p>

            {/* Animated Statistics */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-3 text-indigo-600">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    <CountUp to={stat.value} duration={2} delay={0.8 + index * 0.2} />
                    {stat.suffix}
                  </div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-600">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Floating Testimonial */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 max-w-2xl mx-auto"
            >
              <div className="flex items-start space-x-4">
                <Quote className="h-8 w-8 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700 font-medium italic mb-3">
                    "Remarkably has completely transformed how I grade essays. My students now receive 
                    detailed feedback within minutes, and I save over 6 hours every week."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      SC
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Sarah Chen</div>
                      <div className="text-sm text-gray-600">English Teacher, Singapore International</div>
                    </div>
                    <div className="flex text-yellow-400 ml-auto">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Interactive Demo Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Interactive Feature Demonstration
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Click any feature below to see real AI analysis in action. These are actual screenshots 
                and videos from our platform processing real student essays.
              </p>
            </div>

            {/* Main Demo Interface */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              
              {/* Left Side - Enhanced Feature Selection */}
              <div className="lg:col-span-2 space-y-4">
                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <MousePointer2 className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Select a Feature
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Explore each AI capability with real demonstrations and detailed breakdowns
                  </p>
                </div>

                {demoFeatures.map((feature, index) => (
                  <motion.button
                    key={feature.id}
                    onClick={() => {
                      setActiveDemo(feature.id);
                      setIsVideoPlaying(false);
                    }}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border-2 group ${
                      activeDemo === feature.id
                        ? 'bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-300 shadow-xl'
                        : 'bg-white border-gray-200 hover:border-indigo-200 hover:shadow-lg'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl transition-all duration-300 ${
                        activeDemo === feature.id
                          ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-600 group-hover:bg-indigo-100 group-hover:text-indigo-600'
                      }`}>
                        {feature.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className={`font-bold text-lg transition-colors ${
                            activeDemo === feature.id ? 'text-indigo-900' : 'text-gray-900'
                          }`}>
                            {feature.title}
                          </h4>
                          <div className="flex items-center space-x-2 text-xs">
                            <div className={`px-2 py-1 rounded-full ${
                              activeDemo === feature.id ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-600'
                            }`}>
                              {feature.processingTime}
                            </div>
                            <div className={`px-2 py-1 rounded-full ${
                              activeDemo === feature.id ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                            }`}>
                              {feature.accuracy}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-3">
                          {feature.description}
                        </p>
                        
                        {/* Quick highlights preview */}
                        <div className="space-y-1">
                          {feature.highlights.slice(0, 2).map((highlight, idx) => (
                            <div key={idx} className="flex items-center text-xs text-gray-500">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {highlight}
                            </div>
                          ))}
                          {feature.highlights.length > 2 && (
                            <div className="text-xs text-indigo-600 font-medium">
                              +{feature.highlights.length - 2} more capabilities
                            </div>
                          )}
                        </div>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                        activeDemo === feature.id ? 'text-indigo-600 rotate-90' : 'text-gray-400 group-hover:text-indigo-600'
                      }`} />
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Right Side - Enhanced Video Player & Content */}
              <div className="lg:col-span-3">
                <div className="sticky top-24 space-y-6">
                  
                  {/* Video Player */}
                  <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                    {/* Video Header */}
                    <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-white font-medium">
                            {currentFeature.title} • Live Demo
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <div className="flex items-center space-x-1 text-xs bg-gray-700 px-2 py-1 rounded">
                            <Clock className="w-3 h-3" />
                            {currentFeature.processingTime}
                          </div>
                          <Maximize className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Video Content */}
                    <div className="relative bg-gray-900">
                      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        {isVideoPlaying ? (
                          <video
                            className="w-full h-full object-cover"
                            src={currentFeature.videoSrc}
                            autoPlay
                            muted
                            onEnded={() => setIsVideoPlaying(false)}
                          >
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <div className="relative w-full h-full flex items-center justify-center">
                            {/* Screenshot Preview */}
                            <img 
                              src={currentFeature.screenshot}
                              alt={`${currentFeature.title} screenshot`}
                              className="w-full h-full object-contain"
                            />
                            {/* Play Overlay */}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                              <button
                                onClick={() => setIsVideoPlaying(true)}
                                className="w-20 h-20 bg-indigo-600 hover:bg-indigo-700 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-2xl hover:scale-110"
                              >
                                <Play className="w-8 h-8 ml-2" />
                              </button>
                            </div>
                            {/* Feature Badge */}
                            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-2 rounded-lg">
                              <div className="text-white text-sm font-medium flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span>Live Screenshot</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Video Controls Overlay */}
                      {isVideoPlaying && (
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center justify-between text-white">
                            <button
                              onClick={() => setIsVideoPlaying(false)}
                              className="flex items-center space-x-2 hover:text-indigo-300 transition-colors"
                            >
                              <Pause className="w-4 h-4" />
                              <span className="text-sm">Pause Demo</span>
                            </button>
                            <div className="text-sm text-gray-300 flex items-center space-x-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                              Live Demo - {currentFeature.title}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Feature Details Panel */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-xl font-bold text-gray-900">Feature Breakdown</h4>
                        <div className="flex items-center space-x-2">
                          <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                            {currentFeature.accuracy} Accuracy
                          </div>
                          <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                            {currentFeature.processingTime}
                          </div>
                        </div>
                      </div>

                      {/* Capabilities Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {currentFeature.highlights.map((highlight, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                          >
                            <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700 font-medium">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Benefits Section */}
                      <div className="border-t border-gray-100 pt-6">
                        <h5 className="font-semibold text-gray-900 mb-3">Key Benefits</h5>
                        <div className="space-y-2">
                          {currentFeature.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-600">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href="https://app.remarkably.ink"
                          className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
                        >
                          Try This Feature Now
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                        <Link
                          to="/contact"
                          className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border border-gray-200 transition-colors"
                        >
                          Book Personal Demo
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Comparison Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Traditional vs AI-Powered Grading
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See the dramatic difference Remarkably makes in your daily workflow
              </p>
            </div>

            {/* Comparison Toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
                {Object.keys(comparisonData).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedComparison(key)}
                    className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                      selectedComparison === key
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Comparison Cards */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedComparison}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {/* Traditional Method */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {React.createElement(comparisonData[selectedComparison].traditional.icon, { className: "w-8 h-8 text-red-600" })}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Traditional Method</h3>
                    <div className={`text-3xl font-bold mb-2 ${comparisonData[selectedComparison].traditional.color}`}>
                      {comparisonData[selectedComparison].traditional.value}
                    </div>
                    <p className="text-gray-600 text-sm">Manual grading process</p>
                  </div>
                </div>

                {/* Improvement Arrow */}
                <div className="flex items-center justify-center">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-4 shadow-lg">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Remarkably Method */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-indigo-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {React.createElement(comparisonData[selectedComparison].remarkably.icon, { className: "w-8 h-8 text-green-600" })}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">With Remarkably</h3>
                    <div className={`text-3xl font-bold mb-2 ${comparisonData[selectedComparison].remarkably.color}`}>
                      {comparisonData[selectedComparison].remarkably.value}
                    </div>
                    <p className="text-indigo-600 text-sm font-medium">
                      {comparisonData[selectedComparison].improvement}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Trust & Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Leading Institutions
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Backed by industry leaders and adopted by educators worldwide
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <img 
                    src={indicator.logo} 
                    alt={indicator.name}
                    className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>

            {/* Key Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <Award className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">MOE Singapore Adoption</h3>
                <p className="text-gray-600 text-sm">
                  Officially adopted by Ministry of Education schools across Singapore
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">95%+ Accuracy Rate</h3>
                <p className="text-gray-600 text-sm">
                  Consistently outperforms traditional grading methods in accuracy and consistency
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">-7× Time Savings</h3>
                <p className="text-gray-600 text-sm">
                  Teachers report saving 6-7 hours per week on grading tasks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Grading Workflow?
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Join thousands of educators who've revolutionized their teaching with AI-powered grading. 
                Start your free trial today and experience the future of education.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="https://app.remarkably.ink"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
                >
                  Book Personal Demo
                  <Calendar className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <div className="text-indigo-100 text-sm">
                <div className="flex items-center justify-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Setup in under 5 minutes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Demo;