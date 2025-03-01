"use client";
import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";

export const UpcomingEvents = () => {
  return (
    <section className="py-20 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-bold text-gray-700 text-xl uppercase mb-4 flex items-center gap-2"
        >
          <div>
            <span className="text-green-400">Upcoming</span> Events
          </div>
          <CalendarDays className="text-gray-500/60" />
        </motion.h3>

        <div className="pt-5 xs:pt-8">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-10">
            <div className="col-span-8 grid grid-cols-1 md:grid-cols-6 bg-neutral-50 shadow-md rounded-md hover:shadow-lg transition overflow-hidden">
              <div className="relative col-span-2">
                <Image
                  width={400}
                  height={400}
                  src="/assets/img/sharing-food.jpg"
                  alt="Meal Packaging Event"
                  className="w-full h-60 md:h-full object-center object-cover"
                />

                <div className="absolute p-6 inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
                  <div className="shrink-0 w-fit p-2 flex flex-col items-center justify-center">
                    <div className="text-5xl font-bold mb-1.5">16</div>
                    <div className="uppercase font-bold text-sm">
                      MARCH 2025
                    </div>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="p-2 bg-yellow-500 rounded-md mr-2">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <span>Kubwa, FCT Abuja.</span>
                  </div>
                </div>
              </div>
              <div className="flex col-span-4 p-12 gap-8">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-orange-600/70 mb-2 uppercase">
                    Community Food Drive
                  </h3>
                  <p>
                    An initiative dedicated to providing nutritious meals to
                    individuals in need.
                  </p>
                  <button className="py-1 px-4 bg-yellow-500 hover:bg-yellow-600 text-sm text-white rounded shadow mt-6">
                    Read More...
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-2 flex items-center">
              <button className="flex items-center py-2 px-4 bg-green-700/90 hover:bg-green-700 text-sm rounded text-white uppercase">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
