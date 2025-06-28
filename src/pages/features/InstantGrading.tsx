import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
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
  Award
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
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50 relative overflow-hidden">
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
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                <Zap className="h-10 w-10" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Grade Essays in
                <span className="text-emerald-600 block">Under 60 Seconds</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Experience lightning-fast grading with detailed feedback, rubric scoring, and explanations. 
                What used to take hours now takes minutes.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/beta/demo" 
                className="btn-primary hover-lift inline-flex items-center"
              >
                <Play className="mr-2 h-5 w-5" />
                See Speed Demo
              </Link>
              <Link 
                to="/beta/contact" 
                className="btn-secondary hover-lift inline-flex items-center"
              >
                Try Instant Grading
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

      {/* Speed Demonstration */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
                <Timer className="h-4 w-4 mr-2" />
                Lightning-Fast Processing
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                From Upload to Grade in 3 Simple Steps
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Watch how our AI transforms essay grading from a time-consuming process into an instant, accurate assessment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {gradingSteps.map((step, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                    {step.icon}
                  </div>
                  <div className="text-4xl font-bold text-emerald-600 mb-2">{step.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                    <Clock className="h-3 w-3 mr-1" />
                    {step.time}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Speed Comparison Table */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 px-6 py-4">
                <h3 className="text-xl font-semibold text-white">Speed Comparison</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Task</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Traditional Method</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Remarkably AI</th>
                      <th className="px-6 py-4 text-left font-semibold text-emerald-600">Time Savings</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {speedComparison.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">{row.task}</td>
                        <td className="px-6 py-4 text-gray-600">{row.traditional}</td>
                        <td className="px-6 py-4 text-gray-900">{row.remarkably}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                            {row.savings}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* User-Specific Benefits */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
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
                  ? 'Reclaim your weekends and spend more time on what matters - teaching and connecting with students.'
                  : 'Scale assessment capabilities across your entire institution with consistent, reliable grading standards.'
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
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
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
                Advanced Grading Engine
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our proprietary AI processes essays through multiple analysis layers, evaluating content, 
                structure, grammar, and argument quality with remarkable speed and accuracy.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Content Analysis</h3>
                    <p className="text-gray-600 text-sm">Evaluates argument strength, evidence quality, and thesis development in real-time.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Structure Assessment</h3>
                    <p className="text-gray-600 text-sm">Analyzes essay organization, paragraph flow, and logical progression instantly.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Grammar & Style</h3>
                    <p className="text-gray-600 text-sm">Identifies grammar issues and stylistic improvements with contextual suggestions.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Rubric Scoring</h3>
                    <p className="text-gray-600 text-sm">Applies custom rubrics with detailed scoring breakdowns for each criteria category.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Real Performance Metrics</h3>
                <p className="text-gray-600 mb-6">
                  See how instant grading transforms teacher productivity with measurable results from our pilot program.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600 mb-1">5-7×</div>
                    <div className="text-gray-600">Faster Grading</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600 mb-1">95%</div>
                    <div className="text-gray-600">Accuracy Rate</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600 mb-1">&lt; 60s</div>
                    <div className="text-gray-600">Per Essay</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600 mb-1">100%</div>
                    <div className="text-gray-600">Consistent</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Grade at Lightning Speed?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Transform your grading workflow from hours to minutes. Experience the power of instant, 
            accurate assessment that saves time without sacrificing quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/beta/demo" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              Start Speed Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/beta/contact" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Get Personal Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstantGrading;