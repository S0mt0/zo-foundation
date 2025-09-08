"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const Hero = () => {
  const heroImages = [
    "/assets/img/child_group.jpg",
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
      className="h-screen bg-green-800 bg-center bg-cover bg-no-repeat overflow-hidden relative w-full p-6 md:px-14 max-h-[calc(100vh-70px)]"
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
      <div className="isolate items-center h-full flex flex-col justify-center text-white pt-28 xs:pt-36 ls:py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:max-w-4xl text-3xl xs:text-5xl md:text-8xl ls:text-6xl font-bold  leading-tight uppercase"
        >
          Empowering Communities For Change
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg xs:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Dedicated to empowering communities and promoting sustainable
          development. Join us in our mission to create positive change and
          build a better future for all.
        </motion.p>
      </div>
    </header>
  );
};
