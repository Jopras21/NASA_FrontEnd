import { NavLink } from 'react-router-dom';
import logo from '/nasa-logo.png';

export default function Navigation() {
  return (
    <nav className="bg-black/80 backdrop-blur-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold">Astroverse</h1>
      </div>
      <ul className="flex gap-6 text-sm md:text-base">
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-400' : ''}>Home</NavLink></li>
        <li><NavLink to="/planetarium" className={({ isActive }) => isActive ? 'text-blue-400' : ''}>Planetarium</NavLink></li>
        <li><NavLink to="/exploration" className={({ isActive }) => isActive ? 'text-blue-400' : ''}>Exploration</NavLink></li>
        <li><NavLink to="/gallery" className={({ isActive }) => isActive ? 'text-blue-400' : ''}>Gallery</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-400' : ''}>About</NavLink></li>
      </ul>
    </nav>
  );
}
