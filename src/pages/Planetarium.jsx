import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, useTexture, Html, OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { motion } from 'framer-motion';

function Planet({ texturePath, size, distance, rotationSpeed, revolutionSpeed, ringTexturePath }) {
  const texture = useTexture(texturePath);
  const ringTexture = ringTexturePath ? useTexture(ringTexturePath) : null;
  const planetRef = useRef();
  const orbitRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    planetRef.current.rotation.y = t * rotationSpeed;
    orbitRef.current.position.x = distance * Math.cos(t * revolutionSpeed);
    orbitRef.current.position.z = distance * Math.sin(t * revolutionSpeed);
  });

  return (
    <group ref={orbitRef}>
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial map={texture} emissiveIntensity={0.4} />
      </mesh>
      {ringTexture && (
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[size * 1.2, size * 2, 64]} />
          <meshBasicMaterial map={ringTexture} side={THREE.DoubleSide} transparent opacity={0.6} />
        </mesh>
      )}
    </group>
  );
}

function Sun({ texturePath }) {
  const sunRef = useRef();
  const sunTexture = useTexture(texturePath);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (sunRef.current) sunRef.current.rotation.y = t * 0.1;
  });

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[5, 64, 64]} />
      <meshStandardMaterial
        map={sunTexture}
        emissiveMap={sunTexture}
        emissive={new THREE.Color(0xffffff)}
        emissiveIntensity={4}
        metalness={0}
        roughness={0}
      />
    </mesh>
  );
}

function PlanetariumScene() {
  return (
    <Canvas camera={{ position: [0, 20, 80], fov: 55 }} className="cursor-grab active:cursor-grabbing">
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={2} />
      <Stars radius={1000} depth={120} count={20000} factor={6} fade speed={1} />
      <MilkyWay />

      <Sun texturePath="/textures/sun.png" />

      <Planet texturePath="/textures/mercury.jpg" size={1} distance={15} rotationSpeed={0.2} revolutionSpeed={2} />
      <Planet texturePath="/textures/venus.jpg" size={1.5} distance={22} rotationSpeed={0.18} revolutionSpeed={1.5} />
      <Planet texturePath="/textures/earth.jpg" size={2} distance={30} rotationSpeed={0.15} revolutionSpeed={1.2} />
      <Planet texturePath="/textures/mars.jpg" size={1.4} distance={38} rotationSpeed={0.13} revolutionSpeed={0.9} />
      <Planet texturePath="/textures/jupiter.jpg" size={4} distance={48} rotationSpeed={0.25} revolutionSpeed={0.6} />
      <Planet texturePath="/textures/saturn.jpg" size={3.5} distance={60} rotationSpeed={0.22} revolutionSpeed={0.5} ringTexturePath="/textures/saturnring.png" />
      <Planet texturePath="/textures/uranus.jpg" size={2.8} distance={70} rotationSpeed={0.2} revolutionSpeed={0.4} ringTexturePath="/textures/saturnring.png" />
      <Planet texturePath="/textures/neptune.jpg" size={2.7} distance={80} rotationSpeed={0.18} revolutionSpeed={0.3} />

      <OrbitControls enableZoom enablePan enableRotate enableDamping dampingFactor={0.05} rotateSpeed={0.3} zoomSpeed={0.6} panSpeed={0.5} />

      <EffectComposer>
        <Bloom intensity={1.2} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
      </EffectComposer>
    </Canvas>
  );
}

export default function Planetarium() {
  return (
    <section className="w-full min-h-full bg-black text-white">
      <div className="absolute z-50 w-full mt-8 text-center px-4">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl font-bold mb-2">
          Planetarium
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="max-w-3xl mx-auto text-gray-400">
          Explore a beautiful 3D solar system with realistic textures and glowing Sun.
        </motion.p>
      </div>
      <div className="w-full h-[800px] rounded-2xl overflow-hidden relative z-0">
        <PlanetariumScene />
      </div>
    </section>
  );
}

function MilkyWay() {
  const starTexture = useTexture('/textures/stars.png');
  return (
    <mesh>
      <sphereGeometry args={[600, 64, 64]} />
      <meshBasicMaterial map={starTexture} side={THREE.BackSide} />
    </mesh>
  );
}
