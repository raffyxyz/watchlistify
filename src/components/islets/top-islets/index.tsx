"use client";
import React, { useEffect } from "react";
import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useTopAiringPagination } from "@/states/useTopAiringPagination";
import TopPageHeader from "./top-page-header";
import TopPageTrack from "./top-page-track";
import TopPagePagination from "./top-page-pagination";
import TopPageSkeleton from "./top-page-skeleton";

const TopPage = () => {
  const queryClient = useQueryClient();
  const [topPage, fetchTopAnime] = useTopAiringPagination((state) => [
    state.topPage,
    state.fetchTopAnime,
  ]);
  const {
    status,
    data: topAiringAnime,
    error,
    isFetching,
    isPlaceholderData,
  } = useQuery({
    queryKey: ["topAiring", topPage],
    queryFn: () => fetchTopAnime(topPage),
    placeholderData: keepPreviousData,
    staleTime: 5000,
  });

  useEffect(() => {
    if (!isPlaceholderData && topAiringAnime?.hasNextPage) {
      queryClient.prefetchQuery({
        queryKey: ["topAiring", topPage + 1],
        queryFn: () => fetchTopAnime(topPage + 1),
      });
    }
  }, [topAiringAnime, isPlaceholderData, topPage, queryClient]);
  return (
    <>
      <TopPageHeader />
      <TopPagePagination
        className="mt-2 mb-10"
        hasNextPage={topAiringAnime?.hasNextPage}
      />
      {isFetching ? (
        <TopPageSkeleton />
      ) : (
        <TopPageTrack data={topAiringAnime?.results} />
      )}
      <TopPagePagination
        className="mt-10 mb-4"
        hasNextPage={topAiringAnime?.hasNextPage}
      />
    </>
  );
};

export default TopPage;
