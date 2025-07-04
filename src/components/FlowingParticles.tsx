
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FlowingParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create scene
    const scene = new THREE.Scene();
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 5;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create particle system
    const particleCount = 500;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleTargets = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);
    
    // Set particle properties
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Initial positions - spread them throughout the screen
      particlePositions[i3] = (Math.random() - 0.5) * window.innerWidth * 0.5;
      particlePositions[i3 + 1] = (Math.random() - 0.5) * window.innerHeight * 0.5;
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 10;
      
      // Target positions - where they'll flow to
      particleTargets[i3] = (Math.random() - 0.5) * window.innerWidth * 0.5;
      particleTargets[i3 + 1] = (Math.random() - 0.5) * window.innerHeight * 0.5;
      particleTargets[i3 + 2] = (Math.random() - 0.5) * 10;
      
      // Set particle speed
      particleSpeeds[i] = 0.01 + Math.random() * 0.02;
      
      // Set particle colors - golden palette
      particleColors[i3] = 0.9;        // R: 230
      particleColors[i3 + 1] = 0.7;    // G: 179
      particleColors[i3 + 2] = 0.3;    // B: 77
    }
    
    // Configure particle geometry
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    
    // Create particle material
    const particleMaterial = new THREE.PointsMaterial({
      size: 3,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    
    // Create particle system
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    
    // Get sections for path animation
    const getSectionPositions = () => {
      const sections = [
        document.getElementById('hero-section'),
        document.getElementById('essay-focus'),
        document.getElementById('features'),
        document.getElementById('video-showcase'),
        document.getElementById('testimonials')
      ].filter(Boolean);
      
      return sections.map(section => {
        if (!section) return { x: 0, y: 0 };
        
        const rect = section.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2 - window.innerWidth / 2,
          y: -(rect.top + rect.height / 2 - window.innerHeight / 2)
        };
      });
    };
    
    // Set initial section positions
    let sectionPositions = getSectionPositions();
    
    // Update particle targets to follow path between sections
    const updateParticleTargets = () => {
      sectionPositions = getSectionPositions();
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Pick two random sections to flow between
        const sectionIndex1 = Math.floor(Math.random() * sectionPositions.length);
        let sectionIndex2 = Math.floor(Math.random() * sectionPositions.length);
        if (sectionIndex2 === sectionIndex1) {
          sectionIndex2 = (sectionIndex2 + 1) % sectionPositions.length;
        }
        
        const section1 = sectionPositions[sectionIndex1];
        const section2 = sectionPositions[sectionIndex2];
        
        const progress = Math.random();
        
        // Set target as a point along the path between two sections
        particleTargets[i3] = section1.x * (1 - progress) + section2.x * progress + (Math.random() - 0.5) * 200;
        particleTargets[i3 + 1] = section1.y * (1 - progress) + section2.y * progress + (Math.random() - 0.5) * 200;
        particleTargets[i3 + 2] = (Math.random() - 0.5) * 10;
      }
    };
    
    // Schedule regular target updates for continuous motion
    updateParticleTargets();
    const targetUpdateInterval = setInterval(updateParticleTargets, 5000);
    
    // Animation function
    const animate = () => {
      // Update particle positions to move toward their targets
      const positionAttribute = particleGeometry.attributes.position as THREE.BufferAttribute;
      
      // Create a new array for the updated positions
      const positions = positionAttribute.array;
      const updatedPositions = new Float32Array(positions.length);
      
      // Copy the current positions to our new array first
      for (let i = 0; i < positions.length; i++) {
        updatedPositions[i] = positions[i];
      }
      
      // Now update the positions in our copy
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Get current positions from the copy
        const x = updatedPositions[i3];
        const y = updatedPositions[i3 + 1];
        const z = updatedPositions[i3 + 2];
        
        // Calculate new positions
        const newX = x + (particleTargets[i3] - x) * particleSpeeds[i];
        const newY = y + (particleTargets[i3 + 1] - y) * particleSpeeds[i];
        const newZ = z + (particleTargets[i3 + 2] - z) * particleSpeeds[i];
        
        // Update our copy
        updatedPositions[i3] = newX;
        updatedPositions[i3 + 1] = newY;
        updatedPositions[i3 + 2] = newZ;
      }
      
      // Update the buffer attribute with our new array
      positionAttribute.set(updatedPositions);
      positionAttribute.needsUpdate = true;
      
      // Render
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    
    // Begin animation
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      
      // Update section positions after resize
      updateParticleTargets();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up on unmount
    return () => {
      if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
      window.removeEventListener('resize', handleResize);
      clearInterval(targetUpdateInterval);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default FlowingParticles;
