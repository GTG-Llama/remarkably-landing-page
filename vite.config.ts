/*

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

*/

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // allow any ngrok-free.app hostname via RegExp
    allowedHosts: [
      "localhost",
      "::1", 
      "127.0.0.1",
      /\.ngrok-free\.app$/
    ],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React dependencies
          if (id.includes('react') && !id.includes('@') && !id.includes('react-router')) {
            return 'react-vendor';
          }
          
          // Animation libraries
          if (id.includes('framer-motion') || id.includes('gsap')) {
            return 'animation-vendor';
          }
          
          // Three.js - separate into smaller chunks
          if (id.includes('three') && !id.includes('@react-three')) {
            return 'three-core';
          }
          if (id.includes('@react-three/')) {
            return 'three-addons';
          }
          if (id.includes('three/examples/jsm')) {
            return 'three-loaders';
          }
          
          // UI components
          if (id.includes('@radix-ui/')) {
            return 'radix-ui';
          }
          
          // Form libraries
          if (id.includes('@hookform/') || id.includes('react-hook-form') || id.includes('zod')) {
            return 'forms';
          }
          
          // Routing
          if (id.includes('react-router')) {
            return 'routing';
          }
          
          // Email and communication
          if (id.includes('@emailjs/')) {
            return 'communication';
          }
          
          // Query and state management
          if (id.includes('@tanstack/')) {
            return 'state';
          }
          
          // Utilities
          if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('class-variance-authority')) {
            return 'utils';
          }
          
          // Large dependencies in node_modules
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 500, // Target smaller chunks for better performance
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
