import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-48 w-full max-w-2xl rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full max-w-2xl" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

export const SkeletonItems = () => {
  return (
    <section className="py-20 px-6 md:px-14">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 my-10">
        {[...new Array(2)].map((_, idx) => (
          <SkeletonCard key={idx} />
        ))}
      </div>
    </section>
  );
};
