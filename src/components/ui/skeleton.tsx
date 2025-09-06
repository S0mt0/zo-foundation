import { cn } from "@/lib/utils/index";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-300/10", className)}
      {...props}
    />
  );
}

export { Skeleton };
