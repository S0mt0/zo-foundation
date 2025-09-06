import Link from "next/link";

import { BlogCard } from "@/components/common/blog-card";

type Props = {
  blogsDataPromise?: Promise<ApiPaginatedResponse<IBlog> | undefined>;
};

export const FeaturedBlogs = async ({ blogsDataPromise }: Props) => {
  const blogs = (await blogsDataPromise)?.data;

  if (!blogs || !blogs.length) return null;

  return (
    <section className="py-20 px-6 md:px-14 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h3 className="font-bold text-gray-700 text-xl uppercase mb-2 flex items-center gap-2">
          blogs
        </h3>
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
