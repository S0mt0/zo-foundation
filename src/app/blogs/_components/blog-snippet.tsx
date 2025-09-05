// "use client";
// import Image from "next/image";
// import { format } from "date-fns";
// import Link from "next/link";
// import { Clock } from "lucide-react";

// export const BlogSnippet = (blog: any) => {
//   const publishDate = format(new Date(blog.createdAt), "d MMM, yyyy hh:mm aa");
//   const updateDate = format(new Date(blog.updatedAt), "d MMM, yyyy hh:mm aa");
//   const hasBeenUpdated = blog.createdAt !== blog.updatedAt;

//   const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
//     const target = e.target as HTMLImageElement;
//     target.src = "/assets/img/blank-book.jpg";
//   };

//   return (
//     <Link
//       href={`/blogs/${blog.blogId}`}
//       className="bg-neutral-50 hover:bg-white shadow-md rounded-md hover:shadow-2xl transition-all duration-200 overflow-hidden group max-w-xl w-full"
//     >
//       <div className="relative">
//         <Image
//           width={400}
//           height={400}
//           src={blog.bannerUrl}
//           alt={blog.blogId}
//           onError={handleImgError}
//           className="w-full h-60 object-center object-cover"
//         />

//         <div className="flex flex-col px-6 py-8 ls:py-8 xs:p-8 gap-2 mb-3">
//           <div className="text-gray-500/65 text-xs space-y-2 mb-3 border-b pb-3">
//             <p className="flex items-center gap-1.5">
//               <Clock className="h-4 w-4 text-green-500/50" />
//               Published on{" "}
//               <span className="text-muted-foreground whitespace-nowrap">
//                 {publishDate}
//               </span>
//             </p>
//             {hasBeenUpdated ? (
//               <p className="flex items-center gap-1.5">
//                 <Clock className="h-4 w-4 text-green-500/50" />
//                 Last updated on{" "}
//                 <span className="text-muted-foreground whitespace-nowrap">
//                   {updateDate}
//                 </span>
//               </p>
//             ) : (
//               ""
//             )}
//           </div>
//           <h3 className="font-bold text-orange-600/70 mb-2 capitalize text-lg">
//             {blog.title}
//           </h3>
//           <p className="text-sm line-clamp-4">{blog.desc}</p>
//           <button className="py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-sm text-white rounded shadow mt-6">
//             Read More
//           </button>
//         </div>
//       </div>
//     </Link>
//   );
// };
