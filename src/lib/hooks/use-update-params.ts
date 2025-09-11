import { useRouter, useSearchParams } from "next/navigation";

export const useUpdateSearchParams = (pathName: string) => {
  const searchParamsObj = useSearchParams();
  const router = useRouter();

  const updateSearchParams = (updates: Record<string, string | undefined>) => {
    const params = new URLSearchParams(searchParamsObj);

    Object.entries(updates).forEach(([key, value]) => {
      if (value === undefined || value === "") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    // Reset to page 1 when filters change
    params.delete("page");
    router.push(`/${pathName}?${params.toString()}`);
  };

  return { updateSearchParams };
};
