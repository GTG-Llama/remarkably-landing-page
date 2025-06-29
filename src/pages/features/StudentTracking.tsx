import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  CheckCircle, 
  ArrowRight, 
  TrendingUp, 
  Target, 
  Calendar, 
  Building,
  Clock,
  BarChart3,
  ChevronLeft,
  Play,
  Sparkles,
  BookOpen,
  FileText,
  Star,
  Award,
  Eye,
  MessageCircle,
  AlertTriangle
} from 'lucide-react';

const StudentTracking: React.FC = () => {
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
        icon: <TrendingUp className="h-6 w-6" />,
        title: "Watch Students Improve",
        description: "See concrete evidence of student growth over time with detailed progress charts and milestone tracking."
      },
      {
        icon: <AlertTriangle className="h-6 w-6" />,
        title: "Early Intervention Alerts",
        description: "Identify students who need extra support before they fall behind with automated progress monitoring."
      },
      {
        icon: <MessageCircle className="h-6 w-6" />,
        title: "Parent Communication Tools",
        description: "Share progress reports and writing portfolios with parents to support learning at home."
      }
    ],
    schools: [
      {
        icon: <Building className="h-6 w-6" />,
        title: "School-Wide Monitoring",
        description: "Track student progress across all grades and teachers to identify trends and intervention needs."
      },
      {
        icon: <BarChart3 className="h-6 w-6" />,
        title: "Data-Driven Insights",
        description: "Generate comprehensive reports for administrators showing student growth and program effectiveness."
      },
      {
        icon: <Calendar className="h-6 w-6" />,
        title: "Longitudinal Analysis",
        description: "Follow student writing development across multiple years to measure long-term program impact."
      }
    ]
  };

  const trackingFeatures = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Progress Visualization",
      description: "Interactive charts showing student improvement in grammar, structure, content, and style over time.",
      timeframe: "Real-time updates"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Skill Development Maps",
      description: "Detailed breakdowns showing exactly which writing skills students have mastered and what's next.",
      timeframe: "Skill-by-skill tracking"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Achievement Milestones",
      description: "Celebrate student accomplishments with automated recognition of writing goals and improvements.",
      timeframe: "Milestone alerts"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Portfolio Development",
      description: "Automatically create student writing portfolios showing growth and best work over time.",
      timeframe: "Continuous building"
    }
  ];

  const progressStages = [
    {
      stage: "Baseline Assessment",
      description: "Establish starting point with comprehensive analysis of student's current writing abilities",
      icon: <Target className="h-6 w-6" />,
      color: "from-gray-500 to-gray-600"
    },
    {
      stage: "Continuous Monitoring",
      description: "Track improvement across every assignment with detailed skill-specific progress metrics",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      stage: "Growth Visualization",
      description: "See progress trends and celebrate achievements with students, parents, and administrators",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "from-emerald-500 to-green-600"
    }
  ];

  const sampleMetrics = [
    {
      metric: "Writing Quality Score",
      week1: "72%",
      week8: "89%",
      improvement: "+17 points",
      trend: "↗️"
    },
    {
      metric: "Grammar Accuracy",
      week1: "68%",
      week8: "91%",
      improvement: "+23 points",
      trend: "↗️"
    },
    {
      metric: "Argument Structure",
      week1: "65%",
      week8: "84%",
      improvement: "+19 points",
      trend: "↗️"
    },
    {
      metric: "Vocabulary Complexity",
      week1: "71%",
      week8: "88%",
      improvement: "+17 points",
      trend: "↗️"
    }
  ];

  return (
    <>
      <SEOHead 
        config={{
          title: "Student Tracking - Monitor Writing Progress Over Time | Remarkably",
          description: "Track individual student writing progress with detailed analytics, portfolio development, and early intervention alerts. Support every student's growth.",
          keywords: ["student progress tracking", "writing development", "student analytics", "progress monitoring", "educational assessment"]
        }} 
        pageKey="student-tracking" 
      />

      {/* Breadcrumb Navigation */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/beta" className="text-gray-600 hover:text-indigo-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/beta/features" className="text-gray-600 hover:text-indigo-600">Features</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Student Tracking</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-cyan-50 relative overflow-hidden">
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
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                <Users className="h-10 w-10" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Track Every Student's
                <span className="text-teal-600 block">Writing Journey</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Monitor individual student progress over time with detailed analytics, portfolio development, 
                and early intervention alerts. Support every student's growth.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/beta/demo" 
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center"
              >
                <Play className="mr-2 h-5 w-5" />
                View Progress Demo
              </Link>
              <Link 
                to="/beta/contact" 
                className="bg-white border-2 border-teal-200 text-teal-700 hover:bg-teal-50 font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center"
              >
                Start Tracking Students
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

      {/* Progress Tracking Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
                <Calendar className="h-4 w-4 mr-2" />
                Continuous Progress Monitoring
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How Student Tracking Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From initial assessment to long-term growth tracking, see how we monitor and support every student's writing development.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {progressStages.map((stage, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${stage.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6`}>
                    {stage.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{stage.stage}</h3>
                  <p className="text-gray-600">{stage.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Sample Progress Table */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-600 px-6 py-4">
                <h3 className="text-xl font-semibold text-white">Sample Student Progress: Sarah M. (8-Week Period)</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Writing Skill</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Week 1</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Week 8</th>
                      <th className="px-6 py-4 text-left font-semibold text-teal-600">Improvement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {sampleMetrics.map((metric, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">{metric.metric}</td>
                        <td className="px-6 py-4 text-gray-600">{metric.week1}</td>
                        <td className="px-6 py-4 text-gray-900 font-semibold">{metric.week8}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                            {metric.trend} {metric.improvement}
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

      {/* Tracking Features */}
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
                Comprehensive Tracking Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every aspect of student writing development is monitored and visualized to support targeted instruction and growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trackingFeatures.map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                        <span className="text-sm font-medium text-teal-600 bg-teal-100 px-2 py-1 rounded">{feature.timeframe}</span>
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
      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
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
                  ? 'Get the insights you need to support every student\'s writing journey and celebrate their progress.'
                  : 'Scale student monitoring across your entire institution with comprehensive tracking and reporting.'
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
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 mb-6">
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

      {/* Portfolio & Communication */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Student Portfolios & Parent Communication
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Automatically create beautiful student writing portfolios that showcase growth over time. 
                Share progress with parents and celebrate achievements together.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                  <span className="text-gray-700">Automated portfolio generation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                  <span className="text-gray-700">Parent-friendly progress reports</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                  <span className="text-gray-700">Achievement celebration tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                  <span className="text-gray-700">Conference preparation assistance</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Real Student Growth</h3>
                <p className="text-gray-600 mb-6">
                  See how consistent tracking and feedback leads to measurable improvement in student writing skills.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-teal-600 mb-1">73%</div>
                    <div className="text-gray-600">Avg. Improvement</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-teal-600 mb-1">8 weeks</div>
                    <div className="text-gray-600">To See Growth</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-teal-600 mb-1">95%</div>
                    <div className="text-gray-600">Parent Satisfaction</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-teal-600 mb-1">100%</div>
                    <div className="text-gray-600">Progress Tracked</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Track Student Success?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Start monitoring student writing progress and celebrate every achievement along the way. 
            Your students will love seeing their growth!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/beta/demo" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              View Tracking Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/beta/contact" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-teal-600 transition-colors"
            >
              Get Personal Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentTracking;