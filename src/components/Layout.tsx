import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import { NavigationProvider } from '../contexts/NavigationContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <NavigationProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50/30 via-indigo-50/20 to-purple-50/30">
      
      {/* Use Header for all screen sizes */}
      <Header />

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
                src="/remarkably logo black.png?cb=1"
                alt="Remarkably"
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-600 mb-4 max-w-md">
                AI-powered essay grading platform that helps educators provide faster, 
                more consistent feedback while maintaining academic integrity.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/lenor-eduai/"
                  className="text-gray-400 hover:text-[#667EEA] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about-us" className="text-gray-600 hover:text-[#667EEA] transition-colors">About Us</Link></li>
                <li><Link to="/testimonials" className="text-gray-600 hover:text-[#667EEA] transition-colors">Testimonials</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-[#667EEA] transition-colors">Contact</Link></li>
                <li><Link to="/achievements" className="text-gray-600 hover:text-[#667EEA] transition-colors">Achievements</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 mt-8 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-600 text-sm">
                © 2024 Remarkably. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <Link to="/contact" className="text-gray-600 hover:text-[#667EEA] text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/contact" className="text-gray-600 hover:text-[#667EEA] text-sm transition-colors">
                  Terms of Service
                </Link>
                <Link to="/contact" className="text-gray-600 hover:text-[#667EEA] text-sm transition-colors">
                  Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </NavigationProvider>
  );
};

export default Layout; 