import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

const mainLinks = [
  { name: "Features", path: "/features" },
  { name: "Pricing", path: "/pricing" },
  { name: "Benefits", path: "/benefits" },
];

const moreLinks = [
  { name: "How It Works", path: "/how-it-works" },
  { name: "FAQ", path: "/faq" },
  { name: "About", path: "/about" },
  { name: "Achievements", path: "/achievements" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleContactClick = () => {
    navigate("/contact");
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
          <Link to="/" className="flex-shrink-0">
            <motion.div
              className="bg-white border-2 border-black p-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform rotate-1"
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
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 relative">
            {mainLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-black font-semibold text-lg hover:underline decoration-2 underline-offset-4"
              >
                {link.name}
              </Link>
            ))}
            {/* More Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                className="flex items-center text-black font-semibold text-lg hover:underline decoration-2 underline-offset-4 focus:outline-none"
                type="button"
              >
                More <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-48 bg-white border-2 border-black shadow-lg rounded-md z-50"
                  >
                    <ul className="py-2">
                      {moreLinks.map((link) => (
                        <li key={link.path}>
                          <Link
                            to={link.path}
                            className="block px-4 py-2 text-black hover:bg-yellow-100 hover:underline"
                            onClick={() => setMoreOpen(false)}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
                {[...mainLinks, ...moreLinks].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-black font-bold py-2 border-b-2 border-dashed border-black hover:bg-yellow-100 transition-all px-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <motion.button
                  onClick={() => {
                    handleContactClick();
                    setMobileMenuOpen(false);
                  }}
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

