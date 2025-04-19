import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

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
  
  // Add subtle texture to paper
  const textureLoader = new THREE.TextureLoader();
  textureLoader.load('/paper-texture2.jpg', (texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);
    paperMaterial.map = texture;
    paperMaterial.needsUpdate = true;
  });

  // Simulate text lines on paper
  const createTextLine = (y: number, width: number = 7) => {
    const lineGeometry = new THREE.BoxGeometry(width, 0.08, 0.01);
    const lineMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x000000,
      transparent: true,
      opacity: 0.4 
    });
    const line = new THREE.Mesh(lineGeometry, lineMaterial);
    line.position.set(0, y, 0.03);
    return line;
  };

  // Add multiple text lines to simulate an essay
  const lines = [];
  const numberOfLines = 30;
  const spacing = 0.36;
  const startY = 5;
  
  for (let i = 0; i < numberOfLines; i++) {
    // Randomize line width slightly to make it look more natural
    const width = 7 - Math.random() * 2;
    const y = startY - i * spacing;
    const line = createTextLine(y, width);
    paper.add(line);
    lines.push(line);
  }

  // Create a red pen
  const createRedPen = () => {
    const penGroup = new THREE.Group();
    
    // Pen body
    const penBodyGeometry = new THREE.CylinderGeometry(0.1, 0.1, 5, 32);
    const penBodyMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xFF3B30,
      roughness: 0.3,
      metalness: 0.7 
    });
    const penBody = new THREE.Mesh(penBodyGeometry, penBodyMaterial);
    
    // Make pen parallel to paper by rotating 90 degrees on Z axis
    penBody.rotation.z = Math.PI / 2;
    
    // Pen tip
    const penTipGeometry = new THREE.ConeGeometry(0.1, 0.3, 32);
    const penTipMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x000000, 
      roughness: 0.3,
      metalness: 0.7
    });
    const penTip = new THREE.Mesh(penTipGeometry, penTipMaterial);
    penTip.position.set(2.5, 0, 0);
    penTip.rotation.z = Math.PI / 2;
    
    penGroup.add(penBody);
    penGroup.add(penTip);
    
    // Position pen to the right of the paper
    penGroup.position.set(6, 0, 0.5);
    
    return penGroup;
  };
  
  const redPen = createRedPen();
  
  // Add highlights to the essay
  const createHighlight = (y: number, width: number = 5, color: number = 0xFFD700) => {
    const highlightGeometry = new THREE.BoxGeometry(width, 0.25, 0.01);
    const highlightMaterial = new THREE.MeshBasicMaterial({ 
      color: color,
      transparent: true,
      opacity: 0.3
    });
    const highlight = new THREE.Mesh(highlightGeometry, highlightMaterial);
    highlight.position.set(0, y, 0.04);
    return highlight;
  };
  
  // Add feature highlights at specific positions
  const highlight1 = createHighlight(3, 6, 0xFF3B30); // Red highlight (Thesis Statement)
  const highlight2 = createHighlight(1.5, 4, 0xA89165); // Gold highlight (Supporting Evidence)
  const highlight3 = createHighlight(0, 5, 0xFF3B30); // Red highlight (Conclusion)
  const highlight4 = createHighlight(-1.5, 3.5, 0x1EAEDB); // Blue highlight (Citations)
  const highlight5 = createHighlight(-3, 4.5, 0x4CAF50); // Green highlight (Grammar)
  
  paper.add(highlight1);
  paper.add(highlight2);
  paper.add(highlight3);
  paper.add(highlight4);
  paper.add(highlight5);
  
  // Create feature annotation points
  const features: EssayFeature[] = [
    {
      id: 'thesis',
      position: { x: 3.5, y: 3, z: 0.1 },
      color: 0xFF3B30,
      label: 'Thesis Check',
      description: 'Analyzes clarity and strength of thesis statements'
    },
    {
      id: 'evidence',
      position: { x: 2.5, y: 1.5, z: 0.1 },
      color: 0xA89165,
      label: 'Evidence Support',
      description: 'Evaluates quality and relevance of supporting evidence'
    },
    {
      id: 'conclusion',
      position: { x: 3, y: 0, z: 0.1 },
      color: 0xFF3B30,
      label: 'Conclusion Analysis',
      description: 'Checks for effective summary and closing arguments'
    },
    {
      id: 'citations',
      position: { x: 2, y: -1.5, z: 0.1 },
      color: 0x1EAEDB,
      label: 'Citation Verification',
      description: 'Verifies proper citation format and usage'
    },
    {
      id: 'grammar',
      position: { x: 2.8, y: -3, z: 0.1 },
      color: 0x4CAF50,
      label: 'Grammar Check',
      description: 'Identifies and corrects grammatical errors'
    }
  ];
  
  // Create feature annotation markers
  const annotationMarkers = features.map(feature => {
    const markerGroup = new THREE.Group();
    
    // Create marker dot
    const dotGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const dotMaterial = new THREE.MeshBasicMaterial({ color: feature.color });
    const dot = new THREE.Mesh(dotGeometry, dotMaterial);
    
    // Create label connector line
    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: feature.color,
      transparent: true,
      opacity: 0.7
    });
    
    // Start at the dot, extend outward
    const linePoints = [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0.5, 0.2, 0)
    ];
    
    lineGeometry.setFromPoints(linePoints);
    const line = new THREE.Line(lineGeometry, lineMaterial);
    
    // Add to marker group
    markerGroup.add(dot);
    markerGroup.add(line);
    
    // Position the marker at feature position
    markerGroup.position.set(feature.position.x, feature.position.y, feature.position.z);
    
    // Add to paper
    paper.add(markerGroup);
    
    return { 
      feature,
      markerGroup
    };
  });
  
  // Group everything together
  const essayGroup = new THREE.Group();
  essayGroup.add(paper);
  essayGroup.add(redPen);
  
  // Initial position and rotation - ensure consistent starting position
  essayGroup.rotation.x = -0.2;
  essayGroup.position.y = 5; // Start slightly elevated to allow immediate downward movement
  essayGroup.position.z = 0;
  
  scene.add(essayGroup);
  
  return { 
    essayGroup, 
    redPen,
    highlights: [highlight1, highlight2, highlight3, highlight4, highlight5],
    lines,
    annotationMarkers 
  };
};

// Animation helpers
export const animateEssay = (
  essayGroup: THREE.Group, 
  redPen: THREE.Group, 
  scrollY: number, 
  totalHeight: number
) => {
  // Calculate progress based on scroll position (0 to 1)
  const progress = Math.min(Math.max(scrollY / totalHeight, 0), 1);
  
  // Rotate essay based on scroll
  essayGroup.rotation.y = progress * Math.PI * 0.5 - 0.2;
  
  // Move essay down as we scroll down - start from initial elevated position
  essayGroup.position.y = 5 - progress * 15;
  
  // Scale essay slightly larger as we scroll
  const scale = 1 + progress * 0.5;
  essayGroup.scale.set(scale, scale, scale);
  
  // Keep pen parallel to paper and avoid clipping
  redPen.position.y = 5 - progress * 15; // Match essay vertical movement
  redPen.position.x = 6 - progress; // Subtle horizontal movement
  redPen.position.z = 1; // Keep elevated to avoid clipping
  redPen.rotation.y = progress * Math.PI * 0.2; // Slight rotation to follow paper
};

// Setup lighting for the scene
export const setupLighting = (scene: THREE.Scene) => {
  // Ambient light for overall illumination
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  // Main directional light (simulating sunlight)
  const mainLight = new THREE.DirectionalLight(0xffffff, 1);
  mainLight.position.set(5, 5, 5);
  mainLight.castShadow = true;
  scene.add(mainLight);
  
  // Additional directional light from opposite direction
  const fillLight = new THREE.DirectionalLight(0xA89165, 0.3); // Gold tint
  fillLight.position.set(-5, 0, -5);
  scene.add(fillLight);
  
  // Soft spotlight to highlight the essay
  const spotLight = new THREE.SpotLight(0xffffff, 0.5);
  spotLight.position.set(0, 10, 5);
  spotLight.angle = Math.PI / 6;
  spotLight.penumbra = 0.5;
  spotLight.decay = 2;
  spotLight.distance = 50;
  spotLight.castShadow = true;
  scene.add(spotLight);
  
  return { ambientLight, mainLight, fillLight, spotLight };
};

// Create a feature information panel that appears when focusing on a feature
export const createFeatureInfoPanel = (scene: THREE.Scene, feature: EssayFeature) => {
  const panelGroup = new THREE.Group();
  
  // Background panel
  const panelGeometry = new THREE.PlaneGeometry(2, 0.8);
  const panelMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.85,
    side: THREE.DoubleSide
  });
  const panel = new THREE.Mesh(panelGeometry, panelMaterial);
  
  // Add border
  const borderGeometry = new THREE.EdgesGeometry(panelGeometry);
  const borderMaterial = new THREE.LineBasicMaterial({ 
    color: feature.color,
    linewidth: 2
  });
  const border = new THREE.LineSegments(borderGeometry, borderMaterial);
  
  // Position elements
  panel.position.set(feature.position.x + 1.5, feature.position.y, feature.position.z);
  border.position.copy(panel.position);
  
  // Add to group
  panelGroup.add(panel);
  panelGroup.add(border);
  panelGroup.visible = false;
  
  scene.add(panelGroup);
  
  return panelGroup;
};

// Show/hide feature information
export const toggleFeatureInfo = (
  feature: EssayFeature,
  panel: THREE.Group,
  visible: boolean
) => {
  panel.visible = visible;
  
  if (visible) {
    // Animation for panel appearance
    gsap.from(panel.position, {
      x: feature.position.x + 1,
      y: feature.position.y + 0.5,
      duration: 0.3,
      ease: "power2.out"
    });
    
    gsap.from(panel.scale, {
      x: 0.5,
      y: 0.5,
      duration: 0.3,
      ease: "power2.out"
    });
  }
};
