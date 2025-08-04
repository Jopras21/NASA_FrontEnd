import React from 'react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-sm z-50 py-4">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-white text-xl sm:text-2xl font-bold">Space Explorer</h1>
      </div>
    </nav>
  )
}
