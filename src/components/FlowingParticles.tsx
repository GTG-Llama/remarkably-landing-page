import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface FlowingParticlesProps {
  particleCount?: number;
}

const FlowingParticles: React.FC<FlowingParticlesProps> = ({ particleCount = 4000 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<{
    geometry: THREE.BufferGeometry;
    material: THREE.PointsMaterial;
    points: THREE.Points;
    positions: Float32Array;
    colors: Float32Array;
  }>({});

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Three.js scene
    const init = () => {
      // Scene
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // Camera
      const camera = new THREE.PerspectiveCamera(75, containerRef.current!.offsetWidth / containerRef.current!.offsetHeight, 0.1, 1000);
      camera.position.z = 3;
      cameraRef.current = camera;

      // Renderer
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(containerRef.current!.offsetWidth, containerRef.current!.offsetHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0); // Transparent background
      containerRef.current!.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Create particles
      const createParticles = () => {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        const goldColor = new THREE.Color('#A89165');

        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          positions[i3] = (Math.random() - 0.5) * 10;
          positions[i3 + 1] = (Math.random() - 0.5) * 10;
          positions[i3 + 2] = (Math.random() - 0.5) * 10;

          colors[i3] = goldColor.r;
          colors[i3 + 1] = goldColor.g;
          colors[i3 + 2] = goldColor.b;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
          size: 0.02,
          vertexColors: true,
          transparent: true,
          opacity: 0.7
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        particlesRef.current = {
          geometry: geometry,
          material: material,
          points: points,
          positions: positions,
          colors: colors,
        };
      };

      createParticles();

      // Animation loop
      const animate = () => {
        if (!particlesRef.current.points || !rendererRef.current || !sceneRef.current || !cameraRef.current) return;

        // Rotate particles
        particlesRef.current.points.rotation.x += 0.0005;
        particlesRef.current.points.rotation.y += 0.001;

        rendererRef.current.render(sceneRef.current, cameraRef.current);
        requestAnimationFrame(animate);
      };

      animate();

      // Responsive handling
      const handleResize = () => {
        if (!rendererRef.current || !cameraRef.current) return;

        cameraRef.current.aspect = containerRef.current!.offsetWidth / containerRef.current!.offsetHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(containerRef.current!.offsetWidth, containerRef.current!.offsetHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);

        if (particlesRef.current.geometry) {
          particlesRef.current.geometry.dispose();
        }
        if (particlesRef.current.material) {
          particlesRef.current.material.dispose();
        }
        if (sceneRef.current) {
          sceneRef.current.remove(particlesRef.current.points);
        }
        if (rendererRef.current) {
          rendererRef.current.dispose();
          containerRef.current!.removeChild(rendererRef.current.domElement);
        }
      };
    };

    return init();
  }, [particleCount]);

  return (
    <div
      className="flowing-particles absolute inset-0 pointer-events-none"
      ref={containerRef}
    />
  );
};

export default FlowingParticles;
