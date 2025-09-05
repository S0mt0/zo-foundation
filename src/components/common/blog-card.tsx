import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const BlogCard = ({ slug, bannerImage, title, excerpt }: IBlog) => {
  return (
    <Link
      href={`/blogs/${slug}`}
      aria-label={`Read blog: ${title}`}
      className="group block overflow-hidden hover:bg-white transition-all  hover:-translate-y-0.5 w-full max-w-3xl"
    >
      <div className="relative">
        <Image
          src={bannerImage}
          alt={title}
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className="w-full aspect-video object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-all duration-200 uppercase">
          <div className="flex items-center text-xl gap-3 text-white font-extrabold">
            Read more <ArrowRight />
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-3xl capitalize font-semibold leading-snug line-clamp-2 text-gray-950 transition-colors">
          {title}
        </h3>

        {excerpt && (
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">{excerpt}</p>
        )}
      </div>
    </Link>
  );
};
