import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Brain, 
  Zap, 
  Users, 
  Building,
  Clock,
  Heart,
  ChevronLeft,
  Play,
  Sparkles,
  BookOpen,
  FileText
} from 'lucide-react';

const TeacherStyleLearning: React.FC = () => {

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
        icon: <FileText className="h-6 w-6" />,
        title: "Upload Your Own Rubric",
        description: "Train the AI with your personal rubrics and grading criteria for perfectly aligned feedback."
      },
      {
        icon: <Clock className="h-6 w-6" />,
        title: "Flexible Subscription",
        description: "Pay-as-you-go or monthly plans that scale with your grading workload and budget."
      },
      {
        icon: <Zap className="h-6 w-6" />,
        title: "Easy Implementation",
        description: "Start training your AI assistant in minutes - upload 3 sample feedbacks and watch it learn."
      }
    ],
    schools: [
      {
        icon: <Brain className="h-6 w-6" />,
        title: "Capture All Teacher Styles",
        description: "Each teacher's unique style is learned and preserved, maintaining departmental consistency."
      },
      {
        icon: <Building className="h-6 w-6" />,
        title: "School Rubric Alignment",
        description: "Ensure all feedback aligns with school standards while preserving individual teacher personality."
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Custom Feature Development",
        description: "Request specific grading criteria and rubric implementations tailored to your curriculum."
      }
    ]
  };

  const styles = [
    {
      type: "Encouraging",
      before: "Grammar needs work.",
      after: "Great ideas! Let's polish the grammar to make your excellent thoughts even clearer. Focus on subject-verb agreement in paragraph 2.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      type: "Direct & Analytical", 
      before: "Good essay overall.",
      after: "Strong thesis statement (8/10). Paragraph structure shows clear progression. Evidence in paragraph 3 needs stronger connection to main argument.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      type: "Constructive",
      before: "Needs improvement.",
      after: "Your introduction draws readers in effectively. To strengthen this essay, consider adding more specific examples in your body paragraphs and connecting each point back to your thesis.",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const trainingSteps = [
    {
      step: "1",
      title: "Upload Sample Feedback",
      description: "Provide 3-5 examples of your feedback on student essays to teach the AI your style.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      step: "2", 
      title: "AI Analyzes Patterns",
      description: "Our machine learning identifies your tone, language patterns, and feedback structure.",
      icon: <Brain className="h-6 w-6" />
    },
    {
      step: "3",
      title: "Style Replication",
      description: "The AI generates feedback that matches your voice, maintaining consistency across all essays.",
      icon: <Target className="h-6 w-6" />
    }
  ];

  return (
    <>
      <SEOHead 
        config={{
          title: "Teacher Style Learning - AI That Mimics Your Feedback | Remarkably",
          description: "Our AI learns your unique feedback style and replicates it perfectly across all essays. Maintain your teaching voice while saving hours of grading time.",
          keywords: ["teacher style", "AI feedback", "personalized grading", "education technology", "essay assessment"]
        }} 
        pageKey="teacher-style-learning" 
      />

      {/* Breadcrumb Navigation */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/beta" className="text-gray-600 hover:text-indigo-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/beta/features" className="text-gray-600 hover:text-indigo-600">Features</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Teacher Style Learning</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50 relative overflow-hidden">
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
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                <Target className="h-10 w-10" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                AI That Thinks and Writes
                <span className="text-indigo-600 block">Exactly Like You</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Our advanced AI learns your unique feedback style, tone, and teaching approach. 
                Upload 3 sample feedbacks and watch the AI replicate your voice across all essays.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/beta/demo" 
                className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center"
              >
                <Play className="mr-2 h-5 w-5" />
                See Style Training Demo
              </Link>
              <Link 
                to="/beta/contact" 
                className="bg-white border-2 border-purple-200 text-purple-700 hover:bg-purple-50 font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center"
              >
                Train Your AI Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* Style Examples */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4 mr-2" />
                Different Teaching Styles Supported
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Voice, Perfectly Replicated
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our AI adapts to different teaching styles while maintaining the personal touch that makes your feedback unique.
              </p>
            </motion.div>

            <div className="space-y-8">
              {styles.map((style, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="text-center lg:text-left">
                      <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${style.color} text-white rounded-full text-sm font-medium mb-4`}>
                        {style.type} Style
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Teaching Style: {style.type}</h3>
                      <p className="text-gray-600">See how the AI transforms generic feedback into your unique voice.</p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="text-sm font-medium text-red-700 mb-2">❌ Generic AI Feedback</div>
                        <p className="text-red-600 italic">"{style.before}"</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                        <div className="text-sm font-medium text-emerald-700 mb-2">✅ Your Style Replicated</div>
                        <p className="text-emerald-700">"{style.after}"</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Screenshot */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="ml-4 text-gray-600 text-sm font-medium">Grading Interface</span>
                  </div>
                </div>
                <img 
                                      src="/Grading Interface .png?cb=1" 
                  alt="Teacher style learning and grading interface"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Process Steps */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Train Your AI in 3 Simple Steps
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our advanced machine learning analyzes your feedback patterns and replicates your teaching voice with remarkable accuracy.
                </p>
              </div>

              {trainingSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <span className="font-bold">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Heart className="h-6 w-6 text-purple-600" />
                  <span className="font-semibold text-purple-900">95% Teacher Satisfaction</span>
                </div>
                <p className="text-purple-700 text-sm">
                  "The AI feedback sounds exactly like what I would write. My students can't tell the difference!" 
                  - Mrs. Sarah Chen, English Department Head
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* User-Specific Benefits */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Perfect for Individual Teachers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to train an AI that writes feedback exactly like you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits['teachers'].map((benefit, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
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

      {/* Technical Details */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Advanced Style Analysis
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our proprietary AI analyzes multiple dimensions of your feedback to create a comprehensive style profile.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Tone & Voice Analysis</h3>
                    <p className="text-gray-600 text-sm">Identifies whether you're encouraging, direct, formal, or conversational in your feedback approach.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Structure Patterns</h3>
                    <p className="text-gray-600 text-sm">Learns how you organize feedback - positive first, specific examples, improvement suggestions.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Language Preferences</h3>
                    <p className="text-gray-600 text-sm">Captures your specific vocabulary, phrase choices, and communication style.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Focus Areas</h3>
                    <p className="text-gray-600 text-sm">Identifies what you prioritize - grammar, content, structure, creativity, or critical thinking.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Continuous Learning</h3>
                <p className="text-gray-600 mb-6">
                  The AI continues to refine its understanding of your style with every essay you review and approve, 
                  becoming more accurate over time.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">95%</div>
                    <div className="text-gray-600">Style Accuracy</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">3</div>
                    <div className="text-gray-600">Samples to Start</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Train Your AI Teaching Assistant?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Start with just 3 sample feedbacks and watch the AI learn your unique teaching style. 
            Your voice, amplified by artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/beta/demo" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              Start Style Training
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/beta/contact" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-colors"
            >
              Get Personal Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeacherStyleLearning;