import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import SupportedByCarousel from '../components/SupportedByCarousel';
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
  TrendingUp,
  ArrowRight,
  Star,
  Quote
} from 'lucide-react';



const Home: React.FC = () => {
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
    hidden: { y: 60, opacity: 0 },
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
      description: "Simply scan or upload handwritten or digital student essays. Our AI processes multiple formats seamlessly.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      step: "02", 
      title: "AI Analysis",
      description: "Advanced algorithms analyze grammar, content, structure, and style while learning your personal marking preferences.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500"
    },
    {
      step: "03",
      title: "Get Results",
      description: "Receive detailed feedback, grades, and insights in minutes. Review, customize, and send to students instantly.",
      icon: <Target className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500"
    }
  ];



  return (
    <>
      <Helmet>
        <title>Remarkably - AI-Powered Essay Grading Platform for Educators</title>
        <meta 
          name="description" 
          content="Transform your essay grading with AI. Remarkably helps teachers grade 6-7x faster while maintaining quality. Co-designed with MOE educators for handwritten and digital essays." 
        />
        <meta 
          name="keywords" 
          content="AI essay grading, automated essay scoring, education technology, teacher tools, handwritten essay grading, Singapore MOE, essay feedback, student assessment" 
        />
        <meta property="og:title" content="Remarkably - AI-Powered Essay Grading Platform" />
        <meta property="og:description" content="Grade essays 6-7x faster with AI while maintaining quality and personal teaching standards." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Section */}
      <HeroSection />

      {/* Supported By Carousel */}
      <SupportedByCarousel />

      {/* How It Works Section */}
      <section className="section-standard bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-12"
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center space-y-4 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium">
                <TrendingUp className="w-4 h-4" />
                Simple & Effective Process
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                How <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">Remarkably</span> Works
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                From essay upload to detailed feedback in just three simple steps. 
                Our AI handles the complexity while you focus on teaching.
              </p>
            </motion.div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  whileHover={{ 
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${step.color} opacity-3 group-hover:opacity-8 transition-opacity duration-300`} />
                  
                  <div className="relative space-y-6 text-center">
                    {/* Step Number */}
                    <motion.div 
                      className="text-5xl font-bold text-gray-200 group-hover:text-blue-600 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {step.step}
                    </motion.div>
                    
                    {/* Icon */}
                    <motion.div 
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} p-4 text-white flex items-center justify-center mx-auto shadow-lg`}
                      whileHover={{ 
                        scale: 1.05
                      }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      {step.icon}
                    </motion.div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Process Flow Animation */}
            <motion.div
              variants={itemVariants}
              className="relative mt-8"
            >
              <div className="flex justify-center">
                <svg className="w-full max-w-4xl h-20" viewBox="0 0 800 80">
                  <motion.path
                    d="M 50 40 Q 200 20 350 40 Q 500 60 650 40"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="15 10"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="33%" stopColor="#a855f7" />
                      <stop offset="66%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Testimonials Section */}
      <section className="section-standard bg-gray-50">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-16"
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center space-y-6 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium">
                <Star className="w-4 h-4" />
                Educator Testimonials
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Trusted by <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">Educators</span>
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                See how teachers across Singapore and beyond are transforming their 
                grading workflow with Remarkably's AI-powered platform.
              </p>
            </motion.div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <div className="space-y-6">
                    {/* Quote Icon */}
                    <motion.div 
                      className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-sm"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Quote className="w-4 h-4 text-white" />
                    </motion.div>
                    
                    {/* Rating */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <p className="text-gray-700 leading-relaxed italic font-medium">
                      "{testimonial.quote}"
                    </p>
                    
                    {/* Author */}
                    <div className="border-t border-gray-200/50 pt-6">
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Users className="w-6 h-6 text-blue-600" />
                        </motion.div>
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.author}</div>
                          <div className="text-gray-600 text-sm">{testimonial.role}</div>
                          <div className="text-blue-600 text-sm font-medium">{testimonial.school}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="section-standard bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-16"
          >
            {/* Main CTA */}
            <motion.div
              variants={itemVariants}
              className="relative p-12 bg-gradient-to-br from-white/80 via-indigo-50/80 to-white/80 border border-indigo-300/40 rounded-3xl text-center backdrop-blur-sm shadow-xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="space-y-8">
                <motion.div 
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-amber-500 rounded-full mb-6 shadow-lg"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                  }}
                >
                  <Zap className="w-10 h-10 text-white" />
                </motion.div>
                
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Ready to Transform Your Grading?
                  </h2>
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
                    Join thousands of educators worldwide who are saving time and improving 
                    feedback quality with Remarkably's AI-powered essay grading platform.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <motion.button
                    className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center justify-center">
                      Start Free Trial
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </motion.button>
                  
                  <motion.button
                    className="group px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold text-lg rounded-xl hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-center">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Watch Demo
                    </div>
                  </motion.button>
                </div>
                
                <div className="flex flex-wrap justify-center items-center gap-6 pt-8 text-gray-600 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Setup in 15 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Cancel anytime</span>
                  </div>
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