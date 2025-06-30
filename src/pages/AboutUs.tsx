import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { getPageSEO } from '../utils/seo-config';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Award, 
  ArrowRight,
  Heart,
  Globe,
  Lightbulb,
  Shield,
  BookOpen,
  Sparkles,
  TrendingUp,
  Building2,
  Calendar,
  MapPin,
  Mail,
  Linkedin,
  Twitter,
  CheckCircle,
  Star,
  Zap,
  Coffee,
  Clock,
  GraduationCap,
  Rocket
} from 'lucide-react';

const AboutUs: React.FC = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);

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

  const team = [
    {
      name: "Harry Wu",
      role: "Founder & CEO",
      bio: "Harry is an entrepreneur passionate about using AI to improve education. He’s the co-founder of Lenor, the company behind Remarkably, an AI startup making essay grading faster and more efficient.",
      image: "HW",
      email: "harry@remarkably.ink",
      linkedin: "#https://www.linkedin.com/in/realharrywu/",
      background: "Business and AI at National University of Singapore → Ex-Machine Learning Director of NUS Fintech Society ",
      expertise: ["AI", "Educational Technology", "Startup Buildling", "Product Strategy", "Blockchain"],
      funFact: "Founded startups in blockchain, e-commerce, and dropshipping before dedicating to AI powered solutions for education"
    },
    // {
    //   name: "Dr. Sarah Lim",
    //   role: "Head of AI Research",
    //   bio: "Leading AI researcher specializing in natural language processing. Former researcher at Google AI, focused on educational applications.",
    //   image: "SL",
    //   email: "sarah@remarkably.ink",
    //   linkedin: "#",
    //   background: "MIT PhD → Google AI → Facebook AI Research",
    //   expertise: ["Natural Language Processing", "Machine Learning", "Educational AI"],
    //   funFact: "Published 50+ research papers on AI"
    // },
    // {
    //   name: "Michael Chen",
    //   role: "Head of Product",
    //   bio: "Former teacher turned product manager. Brings deep understanding of educator needs and classroom challenges to product development.",
    //   image: "MC",
    //   email: "michael@remarkably.ink",
    //   linkedin: "#",
    //   background: "15 years teaching → Apple → Remarkably",
    //   expertise: ["Product Management", "User Experience", "Education"],
    //   funFact: "Used to grade 200+ essays every weekend"
    // },
    // {
    //   name: "Dr. Priya Patel",
    //   role: "Education Consultant",
    //   bio: "Former MOE curriculum specialist with 15+ years experience. Ensures our platform aligns with educational standards and best practices.",
    //   image: "PP",
    //   email: "priya@remarkably.ink",
    //   linkedin: "#",
    //   background: "Cambridge PhD → Singapore MOE → UNESCO",
    //   expertise: ["Curriculum Development", "Educational Policy", "Assessment"],
    //   funFact: "Speaks 6 languages fluently"
    // }
  ];

  const values = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Education First",
      description: "Every decision we make is guided by what's best for students and teachers.",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trust & Privacy",
      description: "We protect student data with enterprise-grade security and transparent practices.",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Teacher Empowerment",
      description: "We build tools that enhance teaching, not replace the human connection.",
      gradient: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Continuous Innovation",
      description: "We constantly improve our AI to better serve the education community.",
      gradient: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Company Founded",
      description: "Started by students who tutored",
      metric: "1 founder",
      icon: <Rocket className="w-6 h-6" />,
      gradient: "from-amber-500 to-orange-500"
    },
    {
      year: "2023",
      title: "First AI Model",
      description: "Launched initial essay grading prototype",
      metric: "85% accuracy",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      year: "2024",
      title: "Singapore Launch",
      description: "Partnered with first school in Singapore",
      metric: "Expanding",
      icon: <Building2 className="w-6 h-6" />,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      year: "2025",
      title: "Major Expansion",
      description: "Reached educators across Southeast Asia",
      metric: "",
      icon: <Users className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      year: "2025",
      title: "Global Growth",
      description: "Expanding internationally with advanced AI features",
      metric: "1000+ users",
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-purple-500 to-violet-500"
    }
  ];

  const achievements = [
    { 
      label: "Hours Saved", 
      value: "50k+", 
      icon: <Clock className="w-8 w-8" />,
      gradient: "from-blue-500 to-indigo-500"
    },
    { 
      label: "Words Graded", 
      value: "1.5 Million+", 
      icon: <BookOpen className="w-8 w-8" />,
      gradient: "from-emerald-500 to-teal-500"
    },
    { 
      label: "Countries", 
      value: "15+", 
      icon: <Globe className="w-8 w-8" />,
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  const partners = [
    { name: "Google for Education", logo: "/google.png?cb=1", category: "Technology Partner" },
    { name: "NVIDIA", logo: "/nvidia-inception.png?cb=1", category: "AI Partner" },
    { name: "MongoDB", logo: "/mongodb.png?cb=1", category: "Infrastructure" },
    { name: "NUS Enterprise", logo: "/nus-enterprise.png?cb=1", category: "Incubator" },
    { name: "BLOCK71", logo: "/block71.png?cb=1", category: "Startup Hub" },
    { name: "NUS Computing", logo: "/nus-soc.png?cb=1", category: "Research Partner" }
  ];

  const productShowcase = [
    {
      title: "AI-Powered Grading",
      description: "Our advanced AI analyzes essays with human-level understanding",
      image: "/Essay Grader Dashboard.png?cb=1",
      stats: ["95% Accuracy", "7x Faster", "Detailed Feedback"]
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive insights into student progress and performance",
      image: "/Grade and User Dashboard.png?cb=1",
      stats: ["Real-time Data", "Progress Tracking", "Custom Reports"]
    },
    {
      title: "Handwriting Recognition",
      description: "Advanced OCR technology that reads any handwriting style",
      image: "/marking on messy handwriting.png?cb=1",
      stats: ["95% Recognition", "Any Style", "Instant Processing"]
    }
  ];

  return (
    <>
      <SEOHead config={getPageSEO('about-us')} pageKey="about-us" />

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
              <Heart className="h-4 w-4 mr-2" />
              Our Story & Mission
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Empowering Teachers Through
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent block mt-2">
                Intelligent Technology
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to give teachers their time back and students better feedback. 
              Built by educators, for educators, with AI that understands the nuances of great teaching.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/demo" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                See Our Product
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-gray-300"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Target className="h-4 w-4 mr-2" />
                Our Mission
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                We believe great teachers deserve great tools
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                Every weekend, millions of teachers spend their personal time grading essays instead of with their families. 
                We're changing that by building AI that understands education, not just technology.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
                <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 italic">
                  "We aim to aim empower what teachers are best at: Teaching."
                </blockquote>
                <cite className="text-lg text-gray-600 mt-4 block">— Harry Wu, Founder</cite>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
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
                Our Values
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Drives Us Every Day
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide every decision we make and every feature we build
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Journey */}
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
                <Calendar className="h-4 w-4 mr-2" />
                Our Journey
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                From Idea to Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how we've grown from a simple idea to a platform trusted by educators worldwide
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-300 to-purple-300"></div>
                
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className={`relative flex items-center ${
                        index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                      }`}
                      onMouseEnter={() => setHoveredMilestone(index)}
                      onMouseLeave={() => setHoveredMilestone(null)}
                    >
                      {/* Timeline node */}
                      <div className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-2xl bg-gradient-to-br ${milestone.gradient} flex items-center justify-center text-white shadow-2xl z-10 transition-transform duration-300 ${
                        hoveredMilestone === index ? 'scale-125' : 'scale-100'
                      }`}>
                        {milestone.icon}
                      </div>
                      
                      {/* Content */}
                      <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                        <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                          <div className="text-2xl font-black text-gray-900 mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">{milestone.description}</p>
                          <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${milestone.gradient} bg-opacity-10 text-gray-900 text-sm font-semibold rounded-full`}>
                            {milestone.metric}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Stats */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
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
                Numbers That Matter
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real impact we've made in the education community worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center text-white shadow-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.icon}
                  </div>
                  <div className="text-5xl font-black text-gray-900 mb-2">{achievement.value}</div>
                  <div className="text-gray-900 font-bold text-lg mb-2">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
                <Users className="h-4 w-4 mr-2" />
                Meet Our Team
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The Minds Behind Remarkably
              </h2>
              {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A diverse team of educators, researchers, and technologists united by one mission
              </p> */}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {team.slice(0, 4).map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden border border-gray-100"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        {member.image}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                        <p className="text-blue-600 font-semibold text-lg mb-2">{member.role}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{member.background}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">{member.bio}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4">
                      <p className="text-sm text-gray-700 italic">💡 Fun fact: {member.funFact}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners & Recognition */}
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
                <Building2 className="h-4 w-4 mr-2" />
                Trusted Partners
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Backed by Industry Leaders
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're proud to partner with world-class organizations that share our vision
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group text-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 w-auto mx-auto mb-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="text-xs text-gray-500 font-medium">{partner.category}</div>
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
                Ready to Join Our Mission?
              </h2>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                Whether you're an educator looking to transform your grading experience or a partner who shares our vision, 
                we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/demo" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:text-blue-700 font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Try Remarkably
                  <Sparkles className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get In Touch
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

export default AboutUs; 