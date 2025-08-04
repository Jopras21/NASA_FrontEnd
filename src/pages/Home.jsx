import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { TextureLoader } from 'three';
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
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial map={texture} emissive="white" emissiveIntensity={1} />
    </mesh>
  );
}

function MouseOrbitController() {
  const { camera } = useThree();
  useFrame(({ mouse }) => {
    camera.position.x += (mouse.x * 10 - camera.position.x) * 0.05;
    camera.position.y += (mouse.y * 10 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });
  return <OrbitControls enableZoom={true} />;
}

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-y-auto scroll-smooth bg-black text-white">
      {/* 3D Canvas Fullscreen */}
      <div className="min-h-screen absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 30], fov: 60 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[0, 0, 0]} intensity={2} />
          <Stars radius={200} depth={100} count={8000} factor={7} fade />
          <Sun texturePath="/textures/sun.jpg" />
          <Planet texturePath="/textures/earth.jpg" size={1.2} distance={8} rotationSpeed={0.5} revolutionSpeed={0.2} />
          <Planet texturePath="/textures/mars.jpg" size={0.8} distance={12} rotationSpeed={0.4} revolutionSpeed={0.15} />
          <Planet texturePath="/textures/venus.jpg" size={1.0} distance={6} rotationSpeed={0.6} revolutionSpeed={0.3} />
          <MouseOrbitController />
        </Canvas>
      </div>

      <div className="relative z-10 space-y-32 pt-24 pb-20 px-6">
        <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-5xl font-bold mb-4 text-center">Selamat Datang di Astroverse</h1>
          <p className="text-lg text-gray-300 mb-6 text-center">
            Jelajahi planet dunia nyata secara interaktif dengan orbit yang realistis.
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
