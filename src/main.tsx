import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Force scroll to top on page refresh - multiple approaches for better cross-browser support
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}

// Method 1: Using window.onload
window.onload = function () {
  window.scrollTo(0, 0);
};

// Method 2: Using DOMContentLoaded for earlier execution
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, 0);
});

// Method 3: Using beforeunload to set a flag in sessionStorage
window.addEventListener("beforeunload", function () {
  sessionStorage.setItem("shouldScrollToTop", "true");
});

// Check for the flag and scroll to top if it exists
if (sessionStorage.getItem("shouldScrollToTop")) {
  sessionStorage.removeItem("shouldScrollToTop");
  window.scrollTo(0, 0);
}

createRoot(document.getElementById("root")!).render(<App />);
