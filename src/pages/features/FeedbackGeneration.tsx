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
  TrendingUp
} from 'lucide-react';

const FeedbackGeneration: React.FC = () => {
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

  return (
    <>
      <SEOHead 
        config={{
          title: "Feedback Generation - Personalized Writing Feedback | Remarkably",
          description: "Generate personalized, constructive feedback that motivates students and improves writing skills. Save hours while providing better guidance.",
          keywords: "personalized feedback, writing assessment, student feedback, AI feedback generation, constructive criticism"
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
                className="btn-primary hover-lift inline-flex items-center"
              >
                <Play className="mr-2 h-5 w-5" />
                See Feedback Examples
              </Link>
              <Link 
                to="/beta/contact" 
                className="btn-secondary hover-lift inline-flex items-center"
              >
                Generate Sample Feedback
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

      {/* Feedback Types */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-6">
                <MessageSquare className="h-4 w-4 mr-2" />
                Multiple Feedback Styles
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Feedback Tailored to Your Teaching Style
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from different feedback approaches that match your teaching philosophy and student needs.
              </p>
            </motion.div>

            <div className="space-y-8">
              {feedbackTypes.map((type, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="text-center lg:text-left">
                      <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${type.color} text-white rounded-full text-sm font-medium mb-4`}>
                        {type.icon}
                        <span className="ml-2">{type.type}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.type} Feedback</h3>
                      <p className="text-gray-600">{type.description}</p>
                    </div>

                    <div className="lg:col-span-2">
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-6">
                        <div className="text-sm font-medium text-gray-700 mb-3">✨ Sample AI-Generated Feedback</div>
                        <p className="text-gray-800 italic leading-relaxed">"{type.example}"</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feedback Features */}
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
                Comprehensive Feedback Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every piece of feedback is designed to help students understand their strengths and improve their writing skills.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {feedbackFeatures.map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                        <span className="text-sm font-medium text-rose-600 bg-rose-100 px-2 py-1 rounded">{feature.benefit}</span>
                      </div>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* User-Specific Benefits */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-orange-50">
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
                  ? 'Give every student the detailed, personal feedback they deserve without spending hours writing comments.'
                  : 'Ensure every student receives consistent, high-quality feedback that supports their academic growth.'
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
                  <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600 mb-6">
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

      {/* Before & After Example */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                From Generic to Personalized
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                See how AI-generated feedback transforms from basic comments to detailed, 
                personalized guidance that actually helps students improve.
              </p>
              
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm">✕</div>
                    <span className="font-semibold text-red-700">Typical Generic Feedback</span>
                  </div>
                  <p className="text-red-600 italic">"Good essay. Work on grammar and organization. Try to be more specific."</p>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                    <span className="font-semibold text-emerald-700">AI-Generated Personalized Feedback</span>
                  </div>
                  <p className="text-emerald-700">"Your opening hook about climate change really draws readers in! Your argument becomes stronger when you include specific statistics like in paragraph 2. For even greater impact, try connecting your conclusion back to that compelling opening question. Also, watch for comma splices in sentences 3 and 7 - breaking these into shorter sentences will improve clarity."</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-orange-50 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-orange-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Student Impact</h3>
                <p className="text-gray-600 mb-6">
                  Students report feeling more motivated and confident when they receive specific, 
                  encouraging feedback that shows their teacher really read their work.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-rose-600 mb-1">85%</div>
                    <div className="text-gray-600">More Motivated</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-rose-600 mb-1">3×</div>
                    <div className="text-gray-600">More Detail</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-rose-600 mb-1">92%</div>
                    <div className="text-gray-600">Find Helpful</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-rose-600 mb-1">5 min</div>
                    <div className="text-gray-600">To Review</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-orange-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Student Feedback?
          </h2>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            Start generating personalized, encouraging feedback that helps every student grow as a writer. 
            Your students will notice the difference immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/beta/demo" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-rose-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              Generate Sample Feedback
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/beta/contact" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-rose-600 transition-colors"
            >
              Get Personal Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeedbackGeneration;