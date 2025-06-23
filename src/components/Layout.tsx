import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const primaryNavItems = [
    { path: '/', label: 'Home' },
    { path: '/demo', label: 'Demo' },
    { path: '/features', label: 'Features' },
    { path: '/pricing', label: 'Pricing' }
  ];

  const secondaryNavItems = [
    { path: '/benefits', label: 'Benefits' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/qna', label: 'Q&A' },
    { path: '/about-us', label: 'About Us' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/rubric-guide', label: 'Rubric Guide' },
    { path: '/stress-reduction', label: 'Stress Reduction' },
    { path: '/case-study', label: 'Case Study' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img 
                src="/remarkably logo black.png" 
                alt="Remarkably" 
                className="h-8 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {primaryNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-blue-100 text-blue-600 shadow-sm'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* More Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                  className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200 flex items-center space-x-1"
                  aria-label="More navigation options"
                >
                  <span>More</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${isMoreDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isMoreDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200/50 py-2 z-50">
                    {secondaryNavItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMoreDropdownOpen(false)}
                        className={`block px-4 py-3 text-sm font-medium transition-all duration-200 ${
                          isActive(item.path)
                            ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Contact Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Contact Us
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50 py-4">
              <div className="space-y-2">
                {[...primaryNavItems, ...secondaryNavItems].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? 'bg-blue-100 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block mx-4 mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg text-center hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-md border-t border-gray-200/50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/remarkably logo black.png" 
                alt="Remarkably" 
                className="h-6 w-auto object-contain"
              />
              <span className="text-gray-600 text-sm">
                © {new Date().getFullYear()} Remarkably. All rights reserved.
              </span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="https://www.linkedin.com/company/remarkably-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a 
                href="https://twitter.com/remarkably_ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              
              <a 
                href="mailto:hello@remarkably.ai" 
                className="text-gray-500 hover:text-green-600 transition-colors duration-200"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Click outside handler for dropdowns */}
      {(isMobileMenuOpen || isMoreDropdownOpen) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsMoreDropdownOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default Layout; 