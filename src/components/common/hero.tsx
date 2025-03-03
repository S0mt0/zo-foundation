"use client";
import { motion } from "framer-motion";

export const Hero = ({
  heading = "ZOF",
  bgImgUrl = "/assets/img/together.jpg",
}: {
  heading: string;
  bgImgUrl?: string;
}) => {
  return (
    <header
      className="h-48 bg-white 2xl:bg-[center_top_-30rem] lg:bg-[center_top_-20rem] bg-center bg-cover bg-no-repeat overflow-hidden relative w-full"
      style={{ backgroundImage: `url(${bgImgUrl})` }}
    >
      <div className="absolute inset-0 bg-red-500/50 p-10 px-6 md:px-14">
        <div className="max-w-5xl mx-auto h-full w-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="border-l-[4px] px-5 py-1.5 uppercase border-yellow-400 w-fit bg-black/50"
          >
            <h1 className="text-xl text-yellow-400 font-semibold">{heading}</h1>
          </motion.div>
        </div>
      </div>
    </header>
  );
};
