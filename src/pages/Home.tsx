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

// Interactive Demo Component 1
const HowItWorksDemo1: React.FC = () => {
  const [activeFeature1, setActiveFeature1] = useState('upload');

  const features1 = [
    {
      id: 'analysis',
      title: 'Comprehensive AI Analysis',
      description: 'AI evaluates content quality, narrative structure, vocabulary usage, and writing effectiveness. Goes beyond grammar to assess literary elements and coherence.',
      icon: <Brain className="h-6 w-6" />,
      image: '/Essay Grader Dashboard.png',
      alt: 'Comprehensive AI analysis dashboard showing detailed essay evaluation'
    },
    {
      id: 'recognition',
      title: 'Handwriting Recognition',
      description: 'Advanced OCR technology reads even messy handwriting with 95%+ accuracy. Handles different pen colors, paper types, and writing styles automatically.',
      icon: <FileText className="h-6 w-6" />,
      image: '/(Student B) marking on messy handwriting.png',
      alt: 'Handwriting recognition processing messy student handwriting'
    },
    {
      id: 'upload',
      title: 'Upload Essays',
      description: 'Drag and drop or upload handwritten/digital essays in multiple formats. Supports PDF, images, Word docs, and more. Bulk upload entire classes at once.',
      icon: <Upload className="h-6 w-6" />,
      image: '/PDF Splitter.png',
      alt: 'PDF splitter interface showing essay upload process'
    },
  ];

  const currentFeature1 = features1.find(f => f.id === activeFeature1) || features1[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 max-w-7xl mx-auto items-center">
      {/* Feature Selection - Left Side */}
      <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="lg:col-span-2">
        <div className="w-full space-y-3">
          {features1.map((feature) => (
            <motion.button
              key={feature.id}
              onClick={() => setActiveFeature1(feature.id)}
              className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer ${
                activeFeature1 === feature.id
                  ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-400 shadow-xl'
                  : 'bg-white border-gray-200 hover:border-indigo-300 hover:shadow-lg'
              }`}
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg transition-all duration-300 ${
                  activeFeature1 === feature.id
                    ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-indigo-100 hover:text-indigo-600'
                }`}>
                  <div className="text-lg">
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className={`font-bold text-base mb-1 transition-colors ${
                    activeFeature1 === feature.id ? 'text-indigo-900' : 'text-gray-900'
                  }`}>
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Dynamic Image Display - Right Side */}
      <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="lg:col-span-4">
        <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-2xl relative">
          <motion.img
            key={activeFeature1}
            src={currentFeature1.image}
            alt={currentFeature1.alt}
            className="w-full h-full object-cover"
            loading="lazy"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

// Interactive Demo Component 2
const HowItWorksDemo2: React.FC = () => {
  const [activeFeature2, setActiveFeature2] = useState('grading');

  const features2 = [
    {
      id: 'grading',
      title: 'Smart Grading',
      description: 'AI applies your custom rubrics and grading criteria automatically. Ensures consistent evaluation across all students while maintaining your unique teaching standards and expectations.',
      icon: <Target className="h-6 w-6" />,
      image: '/Grading Interface .png',
      alt: 'Smart grading interface with rubric application'
    },
    {
      id: 'feedback',
      title: 'Personalized Feedback Generation',
      description: 'Creates detailed, constructive feedback that matches your teaching voice and style. Identifies strengths, areas for improvement, and provides specific suggestions for student growth.',
      icon: <MessageSquare className="h-6 w-6" />,
      image: '/(Student B) Essay Feedback.png',
      alt: 'Detailed essay feedback interface with personalized comments'
    },
    {
      id: 'analytics',
      title: 'Progress Analytics & Insights',
      description: 'Track individual student progress, class performance trends, and common areas for improvement. Generate reports for parents, administrators, and curriculum planning.',
      icon: <BarChart3 className="h-6 w-6" />,
      image: '/Score Distribution and Improvement.png',
      alt: 'Analytics dashboard showing score distribution and improvements'
    }
  ];

  const currentFeature2 = features2.find(f => f.id === activeFeature2) || features2[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 max-w-7xl mx-auto items-center">
      {/* Feature Selection - Left Side */}
      <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="lg:col-span-2">
        <div className="w-full space-y-3">
          {features2.map((feature) => (
            <motion.button
              key={feature.id}
              onClick={() => setActiveFeature2(feature.id)}
              className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer ${
                activeFeature2 === feature.id
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-400 shadow-xl'
                  : 'bg-white border-gray-200 hover:border-green-300 hover:shadow-lg'
              }`}
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg transition-all duration-300 ${
                  activeFeature2 === feature.id
                    ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-600'
                }`}>
                  <div className="text-lg">
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className={`font-bold text-base mb-1 transition-colors ${
                    activeFeature2 === feature.id ? 'text-green-900' : 'text-gray-900'
                  }`}>
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Dynamic Image Display - Right Side */}
      <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="lg:col-span-4">
        <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-2xl relative">
          <motion.img
            key={activeFeature2}
            src={currentFeature2.image}
            alt={currentFeature2.alt}
            className="w-full h-full object-cover"
            loading="lazy"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

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
      description: "Stop spending hours grading. Get 8+ hours back weekly to focus on teaching and life.",
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
      title: "Mimics your marking style",
      description: "Provide detailed, constructive feedback that helps students improve while saving time.",
      gradient: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50", 
      textColor: "text-amber-700"
    }
  ];

  // Testimonials with teacher focus
  const testimonials = [
    {
      // name: "",
      role: "Private Tutor",
      content: "Remarkably gave me my weekends back. I can finally focus on lesson planning instead of endless grading!",
      rating: 5,
      avatar: "T"
    },
    {
      role: "English Teacher, Lianhua Primary School", 
      content: "With Remarkably, I cut grading time from 15 minutes to 3 minutes per essay. Beyond speed, it's helped me give clearer, more meaningful feedback to support my students' growth.",
      rating: 5,
      avatar: "MW"
    },
    {
      name: "Mavis Low",
      role: "Singapore Ministry of Education School, Vice Principal",
      content: "Engaging the services of the Remarkably was a strategic decision to reduce the time spent on marking, allowing teachers to focus on higher-value tasks such as lesson preparation, personalised student support like more time nuturing students' writing skills.",
      rating: 5,
      avatar: "PS"
    }
  ];

  // FAQ data for SEO
  const faqData = [
    {
      question: "How accurate is Remarkably's AI grading?",
      answer: "Remarkably achieves 95%+ accuracy in grading, matching experienced teachers' assessments. Our AI is specifically trained on Singapore's education standards."
    },
    {
      question: "Can Remarkably grade handwritten essays?",
      answer: "Yes! Remarkably uses advanced OCR technology to read handwritten essays, then applies AI grading with 95%+ accuracy."
    },
    {
      question: "Is Remarkably suitable for all schools?",
      answer: "Absolutely! Remarkably can tailor a solution for your school education system, supporting any type of curriculum standards, rubrics and customization you want."
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

      {/* 3. How It Works Section - Part 1 */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Play className="h-4 w-4 mr-2" />
                How It Works - Part 1
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Upload & Analysis Process
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                See how Remarkably processes your essays from upload to analysis
              </p>
            </motion.div>
            
            {/* Demo Interface */}
            <HowItWorksDemo1 />
          </motion.div>
        </div>
      </section>

      {/* 4. How It Works Section - Part 2 */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                <Target className="h-4 w-4 mr-2" />
                How It Works - Part 2
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Grading & Feedback Process
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Watch how AI generates grades and personalized feedback
              </p>
            </motion.div>
            
            {/* Demo Interface */}
            <HowItWorksDemo2 />
          </motion.div>
        </div>
      </section>

      {/* 5. Interactive Demo Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white" data-demo-section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Content removed */}
        </div>
      </section>

      {/* 6. Enhanced Statistics Section */}
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
                { value: "8hrs", label: "Time Saved Weekly", description: "Per teacher average", icon: <Calendar className="w-8 h-8" /> },
                { value: "2000+", label: "Users", description: "Across multiple schools", icon: <Users className="w-8 h-8" /> },
                { value: "99%", label: "Teacher Satisfaction", description: "Would recommend", icon: <Heart className="w-8 h-8" /> },
                { value: "MOE", label: "Schools Approved", description: "Trusted by Singapore Government Schools", icon: <Award className="w-8 h-8" /> },
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

      {/* 7. Core Benefits Section */}
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

      {/* 8. Comprehensive Features Section */}
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

      {/* 9. FAQ Section */}
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
                // {
                //   question: "How secure is student data?",
                //   answer: "We use enterprise-grade security with end-to-end encryption, GDPR compliance, and strict data privacy policies. Student data is never shared or used for training."
                // },
                // {
                //   question: "Can I integrate with my existing LMS?",
                //   answer: "Yes! Remarkably integrates with popular learning management systems including Google Classroom, Canvas, and Moodle."
                // }
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

      {/* 10. Security & Trust Section */}
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
                  title: "MOE Schools",
                  description: "Approved"
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


    </>
  );
};

export default Home; 