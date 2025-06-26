import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import { NavigationProvider } from '../contexts/NavigationContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { 
      name: 'Product', 
      path: '#',
      dropdown: [
    { name: 'Features', path: '/features' },
    { name: 'Demo', path: '/demo' },
      ]
    },
    { 
      name: 'Solutions', 
      path: '#',
      dropdown: [
    { name: 'Benefits', path: '/benefits' },
        { name: 'Use Cases', path: '/about-us' },
      ]
    },
    { 
      name: 'Resources', 
      path: '#',
      dropdown: [
        { name: 'About Us', path: '/about-us' },
        { name: 'Q&A', path: '/qna' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Rubric Guide', path: '/rubric-guide' },
    { name: 'Stress Reduction', path: '/stress-reduction' },
    { name: 'Case Study', path: '/case-study' },
      ]
    },
    { name: 'Pricing', path: '/pricing' },
  ];

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
    },
  };

  // Handle scroll effect for desktop header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <NavigationProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50/30 via-indigo-50/20 to-purple-50/30">
      {/* Desktop Header - Two Separate Bars */}
      <header className={`sticky top-0 z-50 hidden lg:block transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="flex items-center justify-between max-w-7xl mx-auto px-8 py-6">
          {/* Left Section - Navigation Container */}
          <div className="flex items-center bg-white/95 backdrop-blur-md border border-gray-200/60 rounded-full px-8 py-4 shadow-lg">
            {/* Logo */}
            <Link to="/" className="mr-8">
              <img
                src="/remarkably logo black.png"
                alt="Remarkably"
                className="h-6 w-auto"
              />
            </Link>

            {/* Navigation Items */}
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors py-2">
                  {item.name}
                        <ChevronDown className="w-3 h-3" />
                </button>
                
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="absolute top-full left-0 mt-3 w-48 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
                          >
                            {item.dropdown.map((subItem) => (
                      <Link
                                key={subItem.name}
                                to={subItem.path}
                                className="block px-4 py-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                      >
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
                      className={`text-sm font-medium transition-colors py-2 ${
                      isActive(item.path)
                          ? 'text-gray-900'
                          : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right Section - Contact Us Button */}
          <Link to="/contact">
            <motion.button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors shadow-lg flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>
      </header>

      {/* Mobile Header - Use the new Header component */}
      <div className="lg:hidden">
        <Header />
      </div>

      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <img
                src="/remarkably logo black.png"
                alt="Remarkably"
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-600 mb-4 max-w-md">
                AI-powered essay grading platform that helps educators provide faster, 
                more consistent feedback while maintaining academic integrity.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/company/remarkably"
                  className="text-gray-400 hover:text-[#667EEA] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/remarkably_ai"
                  className="text-gray-400 hover:text-[#667EEA] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link to="/features" className="text-gray-600 hover:text-[#667EEA] transition-colors">Features</Link></li>
                <li><Link to="/demo" className="text-gray-600 hover:text-[#667EEA] transition-colors">Demo</Link></li>
                <li><Link to="/pricing" className="text-gray-600 hover:text-[#667EEA] transition-colors">Pricing</Link></li>
                <li><Link to="/benefits" className="text-gray-600 hover:text-[#667EEA] transition-colors">Benefits</Link></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/qna" className="text-gray-600 hover:text-[#667EEA] transition-colors">Q&A</Link></li>
                <li><Link to="/about-us" className="text-gray-600 hover:text-[#667EEA] transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-[#667EEA] transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2024 Remarkably. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-600 hover:text-[#667EEA] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-[#667EEA] text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </NavigationProvider>
  );
};

export default Layout; 