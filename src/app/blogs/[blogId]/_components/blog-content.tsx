import Image from "next/image";

import { cn } from "@/lib/utils";

export const BlogContent = ({ type, data }: Block) => {
  if (type === "paragraph")
    return <p dangerouslySetInnerHTML={{ __html: data.text || "" }} />;

  if (type === "header") {
    if (data.level === 3)
      return (
        <h3
          dangerouslySetInnerHTML={{ __html: data.text || "" }}
          className="text-3xl font-bold"
        />
      );

    if (data.level === 2)
      return (
        <h2
          dangerouslySetInnerHTML={{ __html: data.text || "" }}
          className="text-4xl font-bold"
        />
      );
  }

  if (type === "image")
    return (
      <div>
        <Image
          src={data.file?.url || "/assets/img/blank-book.jpg"}
          alt="Blog banner image"
          width={500}
          height={400}
          className="w-full aspect-video"
        />
        {data.caption?.length ? (
          <p className="w-full my-3 text-center md:mb-12 text-base text-gray-500/75">
            {data.caption}
          </p>
        ) : (
          ""
        )}
      </div>
    );

  if (type === "quote")
    return (
      <div className="bg-emerald-400/10 p3 pl-5 border-l-4 border-emerald-600">
        <p>{data.text}</p>
        {data.caption?.length ? (
          <p className="w-full text-base text-emerald-600">{data.caption}</p>
        ) : (
          ""
        )}
      </div>
    );

  if (type === "list")
    return (
      <ol
        className={cn(
          "pl-5",
          data.style === "ordered" ? "list-decimal" : "list-disc"
        )}
      >
        {data.items?.map((listItem, i) => (
          <li
            key={i}
            dangerouslySetInnerHTML={{ __html: listItem }}
            className="my-4"
          />
        ))}
      </ol>
    );
};
