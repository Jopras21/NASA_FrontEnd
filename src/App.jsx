import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Planetarium from './pages/Planetarium.jsx';
import Exploration from './pages/Exploration';
import Gallery from './pages/Gallery';
import About from './pages/About';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planetarium" element={<Planetarium />} />
        <Route path="/exploration" element={<Exploration />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}