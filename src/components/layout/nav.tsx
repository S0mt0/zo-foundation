"use client";
import { motion } from "framer-motion";

import { useScrollThreshold } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const hasScrolled = useScrollThreshold();

  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: hasScrolled ? "0%" : "-100%" }}
      transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 w-full bg-green-800 h-16 text-white shadow-lg"
      )}
    >
      <nav className="h-full flex items-center px-6">
        <Link href="/">
          <Image
            src="/assets/img/zof-logo.png"
            height={60}
            width={60}
            alt="logo"
            className="object-center"
          />
        </Link>
      </nav>
    </motion.header>
  );
};
