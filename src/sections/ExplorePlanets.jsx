import React from 'react'
import { motion } from 'framer-motion'

const planets = ['Mercury', 'Venus', 'Earth', 'Mars']

export default function ExplorePlanets() {
  return (
    <section className="min-h-screen py-16 px-6 bg-gradient-to-b from-black to-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">Explore Planets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {planets.map((name, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 rounded-2xl p-6 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="h-32 flex items-center justify-center">
              <span className="text-6xl">{name[0]}</span>
            </div>
            <h3 className="text-xl font-semibold mt-4">{name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
