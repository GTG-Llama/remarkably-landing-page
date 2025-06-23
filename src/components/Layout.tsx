import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const location = useLocation();

  const primaryNavItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Demo', path: '/demo' },
    { name: 'Pricing', path: '/pricing' },
  ];

  const secondaryNavItems = [
    { name: 'Benefits', path: '/benefits' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Q&A', path: '/qna' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Rubric Guide', path: '/rubric-guide' },
    { name: 'Stress Reduction', path: '/stress-reduction' },
    { name: 'Case Study', path: '/case-study' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFC]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/remarkably logo black.png"
                alt="Remarkably"
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {primaryNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${isActive(item.path) ? 'nav-link-active' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* More Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                  className="nav-link flex items-center space-x-1"
                >
                  <span>More</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {isMoreDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                    {secondaryNavItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                          isActive(item.path) ? 'text-[#667EEA] bg-[#EBF4FF]' : 'text-gray-700'
                        }`}
                        onClick={() => setIsMoreDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link to="/contact" className="btn btn-primary btn-md">
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto py-4">
              <div className="space-y-2">
                {[...primaryNavItems, ...secondaryNavItems].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? 'bg-[#EBF4FF] text-[#667EEA]'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    to="/contact"
                    className="btn btn-primary btn-md w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
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
                <li><Link to="/contact" className="text-gray-600 hover:text-[#667EEA] transition-colors">Contact</Link></li>
                <li><Link to="/rubric-guide" className="text-gray-600 hover:text-[#667EEA] transition-colors">Rubric Guide</Link></li>
                <li><Link to="/about-us" className="text-gray-600 hover:text-[#667EEA] transition-colors">About Us</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-500">
              © 2024 Remarkably. All rights reserved. Empowering educators with AI-driven assessment tools.
            </p>
          </div>
        </div>
      </footer>

      {/* Click outside handler for dropdown */}
      {isMoreDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsMoreDropdownOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout; 