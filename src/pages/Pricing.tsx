import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { getPageSEO } from '../utils/seo-config';
import { Link } from 'react-router-dom';
import { 
  Check, 
  X, 
  Star, 
  ArrowRight, 
  Calculator, 
  Clock, 
  DollarSign,
  Users,
  Zap,
  Shield,
  Sparkles,
  ChevronDown,
  Award,
  TrendingUp,
  FileText,
  BarChart3,
  BookOpen,
  Headphones,
  Crown,
  Building2,
  GraduationCap,
  Phone,
  Mail,
  Calendar,
  UserCheck,
  Settings
} from 'lucide-react';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [activeFeatureTab, setActiveFeatureTab] = useState('grading');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'teachers' | 'institutions'>('teachers');

  const teacherPlans = [
    {
      name: 'Starter',
      subtitle: 'Perfect for new teachers',
      price: { monthly: 20.99, yearly: 16.99 },
      originalPrice: { yearly: 20.99 },
      color: 'from-gray-500 to-gray-700',
      features: [
        'Up to 20 essays per month',
        'Basic AI grading',
        'Standard rubrics',
        'Email support',
        'PDF export',
        'Basic analytics'
      ],
      cta: 'Start Free 30-Day Trial',
      popular: false,
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      name: 'Professional',
      subtitle: 'Most popular for active teachers',
      price: { monthly: 29.99, yearly: 23.99 },
      originalPrice: { yearly: 29.99 },
      color: 'from-blue-600 to-cyan-600',
      features: [
        'Up to 30 essays per month',
        'Advanced AI grading',
        'Custom rubrics',
        'Priority support',
        'Advanced analytics',
        'Bulk upload',
        'Grade tracking',
        'Student progress reports'
      ],
      cta: 'Start Free 30-Day Trial',
      popular: true,
      icon: <Award className="w-6 h-6" />
    },
    {
      name: 'Expert',
      subtitle: 'For experienced educators',
      price: { monthly: 38.99, yearly: 31.99 },
      originalPrice: { yearly: 38.99 },
      color: 'from-purple-600 to-indigo-600',
      features: [
        'Unlimited essays per month',
        'Premium AI grading',
        'Custom rubrics & templates',
        'Priority support',
        'Full analytics suite',
        'Bulk upload',
        'Grade tracking',
        'Student progress reports',
        'White-label reports'
      ],
      cta: 'Start Free 30-Day Trial',
      popular: false,
      icon: <Crown className="w-6 h-6" />
    }
  ];

  const schoolFeatures = [
    {
      title: 'Unlimited Teachers & Students',
      description: 'No per-user limits, scale to your entire institution',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Custom Implementation',
      description: 'Tailored setup and integration with your existing systems',
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: 'Advanced Analytics',
      description: 'School-wide insights, department reporting, and progress tracking',
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: 'Dedicated Support',
      description: '24/7 priority support with dedicated account manager',
      icon: <Headphones className="w-8 h-8" />
    },
    {
      title: 'Training & Onboarding',
      description: 'Comprehensive teacher training and ongoing professional development',
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      title: 'Data Security & Compliance',
      description: 'Enterprise-grade security, GDPR compliance, and data sovereignty',
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const featureTabs = [
    { id: 'grading', label: 'AI Grading', icon: <FileText className="w-5 h-5" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'collaboration', label: 'Collaboration', icon: <Users className="w-5 h-5" /> },
    { id: 'integration', label: 'Integration', icon: <Zap className="w-5 h-5" /> }
  ];

  const featureContent = {
    grading: {
      title: 'Advanced AI Essay Grading',
      description: 'Our AI provides detailed, personalized feedback on every essay, saving you 6-7x time while maintaining educational quality.',
                  image: '/Essay Grader Dashboard.png?cb=1',
      features: [
        'Intelligent rubric-based scoring',
        'Detailed strength & weakness analysis',
        'Personalized improvement suggestions',
        'Handwriting recognition support'
      ]
    },
    analytics: {
      title: 'Comprehensive Analytics Dashboard',
      description: 'Track student progress, identify learning patterns, and make data-driven teaching decisions with powerful analytics.',
                  image: '/Grade and User Dashboard.png?cb=1',
      features: [
        'Student performance tracking',
        'Class average comparisons',
        'Progress over time visualization',
        'Exportable reports for admin'
      ]
    },
    collaboration: {
      title: 'Team Collaboration Tools',
      description: 'Work seamlessly with other teachers, share rubrics, and maintain consistency across your institution.',
                  image: '/Create Class Feature.png?cb=1',
      features: [
        'Shared rubric libraries',
        'Team grading workflows',
        'Comment templates',
        'Peer review capabilities'
      ]
    },
    integration: {
      title: 'LMS & Platform Integration',
      description: 'Seamlessly integrate with your existing learning management system and workflow tools.',
                  image: '/Grading Interface .png?cb=1',
      features: [
        'Google Classroom integration',
        'Canvas LMS support',
        'Bulk import/export',
        'API access for custom workflows'
      ]
    }
  };

  const testimonials = [
    {
      name: "Mavis Low",
      role: "Vice-Principal",
      school: "Lianhua Primary School",
      quote: "Engaging the services of the Remarkably AI essay grader was a strategic decision to reduce the time spent on marking, allowing teachers to focus on higher-value tasks such as lesson preparation and personalized student support. By leveraging AI, our teachers can provide more timely feedback, identify learning gaps efficiently, and dedicate more attention to nurturing students' writing skills.",
      rating: 5,
      image: "ML",
      type: "teacher"
    },
    {
      name: "Pavitra",
      role: "English Teacher",
      school: "MOE School",
      quote: "With Remarkably, I cut grading time from 15 minutes to 3 minutes per essay. Beyond speed, it’s helped me give clearer, more meaningful feedback to support my students’ growth.",
      rating: 5,
      image: "PV",
      type: "teacher"
    },
    {
      name: "Dr Lim",
      role: "English Teacher",
      school: "Raffles Institution",
      quote: "Marking is a critical part of teaching, but it can be time-consuming and exhausting. With AI tools, we have a real opportunity to speed up feedback cycles—helping students improve faster by closing the feedback loop. The potential to streamline grading while retaining teacher oversight is incredibly promising.",
      rating: 5,
      image: "DL",
      type: "school"
    }
  ];

  const faqs = [
    {
      question: "How does the 30-day free trial work for teachers?",
      answer: "Start with any teacher plan completely free for 30 days. No setup fees. You get full access to all features of your chosen plan. Cancel anytime during the trial period.",
      category: "teacher"
    },
    {
      question: "Can I switch between teacher plans anytime?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences in your next billing cycle.",
      category: "teacher"
    },
    {
      question: "What happens if I exceed my essay limit?",
      answer: "We'll notify you when approaching your limit. You can either upgrade your plan or purchase additional essay credits. We never stop your service unexpectedly.",
      category: "teacher"
    },
    {
      question: "How does school pricing work?",
      answer: "School pricing is customized based on your number of teachers, students, and specific requests. We offer volume discounts and flexible payment terms for educational institutions, reach out to us to know more!",
      category: "school"
    },
    {
      question: "What's included in school implementation?",
      answer: "School packages include unlimited users, custom setup, data migration, teacher training, dedicated support, and ongoing professional development resources.",
      category: "school"
    },
    {
      question: "Do you offer pilot programs for schools?",
      answer: "Yes! We offer 60-day pilot programs for schools to test Remarkably with a select group of teachers before full implementation.",
      category: "school"
    }
  ];

  const savings = billingCycle === 'yearly' ? 
    Math.round(((teacherPlans[1].originalPrice.yearly - teacherPlans[1].price.yearly) / teacherPlans[1].originalPrice.yearly) * 100) : 0;

  return (
    <>
      <SEOHead config={getPageSEO('pricing')} pageKey="pricing" />

      {/* Hero Section */}
      <section className="relative pt-16 pb-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
            </div>
            
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-4"
            >
              <DollarSign className="w-4 h-4 mr-2" />
              Simple, Transparent Pricing
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Pricing for Every
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Educator</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto"
            >
              Whether you're an individual teacher or a school leader, we have the perfect solution 
              to transform your grading experience. Start your free trial today.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            {/* Tab Selection */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 p-1 rounded-full shadow-lg border border-gray-200">
                <div className="flex items-center">
                  <button
                    onClick={() => setActiveTab('teachers')}
                    className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${
                      activeTab === 'teachers'
                        ? 'bg-white text-gray-900 shadow-lg'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    For Teachers
                  </button>
                  <button
                    onClick={() => setActiveTab('institutions')}
                    className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${
                      activeTab === 'institutions'
                        ? 'bg-white text-gray-900 shadow-lg'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    For Institutions
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Teachers Tab Content */}
          {activeTab === 'teachers' && (
            <div>
              <div className="text-center mb-8">
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                  Choose the plan that fits your classroom size and needs. All plans include our core AI grading features 
                  with a 30-day free trial.
                </p>

                {/* Billing Toggle */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col items-center justify-center mb-8"
                >
                  {/* Static Savings Text */}
                  <div className="mb-3">
                    <p className="text-sm text-gray-600 font-medium">
                      Up to 20% off annually
                    </p>
                  </div>
                  
                  {/* Toggle Switch with Labels Outside */}
                  <div className="flex items-center space-x-8">
                    <span className={`text-base font-semibold transition-all duration-300 ${
                      billingCycle === 'monthly' 
                        ? 'text-blue-600 scale-110' 
                        : 'text-gray-400 hover:text-gray-600'
                    }`}>
                      Monthly
                    </span>
                    
                    <div className="relative">
                      <button
                        onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                        className={`relative w-16 h-8 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-3 focus:ring-blue-300 focus:ring-offset-2 transform hover:scale-105 ${
                          billingCycle === 'yearly' 
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/25' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      >
                        <div className={`absolute top-0.5 left-0.5 w-7 h-7 bg-white rounded-full shadow-lg transform transition-all duration-300 ease-in-out flex items-center justify-center ${
                          billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0'
                        }`}>
                          {billingCycle === 'yearly' ? (
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                          ) : (
                            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                          )}
                        </div>
                      </button>
                    </div>
                    
                    <span className={`text-base font-semibold transition-all duration-300 ${
                      billingCycle === 'yearly' 
                        ? 'text-blue-600 scale-110' 
                        : 'text-gray-400 hover:text-gray-600'
                    }`}>
                      Annually
                    </span>
                  </div>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {teacherPlans.map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    onMouseEnter={() => setHoveredPlan(index)}
                    onMouseLeave={() => setHoveredPlan(null)}
                    className="relative"
                  >
                    {plan.popular && (
                      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                          <Star className="w-4 h-4 mr-1 fill-current" />
                          Most Popular
                        </div>
                    </div>
                  )}
                  
                    <div className={`relative h-full bg-white rounded-2xl border-2 transition-all duration-300 ${
                      plan.popular 
                        ? 'border-blue-500 shadow-xl' 
                        : hoveredPlan === index 
                          ? 'border-gray-300 shadow-lg' 
                          : 'border-gray-200 shadow-md'
                    } ${hoveredPlan === index ? 'transform scale-105' : ''}`}>
                      
                      <div className="p-8">
                        <div className="text-center mb-8">
                          <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl mb-4`}>
                            <div className="text-white">
                              {plan.icon}
                            </div>
                          </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                          <p className="text-gray-600 text-sm mb-6">{plan.subtitle}</p>
                  
                  <div className="mb-6">
                            <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">
                                ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                              </span>
                              <span className="text-gray-600 ml-2">per month</span>
                            </div>
                            {billingCycle === 'yearly' && (
                              <div className="mt-2">
                                <span className="text-sm text-gray-500 line-through">
                                  ${plan.originalPrice.yearly}/mo
                      </span>
                                <span className="text-sm text-green-600 ml-2 font-medium">
                                  Save ${Math.round((plan.originalPrice.yearly - plan.price.yearly) * 12)}/year
                      </span>
                    </div>
                    )}
                  </div>

                  <Link
                            to="/contact"
                            className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                              plan.popular
                                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl'
                                : 'bg-gray-900 text-white hover:bg-gray-800'
                            }`}
                  >
                    {plan.cta}
                            <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>

                        <div className="space-y-4">
                          <div className="text-sm font-medium text-gray-900 mb-3">What's included:</div>
                          {plan.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center">
                              <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Institutions Tab Content */}
          {activeTab === 'institutions' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* School Features */}
              <div className="space-y-8">
                <div className="text-center lg:text-left mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Transform Your Entire School
                  </h2>
                  <p className="text-xl text-gray-600">
                    Comprehensive solutions designed for educational institutions. 
                    Custom pricing, unlimited users, and dedicated support.
                  </p>
                      </div>
                {schoolFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
                      </div>

              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12"
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl mb-6">
                    <Building2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Enterprise Solution</h3>
                  <p className="text-gray-600 mb-6">
                    Get a tailored solution that fits your institution's unique needs and budget.
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700">Teachers & Students</span>
                    <span className="font-medium text-gray-900">Unlimited</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700">Setup & Training</span>
                    <span className="font-medium text-gray-900">Included</span>
                      </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700">Support Level</span>
                    <span className="font-medium text-gray-900">Dedicated</span>
                      </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-700">Implementation</span>
                    <span className="font-medium text-gray-900">60 days</span>
                      </div>
                    </div>

                <div className="space-y-4">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule a Demo
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-all duration-200"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Request Quote
                  </Link>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Or call us at +65 8888 8888
                  </p>
                      </div>
              </motion.div>
                      </div>
          )}
                      </div>
      </section>



      {/* Feature Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the features that make Remarkably the complete solution for modern educators
            </p>
                    </div>

          {/* Feature Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            {featureTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFeatureTab(tab.id)}
                className={`flex items-center px-6 py-3 m-2 rounded-lg font-medium transition-all duration-200 ${
                  activeFeatureTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:text-blue-600 border border-gray-200'
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
                      </div>

          {/* Feature Content */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {featureContent[activeFeatureTab].title}
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  {featureContent[activeFeatureTab].description}
                </p>
                <div className="space-y-4">
                  {featureContent[activeFeatureTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  </div>
                  </div>
              <div className="bg-gray-50 p-8 lg:p-12 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg p-4 max-w-full">
                  <img
                    src={featureContent[activeFeatureTab].image}
                    alt={featureContent[activeFeatureTab].title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Loved by Teachers & Schools Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See what educators are saying about Remarkably
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-medium text-sm mr-4 ${
                    testimonial.type === 'school' 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600' 
                      : 'bg-gradient-to-r from-blue-600 to-cyan-600'
                  }`}>
                    {testimonial.image}
              </div>
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className={`text-sm ${
                      testimonial.type === 'school' ? 'text-purple-600' : 'text-blue-600'
                    }`}>{testimonial.school}</div>
              </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
              <p className="text-xl text-gray-600">
              Everything you need to know about pricing and plans
              </p>
            </div>

          <div className="space-y-4">
              {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      faq.category === 'school' ? 'bg-purple-500' : 'bg-blue-500'
                    }`}></div>
                    <span className="font-medium text-gray-900">{faq.question}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    expandedFAQ === index ? 'transform rotate-180' : ''
                  }`} />
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 ml-6">{faq.answer}</p>
                  </div>
                )}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Grading?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
            Save hours every week with Remarkably now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Start Free Teacher Trial
              <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-medium rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Schedule School Demo
              </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing; 