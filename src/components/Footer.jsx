import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8 bg-black text-center text-gray-500">
      © {new Date().getFullYear()} Space Explorer Initiative
    </footer>
  )
}
