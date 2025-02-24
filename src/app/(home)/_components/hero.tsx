"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
      className="h-screen bg-green-700 bg-center bg-cover bg-no-repeat relative w-full overflow-hidden max-h-[1140px] p-6"
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
      <div className="isolate flex flex-col justify-center  text-white pt-36">
        <h1 className="text-5xl max-w-2xl font-extrabold">
          Transforming Lives, <br /> One Community at a Time
        </h1>
        <p className="text-orange-400 mt-2">
          Empowering youth and women to lead, thrive, and inspire.
        </p>
      </div>
    </header>
  );
};
