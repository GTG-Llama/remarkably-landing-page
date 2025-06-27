import React, { useEffect, useState } from 'react';
import SEOHead from '../components/SEOHead';
import AdvancedSEOHead from '../components/AdvancedSEOHead';
import SchemaMarkup from '../components/SchemaMarkup';
import { getPageSEO } from '../utils/seo-config';
import { initSEOMonitoring } from '../utils/seo-optimization';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import SupportedByCarousel from '../components/SupportedByCarousel';
import ROICalculatorSection from '../components/ROICalculatorSection';
import WhitepaperSection from '../components/WhitepaperSection';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Users, 
  Clock, 
  Award, 
  Zap, 
  BookOpen, 
  Target,
  Brain,
  ArrowRight,
  Star,
  Quote,
  Heart,
  Sparkles,
  Calendar,
  Mail,
  Building,
  GraduationCap,
  FileText,
  Play,
  Shield
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
        duration: 0.8,
      },
    },
  };

  const testimonials = [
    {
      quote: "Remarkably has transformed how I grade essays. What used to take me 3 hours now takes just 30 minutes, and the feedback quality is actually better than before.",
      author: "Dr. Sarah Chen",
      role: "English Department Head",
      school: "Singapore International School",
      rating: 5,
      avatar: "/testimonial-avatar-1.jpg"
    },
    {
      quote: "The AI understands my marking style perfectly. It's like having a teaching assistant who never gets tired and maintains consistent standards across all student work.",
      author: "Mr. James Wilson",
      role: "Secondary English Teacher",
      school: "Victoria School",
      rating: 5,
      avatar: "/testimonial-avatar-2.jpg"
    },
    {
      quote: "The student progress tracking feature is incredible. I can now identify struggling students earlier and provide targeted support. My students' writing has improved significantly.",
      author: "Ms. Lisa Tan",
      role: "Primary School Teacher",
      school: "Raffles Girls' Primary School",
      rating: 5,
      avatar: "/testimonial-avatar-3.jpg"
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Upload Essays",
      description: "Simply scan or upload handwritten or digital student essays. Our AI processes multiple formats seamlessly with 99% accuracy.",
      icon: <BookOpen className="w-7 h-7" />,
      gradient: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50"
    },
    {
      step: "02", 
      title: "AI Analysis",
      description: "Advanced algorithms analyze grammar, content, structure, and style while learning your personal marking preferences and teaching standards.",
      icon: <Brain className="w-7 h-7" />,
      gradient: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50"
    },
    {
      step: "03",
      title: "Get Results",
      description: "Receive detailed feedback, grades, and insights in minutes. Review, customize, and send to students instantly with your personal touch.",
      icon: <Target className="w-7 h-7" />,
      gradient: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50"
    }
  ];

  // FAQ data for rich snippets
  const faqData = [
    {
      question: "How much time does Remarkably save teachers?",
      answer: "Teachers report saving 6-7x time on essay grading with Remarkably. What typically takes 15-20 minutes per essay can now be completed in 2-3 minutes."
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

  // How-to data for rich snippets
  const howToData = {
    name: "How to Use Remarkably AI Essay Grading",
    description: "Step-by-step guide to using Remarkably for AI-powered essay grading",
    steps: [
      {
        name: "Upload Essays",
        text: "Simply scan or upload handwritten or digital student essays. Our AI processes multiple formats seamlessly."
      },
      {
        name: "AI Analysis", 
        text: "Advanced algorithms analyze grammar, content, structure, and style while learning your marking preferences."
      },
      {
        name: "Get Results",
        text: "Receive detailed feedback, grades, and insights in minutes. Review, customize, and send to students instantly."
      }
    ]
  };

  // Interactive demo features data
  const demoFeatures = [
    {
      id: 'essay-analysis',
      title: 'AI Essay Analysis',
      description: 'Watch our advanced OCR technology analyze handwritten essays with real-time grammar detection, thesis evaluation, and writing style assessment',
      icon: <Brain className="h-6 w-6" />,
      highlights: [
        'Advanced OCR for messy handwriting',
        'Subject-verb agreement detection', 
        'Thesis clarity evaluation',
        'Built-in plagiarism checking'
      ]
    },
    {
      id: 'grading-process',
      title: 'Lightning-Fast Grading',
      description: 'Experience 5-7x faster grading that reduces essay marking from 15-20 minutes to just 3-5 minutes per essay with MOE-aligned rubrics',
      icon: <Target className="h-6 w-6" />,
      highlights: [
        'MOE-aligned custom rubrics',
        '100% consistent, bias-free scoring',
        'Detailed breakdown with explanations',
        '95%+ grading accuracy rate'
      ]
    },
    {
      id: 'feedback-generation',
      title: 'Teacher-Style Feedback',
      description: 'See how our AI learns your unique feedback style, tone, and depth to generate personalized comments that sound exactly like you',
      icon: <FileText className="h-6 w-6" />,
      highlights: [
        'Mimics your personal teaching style',
        'Real-time essay annotations',
        'Specific improvement suggestions',
        'Progress tracking over time'
      ]
    },
    {
      id: 'batch-processing',
      title: 'Class-Wide Processing',
      description: 'Process entire classes simultaneously with automatic student separation, comparative analytics, and instant LMS integration',
      icon: <Users className="h-6 w-6" />,
      highlights: [
        'Auto-separates multi-essay PDFs',
        'Class performance visualization',
        'Cross-student comparison insights',
        'Direct LMS and Google Drive sync'
      ]
    }
  ];


  // Additional structured data for better SEO
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Remarkably",
    "alternateName": "Lenor AI Pte. Ltd.",
    "url": "https://www.remarkably.ink",
    "logo": "https://www.remarkably.ink/remarkably-logo-black.png",
    "foundingDate": "2023",
    "description": "AI-powered essay grading platform that helps teachers grade 6-7x faster",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SG",
      "addressRegion": "Singapore"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+65-XXXX-XXXX",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Chinese"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/remarkably-ai",
      "https://twitter.com/remarkably_ai"
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
      <SchemaMarkup type="organization" data={organizationData} />
      
      {/* Additional meta tags for mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Hero Section */}
      <HeroSection />

      {/* Value Proposition Summary */}
      <section className="py-16 bg-gradient-to-b from-indigo-50/50 to-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center space-y-12"
          >
            {/* Main Value Proposition */}
            <motion.div variants={itemVariants} className="max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
                <Zap className="h-4 w-4 mr-2" />
                Stop Spending Weekends Grading
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Save <span className="text-indigo-600">Hours Weekly</span> with AI That 
                <span className="text-indigo-600 block">Thinks Like You</span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Grade essays 5-7× faster while maintaining your personal teaching style. 
                Our AI learns your feedback patterns and applies them consistently - proven in pilot program.
              </p>
            </motion.div>

            {/* Key Benefits Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">15 Min → 3 Min</h3>
                <p className="text-gray-600">Reduce grading time from 15-20 minutes to just 3-5 minutes per essay</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">95%+ Accuracy</h3>
                <p className="text-gray-600">AI grading accuracy that matches experienced teachers with consistent standards</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Your Style</h3>
                <p className="text-gray-600">AI learns and mimics your unique feedback style, tone, and marking preferences</p>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-indigo-600">5-7×</div>
                  <div className="text-sm text-gray-600">Faster Grading</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600">400+</div>
                  <div className="text-sm text-gray-600">Essays Graded Monthly</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600">80%</div>
                  <div className="text-sm text-gray-600">Time Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600">95%</div>
                  <div className="text-sm text-gray-600">Teacher Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Supported By Carousel */}
      <section className="py-12 bg-gray-50/50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <p className="text-gray-600 font-medium">
              Pilot program success with MOE school
            </p>
          </div>
          <SupportedByCarousel />
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="section-standard bg-white/60 backdrop-blur-sm relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-indigo-200/40 to-purple-200/40 rounded-full blur-2xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-200/40 to-indigo-200/40 rounded-full blur-2xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
                <Play className="h-4 w-4 mr-2" />
                See Remarkably in Action
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Experience Our 
                <span className="text-indigo-600 block">Key Features</span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover how our AI transforms essay grading through these interactive demonstrations. 
                Click any feature to see it in action.
              </p>
            </motion.div>
            
            {/* Main Demo Interface */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
              
              {/* Left Side - Feature Selection */}
              <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
                <div className="mb-4 lg:mb-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                    Explore Features
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600">
                    Select any feature below to watch it in action
                  </p>
                </div>

                {/* Feature Cards - Mobile Optimized */}
                <div className="space-y-2 lg:space-y-3">
                  {demoFeatures.map((feature, index) => (
                    <motion.button
                      key={feature.id}
                      onClick={() => setActiveDemo(feature.id)}
                      className={`w-full text-left p-4 lg:p-6 rounded-xl lg:rounded-2xl border-2 transition-all duration-300 touch-manipulation ${
                        activeDemo === feature.id
                          ? 'bg-indigo-50 border-indigo-300 shadow-lg'
                          : 'bg-white/80 border-gray-200 hover:border-indigo-200 hover:shadow-md active:scale-95'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: window.innerWidth > 1024 ? 1.02 : 1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-start space-x-3 lg:space-x-4">
                        <div className={`p-2 lg:p-3 rounded-lg lg:rounded-xl transition-colors flex-shrink-0 ${
                          activeDemo === feature.id
                            ? 'bg-indigo-100 text-indigo-600'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {feature.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className={`font-semibold mb-1 lg:mb-2 transition-colors text-sm lg:text-base ${
                            activeDemo === feature.id ? 'text-indigo-900' : 'text-gray-900'
                          }`}>
                            {feature.title}
                          </h4>
                          <p className="text-xs lg:text-sm text-gray-600 mb-2 lg:mb-3 leading-relaxed line-clamp-2 lg:line-clamp-none">
                            {feature.description}
                          </p>
                          <div className="space-y-1 lg:space-y-2 hidden lg:block">
                            {feature.highlights.slice(0, 2).map((highlight, idx) => (
                              <div key={idx} className="flex items-center text-xs text-gray-500">
                                <div className={`w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0 ${
                                  activeDemo === feature.id ? 'bg-indigo-400' : 'bg-gray-400'
                                }`}></div>
                                {highlight}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Right Side - Clean Video Player */}
              <motion.div variants={itemVariants} className="lg:col-span-3">
                <div className="sticky top-24">
                  {/* Clean Video Interface */}
                  <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                    {/* Video Content Area */}
                    <div className="relative aspect-video bg-gray-900">
                      <video
                        key={activeDemo}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster="/video-placeholder.jpg"
                      >
                        <source src="/remarkably.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Mobile optimization overlay */}
                      <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded md:hidden">
                        Tap to pause
                      </div>
                    </div>

                  </div>

                  {/* Call to Action Below Video */}
                  <motion.div variants={itemVariants} className="mt-6 lg:mt-8 text-center">
                    <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6 px-4">
                      Ready to experience the future of essay grading?
                    </p>
                    <div className="flex flex-col gap-3 lg:gap-4 justify-center px-4">
                      <motion.a
                        href="https://app.remarkably.ink"
                        className="btn-primary hover-lift touch-manipulation min-h-[48px]"
                        whileHover={{ scale: window.innerWidth > 1024 ? 1.02 : 1, y: window.innerWidth > 1024 ? -2 : 0 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Start Free Trial
                        <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                      </motion.a>
                      <motion.a
                        href="/beta/contact"
                        className="btn-secondary hover-lift touch-manipulation min-h-[48px]"
                        whileHover={{ scale: window.innerWidth > 1024 ? 1.02 : 1, y: window.innerWidth > 1024 ? -2 : 0 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Calendar className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                        Book Personal Demo
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section - Enhanced */}
      <section className="section-standard bg-white relative overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white" />
        
        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-16"
          >
            {/* Enhanced Section Header */}
            <motion.div variants={itemVariants} className="text-center space-y-6 max-w-4xl mx-auto">
              <div className="badge-primary">
                <Sparkles className="w-4 h-4" />
                Simple & Effective Process
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                How <span className="text-gradient-primary">Remarkably</span> Works
              </h2>
              
              <p className="text-empathetic max-w-3xl mx-auto">
                From essay upload to detailed feedback in just three simple steps. 
                Our AI handles the complexity while you focus on what matters most — teaching.
              </p>
            </motion.div>

            {/* Enhanced Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`group relative ${step.bgColor} rounded-2xl p-6 md:p-8 border border-gray-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 focus-within:ring-2 focus-within:ring-indigo-500/50`}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 10 }
                  }}
                  tabIndex={0}
                  role="article"
                  aria-labelledby={`step-${index}-title`}
                >
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative space-y-6 text-center">
                    {/* Step Number */}
                    <motion.div 
                      className="text-6xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {step.step}
                    </motion.div>
                    
                    {/* Icon */}
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto shadow-lg text-white`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      {step.icon}
                    </motion.div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <h3 
                        id={`step-${index}-title`}
                        className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300"
                      >
                        {step.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Whitepaper Section - Content Depth */}
      <WhitepaperSection />

      {/* ROI Calculator Section */}
      <ROICalculatorSection />

      {/* Enhanced Testimonials Section */}
      <section className="section-standard section-accent relative overflow-hidden">
        {/* Background Elements */}
        <div className="floating-elements">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-2xl opacity-40" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-2xl opacity-40" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-16"
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center space-y-6">
              <div className="badge-success">
                <Heart className="w-4 h-4" />
                Loved by Educators
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                What Educators Are Saying
              </h2>
              
              <p className="text-empathetic max-w-3xl mx-auto">
                Real feedback from teachers who've experienced the transformation 
                from our pilot program and early access testing.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 pt-6">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Shield className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm font-medium">MOE Pilot Program</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Award className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm font-medium">NUS Winner 2024 & 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Users className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm font-medium">Proven Results</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <GraduationCap className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm font-medium">Google Backed</span>
                </div>
              </div>
            </motion.div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card-elevated p-6 md:p-8 hover-lift focus-within:ring-2 focus-within:ring-indigo-500/50"
                  whileHover={{ scale: 1.02 }}
                  tabIndex={0}
                  role="article"
                  aria-labelledby={`testimonial-${index}-author`}
                >
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-6" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                  <div className="space-y-4 mb-6">
                    <Quote className="w-8 h-8 text-indigo-400" aria-hidden="true" />
                    <blockquote className="text-gray-700 leading-relaxed font-medium text-sm md:text-base">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                    
                    {/* Author */}
                  <div className="border-t border-gray-100 pt-6">
                      <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                        <div>
                          <div 
                            id={`testimonial-${index}-author`}
                            className="font-semibold text-gray-900 text-sm md:text-base"
                          >
                            {testimonial.author}
                        </div>
                        <div className="text-xs md:text-sm text-gray-500">{testimonial.role}</div>
                        <div className="text-xs md:text-sm text-gray-400">{testimonial.school}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Final CTA Section */}
      <section className="section-standard bg-white relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center space-y-8 max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="badge-primary">
                <Building className="w-4 h-4" />
                Ready for Your Institution?
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Transform Your Grading Today
              </h2>
              
              <p className="text-empathetic">
                Join educators who've already revolutionized their essay grading process. 
                Start your free trial and experience the difference AI can make for your institution.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
                  <motion.a
                href="/beta/contact"
                className="btn-primary hover-lift group focus:ring-4 focus:ring-indigo-500/50 focus:outline-none"
                whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Schedule an enterprise demo"
                  >
                <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
                Schedule Enterprise Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </motion.a>
                  
                  <motion.a
                href="/beta/contact"
                className="btn-secondary hover-lift group focus:ring-4 focus:ring-gray-500/50 focus:outline-none"
                whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Contact our sales team"
                  >
                <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
                Contact Sales Team
                  </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 pt-6">
              <p className="text-sm text-gray-500">
                <strong className="text-gray-700">Enterprise-ready</strong> • Custom implementation • Dedicated support • Training included
              </p>
              
              {/* Enterprise Features */}
              <div className="flex flex-wrap justify-center items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  SSO Integration
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  Admin Dashboard
                  </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  Bulk User Management
                  </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  Custom Integrations
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