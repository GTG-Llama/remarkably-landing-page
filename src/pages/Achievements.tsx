import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { getPageSEO } from '../utils/seo-config';
import { Link } from 'react-router-dom';
import { 
  Trophy, 
  Users, 
  Target, 
  Star, 
  Award, 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  Calendar, 
  Heart,
  Globe,
  Zap,
  TrendingUp,
  School,
  Clock,
  BookOpen
} from 'lucide-react';

const Achievements: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const supportedInstitutions = [
      { name: 'Google for Startups', logo: '/google.png?cb=1', description: 'Cloud credits and startup support program' },
  { name: 'NVIDIA Inception Program', logo: '/nvidia-inception.png?cb=1', description: 'AI acceleration and technology partnership' },
  { name: 'MongoDB for Startups', logo: '/mongodb.png?cb=1', description: 'Database infrastructure and support' },
  { name: 'NUS Enterprise', logo: '/nus-enterprise.png?cb=1', description: 'University incubation and mentorship' },
  { name: 'BLOCK71', logo: '/block71.png?cb=1', description: 'Singapore\'s leading startup ecosystem' },
  { name: 'The HANGAR', logo: '/hangar.png?cb=1', description: 'Aerospace and deep tech incubator' },
  { name: 'NUS Computing', logo: '/nus-soc.png?cb=1', description: 'School of Computing partnership' },
  { name: 'NUS', logo: '/nus.png?cb=1', description: 'National University of Singapore' }
  ];

  const awards = [
    {
      title: 'Best Pitch — NUS Ground Zero',
      years: '2024 & 2025',
      description: 'Top startup pitch competition at National University of Singapore',
      icon: <Trophy className="w-8 h-8" />,
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Best Pitch — NUS Social Ignition',
      years: '2024',
      description: 'Social impact startup competition winner',
      icon: <Star className="w-8 h-8" />,
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      title: 'People\'s Choice — N House Pitch Night',
      years: 'Multiple',
      description: 'Audience favorite at entrepreneurship events',
      icon: <Users className="w-8 h-8" />,
      gradient: 'from-green-400 to-teal-500'
    },
    {
      title: 'Audience Favorite — Social Ignition',
      years: '2024',
      description: 'Most popular startup among audience',
      icon: <Heart className="w-8 h-8" />,
      gradient: 'from-pink-400 to-rose-500'
    },
    {
      title: 'Runner-Up — N House Pitch Night',
      years: '2024 & 2025',
      description: 'Consistent top performance in pitch competitions',
      icon: <Award className="w-8 h-8" />,
      gradient: 'from-gray-400 to-gray-600'
    },
    {
      title: 'Top 3 — NUS Student Innovation Carnival',
      years: '2024',
      description: 'University-wide innovation showcase finalist',
      icon: <Target className="w-8 h-8" />,
      gradient: 'from-indigo-400 to-blue-500'
    },
    {
      title: 'Regional Finalist — Hult Prize',
      years: '2024',
      description: 'Global student social entrepreneurship competition',
      icon: <Globe className="w-8 h-8" />,
      gradient: 'from-emerald-400 to-green-500'
    },
    {
      title: 'NUS Venture Ignition Grant Recipient',
      years: '2024',
      description: 'University funding for promising startups',
      icon: <Sparkles className="w-8 h-8" />,
      gradient: 'from-purple-400 to-indigo-500'
    }
  ];

  const keyMetrics = [
    {
      number: '50+',
      label: 'Schools & Institutions',
      description: 'MOE and International Schools',
      icon: <School className="w-8 h-8" />,
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      number: '1,000+',
      label: 'Teachers Worldwide',
      description: 'Across Singapore and internationally',
      icon: <Users className="w-8 h-8" />,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      number: '1M+',
      label: 'Words Graded',
      description: 'Real student essays processed',
      icon: <BookOpen className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      number: '7×',
      label: 'Faster Grading',
      description: 'Compared to traditional methods',
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      number: '50k+',
      label: 'Hours Saved',
      description: 'Total time saved for educators',
      icon: <Clock className="w-8 h-8" />,
      gradient: 'from-rose-500 to-red-500'
    },
    {
      number: '95%',
      label: 'Accuracy Rate',
      description: 'Consistent grading quality',
      icon: <CheckCircle className="w-8 h-8" />,
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const recognitionTimeline = [
    {
      year: '2024',
      title: 'Major Breakthrough Year',
      events: [
        'Pilot deployment in MOE schools',
        'Google for Startups acceptance',
        'NVIDIA Inception Program',
        'Multiple pitch competition wins'
      ],
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      year: '2025',
      title: 'Scaling and Recognition',
      events: [
        'Expanded',
        'Best Pitch NUS Ground Zero',
        'International school partnerships',
        'Southeast Asia expansion'
      ],
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <>
      <SEOHead config={getPageSEO('achievements')} pageKey="achievements" />

          {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="flex items-center justify-center mb-12">
              <img 
                src="/remarkably logo black.png?cb=1" 
                alt="Remarkably Logo" 
                className="h-16 w-auto"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 rounded-full text-sm font-medium mb-8">
              <Trophy className="h-4 w-4 mr-2" />
              Awards & Recognition
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Backed by Global Leaders
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent block mt-2">
                Recognized by Institutions
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
              Built for educators. Supported by world-class accelerators and technology partners. 
              <span className="block mt-2 font-semibold text-indigo-700">
                Serving Thousands across Singapore and expanding internationally.
              </span>
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/beta/demo" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                See Our Platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/beta/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-gray-300"
              >
                Partner With Us
              </Link>
            </motion.div>
          </motion.div>
          </div>
      </section>

          {/* Key Metrics */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="h-4 w-4 mr-2" />
                Our Impact
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transforming Education Globally
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real metrics from our platform's impact on educators and students worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center text-white shadow-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {metric.icon}
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-2">{metric.number}</div>
                  <div className="text-gray-900 font-bold text-lg mb-2">{metric.label}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{metric.description}</div>
                </motion.div>
            ))}
          </div>
          </motion.div>
        </div>
      </section>

          {/* Supported Institutions */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
                <Star className="h-4 w-4 mr-2" />
                Backed By
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Backed by Global Leaders & National Institutions
            </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Remarkably (under parent brand Lenor) is supported by top programs and institutions worldwide
            </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportedInstitutions.map((institution, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group text-center border border-gray-100"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="h-20 flex items-center justify-center mb-6">
                    <img 
                      src={institution.logo} 
                      alt={institution.name}
                      className="max-h-12 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                      title={institution.name}
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3">{institution.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{institution.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
                <Award className="h-4 w-4 mr-2" />
              Awards & Recognition
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Competition Winners & Recognition
            </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Recognized by prestigious competitions and institutions for innovation in education technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border border-gray-100"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${award.gradient} flex items-center justify-center text-white shadow-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {award.icon}
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-xs font-semibold rounded-full mb-4">
                      {award.years}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3 leading-tight">{award.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          </div>
      </section>

          {/* Timeline */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
                <Calendar className="h-4 w-4 mr-2" />
                Our Journey
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Recognition Timeline
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Key milestones in our journey to transform education
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {recognitionTimeline.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border border-gray-100"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${milestone.gradient} text-white rounded-2xl font-bold text-xl mb-6 group-hover:scale-105 transition-transform duration-300`}>
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                  <ul className="space-y-3">
                    {milestone.events.map((event, eventIndex) => (
                      <li key={eventIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{event}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
          </div>
      </section>

          {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 relative overflow-hidden">
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
                Ready to Be Part of Our Story?
            </h2>
              <p className="text-xl text-indigo-100 mb-12 leading-relaxed">
                Join the growing community of educators and institutions who trust Remarkably 
                to transform their grading experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/beta/demo" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 hover:text-indigo-700 font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <Sparkles className="ml-2 h-5 w-5" />
                </Link>
              <Link
                to="/beta/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                  Partner With Us
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

export default Achievements; 