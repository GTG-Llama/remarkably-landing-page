
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

const FlowingParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    particles: THREE.Points;
    curve: THREE.CurvePath<THREE.Vector3>;
  } | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create curve path for particles to follow
    const curve = new THREE.CurvePath<THREE.Vector3>();
    
    // Create bezier curves that flow from section to section
    const createBezierCurve = (startX: number, startY: number, endX: number, endY: number, curvature: number = 100) => {
      const start = new THREE.Vector3(startX, startY, 0);
      const end = new THREE.Vector3(endX, endY, 0);
      const control1 = new THREE.Vector3(startX + curvature, startY, 0);
      const control2 = new THREE.Vector3(endX - curvature, endY, 0);
      
      return new THREE.CubicBezierCurve3(start, control1, control2, end);
    };
    
    // Define the flowing path using bezier curves
    // From hero to essay focus
    curve.add(createBezierCurve(-200, 0, 200, -window.innerHeight * 0.8));
    // From essay focus to features
    curve.add(createBezierCurve(200, -window.innerHeight * 0.8, -150, -window.innerHeight * 1.6));
    // From features to video showcase
    curve.add(createBezierCurve(-150, -window.innerHeight * 1.6, 180, -window.innerHeight * 2.4));
    // From video showcase to testimonials
    curve.add(createBezierCurve(180, -window.innerHeight * 2.4, -150, -window.innerHeight * 3.2));
    // From testimonials to CTA
    curve.add(createBezierCurve(-150, -window.innerHeight * 3.2, 0, -window.innerHeight * 4));
    
    // Create particles along the curve
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const progress = new Float32Array(particleCount);
    const speed = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      // Distribute particles randomly along the curve
      progress[i] = Math.random();
      speed[i] = 0.0003 + Math.random() * 0.0005;
      sizes[i] = 4 + Math.random() * 8;
      
      // Get point along curve
      const point = curve.getPoint(progress[i]);
      positions[i * 3] = point.x;
      positions[i * 3 + 1] = point.y;
      positions[i * 3 + 2] = point.z;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    // Create particle material
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xA89165, // Remarkably gold
      size: 5,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    
    // Create particle system
    const particles = new THREE.Points(particlesGeometry, particleMaterial);
    scene.add(particles);
    
    // Position camera
    camera.position.z = 500;
    
    // Store references
    particlesRef.current = {
      scene,
      camera,
      renderer,
      particles,
      curve,
    };
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Set up scroll trigger for adjusting particles' opacity based on scroll position
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        // Adjust camera position based on scroll
        camera.position.y = -self.progress * window.innerHeight * 1.5;
      }
    });
    
    // Animation loop
    const animate = () => {
      if (!particlesRef.current) return;
      
      const { particles, renderer, scene, camera, curve } = particlesRef.current;
      
      // Update particles
      const positions = (particles.geometry as THREE.BufferGeometry).attributes.position.array;
      
      for (let i = 0; i < particleCount; i++) {
        // Update progress
        progress[i] += speed[i];
        if (progress[i] > 1) progress[i] = 0;
        
        // Update position
        const point = curve.getPoint(progress[i]);
        positions[i * 3] = point.x;
        positions[i * 3 + 1] = point.y;
        positions[i * 3 + 2] = point.z;
      }
      
      (particles.geometry as THREE.BufferGeometry).attributes.position.needsUpdate = true;
      
      // Render
      renderer.render(scene, camera);
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      if (particlesRef.current) {
        particlesRef.current.particles.geometry.dispose();
        (particlesRef.current.particles.material as THREE.Material).dispose();
        particlesRef.current.renderer.dispose();
      }
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
      aria-hidden="true"
    />
  );
};

export default FlowingParticles;
