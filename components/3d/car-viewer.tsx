'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';

function CarModel({ autoRotate = true }: { autoRotate?: boolean }) {
  const groupRef = useRef<Group>(null);
  const [model, setModel] = useState<any>(null);

  // Load model with fallback to generated geometry
  useEffect(() => {
    const loadModel = async () => {
      try {
        // Try to load the actual car model
        const { scene } = await useGLTF('/models/car.glb');
        setModel(scene);
      } catch {
        // Fallback: create a dummy car using Three.js primitives
        console.log('[v0] Using dummy car model - replace with your .obj file');
      }
    };

    loadModel();
  }, []);

  useFrame(() => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {model ? (
        <primitive object={model} scale={1} />
      ) : (
        // Dummy car using Three.js primitives
        <group>
          {/* Car body */}
          <mesh position={[0, 0.5, 0]} scale={[2, 1, 4]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshPhongMaterial color="#ff6b6b" />
          </mesh>

          {/* Car roof */}
          <mesh position={[0, 1.2, -0.2]} scale={[1.8, 0.6, 2]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshPhongMaterial color="#ff5252" />
          </mesh>

          {/* Front windshield */}
          <mesh position={[0, 0.8, -1.8]}>
            <boxGeometry args={[1.8, 0.8, 0.1]} />
            <meshPhongMaterial
              color="#87ceeb"
              transparent
              opacity={0.6}
            />
          </mesh>

          {/* Wheels */}
          {[-0.8, 0.8].map((x) =>
            [-1.2, 1.2].map((z) => (
              <mesh key={`wheel-${x}-${z}`} position={[x, 0.3, z]}>
                <cylinderGeometry args={[0.5, 0.5, 0.3, 32]} />
                <meshPhongMaterial color="#1a1a1a" />
                {/* Wheel rim */}
                <mesh position={[0, 0, 0]}>
                  <cylinderGeometry args={[0.35, 0.35, 0.2, 16]} />
                  <meshPhongMaterial color="#444" />
                </mesh>
              </mesh>
            ))
          )}

          {/* Headlights */}
          {[-0.6, 0.6].map((x) => (
            <mesh key={`light-${x}`} position={[x, 0.6, -1.9]}>
              <sphereGeometry args={[0.2, 16, 16]} />
              <meshPhongMaterial color="#ffff99" emissive="#ffff00" />
            </mesh>
          ))}
        </group>
      )}
    </group>
  );
}

interface CarViewerProps {
  autoRotate?: boolean;
  className?: string;
}

export function CarViewer({ autoRotate = true, className = '' }: CarViewerProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 2, 6], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          precision: 'highp',
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <PerspectiveCamera makeDefault position={[0, 2, 6]} fov={50} />

        {/* Lighting */}
        <ambientLight intensity={0.6} color="#ffffff" />
        <pointLight position={[10, 10, 5]} intensity={1} color="#fff" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#0088ff" />
        <directionalLight
          position={[5, 10, 7]}
          intensity={0.8}
          castShadow
        />

        {/* Model */}
        <CarModel autoRotate={autoRotate} />

        {/* Controls */}
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          autoRotate={autoRotate}
          autoRotateSpeed={3}
          minDistance={3}
          maxDistance={15}
          minPolarAngle={0.5}
          maxPolarAngle={Math.PI - 0.5}
        />
      </Canvas>
    </div>
  );
}
