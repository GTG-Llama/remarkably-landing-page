import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  createEssayModel,
  animateEssay,
  setupLighting,
  createFeatureInfoPanel,
  toggleFeatureInfo,
  EssayFeature,
  setupCameraLayers,
} from "@/utils/three-utils";

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
    essay: {
      position: THREE.Vector3;
      rotation: THREE.Euler;
      scale: THREE.Vector3;
    };
    camera: THREE.Vector3;
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
      setupCameraLayers(camera);

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
          scale: essayModel.essayGroup.scale.clone(),
        },
        camera: camera.position.clone(),
      };

      if (essayModel.annotationMarkers) {
        essayModel.annotationMarkers.forEach(({ feature }) => {
          const panel = createFeatureInfoPanel(scene, feature);
          featureInfoPanels.current[feature.id] = panel;
        });
      }

      essayModel.essayGroup.scale.set(0.85, 0.85, 0.85);
      essayModel.essayGroup.rotation.x = -0.25;
      essayModel.essayGroup.rotation.z = 0.08;
      essayModel.essayGroup.position.z = -20;
      essayModel.essayGroup.visible = false;
      setTimeout(() => {
        essayModel.essayGroup.visible = true;
        gsap.to(essayModel.essayGroup.position, {
          z: initialPositionRef.current.essay.position.z,
          duration: 1.4,
          ease: "elastic.out(1, 0.7)",
        });
        gsap.to(essayModel.essayGroup.scale, {
          x: initialPositionRef.current.essay.scale.x,
          y: initialPositionRef.current.essay.scale.y,
          z: initialPositionRef.current.essay.scale.z,
          duration: 1.2,
          ease: "back.out(1.7)",
        });
        gsap.to(essayModel.essayGroup.rotation, {
          x:
            initialPositionRef.current.essay.rotation.x +
            0.04 * (Math.random() - 0.5),
          y:
            initialPositionRef.current.essay.rotation.y +
            0.04 * (Math.random() - 0.5),
          z:
            initialPositionRef.current.essay.rotation.z +
            0.04 * (Math.random() - 0.5),
          duration: 1.2,
          ease: "back.out(1.7)",
        });
        gsap.fromTo(
          essayModel.essayGroup,
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: "power1.out" }
        );
      }, 100);

      // Update all major transitions to use elastic/back easing
      // Focus transition
      const handleEssayTransition = (event: Event) => {
        const customEvent = event as CustomEvent;
        isEssayFocusActive.current = customEvent.detail.active;

        if (
          isEssayFocusActive.current &&
          essayRef.current &&
          cameraRef.current
        ) {
          gsap.to(essayRef.current.essayGroup.rotation, {
            x: 0,
            y: 0,
            duration: 1,
            ease: "back.out(1.7)",
          });

          gsap.to(essayRef.current.essayGroup.position, {
            x: 0,
            y: 0,
            z: 0,
            duration: 1,
            ease: "back.out(1.7)",
          });
        }
      };

      document.addEventListener("essayTransition", handleEssayTransition);

      const handleFeatureFocus = (event: Event) => {
        const customEvent = event as CustomEvent;
        const featureId = customEvent.detail.featureId;
        // Prevent repeated animation if featureId hasn't changed
        if (activeFeatureRef.current === featureId) return;
        activeFeatureRef.current = featureId;

        if (essayRef.current && isEssayShowcaseActive.current) {
          Object.values(featureInfoPanels.current).forEach((panel) => {
            panel.visible = false;
          });

          // Reset all highlights to default opacity
          essayRef.current.highlights.forEach((highlight) => {
            const material = highlight.material as THREE.MeshBasicMaterial;
            gsap.to(material, {
              opacity: 0.2,
              duration: 0.3,
            });

            // Reset scale
            gsap.to(highlight.scale, {
              x: 1,
              y: 1,
              z: 1,
              duration: 0.3,
            });
          });

          if (featureId) {
            const markerInfo = essayRef.current.annotationMarkers.find(
              (marker) => marker.feature.id === featureId
            );

            // Find the corresponding highlight and make it stand out
            essayRef.current.highlights.forEach((highlight) => {
              if ((highlight as any).featureId === featureId) {
                const material = highlight.material as THREE.MeshBasicMaterial;

                // Increase opacity for active highlight
                gsap.to(material, {
                  opacity: 0.55,
                  duration: 0.3,
                });

                // Make highlight slightly larger
                gsap.to(highlight.scale, {
                  x: 1.1,
                  y: 1.25,
                  z: 1.1,
                  duration: 0.3,
                });
              }
            });

            if (markerInfo) {
              const { feature, markerGroup } = markerInfo;

              // Move camera to focus on the feature on the LEFT-positioned essay
              gsap.to(cameraRef.current?.position, {
                // Adjust X based on essay's new base position (-3) and feature offset
                x: -3 + feature.position.x * 0.4,
                // Adjust Y based on feature offset
                y: feature.position.y * 0.4,
                // Zoom in slightly, but less than before
                z: 10,
                duration: 0.8,
                ease: "power2.inOut",
              });

              // Rotate essay slightly to face the camera based on feature
              gsap.to(essayRef.current.essayGroup.rotation, {
                // Adjust base Y rotation and add feature-specific rotation
                y: -0.1 + feature.position.x * 0.05,
                duration: 0.8,
                ease: "power2.inOut",
              });

              gsap.to(markerGroup.scale, {
                x: 1.5,
                y: 1.5,
                z: 1.5,
                duration: 0.5,
                repeat: 1,
                yoyo: true,
                ease: "power2.inOut",
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
            // Reset camera to the general showcase view (essay on the left)
            gsap.to(cameraRef.current?.position, {
              x: -1, // Camera slightly left to frame the left-shifted essay
              y: 0,
              z: 14, // Further back to see the smaller essay
              duration: 0.8,
              ease: "power2.inOut",
            });

            gsap.to(essayRef.current.essayGroup.rotation, {
              x: 0, // Keep x rotation reset
              y: -0.1, // Default rotation for showcase view
              z: 0, // Keep z rotation reset
              duration: 0.8,
              ease: "power2.inOut",
            });
          }
        }
      };

      // Listen for feature focus events instead of hover events
      document.addEventListener("featureHover", handleFeatureFocus);

      const handleResize = () => {
        if (!cameraRef.current || !rendererRef.current) return;

        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();

        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      const essayFocusSection = document.getElementById("essay-focus");
      if (essayFocusSection) {
        ScrollTrigger.create({
          trigger: essayFocusSection,
          start: "top top",
          end: "bottom bottom",
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

              cameraRef.current.position.z = 5 - progress * 3;

              essayRef.current.essayGroup.position.y = 5 - progress * 10;

              essayRef.current.essayGroup.rotation.x = -20 + progress * 0.1;

              essayRef.current.redPen.position.y = 5 - progress * 10;

              essayRef.current.highlights.forEach((highlight, i) => {
                const appearPoint = 0.3 + i * 0.2;
                const material = highlight.material as THREE.MeshBasicMaterial;

                if (progress > appearPoint && material.opacity < 0.7) {
                  gsap.to(material, {
                    opacity: 0.7,
                    duration: 0.5,
                  });

                  gsap.to(highlight.scale, {
                    x: 1.05,
                    y: 1.2,
                    z: 1,
                    duration: 0.5,
                    yoyo: true,
                    repeat: 1,
                    ease: "power1.inOut",
                  });
                }
              });
            }
          },
        });
      }

      const essayShowcaseSection = document.getElementById("essay-showcase");
      if (essayShowcaseSection) {
        ScrollTrigger.create({
          trigger: essayShowcaseSection,
          start: "top bottom", // Trigger earlier
          end: "bottom top",
          onEnter: () => {
            isEssayShowcaseActive.current = true;
            isEssayFocusActive.current = false;

            if (essayRef.current && cameraRef.current) {
              // Move essay to the LEFT for showcase view
              gsap.to(essayRef.current.essayGroup.position, {
                x: -4, // Shift left
                y: 0,
                z: 0,
                duration: 1.1,
                ease: "elastic.out(1, 0.7)",
              });

              // Reset rotation, maybe slight turn towards cards
              gsap.to(essayRef.current.essayGroup.rotation, {
                x: 0,
                y: -0.1, // Slight turn
                z: 0,
                duration: 1.1,
                ease: "elastic.out(1, 0.7)",
              });

              // Scale DOWN essay for showcase view
              gsap.to(essayRef.current.essayGroup.scale, {
                x: 0.9, // Smaller scale
                y: 0.9,
                z: 0.9,
                duration: 1.1,
                ease: "elastic.out(1, 0.7)",
              });

              // Position camera to view the left-positioned, smaller essay
              gsap.to(cameraRef.current.position, {
                x: -1, // Camera slightly left
                y: 0,
                z: 14, // Move camera further back
                duration: 1.1,
                ease: "power2.inOut",
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
          },
        });
      }

      // Add camera transition for Features section
      const featuresSection = document.getElementById("features");
      if (featuresSection) {
        ScrollTrigger.create({
          trigger: featuresSection,
          start: "top center",
          end: "bottom top",
          onEnter: () => {
            if (essayRef.current && cameraRef.current) {
              // Move camera into the essay for a transition effect
              gsap.to(cameraRef.current.position, {
                x: 0,
                y: 0,
                z: 3, // Move camera close to the essay
                duration: 1.2,
              });
              gsap.to(essayRef.current.essayGroup.rotation, {
                x: 0.1, // Slight tilt for drama
                y: 0,
                z: 0,
                duration: 1.2,
                ease: "power2.inOut",
              });
              gsap.to(essayRef.current.essayGroup.scale, {
                x: 0,
                y: 0,
                z: 0,
                duration: 1.2,
                ease: "power2.inOut",
              });
              gsap.to(essayRef.current.redPen.scale, {
                x: 0,
                y: 0,
                z: 0,
                duration: 1.2,
                ease: "power2.inOut",
              });
            }
          },
          onLeaveBack: () => {
            // Reset camera and essay to previous state
            if (
              essayRef.current &&
              cameraRef.current &&
              initialPositionRef.current
            ) {
              gsap.to(cameraRef.current.position, {
                x: initialPositionRef.current.camera.x,
                y: initialPositionRef.current.camera.y,
                z: initialPositionRef.current.camera.z,
                duration: 1.2,
                ease: "power2.inOut",
              });
              gsap.to(essayRef.current.essayGroup.rotation, {
                x: initialPositionRef.current.essay.rotation.x,
                y: initialPositionRef.current.essay.rotation.y,
                z: initialPositionRef.current.essay.rotation.z,
                duration: 1.2,
                ease: "power2.inOut",
              });
              gsap.to(essayRef.current.essayGroup.scale, {
                x: initialPositionRef.current.essay.scale.x,
                y: initialPositionRef.current.essay.scale.y,
                z: initialPositionRef.current.essay.scale.z,
                duration: 1.2,
                ease: "power2.inOut",
              });
              gsap.to(essayRef.current.redPen.scale, {
                x: 0.15,
                y: 0.15,
                z: 0.15,
                duration: 1.2,
                ease: "power2.inOut",
              });
            }
          },
        });
      }

      const scrollElement = document.querySelector(scrollContainer);
      if (scrollElement) {
        ScrollTrigger.create({
          trigger: scrollElement,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
            if (
              !essayRef.current ||
              isEssayFocusActive.current ||
              isEssayShowcaseActive.current
            )
              return;

            if (self.progress < 0.05 && initialPositionRef.current) {
              gsap.to(essayRef.current.essayGroup.position, {
                x: initialPositionRef.current.essay.position.x,
                y: initialPositionRef.current.essay.position.y,
                z: initialPositionRef.current.essay.position.z,
                duration: 0.5,
                ease: "power2.out",
              });

              gsap.to(essayRef.current.essayGroup.rotation, {
                x: initialPositionRef.current.essay.rotation.x,
                y: initialPositionRef.current.essay.rotation.y,
                z: initialPositionRef.current.essay.rotation.z,
                duration: 0.5,
                ease: "power2.out",
              });

              gsap.to(essayRef.current.essayGroup.scale, {
                x: initialPositionRef.current.essay.scale.x,
                y: initialPositionRef.current.essay.scale.y,
                z: initialPositionRef.current.essay.scale.z,
                duration: 0.5,
                ease: "power2.out",
              });

              gsap.to(cameraRef.current.position, {
                x: initialPositionRef.current.camera.x,
                y: initialPositionRef.current.camera.y,
                z: initialPositionRef.current.camera.z,
                duration: 0.5,
                ease: "power2.out",
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
                const triggerPoint = 0.3 + i * 0.1;

                const material = highlight.material as THREE.MeshBasicMaterial;

                if (self.progress > triggerPoint && material.opacity < 0.7) {
                  gsap.to(material, { opacity: 0.7, duration: 0.5 });

                  gsap.to(highlight.scale, {
                    x: 1.05,
                    y: 1.2,
                    z: 1,
                    duration: 0.5,
                    yoyo: true,
                    repeat: 1,
                    ease: "power1.inOut",
                  });
                }
              });
            }
          },
        });
      }

      const animate = () => {
        if (!sceneRef.current || !cameraRef.current || !rendererRef.current)
          return;

        rendererRef.current.render(sceneRef.current, cameraRef.current);

        requestAnimationFrame(animate);
      };

      animate();

      return () => {
        window.removeEventListener("resize", handleResize);
        document.removeEventListener("essayTransition", handleEssayTransition);
        document.removeEventListener("featureHover", handleFeatureFocus);

        if (ScrollTrigger) {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        }

        if (rendererRef.current) {
          rendererRef.current.dispose();
        }
      };
    };

    initializeScene();
  }, [scrollContainer]);

  return (
    <div className="three-scene-container">
      <canvas ref={canvasRef} className="canvas-container" aria-hidden="true" />
    </div>
  );
};

export default ThreeScene;
