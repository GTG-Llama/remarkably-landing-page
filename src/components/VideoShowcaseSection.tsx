import React, { useState } from "react";
import { IoPlay } from "react-icons/io5";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useVideoPlayback } from "@/hooks/useVideoPlayback";
import { Clock, FileText, Brain, CheckCircle } from "lucide-react";

interface DemoVideo {
  id: string;
  title: string;
  description: string;
  videoSrc: string;
  thumbnail?: string;
  duration: string;
}

const VideoShowcaseSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const videoRef = useVideoPlayback(true, false, true);

  // Demo videos available
  const demoVideos: DemoVideo[] = [
    {
      id: "main-demo",
      title: "Complete Grading Workflow",
      description: "See the full essay grading process from upload to feedback",
      videoSrc: "/remarkably.mp4",
      duration: "2:30"
    },
    {
      id: "upload-demo",
      title: "Essay Upload & Analysis",
      description: "Watch how easily you can upload handwritten essays",
      videoSrc: "/lenordemo1-2.mp4",
      duration: "1:45"
    },
    {
      id: "feedback-demo",
      title: "AI Feedback Generation",
      description: "Experience AI-powered personalized feedback creation",
      videoSrc: "/lenordemo2.mp4",
      duration: "2:10"
    },
    {
      id: "results-demo",
      title: "Grade Results & Reports",
      description: "View comprehensive grading results and analytics",
      videoSrc: "/lenordemo3-3.mp4",
      duration: "1:55"
    }
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  const decorativeVariants = {
    hidden: { scale: 0, opacity: 0, rotate: 0 },
    visible: (custom: number) => ({
      scale: 1,
      opacity: 1,
      rotate: custom,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.2,
      },
    }),
    hover: {
      rotate: (custom: number) => custom * 1.5,
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  const videoContainerVariants = {
    hidden: {
      scale: 0.9,
      opacity: 0,
      rotate: 0,
      y: 50,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
        delay: 0.3,
        duration: 0.7,
      },
    },
    hover: {
      scale: 1.02,
      rotate: 1,
      transition: { duration: 0.3 },
    },
  };

  const videoBackgroundVariants = {
    hidden: { rotate: 0, scale: 0.9 },
    visible: {
      rotate: 2,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: 0.2,
        duration: 0.6,
      },
    },
  };

  const highlightVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { delay: 0.6, duration: 0.5 },
    },
  };

  const playButtonVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.1,
      y: -5,
      x: -5,
      boxShadow: "7px 7px 0px 0px rgba(0,0,0,1)",
      backgroundColor: "#fde047", // yellow-300
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)",
    },
  };

  const handlePlayVideo = (videoIndex?: number) => {
    if (videoIndex !== undefined) {
      setActiveVideo(videoIndex);
    }
    setIsPlaying(true);
  };

  const currentVideo = demoVideos[activeVideo];

  // Video selection icons
  const videoIcons = [Brain, FileText, CheckCircle, Clock];

  return (
    <motion.section
      id="video-showcase"
      ref={sectionRef}
      className="section-padding py-20 bg-gradient-to-b from-indigo-200 to-indigo-300 relative overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute top-12 left-1/3 w-24 h-24 bg-[#FFC8DD] border-4 border-black z-0"
        variants={decorativeVariants}
        custom={-6}
        initial="hidden"
        animate={controls}
        whileHover="hover"
      />
      <motion.div
        className="absolute bottom-36 right-1/4 w-32 h-32 bg-[#B8F7D4] border-4 border-black z-0"
        variants={decorativeVariants}
        custom={12}
        initial="hidden"
        animate={controls}
        whileHover="hover"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={itemVariants}
        >
          <motion.div
            className="bg-yellow-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            initial={{ rotate: 0 }}
            animate={{ rotate: -1 }}
            whileHover={{
              rotate: -2,
              boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)",
              transition: { duration: 0.3 },
            }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-black">
              See Remarkably
              <span className="relative inline-block ml-2">
                <span className="relative z-10">in Action</span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-4 bg-pink-400 -z-0"
                  variants={highlightVariants}
                />
              </span>
            </h2>
            <motion.p
              className="text-lg text-black font-bold mt-4 px-4 py-3 bg-white border-2 border-black"
              whileHover={{
                rotate: 1,
                transition: { duration: 0.2 },
              }}
            >
              Watch how our AI-powered platform transforms the essay grading experience
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Video Selection */}
        <motion.div 
          className="mb-8 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {demoVideos.map((video, index) => {
              const IconComponent = videoIcons[index];
              return (
                <motion.button
                  key={video.id}
                  onClick={() => handlePlayVideo(index)}
                  className={`border-4 border-black p-4 transition-all duration-300 ${
                    activeVideo === index 
                      ? 'bg-yellow-300 shadow-lg transform -translate-y-1' 
                      : 'bg-white hover:bg-yellow-50 hover:shadow-md'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-8 h-8 flex items-center justify-center mb-2 ${
                      activeVideo === index ? 'text-black' : 'text-indigo-600'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-sm mb-1">{video.title}</h3>
                    <p className="text-xs text-gray-600 mb-2">{video.description}</p>
                    <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">
                      {video.duration}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto relative"
          variants={itemVariants}
        >
          <motion.div
            className="absolute -top-6 -left-6 w-full h-full bg-[#BDE0FE] border-4 border-black z-0"
            variants={videoBackgroundVariants}
          />

          <motion.div
            className="border-4 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-10 aspect-video"
            variants={videoContainerVariants}
            whileHover="hover"
          >
            {/* Video Placeholder */}
            <div
              className={`w-full h-full bg-black flex items-center justify-center ${
                isPlaying ? "hidden" : "block"
              }`}
            >
              <div className="w-full h-full absolute inset-0 bg-black/30 flex items-center justify-center flex-col">
                <motion.button
                  onClick={() => handlePlayVideo()}
                  className="z-10 w-20 h-20 bg-white border-3 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center mb-4"
                  aria-label="Play video"
                  variants={playButtonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <IoPlay size={32} className="text-black" />
                </motion.button>
                
                <div className="bg-white border-2 border-black px-4 py-2 text-center">
                  <h3 className="font-bold text-black">{currentVideo.title}</h3>
                  <p className="text-sm text-gray-600">{currentVideo.description}</p>
                </div>
              </div>
            </div>

            {/* Video player */}
            {isPlaying && (
              <motion.div
                className="w-full h-full bg-black flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <video
                  ref={videoRef}
                  src={currentVideo.videoSrc}
                  controls
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full"
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src={currentVideo.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <motion.p
            className="inline-block bg-white text-black font-bold p-4 border-3 border-black max-w-2xl mx-auto shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
            initial={{ rotate: 0 }}
            animate={{ rotate: 1 }}
            whileHover={{
              rotate: -1,
              scale: 1.02,
              boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
              transition: { duration: 0.3 },
            }}
          >
            Experience firsthand how Remarkably's intuitive interface and
            powerful AI help teachers grade essays faster while providing better
            feedback to students.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VideoShowcaseSection;
