import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center px-8 md:px-20 min-h-[79vh]">
      <Image src="/404.png" alt="404 Not Found" width={500} height={500} />
      <p className="max-w-xl mx-auto text-black z-20">
        Oops! It seems like the page you are looking for was not found.
        Let&apos;s hurry back{" "}
        <Link href="/" className="hover:text-black/70 underline">
          home!
        </Link>
      </p>
    </div>
  );
}
