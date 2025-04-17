
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

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
  
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="section-container flex items-center justify-between rounded px-0 py-0 my-0 mx-[26px]">
        <motion.img 
          src="/logo.png" 
          alt="Logo" 
          className="w-20 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {['Features', 'Benefits', 'Testimonials'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-black/80 hover:text-black transition-colors text-sm font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button className="bg-black text-white rounded-full px-6 py-2 text-sm font-medium hover:bg-remarkably-gold transition-all duration-300">
              Start Free Trial
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-black p-2"
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white/95 backdrop-blur-lg absolute top-full left-0 right-0 border-t border-black/10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="section-container py-6 flex flex-col space-y-4">
            {['Features', 'Benefits', 'Testimonials'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-black/80 hover:text-black transition-colors py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <Button 
                className="bg-black text-white rounded-full px-6 py-2 text-sm font-medium hover:bg-remarkably-gold transition-all duration-300 w-full" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Free Trial
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
