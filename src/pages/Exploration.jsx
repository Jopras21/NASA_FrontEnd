import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const contentItems = [
  {
    id: 1,
    title: 'Apollo 11',
    image: '/images/apollo11.jpg',
    description: 'Misi bersejarah membawa manusia pertama ke bulan pada tahun 1969 oleh NASA.'
  },
  {
    id: 2,
    title: 'Voyager',
    image: '/images/voyager.jpg',
    description: 'Misi luar angkasa tanpa awak pertama yang keluar dari tata surya dan mengirimkan data dari ruang antar bintang.'
  },
  {
    id: 3,
    title: 'James Webb Telescope',
    image: '/images/jwst.jpg',
    description: 'Teleskop luar angkasa tercanggih untuk melihat galaksi yang jauh dan masa awal alam semesta.'
  },
  {
    id: 4,
    title: 'Curiosity Rover',
    image: '/images/curiosity.jpg',
    description: 'Eksplorasi permukaan Mars untuk mencari tanda-tanda kehidupan mikroba.'
  },
  {
    id: 5,
    title: 'Perseverance Rover',
    image: '/images/perseverance.jpg',
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
    <section className="min-h-screen bg-cover bg-center relative pb-20" style={{ backgroundImage: "url('/images/earth-surface.jpg')" }}>
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="relative z-10 pt-10">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={5000}
          showStatus={false}
          className="w-full md:w-3/4 mx-auto mb-10"
        >
          {contentItems.slice(0, 5).map(item => (
            <div key={item.id}>
              <img src={item.image} alt={item.title} width={800} height={400} className="rounded-xl mx-auto" />
              <p className="legend text-xl font-semibold">{item.title}</p>
            </div>
          ))}
        </Carousel>

        <motion.h2 
          className="text-4xl font-bold text-white mb-10 text-center"
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          Exploration Missions
        </motion.h2>

        <div className="space-y-20">
          {contentItems.map((item, i) => (
            <motion.div
              key={item.id}
              id={`section-${item.id}`}
              className={`md:flex items-center gap-10 px-6 py-10 bg-white/10 rounded-xl shadow-xl backdrop-blur-lg ${i % 3 === 0 ? 'md:flex-row-reverse' : i % 3 === 1 ? 'md:flex-row' : 'md:flex-col'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                width={600} 
                height={400} 
                className="rounded-lg mx-auto mb-6 md:mb-0" 
              />
              <div className="text-white text-lg leading-relaxed text-justify">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
