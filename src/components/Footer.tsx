
import React from "react";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-xl bg-remarkably-gold flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-xl font-semibold">Remarkably</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering teachers with AI-powered essay grading to save time and provide better feedback.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-remarkably-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-remarkably-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-remarkably-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-remarkably-gold transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-remarkably-gold transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-remarkably-gold transition-colors">Features</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-remarkably-gold transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-remarkably-gold transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-remarkably-gold transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-remarkably-gold transition-colors">Demo</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-remarkably-gold transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-remarkably-gold transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-remarkably-gold transition-colors">Webinars</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-remarkably-gold transition-colors">Research</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-remarkably-gold transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-remarkably-gold" />
                <a href="mailto:info@remarkably.com" className="text-gray-400 hover:text-remarkably-gold transition-colors">
                  info@remarkably.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-remarkably-gold" />
                <a href="tel:+18005551234" className="text-gray-400 hover:text-remarkably-gold transition-colors">
                  +1 (800) 555-1234
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <h4 className="text-base font-semibold mb-4">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-remarkably-gold"
                />
                <button className="bg-remarkably-gold text-white px-4 py-2 rounded-r-lg hover:bg-remarkably-lightgold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Remarkably. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-remarkably-gold text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-remarkably-gold text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-remarkably-gold text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
