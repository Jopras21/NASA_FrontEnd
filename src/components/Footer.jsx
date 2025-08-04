import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-700 text-gray-400 pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/nasa-logo.png"
            alt="NASA Logo"
            className="w-auto h-20 mb-4"
          />
          <h3 className="text-white font-semibold text-lg mb-2">Space Explorer Initiative</h3>
          <p className="text-sm text-gray-400">
            Inspiring new gen to explore the outer space via technology, Education, and simulation. pb-3
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-white font-semibold mb-4">Navigasi</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/planetarium" className="hover:text-white">Planetarium</Link></li>
            <li><Link to="/exploration" className="hover:text-white">Exploration</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p className="text-sm pb-3">📍 Location: somewhere in this earth</p>
          <p className="text-sm pb-3">✉️ Email: support@nasa.org</p>
          <p className="text-sm pb-3">🌐 Website: www.nasa.org</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Space Explorer Initiative. Semua hak dilindungi.
      </div>
    </footer>
  );
}
