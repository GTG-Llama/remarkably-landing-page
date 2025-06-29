
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface GlowEffectProps {
  targetSelector: string;
  color?: string;
  startDelay?: number;
}

const GlowEffect: React.FC<GlowEffectProps> = ({ 
  targetSelector, 
  color = "rgba(168, 145, 101, 0.4)",
  startDelay = 0
}) => {
  const glowRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!glowRef.current) return;
    
    const target = document.querySelector(targetSelector);
    if (!target) return;
    
    const updateGlowPosition = () => {
      const rect = target.getBoundingClientRect();
      const glow = glowRef.current;
      if (!glow) return;
      
      glow.style.width = `${rect.width + 40}px`;
      glow.style.height = `${rect.height + 40}px`;
      glow.style.left = `${rect.left - 20}px`;
      glow.style.top = `${rect.top - 20}px`;
    };
    
    // Set initial position
    updateGlowPosition();
    
    // Create animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: target,
        start: "top bottom-=100",
        end: "bottom top+=100",
        toggleActions: "play reverse play reverse",
        onUpdate: updateGlowPosition
      }
    });
    
    tl.fromTo(glowRef.current, 
      { opacity: 0, scale: 0.8 }, 
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.8, 
        ease: "power2.out",
        delay: startDelay
      }
    );
    
    // Update on scroll and resize
    window.addEventListener('resize', updateGlowPosition);
    window.addEventListener('scroll', updateGlowPosition);
    
    return () => {
      window.removeEventListener('resize', updateGlowPosition);
      window.removeEventListener('scroll', updateGlowPosition);
    };
  }, [targetSelector, startDelay]);
  
  return (
    <div 
      ref={glowRef} 
      className="fixed rounded-3xl pointer-events-none z-5"
      style={{ 
        background: `radial-gradient(circle, ${color} 0%, rgba(255,255,255,0) 70%)`,
        filter: 'blur(30px)',
        transform: 'translate3d(0, 0, 0)'
      }}
      aria-hidden="true"
    />
  );
};

export default GlowEffect;
