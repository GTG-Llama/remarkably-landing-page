import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable smooth scrolling temporarily during navigation
    const htmlElement = document.documentElement;
    const originalScrollBehavior = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = 'auto';
    
    // Create a robust scroll-to-top function
    const forceScrollToTop = () => {
      // Multiple methods to ensure scroll position is reset
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Force repaint to ensure scroll position is applied
      document.documentElement.style.display = 'none';
      document.documentElement.offsetHeight; // trigger reflow
      document.documentElement.style.display = '';
    };
    
    // Immediate scroll to top
    forceScrollToTop();
    
    // Handle layout shifts from Framer Motion animations and image loading
    const scrollChecks = [
      setTimeout(() => window.scrollTo(0, 0), 0),
      setTimeout(() => window.scrollTo(0, 0), 16), // Next frame
      setTimeout(() => window.scrollTo(0, 0), 50), // After quick animations
      setTimeout(() => window.scrollTo(0, 0), 100), // After layout shifts
      setTimeout(() => window.scrollTo(0, 0), 300), // After slower animations
      setTimeout(() => window.scrollTo(0, 0), 500)  // Final check
    ];
    
    // Watch for any scroll events during initial load and reset position
    let isResetting = true;
    const handleScroll = () => {
      if (isResetting && window.scrollY > 50) {
        window.scrollTo(0, 0);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Stop watching for auto-scrolls after animations should be complete
    const stopResetTimer = setTimeout(() => {
      isResetting = false;
      window.removeEventListener('scroll', handleScroll);
      // Restore original scroll behavior
      htmlElement.style.scrollBehavior = originalScrollBehavior;
    }, 800);
    
    // Cleanup function
    return () => {
      scrollChecks.forEach(timeout => clearTimeout(timeout));
      clearTimeout(stopResetTimer);
      window.removeEventListener('scroll', handleScroll);
      htmlElement.style.scrollBehavior = originalScrollBehavior;
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop; 