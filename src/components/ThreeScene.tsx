
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { 
  createEssayModel, 
  animateEssay, 
  setupLighting, 
  createFeatureInfoPanel,
  toggleFeatureInfo,
  EssayFeature
} from '@/utils/three-utils';

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
    annotationMarkers: Array<{
      feature: EssayFeature;
      markerGroup: THREE.Group;
    }>;
  } | null>(null);
  const isEssayFocusActive = useRef<boolean>(false);
  const isEssayShowcaseActive = useRef<boolean>(false);
  const activeFeatureRef = useRef<string | null>(null);
  const featureInfoPanels = useRef<Record<string, THREE.Group>>({});
  const initialPositionRef = useRef<{ 
    essay: { position: THREE.Vector3, rotation: THREE.Euler, scale: THREE.Vector3 },
    camera: THREE.Vector3
  } | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const initializeScene = async () => {
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 15;
      cameraRef.current = camera;

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

      // Set up lighting for the scene
      setupLighting(scene);

      // Create the essay model
      const essayModel = await createEssayModel(scene);
      essayRef.current = essayModel;
      
      // Set initial pen position to avoid clipping
      essayModel.redPen.position.x = 6;
      essayModel.redPen.position.z = 1;

      initialPositionRef.current = {
        essay: {
          position: essayModel.essayGroup.position.clone(),
          rotation: essayModel.essayGroup.rotation.clone(),
          scale: essayModel.essayGroup.scale.clone()
        },
        camera: camera.position.clone()
      };

      // Create feature info panels
      if (essayModel.annotationMarkers) {
        essayModel.annotationMarkers.forEach(({ feature }) => {
          const panel = createFeatureInfoPanel(scene, feature);
          featureInfoPanels.current[feature.id] = panel;
        });
      }

      // Entrance animation for the essay
      gsap.fromTo(
        essayModel.essayGroup.rotation, 
        { y: Math.PI * 0.5 }, 
        { y: initialPositionRef.current.essay.rotation.y, duration: 1.5, ease: "power3.out" }
      );
      
      gsap.fromTo(
        essayModel.essayGroup.position, 
        { z: -10 }, 
        { z: initialPositionRef.current.essay.position.z, duration: 1.5, ease: "power3.out" }
      );

      // Event listener for essay focus section transition
      const handleEssayTransition = (event: Event) => {
        const customEvent = event as CustomEvent;
        isEssayFocusActive.current = customEvent.detail.active;
        
        if (isEssayFocusActive.current && essayRef.current && cameraRef.current) {
          gsap.to(essayRef.current.essayGroup.rotation, {
            x: 0,
            y: 0,
            duration: 1.2,
            ease: "power3.inOut"
          });
          
          gsap.to(essayRef.current.essayGroup.position, {
            x: 0,
            y: 0,
            z: 0,
            duration: 1.2,
            ease: "power3.inOut"
          });
        }
      };

      document.addEventListener('essayTransition', handleEssayTransition);

      // Event listener for feature hovering
      const handleFeatureHover = (event: Event) => {
        const customEvent = event as CustomEvent;
        const featureId = customEvent.detail.featureId;
        activeFeatureRef.current = featureId;
        
        if (essayRef.current && isEssayShowcaseActive.current) {
          // Hide all info panels
          Object.values(featureInfoPanels.current).forEach(panel => {
            panel.visible = false;
          });
          
          if (featureId) {
            const markerInfo = essayRef.current.annotationMarkers.find(
              marker => marker.feature.id === featureId
            );
            
            if (markerInfo) {
              const { feature, markerGroup } = markerInfo;
              
              // Smooth camera transition to focus on the feature
              gsap.to(cameraRef.current?.position, {
                x: feature.position.x * 0.5,
                y: feature.position.y * 0.5,
                z: 7,
                duration: 1,
                ease: "power3.inOut"
              });
              
              // Rotate essay slightly for better viewing angle
              gsap.to(essayRef.current.essayGroup.rotation, {
                y: 0.2,
                duration: 1,
                ease: "power3.inOut"
              });
              
              // Highlight effect animation for the marker
              gsap.to(markerGroup.scale, {
                x: 1.5,
                y: 1.5,
                z: 1.5,
                duration: 0.5,
                repeat: 1,
                yoyo: true,
                ease: "power3.inOut"
              });
              
              // Show info panel for this feature
              if (featureInfoPanels.current[featureId]) {
                toggleFeatureInfo(
                  feature,
                  featureInfoPanels.current[featureId],
                  true
                );
              }
            }
          } else {
            // Reset camera position when no feature is selected
            gsap.to(cameraRef.current?.position, {
              x: 0,
              y: 0,
              z: 10,
              duration: 1,
              ease: "power3.inOut"
            });
            
            // Reset essay rotation
            gsap.to(essayRef.current.essayGroup.rotation, {
              y: 0,
              duration: 1,
              ease: "power3.inOut"
            });
          }
        }
      };

      document.addEventListener('featureHover', handleFeatureHover);

      // Handle window resize
      const handleResize = () => {
        if (!cameraRef.current || !rendererRef.current) return;
        
        // Update camera aspect ratio
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        
        // Update renderer size
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      // Set up scroll trigger for essay focus section
      const essayFocusSection = document.getElementById('essay-focus');
      if (essayFocusSection) {
        ScrollTrigger.create({
          trigger: essayFocusSection,
          start: 'top top',
          end: 'bottom bottom',
          onEnter: () => {
            isEssayFocusActive.current = true;
            isEssayShowcaseActive.current = false;
          },
          onLeave: () => {
            isEssayFocusActive.current = false;
          },
          onEnterBack: () => {
            isEssayFocusActive.current = true;
            isEssayShowcaseActive.current = false;
          },
          onLeaveBack: () => {
            isEssayFocusActive.current = false;
          },
          onUpdate: (self) => {
            if (!essayRef.current || !cameraRef.current) return;
            
            if (isEssayFocusActive.current) {
              const progress = self.progress;
              
              // Adjust camera distance based on scroll progress
              cameraRef.current.position.z = 5 - (progress * 3);
              
              // Move essay vertically
              essayRef.current.essayGroup.position.y = 5 - (progress * 10);
              
              // Subtle essay rotation
              essayRef.current.essayGroup.rotation.x = -0.2 + (progress * 0.1);
              
              // Move pen to follow essay
              essayRef.current.redPen.position.y = 5 - (progress * 10);
              
              // Reveal highlights sequentially
              essayRef.current.highlights.forEach((highlight, i) => {
                const appearPoint = 0.3 + (i * 0.15);
                const material = highlight.material as THREE.MeshBasicMaterial;
                
                if (progress > appearPoint && material.opacity < 0.7) {
                  gsap.to(material, { 
                    opacity: 0.7, 
                    duration: 0.8,
                    ease: "power2.inOut"
                  });
                  
                  gsap.to(highlight.scale, { 
                    x: 1.05, 
                    y: 1.2, 
                    z: 1, 
                    duration: 0.8, 
                    yoyo: true, 
                    repeat: 1,
                    ease: "power2.inOut" 
                  });
                }
              });
            }
          }
        });
      }

      // Set up scroll trigger for essay showcase section
      const essayShowcaseSection = document.getElementById('essay-showcase');
      if (essayShowcaseSection) {
        ScrollTrigger.create({
          trigger: essayShowcaseSection,
          start: 'top bottom',
          end: 'bottom top',
          onEnter: () => {
            isEssayShowcaseActive.current = true;
            isEssayFocusActive.current = false;
            
            if (essayRef.current && cameraRef.current) {
              // Position essay in the center-left for showcase view
              gsap.to(essayRef.current.essayGroup.position, {
                x: -3, // Position on the left side
                y: 0,
                z: 0,
                duration: 1.2,
                ease: "power3.inOut"
              });
              
              // Reset essay rotation
              gsap.to(essayRef.current.essayGroup.rotation, {
                x: 0,
                y: 0.2, // Slight angle for better viewing
                z: 0,
                duration: 1.2,
                ease: "power3.inOut"
              });
              
              // Scale up essay for better visibility
              gsap.to(essayRef.current.essayGroup.scale, {
                x: 1.2,
                y: 1.2,
                z: 1.2,
                duration: 1.2,
                ease: "power3.inOut"
              });
              
              // Position camera appropriately
              gsap.to(cameraRef.current.position, {
                x: 0,
                y: 0,
                z: 10,
                duration: 1.2,
                ease: "power3.inOut"
              });
            }
          },
          onLeave: () => {
            isEssayShowcaseActive.current = false;
          },
          onEnterBack: () => {
            isEssayShowcaseActive.current = true;
            isEssayFocusActive.current = false;
          },
          onLeaveBack: () => {
            isEssayShowcaseActive.current = false;
          }
        });
      }

      // Set up scroll trigger for general page scrolling
      const scrollElement = document.querySelector(scrollContainer);
      if (scrollElement) {
        ScrollTrigger.create({
          trigger: scrollElement,
          start: 'top top',
          end: 'bottom bottom',
          onUpdate: (self) => {
            if (!essayRef.current || isEssayFocusActive.current || isEssayShowcaseActive.current) return;
            
            // Reset to initial position near the top of page
            if (self.progress < 0.05 && initialPositionRef.current) {
              gsap.to(essayRef.current.essayGroup.position, {
                x: initialPositionRef.current.essay.position.x,
                y: initialPositionRef.current.essay.position.y,
                z: initialPositionRef.current.essay.position.z,
                duration: 0.8,
                ease: "power3.out"
              });
              
              gsap.to(essayRef.current.essayGroup.rotation, {
                x: initialPositionRef.current.essay.rotation.x,
                y: initialPositionRef.current.essay.rotation.y,
                z: initialPositionRef.current.essay.rotation.z,
                duration: 0.8,
                ease: "power3.out"
              });
              
              gsap.to(essayRef.current.essayGroup.scale, {
                x: initialPositionRef.current.essay.scale.x,
                y: initialPositionRef.current.essay.scale.y,
                z: initialPositionRef.current.essay.scale.z,
                duration: 0.8,
                ease: "power3.out"
              });
              
              gsap.to(cameraRef.current.position, {
                x: initialPositionRef.current.camera.x,
                y: initialPositionRef.current.camera.y,
                z: initialPositionRef.current.camera.z,
                duration: 0.8,
                ease: "power3.out"
              });
            } else {
              // Animate essay based on scroll progress
              animateEssay(
                essayRef.current.essayGroup,
                essayRef.current.redPen,
                self.progress * document.body.scrollHeight,
                document.body.scrollHeight
              );
              
              // Reveal highlights sequentially during scroll
              essayRef.current.highlights.forEach((highlight, i) => {
                const triggerPoint = 0.2 + (i * 0.1);
                
                const material = highlight.material as THREE.MeshBasicMaterial;
                
                if (self.progress > triggerPoint && material.opacity < 0.7) {
                  gsap.to(material, { 
                    opacity: 0.7, 
                    duration: 0.8,
                    ease: "power2.inOut" 
                  });
                  
                  gsap.to(highlight.scale, { 
                    x: 1.05, 
                    y: 1.2, 
                    z: 1, 
                    duration: 0.8, 
                    yoyo: true, 
                    repeat: 1,
                    ease: "power2.inOut" 
                  });
                }
              });
            }
          }
        });
      }

      // Animation loop
      const animate = () => {
        if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;
        
        rendererRef.current.render(sceneRef.current, cameraRef.current);
        
        requestAnimationFrame(animate);
      };

      animate();

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('essayTransition', handleEssayTransition);
        document.removeEventListener('featureHover', handleFeatureHover);
        
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
