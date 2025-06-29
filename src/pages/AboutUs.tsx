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

  const team = [
    {
      name: "Harry Wu",
      role: "Founder & CEO",
      bio: "Former educator with 10+ years in AI research. PhD in Computer Science from NUS, passionate about transforming education through technology.",
      image: "HW",
      email: "harry@remarkably.ink",
      linkedin: "#",
      background: "Stanford AI Lab → Google Research → NUS Faculty",
      expertise: ["AI Research", "Education Technology", "Product Strategy"],
      funFact: "Built his first chatbot at age 12"
    },
    {
      name: "Dr. Sarah Lim",
      role: "Head of AI Research",
      bio: "Leading AI researcher specializing in natural language processing. Former researcher at Google AI, focused on educational applications.",
      image: "SL",
      email: "sarah@remarkably.ink",
      linkedin: "#",
      background: "MIT PhD → Google AI → Facebook AI Research",
      expertise: ["Natural Language Processing", "Machine Learning", "Educational AI"],
      funFact: "Published 50+ research papers on AI"
    },
    {
      name: "Michael Chen",
      role: "Head of Product",
      bio: "Former teacher turned product manager. Brings deep understanding of educator needs and classroom challenges to product development.",
      image: "MC",
      email: "michael@remarkably.ink",
      linkedin: "#",
      background: "15 years teaching → Apple → Remarkably",
      expertise: ["Product Management", "User Experience", "Education"],
      funFact: "Used to grade 200+ essays every weekend"
    },
    {
      name: "Dr. Priya Patel",
      role: "Education Consultant",
      bio: "Former MOE curriculum specialist with 15+ years experience. Ensures our platform aligns with educational standards and best practices.",
      image: "PP",
      email: "priya@remarkably.ink",
      linkedin: "#",
      background: "Cambridge PhD → Singapore MOE → UNESCO",
      expertise: ["Curriculum Development", "Educational Policy", "Assessment"],
      funFact: "Speaks 6 languages fluently"
    }
  ];

  const values = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Education First",
      description: "Every decision we make is guided by what's best for students and teachers.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trust & Privacy",
      description: "We protect student data with enterprise-grade security and transparent practices.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Teacher Empowerment",
      description: "We build tools that enhance teaching, not replace the human connection.",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Continuous Innovation",
      description: "We constantly improve our AI to better serve the education community.",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started by educators frustrated with grading workload",
      metric: "1 founder",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      year: "2021",
      title: "First AI Model",
      description: "Launched initial essay grading prototype",
      metric: "95% accuracy",
      icon: <Zap className="w-6 h-6" />
    },
    {
      year: "2022",
      title: "Singapore Launch",
      description: "Partnered with first schools in Singapore",
      metric: "10 schools",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      year: "2023",
      title: "Major Expansion",
      description: "Reached educators across Southeast Asia",
      metric: "500+ teachers",
      icon: <Users className="w-6 h-6" />
    },
    {
      year: "2024",
      title: "Global Growth",
      description: "Expanding internationally with advanced AI features",
      metric: "1000+ users",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const achievements = [
    { label: "Teachers Worldwide", value: "1,000+", icon: <Users className="w-6 h-6" /> },
    { label: "Essays Graded", value: "100K+", icon: <BookOpen className="w-6 h-6" /> },
    { label: "Hours Saved", value: "50K+", icon: <Clock className="w-6 h-6" /> },
    { label: "Countries", value: "15+", icon: <Globe className="w-6 h-6" /> }
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
      stats: ["95% Accuracy", "6x Faster", "Detailed Feedback"]
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
      stats: ["98% Recognition", "Any Style", "Instant Processing"]
    }
  ];

  return (
    <>
      <SEOHead config={getPageSEO('about-us')} pageKey="about-us" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-8"
            >
              <Users className="w-4 h-4 mr-2" />
              About Remarkably
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Transforming Education Through
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI Innovation</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              We're on a mission to give teachers their time back while improving student outcomes. 
              Founded by educators, built for educators, trusted by 1000+ teachers worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                to="/beta/demo" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Experience Our Platform
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/beta/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-200"
              >
                Contact Our Team
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Bar */}
      <section className="py-16 bg-white border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <div className="text-blue-600">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.value}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-6">
                To empower educators worldwide by automating tedious grading tasks, 
                allowing them to focus on what matters most: teaching and connecting with students.
              </p>
              <p className="text-gray-700 mb-8">
                We believe technology should enhance human potential, not replace it. 
                Our AI handles the repetitive work so teachers can spend more time inspiring, 
                mentoring, and making a real difference in their students' lives.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">6-7x</div>
                  <div className="text-sm text-gray-600">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">95%</div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Available</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
            >
              <div className="text-center">
                <Globe className="w-16 h-16 text-white opacity-80 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-blue-100 text-lg mb-6">
                  A world where every teacher has the time and tools to provide 
                  personalized, high-quality education to every student.
                </p>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-sm text-blue-100">
                    "Education is the most powerful weapon which you can use to change the world." 
                    - Nelson Mandela
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What We've Built
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the innovative technology that's helping teachers worldwide save time and improve student outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {productShowcase.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200"
              >
                <div className="aspect-video bg-gray-100 p-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.stats.map((stat, statIndex) => (
                      <span
                        key={statIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a teacher's frustration to a global solution transforming education
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  onMouseEnter={() => setHoveredMilestone(index)}
                  onMouseLeave={() => setHoveredMilestone(null)}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                      hoveredMilestone === index ? 'transform scale-105' : ''
                    }`}>
                      <div className="flex items-center mb-4">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white mr-3">
                          {milestone.icon}
                        </div>
                        <div className="text-lg font-bold text-blue-600">{milestone.year}</div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 mb-3">{milestone.description}</p>
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                        <span className="text-sm font-medium text-blue-800">{milestone.metric}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate educators and technologists working together to transform education
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Team Grid */}
            <div className="grid grid-cols-2 gap-4">
              {team.map((member, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTeamMember(index)}
                  className={`text-left p-4 rounded-2xl transition-all duration-300 ${
                    activeTeamMember === index
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold mb-3 ${
                    activeTeamMember === index
                      ? 'bg-white text-blue-600'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  }`}>
                    {member.image}
                  </div>
                  <h3 className={`font-bold mb-1 ${
                    activeTeamMember === index ? 'text-white' : 'text-gray-900'
                  }`}>
                    {member.name}
                  </h3>
                  <p className={`text-sm ${
                    activeTeamMember === index ? 'text-blue-100' : 'text-gray-600'
                  }`}>
                    {member.role}
                  </p>
                </motion.button>
              ))}
            </div>

            {/* Active Team Member Details */}
            <motion.div
              key={activeTeamMember}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mr-6">
                  {team[activeTeamMember].image}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {team[activeTeamMember].name}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {team[activeTeamMember].role}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {team[activeTeamMember].bio}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Background</h4>
                  <p className="text-sm text-gray-600">{team[activeTeamMember].background}</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {team[activeTeamMember].expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 italic">
                    💡 Fun fact: {team[activeTeamMember].funFact}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Remarkably
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl mb-6`}>
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with leading organizations to deliver the best educational technology
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group text-center"
              >
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 mb-3">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="text-sm font-medium text-gray-900">{partner.name}</div>
                <div className="text-xs text-gray-500">{partner.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Be part of the education revolution. Start transforming your grading experience today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/beta/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/beta/demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-medium rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs; 