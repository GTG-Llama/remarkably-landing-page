import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  MessageSquare, 
  Target, 
  Users, 
  Building,
  Clock,
  Heart,
  ChevronLeft,
  Play,
  Sparkles,
  BookOpen,
  Edit3,
  Star,
  ThumbsUp,
  Lightbulb,
  TrendingUp,
  Eye,
  Award,
  Zap
} from 'lucide-react';

const FeedbackGeneration: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'strengths' | 'improvements' | 'comprehensive'>('strengths');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

  const benefits = {
    teachers: [
      {
        icon: <Heart className="h-6 w-6" />,
        title: "Encouraging & Constructive",
        description: "Generate feedback that motivates students while providing specific guidance for improvement."
      },
      {
        icon: <Clock className="h-6 w-6" />,
        title: "Save Hours Weekly",
        description: "Spend 3 minutes reviewing AI feedback instead of 15 minutes writing detailed comments from scratch."
      },
      {
        icon: <Target className="h-6 w-6" />,
        title: "Personalized for Each Student",
        description: "Every piece of feedback is tailored to the individual student's writing level and needs."
      }
    ],
    schools: [
      {
        icon: <Building className="h-6 w-6" />,
        title: "Consistent Quality Standards",
        description: "Ensure all students receive high-quality, detailed feedback regardless of teacher workload."
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Scalable Feedback System",
        description: "Generate personalized feedback for hundreds of students simultaneously during assessment periods."
      },
      {
        icon: <MessageSquare className="h-6 w-6" />,
        title: "Department Alignment",
        description: "Maintain consistent feedback standards and terminology across all teachers in your department."
      }
    ]
  };

  const feedbackTypes = [
    {
      type: "Strengths-Based",
      icon: <Star className="h-6 w-6" />,
      description: "Highlights what students did well before suggesting improvements",
      example: "Your opening paragraph immediately captures the reader's attention with a compelling question. To strengthen your argument further, consider adding specific statistics in paragraph three to support your claims.",
      color: "from-yellow-500 to-orange-600"
    },
    {
      type: "Growth-Oriented",
      icon: <TrendingUp className="h-6 w-6" />,
      description: "Focuses on specific next steps for improvement",
      example: "You've shown good understanding of the topic. To elevate this essay, try connecting your examples more explicitly to your thesis statement. Consider adding transitional phrases between paragraphs.",
      color: "from-green-500 to-emerald-600"
    },
    {
      type: "Skill-Specific",
      icon: <Target className="h-6 w-6" />,
      description: "Targets particular writing skills like grammar, structure, or content",
      example: "Your ideas are creative and well-developed. Focus on varying your sentence structure - try combining some shorter sentences and breaking up longer ones for better flow.",
      color: "from-blue-500 to-indigo-600"
    }
  ];

  const feedbackFeatures = [
    {
      icon: <Edit3 className="h-8 w-8" />,
      title: "Detailed Writing Analysis",
      description: "Every aspect of student writing is analyzed - from thesis development to conclusion strength.",
      benefit: "Comprehensive insights"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Actionable Suggestions",
      description: "Specific, implementable advice that students can immediately apply to improve their writing.",
      benefit: "Clear next steps"
    },
    {
      icon: <ThumbsUp className="h-8 w-8" />,
      title: "Positive Reinforcement",
      description: "Balanced feedback that celebrates successes while guiding improvement efforts.",
      benefit: "Motivated learners"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Curriculum Aligned",
      description: "Feedback directly tied to your learning objectives and writing standards.",
      benefit: "Standards-based"
    }
  ];

  // Interactive Feedback Showcase Data
  const feedbackShowcase = {
    strengths: {
      title: "Student Strengths",
      description: "AI-powered feedback that identifies and celebrates what students do well",
              image: "/(Student B) Essay Strength.png?cb=1",
      imageAlt: "Student essay showing AI-generated positive feedback highlighting strengths",
      features: [
        "Identifies specific writing techniques used well",
        "Celebrates improvement and growth",
        "Builds confidence with constructive praise",
        "Highlights unique voice and style"
      ],
      stats: { accuracy: "94%", confidence: "High", impact: "Motivational" }
    },
    improvements: {
      title: "Identify Weaknesses", 
      description: "Constructive feedback that guides students toward specific improvements",
              image: "/(Student B) Essay Weakness.png?cb=1",
      imageAlt: "Student essay showing AI-generated improvement suggestions and guidance",
      features: [
        "Specific, actionable improvement suggestions",
        "Scaffolded learning recommendations",
        "Clear examples of better alternatives",
        "Gentle guidance without discouragement"
      ],
      stats: { accuracy: "91%", confidence: "High", impact: "Developmental" }
    },
    comprehensive: {
      title: "Feedback Overview",
      description: "Comprehensive analysis combining strengths, areas for growth, and next steps",
              image: "/(Student B) Essay Summary.png?cb=1", 
      imageAlt: "Complete student essay feedback summary with overall analysis",
      features: [
        "Holistic writing assessment",
        "Balanced strengths and growth areas",
        "Clear next steps for improvement",
        "Progress tracking over time"
      ],
      stats: { accuracy: "96%", confidence: "Very High", impact: "Comprehensive" }
    }
  };

  const interactiveFeatures = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Emotionally Intelligent",
      description: "Feedback that considers student emotions and motivation levels",
      benefit: "Builds confidence and engagement",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Specific & Actionable", 
      description: "Clear, concrete suggestions students can immediately implement",
      benefit: "Accelerates improvement",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Standards-Aligned",
      description: "Directly connected to your curriculum and learning objectives",
      benefit: "Meets educational requirements",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Growth-Focused",
      description: "Tracks improvement over time and celebrates progress",
      benefit: "Encourages continuous learning",
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <>
      <SEOHead 
        config={{
          title: "Feedback Generation - Personalized Writing Feedback | Remarkably",
          description: "Generate personalized, constructive feedback that motivates students and improves writing skills. Save hours while providing better guidance.",
          keywords: ["personalized feedback", "writing assessment", "student feedback", "AI feedback generation", "constructive criticism"]
        }} 
        pageKey="feedback-generation" 
      />

      {/* Breadcrumb Navigation */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/beta" className="text-gray-600 hover:text-indigo-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/beta/features" className="text-gray-600 hover:text-indigo-600">Features</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Feedback Generation</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 via-white to-orange-50 relative overflow-hidden">
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
              <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-orange-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                <FileText className="h-10 w-10" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Feedback That Actually
                <span className="text-rose-600 block">Helps Students Grow</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Generate personalized, constructive feedback that motivates students while providing 
                specific guidance for improvement. Every comment designed to inspire growth.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/beta/demo" 
                className="bg-gradient-to-r from-rose-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center"
              >
                <Play className="mr-2 h-5 w-5" />
                See Live Examples
              </Link>
              <Link 
                to="/beta/contact" 
                className="bg-white border-2 border-rose-200 text-rose-700 hover:bg-rose-50 font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center"
              >
                Generate Sample Feedback
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Feedback Showcase */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-6">
                <MessageSquare className="h-4 w-4 mr-2" />
                Real Student Examples
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                See Our AI Feedback in Action
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore actual student work with our AI-generated feedback. Click between different feedback types.
              </p>
            </motion.div>

            {/* Interactive Tabs */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {Object.entries(feedbackShowcase).map(([key, content]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key as any)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === key
                        ? 'bg-gradient-to-r from-rose-500 to-orange-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                    }`}
                  >
                    {content.title}
                  </button>
                ))}
              </div>

              {/* Active Tab Content */}
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Screenshot */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-orange-600/20 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl shadow-2xl border-2 border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-3 border-b flex items-center space-x-2">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-600 ml-4">Student Essay - AI Feedback Preview</span>
                    </div>
                    <img 
                      src={feedbackShowcase[activeTab].image}
                      alt={feedbackShowcase[activeTab].imageAlt}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feedbackShowcase[activeTab].title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {feedbackShowcase[activeTab].description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {feedbackShowcase[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-rose-600">
                        {feedbackShowcase[activeTab].stats.accuracy}
                      </div>
                      <div className="text-sm text-gray-600">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        {feedbackShowcase[activeTab].stats.confidence}
                      </div>
                      <div className="text-sm text-gray-600">Confidence</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">
                        {feedbackShowcase[activeTab].stats.impact}
                      </div>
                      <div className="text-sm text-gray-600">Impact</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Features Grid */}
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
                Why Teachers Love Our Feedback
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every piece of feedback is carefully crafted to inspire growth while maintaining student motivation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {interactiveFeatures.map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <div className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-lg group-hover:shadow-2xl group-hover:transform group-hover:scale-105 transition-all duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    
                    <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${feature.color} bg-opacity-10 rounded-full text-sm font-medium transition-all duration-300 ${
                      hoveredCard === index ? 'transform scale-105' : ''
                    }`}>
                      <span className="text-gray-700">{feature.benefit}</span>
                      {hoveredCard === index && <ArrowRight className="ml-2 h-4 w-4" />}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compelling CTA Section */}
      <section className="py-20 bg-gradient-to-br from-rose-500 via-orange-600 to-amber-500 relative overflow-hidden">
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
                Transform Your Feedback Process Today
              </h2>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
                Join thousands of educators who've revolutionized their grading with AI-powered feedback 
                that actually helps students improve.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/beta/demo" 
                className="bg-white text-rose-600 hover:bg-orange-50 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center"
              >
                <Play className="mr-2 h-5 w-5" />
                Try Live Demo
              </Link>
              <Link 
                to="/beta/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-rose-600 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </>
  );
};

export default FeedbackGeneration;