import React from 'react'
import { motion } from 'framer-motion'

export default function AboutSpace() {
  return (
    <section className="min-h-screen pt-20 pb-16 flex items-center justify-center bg-black text-center px-6">
      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-purple-300 mb-4">About Outer Space</h2>
        <p className="text-gray-400 leading-relaxed">
          Welcome to a journey beyond Earth — where stars shine, planets orbit, and mysteries beckon explorers of tomorrow...
        </p>
      </motion.div>
    </section>
  )
}
