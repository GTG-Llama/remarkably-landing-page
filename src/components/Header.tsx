
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(".mobile-menu", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(".mobile-menu", {
        y: -20,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-xl bg-remarkably-gold flex items-center justify-center mr-3">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          <span className="text-xl font-semibold tracking-tight">Remarkably</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="font-medium hover:text-remarkably-gold transition-colors">
            Features
          </a>
          <a href="#testimonials" className="font-medium hover:text-remarkably-gold transition-colors">
            Testimonials
          </a>
          <a href="#about" className="font-medium hover:text-remarkably-gold transition-colors">
            About
          </a>
          <a href="#contact" className="apple-button-gold">
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu absolute top-full left-0 w-full bg-white shadow-lg py-4 opacity-0 -translate-y-4 pointer-events-none md:hidden ${
          isMenuOpen ? "pointer-events-auto" : ""
        }`}
      >
        <nav className="container mx-auto px-4 flex flex-col space-y-4">
          <a
            href="#features"
            className="font-medium py-2 hover:text-remarkably-gold transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#testimonials"
            className="font-medium py-2 hover:text-remarkably-gold transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#about"
            className="font-medium py-2 hover:text-remarkably-gold transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="apple-button-gold text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
