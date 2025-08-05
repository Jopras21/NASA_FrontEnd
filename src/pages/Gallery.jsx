import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';

const contentItems = [
  {
    id: 1,
    title: 'Apollo 11',
    image: '/apollo11.png',
    description: 'A historic mission that brought the first humans to the moon in 1969 by NASA.',
  },
  {
    id: 2,
    title: 'Voyager',
    image: '/voyager.png',
    description: 'The first unmanned space mission to leave the solar system.',
  },
  {
    id: 3,
    title: 'James Webb Telescope',
    image: '/jwst.png',
    description: 'The most advanced space telescope to observe distant galaxies.',
  },
  {
    id: 4,
    title: 'Curiosity Rover',
    image: '/curiosity.png',
    description: 'Mars surface exploration to search for signs of microbial life.',
  },
  {
    id: 5,
    title: 'Perseverance Rover',
    image: '/perseverance.png',
    description: 'NASA’s latest Mars mission aiming to return samples to Earth.',
  },
  {
    id: 6,
    title: 'International Space Station (ISS)',
    image: '/iss.png',
    description: 'A multinational space station serving as a laboratory in Earth’s orbit.',
  },
  {
    id: 7,
    title: 'New Horizons',
    image: '/horizons.png',
    description: 'A mission to Pluto and the Kuiper belt to study the outer solar system.',
  },
  {
    id: 8,
    title: 'Artemis I',
    image: '/artemis1.png',
    description: 'An uncrewed trial mission as the first step in returning to the Moon.',
  },
  {
    id: 9,
    title: 'Kepler Telescope',
    image: '/kepler.png',
    description: 'A mission to find Earth-like planets outside our solar system.',
  },
  {
    id: 10,
    title: 'SpaceX Starship',
    image: '/starship.png',
    description: 'A next-generation spacecraft for missions to Mars and beyond.',
  },
  {
    id: 11,
    title: 'Lunar Gateway',
    image: '/gateway.png',
    description: 'A planned space station in lunar orbit to support long-term Moon missions.',
  },
  {
    id: 12,
    title: 'Hubble Telescope',
    image: '/hubble.png',
    description: 'One of the most iconic telescopes in orbit for deep-space observations.',
  },
];

export default function Exploration() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      className="min-h-screen bg-cover bg-center p-10 relative"
      style={{ backgroundImage: "url('/earth-surface.png')" }}
    >
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
        className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6 relative z-10 auto-rows-[200px] md:auto-rows-[250px]"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {contentItems.map((item, index) => {
          let classNames = '';
          if (index === 0) classNames = 'col-span-2 row-span-2';
          else if (item.title === 'James Webb Telescope') classNames = 'col-span-2';
          else if (index === 3 || index === 6) classNames = 'col-span-2';
          else classNames = 'col-span-1 row-span-1';

          return (
            <motion.div
              key={item.id}
              className={`relative cursor-pointer overflow-hidden rounded-xl shadow-lg transition-transform duration-300 ${classNames}`}
              onClick={() => setSelected(item)}
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-full h-full overflow-hidden">
                <LazyLoadImage
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  effect="blur"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <p className="text-white text-lg font-semibold text-left drop-shadow-md">
                  {item.title}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <Dialog open={selected !== null} onClose={() => setSelected(null)} className="fixed inset-0 z-50">
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-[#1e1e1e] text-[#f1f1f1] max-w-lg mx-auto rounded-xl p-6 space-y-4 shadow-xl">
            <Dialog.Title className="text-xl font-bold text-center">{selected?.title}</Dialog.Title>
            <LazyLoadImage src={selected?.image} alt={selected?.title} className="rounded-lg" />
            <p className="text-justify leading-relaxed">{selected?.description}</p>
            <div className="text-center">
              <button
                onClick={() => setSelected(null)}
                className="mt-4 px-4 py-2 bg-[#cecece] text-[#1b1b1b] rounded hover:bg-white hover:cursor-pointer transition"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}
