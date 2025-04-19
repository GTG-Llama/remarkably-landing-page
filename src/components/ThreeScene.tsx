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

      setupLighting(scene);

      const essayModel = await createEssayModel(scene);
      essayRef.current = essayModel;
      
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

      if (essayModel.annotationMarkers) {
        essayModel.annotationMarkers.forEach(({ feature }) => {
          const panel = createFeatureInfoPanel(scene, feature);
          featureInfoPanels.current[feature.id] = panel;
        });
      }

      gsap.fromTo(
        essayModel.essayGroup.rotation, 
        { y: Math.PI * 2 }, 
        { y: initialPositionRef.current.essay.rotation.y, duration: 1.5, ease: "power2.out" }
      );
      
      gsap.fromTo(
        essayModel.essayGroup.position, 
        { z: -20 }, 
        { z: initialPositionRef.current.essay.position.z, duration: 1.5, ease: "power2.out" }
      );

      const handleEssayTransition = (event: Event) => {
        const customEvent = event as CustomEvent;
        isEssayFocusActive.current = customEvent.detail.active;
        
        if (isEssayFocusActive.current && essayRef.current && cameraRef.current) {
          gsap.to(essayRef.current.essayGroup.rotation, {
            x: 0,
            y: 0,
            duration: 1,
            ease: "power2.inOut"
          });
          
          gsap.to(essayRef.current.essayGroup.position, {
            x: 0,
            y: 0,
            z: 0,
            duration: 1,
            ease: "power2.inOut"
          });
        }
      };

      document.addEventListener('essayTransition', handleEssayTransition);

      const handleFeatureHover = (event: Event) => {
        const customEvent = event as CustomEvent;
        const featureId = customEvent.detail.featureId;
        activeFeatureRef.current = featureId;
        
        if (essayRef.current && isEssayShowcaseActive.current) {
          Object.values(featureInfoPanels.current).forEach(panel => {
            panel.visible = false;
          });
          
          if (featureId) {
            const markerInfo = essayRef.current.annotationMarkers.find(
              marker => marker.feature.id === featureId
            );
            
            if (markerInfo) {
              const { feature, markerGroup } = markerInfo;
              
              gsap.to(cameraRef.current?.position, {
                x: feature.position.x * 0.5,
                y: feature.position.y * 0.5,
                z: 7,
                duration: 0.8,
                ease: "power2.inOut"
              });
              
              gsap.to(essayRef.current.essayGroup.rotation, {
                y: 0.2,
                duration: 0.8,
                ease: "power2.inOut"
              });
              
              gsap.to(markerGroup.scale, {
                x: 1.5,
                y: 1.5,
                z: 1.5,
                duration: 0.5,
                repeat: 1,
                yoyo: true,
                ease: "power2.inOut"
              });
              
              if (featureInfoPanels.current[featureId]) {
                toggleFeatureInfo(
                  feature,
                  featureInfoPanels.current[featureId],
                  true
                );
              }
            }
          } else {
            gsap.to(cameraRef.current?.position, {
              x: 0,
              y: 0,
              z: 10,
              duration: 0.8,
              ease: "power2.inOut"
            });
            
            gsap.to(essayRef.current.essayGroup.rotation, {
              y: 0,
              duration: 0.8,
              ease: "power2.inOut"
            });
          }
        }
      };

      document.addEventListener('featureHover', handleFeatureHover);

      const handleResize = () => {
        if (!cameraRef.current || !rendererRef.current) return;
        
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

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
              
              cameraRef.current.position.z = 5 - (progress * 3);
              
              essayRef.current.essayGroup.position.y = 5 - (progress * 10);
              
              essayRef.current.essayGroup.rotation.x = -0.2 + (progress * 0.1);
              
              essayRef.current.redPen.position.y = 5 - (progress * 10);
              
              essayRef.current.highlights.forEach((highlight, i) => {
                const appearPoint = 0.3 + (i * 0.2);
                const material = highlight.material as THREE.MeshBasicMaterial;
                
                if (progress > appearPoint && material.opacity < 0.7) {
                  gsap.to(material, { 
                    opacity: 0.7, 
                    duration: 0.5 
                  });
                  
                  gsap.to(highlight.scale, { 
                    x: 1.05, 
                    y: 1.2, 
                    z: 1, 
                    duration: 0.5, 
                    yoyo: true, 
                    repeat: 1,
                    ease: "power1.inOut" 
                  });
                }
              });
            }
          }
        });
      }

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
              gsap.to(essayRef.current.essayGroup.position, {
                x: 0,
                y: 0,
                z: 0,
                duration: 1,
                ease: "power2.inOut"
              });
              
              gsap.to(essayRef.current.essayGroup.rotation, {
                x: 0,
                y: 0,
                z: 0,
                duration: 1,
                ease: "power2.inOut"
              });
              
              gsap.to(essayRef.current.essayGroup.scale, {
                x: 1.2,
                y: 1.2,
                z: 1.2,
                duration: 1,
                ease: "power2.inOut"
              });
              
              gsap.to(cameraRef.current.position, {
                x: 0,
                y: 0,
                z: 10,
                duration: 1,
                ease: "power2.inOut"
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

      const scrollElement = document.querySelector(scrollContainer);
      if (scrollElement) {
        ScrollTrigger.create({
          trigger: scrollElement,
          start: 'top top',
          end: 'bottom bottom',
          onUpdate: (self) => {
            if (!essayRef.current || isEssayFocusActive.current || isEssayShowcaseActive.current) return;
            
            if (self.progress < 0.05 && initialPositionRef.current) {
              gsap.to(essayRef.current.essayGroup.position, {
                x: initialPositionRef.current.essay.position.x,
                y: initialPositionRef.current.essay.position.y,
                z: initialPositionRef.current.essay.position.z,
                duration: 0.5,
                ease: "power2.out"
              });
              
              gsap.to(essayRef.current.essayGroup.rotation, {
                x: initialPositionRef.current.essay.rotation.x,
                y: initialPositionRef.current.essay.rotation.y,
                z: initialPositionRef.current.essay.rotation.z,
                duration: 0.5,
                ease: "power2.out"
              });
              
              gsap.to(essayRef.current.essayGroup.scale, {
                x: initialPositionRef.current.essay.scale.x,
                y: initialPositionRef.current.essay.scale.y,
                z: initialPositionRef.current.essay.scale.z,
                duration: 0.5,
                ease: "power2.out"
              });
              
              gsap.to(cameraRef.current.position, {
                x: initialPositionRef.current.camera.x,
                y: initialPositionRef.current.camera.y,
                z: initialPositionRef.current.camera.z,
                duration: 0.5,
                ease: "power2.out"
              });
            } else {
              animateEssay(
                essayRef.current.essayGroup,
                essayRef.current.redPen,
                self.progress * document.body.scrollHeight,
                document.body.scrollHeight
              );
              
              essayRef.current.highlights.forEach((highlight, i) => {
                const delay = i * 0.1;
                const triggerPoint = 0.3 + (i * 0.1);
                
                const material = highlight.material as THREE.MeshBasicMaterial;
                
                if (self.progress > triggerPoint && material.opacity < 0.7) {
                  gsap.to(material, { opacity: 0.7, duration: 0.5 });
                  
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
          }
        });
      }

      const animate = () => {
        if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;
        
        rendererRef.current.render(sceneRef.current, cameraRef.current);
        
        requestAnimationFrame(animate);
      };

      animate();

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
