import React from "react";

interface WaveDividerProps {
  position: "top" | "bottom";
  variant: "light" | "dark";
  className?: string;
  height?: number;
}

const WaveDivider: React.FC<WaveDividerProps> = ({
  position,
  variant,
  className = "",
  height = 60
}) => {
  const fillColor = variant === "light" ? "#ffffff" : "#111827"; // white or gray-900
  
  // Different wave patterns for variety
  const wavePatterns = {
    wave1: "M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    wave2: "M0,20L48,24C96,28,192,36,288,40C384,44,480,44,576,40C672,36,768,28,864,28C960,28,1056,36,1152,40C1248,44,1344,44,1392,44L1440,44L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    wave3: "M0,16L48,21.3C96,27,192,37,288,42.7C384,48,480,48,576,42.7C672,37,768,27,864,26.7C960,27,1056,37,1152,42.7C1248,48,1344,48,1392,48L1440,48L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
  };

  const getWavePath = () => {
    // Use different wave patterns based on position for variety
    const patterns = Object.values(wavePatterns);
    const patternIndex = position === "top" ? 0 : 1;
    return patterns[patternIndex];
  };

  const getTransform = () => {
    if (position === "bottom") {
      return "rotate(180)";
    }
    return "";
  };

  const getViewBox = () => {
    return position === "bottom" ? "0 0 1440 64" : "0 0 1440 64";
  };

  return (
    <div className={`relative ${className}`} style={{ height: `${height}px` }}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={getViewBox()}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ transform: getTransform() }}
      >
        <path
          d={getWavePath()}
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export default WaveDivider; 