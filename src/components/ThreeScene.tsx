
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { createEssayModel, animateEssay, setupLighting } from '@/utils/three-utils';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ThreeSceneProps {
  scrollContainer: string; // CSS selector for the scroll container
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ scrollContainer }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const essayRef = useRef<{
    essayGroup: THREE.Group;
    redPen: THREE.Group;
    highlights: THREE.Mesh[];
    lines: THREE.Mesh[];
  } | null>(null);

  useEffect(() => {
    // Initialize scene only once
    if (!canvasRef.current) return;

    const initializeScene = async () => {
      // Create scene
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);
      sceneRef.current = scene;

      // Create camera
      const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 15;
      cameraRef.current = camera;

      // Create renderer
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current!,
        antialias: true,
        alpha: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      rendererRef.current = renderer;

      // Setup lighting
      setupLighting(scene);

      // Create essay model
      const essayModel = await createEssayModel(scene);
      essayRef.current = essayModel;

      // Initial animation to introduce the essay
      gsap.fromTo(
        essayModel.essayGroup.rotation, 
        { y: Math.PI * 2 }, 
        { y: 0, duration: 1.5, ease: "power2.out" }
      );
      
      gsap.fromTo(
        essayModel.essayGroup.position, 
        { z: -20 }, 
        { z: 0, duration: 1.5, ease: "power2.out" }
      );

      // Responsive handling
      const handleResize = () => {
        if (!cameraRef.current || !rendererRef.current) return;
        
        // Update camera
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        
        // Update renderer
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      // Setup GSAP ScrollTrigger
      const scrollElement = document.querySelector(scrollContainer);
      if (scrollElement) {
        ScrollTrigger.create({
          trigger: scrollElement,
          start: 'top top',
          end: 'bottom bottom',
          onUpdate: (self) => {
            if (!essayRef.current) return;
            
            // Animate essay based on scroll position
            animateEssay(
              essayRef.current.essayGroup,
              essayRef.current.redPen,
              self.progress * document.body.scrollHeight,
              document.body.scrollHeight
            );

            // Animate highlights as we scroll
            essayRef.current.highlights.forEach((highlight, i) => {
              const delay = i * 0.1;
              const triggerPoint = 0.3 + (i * 0.1);
              
              // Cast to MeshBasicMaterial to access opacity
              const material = highlight.material as THREE.MeshBasicMaterial;
              
              if (self.progress > triggerPoint && material.opacity < 0.7) {
                gsap.to(material, { opacity: 0.7, duration: 0.5 });
                
                // Pulse animation for highlight
                gsap.to(highlight.scale, { 
                  x: 1.05, y: 1.2, z: 1, 
                  duration: 0.5, 
                  yoyo: true, 
                  repeat: 1,
                  ease: "power1.inOut" 
                });
              }
            });
          }
        });
      }

      // Animation loop
      const animate = () => {
        if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;
        
        // Render scene
        rendererRef.current.render(sceneRef.current, cameraRef.current);
        
        // Continue animation loop
        requestAnimationFrame(animate);
      };

      animate();

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        if (ScrollTrigger) {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
        
        if (rendererRef.current) {
          rendererRef.current.dispose();
        }
      };
    };

    initializeScene();
  }, [scrollContainer]);

  return (
    <canvas 
      ref={canvasRef} 
      className="canvas-container"
      aria-hidden="true"
    />
  );
};

export default ThreeScene;
