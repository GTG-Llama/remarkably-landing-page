import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { getPageSEO } from '../utils/seo-config';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Quote, 
  Users, 
  Award, 
  ArrowRight,
  Sparkles,
  CheckCircle,
  Clock,
  Target,
  Heart,
  TrendingUp
} from 'lucide-react';

const Testimonials: React.FC = () => {
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

  const testimonials = [
    {
      quote: "Remarkably has completely transformed my grading workflow. What used to take me entire weekends now takes just a few hours. The AI feedback is incredibly detailed and helps my students improve their writing significantly.",
      author: "Dr. Sarah Chen",
      role: "English Department Head",
      school: "Singapore International School",
      rating: 5,
      image: "SC",
      category: "Time Savings"
    },
    {
      quote: "I was initially skeptical about AI grading, but Remarkably's accuracy and consistency have won me over. It maintains the same high standards across all essays, something I struggled with during long grading sessions.",
      author: "Michael Rodriguez",
      role: "Literature Teacher", 
      school: "Victoria Junior College",
      rating: 5,
      image: "MR",
      category: "Quality & Consistency"
    },
    {
      quote: "The time savings are incredible. I can now provide detailed feedback to all 150 of my students without sacrificing quality. My work-life balance has improved dramatically.",
      author: "Dr. Emily Watson",
      role: "Professor of English",
      school: "National University of Singapore",
      rating: 5,
      image: "EW",
      category: "Work-Life Balance"
    },
    {
      quote: "Remarkably's OCR technology is amazing. It reads my students' handwriting better than I can sometimes! The feedback quality is exceptional and really helps students understand their mistakes.",
      author: "James Liu",
      role: "Secondary School Teacher",
      school: "Raffles Institution",
      rating: 5,
      image: "JL",
      category: "Technology"
    },
    {
      quote: "As a department coordinator, I love how Remarkably ensures consistency across all our teachers' grading. The analytics help us identify students who need extra support.",
      author: "Dr. Priya Sharma",
      role: "English Department Coordinator",
      school: "Anglo-Chinese School",
      rating: 5,
      image: "PS",
      category: "Analytics & Insights"
    },
    {
      quote: "The student progress tracking is invaluable. I can see exactly how each student is improving over time and adjust my teaching accordingly. It's like having a teaching assistant that never sleeps.",
      author: "Robert Kim",
      role: "IB English Teacher",
      school: "United World College",
      rating: 5,
      image: "RK",
      category: "Progress Tracking"
    }
  ];

  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "1,000+",
      label: "Teachers Worldwide",
      description: "Across Singapore and internationally",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "50+",
      label: "Schools & Institutions",
      description: "MOE and international schools",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Star className="h-8 w-8" />,
      number: "4.9/5",
      label: "Average Rating",
      description: "From educator reviews",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      number: "95%",
      label: "Satisfaction Rate",
      description: "Would recommend to colleagues",
      gradient: "from-rose-500 to-pink-500"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Save 5-7 Hours Weekly",
      description: "Teachers report saving significant time on grading",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Improve Student Outcomes",
      description: "Detailed feedback leads to better writing skills",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Maintain Quality Standards",
      description: "Consistent grading across all essays",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <>
      <SEOHead config={getPageSEO('testimonials')} pageKey="testimonials" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
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
              <Quote className="h-4 w-4 mr-2" />
              Teacher Testimonials
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Trusted by Educators
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent block mt-2">
                Worldwide
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover how teachers and institutions are transforming their grading 
              experience with Remarkably's AI-powered platform.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-8 mb-12 text-lg">
              <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
                <div className="flex space-x-1 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-800 font-semibold">4.9/5 rating</span>
              </div>
              <div className="text-gray-600 font-medium">1,000+ teachers</div>
              <div className="text-gray-600 font-medium">50+ schools</div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/beta/demo" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Join Our Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/beta/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-gray-300"
              >
                Talk to an Expert
              </Link>
            </motion.div>
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
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Award className="h-4 w-4 mr-2" />
                Our Impact
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Trusted by Thousands
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real numbers from educators using Remarkably worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white shadow-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-900 font-bold text-lg mb-2">{stat.label}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
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
                Educator Voices
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Educators Are Saying
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real experiences from teachers who have transformed their grading with Remarkably
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden border border-gray-100"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Category Badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-semibold rounded-full mb-4">
                      {testimonial.category}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <div className="relative mb-6">
                      <Quote className="h-8 w-8 text-blue-500 opacity-20 absolute -top-2 -left-2" />
                      <p className="text-gray-700 leading-relaxed text-lg italic relative z-10">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {testimonial.image}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg">{testimonial.author}</div>
                        <div className="text-blue-600 font-medium">{testimonial.role}</div>
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

      {/* Benefits Section */}
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
                <TrendingUp className="h-4 w-4 mr-2" />
                Key Benefits
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Teachers Choose Remarkably
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The most common benefits our educators experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center text-white shadow-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{benefit.description}</p>
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
                Ready to Join These Educators?
              </h2>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                Join thousands of teachers who have transformed their grading experience. 
                Start your free trial today and see the difference.
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

export default Testimonials; 