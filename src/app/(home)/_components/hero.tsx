"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
// import { features } from "./hero-features";

export const Hero = () => {
  const heroImages = [
    "/assets/img/zof_empower_youth.jpg",
    "/assets/img/zof_groupie_01.jpg",
    "/assets/img/zof_led_community.jpg",
    "/assets/img/ZOF_WOMEN_SKILL_AQ.jpg",
    "/assets/img/ZOF_HERO_02.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevImage) => (prevImage + 1) % heroImages.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [heroImages.length]);

  return (
    <header
      className="h-screen bg-green-700 bg-center bg-cover bg-no-repeat overflow-hidden relative w-full p-6 md:px-14 max-h-[700px]"
      style={{
        backgroundImage: `url(${heroImages[currentImageIndex]})`,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImageIndex}
          src={heroImages[currentImageIndex]}
          alt="Hero Image"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, filter: "blur(0px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/60" />
      <div className="isolate flex flex-col justify-center text-white pt-28 xs:pt-36 ls:pt-20 text-center">
        <h1 className="text-3xl xs:text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          EMPOWERING
          <br />
          COMMUNITIES FOR
          <br />
          CHANGE
        </h1>
        <p className="text-lg xs:text-xl text-gray-300 max-w-2xl mx-auto">
          Dedicated to empowering communities and promoting sustainable
          development. Join us in our mission to create positive change and
          build a better future for all.
        </p>
      </div>
      {/* Grid Section
      <div className="isolate grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
        {features.map((feat) => (
          <div
            key={feat.heading}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-xl text-center border border-white/20 hover:bg-white/20 transition"
          >
            <feat.icon className="h-10 w-10 xs:h-12 xs:w-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-lg xs:text-xl font-bold text-white mb-2">
              {feat.heading}
            </h3>
            <p className="text-gray-300">{feat.desc}</p>
          </div>
        ))}
      </div> */}
    </header>
  );
};
