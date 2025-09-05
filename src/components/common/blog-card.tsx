// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// type Props = {};
// export const BlogCard = ({ bannerImage, title }: IBlog) => {
//   return (
//     <Link
//       href={`/blogs/${title}`}
//       className="shadow-none rounded-none overflow-hidden max-w-7xl group"
//     >
//       <div className="relative">
//         <Image
//           src={bannerImage}
//           height={300}
//           width={400}
//           priority
//           alt={title}
//           className="w-full aspect-video object-cover object-center"
//         />
//         <div className="absolute inset-0 bg-white flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-all duration-100">
//           <Link
//             href={`/blogs/${title}`}
//             className="flex items-center gap-2 uppercase text-sm text"
//           >
//             Read more <ArrowRight />
//           </Link>
//         </div>
//       </div>
//       <div className="p-8">{title}</div>
//     </Link>
//   );
// };

import Image from "next/image";
import Link from "next/link";

export const BlogCard = ({ slug, bannerImage, title, excerpt }: IBlog) => {
  return (
    <Link
      href={`/blogs/${slug}`}
      aria-label={`Read blog: ${title}`}
      className="group block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
    >
      <div className="relative">
        <Image
          src={bannerImage ?? "/placeholder.jpg"}
          alt={title}
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className="w-full aspect-video object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold leading-snug line-clamp-2 text-gray-900 group-hover:text-gray-700 transition-colors">
          {title}
        </h3>

        {excerpt && (
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">{excerpt}</p>
        )}
      </div>
    </Link>
  );
};
