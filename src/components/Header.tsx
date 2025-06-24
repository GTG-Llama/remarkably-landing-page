import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowRight, 
  BookOpen, 
  Users, 
  Award, 
  MessageCircle,
  ChevronDown,
  Brain
} from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Solutions', 
      path: '/features',
      dropdown: [
        { name: 'Features', path: '/features', icon: <BookOpen className="w-4 h-4" /> },
        { name: 'Benefits', path: '/benefits', icon: <Award className="w-4 h-4" /> },
        { name: 'Demo', path: '/demo', icon: <Users className="w-4 h-4" /> },
      ]
    },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about-us' },
    { name: 'Contact', path: '/contact' },
  ];

  const headerVariants = {
    top: {
      backgroundColor: 'rgba(30, 41, 59, 0.0)',
      backdropFilter: 'blur(0px)',
      borderColor: 'rgba(99, 102, 241, 0.0)',
    },
    scrolled: {
      backgroundColor: 'rgba(15, 23, 42, 0.9)',
      backdropFilter: 'blur(20px)',
      borderColor: 'rgba(99, 102, 241, 0.2)',
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.9)' : 'rgba(30, 41, 59, 0.0)',
        backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
        borderBottom: isScrolled ? '1px solid rgba(99, 102, 241, 0.2)' : '1px solid transparent',
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              className="w-10 h-10 bg-gradient-to-br from-tech-purple-500 to-tech-gold-500 rounded-xl flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Brain className="w-6 h-6 text-white" />
            </motion.div>
            <motion.span
              className="text-2xl font-bold text-white group-hover:text-tech-gold-400 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              Remarkably
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-2 text-lg font-medium transition-colors ${
                        location.pathname === item.path || item.dropdown?.some(sub => location.pathname === sub.path)
                          ? 'text-tech-gold-400'
                          : 'text-tech-slate-300 hover:text-white'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="absolute top-full left-0 mt-2 w-56 bg-tech-slate-800/90 backdrop-blur-xl border border-tech-slate-600/30 rounded-xl shadow-xl overflow-hidden"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="flex items-center gap-3 px-4 py-3 text-tech-slate-300 hover:text-white hover:bg-tech-slate-700/50 transition-all"
                            >
                              {subItem.icon}
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-lg font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-tech-gold-400'
                        : 'text-tech-slate-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/demo">
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Demo
              </motion.button>
            </Link>
            
            <Link to="/contact">
              <motion.button
                className="btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-tech-slate-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden"
            >
              <div className="pb-6 space-y-4 bg-tech-slate-800/90 backdrop-blur-xl rounded-xl mt-4 p-6 border border-tech-slate-600/30">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div className="space-y-2">
                        <div className="text-lg font-medium text-tech-slate-200 px-2">
                          {item.name}
                        </div>
                        <div className="ml-4 space-y-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="flex items-center gap-3 px-2 py-2 text-tech-slate-300 hover:text-white transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.icon}
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block px-2 py-2 text-lg font-medium transition-colors ${
                          location.pathname === item.path
                            ? 'text-tech-gold-400'
                            : 'text-tech-slate-300 hover:text-white'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="flex flex-col gap-3 pt-4 border-t border-tech-slate-600/30">
                  <Link to="/demo" onClick={() => setIsMobileMenuOpen(false)}>
                    <motion.button
                      className="btn-secondary w-full justify-center"
                      whileTap={{ scale: 0.95 }}
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Demo
                    </motion.button>
                  </Link>
                  
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <motion.button
                      className="btn-primary w-full justify-center group"
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;

