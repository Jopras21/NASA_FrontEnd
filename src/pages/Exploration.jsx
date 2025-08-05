import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from '../components/Footer';

const contentItems = [
  {
    id: 1,
    title: 'Apollo 11',
    image: '/public/apollo11.png',
    description:
      'A historic mission that brought the first humans to the Moon in 1969 by NASA.',
  },
  {
    id: 2,
    title: 'Voyager',
    image: '/public/voyager.png',
    description:
      'The first unmanned spacecraft to exit the solar system and send back data from interstellar space.',
  },
  {
    id: 3,
    title: 'James Webb Telescope',
    image: '/public/jwst.png',
    description:
      'The most advanced space telescope to observe distant galaxies and the early universe.',
  },
  {
    id: 4,
    title: 'Curiosity Rover',
    image: '/public/curiosity.png',
    description:
      'Exploring the surface of Mars to search for signs of microbial life.',
  },
  {
    id: 5,
    title: 'Perseverance Rover',
    image: '/public/perseverance.png',
    description:
      'NASA’s latest Mars mission aiming to collect samples to return to Earth.',
  },
  {
    id: 6,
    title: 'ISS',
    image: '/public/iss.png',
    description:
      'The International Space Station, a space lab orbiting Earth used for scientific research.',
  },
  {
    id: 7,
    title: 'New Horizons',
    image: '/public/horizons.png',
    description:
      'A mission to Pluto and the Kuiper Belt to expand our understanding of the outer solar system.',
  },
  {
    id: 8,
    title: 'Artemis I',
    image: '/public/artemis1.png',
    description:
      'An uncrewed test flight as part of NASA’s Artemis mission to return humans to the Moon.',
  },
  {
    id: 9,
    title: 'Kepler Telescope',
    image: '/public/kepler.png',
    description:
      'A space telescope mission to discover Earth-like exoplanets beyond our solar system.',
  },
  {
    id: 10,
    title: 'SpaceX Starship',
    image: '/public/starship.png',
    description:
      'The next-generation spacecraft developed by SpaceX for Mars and deep space missions.',
  },
];

export default function Exploration() {
  const scrollToSection = (id) => {
    const el = document.getElementById(`section-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      className="min-h-screen relative pb-20"
      style={{
        backgroundImage: "url('/public/earth.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'contain',
      }}
    >
      <div className="relative z-10 pt-10 pb-10 bg-black/60 backdrop-blur-md">
        <div className="w-full h-[70vh] relative mb-0">
          <img
            src={contentItems[0].image}
            alt={contentItems[0].title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
                {contentItems[0].title}
              </h1>
              <p className="text-xl max-w-3xl mx-auto drop-shadow-md">
                {contentItems[0].description}
              </p>
            </div>
          </div>
        </div>

        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={4000}
          showStatus={false}
          transitionTime={800}
          swipeable
          emulateTouch
          className="w-full md:w-3/4 mx-auto my-16"
        >
          {contentItems.slice(1, 6).map((item) => (
            <div
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl mx-auto"
              />
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

        <div className="space-y-12 px-6 md:px-20">
          {contentItems.map((item, i) => (
            <motion.div
              key={item.id}
              id={`section-${item.id}`}
              className={`flex flex-col md:flex-row ${
                i % 2 !== 0 ? 'md:flex-row-reverse' : ''
              } items-center gap-10 bg-white/10 p-8 rounded-xl shadow-xl backdrop-blur-xl`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg w-full md:w-[50%]"
              />
              <div className="text-white text-left space-y-4">
                <h3 className="text-3xl font-bold">{item.title}</h3>
                <p className="text-lg leading-relaxed text-white/90 text-justify">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.section>
        <Footer />
      </motion.section>
    </section>
  );
}
