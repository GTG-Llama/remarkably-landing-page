import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { getPageSEO } from '../utils/seo-config';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Target, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  BookOpen,
  BarChart3,
  Award,
  Sparkles,
  Heart,
  Star
} from 'lucide-react';

const Benefits: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
        duration: 0.6,
      },
    },
  };

  const primaryBenefits = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Save 80% of Grading Time",
      description: "Reduce grading time from 15-20 minutes to just 3-5 minutes per essay",
      details: "Our AI processes essays instantly, allowing you to focus on teaching rather than repetitive grading tasks. Spend more time with students and less time at your desk.",
      stats: "15-20 min → 3-5 min per essay",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Consistent Grading Standards",
      description: "Eliminate bias and maintain uniform assessment criteria across all essays",
      details: "AI ensures every essay is graded with the same standards, removing human inconsistencies caused by fatigue, mood, or unconscious bias.",
      stats: "100% consistent standards",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Enhanced Student Learning",
      description: "Provide detailed, constructive feedback that helps students improve",
      details: "Students receive comprehensive feedback on grammar, structure, content, and style, enabling them to understand their strengths and areas for improvement.",
      stats: "Detailed feedback on every essay",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    }
  ];

  const additionalBenefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Scale Effortlessly",
      description: "Handle any class size without increasing workload",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Reduce Teacher Burnout",
      description: "Eliminate the stress of overwhelming grading loads",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Track Progress",
      description: "Monitor student improvement over time with analytics",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Improve Outcomes",
      description: "Better feedback leads to better student performance",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Professional Growth",
      description: "Spend saved time on curriculum development",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Results",
      description: "Get feedback immediately, not days later",
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  const testimonials = [
    {
      quote: "With Remarkably, I cut grading time from 15 minutes to 3 minutes per essay. Beyond speed, it's helped me give clearer, more meaningful feedback to support my students' growth.",
      author: "Pavitra",
      role: "English Teacher",
      school: "MOE School",
      avatar: "P"
    },
    {
      quote: "Engaging the services of the Remarkably AI essay grader was a strategic decision to reduce the time spent on marking, allowing teachers to focus on higher-value tasks such as lesson preparation and personalised student support. By leveraging AI, our teachers can provide more timely feedback, identify learning gaps efficiently, and dedicate more attention to nurturing students' writing skills. This technology empowers our teachers to teach more effectively while managing their workload stress.",
      author: "Mrs Mavis Low",
      role: "Vice-Principal",
      school: "Lianhua Primary School",
      avatar: "ML"
    },
    {
      quote: "Marking is a critical part of teaching, but it can be time-consuming and exhausting. With AI tools, we have a real opportunity to speed up feedback cycles—helping students improve faster by closing the feedback loop. The potential to streamline grading while retaining teacher oversight is incredibly promising.",
      author: "Dr Lim",
      role: "English Teacher",
      school: "Raffles Institution",
      avatar: "DL"
    }
  ];

  const stats = [
    { 
      icon: <Clock className="h-8 w-8" />, 
      value: "80%", 
      label: "Time Saved", 
      description: "Average reduction in grading time",
      gradient: "from-amber-500 to-orange-500"
    },
    { 
      icon: <Users className="h-8 w-8" />, 
      value: "95%", 
      label: "Teacher Satisfaction", 
      description: "Would recommend to colleagues",
      gradient: "from-emerald-500 to-teal-500"
    },
    { 
      icon: <TrendingUp className="h-8 w-8" />, 
      value: "25%", 
      label: "Student Improvement", 
      description: "Average grade improvement with detailed feedback",
      gradient: "from-blue-500 to-indigo-500"
    },
    { 
      icon: <Heart className="h-8 w-8" />, 
      value: "10+", 
      label: "Countries", 
      description: "Educators worldwide",
      gradient: "from-rose-500 to-pink-500"
    }
  ];

  const comparisonData = [
    {
      aspect: "Time per Essay",
      traditional: "15-20 minutes",
      remarkably: "3-5 minutes",
      improvement: "80% faster"
    },
    {
      aspect: "Consistency",
      traditional: "Variable",
      remarkably: "100% consistent",
      improvement: "Perfect standards"
    },
    {
      aspect: "Feedback Quality",
      traditional: "Limited by time",
      remarkably: "Comprehensive",
      improvement: "Detailed insights"
    },
    {
      aspect: "Scalability",
      traditional: "Limited capacity",
      remarkably: "Unlimited",
      improvement: "No limits"
    }
  ];

  return (
    <>
      <SEOHead config={getPageSEO('benefits')} pageKey="benefits" />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-8">
              <Award className="h-4 w-4 mr-2" />
              Proven Benefits for Educators
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Transform Your Teaching with
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent block mt-2">
                AI-Powered Grading
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover how Remarkably's AI grading platform revolutionizes your teaching experience, 
              saves precious time, and dramatically improves student outcomes.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/beta/demo" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Experience the Benefits
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/beta/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-gray-300"
              >
                Schedule Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Primary Benefits */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4 mr-2" />
                Core Benefits
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The Three Ways We Transform Your Teaching
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These are the primary ways Remarkably revolutionizes your grading experience
              </p>
            </motion.div>

            <div className="space-y-24">
              {primaryBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center text-white shadow-2xl mb-8`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{benefit.title}</h3>
                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">{benefit.description}</p>
                    <p className="text-gray-700 mb-8 text-lg leading-relaxed">{benefit.details}</p>
                    <div className={`${benefit.bgColor} ${benefit.borderColor} border-2 rounded-2xl p-6 inline-block`}>
                      <span className="text-gray-900 font-bold text-lg">{benefit.stats}</span>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className={`bg-gradient-to-br ${benefit.gradient} rounded-3xl p-12 text-white shadow-2xl`}>
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                          {benefit.icon}
                        </div>
                        <h4 className="text-2xl font-bold mb-4">Real Impact</h4>
                        <div className="text-4xl font-black mb-4">{benefit.stats.split(' ')[0]}</div>
                        <p className="text-white/90 text-lg">{benefit.stats.split(' ').slice(1).join(' ')}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Benefits Grid */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Even More Benefits
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Additional ways Remarkably enhances your teaching experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center text-white shadow-lg mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Traditional vs. AI Grading
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See the clear advantages of AI-powered essay grading
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-6xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-gray-50 to-blue-50">
                      <tr>
                        <th className="px-8 py-6 text-left font-bold text-gray-900 text-lg">Aspect</th>
                        <th className="px-8 py-6 text-left font-bold text-gray-900 text-lg">Traditional Grading</th>
                        <th className="px-8 py-6 text-left font-bold text-gray-900 text-lg">Remarkably AI</th>
                        <th className="px-8 py-6 text-left font-bold text-blue-600 text-lg">Improvement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                          <td className="px-8 py-6 font-semibold text-gray-900">{row.aspect}</td>
                          <td className="px-8 py-6 text-gray-600">{row.traditional}</td>
                          <td className="px-8 py-6 text-gray-900 font-medium">{row.remarkably}</td>
                          <td className="px-8 py-6">
                            <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold rounded-full">
                              {row.improvement}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Educators Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real experiences from teachers using Remarkably worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed text-lg italic">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg">{testimonial.author}</div>
                        <div className="text-gray-600 font-medium">{testimonial.role}</div>
                        <div className="text-gray-500 text-sm">{testimonial.school}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Proven Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real data from educators using Remarkably worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white shadow-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-black text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-900 font-bold text-lg mb-2">{stat.label}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center"
          >
            <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience These Benefits?
              </h2>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                Join thousands of educators who have transformed their grading experience. 
                Start your free trial today and see the difference AI can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/beta/demo" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:text-blue-700 font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <Sparkles className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/beta/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Schedule Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Benefits; 