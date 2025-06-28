import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Building,
  Clock,
  Target,
  ChevronLeft,
  Play,
  Sparkles,
  BookOpen,
  FileText,
  PieChart,
  LineChart,
  Eye,
  AlertCircle
} from 'lucide-react';

const AnalyticsDashboard: React.FC = () => {
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
        title: "Track Student Progress",
        description: "Monitor individual student writing improvement with detailed progress charts and trend analysis."
      },
      {
        icon: <Target className="h-6 w-6" />,
        title: "Identify Learning Gaps",
        description: "Spot exactly where students struggle - grammar, structure, or content - with detailed breakdowns."
      },
      {
        icon: <Clock className="h-6 w-6" />,
        title: "Save Planning Time",
        description: "Use analytics to inform lesson planning and focus on areas where your class needs the most help."
      }
    ],
    schools: [
      {
        icon: <Building className="h-6 w-6" />,
        title: "Department-Wide Insights",
        description: "Compare performance across teachers, classes, and grade levels with comprehensive reporting."
      },
      {
        icon: <BarChart3 className="h-6 w-6" />,
        title: "Data-Driven Decisions",
        description: "Make informed curriculum and staffing decisions based on real student performance data."
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Custom Reporting",
        description: "Generate detailed reports for administrators, parents, and district officials with one click."
      }
    ]
  };

  const analyticsFeatures = [
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Real-Time Progress Tracking",
      description: "Watch student writing skills improve over time with detailed trend analysis and performance charts.",
      metric: "Weekly Updates"
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "Skill Breakdown Analysis",
      description: "See exactly where students excel and struggle across grammar, content, structure, and style.",
      metric: "12 Categories"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Class Performance Metrics",
      description: "Monitor overall class progress and identify students who need additional support or challenge.",
      metric: "Live Dashboard"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Learning Gap Detection",
      description: "Automatically identify common mistakes and learning gaps across your entire class.",
      metric: "Instant Alerts"
    }
  ];

  const dashboardViews = [
    {
      view: "Teacher Overview",
      description: "See all your classes, recent activity, and key performance indicators at a glance.",
      features: ["Class averages", "Recent submissions", "Progress alerts", "Quick actions"],
      image: "/Grade and User Dashboard.png",
      imageAlt: "Teacher Dashboard showing class overview with grades and student progress"
    },
    {
      view: "Student Analytics",
      description: "Deep dive into individual student performance with detailed writing skill analysis.",
      features: ["Writing progression", "Skill breakdowns", "Improvement suggestions", "Parent reports"],
      image: "/Individual Student Dashboard.png",
      imageAlt: "Individual student analytics dashboard with detailed performance metrics"
    },
    {
      view: "Class Performance",
      description: "Monitor entire class trends and identify opportunities for targeted instruction.",
      features: ["Class averages", "Common challenges", "Top performers", "Curriculum alignment"],
      image: "/Class Avg and Student Scores.png",
      imageAlt: "Class performance dashboard showing average scores and student comparisons"
    }
  ];

  return (
    <>
      <SEOHead 
        config={{
          title: "Analytics Dashboard - Track Student Progress & Performance | Remarkably",
          description: "Monitor student writing progress with detailed analytics, performance tracking, and data-driven insights. Identify learning gaps and improve outcomes.",
          keywords: ["student analytics", "performance tracking", "progress monitoring", "education data", "learning insights"]
        }} 
        pageKey="analytics-dashboard" 
      />

      {/* Breadcrumb Navigation */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/beta" className="text-gray-600 hover:text-indigo-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/beta/features" className="text-gray-600 hover:text-indigo-600">Features</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Analytics Dashboard</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
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
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                <BarChart3 className="h-10 w-10" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                See Student Progress
                <span className="text-blue-600 block">Like Never Before</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform how you understand student learning with detailed analytics, progress tracking, 
                and insights that help every student succeed.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/beta/demo" 
                className="btn-primary hover-lift inline-flex items-center"
              >
                <Play className="mr-2 h-5 w-5" />
                View Dashboard Demo
              </Link>
              <Link 
                to="/beta/contact" 
                className="btn-secondary hover-lift inline-flex items-center"
              >
                Get Analytics Access
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

      {/* Dashboard Views */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Eye className="h-4 w-4 mr-2" />
                Comprehensive Views
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Multiple Ways to Understand Student Progress
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From quick overviews to detailed individual analysis, get the insights you need to support every student.
              </p>
            </motion.div>

            <div className="space-y-8">
              {dashboardViews.map((view, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{view.view}</h3>
                      <p className="text-gray-600 mb-6 text-lg">{view.description}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {view.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative">
                      <img 
                        src={view.image}
                        alt={view.imageAlt}
                        className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-sm font-medium text-gray-700">{view.view} Preview</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analytics Features Grid */}
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
                Powerful Analytics Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced data analysis tools designed specifically for educational environments and student writing assessment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {analyticsFeatures.map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                        <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">{feature.metric}</span>
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
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
                  ? 'Get the insights you need to help every student improve their writing and reach their potential.'
                  : 'Scale data-driven decision making across your entire institution with comprehensive analytics.'
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
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
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

      {/* Data Security & Privacy */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Secure & Private Analytics
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                All student data is encrypted and protected with enterprise-grade security. Analytics insights 
                are generated while maintaining complete student privacy and FERPA compliance.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                  <span className="text-gray-700">FERPA compliant data handling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                  <span className="text-gray-700">256-bit encryption for all data</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                  <span className="text-gray-700">Anonymized analytics options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                  <span className="text-gray-700">Granular permission controls</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  <AlertCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacy-First Analytics</h3>
                <p className="text-gray-600 mb-6">
                  Generate powerful insights while keeping student information completely secure and private.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                    <div className="text-gray-600">Secure</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">SOC 2</div>
                    <div className="text-gray-600">Certified</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">FERPA</div>
                    <div className="text-gray-600">Compliant</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
                    <div className="text-gray-600">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Student Insights?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start making data-driven decisions that improve student outcomes. 
            See how analytics can transform your teaching approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/beta/demo" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              Explore Analytics Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/beta/contact" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Custom Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnalyticsDashboard;