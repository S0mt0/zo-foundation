"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const WhoWeAre = () => {
  return (
    <section className="py-20 px-6 md:px-14 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-xl xs:text-2xl font-semibold text-center bg-center bg-no-repeat mb-10 text-gray-900 px-6 py-2 capitalize whitespace-nowrap"
          style={{ backgroundImage: 'url("/assets/img/button-stroke.svg")' }}
        >
          Who we are
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground max-w-3xl mx-auto"
        >
          At the Zita-Onyeka Foundation, we believe in the power of community,
          the potential of youth, and the strength of women. Founded with a
          vision to create lasting change, we are a non-profit organization
          dedicated to empowering individuals and transforming communities. Our
          mission is simple yet profound: to provide opportunities, resources,
          and support that enable youth and women to thrive. We focus on
          education, skill development, and community initiatives that foster
          growth, equality, and sustainability.
          <Link
            href="/who-we-are"
            className=" text-orange-500 hover:text-blue-600 underline ml-4 underline-offset-2 whitespace-nowrap"
          >
            READ MORE
          </Link>
        </motion.p>
      </div>
    </section>
  );
};
