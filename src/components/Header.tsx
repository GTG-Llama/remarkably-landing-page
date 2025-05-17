import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Create refs for each section
  const demoRef = useRef<HTMLElement | null>(null);
  const featuresRef = useRef<HTMLElement | null>(null);
  const benefitsRef = useRef<HTMLElement | null>(null);
  const testimonialsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Set refs to target DOM elements
    demoRef.current = document.querySelector("#essay-focus");
    featuresRef.current = document.querySelector("#essay-showcase");
    benefitsRef.current = document.querySelector("#features");
    testimonialsRef.current = document.querySelector("#testimonials");

    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (ref: React.MutableRefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    window.location.href = "mailto:contact@lenorai.com";
  };

  return (
    <motion.header 
      className="fixed top-2 left-0 right-0 z-50 mx-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div 
        layout
        className={`container mx-auto bg-white border-2 border-black ${
          scrolled 
            ? "shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] rounded-none" 
            : "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none"
        }`}
        initial={false}
        animate={{ 
          scale: scrolled ? 0.97 : 1,
          y: scrolled ? -2 : 0
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          bounce: 0.3
        }}
      >
        <div className="container mx-auto px-0 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.div
              className={"bg-white border-2 border-black p-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform rotate-1"
              }
              whileHover={{
                rotate: 3,
                transition: { duration: 0.3 },
              }}
            >
              <img
                src="/remarkably logo black.png"
                alt="Logo"
                className="w-50 h-10 px-2 py-1"
              />
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <motion.button 
              onClick={() => scrollToSection(demoRef)}
              className="text-black font-semibold text-lg hover:underline decoration-2 underline-offset-4"
              whileHover={{ scale: 1.05 }}
            >
              Demo
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection(featuresRef)}
              className="text-black font-semibold text-lg hover:underline decoration-2 underline-offset-4"
              whileHover={{ scale: 1.05 }}
            >
              Features
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection(benefitsRef)}
              className="text-black font-semibold text-lg hover:underline decoration-2 underline-offset-4"
              whileHover={{ scale: 1.05 }}
            >
              Benefits
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection(testimonialsRef)}
              className="text-black font-semibold text-lg hover:underline decoration-2 underline-offset-4"
              whileHover={{ scale: 1.05 }}
            >
              Testimonials
            </motion.button>
          </nav>

          {/* Contact Us Button */}
          <motion.button
            onClick={handleContactClick}
            className="bg-yellow-300 text-black font-black px-6 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform transition-all hover:-translate-y-1 hover:-translate-x-1"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)",
              y: -2,
              x: -2 
            }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us!
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-black bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden bg-white border-2 border-t-0 border-black absolute top-full left-0 right-0 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 px-4 flex flex-col space-y-4">
                <button
                  onClick={() => {
                    scrollToSection(demoRef);
                    setMobileMenuOpen(false);
                  }}
                  className="text-black font-bold py-2 border-b-2 border-dashed border-black hover:bg-yellow-100 transition-all px-2"
                >
                  Demo
                </button>
                <button
                  onClick={() => {
                    scrollToSection(featuresRef);
                    setMobileMenuOpen(false);
                  }}
                  className="text-black font-bold py-2 border-b-2 border-dashed border-black hover:bg-yellow-100 transition-all px-2"
                >
                  Features
                </button>
                <button
                  onClick={() => {
                    scrollToSection(benefitsRef);
                    setMobileMenuOpen(false);
                  }}
                  className="text-black font-bold py-2 border-b-2 border-dashed border-black hover:bg-yellow-100 transition-all px-2"
                >
                  Benefits
                </button>
                <button
                  onClick={() => {
                    scrollToSection(testimonialsRef);
                    setMobileMenuOpen(false);
                  }}
                  className="text-black font-bold py-2 border-b-2 border-dashed border-black hover:bg-yellow-100 transition-all px-2"
                >
                  Testimonials
                </button>
                <motion.button
                  onClick={handleContactClick}
                  className="bg-yellow-300 text-black font-bold px-6 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Us!
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
};

export default Header;

