import React from "react";
import { SearchInput } from "@/components/ui/search-input";
import { SearchIcon } from "lucide-react";

const HeaderSearch = () => {
  return (
    <div className="w-full lg:w-[900px] m-auto mt-4">
      <SearchInput
        icon={<SearchIcon className="h-[16px] w-[16px]" />}
        type="text"
        className="h-12 md:h-14 text-md"
        placeholder="Search anime or kdrama"
      />
    </div>
  );
};

export default HeaderSearch;
