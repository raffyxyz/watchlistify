"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { WatchListType } from "@/lib/types";
import { fetchUserWatchList } from "@/lib/watchList";
import { Img } from "@/components/ui/img";

import WatchListEdit from "./watchlist-edit";

const WatchListTrack = () => {
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["userWatchList"],
    queryFn: fetchUserWatchList,
  });

  return (
    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-5">
      {data?.map((watchList: WatchListType) => (
        <div key={watchList._id} className="cursor-pointer">
          <Img
            className="w-[280px] h-[200px] object-cover"
            src={watchList.image}
            alt={watchList.title}
            onClick={() =>
              router.push(
                `/anime/watch/${watchList.listId}?ep=${
                  watchList.episodeId ?? ""
                }`
              )
            }
          />
          <div className="flex justify-between items-center">
            <h3 className="text-xs text-muted-foreground">
              Episode {watchList.episode ?? 0}
            </h3>
            <WatchListEdit
              listId={watchList.listId}
              title={watchList.title}
              selectedStatus={watchList.status}
              iconOnly
            />
          </div>
          <Link
            href={`/anime/watch/${watchList.listId}?ep=${
              watchList.episodeId ?? ""
            }`}
            className="mt-3 hover:text-orange-400"
          >
            {watchList.title.substring(0, 27)}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default WatchListTrack;
