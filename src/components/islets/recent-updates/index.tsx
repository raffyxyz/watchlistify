"use client";
import React, { useEffect } from "react";
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
  const queryClient = useQueryClient();
  const [page, fetchRecentAnime] = useRecentPagination((state) => [
    state.page,
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

  return (
    <>
      <RecentUpdatesHeader />
      <RecentUpdatesPagination
        className="mt-2 mb-10"
        hasNextPage={data?.hasNextPage}
      />
      {isFetching ? (
        <RecentUpdatesSkeleton />
      ) : (
        <RecentUpdatesTrack data={data?.results} />
      )}
      <RecentUpdatesPagination
        className="mt-10 mb-4"
        hasNextPage={data?.hasNextPage}
      />
    </>
  );
};

export default RecentUpdates;
