import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { IoPlay } from "react-icons/io5";

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
    <section
      id="video-showcase"
      ref={sectionRef}
      className="section-padding py-20 bg-indigo-100 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-12 left-1/3 w-24 h-24 bg-[#FFC8DD] border-4 border-black -rotate-6 z-0"></div>
      <div className="absolute bottom-36 right-1/4 w-32 h-32 bg-[#B8F7D4] border-4 border-black rotate-12 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="bg-yellow-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-black">
              See Remarkably
              <span className="relative inline-block ml-2">
                <span className="relative z-10">in Action</span>
                <span className="absolute -bottom-2 left-0 w-full h-4 bg-pink-400 -z-0"></span>
              </span>
            </h2>
            <p className="text-lg text-black font-bold mt-4 px-4 py-3 bg-white border-2 border-black">
              Watch how our AI-powered platform transforms the essay grading
              experience
            </p>
          </div>
        </div>

        <div ref={videoRef} className="max-w-5xl mx-auto relative">
          <div className="absolute -top-6 -left-6 w-full h-full bg-[#BDE0FE] border-4 border-black rotate-2 z-0"></div>

          <div className="border-4 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-10 aspect-video">
            {/* Video Placeholder - In production, replace with actual video component */}
            <div
              className={`w-full h-full bg-black flex items-center justify-center ${
                isPlaying ? "hidden" : "block"
              }`}
            >
              <div className="w-full h-full absolute inset-0 bg-black/30 flex items-center justify-center">
                <button
                  onClick={handlePlayVideo}
                  className="z-10 w-20 h-20 bg-white border-3 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:bg-yellow-300 transition-all hover:-translate-y-1 hover:-translate-x-1"
                  aria-label="Play video"
                >
                  <IoPlay size={32} className="text-black" />
                </button>
              </div>
            </div>

            {/* This would be replaced with an actual video player in production */}
            {isPlaying && (
              <div className="w-full h-full bg-black flex items-center justify-center">
                <video
                  src="/remarkably.mp4"
                  controls
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-full"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="inline-block bg-white text-black font-bold p-4 border-3 border-black max-w-2xl mx-auto shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            Experience firsthand how Remarkably's intuitive interface and
            powerful AI help teachers grade essays faster while providing better
            feedback.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcaseSection;
