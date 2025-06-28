import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ComponentErrorBoundary from '../../components/ComponentErrorBoundary';
import { 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  Upload, 
  Zap, 
  Target, 
  Users, 
  Building,
  Clock,
  Shield,
  ChevronLeft,
  Play,
  Star,
  Quote,
  BarChart3
} from 'lucide-react';

const HandwritingRecognition: React.FC = () => {
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

  const teacherBenefits = [
    {
      icon: <Upload className="h-6 w-6" />,
      title: "Upload Your Own Rubric",
      description: "Easily upload and customize rubrics to match your teaching style and assessment criteria."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Flexible Subscription",
      description: "Choose from flexible monthly or yearly plans that fit your budget and grading needs."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Easy Implementation",
      description: "Start grading handwritten essays immediately - no training or setup required."
    }
  ];

  const schoolBenefits = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Capture Teacher Styles",
      description: "Our AI learns each teacher's unique grading style and maintains consistency across departments."
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "School Rubric Alignment",
      description: "Seamlessly integrate with your school's existing rubrics and grading criteria standards."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "White Labeling Available",
      description: "Customize the platform with your school's branding, colors, and domain for a unified experience."
    }
  ];

  const keyStats = [
    {
      title: "95%+ Recognition Accuracy",
      description: "Our advanced OCR technology reads even the messiest handwriting with exceptional accuracy.",
      stat: "95%+",
      color: "text-blue-600"
    },
    {
      title: "Instant Processing",
      description: "Upload handwritten essays and get digital text conversion in seconds.",
      stat: "< 10s",
      color: "text-green-600"
    },
    {
      title: "Multiple Handwriting Styles",
      description: "Works with cursive, print, and mixed handwriting styles from students of all ages.",
      stat: "All Styles",
      color: "text-purple-600"
    },
    {
      title: "Batch Processing",
      description: "Process entire classes of handwritten essays simultaneously for maximum efficiency.",
      stat: "50+ Essays",
      color: "text-orange-600"
    }
  ];

  const testimonials = [
    {
      name: "Ms. Sarah Chen",
      role: "5th Grade Teacher",
      school: "Lianhua Primary School",
      quote: "The handwriting recognition is incredible. It reads my students' work better than I sometimes can!",
      rating: 5
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Head of English Department",
      school: "International School of Singapore",
      quote: "We've saved 70% of our grading time. The OCR accuracy is consistently impressive.",
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        config={{
          title: "Handwriting Recognition - Grade Any Handwriting Style | Remarkably",
          description: "Upload handwritten essays and watch our AI read even the messiest handwriting with 95%+ accuracy. Perfect for teachers and schools.",
          keywords: ["handwriting recognition", "OCR", "essay grading", "AI", "education technology"]
        }} 
        pageKey="handwriting-recognition" 
      />

      {/* Breadcrumb Navigation */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/beta" className="text-gray-600 hover:text-indigo-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/beta/features" className="text-gray-600 hover:text-indigo-600">Features</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Handwriting Recognition</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered OCR Technology
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Read Any <span className="text-blue-600">Handwriting</span> Style
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform handwritten essays into digital text with 95%+ accuracy. Our advanced OCR technology works with any handwriting style, from neat cursive to messy print.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
              <Link to="/beta/contact" className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                Get Started Free
              </Link>
            </motion.div>

            {/* Demo Video Placeholder */}
            <ComponentErrorBoundary
              componentName="Handwriting Recognition Demo"
              fallback={
                <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
                  <p className="text-gray-600">Demo video loading...</p>
                </div>
              }
            >
              <motion.div variants={itemVariants} className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video 
                  className="w-full h-auto"
                  poster="/Grading Interface .png"
                  controls
                  muted
                  playsInline
                >
                  <source src="/lenordemo1-2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </ComponentErrorBoundary>
          </motion.div>
        </div>
      </section>

      {/* User Type Selector */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setUserType('teachers')}
                  className={`px-6 py-3 rounded-md font-medium transition-all ${
                    userType === 'teachers'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  For Teachers
                </button>
                <button
                  onClick={() => setUserType('schools')}
                  className={`px-6 py-3 rounded-md font-medium transition-all ${
                    userType === 'schools'
                      ? 'bg-white text-purple-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  For Schools
                </button>
              </div>
            </div>

            <motion.div
              key={userType}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {(userType === 'teachers' ? teacherBenefits : schoolBenefits).map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    userType === 'teachers' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'
                  }`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proven Performance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our handwriting recognition technology delivers industry-leading accuracy and speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm text-center"
              >
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.stat}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform handwritten essays into gradeable digital text in three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Upload Essays", description: "Scan or photograph handwritten essays using any device" },
              { step: "2", title: "AI Processing", description: "Our OCR technology converts handwriting to digital text instantly" },
              { step: "3", title: "Grade & Feedback", description: "Review, grade, and provide feedback on the digitized essays" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Educators
            </h2>
            <p className="text-xl text-gray-600">
              See what teachers and schools are saying about our handwriting recognition.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.school}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Grading?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of educators who are saving time with AI-powered handwriting recognition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/beta/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Start Free Trial
            </Link>
            <Link to="/beta/demo" className="px-8 py-4 border border-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors font-medium">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HandwritingRecognition;