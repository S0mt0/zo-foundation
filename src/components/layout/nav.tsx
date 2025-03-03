"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useToggle } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";

import { navLinks } from "./nav-links";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const pathname = usePathname();
  const [toggled, toggle] = useToggle();

  return (
    <div className="bg-green-800 text-white shadow-lg z-50 relative">
      <nav className="h-[70px] flex items-center justify-between pl-6 gap-3">
        <div className="flex gap-6 h-full items-center justify-center">
          <button className="flex md:hidden" onClick={toggle}>
            {toggled ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>

          <Link href="/">
            <Image
              src="/assets/seo/zof-logo.png"
              height={63}
              width={63}
              alt="@zof-logo"
              priority
            />
          </Link>
        </div>
        <ul className="gap-8 items-center h-full hidden md:flex">
          {navLinks.map(({ href, label }) => (
            <li
              key={href}
              className="h-full flex items-center justify-center relative"
            >
              <Link
                href={href}
                className="hover:text-[#e1ba38] transition-colors text-sm"
              >
                {label}
              </Link>
              <div
                className={cn(
                  "absolute bottom-0 h-1 bg-[#e1ba38] w-full hidden",
                  href === pathname && "block"
                )}
              />
            </li>
          ))}
        </ul>

        <Link
          href="/donate"
          className="h-full bg-yellow-500 hover:bg-[#f8d152] px-5 md:px-6 flex items-center justify-center font-semibold text-green-800 hover:text-green-600 transition-all text-lg xs:text-xl gap-1.5"
        >
          Donate
        </Link>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {toggled && (
          <motion.div
            initial={{ maxHeight: 0 }}
            animate={{ maxHeight: "100vh" }}
            exit={{ maxHeight: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute bottom-0 translate-y-full w-full bg-green-800 p-10 md:hidden overflow-hidden"
          >
            <ul className="gap-6 items-center h-full flex flex-col w-full">
              {navLinks.map(({ href, label }) => (
                <li key={href} className="relative pl-4 w-full">
                  <Link
                    href={href}
                    className="hover:text-[#e1ba38] transition-colors w-full block"
                    onClick={() => setTimeout(() => toggle(), 500)}
                  >
                    {label}
                  </Link>
                  <div
                    className={cn(
                      "absolute left-0 w-1 bg-[#e1ba38] h-full hidden -bottom-1/2 -translate-y-1/2",
                      href === pathname && "block"
                    )}
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
