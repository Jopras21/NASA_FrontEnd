import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, useTexture, Html } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { TextureLoader, AdditiveBlending } from 'three';
import { useLoader } from '@react-three/fiber';
import { motion } from 'framer-motion';
import AboutSpace from '../sections/AboutSpace';
import ExplorePlanets from '../sections/ExplorePlanets';
import Missions from '../sections/Missions';
import Footer from '../components/Footer';

function Planet({ texturePath, size, distance, rotationSpeed, revolutionSpeed }) {
  const texture = useLoader(TextureLoader, texturePath);
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
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  );
}

function Sun({ texturePath }) {
  const texture = useLoader(TextureLoader, texturePath);

  return (
    <mesh>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        emissive={'#ffff99'}
        emissiveIntensity={3}
        emissiveMap={texture}
        blending={AdditiveBlending}
      />
    </mesh>
  );
}

function LockedOrbitCamera() {
  const { camera } = useThree();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    camera.position.x = Math.sin(t * 0.05) * 30;
    camera.position.z = Math.cos(t * 0.05) * 30;
    camera.position.y = 10;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-x-hidden scroll-smooth bg-black text-white">
      <div className="min-h-screen absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 10, 30], fov: 60 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[0, 0, 0]} intensity={2} distance={50} />
          <Stars radius={200} depth={100} count={8000} factor={7} fade />
          <EffectComposer>
            <Bloom intensity={1.5} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
          </EffectComposer>

          <Sun texturePath="/textures/sun.png" />
          <Planet texturePath="/textures/mercury.jpg" size={0.5} distance={5} rotationSpeed={0.5} revolutionSpeed={0.7} />
          <Planet texturePath="/textures/venus.jpg" size={0.9} distance={8} rotationSpeed={0.6} revolutionSpeed={0.3} />
          <Planet texturePath="/textures/earth.jpg" size={1.2} distance={12} rotationSpeed={0.4} revolutionSpeed={0.2} />
          <Planet texturePath="/textures/mars.jpg" size={0.8} distance={16} rotationSpeed={0.5} revolutionSpeed={0.15} />

          <LockedOrbitCamera />
        </Canvas>
      </div>

      <div className="relative z-10 space-y-32 pt-24 pb-20 px-6">
        <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-5xl font-bold mb-4 text-center">Welcome to NASA</h1>
          <p className="text-lg text-gray-300 mb-6 text-center">
            explore the world full of knowledge with realistic simutlation and mind realization 
          </p>
        </motion.section>

        <motion.section className="mt-[50%]" initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <AboutSpace />
        </motion.section>

        <motion.section initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <ExplorePlanets />
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Missions />
        </motion.section>

        <motion.section>
          <Footer />
        </motion.section>
      </div>
    </div>
  );
}
