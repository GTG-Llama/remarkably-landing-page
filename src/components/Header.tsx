import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
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

  const scrollToFeatures = () => {
    // Scroll approximately 100vh down the page
    window.scrollTo({
      top: window.innerHeight * 1.0,
      behavior: "smooth",
    });
  };

  const scrollToTestimonials = () => {
    // Scroll approximately 400vh down the page
    window.scrollTo({
      top: window.innerHeight * 8.2,
      behavior: "smooth",
    });
  };

  const scrollToEssayShowcase = () => {
    // Scroll approximately 200vh down the page
    window.scrollTo({
      top: window.innerHeight * 3.2,
      behavior: "smooth",
    });
  };

  const scrollToFeaturesSection = () => {
    // Scroll approximately 300vh down the page
    window.scrollTo({
      top: window.innerHeight * 5.5,
      behavior: "smooth",
    });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-2"
      }`}
    >
      <motion.div
        className={`container mx-auto px-4 ${
          scrolled
            ? "bg-white border-1 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
            : "bg-white border-1 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
        } flex items-center justify-between ${
          scrolled ? "rounded-none p-3" : "rounded-none p-3"
        }`}
        layout
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className={`${
              scrolled
                ? "bg-white border-2 border-black p-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform rotate-1"
                : "bg-white border-2 border-black p-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform rotate-1"
            }`}
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
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <motion.a
            href="#essay-focus"
            className="text-black font-bold hover:underline decoration-4 decoration-pink-400 transition-all"
            onClick={scrollToFeatures}
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Demo
          </motion.a>
          <motion.a
            href="#essay-showcase"
            className="text-black font-bold hover:underline decoration-4 decoration-blue-400 transition-all"
            onClick={scrollToEssayShowcase}
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Features
          </motion.a>
          <motion.a
            href="#features"
            className="text-black font-bold hover:underline decoration-4 decoration-yellow-400 transition-all"
            onClick={scrollToFeaturesSection}
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Benefits
          </motion.a>
          <motion.a
            href="#testimonials"
            className="text-black font-bold hover:underline decoration-4 decoration-green-400 transition-all"
            onClick={scrollToTestimonials}
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Testimonials
          </motion.a>
          <motion.button
            className="bg-yellow-300 text-black text-base font-black px-6 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform transition-all hover:-translate-y-1 hover:-translate-x-1"
            whileHover={{
              scale: 1.05,
              boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)",
              y: -4,
              x: -4,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="mailto:contact@lenorai.com">Contact Us!</a>
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className={`md:hidden p-2 ${
            scrolled
              ? "bg-black text-white border-2 border-black"
              : "text-black"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-3 border-t-0 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] absolute top-full left-4 right-4"
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="py-6 px-4 flex flex-col space-y-4">
              <motion.a
                href="#essay-focus"
                className="text-black font-bold py-2 border-b-2 border-dashed border-black hover:bg-pink-200 transition-all p-2"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ backgroundColor: "#FBCFE8", x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                Demo
              </motion.a>
              <motion.a
                href="#essay-showcase"
                className="text-black font-bold py-2 border-b-2 border-dashed border-black hover:bg-blue-200 transition-all p-2"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ backgroundColor: "#BFDBFE", x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                Features
              </motion.a>
              <motion.a
                href="#features"
                className="text-black font-bold py-2 border-b-2 border-dashed border-black hover:bg-yellow-200 transition-all p-2"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ backgroundColor: "#FEF3C7", x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                Benefits
              </motion.a>
              <motion.a
                href="#testimonials"
                className="text-black font-bold py-2 border-b-2 border-dashed border-black hover:bg-blue-200 transition-all p-2"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ backgroundColor: "#BFDBFE", x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                Testimonials
              </motion.a>
              <motion.button
                className="bg-yellow-300 text-black text-base font-black px-6 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform transition-all hover:-translate-y-1 hover:-translate-x-1 w-full mt-4"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="mailto:contact@lenorai.com" className="block w-full">
                  Contact Us!
                </a>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
