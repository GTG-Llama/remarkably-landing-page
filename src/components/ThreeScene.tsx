import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Interfaces for essay annotations
interface EssayFeature {
  id: string;
  position: { x: number; y: number; z: number };
  rotation?: { x: number; y: number; z: number };
  scale?: number;
  color: number;
  label: string;
  description: string;
}

// Constants for layers
const ESSAY_LAYER = 0;
const PEN_LAYER = 1;

interface ThreeSceneProps {
  scrollContainer: string; // CSS selector for the scroll container
  rightSidePosition?: boolean; // Flag to position the essay on the right side
  partialView?: boolean; // Flag to make essay partially visible for neobrutalism style
}

const ThreeScene: React.FC<ThreeSceneProps> = ({
  scrollContainer,
  rightSidePosition = true,
  partialView = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  // Combined essay model references
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
  const initialPositionRef = useRef<{
    essay: {
      position: THREE.Vector3;
      rotation: THREE.Euler;
      scale: THREE.Vector3;
    };
    pen: {
      position: THREE.Vector3;
      rotation: THREE.Euler;
      scale: THREE.Vector3;
    };
    camera: THREE.Vector3;
  } | null>(null);

  // COMBINED UTILITY FUNCTIONS

  // Create a 3D essay model (previously in three-utils.ts)
  const createEssayModel = async (scene: THREE.Scene) => {
    // Create essay paper material
    const paperMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.2,
      metalness: 0.1,
    });

    // Create essay paper geometry
    const paperGeometry = new THREE.BoxGeometry(8, 11, 0.05);
    const paper = new THREE.Mesh(paperGeometry, paperMaterial);
    paper.layers.set(ESSAY_LAYER); // Assign paper to essay layer

    // Add subtle texture to paper
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load("/paper-texture2.jpg", (texture) => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(1, 1);
      paperMaterial.map = texture;
      paperMaterial.needsUpdate = true;
    });

    // Define empty lines array to maintain compatibility with the rest of the code
    const lines: THREE.Mesh[] = [];

    // Create a red pen by loading the GLB model
    const redPen = new THREE.Group(); // Create an empty group first
    const gltfLoader = new GLTFLoader();

    // Load the pen model asynchronously
    await new Promise<void>((resolve) => {
      gltfLoader.load(
        "/pen.glb",
        (gltf) => {
          // Add the loaded model to our pen group
          const penModel = gltf.scene;
          redPen.add(penModel);

          // Assign pen model and its children to PEN_LAYER
          penModel.traverse((child) => {
            child.layers.set(PEN_LAYER);
            if (child instanceof THREE.Mesh) {
              child.castShadow = true; // Pen should cast shadow
              if (child.material) {
                // Set pen color to red
                if (Array.isArray(child.material)) {
                  child.material.forEach((mat) => {
                    if ((mat as THREE.MeshStandardMaterial).color) {
                      (mat as THREE.MeshStandardMaterial).color.set(0xff0000);
                      (mat as THREE.MeshStandardMaterial).metalness = 0.6; // Make it shinier
                      (mat as THREE.MeshStandardMaterial).roughness = 0.4;
                    }
                  });
                } else if (
                  (child.material as THREE.MeshStandardMaterial).color
                ) {
                  (child.material as THREE.MeshStandardMaterial).color.set(
                    0xff0000
                  );
                  (
                    child.material as THREE.MeshStandardMaterial
                  ).metalness = 0.6;
                  (
                    child.material as THREE.MeshStandardMaterial
                  ).roughness = 0.4;
                }
              }
            }
          });

          // Position and rotate the pen appropriately
          redPen.position.set(6, 0, 3); // Moved further to the right and in front
          redPen.rotation.z = -0.3;
          redPen.rotation.x = -0.5; // Less tilted for better initial view
          redPen.scale.set(0.15, 0.15, 0.15);

          resolve();
        },
        undefined,
        (error) => {
          console.error("Error loading pen model:", error);
          resolve(); // Resolve even on error
        }
      );
    });
    redPen.layers.set(PEN_LAYER); // Ensure the group itself is on the pen layer

    // Helper for creating highlights
    const createHighlight = (
      x: number,
      y: number,
      width: number = 5,
      color: number = 0xffd700,
      featureId: string = ""
    ) => {
      const highlightGeometry = new THREE.BoxGeometry(width, 0.25, 0.01);
      const highlightMaterial = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.2,
      });
      const highlight = new THREE.Mesh(highlightGeometry, highlightMaterial);
      highlight.position.set(x, y, 0.04);
      highlight.layers.set(ESSAY_LAYER);

      // Store feature ID as a custom property
      (highlight as any).featureId = featureId;

      return highlight;
    };

    // Add feature highlights at specific positions
    const highlight1 = createHighlight(0.9, 3.4, 1, 0xf52020, "spelling");
    const highlight2 = createHighlight(0.3, 2, 3, 0x297cf0, "grammar");
    const highlight3 = createHighlight(0.3, -0.3, 5.7, 0xfffc30, "punctuation");
    const highlight4 = createHighlight(
      -0.8,
      -2.3,
      5.3,
      0x2ee84a,
      "Improvements"
    );

    paper.add(highlight1);
    paper.add(highlight2);
    paper.add(highlight3);
    paper.add(highlight4);

    // Create feature annotation points
    const features: EssayFeature[] = [
      {
        id: "spelling",
        position: { x: 3.5, y: 8, z: -0.1 },
        color: 0xf52020,
        label: "Spelling",
        description:
          "We check for spelling errors and suggest corrections to enhance clarity.",
      },
      {
        id: "grammar",
        position: { x: 2.5, y: 1.5, z: 0.1 },
        color: 0xbde0fe,
        label: "Grammar",
        description:
          "We analyze sentence structure, verb tense, and punctuation to ensure grammatical accuracy.",
      },
      {
        id: "punctuation",
        position: { x: 3, y: -1.5, z: 0.1 },
        color: 0xfffc30,
        label: "Punctuation",
        description:
          "Get feedback on punctuation accuracy, including comma usage and sentence clarity.",
      },
      {
        id: "Improvements",
        position: { x: 2, y: -7, z: 0.1 },
        color: 0x2ee84a,
        label: "Improvement Suggestions",
        description:
          "We provide suggestions for improving clarity, coherence, and overall quality.",
      },
    ];

    // Create annotation markers
    const annotationMarkers = features.map((feature) => {
      const markerGroup = new THREE.Group();
      markerGroup.layers.set(ESSAY_LAYER);

      // Create marker dot
      const dotGeometry = new THREE.SphereGeometry(0, 0, 0);
      const dotMaterial = new THREE.MeshBasicMaterial({ color: feature.color });
      const dot = new THREE.Mesh(dotGeometry, dotMaterial);
      dot.layers.set(ESSAY_LAYER);
      markerGroup.add(dot);

      // Create label connector line
      const lineGeometry = new THREE.BufferGeometry();
      const lineMaterial = new THREE.LineBasicMaterial({
        color: feature.color,
        transparent: true,
        opacity: 0,
      });

      const linePoints = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0.5, 0.2, 0),
      ];

      lineGeometry.setFromPoints(linePoints);
      const line = new THREE.Line(lineGeometry, lineMaterial);
      line.layers.set(ESSAY_LAYER);
      markerGroup.add(line);

      // Position the marker at feature position relative to the paper
      markerGroup.position.set(
        highlight1.position.x,
        highlight1.position.y,
        highlight1.position.z
      );

      paper.add(markerGroup);

      return {
        feature,
        markerGroup,
      };
    });

    // Group essay elements together
    const essayGroup = new THREE.Group();
    essayGroup.add(paper);

    // Initial position and rotation after scrolling down and back up
    essayGroup.rotation.x = -0.1;
    essayGroup.position.y = 0;
    essayGroup.position.z = 0;
    essayGroup.position.x = 0; // Center the essay

    scene.add(essayGroup);
    scene.add(redPen); // Add pen separately for layer lighting

    return {
      essayGroup,
      redPen,
      highlights: [highlight1, highlight2, highlight3, highlight4],
      lines,
      annotationMarkers,
    };
  };

  // Animation helper for the essay and pen - optimized for smoother performance
  const animateEssay = (
    essayGroup: THREE.Group,
    redPen: THREE.Group,
    scrollY: number,
    totalHeight: number
  ) => {
    // Calculate progress based on scroll position (0 to 1)
    const progress = Math.min(scrollY / totalHeight, 1);

    // Use direct property assignment instead of GSAP for smoother per-frame updates
    // Rotate essay based on scroll
    essayGroup.rotation.y = progress * Math.PI * 0.5 - 0.2;

    // Move essay up as we scroll down
    essayGroup.position.y = -progress * 15 + 5;

    // Scale essay to create zoom effect
    const scale = 1 + progress;
    essayGroup.scale.set(scale, scale, scale);

    // Animate the red pen - pen follows essay more naturally
    if (redPen && initialPositionRef.current) {
      const initialPenPosition = initialPositionRef.current.pen.position;

      // For smooth pen animation that follows the essay
      redPen.position.x = initialPenPosition.x + progress * 2; // Keep pen to the right
      redPen.position.y = -progress * 15 + initialPenPosition.y + 3; // Adjust vertical position with scroll
      redPen.position.z = initialPenPosition.z + progress; // Slightly move forward with zoom
      redPen.rotation.z =
        initialPositionRef.current.pen.rotation.z - progress * 0.2;
      redPen.rotation.x =
        initialPositionRef.current.pen.rotation.x - progress * 0.2;
    }
  };

  // Setup lighting for the scene
  const setupLighting = (scene: THREE.Scene) => {
    // Ambient light for overall illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    ambientLight.layers.enable(ESSAY_LAYER);
    ambientLight.layers.enable(PEN_LAYER);
    scene.add(ambientLight);

    // Main directional light (simulating sunlight) - affects only essay
    const mainLight = new THREE.DirectionalLight(0xffffff, 0.01);
    mainLight.position.set(5, 4, 7.5);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    mainLight.shadow.camera.near = 0.5;
    mainLight.shadow.camera.far = 50;
    const shadowSize = 15;
    mainLight.shadow.camera.left = -shadowSize;
    mainLight.shadow.camera.right = shadowSize;
    mainLight.shadow.camera.top = shadowSize;
    mainLight.shadow.camera.bottom = -shadowSize;
    mainLight.layers.set(ESSAY_LAYER);
    scene.add(mainLight);

    return { ambientLight, mainLight };
  };

  // Helper to ensure camera looks at both layers
  const setupCameraLayers = (camera: THREE.Camera) => {
    camera.layers.enableAll();
  };

  // MAIN COMPONENT EFFECT
  useEffect(() => {
    if (!canvasRef.current) return;

    const initializeScene = async () => {
      // Create scene
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);
      sceneRef.current = scene;

      // Setup camera
      const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 15;

      // Camera position adjustments for right side positioning
      if (rightSidePosition) {
        camera.position.x = partialView ? 6 : 1;
      }

      cameraRef.current = camera;
      setupCameraLayers(camera);

      // Setup renderer with optimized settings
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current!,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      // Enable only when multiple render targets needed
      renderer.autoClear = false;
      rendererRef.current = renderer;

      // Setup lighting
      setupLighting(scene);

      // Create essay model
      const essayModel = await createEssayModel(scene);
      essayRef.current = essayModel;

      // Position adjustments
      if (rightSidePosition) {
        const positionX = partialView ? 8 : 4;
        essayModel.redPen.position.x = positionX + 3; // Moved further to the right
        essayModel.redPen.position.z = 3; // Keep pen in front

        if (partialView) {
          essayModel.essayGroup.position.x = 10;
        } else {
          essayModel.essayGroup.position.x = 4; // Adjusted position
        }
      } else {
        essayModel.redPen.position.x = 6; // Moved further to the right
        essayModel.redPen.position.z = 3; // Keep pen in front
      }

      // Save initial positions for reference
      initialPositionRef.current = {
        essay: {
          position: essayModel.essayGroup.position.clone(),
          rotation: essayModel.essayGroup.rotation.clone(),
          scale: essayModel.essayGroup.scale.clone(),
        },
        pen: {
          position: essayModel.redPen.position.clone(),
          rotation: essayModel.redPen.rotation.clone(),
          scale: essayModel.redPen.scale.clone(),
        },
        camera: camera.position.clone(),
      };

      // Setup initial essay state
      essayModel.essayGroup.scale.set(0.85, 0.85, 0.85);
      essayModel.essayGroup.rotation.x = -0.25;
      essayModel.essayGroup.rotation.z = 0.08;

      // Adjust rotation for right side positioning
      if (rightSidePosition) {
        if (partialView) {
          essayModel.essayGroup.rotation.y = -0.5;
        } else {
          essayModel.essayGroup.rotation.y = 0.1;
        }
      }

      // Entrance animation
      essayModel.essayGroup.position.z = -10;
      essayModel.essayGroup.visible = false;
      setTimeout(() => {
        essayModel.essayGroup.visible = true;

        // Use a single timeline for better coordination
        const entranceTl = gsap.timeline({
          defaults: { duration: 1.2, ease: "back.out(1.7)" },
        });

        entranceTl
          .to(essayModel.essayGroup.position, {
            z: 0, // Bring to front
            x: rightSidePosition ? (partialView ? 10 : 4) : 0,
            y: 0,
            duration: 1.4,
            ease: "elastic.out(1, 0.7)",
          })
          .to(
            essayModel.redPen.position,
            {
              x: rightSidePosition ? (partialView ? 14 : 8) : 6, // Moved further to the right
              y: 0,
              z: 3, // Ensure pen is in front
              duration: 1.4,
              ease: "elastic.out(1, 0.7)",
            },
            "<"
          )
          .to(
            essayModel.essayGroup.scale,
            {
              x: initialPositionRef.current!.essay.scale.x,
              y: initialPositionRef.current!.essay.scale.y,
              z: initialPositionRef.current!.essay.scale.z,
            },
            "<"
          )
          .to(
            essayModel.essayGroup.rotation,
            {
              x:
                initialPositionRef.current!.essay.rotation.x +
                0.04 * (Math.random() - 0.5),
              y:
                initialPositionRef.current!.essay.rotation.y +
                0.04 * (Math.random() - 0.5),
              z:
                initialPositionRef.current!.essay.rotation.z +
                0.04 * (Math.random() - 0.5),
            },
            "<"
          )
          .fromTo(
            essayModel.essayGroup,
            { opacity: 0 },
            { opacity: 1, duration: 1, ease: "power1.out" },
            "<"
          );
      }, 100);

      // Event handler for essay transitions
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
            y: rightSidePosition ? (partialView ? -0.5 : -0.1) : 0,
            duration: 1,
            ease: "back.out(1.7)",
          });

          gsap.to(essayRef.current.essayGroup.position, {
            x: rightSidePosition ? (partialView ? 10 : 4) : 0,
            y: 0,
            z: 0,
            duration: 1,
            ease: "back.out(1.7)",
          });
        }
      };

      document.addEventListener("essayTransition", handleEssayTransition);

      // Feature focus handler with debounce for performance
      let featureFocusTimeout: NodeJS.Timeout | null = null;
      const handleFeatureFocus = (event: Event) => {
        const customEvent = event as CustomEvent;
        const featureId = customEvent.detail.featureId;

        // Clear any pending timeout
        if (featureFocusTimeout) {
          clearTimeout(featureFocusTimeout);
        }

        // Debounce to prevent rapid state changes causing jitter
        featureFocusTimeout = setTimeout(() => {
          // Prevent repeated animation if featureId hasn't changed
          if (activeFeatureRef.current === featureId) return;
          activeFeatureRef.current = featureId;

          if (essayRef.current && isEssayShowcaseActive.current) {
            // Reset all highlights to default opacity
            essayRef.current.highlights.forEach((highlight) => {
              const material = highlight.material as THREE.MeshBasicMaterial;
              gsap.to(material, {
                opacity: 0.2,
                duration: 0.3,
              });

              // Reset scale
              gsap.to(highlight.scale, {
                x: -1,
                y: 1,
                z: 1,
                duration: 0.3,
              });
            });

            if (featureId) {
              const markerInfo = essayRef.current.annotationMarkers.find(
                (marker) => marker.feature.id === featureId
              );

              if (markerInfo) {
                const { feature, markerGroup } = markerInfo;

                // Create a single timeline for coordinated animations
                const focusTl = gsap.timeline({
                  defaults: { duration: 0.8, ease: "power2.inOut" },
                });

                // Move camera to focus on feature
                focusTl.to(cameraRef.current?.position, {
                  x: rightSidePosition
                    ? partialView
                      ? 11 + feature.position.x * 0.4
                      : 4 + feature.position.x * 0.4
                    : -3 + feature.position.x * 0.4,
                  y: feature.position.y * 0.4,
                  z: 10,
                });

                // Rotate essay to face camera
                focusTl.to(
                  essayRef.current.essayGroup.rotation,
                  {
                    y: rightSidePosition
                      ? 0.1 - feature.position.x * 0.05
                      : -0.1 + feature.position.x * 0.05,
                  },
                  "<"
                );

                // Also move the pen to stay with the essay
                focusTl.to(
                  essayRef.current.redPen.position,
                  {
                    x: rightSidePosition ? (partialView ? 14 : 8) : 6,
                    y: feature.position.y * 0.3,
                    z: 3,
                  },
                  "<"
                );

                // Highlight marker
                focusTl.to(markerGroup.scale, {
                  x: 1.5,
                  y: 1.5,
                  z: 1.5,
                  duration: 0.5,
                  repeat: 1,
                  yoyo: true,
                  ease: "power2.inOut",
                });

                // Highlight the selected feature
                const highlightToAnimate = essayRef.current.highlights.find(
                  (h) => (h as any).featureId === featureId
                );

                if (highlightToAnimate) {
                  const material =
                    highlightToAnimate.material as THREE.MeshBasicMaterial;
                  gsap.to(material, {
                    opacity: 0.7,
                    duration: 0.3,
                  });

                  gsap.to(highlightToAnimate.scale, {
                    x: 1.05,
                    y: 1.2,
                    z: 1,
                    duration: 0.5,
                    yoyo: true,
                    repeat: 1,
                    ease: "power1.inOut",
                  });
                }
              }
            } else {
              // Reset camera with a single timeline
              const resetTl = gsap.timeline({
                defaults: { duration: 0.8, ease: "power2.inOut" },
              });

              resetTl.to(cameraRef.current?.position, {
                x: rightSidePosition ? (partialView ? 6 : 1) : -1,
                y: 0,
                z: 14,
              });

              resetTl.to(
                essayRef.current.essayGroup.rotation,
                {
                  x: 0,
                  y: rightSidePosition ? 0.1 : -0.1,
                  z: 0,
                },
                "<"
              );

              // Reset pen position
              resetTl.to(
                essayRef.current.redPen.position,
                {
                  x: rightSidePosition ? (partialView ? 14 : 8) : 6,
                  y: 0,
                  z: 3,
                },
                "<"
              );
            }
          }
        }, 50); // Short delay to prevent rapid changes
      };

      document.addEventListener("featureHover", handleFeatureFocus);

      // Handle window resize for responsive layout
      const handleResize = () => {
        if (!cameraRef.current || !rendererRef.current) return;

        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();

        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      // Essay focus section scroll trigger
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

              // Use direct property assignments for smoother updates
              cameraRef.current.position.z = 5 - progress * 3;
              essayRef.current.essayGroup.position.y = 5 - progress * 10;
              essayRef.current.essayGroup.rotation.x = -20 + progress * 0.1;

              // Keep pen with essay
              essayRef.current.redPen.position.y = 5 - progress * 10;
              essayRef.current.redPen.position.z = 3 + progress;

              // Batch highlight animations
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

      // Essay showcase section scroll trigger
      const essayShowcaseSection = document.getElementById("essay-showcase");
      if (essayShowcaseSection) {
        ScrollTrigger.create({
          trigger: essayShowcaseSection,
          start: "top bottom",
          end: "bottom top",
          onEnter: () => {
            isEssayShowcaseActive.current = true;
            isEssayFocusActive.current = false;

            if (essayRef.current && cameraRef.current) {
              // Use a single timeline for better coordination
              const showcaseTl = gsap.timeline({
                defaults: { duration: 1.1, ease: "power2.inOut" },
              });

              showcaseTl.to(essayRef.current.essayGroup.position, {
                x: rightSidePosition ? (partialView ? 10 : 4) : -4,
                y: 0,
                z: 0,
                ease: "elastic.out(1, 0.7)",
              });

              showcaseTl.to(
                essayRef.current.essayGroup.rotation,
                {
                  x: 0,
                  y: rightSidePosition ? 0.1 : -0.1,
                  z: 0,
                  ease: "elastic.out(1, 0.7)",
                },
                "<"
              );

              showcaseTl.to(
                essayRef.current.essayGroup.scale,
                {
                  x: 0.9,
                  y: 0.9,
                  z: 0.9,
                  ease: "elastic.out(1, 0.7)",
                },
                "<"
              );

              showcaseTl.to(
                cameraRef.current.position,
                {
                  x: rightSidePosition ? (partialView ? 6 : 1) : -1,
                  y: 0,
                  z: 14,
                  ease: "power2.inOut",
                },
                "<"
              );

              // Move pen with essay
              showcaseTl.to(
                essayRef.current.redPen.position,
                {
                  x: rightSidePosition ? (partialView ? 14 : 8) : 6,
                  y: 0,
                  z: 3,
                  ease: "elastic.out(1, 0.7)",
                },
                "<"
              );
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

      // Features section transition
      const featuresSection = document.getElementById("features");
      if (featuresSection) {
        ScrollTrigger.create({
          trigger: featuresSection,
          start: "top center",
          end: "bottom top",
          onEnter: () => {
            if (essayRef.current && cameraRef.current) {
              // Fade out animation
              const featuresTl = gsap.timeline({
                defaults: { duration: 1.2, ease: "power2.inOut" },
              });

              featuresTl.to(cameraRef.current.position, {
                x: 0,
                y: 0,
                z: 3,
              });

              featuresTl.to(
                essayRef.current.essayGroup.rotation,
                {
                  x: 0.1,
                  y: 0,
                  z: 0,
                },
                "<"
              );

              featuresTl.to(
                essayRef.current.essayGroup.scale,
                {
                  x: 0,
                  y: 0,
                  z: 0,
                },
                "<"
              );

              featuresTl.to(
                essayRef.current.redPen.scale,
                {
                  x: 0,
                  y: 0,
                  z: 0,
                },
                "<"
              );
            }
          },
          onLeaveBack: () => {
            if (
              essayRef.current &&
              cameraRef.current &&
              initialPositionRef.current
            ) {
              // Reset animation
              const resetTl = gsap.timeline({
                defaults: { duration: 1.2, ease: "power2.inOut" },
              });

              resetTl.to(cameraRef.current.position, {
                x: initialPositionRef.current.camera.x,
                y: initialPositionRef.current.camera.y,
                z: initialPositionRef.current.camera.z,
              });

              resetTl.to(
                essayRef.current.essayGroup.rotation,
                {
                  x: initialPositionRef.current.essay.rotation.x,
                  y: initialPositionRef.current.essay.rotation.y,
                  z: initialPositionRef.current.essay.rotation.z,
                },
                "<"
              );

              resetTl.to(
                essayRef.current.essayGroup.scale,
                {
                  x: initialPositionRef.current.essay.scale.x,
                  y: initialPositionRef.current.essay.scale.y,
                  z: initialPositionRef.current.essay.scale.z,
                },
                "<"
              );

              resetTl.to(
                essayRef.current.redPen.scale,
                {
                  x: 0.15,
                  y: 0.15,
                  z: 0.15,
                },
                "<"
              );

              // Reset pen position
              resetTl.to(
                essayRef.current.redPen.position,
                {
                  x: initialPositionRef.current.pen.position.x,
                  y: initialPositionRef.current.pen.position.y,
                  z: initialPositionRef.current.pen.position.z,
                },
                "<"
              );

              resetTl.to(
                essayRef.current.redPen.rotation,
                {
                  x: initialPositionRef.current.pen.rotation.x,
                  y: initialPositionRef.current.pen.rotation.y,
                  z: initialPositionRef.current.pen.rotation.z,
                },
                "<"
              );
            }
          },
        });
      }

      // Main scroll update handler
      let lastScrollTime = 0;
      let lastScrollY = 0;
      const scrollElement = document.querySelector(scrollContainer);
      if (scrollElement) {
        ScrollTrigger.create({
          trigger: scrollElement,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
            // Skip unnecessary updates for better performance
            const now = performance.now();
            if (
              now - lastScrollTime < 16 &&
              Math.abs(lastScrollY - self.progress) < 0.01
            ) {
              return;
            }
            lastScrollTime = now;
            lastScrollY = self.progress;

            if (
              !essayRef.current ||
              isEssayFocusActive.current ||
              isEssayShowcaseActive.current
            ) {
              return;
            }

            if (self.progress < 0.05 && initialPositionRef.current) {
              // Reset to initial state
              const resetTl = gsap.timeline({
                defaults: { duration: 0.5, ease: "power2.out" },
              });

              resetTl
                .to(essayRef.current.essayGroup.position, {
                  x: initialPositionRef.current.essay.position.x,
                  y: initialPositionRef.current.essay.position.y,
                  z: initialPositionRef.current.essay.position.z,
                })
                .to(
                  essayRef.current.essayGroup.rotation,
                  {
                    x: initialPositionRef.current.essay.rotation.x,
                    y: initialPositionRef.current.essay.rotation.y,
                    z: initialPositionRef.current.essay.rotation.z,
                  },
                  "<"
                )
                .to(
                  essayRef.current.essayGroup.scale,
                  {
                    x: initialPositionRef.current.essay.scale.x,
                    y: initialPositionRef.current.essay.scale.y,
                    z: initialPositionRef.current.essay.scale.z,
                  },
                  "<"
                )
                .to(
                  cameraRef.current.position,
                  {
                    x: initialPositionRef.current.camera.x,
                    y: initialPositionRef.current.camera.y,
                    z: initialPositionRef.current.camera.z,
                  },
                  "<"
                )
                .to(
                  essayRef.current.redPen.position,
                  {
                    x: initialPositionRef.current.pen.position.x,
                    y: initialPositionRef.current.pen.position.y,
                    z: initialPositionRef.current.pen.position.z,
                  },
                  "<"
                )
                .to(
                  essayRef.current.redPen.rotation,
                  {
                    x: initialPositionRef.current.pen.rotation.x,
                    y: initialPositionRef.current.pen.rotation.y,
                    z: initialPositionRef.current.pen.rotation.z,
                  },
                  "<"
                )
                .to(
                  essayRef.current.redPen.scale,
                  {
                    x: initialPositionRef.current.pen.scale.x,
                    y: initialPositionRef.current.pen.scale.y,
                    z: initialPositionRef.current.pen.scale.z,
                  },
                  "<"
                );
            } else {
              // Use optimized direct animation
              animateEssay(
                essayRef.current.essayGroup,
                essayRef.current.redPen,
                self.progress * document.body.scrollHeight,
                document.body.scrollHeight
              );

              // Batch highlight animations
              essayRef.current.highlights.forEach((highlight, i) => {
                const triggerPoint = 0.3 + i * 0.1;
                const material = highlight.material as THREE.MeshBasicMaterial;

                if (self.progress > triggerPoint && material.opacity < 0.7) {
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

      // Animation loop with performance optimization
      let animationFrameId: number | null = null;

      const animate = () => {
        if (!sceneRef.current || !cameraRef.current || !rendererRef.current)
          return;

        rendererRef.current.clear();
        rendererRef.current.render(sceneRef.current, cameraRef.current);

        animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }

        window.removeEventListener("resize", handleResize);
        document.removeEventListener("essayTransition", handleEssayTransition);
        document.removeEventListener("featureHover", handleFeatureFocus);

        if (featureFocusTimeout) {
          clearTimeout(featureFocusTimeout);
        }

        if (ScrollTrigger) {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        }

        if (rendererRef.current) {
          rendererRef.current.dispose();
        }
      };
    };

    initializeScene();
  }, [scrollContainer, rightSidePosition, partialView]);

  return (
    <div className="three-scene-container">
      <canvas ref={canvasRef} className="canvas-container" aria-hidden="true" />
    </div>
  );
};

export default ThreeScene;
