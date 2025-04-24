import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Interfaces for essay annotations
export interface EssayFeature {
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

// Create a 3D essay model
export const createEssayModel = async (scene: THREE.Scene) => {
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
  textureLoader.load('/paper-texture2.jpg', (texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);
    paperMaterial.map = texture;
    paperMaterial.needsUpdate = true;
  });


  // Add multiple text lines to simulate an essay
  const lines: THREE.Mesh[] = [];
  const numberOfLines = 28; // Adjusted number of lines
  const spacing = 0.38; // Adjusted spacing
  const startY = 5.2; // Adjusted starting position

  for (let i = 0; i < numberOfLines; i++) {
    // Randomize line width slightly to make it look more natural
    const width = 7 - Math.random() * 1.5; // Less variation in width
    const y = startY - i * spacing;

  }

  // Create a red pen by loading the GLB model
  const redPen = new THREE.Group(); // Create an empty group first
  const gltfLoader = new GLTFLoader();

  // Load the pen model asynchronously
  await new Promise<void>((resolve) => {
    gltfLoader.load(
      '/pen.glb',
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
                child.material.forEach(mat => {
                  if ((mat as THREE.MeshStandardMaterial).color) {
                    (mat as THREE.MeshStandardMaterial).color.set(0xff0000);
                    (mat as THREE.MeshStandardMaterial).metalness = 0.6; // Make it shinier
                    (mat as THREE.MeshStandardMaterial).roughness = 0.4;
                  }
                });
              } else if ((child.material as THREE.MeshStandardMaterial).color) {
                (child.material as THREE.MeshStandardMaterial).color.set(0xff0000);
                (child.material as THREE.MeshStandardMaterial).metalness = 0.6;
                (child.material as THREE.MeshStandardMaterial).roughness = 0.4;
              }
            }
          }
        });

        // Position and rotate the pen appropriately
        redPen.position.set(-3, -3, 1);
        redPen.rotation.z = -0.5;
        redPen.rotation.x = -3; // Adjusted for better initial view
        redPen.scale.set(0.15, 0.15, 0.15);

        resolve();
      },
      undefined, // Progress callback (optional)
      (error) => {
        console.error('Error loading pen model:', error);
        resolve(); // Resolve even on error
      }
    );
  });
  redPen.layers.set(PEN_LAYER); // Ensure the group itself is on the pen layer

  // Add a dedicated light for the pen
  const penLight = new THREE.SpotLight(0xffffff, 0.2); // Increased intensity
  penLight.position.set(2, 4, 3); // Position near the pen
  penLight.target = redPen; // Target the pen group
  penLight.angle = Math.PI / 8; // Narrow angle to focus on the pen
  penLight.penumbra = 0.3; // Soften the edge
  penLight.distance = 10; // Limit the light range
  penLight.decay = 2;
  penLight.castShadow = true; // Pen light can cast subtle shadows

  // Configure the pen light to ONLY illuminate the PEN_LAYER
  penLight.layers.disableAll();
  penLight.layers.enable(PEN_LAYER);
  scene.add(penLight);
  scene.add(penLight.target); // Target needs to be added to the scene as well

  // Add highlights to the essay with feature ID mapping
  const createHighlight = (x: number, y: number, width: number = 5, color: number = 0xFFD700, featureId: string = "") => {
    const highlightGeometry = new THREE.BoxGeometry(width, 0.25, 0.01);
    const highlightMaterial = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.2 // Reduced default opacity
    });
    const highlight = new THREE.Mesh(highlightGeometry, highlightMaterial);
    highlight.position.set(x, y, 0.04); // Position slightly above paper
    highlight.layers.set(ESSAY_LAYER); // Ensure highlights are on the essay layer

    // Store feature ID as a custom property
    (highlight as any).featureId = featureId;

    return highlight;
  };

  // Add feature highlights at specific positions (matching EssayShowcaseSection order)
  const highlight1 = createHighlight(0.9, 3.4, 1, 0xf52020, 'spelling'); // Pink
  const highlight2 = createHighlight(0.3, 2, 3, 0x297cf0, 'grammar'); // Blue
  const highlight3 = createHighlight(0.3, -0.3, 5.7, 0xfffc30, 'punctuation'); // Yellow
  const highlight4 = createHighlight(-0.8, -2.3, 5.3, 0x2ee84a, 'Improvements'); // Purple

  paper.add(highlight1);
  paper.add(highlight2);
  paper.add(highlight3);
  paper.add(highlight4);

  // Create feature annotation points (matching EssayShowcaseSection order)
  const features: EssayFeature[] = [
    {
      id: 'spelling', // Corresponds to highlight1
      position: { x: 3.5, y: 8, z: -0.1 },
      color: 0xf52020,
      label: 'Spelling',
      description: 'We check for spelling errors and suggest corrections to enhance clarity.'
    },
    {
      id: 'grammar', // Corresponds to highlight2
      position: { x: 2.5, y: 1.5, z: 0.1 },
      color: 0xbde0fe,
      label: 'Grammar',
      description: 'We analyze sentence structure, verb tense, and punctuation to ensure grammatical accuracy.'
    },
    {
      id: 'punctuation', // Corresponds to highlight3
      position: { x: 3, y: -1.5, z: 0.1 },
      color: 0xfffc30,
      label: 'Punctuation',
      description: 'Get feedback on punctuation accuracy, including comma usage and sentence clarity.'
    },
    {
      id: 'Improvements', // Corresponds to highlight4
      position: { x: 2, y: -7, z: 0.1 },
      color: 0x2ee84a,
      label: 'Improvement Suggestions',
      description: 'We provide suggestions for improving clarity, coherence, and overall quality.'
    }
  ];

  // Create feature annotation markers
  const annotationMarkers = features.map(feature => {
    const markerGroup = new THREE.Group();
    markerGroup.layers.set(ESSAY_LAYER); // Markers belong to the essay layer

    // Create marker dot
    const dotGeometry = new THREE.SphereGeometry(0, 0,0);
    const dotMaterial = new THREE.MeshBasicMaterial({ color: feature.color });
    const dot = new THREE.Mesh(dotGeometry, dotMaterial);
    dot.layers.set(ESSAY_LAYER);
    markerGroup.add(dot);

    // Create label connector line
    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({
      color: feature.color,
      transparent: true,
      opacity: 0
    });

    // Start at the dot, extend outward
    const linePoints = [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0.5, 0.2, 0) // Adjust endpoint as needed
    ];

    lineGeometry.setFromPoints(linePoints);
    const line = new THREE.Line(lineGeometry, lineMaterial);
    line.layers.set(ESSAY_LAYER);
    markerGroup.add(line);

    // Position the marker at feature position relative to the paper
    markerGroup.position.set(highlight1.position.x, highlight1.position.y, highlight1.position.z);

    // Add to paper (so it moves with the paper)
    paper.add(markerGroup);

    return {
      feature,
      markerGroup
    };
  });

  // Group essay elements together
  const essayGroup = new THREE.Group();
  essayGroup.add(paper); // Add paper (which now contains lines, highlights, markers)
  // NOTE: Pen is NOT added to essayGroup, it's added directly to the scene
  // to allow independent lighting via layers.

  // Initial position and rotation for the essay group
  essayGroup.rotation.x = -0.9;
  essayGroup.position.y = -6;
  essayGroup.position.z = 0;
  essayGroup.position.x = 0; // Center the essay

  scene.add(essayGroup); // Add the essay group to the scene
  scene.add(redPen); // Add the pen separately to the scene for layer lighting

  return {
    essayGroup,
    redPen,
    highlights: [highlight1, highlight2, highlight3, highlight4, ], 
    lines,
    annotationMarkers
  };
};

// Animation helper for the essay and pen
export const animateEssay = (
  essayGroup: THREE.Group,
  redPen: THREE.Group,
  scrollY: number,
  totalHeight: number
) => {
  // Calculate progress based on scroll position (0 to 1)
  const progress = Math.min(scrollY / totalHeight, 1);

  // Rotate essay based on scroll
  essayGroup.rotation.y = progress * Math.PI * 0.5 - 0.2;

  // Move essay up as we scroll down
  essayGroup.position.y = -progress * 15 + 5;

  // Scale essay to create zoom effect
  const scale = 1 + progress;
  essayGroup.scale.set(scale, scale, scale);

  // Animate the red pen (needs separate animation as it's not in essayGroup)
  if (redPen) {
    // Keep pen position relative to where the essay *would* be if not for layers
    // This requires knowing the pen's initial offset from the essay group's origin
    // Let's assume initial offset from (0,0,0) was (1, 3, 2)
    const penBaseX = -3 * scale;
    const penBaseY = (3 - progress * 15 + 10); // Match essay y-movement logic
    const penBaseZ = 2 * scale;

    redPen.position.set(penBaseX, penBaseY, penBaseZ);
    redPen.rotation.z = -0.5 - progress * 0.2; // Subtle rotation change
  }
};

// Setup lighting for the scene
export const setupLighting = (scene: THREE.Scene) => {
  // Ambient light for overall illumination
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4); // Slightly brighter ambient
  ambientLight.layers.enable(ESSAY_LAYER); // Ensure ambient light affects essay
  ambientLight.layers.enable(PEN_LAYER); // And the pen
  scene.add(ambientLight);

  // Main directional light (simulating sunlight) - affects only essay
  const mainLight = new THREE.DirectionalLight(0xffffff, 0.8);
  mainLight.position.set(5, 4, 7.5); // Adjusted position
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
  mainLight.layers.set(ESSAY_LAYER); // Only illuminate essay layer
  scene.add(mainLight);

  // Fill light - affects only essay
  const fillLight = new THREE.DirectionalLight(0xaaaaff, 0); // Cool fill light
  fillLight.position.set(-5, 5, -5);
  fillLight.layers.set(ESSAY_LAYER); // Only illuminate essay layer
  scene.add(fillLight);

  // Return lights if needed, though the pen light is managed in createEssayModel
  return { ambientLight, mainLight, fillLight };
};

// Create a feature information panel that appears when focusing on a feature
export const createFeatureInfoPanel = (scene: THREE.Scene, feature: EssayFeature): THREE.Group => {
    // Create a group to hold the panel components
    const panel = new THREE.Group();
    panel.layers.set(ESSAY_LAYER); // Panel should be on essay layer

    // Create background panel
    const panelGeometry = new THREE.PlaneGeometry(3, 1.5); // Adjusted size
    const panelMaterial = new THREE.MeshStandardMaterial({ // Use StandardMaterial for lighting interaction
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide,
      metalness: 0.1,
      roughness: 0.8,
    });

    const panelMesh = new THREE.Mesh(panelGeometry, panelMaterial);
    panelMesh.receiveShadow = true; // Panel can receive shadows
    panel.add(panelMesh);

    // Add border
    const borderGeometry = new THREE.EdgesGeometry(panelGeometry);
    const borderMaterial = new THREE.LineBasicMaterial({
      color: feature.color,
      linewidth: 3 // Thicker border
    });

    const border = new THREE.LineSegments(borderGeometry, borderMaterial);
    border.position.z = 0.01;
    panel.add(border);

    // Add title text using canvas texture
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const scaleFactor = 2; // Increase resolution
    canvas.width = 512 * scaleFactor;
    canvas.height = 256 * scaleFactor;


    if (context) {
        context.scale(scaleFactor, scaleFactor);
        context.fillStyle = "rgba(255, 255, 255, 0)"; // Transparent background
        context.fillRect(0, 0, canvas.width / scaleFactor, canvas.height / scaleFactor);

        // Feature title
        context.font = "bold 40px Inter, sans-serif"; // Use Inter font
        context.fillStyle = `#${feature.color.toString(16).padStart(6, "0")}`;
        context.textAlign = "center";
        context.fillText(feature.label, canvas.width / (2 * scaleFactor), 60);

        // Feature description
        if (feature.description) {
            context.font = "28px Inter, sans-serif"; // Use Inter font
            context.fillStyle = "#333333"; // Dark grey text
            context.textAlign = "center";

            // Word wrap for description text
            const words = feature.description.split(" ");
            let line = "";
            let y = 110; // Adjusted y position
            const maxWidth = 480; // Adjusted max width
            const lineHeight = 35; // Line height

            for (let i = 0; i < words.length; i++) {
              const testLine = line + words[i] + " ";
              const metrics = context.measureText(testLine);

              if (metrics.width > maxWidth && i > 0) {
                  context.fillText(line.trim(), canvas.width / (2 * scaleFactor), y);
                  line = words[i] + " ";
                  y += lineHeight;
              } else {
                  line = testLine;
              }
            }
            context.fillText(line.trim(), canvas.width / (2 * scaleFactor), y);
        }
    }

    // Create texture from canvas
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    const textPlaneGeometry = new THREE.PlaneGeometry(2.8, 1.3); // Match canvas aspect ratio
    const textMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false // Prevent z-fighting
    });

    const textPlane = new THREE.Mesh(textPlaneGeometry, textMaterial);
    textPlane.position.z = 0.02; // Slightly above panel
    panel.add(textPlane);

    // Position panel near the feature but offset
    const offset = 3; // Consistent offset
    panel.position.set(
        feature.position.x + offset,
        feature.position.y,
        feature.position.z + 0.2 // Slightly further out
    );

    // Hide panel initially
    panel.visible = false;

    // Add to scene
    scene.add(panel);

    return panel;
};

// Show/hide feature information
export const toggleFeatureInfo = (
  feature: EssayFeature,
  panel: THREE.Group,
  visible: boolean
) => {
    // Show/hide panel (consider adding animation)
    panel.visible = visible;
    // Add GSAP animations if desired (as in previous implementation)
    if (visible) {
      panel.scale.set(0.01, 0.01, 0.01);
      gsap.to(panel.scale, { x: 1, y: 1, z: 1, duration: 0.3, ease: "back.out(1.7)" });
      gsap.fromTo(panel.rotation, { z: -0.1 }, { z: 0, duration: 0.4, ease: "power2.out" });
    } else {
      gsap.to(panel.scale, { x: 0.01, y: 0.01, z: 0.01, duration: 0.2, ease: "power2.in", onComplete: () => { panel.visible = false; } });
    }
};

// Helper to ensure camera looks at both layers
export const setupCameraLayers = (camera: THREE.Camera) => {
    camera.layers.enableAll();
};
