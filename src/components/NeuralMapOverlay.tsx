import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Node {
  id: number;
  x: number;
  y: number;
  radius: number;
  opacity: number;
  pulseDelay: number;
}

interface Link {
  id: number;
  source: Node;
  target: Node;
  opacity: number;
  animationDelay: number;
}

const NeuralMapOverlay: React.FC = () => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  // Generate nodes with random positions
  const nodes = useMemo<Node[]>(() => {
    const nodeCount = 35;
    return Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      radius: Math.random() * 3 + 2, // 2-5px radius
      opacity: Math.random() * 0.4 + 0.1, // 0.1-0.5 opacity
      pulseDelay: Math.random() * 4, // 0-4s delay
    }));
  }, [dimensions]);

  // Generate links between nearby nodes
  const links = useMemo<Link[]>(() => {
    const maxDistance = 180;
    const maxLinks = 45;
    const potentialLinks: Link[] = [];

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const node1 = nodes[i];
        const node2 = nodes[j];
        const distance = Math.sqrt(
          Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2)
        );

        if (distance < maxDistance) {
          potentialLinks.push({
            id: `${i}-${j}`,
            source: node1,
            target: node2,
            opacity: Math.max(0.05, (maxDistance - distance) / maxDistance * 0.15),
            animationDelay: Math.random() * 6,
          });
        }
      }
    }

    // Sort by opacity and take the strongest connections
    return potentialLinks
      .sort((a, b) => b.opacity - a.opacity)
      .slice(0, maxLinks);
  }, [nodes]);

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Create curved path for links
  const createCurvedPath = (source: Node, target: Node) => {
    const midX = (source.x + target.x) / 2;
    const midY = (source.y + target.y) / 2;
    
    // Add slight curve to the connection
    const curvature = 0.2;
    const dx = target.x - source.x;
    const dy = target.y - source.y;
    const curveX = midX + dy * curvature;
    const curveY = midY - dx * curvature;

    return `M ${source.x} ${source.y} Q ${curveX} ${curveY} ${target.x} ${target.y}`;
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0"
        style={{ filter: 'blur(0.5px)' }}
      >
        {/* Neural Network Links */}
        <g>
          {links.map((link) => (
            <motion.path
              key={link.id}
              d={createCurvedPath(link.source, link.target)}
              stroke="url(#linkGradient)"
              strokeWidth="1"
              fill="none"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ 
                opacity: [0, link.opacity, link.opacity * 0.7, link.opacity],
                pathLength: [0, 1, 1, 1]
              }}
              transition={{
                duration: 8,
                delay: link.animationDelay,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </g>

        {/* Neural Network Nodes */}
        <g>
          {nodes.map((node) => (
            <motion.g key={node.id}>
              {/* Outer glow */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.radius + 2}
                fill="url(#nodeGlowGradient)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, node.opacity * 0.3, node.opacity * 0.1, node.opacity * 0.3],
                  scale: [0.8, 1.2, 0.9, 1.1]
                }}
                transition={{
                  duration: 6,
                  delay: node.pulseDelay,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
              {/* Core node */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.radius}
                fill="url(#nodeGradient)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, node.opacity, node.opacity * 0.6, node.opacity],
                  scale: [0.5, 1, 0.8, 1]
                }}
                transition={{
                  duration: 4,
                  delay: node.pulseDelay + 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
            </motion.g>
          ))}
        </g>

        {/* Gradient Definitions */}
        <defs>
          <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.8)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.6)" />
            <stop offset="100%" stopColor="rgba(167, 139, 250, 0.3)" />
          </radialGradient>
          
          <radialGradient id="nodeGlowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.2)" />
            <stop offset="70%" stopColor="rgba(139, 92, 246, 0.1)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          
          <linearGradient id="linkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.2)" />
            <stop offset="100%" stopColor="rgba(167, 139, 250, 0.1)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default NeuralMapOverlay; 