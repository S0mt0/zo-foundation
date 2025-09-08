"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts";

import { Input } from "../ui/input";
import { QuickCTALinks } from "./quick-cta-links";
import { SocialShareButtons } from "./social-share-buttons";

export const SideBarWithSearchInput = ({
  search = "",
  shareButtonTitle,
  placeholder,
}: {
  search?: string;
  placeholder?: string;
  shareButtonTitle?: string;
}) => {
  const searchParamsObj = useSearchParams();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounceValue(searchTerm, 900);

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
    router.push(`/blogs?${params.toString()}`);
  };

  const handleSearch = (value: string) => {
    updateSearchParams({ search: value });
  };

  useEffect(() => {
    handleSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div className="sticky top-10 gap-10 flex flex-col-reverse md:flex-col">
      <div className="w-full relative">
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder={placeholder}
          defaultValue={search}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pr-10 w-full rounded-none focus-visible:ring-primary"
        />
      </div>
      <QuickCTALinks />
      <SocialShareButtons title={shareButtonTitle} />
    </div>
  );
};
