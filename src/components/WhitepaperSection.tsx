import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  FileText, 
  Brain, 
  Shield, 
  Users, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Mail,
  Lock,
  Award,
  Zap
} from 'lucide-react';

const WhitepaperSection: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [email, setEmail] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDownloading(true);
    
    // Simulate download process
    setTimeout(() => {
      setIsDownloading(false);
      setShowForm(false);
      // In real implementation, trigger actual download
    }, 2000);
  };

  const whitepaperFeatures = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Architecture Deep Dive",
      description: "Understand our neural network design, training methodology, and quality assurance processes"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy & Security Framework",
      description: "Comprehensive overview of data protection, PDPA compliance, and security measures"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Benchmarks",
      description: "Real-world testing results, accuracy metrics, and comparative analysis studies"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Implementation Case Studies",
      description: "Detailed case studies from MOE schools and international institutions"
    }
  ];

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
        duration: 0.6,
      },
    },
  };

  return (
    <section className="section-standard bg-gradient-to-br from-slate-50 to-indigo-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-indigo-100/40 to-purple-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-amber-100/30 to-orange-100/20 rounded-full blur-3xl" />
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
          <motion.div variants={itemVariants} className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
              <FileText className="w-4 h-4" />
              Technical Deep Dive
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              How Our <span className="text-gradient-primary">AI Technology</span> Works
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Get the complete technical overview of Remarkably's AI grading system. 
              Understand the science, security, and methodology behind our platform.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Features */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                {whitepaperFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Indicators */}
              <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-lg font-semibold text-emerald-900">
                    Research-Backed & Peer-Reviewed
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-emerald-700">
                    <CheckCircle className="w-4 h-4" />
                    Published in Educational Technology Research journals
                  </div>
                  <div className="flex items-center gap-2 text-sm text-emerald-700">
                    <CheckCircle className="w-4 h-4" />
                    Validated by independent education researchers
                  </div>
                  <div className="flex items-center gap-2 text-sm text-emerald-700">
                    <CheckCircle className="w-4 h-4" />
                    Approved by Singapore MOE for pilot programs
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Download Card */}
            <motion.div variants={itemVariants} className="lg:pl-8">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                {/* Preview Image */}
                <div className="h-64 bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute inset-0 geometric-pattern opacity-20" />
                  
                  {/* Mock Document Preview */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-2xl max-w-sm mx-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <FileText className="w-5 h-5 text-indigo-600" />
                          <span className="font-semibold text-gray-900 text-sm">
                            Technical Whitepaper
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-gray-200 rounded w-full" />
                          <div className="h-2 bg-gray-200 rounded w-4/5" />
                          <div className="h-2 bg-gray-200 rounded w-3/4" />
                        </div>
                        <div className="flex items-center gap-2 pt-2">
                          <Brain className="w-4 h-4 text-indigo-500" />
                          <span className="text-xs text-gray-600">
                            32 pages • Research-backed
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      "The Science Behind AI Essay Grading"
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      A comprehensive 32-page technical document covering our AI architecture, 
                      security framework, performance benchmarks, and real-world implementation case studies.
                    </p>
                  </div>

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-indigo-600">95%+</div>
                      <div className="text-sm text-gray-600">Accuracy Rate</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-emerald-600">32</div>
                      <div className="text-sm text-gray-600">Pages</div>
                    </div>
                  </div>

                  {/* Download Section */}
                  {!showForm ? (
                    <motion.button
                      onClick={() => setShowForm(true)}
                      className="w-full btn-primary group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label="Download technical whitepaper"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Free Whitepaper
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  ) : (
                    <form onSubmit={handleDownload} className="space-y-4">
                      <div>
                        <label htmlFor="whitepaper-email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Work Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            id="whitepaper-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your.email@school.edu"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                            required
                            aria-describedby="email-help"
                          />
                        </div>
                        <p id="email-help" className="text-xs text-gray-500 mt-1">
                          We'll send the download link to your email
                        </p>
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isDownloading}
                        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={!isDownloading ? { scale: 1.02 } : {}}
                        whileTap={!isDownloading ? { scale: 0.98 } : {}}
                      >
                        {isDownloading ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 mr-2"
                            >
                              <Zap className="w-5 h-5" />
                            </motion.div>
                            Preparing Download...
                          </>
                        ) : (
                          <>
                            <Download className="w-5 h-5 mr-2" />
                            Get Instant Access
                          </>
                        )}
                      </motion.button>

                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Lock className="w-3 h-3" />
                        Your email is secure. No spam, unsubscribe anytime.
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhitepaperSection; 