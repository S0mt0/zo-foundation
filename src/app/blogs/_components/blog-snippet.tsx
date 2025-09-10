"use client";
import Image from "next/image";
import type React from "react";
import { format } from "date-fns";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface BlogSnippetProps {
  bannerImage: string;
  excerpt: string;
  slug: string;
  title: string;
  tags: string[];
  publishedAt: Date;
}

export const BlogSnippet = ({ ...data }: BlogSnippetProps) => {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "/assets/img/blank-book.jpg";
  };

  const publishedDate =
    data.publishedAt instanceof Date && !isNaN(data.publishedAt.getTime())
      ? data.publishedAt
      : new Date();

  const dayNumber = format(data?.publishedAt || new Date(), "dd");
  const monthName = format(data?.publishedAt || new Date(), "MMM").toUpperCase();

  return (
    <Link
      href={`/blogs/${data.slug}`}
      className="shadow-sm border border-gray-100 overflow-hidden"
    >
      <div className="relative">
        <Image
          width={800}
          height={400}
          src={data.bannerImage}
          alt={data.title}
          className="w-full h-auto object-center object-cover"
          priority
          onError={handleImgError}
        />
      </div>

      <div className="flex">
        {/* Date Sidebar */}
        <div className="flex-shrink-0 bg-gray-50 px-4 py-6 text-center border-r border-gray-100">
          <div className="text-4xl font-bold text-orange-500 leading-none">
            {dayNumber}
          </div>
          <div className="text-sm font-medium text-gray-600 mt-1">
            {monthName}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900 mb-4 leading-tight capitalize hover:text-orange-500">
            {data.title}
          </h2>

          {/* Metadata */}
          <div className="flex flex-wrap gap-8 text-sm mb-4">
            <div>
              <div className="font-medium text-gray-500">Posted by</div>
              <div className="font-extrabold text-black">Admin</div>
            </div>
            <div>
              <div className="font-medium text-gray-500">Categories</div>
              <div className="font-extrabold text-black capitalize">
                {data?.tags?.join(", ")}
              </div>
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-gray-700 leading-relaxed mb-6 line-clamp-2">
            {data.excerpt}
          </p>

          {/* Read More Button */}
          <Link
            href={`/blogs/${data.slug}`}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-6 py-2 transition-colors duration-200"
          >
            READ MORE
          </Link>
        </div>
      </div>
    </Link>
  );
};
