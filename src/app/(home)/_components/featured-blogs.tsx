"use client";
import { motion } from "framer-motion";

import { BlogCard } from "@/components/common/blog-card";

type Props = {
  blogs?: IBlog[];
};
export const FeaturedBlogs = ({ blogs }: Props) => {
  if (!blogs || !blogs.length) return null;

  return (
    <section className="py-20 px-6 md:px-14 bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-bold text-gray-700 text-xl uppercase mb-2 flex items-center gap-2"
        >
          Read our featured Blogs
        </motion.h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard {...blog} key={blog.slug} />
          ))}
        </div>
      </div>
    </section>
  );
};
