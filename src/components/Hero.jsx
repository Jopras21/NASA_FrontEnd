import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'
import SolarSystemCanvas from './SolarSystemCanvas'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      <Canvas camera={{ position: [0, 10, 20], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={300} depth={60} count={5000} factor={7} fade />
        <SolarSystemCanvas />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      <motion.div
        className="absolute text-center z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-widest">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">NASA</span>
        </h1>
        <p className="text-gray-300 mt-4 text-lg md:text-2xl">Exploring Beyond Limits</p>
      </motion.div>
    </section>
  )
}
