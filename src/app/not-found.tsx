import Link from "next/link";

export default function NotFound() {
  return (
    <main className="py-20 px-6 md:px-14">
      <section className="max-w-7xl mx-auto text-center flex flex-col items-center justify-center min-h-72">
        <h1 className="text-8xl text-green-800 mb-4 font-extrabold">404</h1>
        <p className="whitespace-nowrap">
          That page was not found. Try
          <Link
            href="/"
            className="hover:text-red-600 underline font-semibold ml-2"
          >
            home!
          </Link>
        </p>
      </section>
    </main>
  );
}
