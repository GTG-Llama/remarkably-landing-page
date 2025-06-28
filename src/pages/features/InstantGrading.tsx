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
  Eye
} from 'lucide-react';

const InstantGrading: React.FC = () => {
  const [userType, setUserType] = useState<'teachers' | 'schools'>('teachers');

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

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "High School English Teacher",
      school: "Lincoln High School",
      avatar: "/testimonial-avatars/sarah.jpg",
      content: "Remarkably has transformed my grading workflow. What used to take me an entire weekend now takes just 2 hours. The feedback quality is incredible - my students are getting more detailed comments than I could ever provide manually.",
      rating: 5,
      highlight: "From 8 hours to 2 hours"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Department Head",
      school: "Roosevelt Middle School",
      avatar: "/testimonial-avatars/michael.jpg",
      content: "The consistency across our department has improved dramatically. All teachers now apply the same standards, and our assessment data is more reliable than ever. The time savings allow us to focus on actual teaching.",
      rating: 5,
      highlight: "Department-wide consistency"
    },
    {
      name: "Jennifer Park",
      role: "AP Literature Teacher",
      school: "Washington Academy",
      avatar: "/testimonial-avatars/jennifer.jpg",
      content: "The speed is incredible, but what really impressed me is the accuracy. The AI catches nuances in student arguments that I might miss when I'm tired. It's like having a teaching assistant that never gets fatigued.",
      rating: 5,
      highlight: "95% accuracy rate"
    }
  ];

  const keyStats = [
    {
      value: "5-7×",
      label: "Faster Grading",
      description: "Average time reduction across all teachers",
      icon: <Clock className="h-6 w-6" />
    },
    {
      value: "95%",
      label: "Accuracy Rate",
      description: "Matches expert teacher evaluations",
      icon: <Target className="h-6 w-6" />
    },
    {
      value: "< 60s",
      label: "Per Essay",
      description: "Complete analysis and feedback",
      icon: <Timer className="h-6 w-6" />
    },
    {
      value: "10K+",
      label: "Essays Graded",
      description: "Successfully processed this month",
      icon: <TrendingUp className="h-6 w-6" />
    }
  ];

  const howItWorksSteps = [
    {
      step: "01",
      title: "Upload & Process",
      description: "Upload handwritten or digital essays in any format. Our AI instantly recognizes and processes the content.",
      icon: <FileText className="h-8 w-8" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      step: "02",
      title: "AI Analysis",
      description: "Advanced algorithms analyze content quality, structure, grammar, and argument strength in real-time.",
      icon: <Zap className="h-8 w-8" />,
      color: "from-indigo-500 to-purple-600"
    },
    {
      step: "03",
      title: "Instant Results",
      description: "Receive comprehensive grades, detailed feedback, and rubric scores ready for immediate student review.",
      icon: <Award className="h-8 w-8" />,
      color: "from-purple-500 to-pink-600"
    }
  ];

  const benefits = {
    teachers: [
      {
        icon: <Clock className="h-6 w-6" />,
        title: "Grade 50 Essays in 2 Hours",
        description: "What used to take an entire weekend now takes just 2 hours. Grade faster without sacrificing quality."
      },
      {
        icon: <Target className="h-6 w-6" />,
        title: "Consistent Standards",
        description: "Apply the same grading criteria every time - no more variation based on mood or fatigue."
      },
      {
        icon: <Award className="h-6 w-6" />,
        title: "Detailed Rubric Scoring",
        description: "Every essay gets scored against your custom rubrics with specific explanations for each category."
      }
    ],
    schools: [
      {
        icon: <Building className="h-6 w-6" />,
        title: "Department-Wide Consistency",
        description: "Ensure all teachers apply the same grading standards across the entire department or school."
      },
      {
        icon: <BarChart3 className="h-6 w-6" />,
        title: "Real-Time Performance Data",
        description: "Monitor class performance across multiple teachers and identify trends instantly."
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Scalable Assessment",
        description: "Grade hundreds of essays simultaneously during peak assessment periods like finals."
      }
    ]
  };

  const gradingSteps = [
    {
      step: "1",
      title: "Upload Essays",
      description: "Upload handwritten or digital essays in any format - PDF, images, or documents.",
      icon: <FileText className="h-6 w-6" />,
      time: "< 30s"
    },
    {
      step: "2", 
      title: "AI Analysis",
      description: "Our AI reads, analyzes content structure, grammar, and argument quality.",
      icon: <Zap className="h-6 w-6" />,
      time: "< 60s"
    },
    {
      step: "3",
      title: "Instant Results",
      description: "Receive detailed grades, scores, and feedback ready for student review.",
      icon: <Target className="h-6 w-6" />,
      time: "< 10s"
    }
  ];

  const speedComparison = [
    {
      task: "Grade 30 essays",
      traditional: "8-10 hours",
      remarkably: "90 minutes",
      savings: "Save 7+ hours"
    },
    {
      task: "Provide detailed feedback",
      traditional: "15-20 min per essay",
      remarkably: "3-5 min per essay",
      savings: "5-7× faster"
    },
    {
      task: "Calculate final scores",
      traditional: "Manual calculation",
      remarkably: "Instant calculation",
      savings: "100% automated"
    }
  ];

  return (
    <>
      <SEOHead 
        config={{
          title: "Instant Grading - Grade Essays 5-7× Faster | Remarkably",
          description: "Grade handwritten and digital essays in under 60 seconds with detailed feedback and rubric scoring. Experience 5-7× faster grading with AI.",
          keywords: ["instant grading", "fast essay assessment", "AI grading", "automated scoring", "teacher productivity"]
        }} 
        pageKey="instant-grading" 
      />

      {/* Breadcrumb Navigation */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/beta" className="text-gray-600 hover:text-indigo-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/beta/features" className="text-gray-600 hover:text-indigo-600">Features</Link>
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
              <Link to="/beta/features" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors font-medium">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Features
              </Link>

              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
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
                  Transform your grading workflow with AI that delivers detailed feedback, rubric scoring, and comprehensive analysis in record time.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/beta/demo" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
                <Link 
                  to="/beta/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                {keyStats.slice(0, 3).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-indigo-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Demo Video */}
            <motion.div variants={itemVariants} className="relative">
              <ComponentErrorBoundary
                componentName="Instant Grading Demo"
                fallback={
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-96 flex items-center justify-center shadow-2xl">
                    <div className="text-center">
                      <Play className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 font-medium">Demo video loading...</p>
                    </div>
                  </div>
                }
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                  <video 
                    className="w-full h-auto" 
                    poster="/Grading Interface .png"
                    controls 
                    muted 
                    playsInline
                    style={{ aspectRatio: '16/9' }}
                  >
                    <source src="/lenordemo2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
              </ComponentErrorBoundary>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-2 shadow-lg border border-gray-200">
                <div className="flex items-center gap-2">
                  <Timer className="h-4 w-4 text-indigo-600" />
                  <span className="text-sm font-semibold text-gray-900">Live Demo</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Statistics */}
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
                Trusted by Educators Worldwide
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from teachers and schools using Remarkably's instant grading technology.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {keyStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Type Selector */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose Your Perspective</h2>
            <div className="inline-flex rounded-xl bg-white p-1 border border-gray-200 shadow-sm">
              <button
                onClick={() => setUserType('teachers')}
                className={`px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  userType === 'teachers'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                For Teachers
              </button>
              <button
                onClick={() => setUserType('schools')}
                className={`px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  userType === 'schools'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                For Schools
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
                <Lightbulb className="h-4 w-4 mr-2" />
                Simple & Powerful
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How Instant Grading Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform essays into detailed grades and feedback in three simple steps, powered by advanced AI technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {howItWorksSteps.map((step, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Connection Line */}
                  {index < 2 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-10"></div>
                  )}
                  
                  <div className="text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>
                    <div className="text-sm font-bold text-gray-400 mb-2">{step.step}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Speed Comparison */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Speed Comparison</h3>
                <p className="text-gray-600">See how Remarkably transforms your grading workflow</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-sm">
                  <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold rounded-tl-xl">Task</th>
                      <th className="px-6 py-4 text-left font-semibold">Traditional Method</th>
                      <th className="px-6 py-4 text-left font-semibold">Remarkably AI</th>
                      <th className="px-6 py-4 text-left font-semibold rounded-tr-xl">Time Savings</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {speedComparison.map((row, index) => (
                      <tr key={index} className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">{row.task}</td>
                        <td className="px-6 py-4 text-gray-600">{row.traditional}</td>
                        <td className="px-6 py-4 text-gray-900 font-medium">{row.remarkably}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-medium">
                            {row.savings}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* User-Specific Benefits */}
      <section className={`py-20 bg-gradient-to-br ${
        userType === 'teachers' 
          ? 'from-blue-50 via-indigo-50 to-purple-50' 
          : 'from-purple-50 via-pink-50 to-indigo-50'
      }`}>
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                userType === 'teachers'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-purple-100 text-purple-700'
              }`}>
                {userType === 'teachers' ? <BookOpen className="h-4 w-4 mr-2" /> : <Building className="h-4 w-4 mr-2" />}
                {userType === 'teachers' ? 'For Individual Teachers' : 'For Schools & Institutions'}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {userType === 'teachers' 
                  ? 'Transform Your Teaching Experience' 
                  : 'Scale Assessment Across Your Institution'
                }
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {userType === 'teachers' 
                  ? 'Reclaim your weekends and spend more time on what matters most - teaching and connecting with students through personalized attention.'
                  : 'Ensure consistent, high-quality assessment across all departments while maintaining academic standards and improving efficiency.'
                }
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits[userType].map((benefit, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 ${
                    userType === 'teachers'
                      ? 'bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600'
                      : 'bg-gradient-to-br from-purple-100 to-pink-100 text-purple-600'
                  }`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
                <MessageSquare className="h-4 w-4 mr-2" />
                Teacher Success Stories
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transforming Teaching Experiences
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from educators who've revolutionized their grading workflow with Remarkably's instant grading technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-600 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-gray-500">{testimonial.school}</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {testimonial.highlight}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
                <Eye className="h-4 w-4 mr-2" />
                Advanced Technology
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sophisticated Grading Engine
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our proprietary AI processes essays through multiple analysis layers, evaluating content, 
                structure, grammar, and argument quality with remarkable speed and accuracy.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Content Analysis</h3>
                    <p className="text-gray-600">Evaluates argument strength, evidence quality, and thesis development with contextual understanding.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Structure Assessment</h3>
                    <p className="text-gray-600">Analyzes essay organization, paragraph flow, and logical progression with precision.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Grammar & Style</h3>
                    <p className="text-gray-600">Identifies language issues and suggests improvements with contextual awareness.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Rubric Scoring</h3>
                    <p className="text-gray-600">Applies your specific rubrics with detailed scoring breakdowns for each criteria category.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  <Sparkles className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Performance Metrics</h3>
                <p className="text-gray-600">
                  Proven results from educators using Remarkably's instant grading technology.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5-7×</div>
                  <div className="text-gray-700 font-medium">Faster Grading</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
                  <div className="text-gray-700 font-medium">Accuracy Rate</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">&lt; 60s</div>
                  <div className="text-gray-700 font-medium">Per Essay</div>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">100%</div>
                  <div className="text-gray-700 font-medium">Consistent</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Grading?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join thousands of educators who've revolutionized their workflow with instant, accurate grading. 
                Experience the future of assessment today.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/beta/demo" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Live Demo
              </Link>
              <Link 
                to="/beta/contact" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">2 min</div>
                <div className="text-blue-200 text-sm">Setup Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">Free</div>
                <div className="text-blue-200 text-sm">14-Day Trial</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-blue-200 text-sm">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">No</div>
                <div className="text-blue-200 text-sm">Lock-in</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default InstantGrading;