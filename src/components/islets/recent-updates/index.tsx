"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import RecentUpdatesHeader from "./recent-updates-header";
import RecentUpdatesTrack from "./recent-updates-track";
import RecentUpdatesPagination from "./recent-updates-pagination";

import { useRecentPagination } from "@/states/useRecentPagination";
import RecentUpdatesSkeleton from "./recent-updates-skeleton";

const RecentUpdates = () => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("p") || "1", 10);

  const queryClient = useQueryClient();
  const [setPage, fetchRecentAnime] = useRecentPagination((state) => [
    state.setPage,
    state.fetchRecentAnime,
  ]);
  const { status, data, error, isFetching, isPlaceholderData } = useQuery({
    queryKey: ["recentAnime", page],
    queryFn: () => fetchRecentAnime(page),
    placeholderData: keepPreviousData,
    staleTime: 5000,
  });

  useEffect(() => {
    if (!isPlaceholderData && data?.hasNextPage) {
      queryClient.prefetchQuery({
        queryKey: ["recentAnime", page + 1],
        queryFn: () => fetchRecentAnime(page + 1),
      });
    }
  }, [data, isPlaceholderData, page, queryClient]);

  useEffect(() => {
    if (!!page) {
      setPage(page);
    }
  }, [page]);

  return (
    <>
      <RecentUpdatesHeader />
      // {data?.results.length !== 0 && (
        <RecentUpdatesPagination
          className="mt-2 mb-10"
          hasNextPage={data?.hasNextPage}
        />
      )}
      {isFetching ? (
        <RecentUpdatesSkeleton />
      ) : (
        <RecentUpdatesTrack data={data?.results} />
      )}
      {data?.results.length !== 0 && (
        <RecentUpdatesPagination
          className="mt-10 mb-4"
          hasNextPage={data?.hasNextPage}
        />
      )}
    </>
  );
};

export default RecentUpdates;
