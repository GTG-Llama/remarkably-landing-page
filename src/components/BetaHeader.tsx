import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ProductMegaMenu from './ProductMegaMenu';
import { 
  Menu, 
  X, 
  ChevronDown,
  ChevronRight,
  Home,
  Package,
  Settings,
  DollarSign,
  Phone,
  Info,
  FileText,
  Users,
  Calendar,
  MessageCircle
} from 'lucide-react';

const BetaHeader: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();

  // Close sidebar and mega menu when route changes
  useEffect(() => {
    setIsSidebarOpen(false);
    setIsMegaMenuOpen(false);
  }, [location.pathname]);

  // Improved hover handlers
  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 100);
    setHoverTimeout(timeout);
  };

  // Scroll detection for header transparency
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const mainNavItems = [
    { 
      name: 'Home', 
      path: '/beta',
      icon: <Home className="w-5 h-5" />,
      description: 'Back to beta homepage'
    },
    { 
      name: 'Demo', 
      path: '/beta/demo',
      icon: <FileText className="w-5 h-5" />,
      description: 'See Remarkably in action'
    },
    { 
      name: 'Benefits', 
      path: '/beta/benefits',
      icon: <Settings className="w-5 h-5" />,
      description: 'Time savings & efficiency'
    },
    { 
      name: 'Pricing', 
      path: '/beta/pricing',
      icon: <DollarSign className="w-5 h-5" />,
      description: 'Plans for schools & teachers'
    },
    { 
      name: 'About Us', 
      path: '/beta/about-us',
      icon: <Users className="w-5 h-5" />,
      description: 'Our mission & team'
    },
    { 
      name: 'Contact', 
      path: '/beta/contact',
      icon: <Phone className="w-5 h-5" />,
      description: 'Get in touch with us'
    },
  ];

  const sidebarVariants = {
    closed: { x: '-100%' },
    open: { x: 0 }
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  const menuItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <>
      {/* Modern SaaS Header with Better Formatting */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100/50' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/beta" className="flex items-center">
            <span className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight hover:text-gray-700 transition-colors duration-200">
              remarkably
            </span>
          </Link>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <nav className="hidden lg:flex items-center space-x-6 relative">
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className={`flex items-center gap-1.5 text-sm font-medium transition-all duration-200 hover:text-blue-600 px-2.5 py-1.5 rounded-md ${
                  isMegaMenuOpen ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            
            {/* Main Nav Items - Modern SaaS Style */}
                          <Link
                to="/beta/demo"
                className={`text-sm font-medium transition-all duration-200 px-2.5 py-1.5 rounded-md hover:bg-gray-50 ${
                  location.pathname === '/beta/demo'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Demo
              </Link>
              <Link
                to="/beta/pricing"
                className={`text-sm font-medium transition-all duration-200 px-2.5 py-1.5 rounded-md hover:bg-gray-50 ${
                  location.pathname === '/beta/pricing'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Pricing
              </Link>
              <Link
                to="/beta/about-us"
                className={`text-sm font-medium transition-all duration-200 px-2.5 py-1.5 rounded-md hover:bg-gray-50 ${
                  location.pathname === '/beta/about-us'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                About
              </Link>
              <Link
                to="/beta/contact"
                className={`text-sm font-medium transition-all duration-200 px-2.5 py-1.5 rounded-md hover:bg-gray-50 ${
                  location.pathname === '/beta/contact'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Contact
              </Link>
          </nav>

          {/* Right Section - Modern SaaS Button Layout */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Book a Demo Button - Outline Style */}
            <Link
              to="/beta/contact"
              className="hidden sm:inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 border border-blue-200 rounded-md hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
            >
              Book a Demo
            </Link>

            {/* Login Button - Text Style */}
            <a
              href="https://app.remarkably.ink"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 rounded-md hover:bg-gray-50 transition-all duration-200"
            >
              Login
            </a>

            {/* Try Remarkably for Free - Solid Blue Button (Stands Out) */}
            <a
              href="https://app.remarkably.ink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-md hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
            >
              Try Remarkably for Free
            </a>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-all duration-200 ml-1"
              onClick={() => setIsSidebarOpen(true)}
              whileTap={{ scale: 0.95 }}
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mega Menu */}
      <AnimatePresence>
        {isMegaMenuOpen && (
          <div 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ProductMegaMenu 
              isOpen={isMegaMenuOpen} 
              onClose={() => setIsMegaMenuOpen(false)} 
            />
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 left-0 bottom-0 z-50 w-80 bg-white shadow-2xl lg:hidden"
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <Link to="/beta" onClick={() => setIsSidebarOpen(false)}>
                <span className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors duration-200">
                  remarkably
                </span>
              </Link>
              <motion.button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
                whileTap={{ scale: 0.95 }}
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Sidebar Navigation */}
            <div className="flex-1 overflow-y-auto py-6">
              <nav className="px-6 space-y-2">
                {/* Products Section for Mobile */}
                <div className="mb-6">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Products
                  </div>
                  <div className="mt-2 space-y-1">
                    <Link
                      to="/beta/features/handwriting-recognition"
                      onClick={() => setIsSidebarOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
                    >
                      For Teachers
                    </Link>
                    <Link
                      to="/beta/features/analytics-dashboard"
                      onClick={() => setIsSidebarOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
                    >
                      For Schools
                    </Link>
                  </div>
                </div>
                
                {mainNavItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`group flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                        location.pathname === item.path
                          ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-1.5 rounded-md transition-colors duration-200 ${
                          location.pathname === item.path
                            ? 'bg-indigo-100 text-indigo-600'
                            : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700'
                        }`}>
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-medium text-sm">{item.name}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                        </div>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-transform duration-200 ${
                        location.pathname === item.path ? 'text-indigo-600' : 'text-gray-400'
                      } group-hover:translate-x-1`} />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Sidebar Footer - Modern Button Layout */}
              <div className="px-6 pt-8 mt-8 border-t border-gray-100">
                <div className="space-y-4">
                  {/* Book a Demo Button - Outline Style */}
                  <Link
                    to="/beta/contact"
                    onClick={() => setIsSidebarOpen(false)}
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-blue-600 border border-blue-200 rounded-md hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
                  >
                    Book a Demo
                  </Link>

                  {/* Login Button - Secondary Style for Mobile */}
                  <a
                    href="https://app.remarkably.ink"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-700 transition-all duration-200"
                  >
                    Login
                  </a>
                  
                  {/* Try Remarkably for Free - Solid Blue Button (Stands Out) */}
                  <a
                    href="https://app.remarkably.ink"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-md hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Try Remarkably for Free
                  </a>

                  {/* Additional Info */}
                  <div className="text-center text-sm text-gray-500 mt-6 pt-4">
                    <p className="text-gray-600">Transform your grading workflow</p>
                    <p className="font-medium text-blue-600 mt-1">Save 6-7x time with AI</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BetaHeader; 