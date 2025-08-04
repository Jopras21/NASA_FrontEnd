import React from 'react';

const missions = [
  {
    title: 'Apollo Legacy',
    image: '/public/legacy.png',
    quote: 'One small step for man, one giant leap for mankind.',
  },
  {
    title: 'Journey to Mars',
    image: '/public/mars-mission.png',
    quote: 'The red planet awaits. Humanity’s next frontier.',
  },
  {
    title: 'Beyond the Moon',
    image: '/public/artemis.png',
    quote: 'Exploring deeper into the cosmic ocean.',
  },
];

export default function Missions() {
  return (
    <section className="min-h-screen py-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12 tracking-wide">
        Our Missions
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {missions.map((mission, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-lg border border-gray-700"
          >
            <img
              src={mission.image}
              alt={mission.title}
              className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10 group-hover:bg-black/60 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-xl font-semibold text-white">{mission.title}</h3>
              <p className="mt-2 text-sm text-gray-300 italic">"{mission.quote}"</p>
            </div>
          </div>
        ))}
      </div>
      <div className='max-w-3xl mx-auto mt-12 text-center text-gray-400 px-4 leading-relaxed'>
      Our space missions are not just scientific ventures — they are a testament to the enduring spirit of exploration, innovation, and human curiosity. From walking on the Moon to preparing for life on Mars, every step forward brings us closer to understanding our place in the universe.
      </div>
    </section>
  );
}
