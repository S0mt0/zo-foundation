import Link from "next/link";

import { BlogCard } from "../../../components/common/blog-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  blogsDataPromise?: Promise<ApiPaginatedResponse<IBlog> | undefined>;
};

export const FeaturedBlogs = async ({ blogsDataPromise }: Props) => {
  const blogs = (await blogsDataPromise)?.data;

  if (!blogs || !blogs.length) return null;

  return (
    <section className="py-20 px-6 md:px-14">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-10 flex flex-col items-center justify-center">
          <h3 className="font-bold text-2xl capitalize flex items-center gap-2">
            Our latest news
          </h3>
          <div className="w-fit space-x-1">
            {[...new Array(3)].map((_, idx) => (
              <span
                className="bg-primary/95 h-1 w-1 rounded-full inline-block"
                key={idx}
              />
            ))}
            <span className="w-6 h-1 rounded-full bg-primary/95 inline-block" />
          </div>
        </div>

        <Carousel opts={{ align: "start" }} className="w-full max-w-full">
          <CarouselContent className="-ml-8">
            {blogs.map((blog) => (
              <CarouselItem
                key={blog.slug}
                className="md:basis-1/2 lg:basis-1/3 pl-8"
              >
                <BlogCard {...blog} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="mt-16">
          <Link
            href="/blogs"
            className="bg-orange-500 hover:bg-orange-500/95 transition-colors text-white py-5 px-10 font-bold"
          >
            View more
          </Link>
        </div>
      </div>
    </section>
  );
};
