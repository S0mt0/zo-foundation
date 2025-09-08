"use client";
import Image from "next/image";
import type React from "react";

import { format } from "date-fns";
import Link from "next/link";

interface BlogSnippetProps {
  bannerImage: string;
  excerpt: string;
  slug: string;
  title: string;
  tags: string[];
  comments?: Record<string, any>[];
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

  const dayNumber = format(publishedDate, "dd");
  const monthName = format(publishedDate, "MMM").toUpperCase();
  const commentCount = data.comments?.length || 0;

  return (
    <Link
      href={`/blogs/${data.slug}`}
      className="bg-white shadow-sm border border-gray-100 overflow-hidden"
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
          <h2 className="text-xl font-bold text-gray-900 mb-4 leading-tight capitalize">
            {data.title}
          </h2>

          {/* Metadata */}
          <div className="flex flex-wrap gap-8 text-sm text-gray-500 mb-4">
            <div>
              <span className="font-medium">Posted by</span>
            </div>
            <div>
              <span className="font-medium">Categories</span>
              <div className="font-normal">{data?.tags?.join(", ")}</div>
            </div>
            <div>
              <span className="font-medium">Comments</span>
              <div className="font-normal">
                {commentCount} Comment{commentCount !== 1 ? "s" : ""}
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
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-6 py-2 rounded transition-colors duration-200"
          >
            READ MORE
          </Link>
        </div>
      </div>
    </Link>
  );
};
