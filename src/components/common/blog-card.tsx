"use client";
import { format } from "date-fns";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export const BlogCard = ({
  slug,
  bannerImage,
  title,
  publishedAt,
  excerpt,
  showExcerpt = true,
  className,
}: IBlog & { showExcerpt?: boolean; className?: string }) => {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "/assets/img/blank-book.jpg";
  };

  return (
    <Link
      href={`/blogs/${slug}`}
      aria-label={`Read blog: ${title}`}
      className={cn(
        "group block overflow-hidden transition-all hover:-translate-y-0.5 w-full max-w-xl",
        className
      )}
    >
      <div className="relative">
        <Image
          src={bannerImage}
          alt={title}
          width={800}
          height={450}
          className="w-full aspect-video object-cover object-center"
          priority
          onError={handleImgError}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform duration-200 uppercase">
          <div className="flex items-center text-lg gap-3 text-white font-bold">
            Read more <ArrowRight />
          </div>
        </div>
      </div>

      <div className="py-5">
        <h3 className="text-2xl capitalize font-bold leading-snug line-clamp-2 text-gray-950 transition-colors">
          {title}
        </h3>

        {excerpt && showExcerpt && (
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">{excerpt}</p>
        )}

        <p className="text-sm mt-2 font-normal xs:font-semibold">
          {format(publishedAt || new Date(), "MMMM d, yyyy")}
        </p>
      </div>
    </Link>
  );
};
