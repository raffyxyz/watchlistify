import React from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { TopAnimeTypes } from "@/lib/types";

interface WatchHistoryTrackProps {
  watchHistory: TopAnimeTypes[];
}

const WatchHistoryTrack: React.FC<WatchHistoryTrackProps> = ({
  watchHistory,
}) => {
  return (
    <>
      <div className="hidden md:block">
        <div className="mt-4 grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-5">
          {watchHistory.slice(0, 6).map((anime: TopAnimeTypes) => (
            <div key={anime.id} className="cursor-pointer">
              <img
                className="w-[280px] h-[200px] object-cover"
                src={anime.image}
                alt={anime.title}
              />
              <h5 className="mt-2">{anime.title.substring(0, 27)}</h5>
              <h3 className="text-lg">Episode 7</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="block md:hidden">
        <ScrollArea className="mt-4 w-full whitespace-nowrap">
          <div className="flex w-max space-x-2">
            {watchHistory.slice(0, 12).map((anime: TopAnimeTypes) => (
              <div key={anime.id} className="cursor-pointer">
                <img
                  className="w-[200px] h-[190px] object-cover"
                  src={anime.image}
                  alt={anime.title}
                />
                <h3 className="mt-2 mb-2">{anime.title.substring(0, 20)}</h3>
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