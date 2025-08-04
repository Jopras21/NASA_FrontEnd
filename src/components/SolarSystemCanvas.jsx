import React from 'react'
import { Sphere } from '@react-three/drei'

export default function SolarSystemCanvas() {
  // Simple solar system
  return (
    <>
      {/* Sun */}
      <Sphere args={[3, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial emissive="orange" emissiveIntensity={2} />
      </Sphere>
      {/* Earth */}
      <Sphere args={[1, 64, 64]} position={[8, 0, 0]}>
        <meshStandardMaterial color="blue" metalness={0.3} roughness={0.5} />
      </Sphere>
      {/* Mars */}
      <Sphere args={[0.8, 64, 64]} position={[12, 0, 0]}>
        <meshStandardMaterial color="red" metalness={0.3} roughness={0.5} />
      </Sphere>
    </>
  )
}
