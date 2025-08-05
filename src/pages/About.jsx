import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function Collapse({ isOpen, children }) {
  const ref = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (ref.current) {
      setHeight(isOpen ? `${ref.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div
      className="transition-all duration-500 ease-in-out overflow-hidden"
      style={{ maxHeight: height }}
    >
      <div
        ref={ref}
        className="p-4 bg-[#f8f8f8] text-justify dark:bg-[#1e1e1e] dark:text-white"
      >
        {children}
      </div>
    </div>
  );
}

function FaqCustom() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      title: "Where is the NASA Headquarters Located?",
      desc: (
        <>
          NASA Headquarters is located at 300 E St SW, Washington, DC 20546,
          United States. To see more, you can check it {" "}
          <a href="#nasa-location" className="text-[#f1f1f1] underline">
            here
          </a>
          .
        </>
      ),
    },
    {
      title: "What's new in ROSES-2025? How does it differ from prior ROSES?",
      desc: "ROSES-2025 will be posted at https://solicitation.nasaprs.com/ROSES2025 when it is released. Significant changes occurred since last year's ROSES solicitation.",
    },
    // ... (same content as before)
  ];

  return (
    <section id="faq" className="w-full pt-6 pb-12">
      <div className="">
        <h2 className="text-3xl font-bold text-center text-[#313030] dark:text-white mb-12">
          FAQ
        </h2>

        <div className="space-y-2">
          {faqData.map((item, index) => (
            <div key={index}>
              <div
                className="flex justify-between items-center p-4 bg-[#313030] dark:bg-[#444] cursor-pointer hover:bg-[#383838]"
                onClick={() => toggleSection(index)}
              >
                <p className="text-white font-medium">{item.title}</p>
                {openIndex === index ? (
                  <ChevronUpIcon className="h-5 w-5 text-white" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-white" />
                )}
              </div>
              <Collapse isOpen={openIndex === index}>
                <p>{item.desc}</p>
              </Collapse>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section className="dark:bg-black dark:text-white">
      <div className="relative h-screen bg-black">
        <img
          src="/about-nasa.png"
          alt="NASA"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 z-10" />
        <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            About NASA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="mt-6 max-w-2xl text-lg text-white"
          >
            Exploring the unknown in air and space, innovating for humanity, and inspiring the world through discovery.
          </motion.p>
        </div>
      </div>

      <div className="relative py-24 px-4 md:px-12 bg-[#f4f4f4] dark:bg-[#1a1a1a]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="w-full h-full bg-fixed bg-center bg-no-repeat bg-cover opacity-30"
            style={{ backgroundImage: "url('/about-nasa.png')" }}
          />
        </div>
        <div className="relative z-10 text-justify max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">NASA’s Mission</h2>
          <p>
            NASA conducts cutting-edge research in Earth science, climate, the solar system, and beyond. Collaborating with commercial and international partners, we aim to land the first woman and person of color on the Moon through the Artemis campaign.
          </p>
          <p>
            We operate the International Space Station, advance aeronautics technologies, and prepare to send humans to Mars.
          </p>
          <p>
            At NASA’s 20+ centers across the US, thousands of scientists, engineers, and explorers work together to push the boundaries of innovation.
          </p>
        </div>
      </div>

      <div className="mt-20 mx-4 px-2 md:mx-12 md:px-6">
        <FaqCustom />
      </div>

      <div className="mx-4 px-2 md:mx-12 md:px-6">
        <div
          className="w-full max-h-screen flex flex-col justify-center items-center text-justify mb-12"
          id="nasa-location"
        >
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-4 text-start">Location</h1>
          </div>
          <iframe
            title="NASA Headquarters Map"
            src="https://www.google.com/maps/embed/v1/place?q=NASA+Headquarters,+E+Street+Southwest,+Washington,+DC,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            style={{ height: "600px", width: "100%", border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <Footer />
    </section>
  );
}