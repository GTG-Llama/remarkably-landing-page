import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Mail, 
  MapPin, 
  Phone, 
  ArrowRight,
  Twitter,
  Linkedin,
  Github,
  BookOpen,
  Users,
  Award,
  Target,
  Zap,
  MessageCircle
} from 'lucide-react';

const Footer: React.FC = () => {
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
    hidden: { y: 30, opacity: 0 },
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

  const quickLinks = [
    { name: 'Features', path: '/features', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Benefits', path: '/benefits', icon: <Award className="w-4 h-4" /> },
    { name: 'Demo', path: '/demo', icon: <Users className="w-4 h-4" /> },
    { name: 'Pricing', path: '/pricing', icon: <Target className="w-4 h-4" /> },
  ];

  const solutions = [
    { name: 'Local Schools', path: '/local-school' },
    { name: 'International Schools', path: '/international-school' },
    { name: 'Tuition Centers', path: '/tuition' },
    { name: 'Higher Education', path: '/features' },
  ];

  const company = [
    { name: 'About Us', path: '/about-us' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Case Studies', path: '/case-study' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="relative bg-tech-slate-900 border-t border-tech-slate-700/50 overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0 opacity-20">
        <div className="neural-grid h-full" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-tech-purple-500/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-tech-gold-500/10 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-16 space-y-16"
        >
          {/* Top section - Newsletter and CTA */}
          <motion.div
            variants={itemVariants}
            className="card-neural bg-gradient-to-br from-tech-purple-500/10 to-tech-gold-500/10 border-tech-purple-500/30 text-center"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-tech-purple-500 to-tech-gold-500 rounded-full mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Ready to Transform Your Grading?
                </h3>
                <p className="text-tech-slate-300 text-lg">
                  Join thousands of educators who have already revolutionized their essay grading process with AI.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    className="btn-primary group flex-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  
                  <motion.button
                    className="btn-secondary group flex-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Schedule Demo
                  </motion.button>
                </div>
                
                <p className="text-tech-slate-400 text-sm">
                  No credit card required • Setup in minutes • Cancel anytime
                </p>
              </div>
            </div>
          </motion.div>

          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company info */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              <Link to="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-tech-purple-500 to-tech-gold-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Remarkably</span>
              </Link>
              
              <p className="text-tech-slate-300 leading-relaxed">
                AI-powered essay grading platform designed for educators. Grade 6-7x faster while 
                maintaining quality and personal teaching standards.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-tech-slate-300">
                  <MapPin className="w-5 h-5 text-tech-gold-400 flex-shrink-0" />
                  <span>Singapore & Southeast Asia</span>
                </div>
                <div className="flex items-center gap-3 text-tech-slate-300">
                  <Mail className="w-5 h-5 text-tech-gold-400 flex-shrink-0" />
                  <span>hello@remarkably.ai</span>
                </div>
                <div className="flex items-center gap-3 text-tech-slate-300">
                  <Phone className="w-5 h-5 text-tech-gold-400 flex-shrink-0" />
                  <span>+65 9123 4567</span>
                </div>
              </div>
              
              {/* Social links */}
              <div className="flex gap-4 pt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-tech-slate-800 hover:bg-gradient-to-br hover:from-tech-purple-500 hover:to-tech-gold-500 rounded-lg flex items-center justify-center text-tech-slate-400 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Product</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="flex items-center gap-2 text-tech-slate-300 hover:text-tech-gold-400 transition-colors group"
                    >
                      <span className="text-tech-slate-500 group-hover:text-tech-gold-400 transition-colors">
                        {link.icon}
                      </span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Solutions</h4>
              <ul className="space-y-3">
                {solutions.map((solution) => (
                  <li key={solution.name}>
                    <Link
                      to={solution.path}
                      className="text-tech-slate-300 hover:text-tech-gold-400 transition-colors"
                    >
                      {solution.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Company</h4>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-tech-slate-300 hover:text-tech-gold-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Trust indicators */}
          <motion.div variants={itemVariants} className="border-t border-tech-slate-700/50 pt-8">
            <div className="text-center space-y-6">
              <p className="text-tech-slate-400 text-sm">Trusted by leading educational institutions</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <img src="/nus.png" alt="NUS" className="h-8 grayscale hover:grayscale-0 transition-all" />
                <img src="/google.png" alt="Google" className="h-6 grayscale hover:grayscale-0 transition-all" />
                <img src="/nvidia-inception.png" alt="NVIDIA" className="h-8 grayscale hover:grayscale-0 transition-all" />
                <img src="/mongodb.png" alt="MongoDB" className="h-6 grayscale hover:grayscale-0 transition-all" />
                <img src="/nus-enterprise.png" alt="NUS Enterprise" className="h-8 grayscale hover:grayscale-0 transition-all" />
              </div>
            </div>
          </motion.div>

          {/* Bottom section */}
          <motion.div
            variants={itemVariants}
            className="border-t border-tech-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-tech-slate-400 text-sm">
              © 2024 Remarkably by Lenor AI. All rights reserved.
            </p>
            
            <div className="flex gap-6 text-sm text-tech-slate-400">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
