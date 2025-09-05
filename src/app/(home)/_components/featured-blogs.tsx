"use client";
import { motion } from "framer-motion";

import { BlogCard } from "@/components/common/blog-card";
import Link from "next/link";

type Props = {
  blogs?: IBlog[];
};
export const FeaturedBlogs = ({ blogs }: Props) => {
  if (!blogs || !blogs.length) return null;

  return (
    <section className="py-20 px-6 md:px-14 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-bold text-gray-700 text-xl uppercase mb-2 flex items-center gap-2"
        >
          blogs
        </motion.h3>
        <div className="grid md:grid-cols-2 gap-10 my-10">
          {blogs.map((blog) => (
            <BlogCard {...blog} key={blog.slug} />
          ))}
        </div>

        <div className="mt-16">
          <Link
            href="/blogs"
            className="bg-primary text-white py-6 px-10 font-bold"
          >
            View more
          </Link>
        </div>
      </div>
    </section>
  );
};
