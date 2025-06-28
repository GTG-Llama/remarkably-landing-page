import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  Play
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

  const benefits = {
    teachers: [
      {
        icon: <Clock className="h-6 w-6" />,
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
    ],
    schools: [
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
    ]
  };

  const features = [
    {
      title: "95%+ Recognition Accuracy",
      description: "Our advanced OCR technology reads even the messiest handwriting with exceptional accuracy.",
      stat: "95%+"
    },
    {
      title: "Instant Processing",
      description: "Upload handwritten essays and get digital text conversion in seconds.",
      stat: "< 10s"
    },
    {
      title: "Multiple Handwriting Styles",
      description: "Works with cursive, print, and mixed handwriting styles from students of all ages.",
      stat: "All Styles"
    },
    {
      title: "Batch Processing",
      description: "Process entire classes of handwritten essays simultaneously for maximum efficiency.",
      stat: "50+ Essays"
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
        <div className="container-custom">
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
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants}>
              <Link to="/beta/features" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-6 transition-colors">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Features
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                <Brain className="h-10 w-10" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Grade Any Handwriting Style
                <span className="text-indigo-600 block">with 95%+ Accuracy</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Upload handwritten essays and watch our advanced OCR technology convert even the messiest handwriting 
                into digital text, ready for AI grading in seconds.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/beta/demo" 
                className="btn-primary hover-lift inline-flex items-center"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Link>
              <Link 
                to="/beta/contact" 
                className="btn-secondary hover-lift inline-flex items-center"
              >
                Try With Your Essays
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* User Type Selector */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose Your Perspective</h2>
            <div className="inline-flex rounded-lg bg-gray-100 p-1">
              <button
                onClick={() => setUserType('teachers')}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                  userType === 'teachers'
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                For Teachers
              </button>
              <button
                onClick={() => setUserType('schools')}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                  userType === 'schools'
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                For Schools
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How Handwriting Recognition Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our proprietary OCR system combined with advanced AI makes handwriting recognition 
                seamless and accurate for any teaching environment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Process Steps */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Handwritten Essays</h3>
                    <p className="text-gray-600">Take a photo or scan handwritten essays. Our system accepts various image formats and automatically optimizes for best recognition.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Analyzes Handwriting</h3>
                    <p className="text-gray-600">Our advanced OCR technology processes the image, identifying individual letters, words, and sentences with machine learning precision.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Text Ready for Grading</h3>
                    <p className="text-gray-600">Converted text is instantly ready for AI grading, maintaining the original meaning while enabling rapid assessment.</p>
                  </div>
                </div>
              </motion.div>

              {/* Screenshot */}
              <motion.div variants={itemVariants} className="lg:order-first">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="ml-4 text-gray-600 text-sm font-medium">PDF Splitter & Recognition</span>
                    </div>
                  </div>
                  <img 
                    src="/PDF Splitter.png" 
                    alt="Handwriting recognition and PDF processing interface"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
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
                Powerful Recognition Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built specifically for educational environments with features that matter to teachers and schools.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="text-center p-6 bg-gray-50 rounded-2xl"
                >
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{feature.stat}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* User-Specific Benefits */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {userType === 'teachers' ? 'Perfect for Individual Teachers' : 'Designed for Schools & Institutions'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {userType === 'teachers' 
                  ? 'Everything you need to start grading handwritten essays with AI assistance.'
                  : 'Comprehensive solutions that scale across your entire institution.'
                }
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits[userType].map((benefit, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Advanced OCR Technology
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our proprietary OCR system uses machine learning to continuously improve recognition accuracy. 
                The AI learns and adapts to different handwriting styles, ensuring reliable results for every teacher.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                  <span className="text-gray-700">Machine learning that improves over time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                  <span className="text-gray-700">Works with all handwriting styles and sizes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                  <span className="text-gray-700">Secure, privacy-focused processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                  <span className="text-gray-700">Real-time feedback and corrections</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacy & Security</h3>
                <p className="text-gray-600 mb-6">
                  All handwriting recognition is processed securely with enterprise-grade encryption. 
                  Student data never leaves our secure servers.
                </p>
                <div className="flex justify-center space-x-4 text-sm text-gray-500">
                  <span>• SOC 2 Certified</span>
                  <span>• GDPR Compliant</span>
                  <span>• 256-bit Encryption</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Grade Any Handwriting?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join educators already using our handwriting recognition to save hours every week. 
            Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/beta/demo" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              Try Free Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/beta/contact" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HandwritingRecognition;