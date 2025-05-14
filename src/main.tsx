import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Force scroll to top on page refresh - multiple approaches for better cross-browser support
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}

// Ensure all resources are loaded before removing loading state
document.addEventListener("DOMContentLoaded", function() {
  // Force scroll to top immediately
  window.scrollTo(0, 0);
  
  // Add event listener for when all resources are loaded
  window.addEventListener("load", function() {
    // Force scroll to top again after everything is loaded
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
    
    // Mark document as loaded for CSS transitions
    document.documentElement.classList.add("loaded");
  });
});

// Method 3: Using beforeunload to set a flag in sessionStorage
window.addEventListener("beforeunload", function() {
  sessionStorage.setItem("shouldScrollToTop", "true");
  
  // Clear any existing scroll position
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
});

// Check for the flag and scroll to top if it exists
if (sessionStorage.getItem("shouldScrollToTop")) {
  sessionStorage.removeItem("shouldScrollToTop");
  window.scrollTo(0, 0);
}

// Prevent any scrolling until fully loaded
document.body.style.overflow = "hidden";
window.addEventListener("load", function() {
  // Re-enable scrolling after everything is loaded
  setTimeout(() => {
    document.body.style.overflow = "";
  }, 1000); // Delay to match loading animation
});

createRoot(document.getElementById("root")!).render(<App />);
