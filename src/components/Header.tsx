
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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

  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/70 backdrop-blur-md py-3" : "bg-transparent py-5"}`}>
      <div className="section-container flex items-center justify-between">
        <img src="/logo.png" alt="Logo" className="w-25 h-8" />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-black/80 hover:text-black transition-colors">
            Features
          </a>
          <a href="#benefits" className="text-black/80 hover:text-black transition-colors">
            Benefits
          </a>
          <a href="#testimonials" className="text-black/80 hover:text-black transition-colors">
            Testimonials
          </a>
          <Button variant="outline" className="text-black border-black/30 hover:border-black">
            Contact Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-black p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <div className="md:hidden bg-white/95 backdrop-blur-lg absolute top-full left-0 right-0 border-t border-black/10 animate-fade-in">
          <div className="section-container py-6 flex flex-col space-y-4">
            <a href="#features" className="text-black/80 hover:text-black transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Features
            </a>
            <a href="#benefits" className="text-black/80 hover:text-black transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Benefits
            </a>
            <a href="#testimonials" className="text-black/80 hover:text-black transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Testimonials
            </a>
            <Button variant="outline" className="text-black border-black/30 hover:border-black w-full mt-4" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </Button>
          </div>
        </div>}
    </header>;
};

export default Navbar;
