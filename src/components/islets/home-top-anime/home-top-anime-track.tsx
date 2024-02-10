import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { TopAnimeTypes } from "@/lib/types";

interface TopAnimeTrackProps {
  topAnime: TopAnimeTypes[];
}

const TopAnimeTrack: React.FC<TopAnimeTrackProps> = ({ topAnime }) => {
  return (
    <>
      <div className="hidden md:block">
        <div className="mt-4 grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-5">
          {topAnime.slice(0, 6).map((anime: TopAnimeTypes) => (
            <div key={anime.id} className="cursor-pointer">
              <img
                className="md:w-[190px] lg:w-[200px] xl:w-[240px] 2xl:w-[280px] md:h-[270px] lg:h-[280px] xl:h-[330px] 2xl:h-[400px]"
                src={anime.image}
                width={280}
                height={400}
                alt={anime.title}
              />
              <h3 className="mt-2">{anime.title.substring(0, 27)}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="block md:hidden">
        <ScrollArea className="mt-4 w-full whitespace-nowrap">
          <div className="flex w-max space-x-2">
            {topAnime.slice(0, 12).map((anime: TopAnimeTypes) => (
              <div key={anime.id} className="cursor-pointer">
                <img
                  className="w-[190px] h-[270px]"
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

export default TopAnimeTrack;
