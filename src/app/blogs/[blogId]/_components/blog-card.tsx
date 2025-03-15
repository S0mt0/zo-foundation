import Image from "next/image";
import { format } from "date-fns";

import { BlogContent } from "./blog-content";

export const BlogCard = (blog: TBlog) => {
  const {
    bannerUrl,
    createdAt,
    title,
    updatedAt,
    content: { blocks },
  } = blog;

  const publishDate = format(new Date(createdAt), "d MMM, yyyy hh:mm aa");
  const updateDate = format(new Date(updatedAt), "d MMM, yyyy hh:mm aa");
  const hasBeenUpdated = createdAt !== updatedAt;

  return (
    <article className="max-w-4xl mx-auto text-sm">
      <Image
        width={500}
        height={400}
        src={bannerUrl}
        alt={title}
        priority
        className="aspect-video w-full"
      />

      <div className="mt-12">
        <h2 className="font-bold text-2xl xs:text-3xl text-gray-800">
          {title}
        </h2>

        <div className="flex items-center gap-3 text-gray-500/75">
          <p>Published on {publishDate}</p>
          {hasBeenUpdated ? (
            <p>
              <span className="mr-3">•</span>
              Last updated on {updateDate}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="my-12">
        {blocks.map((block) => (
          <div className="my-4 md:my-8" key={block.id}>
            <BlogContent {...block} />
          </div>
        ))}
      </div>
    </article>
  );
};
