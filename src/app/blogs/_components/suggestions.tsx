import { BlogCard } from "@/components/common/blog-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  blogsDataPromise?: Promise<ApiPaginatedResponse<IBlog> | undefined>;
  currentBlogSlug: string;
};

export async function Suggestions({
  blogsDataPromise,
  currentBlogSlug,
}: Props) {
  const blogs = (await blogsDataPromise)?.data;
  if (!blogs || !blogs.length) return null;

  const filteredBlogs = blogs.filter((b) => b.slug !== currentBlogSlug);
  if (!filteredBlogs.length) return null;

  return (
    <div className="max-w-full w-full space-y-10">
      <h2 className="font-extrabold text-2xl text-black capitalize">
        You may also like
      </h2>
      <Carousel opts={{ align: "start" }} className="w-full max-w-full">
        <CarouselContent>
          {filteredBlogs.map((blog) => (
            <CarouselItem key={blog.slug} className="md:basis-1/2 lg:basis-1/3">
              <BlogCard {...blog} showExcerpt={false} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
