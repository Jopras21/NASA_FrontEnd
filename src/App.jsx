import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSpace from './sections/AboutSpace'
import ExplorePlanets from './sections/ExplorePlanets'
import Missions from './sections/Missions'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSpace />
      <ExplorePlanets />
      <Missions />
      <Footer />
    </div>
  )
}
