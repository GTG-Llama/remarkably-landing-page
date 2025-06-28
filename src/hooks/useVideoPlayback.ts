import { useEffect, useRef } from "react";

/**
 * Custom hook to handle video playback across browsers, especially Safari
 * @param autoPlay Whether the video should autoplay
 * @param muted Whether the video should be muted
 * @param loop Whether the video should loop
 * @returns Video ref to be attached to video element
 */
export const useVideoPlayback = (
  autoPlay: boolean = true,
  muted: boolean = true,
  loop: boolean = true
) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Function to handle playback
    const handlePlayback = () => {
      if (autoPlay) {
        // Safari requires user interaction for video playback
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Playback started successfully
            })
            .catch((error) => {
              // Auto-play was prevented
              
              // For Safari: Add event listeners for user interaction
              const playOnInteraction = () => {
                video.play()
                  .then(() => {
                    // Remove event listeners after successful play
                    document.removeEventListener("click", playOnInteraction);
                    document.removeEventListener("touchstart", playOnInteraction);
                  })
                  .catch((e) => {
                    // Handle silently in production
                  });
              };
              
              document.addEventListener("click", playOnInteraction);
              document.addEventListener("touchstart", playOnInteraction);
            });
        }
      }
    };

    // Set video attributes
    video.muted = muted;
    video.loop = loop;
    video.playsInline = true;
    
    // Try to play the video
    handlePlayback();

    // Add loadedmetadata event listener for Safari
    video.addEventListener("loadedmetadata", handlePlayback);
    
    // Cleanup
    return () => {
      video.removeEventListener("loadedmetadata", handlePlayback);
    };
  }, [autoPlay, muted, loop]);

  return videoRef;
}; 