import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? to : from);

  // Enhanced spring parameters for faster finale
  // Increased stiffness and reduced damping for snappier end animation
  const damping = 15 + 25 * (1 / duration); // Reduced from 20 + 40
  const stiffness = 150 * (1 / duration);    // Increased from 100

  const springValue = useSpring(motionValue, {
    damping,
    stiffness,
    // Add velocity to push through the final numbers faster
    velocity: to > 100000 ? 50 : 0,
  });

  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = String(direction === "down" ? to : from);
    }
  }, [from, to, direction]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === "function") {
        onStart();
      }

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === "down" ? from : to);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(() => {
        if (typeof onEnd === "function") {
          onEnd();
        }
      }, delay * 1000 + duration * 1000);

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd, duration]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const currentValue = Math.floor(latest);
        
        // Special case for 1 million - show "1 Million +" when we reach 1000000
        if (currentValue >= 1000000) {
          ref.current.textContent = "1 Million +";
        } else {
          const options = {
            useGrouping: !!separator,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          };

          const formattedNumber = Intl.NumberFormat("en-US", options).format(
            currentValue
          );

          ref.current.textContent = separator
            ? formattedNumber.replace(/,/g, separator)
            : formattedNumber;
        }
      }
    });

    return () => unsubscribe();
  }, [springValue, separator]);

  return <span className={`${className}`} ref={ref} />;
} 