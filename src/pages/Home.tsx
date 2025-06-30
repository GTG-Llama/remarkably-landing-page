import React, { useEffect, useState } from 'react';
import SEOHead from '../components/SEOHead';
import AdvancedSEOHead from '../components/AdvancedSEOHead';
import SchemaMarkup from '../components/SchemaMarkup';
import { getPageSEO } from '../utils/seo-config';
import { initSEOMonitoring } from '../utils/seo-optimization';
import ImprovedHeroSection from '../components/ImprovedHeroSection';
import SupportedByCarousel from '../components/SupportedByCarousel';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Clock, 
  Heart, 
  Award, 
  BookOpen, 
  Sparkles,
  Play,
  ArrowRight,
  Upload,
  Zap,
  Target,
  FileText,
  Users,
  Star,
  Brain,
  Calendar,
  Shield,
  Lightbulb,
  TrendingUp,
  BarChart3,
  MessageSquare,
  CreditCard
} from 'lucide-react';

const Home: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('essay-analysis');

  useEffect(() => {
    initSEOMonitoring();
  }, []);

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
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  // Streamlined demo features (3 instead of 5)
  const demoFeatures = [
    {
      id: 'essay-analysis',
      title: 'AI Essay Analysis',
      description: 'Watch our AI analyze essay structure, grammar, and content in real-time',
      icon: <Brain className="h-6 w-6" />,
      videoSrc: '/remarkably.mp4',
      highlights: [
        'Real-time grammar detection',
        'Content structure analysis',
        'Writing style evaluation',
        'Plagiarism checking'
      ]
    },
    {
      id: 'grading-feedback',
      title: 'Smart Grading & Feedback',
      description: 'See how we grade essays and generate personalized feedback in your teaching style',
      icon: <Target className="h-6 w-6" />,
      videoSrc: '/remarkably.mp4',
      highlights: [
        'Custom rubric application',
        'Teacher-style feedback',
        'Detailed scoring breakdown',
        'Instant results'
      ]
    },
    {
      id: 'batch-processing',
      title: 'Batch Processing',
      description: 'Grade an entire class of essays simultaneously with consistent quality',
      icon: <Users className="h-6 w-6" />,
      videoSrc: '/remarkably.mp4',
      highlights: [
        'Multi-essay processing',
        'Class-wide analytics',
        'Export capabilities',
        'Time tracking'
      ]
    }
  ];

  const currentFeature = demoFeatures.find(feature => feature.id === activeDemo) || demoFeatures[0];

  // Key benefits (outcomes over features)
  const benefits = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Get Your Weekends Back",
      description: "Stop spending hours grading. Get 6-7 hours back weekly to focus on teaching and life.",
      gradient: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-700"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Never Worry About Consistency",
      description: "Apply the same grading standards across all essays with AI precision that matches your style.",
      gradient: "from-blue-500 to-indigo-600", 
      bgColor: "bg-blue-50",
      textColor: "text-blue-700"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Give Better Feedback, Faster",
      description: "Provide detailed, constructive feedback that helps students improve while saving time.",
      gradient: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50", 
      textColor: "text-amber-700"
    }
  ];

  // Testimonials with teacher focus
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "English Teacher, Raffles Institution",
      content: "Remarkably gave me my weekends back. I can finally focus on lesson planning instead of endless grading!",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Wong",
      role: "HOD English, Hwa Chong Institution", 
      content: "The consistency is amazing. All my teachers now grade with the same standards, and students love the detailed feedback.",
      rating: 5,
      avatar: "MW"
    },
    {
      name: "Priya Sharma",
      role: "Secondary Teacher, NUS High School",
      content: "I was skeptical about AI grading, but Remarkably actually writes feedback in MY style. It's incredible!",
      rating: 5,
      avatar: "PS"
    }
  ];

  // FAQ data for SEO
  const faqData = [
    {
      question: "How accurate is Remarkably's AI grading?",
      answer: "Remarkably achieves 90%+ accuracy in grading, matching experienced teachers' assessments. Our AI is specifically trained on Singapore's education standards."
    },
    {
      question: "Can Remarkably grade handwritten essays?",
      answer: "Yes! Remarkably uses advanced OCR technology to convert handwritten text into digital format, then applies AI grading with 95%+ accuracy."
    },
    {
      question: "Is Remarkably suitable for Singapore MOE schools?",
      answer: "Absolutely! Remarkably is specifically designed for Singapore's education system, supporting MOE curriculum standards and trusted by multiple MOE schools."
    }
  ];

  // How-to data for SEO
  const howToData = {
    name: "How to Use Remarkably AI Essay Grading",
    description: "Step-by-step guide to using Remarkably for AI-powered essay grading",
    steps: [
      { name: "Upload Essays", text: "Upload handwritten or digital essays in seconds" },
      { name: "AI Analysis", text: "Our AI analyzes content, grammar, and structure" },
      { name: "Get Results", text: "Receive detailed feedback and grades instantly" }
    ]
  };

  return (
    <>
      <SEOHead config={getPageSEO('home')} pageKey="home" />
      <AdvancedSEOHead 
        pageType="homepage"
        richSnippets={{
          faq: faqData,
          howTo: howToData.steps
        }}
      />
      <SchemaMarkup type="howto" data={howToData} />
      
      {/* 1. Enhanced Hero Section */}
      <ImprovedHeroSection />

      {/* 2. Trusted Institutions Carousel Banner */}
      <section className="py-8 bg-gray-50/50 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center space-y-6"
          >
            {/* Simple trust statement */}
            <motion.div variants={itemVariants}>
              <p className="text-gray-600 font-medium">Trusted by leading educational institutions</p>
            </motion.div>

            {/* Clean carousel banner */}
            <motion.div variants={itemVariants} className="relative">
              <SupportedByCarousel />
            </motion.div>


          </motion.div>
        </div>
      </section>

      {/* 3. How It Works Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Zap className="h-4 w-4 mr-2" />
                Simple Process
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                How Remarkably Works
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Get started with AI-powered essay grading in three simple steps
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {howToData.steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <span className="text-2xl font-bold text-white">{index + 1}</span>
                    </div>
                    {index < howToData.steps.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-purple-300 transform -translate-x-2"></div>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.name}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{step.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="text-center mt-12">
              <a
                href="https://app.remarkably.ink"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Interactive Demo Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white" data-demo-section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Demo Header */}
            <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
                <Play className="h-4 w-4 mr-2" />
                See Remarkably in Action
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Watch How It Works
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Experience our core features through interactive demonstrations
              </p>
            </motion.div>
            
            {/* Demo Interface */}
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
              
              {/* Feature Selection - Compact */}
              <motion.div variants={itemVariants} className="lg:col-span-2 flex items-center">
                <div className="w-full space-y-3">
                  {demoFeatures.map((feature) => (
                    <motion.button
                      key={feature.id}
                      onClick={() => setActiveDemo(feature.id)}
                      className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-300 shadow-md hover:shadow-lg ${
                        activeDemo === feature.id
                          ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-400 shadow-xl'
                          : 'bg-white border-gray-200 hover:border-indigo-300 hover:shadow-lg'
                      }`}
                      whileHover={{ scale: 1.01, y: -2 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg transition-all duration-300 ${
                          activeDemo === feature.id
                            ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md'
                            : 'bg-gray-100 text-gray-600 hover:bg-indigo-100 hover:text-indigo-600'
                        }`}>
                          <div className="text-lg">
                            {feature.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-bold text-base mb-1 transition-colors ${
                            activeDemo === feature.id ? 'text-indigo-900' : 'text-gray-900'
                          }`}>
                            {feature.title}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {feature.description.split(',')[0]}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Clean Video Player */}
              <motion.div variants={itemVariants} className="lg:col-span-4">
                <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    poster="/hero-video-fallback.svg"
                    preload="metadata"
                  >
                    <source src="/remarkably.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Optional overlay for branding */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-sm font-medium">Remarkably Demo</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Enhanced Statistics Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="h-4 w-4 mr-2" />
                Proven Results
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                The Numbers Speak for Themselves
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Real data from teachers and schools using Remarkably
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { value: "7×", label: "Faster Grading", description: "Average time reduction", icon: <Clock className="w-8 h-8" /> },
                { value: "95%+", label: "Accuracy Rate", description: "Matches teacher grading", icon: <Target className="w-8 h-8" /> },
                { value: "400+", label: "Essays/Month", description: "Currently processed", icon: <FileText className="w-8 h-8" /> },
                { value: "6-7hrs", label: "Time Saved Weekly", description: "Per teacher average", icon: <Calendar className="w-8 h-8" /> },
                { value: "2000+", label: "Users", description: "Across multiple schools", icon: <Users className="w-8 h-8" /> },
                { value: "99%", label: "Teacher Satisfaction", description: "Would recommend", icon: <Heart className="w-8 h-8" /> },
                { value: "MOE", label: "Singapore Approved", description: "Trusted by schools", icon: <Award className="w-8 h-8" /> },
                { value: "24/7", label: "Always Available", description: "Grade anytime", icon: <Sparkles className="w-8 h-8" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-indigo-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Core Benefits Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="h-4 w-4 mr-2" />
                Real Benefits for Teachers
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Why Teachers Love Remarkably
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Focus on what matters most - teaching and connecting with students
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-3xl p-10 border border-gray-200/50 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Enhanced gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="text-center space-y-8 relative z-10">
                    <motion.div 
                      className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mx-auto shadow-2xl text-white group-hover:scale-110 transition-all duration-300`}
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity, 
                        delay: index * 1.2,
                        ease: "easeInOut" 
                      }}
                    >
                      <div className="text-3xl">
                        {benefit.icon}
                      </div>
                    </motion.div>
                    
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900 leading-tight">{benefit.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Comprehensive Features Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4 mr-2" />
                Powerful Features
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Everything You Need for AI Grading
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive tools designed specifically for educators
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Handwriting Recognition",
                  description: "Advanced OCR technology reads handwritten essays with 90%+ accuracy, supporting various handwriting styles and formats.",
                  gradient: "from-blue-500 to-indigo-600"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Teacher Style Learning",
                  description: "AI adapts to your unique grading style and feedback preferences, ensuring consistent and personalized assessments.",
                  gradient: "from-purple-500 to-pink-600"
                },
                {
                  icon: <Upload className="w-8 h-8" />,
                  title: "Custom Rubric Upload",
                  description: "Upload your own rubrics and grading criteria. AI follows your exact standards for consistent evaluation.",
                  gradient: "from-green-500 to-teal-600"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Batch Processing",
                  description: "Grade entire classes simultaneously while maintaining individual attention and detailed feedback for each student.",
                  gradient: "from-orange-500 to-red-600"
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Analytics Dashboard",
                  description: "Track student progress, identify common issues, and generate detailed reports for parents and administrators.",
                  gradient: "from-cyan-500 to-blue-600"
                },
                {
                  icon: <MessageSquare className="w-8 h-8" />,
                  title: "Personalized Feedback",
                  description: "Generate detailed, constructive feedback that matches your teaching style and helps students improve their writing.",
                  gradient: "from-yellow-500 to-orange-600"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Data Security",
                  description: "Enterprise-grade security with GDPR compliance, ensuring student data is protected and private.",
                  gradient: "from-gray-500 to-slate-600"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Instant Results",
                  description: "Get detailed grades and feedback in seconds, not hours. Save time while providing better assessment quality.",
                  gradient: "from-violet-500 to-purple-600"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform shadow-lg`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-6">
                <BookOpen className="h-4 w-4 mr-2" />
                Questions & Answers
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Frequently Asked Questions
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Everything you need to know about Remarkably
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                ...faqData,
                {
                  question: "What pricing plans are available?",
                  answer: "We offer flexible pricing starting from $29/month for individual teachers, with school-wide plans available. All plans include a free trial period."
                },
                {
                  question: "How secure is student data?",
                  answer: "We use enterprise-grade security with end-to-end encryption, GDPR compliance, and strict data privacy policies. Student data is never shared or used for training."
                },
                {
                  question: "Can I integrate with my existing LMS?",
                  answer: "Yes! Remarkably integrates with popular learning management systems including Google Classroom, Canvas, and Moodle."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. Security & Trust Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-6">
                <Shield className="h-4 w-4 mr-2" />
                Security & Trust
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Built for Educational Institutions
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Enterprise security and compliance you can trust
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "GDPR Compliant",
                  description: "Full compliance with data protection regulations"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "MOE Trusted",
                  description: "Approved by Singapore Ministry of Education"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "SOC 2 Certified",
                  description: "Industry-standard security certification"
                },
                {
                  icon: <BookOpen className="w-8 h-8" />,
                  title: "Educational Focus",
                  description: "Designed specifically for academic environments"
                }
              ].map((trust, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-8 shadow-lg text-center group hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-slate-600 group-hover:bg-slate-200 transition-colors">
                    {trust.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{trust.title}</h3>
                  <p className="text-gray-600 text-sm">{trust.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. Pricing Preview Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
                <CreditCard className="h-4 w-4 mr-2" />
                Simple Pricing
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Choose Your Plan
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Flexible options for teachers and schools
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Teacher",
                  price: "$29",
                  period: "/month",
                  description: "Perfect for individual educators",
                  features: ["Up to 100 essays/month", "Personal feedback style", "Basic analytics", "Email support"],
                  popular: false
                },
                {
                  name: "School",
                  price: "$99",
                  period: "/month",
                  description: "For small schools and departments",
                  features: ["Up to 500 essays/month", "Multiple teacher styles", "Advanced analytics", "Priority support", "Custom rubrics"],
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "",
                  description: "For large institutions",
                  features: ["Unlimited essays", "Full customization", "Dedicated support", "API access", "On-premise option"],
                  popular: false
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                    plan.popular ? 'border-2 border-indigo-500 scale-105' : 'border border-gray-200'
                  }`}
                  whileHover={{ y: -5, scale: plan.popular ? 1.05 : 1.02 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="https://app.remarkably.ink"
                    className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 text-center block ${
                      plan.popular
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Get Started
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 11. Testimonials & Final CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Testimonials */}
            <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Join 2,000+ Happy Teachers
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
                    whileHover={{ y: -6, scale: 1.02 }}
                  >
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-6">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                        ))}
                      </div>
                      
                      <p className="text-gray-700 mb-8 leading-relaxed text-lg italic font-medium">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                          <div className="text-base text-gray-600 font-medium">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Final CTA */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-200 max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Ready to Get Your Time Back?
                </h3>
                <p className="text-xl text-gray-600 mb-8">
                  Join thousands who've transformed their grading workflow with AI
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://app.remarkably.ink"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group transform hover:scale-105"
                  >
                    Try For Free!
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home; 