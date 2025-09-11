"use client";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts";

import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { useUpdateSearchParams } from "@/lib/hooks";

export const SearchInput = ({
  search = "",
  pathName,
  placeholder,
  className,
}: {
  search?: string;
  placeholder?: string;
  className?: string;
  pathName: string;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounceValue(searchTerm, 900);

  const { updateSearchParams } = useUpdateSearchParams(pathName);

  useEffect(() => {
    updateSearchParams({ search: debouncedSearchTerm });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  return (
    <div className={cn("w-full relative", className)}>
      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      <Input
        placeholder={placeholder}
        defaultValue={search}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pr-10 w-full rounded-none focus-visible:ring-primary shadow-none"
      />
    </div>
  );
};
