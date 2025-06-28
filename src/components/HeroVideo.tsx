import React, { useRef, useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeroVideoProps {
  className?: string;
  videoSrc: string;
  fallbackImage: string;
  alt?: string;
}

const HeroVideo: React.FC<HeroVideoProps> = ({
  className = '',
  videoSrc,
  fallbackImage,
  alt = 'Remarkably demo'
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || isMobile) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      // Attempt to play the video
      video.play().catch(() => {
        // If autoplay fails, that's okay - user can click to play
      });
    };

    const handleError = () => {
      setHasError(true);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [isMobile]);

  // Show fallback image on mobile or if video has error
  if (isMobile || hasError) {
    return (
      <div className={`relative ${className}`}>
        <img
          src={fallbackImage}
          alt={alt}
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
        {/* Optional play button overlay for mobile */}
        {isMobile && !hasError && (
          <button
            onClick={() => {
              // On mobile, user can tap to play video
              window.open(videoSrc, '_blank');
            }}
            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors rounded-lg group"
            aria-label="Play demo video"
          >
            <div className="bg-white/90 rounded-full p-4 group-hover:bg-white transition-colors">
              <svg className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.68L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"/>
              </svg>
            </div>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Fallback image that shows while video loads */}
      {!isLoaded && (
        <img
          src={fallbackImage}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
      )}
      
      {/* Video element */}
      <video
        ref={videoRef}
        className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        loop
        playsInline
        preload="metadata"
        poster={fallbackImage}
      >
        <source src={videoSrc} type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <img src={fallbackImage} alt={alt} className="w-full h-full object-cover" />
      </video>

      {/* Subtle loading indicator */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/80 rounded-full p-3">
            <div className="animate-spin rounded-full h-6 w-6 border-2 border-gray-300 border-t-indigo-600"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroVideo;