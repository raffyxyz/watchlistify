"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import HeaderSearch from "../home-header/header-search";
import SearchFilter from "./search-filter";
import SearchResult from "./search-result";

import { useSearch } from "@/states/useSearch";
import { useSearchFilter } from "@/states/useSearchFilter";

const SearchSomething = () => {
  // Search filter state.
  const [isActiveAnime] = useSearchFilter((state) => [state.isActiveAnime]);

  // Search query state.
  const [searchQuery, animePage, searchAnime] = useSearch((state) => [
    state.searchQuery,
    state.animePage,
    state.searchAnime,
  ]);

  //   Client search for anime.
  const { data: dataAnimeResult, isFetching: isFetchingAnime } = useQuery({
    queryKey: ["animeResult", searchQuery, animePage],
    queryFn: () => searchAnime(searchQuery, 1),
    staleTime: 5000,
    enabled: !!searchQuery && isActiveAnime(),
  });

  return (
    <div className="mt-10">
      <HeaderSearch />
      <SearchFilter />
      <SearchResult
        isFetchingAnime={isFetchingAnime}
        isFetchingDrama={isFetchingAnime}
        dataAnime={dataAnimeResult?.results}
        animeHasNextPage={dataAnimeResult?.hasNextPage}
      />
    </div>
  );
};

export default SearchSomething;
