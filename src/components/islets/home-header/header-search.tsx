"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { SearchInput } from "@/components/ui/search-input";
import { SearchIcon } from "lucide-react";

import { useSearch } from "@/states/useSearch";

const HeaderSearch = () => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useSearch((state) => [
    state.searchQuery,
    state.setSearchQuery,
  ]);

  const handleSearchInputChange = (value: string) => {
    setSearchQuery(value);
    if (!!value) router.push(`/search?q=${value}`, { scroll: false });
  };

  return (
    <div className="w-full lg:w-[900px] m-auto mt-4">
      <SearchInput
        icon={<SearchIcon className="h-[16px] w-[16px]" />}
        type="text"
        className="h-12 md:h-14 text-md"
        placeholder="Search anime or kdrama"
        value={searchQuery}
        onChange={(e) => handleSearchInputChange(e.target.value)}
      />
    </div>
  );
};

export default HeaderSearch;
