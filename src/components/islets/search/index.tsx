"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import HeaderSearch from "../home-header/header-search";
import SearchFilter from "./search-filter";
import SearchResult from "./search-result";

import { useSearch } from "@/states/useSearch";

const SearchSomething = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") as string;

  // Search query state.
  const [setSearchQuery, searchAnime, searchDrama] = useSearch((state) => [
    state.setSearchQuery,
    state.searchAnime,
    state.searchDrama,
  ]);

  //   Client search for anime.
  const { data: dataAnimeResult, isFetching: isFetchingAnime } = useQuery({
    queryKey: ["animeResult", query],
    queryFn: () => searchAnime(query),
    refetchOnWindowFocus: false,
    enabled: !!query,
  });

  //   Client search for drama.
  const { data: dataDramaResult, isFetching: isFetchingDrama } = useQuery({
    queryKey: ["animeDrama", query],
    queryFn: () => searchDrama(query),
    refetchOnWindowFocus: false,
    enabled: !!query,
  });

  useEffect(() => {
    if (!!query) {
      setSearchQuery(query);
    }
  }, [query]);

  console.log("Drama: ", dataDramaResult);
  return (
    <div className="mt-10">
      <HeaderSearch />
      <SearchFilter />
      <SearchResult
        isFetchingAnime={isFetchingAnime}
        isFetchingDrama={isFetchingDrama}
        dataAnime={dataAnimeResult?.results}
        dataDrama={dataDramaResult?.results}
      />
    </div>
  );
};

export default SearchSomething;
