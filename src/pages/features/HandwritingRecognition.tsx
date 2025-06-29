import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  ChevronLeft, 
  Play, 
  ArrowRight, 
  Eye, 
  CheckCircle, 
  Zap, 
  FileText,
  Scan,
  Target, 
  Award,
  Users, 
  Clock,
  Lightbulb,
  Star,
  TrendingUp
} from 'lucide-react';
import ComponentErrorBoundary from '../../components/ComponentErrorBoundary';

const HandwritingRecognition: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<'messy' | 'clear' | 'mixed'>('messy');
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const handwritingDemos = {
    messy: {
      title: "Messy Handwriting Recognition",
      description: "Our AI excels at reading even the most challenging handwriting styles",
              image: "/(Student B) marking on messy handwriting.png?cb=1",
      imageAlt: "AI successfully reading and grading messy student handwriting",
      stats: { accuracy: "94%", confidence: "High", difficulty: "Very Hard" },
      features: [
        "Recognizes cursive and print mixing",
        "Handles irregular letter spacing", 
        "Works with smudged or faded ink",
        "Processes tilted or rotated text"
      ]
    },
    clear: {
      title: "Clear Handwriting Processing",
      description: "Perfect accuracy on neat, well-formed handwriting samples",
              image: "/(Student C) Decent Handwriting.png?cb=1",
      imageAlt: "AI processing clear, neat handwriting with perfect accuracy",
      stats: { accuracy: "98%", confidence: "Very High", difficulty: "Easy" },
      features: [
        "Near-perfect text recognition",
        "Instant processing speed",
        "Detailed layout preservation",
        "Punctuation and formatting detection"
      ]
    },
    mixed: {
      title: "Mixed Writing Styles",
      description: "Seamlessly handles documents with varying handwriting quality",
              image: "/(Student B) example of downloaded pdf of marked essay for students.jpg?cb=1",
      imageAlt: "PDF showing AI feedback on student essay with mixed handwriting styles",
      stats: { accuracy: "96%", confidence: "High", difficulty: "Medium" },
      features: [
        "Adapts to style changes mid-document",
        "Maintains context across sections",
        "Preserves original formatting",
        "Generates clean digital copies"
      ]
    }
  };

  const recognitionFeatures = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Advanced OCR Engine",
      description: "State-of-the-art neural networks trained on millions of handwriting samples",
      benefit: "99% accuracy on most handwriting",
      color: "from-blue-500 to-cyan-600",
      gradient: "bg-gradient-to-br from-blue-50 to-cyan-50"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-Time Processing", 
      description: "Upload and get results in seconds, not minutes or hours",
      benefit: "Average 3-second processing",
      color: "from-yellow-500 to-orange-600",
      gradient: "bg-gradient-to-br from-yellow-50 to-orange-50"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Context-Aware Reading",
      description: "Uses sentence context to improve accuracy on difficult words",
      benefit: "Reduces OCR errors by 85%",
      color: "from-green-500 to-emerald-600",
      gradient: "bg-gradient-to-br from-green-50 to-emerald-50"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Format Preservation",
      description: "Maintains original layout, paragraphs, and document structure",
      benefit: "Perfect layout recreation",
      color: "from-purple-500 to-indigo-600",
      gradient: "bg-gradient-to-br from-purple-50 to-indigo-50"
    }
  ];

  const qualityLevels = [
    { quality: "Excellent", percentage: 98, color: "bg-green-500", description: "Clear, neat handwriting" },
    { quality: "Good", percentage: 96, color: "bg-blue-500", description: "Slightly rushed but readable" },
    { quality: "Fair", percentage: 94, color: "bg-yellow-500", description: "Messy but distinguishable" },
    { quality: "Poor", percentage: 89, color: "bg-orange-500", description: "Very challenging handwriting" },
    { quality: "Illegible", percentage: 78, color: "bg-red-500", description: "Extremely difficult cases" }
  ];

  return (
    <ComponentErrorBoundary>
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
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
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
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                <Brain className="h-10 w-10" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                AI That Reads Any
                <span className="text-blue-600 block">Handwriting Style</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                From neat cursive to messy scrawl, our advanced OCR technology reads student handwriting 
                with 95%+ accuracy. Upload any handwritten essay and watch the magic happen.
              </p>
              </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/beta/demo" 
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center"
              >
                <Play className="mr-2 h-5 w-5" />
                Try Recognition Demo
              </Link>
              <Link 
                to="/beta/contact" 
                className="bg-white border-2 border-blue-200 text-blue-700 hover:bg-blue-50 font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center"
              >
                Test Your Handwriting
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
                </motion.div>
            </motion.div>
          </div>
        </section>

      {/* Interactive Handwriting Demo */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Scan className="h-4 w-4 mr-2" />
                Real Recognition Examples
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                See Our AI in Action
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Test different handwriting styles and see how our AI performs. Click between examples to explore.
              </p>
            </motion.div>

            {/* Demo Selector */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {Object.entries(handwritingDemos).map(([key, demo]) => (
                  <button
                    key={key}
                    onClick={() => setActiveDemo(key as any)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeDemo === key
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
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
                {/* Screenshot with Interactive Elements */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-600/20 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl shadow-2xl border-2 border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-3 border-b flex items-center space-x-2">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <Scan className="h-4 w-4 text-gray-600" />
                        <span className="text-sm text-gray-600">Handwriting Recognition - {handwritingDemos[activeDemo].stats.difficulty} Level</span>
                      </div>
                    </div>
                    <img 
                      src={handwritingDemos[activeDemo].image}
                      alt={handwritingDemos[activeDemo].imageAlt}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Content and Stats */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {handwritingDemos[activeDemo].title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {handwritingDemos[activeDemo].description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {handwritingDemos[activeDemo].features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                  </div>

                  {/* Performance Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {handwritingDemos[activeDemo].stats.accuracy}
                      </div>
                      <div className="text-sm text-gray-600">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-600">
                        {handwritingDemos[activeDemo].stats.confidence}
                      </div>
                      <div className="text-sm text-gray-600">Confidence</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">
                        {handwritingDemos[activeDemo].stats.difficulty}
                      </div>
                      <div className="text-sm text-gray-600">Difficulty</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          </div>
        </section>

      {/* Recognition Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Advanced Recognition Technology
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our OCR engine combines cutting-edge AI with years of handwriting research to deliver unprecedented accuracy.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recognitionFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <div className={`relative ${feature.gradient} p-8 rounded-2xl border border-gray-100 shadow-lg group-hover:shadow-2xl group-hover:transform group-hover:scale-105 transition-all duration-300`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    
                    <div className={`inline-flex items-center px-3 py-1 bg-white/80 rounded-full text-sm font-medium transition-all duration-300 ${
                      hoveredFeature === index ? 'transform scale-105' : ''
                    }`}>
                      <span className="text-gray-700">{feature.benefit}</span>
                      {hoveredFeature === index && <ArrowRight className="ml-2 h-4 w-4" />}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          </div>
        </section>

      {/* Accuracy by Quality Chart */}
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
                Recognition Accuracy by Handwriting Quality
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our AI performs across different handwriting qualities, from pristine to nearly illegible.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {qualityLevels.map((level, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-4">
                        <div className={`w-4 h-4 ${level.color} rounded-full`}></div>
                        <span className="font-semibold text-gray-900">{level.quality} Quality</span>
                        <span className="text-gray-600">— {level.description}</span>
                  </div>
                      <span className="text-2xl font-bold text-gray-900">{level.percentage}%</span>
                </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div 
                        className={`h-3 ${level.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      ></motion.div>
                  </div>
                </div>
              ))}
            </div>
            </motion.div>
          </motion.div>
          </div>
        </section>

        {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500 via-cyan-600 to-indigo-500 relative overflow-hidden">
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
                Ready to Grade Any Handwriting?
            </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Stop struggling with illegible handwriting. Let our AI read everything so you can focus on providing great feedback.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/beta/demo" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center"
              >
                <Scan className="mr-2 h-5 w-5" />
                Test Recognition
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
    </ComponentErrorBoundary>
  );
};

export default HandwritingRecognition;