"use client";
import React from "react";
import SearchLoadingSkeleton from "@/components/ui/search-loading-skeleton";
import AnimeResult from "./anime-result";

import { useSearchFilter } from "@/states/useSearchFilter";
import { AnimeResultTypes } from "@/lib/types";

interface SearchResultProps {
  isFetchingAnime: boolean;
  isFetchingDrama: boolean;
  dataAnime: AnimeResultTypes[] | undefined;
  animeHasNextPage: boolean | undefined;
}

const SearchResult: React.FC<SearchResultProps> = ({
  isFetchingAnime,
  isFetchingDrama,
  dataAnime,
}) => {
  // Search filter state
  const filter = useSearchFilter((state) => state.filter);

  if (filter === "drama") {
    return <div className="mt-10">Drama</div>;
  }

  return (
    <div className="mt-10">
      {isFetchingAnime ? (
        <SearchLoadingSkeleton />
      ) : (
        <>
          <h2 className="font-semibold text-xl md:text-2xl text-orange-400">
            Search Result:
          </h2>
          <AnimeResult data={dataAnime} />
        </>
      )}
    </div>
  );
};

export default SearchResult;
