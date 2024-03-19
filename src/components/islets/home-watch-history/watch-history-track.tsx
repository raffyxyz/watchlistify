"use client";
import React from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import { Img } from "@/components/ui/img";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { WatchListType } from "@/lib/types";
import { fetchUserWatchList } from "@/lib/watchList";

const WatchHistoryTrack = () => {
  const { data: userWatchList } = useQuery({
    queryKey: ["userWatchList", "", ""],
    queryFn: () => fetchUserWatchList("", ""),
  });

  return (
    <>
      <div className="hidden md:block">
        <div className="mt-4 grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-5">
          {userWatchList?.slice(0, 6).map((watchList: WatchListType) => (
            <div key={watchList._id} className="cursor-pointer">
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
                className="mt-3 hover:text-orange-400"
              >
                <Img
                  className="w-[280px] h-[200px] object-cover"
                  src={watchList.image}
                  alt={watchList.title}
                />
              </Link>
              <h3 className="text-xs text-muted-foreground">
                Episode {watchList.episode ?? 0}
              </h3>
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
                className="mt-3 hover:text-orange-400"
              >
                {watchList.title.substring(0, 27)}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="block md:hidden">
        <ScrollArea className="mt-4 w-full whitespace-nowrap">
          <div className="flex w-max space-x-2">
            {userWatchList?.slice(0, 12).map((watchList: WatchListType) => (
              <div key={watchList._id} className="cursor-pointer">
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
                >
                  <Img
                    className="w-[200px] h-[190px] object-cover"
                    src={watchList.image}
                    alt={watchList.title}
                  />
                </Link>
                <h3 className="text-xs text-muted-foreground">
                  Episode {watchList.episode ?? 0}
                </h3>
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
                  className="mt-3 hover:text-orange-400"
                >
                  {watchList.title.substring(0, 27)}
                </Link>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
};

export default WatchHistoryTrack;
