import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Html, useTexture } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

function Planet({
  texturePath,
  size,
  distance,
  rotationSpeed,
  revolutionSpeed,
  ringTexturePath,
}) {
  const texture = useTexture(texturePath);
  const ringTexture = ringTexturePath ? useTexture(ringTexturePath) : null;
  const planetRef = useRef();
  const orbitRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (planetRef.current && orbitRef.current) {
      planetRef.current.rotation.y = t * rotationSpeed;
      orbitRef.current.position.x = distance * Math.cos(t * revolutionSpeed);
      orbitRef.current.position.z = distance * Math.sin(t * revolutionSpeed);
    }
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
          <meshBasicMaterial
            map={ringTexture}
            side={THREE.DoubleSide}
            transparent
            opacity={0.6}
          />
        </mesh>
      )}
    </group>
  );
}

function Sun() {
  const sunRef = useRef();
  const sunTexture = useTexture('/textures/sun.png');

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (sunRef.current) {
      sunRef.current.rotation.y = t * 0.5;
    }
  });

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        map={sunTexture}
        emissive={new THREE.Color('white')}
        emissiveMap={sunTexture}
        emissiveIntensity={2.5}
      />
    </mesh>
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

function PlanetariumScene() {
  return (
    <Canvas
      camera={{ position: [0, 20, 80], fov: 55 }}
      className="rounded-lg cursor-grab active:cursor-grabbing"
    >
      <Suspense fallback={<Html>Loading Planetarium...</Html>}>
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 0]} intensity={3} color="white" />

        <Stars
          radius={1000}
          depth={120}
          count={20000}
          factor={6}
          fade
          speed={1}
        />
        <MilkyWay />

        <mesh>
          <sphereGeometry args={[5, 64, 64]} />
          <meshStandardMaterial emissive="yellow" emissiveIntensity={4} />
        </mesh>

        <Planet
          texturePath="/textures/mercury.jpg"
          size={1}
          distance={12}
          rotationSpeed={1}
          revolutionSpeed={2}
        />
        <Planet
          texturePath="/textures/venus.jpg"
          size={1.5}
          distance={18}
          rotationSpeed={1}
          revolutionSpeed={1.5}
        />
        <Planet
          texturePath="/textures/earth.jpg"
          size={2}
          distance={25}
          rotationSpeed={1.5}
          revolutionSpeed={1.2}
        />
        <Planet
          texturePath="/textures/mars.jpg"
          size={1.4}
          distance={32}
          rotationSpeed={1}
          revolutionSpeed={0.9}
        />
        <Planet
          texturePath="/textures/jupiter.jpg"
          size={3.5}
          distance={45}
          rotationSpeed={1.5}
          revolutionSpeed={0.7}
        />
        <Planet
          texturePath="/textures/saturn.jpg"
          size={3}
          distance={60}
          rotationSpeed={1.4}
          revolutionSpeed={1}
          ringTexturePath="/textures/saturnring.png"
        />
        <Planet
          texturePath="/textures/uranus.jpg"
          size={2.4}
          distance={75}
          rotationSpeed={1.1}
          revolutionSpeed={0.5}
          ringTexturePath="/textures/uranusring.png"
        />
        <Planet
          texturePath="/textures/neptune.jpg"
          size={2.2}
          distance={90}
          rotationSpeed={1}
          revolutionSpeed={0.4}
        />

        <OrbitControls
          enableZoom
          enablePan
          enableRotate
          enableDamping
          dampingFactor={0.05}
          rotateSpeed={0.3}
          zoomSpeed={0.6}
          panSpeed={0.5}
          cursor="pointer"
        />
      </Suspense>
      <EffectComposer>
        <Bloom
          intensity={0.3}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </Canvas>
  );
}

export default function Planetarium() {
  return (
    <section className="w-full min-h-full bg-black text-white">
      <div className="w-full absolute z-50 mx-auto mt-18">
        <h2 className="text-4xl font-bold mb-6 text-center">Planetarium</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-400">
          Explore an interactive 3D solar system—from the Sun to Neptune, with
          dynamic orbits, realistic rotation, and galactic views. Zoom, drag,
          and tilt this universe with complete control.
        </p>
      </div>
      <div className="w-full h-[800px] rounded-2xl overflow-hidden">
        <PlanetariumScene />
      </div>
    </section>
  );
}
