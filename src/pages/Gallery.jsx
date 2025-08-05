import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';

const contentItems = [
  {
    id: 1,
    title: 'Apollo 11',
    image: '/public/apollo11.png',
    description: 'Misi bersejarah membawa manusia pertama ke bulan pada tahun 1969 oleh NASA.'
  },
  {
    id: 2,
    title: 'Voyager',
    image: '/public/voyager.png',
    description: 'Misi luar angkasa tanpa awak pertama yang keluar dari tata surya dan mengirimkan data dari ruang antar bintang.'
  },
  {
    id: 3,
    title: 'James Webb Telescope',
    image: '/public/jwst.png',
    description: 'Teleskop luar angkasa tercanggih untuk melihat galaksi yang jauh dan masa awal alam semesta.'
  },
  {
    id: 4,
    title: 'Curiosity Rover',
    image: '/public/curiosity.png',
    description: 'Eksplorasi permukaan Mars untuk mencari tanda-tanda kehidupan mikroba.'
  },
  {
    id: 5,
    title: 'Perseverance Rover',
    image: '/public/perseverance.png',
    description: 'Misi terbaru NASA ke Mars dengan tujuan membawa sampel kembali ke Bumi.'
  },
  {
    id: 6,
    title: 'ISS',
    image: '/images/iss.jpg',
    description: 'Stasiun luar angkasa internasional sebagai laboratorium luar angkasa yang mengorbit Bumi.'
  },
  {
    id: 7,
    title: 'New Horizons',
    image: '/images/newhorizons.jpg',
    description: 'Misi ke Pluto dan sabuk Kuiper yang memperluas pemahaman kita tentang tata surya luar.'
  },
  {
    id: 8,
    title: 'Artemis I',
    image: '/images/artemis1.jpg',
    description: 'Uji coba tanpa awak sebagai langkah menuju kembali ke Bulan dalam misi Artemis NASA.'
  },
  {
    id: 9,
    title: 'Kepler Telescope',
    image: '/images/kepler.jpg',
    description: 'Misi teleskop luar angkasa untuk menemukan planet-planet mirip Bumi di luar tata surya.'
  },
  {
    id: 10,
    title: 'SpaceX Starship',
    image: '/images/starship.jpg',
    description: 'Kendaraan luar angkasa generasi berikutnya yang dikembangkan oleh SpaceX untuk misi Mars dan lebih jauh lagi.'
  },
];

export default function Exploration() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="min-h-screen bg-cover bg-center p-10 relative" style={{ backgroundImage: "url('/images/earth-surface.jpg')" }}>
      <div className="absolute inset-0 bg-black/70 z-0" />
      <motion.h2 
        className="text-4xl font-bold text-white mb-10 text-center relative z-10"
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Exploration Missions
      </motion.h2>

      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10"
        initial="hidden" 
        animate="visible" 
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {contentItems.map((item, index) => (
          <motion.div
            key={item.id}
            className={`relative cursor-pointer overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition duration-300 ${index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            onClick={() => setSelected(item)}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 }
            }}
          >
            <LazyLoadImage src={item.image} alt={item.title} width={500} height={300} className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <p className="text-white text-lg font-semibold text-left drop-shadow-md">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Dialog open={selected !== null} onClose={() => setSelected(null)} className="fixed inset-0 z-50">
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white max-w-lg mx-auto rounded-xl p-6 space-y-4 shadow-xl">
            <Dialog.Title className="text-xl font-bold text-center">{selected?.title}</Dialog.Title>
            <LazyLoadImage src={selected?.image} alt={selected?.title} width={600} height={400} className="rounded-lg" />
            <p className="text-gray-700 text-justify leading-relaxed">{selected?.description}</p>
            <div className="text-center">
              <button onClick={() => setSelected(null)} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Tutup
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}
