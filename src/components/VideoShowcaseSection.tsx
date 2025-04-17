
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const VideoShowcaseSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current || !videoRef.current) return;

    gsap.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none",
      },
    });

    gsap.from(videoRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none",
      },
    });
  }, []);

  const handlePlayVideo = () => {
    setIsPlaying(true);
    // In a real implementation, you would play the video here
    // For now, we'll just toggle the placeholder visibility
  };

  return (
    <motion.section
      id="video-showcase"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          ref={headingRef}
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Remarkably in Action
          </h2>
          <p className="text-xl text-gray-600">
            Watch how our AI-powered platform transforms the essay grading experience
          </p>
        </motion.div>

        <motion.div 
          ref={videoRef}
          className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl relative aspect-video"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {/* Video Placeholder - In production, replace with actual video component */}
          <div className={`w-full h-full bg-black flex items-center justify-center ${isPlaying ? 'hidden' : 'block'}`}>
            <div className="w-full h-full absolute inset-0 bg-remarkably-gold/10 backdrop-blur-sm flex items-center justify-center">
              <img 
                src="/placeholder.svg" 
                alt="Video thumbnail" 
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <motion.button 
                onClick={handlePlayVideo} 
                className="z-10 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-remarkably-gold hover:text-white transition-colors duration-300"
                aria-label="Play video"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play size={32} className="ml-1" />
              </motion.button>
            </div>
          </div>
          
          {/* This would be replaced with an actual video player in production */}
          {isPlaying && (
            <motion.div 
              className="w-full h-full bg-black flex items-center justify-center text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-xl">Video would play here</p>
              {/* In production, you'd use something like: */}
              {/* <video src="your-video-url.mp4" controls autoPlay className="w-full h-full" /> */}
            </motion.div>
          )}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience firsthand how Remarkably's intuitive interface and powerful AI
            help teachers grade essays faster while providing better feedback.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VideoShowcaseSection;
