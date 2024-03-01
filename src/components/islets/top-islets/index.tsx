"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
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
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("p") || "1", 10);

  const queryClient = useQueryClient();
  const [setPage, fetchTopAnime] = useTopAiringPagination((state) => [
    state.setPage,
    state.fetchTopAnime,
  ]);
  const {
    status,
    data: topAiringAnime,
    error,
    isFetching,
    isPlaceholderData,
  } = useQuery({
    queryKey: ["topAiring", page],
    queryFn: () => fetchTopAnime(page),
    placeholderData: keepPreviousData,
    staleTime: 5000,
  });

  useEffect(() => {
    if (!isPlaceholderData && topAiringAnime?.hasNextPage) {
      queryClient.prefetchQuery({
        queryKey: ["topAiring", page + 1],
        queryFn: () => fetchTopAnime(page + 1),
      });
    }
  }, [topAiringAnime, isPlaceholderData, page, queryClient]);

  useEffect(() => {
    if (!!page) {
      setPage(page);
    }
  }, [page]);
  return (
    <>
      <TopPageHeader />
      {topAiringAnime?.results.length !== 0 && (
        <TopPagePagination
          className="mt-2 mb-10"
          hasNextPage={topAiringAnime?.hasNextPage}
        />
      )}
      {isFetching ? (
        <TopPageSkeleton />
      ) : (
        <TopPageTrack data={topAiringAnime?.results} />
      )}
      {topAiringAnime?.results.length !== 0 && (
        <TopPagePagination
          className="mt-10 mb-4"
          hasNextPage={topAiringAnime?.hasNextPage}
        />
      )}
    </>
  );
};

export default TopPage;
