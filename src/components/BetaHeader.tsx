import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BookDemoCTA, TryFreeCTA } from '@/components/ui/cta-button';
import { 
  Menu, 
  X, 
  ArrowRight, 
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
  const location = useLocation();

  // Close sidebar when route changes
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

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

  const navItems = [
    { 
      name: 'Home', 
      path: '/beta',
      icon: <Home className="w-5 h-5" />,
      description: 'Back to beta homepage'
    },
    { 
      name: 'Features', 
      path: '/beta/features',
      icon: <Package className="w-5 h-5" />,
      description: 'AI grading capabilities'
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
      {/* Clean Mobile-First Header - Similar to Artisan - Updated with transparent background */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-transparent backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
          {/* Logo */}
          <Link to="/beta" className="flex items-center">
            <span className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              remarkably
            </span>
          </Link>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.slice(1, -1).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-indigo-600 ${
                  location.pathname === item.path
                    ? 'text-indigo-600'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Section - B2B/B2C CTAs */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* B2C CTA - Hidden on small screens */}
            <div className="hidden md:block">
              <TryFreeCTA size="sm" />
            </div>
            
            {/* B2B CTA - Always visible */}
            <BookDemoCTA size="sm" className="text-xs sm:text-sm" />

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              onClick={() => setIsSidebarOpen(true)}
              whileTap={{ scale: 0.95 }}
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </header>

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
                <span className="text-2xl font-bold text-gray-900">
                  remarkably
                </span>
              </Link>
              <motion.button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                whileTap={{ scale: 0.95 }}
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Sidebar Navigation */}
            <div className="flex-1 overflow-y-auto py-6">
              <nav className="px-6 space-y-2">
                {navItems.map((item, index) => (
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
                      className={`group flex items-center justify-between p-4 rounded-xl transition-all duration-200 ${
                        location.pathname === item.path
                          ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg transition-colors duration-200 ${
                          location.pathname === item.path
                            ? 'bg-indigo-100 text-indigo-600'
                            : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700'
                        }`}>
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-base">{item.name}</div>
                          <div className="text-sm text-gray-500 mt-0.5">{item.description}</div>
                        </div>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-transform duration-200 ${
                        location.pathname === item.path ? 'text-indigo-600' : 'text-gray-400'
                      } group-hover:translate-x-1`} />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Sidebar Footer - B2B/B2C CTAs */}
              <div className="px-6 pt-8 mt-8 border-t border-gray-100">
                <div className="space-y-3">
                  {/* B2C CTA */}
                  <TryFreeCTA fullWidth size="md" />
                  
                  {/* B2B CTA */}
                  <BookDemoCTA fullWidth size="md" />

                  {/* Additional Info */}
                  <div className="text-center text-sm text-gray-500 mt-4">
                    <p>Transform your grading workflow</p>
                    <p className="font-medium text-indigo-600">Save 6-7x time with AI</p>
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