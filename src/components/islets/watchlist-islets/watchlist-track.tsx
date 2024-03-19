"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { WatchListType } from "@/lib/types";
import { fetchUserWatchList } from "@/lib/watchList";
import { Img } from "@/components/ui/img";

import WatchListEdit from "./watchlist-edit";
import { useWatchListStatus } from "@/states/useWatchListStatus";
import { useWatchListType } from "@/states/useWatchListType";
import { Skeleton } from "@/components/ui/skeleton";

const WatchListTrack = () => {
  const router = useRouter();

  const status = useWatchListStatus((state) => state.status);
  const type = useWatchListType((state) => state.type);

  const { data, isFetching } = useQuery({
    queryKey: ["userWatchList", status, type],
    queryFn: () => fetchUserWatchList(status, type),
  });

  if (data?.length === 0) {
    return (
      <div className="flex h-[calc(100vh-200px)] items-center justify-center">
        <h1 className="text-center text-xl font-semibold">No data.</h1>
      </div>
    );
  }

  // if (isFetching) {
  //   const dummyData = Array.from({ length: 6 }, (_, index) => index + 1);
  //   return (
  //     <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1 sm:gap-4 xl:gap-5">
  //       {dummyData.map((index) => (
  //         <div key={index} className="flex flex-col space-y-2">
  //           <Skeleton className="w-[280px] h-[200px]" />
  //           <Skeleton className="w-[160px] h-3" />
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }

  return (
    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-5 mb-10">
      {data?.map((watchList: WatchListType) => (
        <div key={watchList._id} className="cursor-pointer">
          <Img
            className="w-[280px] h-[200px] object-cover"
            src={watchList.image}
            alt={watchList.title}
            onClick={() =>
              router.push(
                `${
                  watchList.type === "anime"
                    ? "anime/watch/" +
                      watchList.listId +
                      "?ep=" +
                      watchList.episodeId
                    : "drama/watch/" +
                      encodeURIComponent(watchList.listId) +
                      "?dEp=" +
                      watchList.episodeId
                }`
              )
            }
          />
          <div className="flex justify-between items-center h-6">
            <h3 className="text-xs text-muted-foreground">
              Episode {watchList.episode ?? 0}
            </h3>
            <WatchListEdit
              listId={watchList.listId}
              title={watchList.title}
              selectedStatus={watchList.status}
              type={watchList.type}
              iconOnly
            />
          </div>
          <Link
            href={`${
              watchList.type === "anime"
                ? "anime/watch/" +
                  watchList.listId +
                  "?ep=" +
                  watchList.episodeId
                : "drama/watch/" +
                  encodeURIComponent(watchList.listId) +
                  "?dEp=" +
                  watchList.episodeId
            }`}
            className="hover:text-orange-400"
          >
            {watchList.title.substring(0, 27)}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default WatchListTrack;
