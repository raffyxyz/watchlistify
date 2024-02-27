"use client";
import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Plus, Play } from "lucide-react";
import { RecentAnimeTypes } from "@/lib/types";

interface RecentAnimeTrackProps {
  recentAnime: RecentAnimeTypes[];
}

function RecentCards({ recentAnime }: RecentAnimeTrackProps) {
  return (
    <div className="hidden md:block">
      <div className="mt-4 grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-5">
        {recentAnime.slice(0, 12).map((anime: RecentAnimeTypes) => (
          <div key={anime.id} className="cursor-pointer">
            <img
              className="md:w-[190px] lg:w-[200px] xl:w-[240px] 2xl:w-[280px] md:h-[270px] lg:h-[280px] xl:h-[330px] 2xl:h-[400px] hover:scale-105"
              src={anime.image}
              alt={anime.title}
            />
            <div className="mt-2 flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                Episode {anime.episodeNumber}
              </p>
              <div className=" flex space-x-2">
                <Play className="text-orange-400" size={24} />
                <Plus className="text-orange-400" size={26} />
              </div>
            </div>

            <h3 className="text-md mt-1 hover:text-orange-400">
              {anime.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecentCardsMobile({ recentAnime }: RecentAnimeTrackProps) {
  return (
    <div className="block md:hidden">
      <ScrollArea className="mt-4 w-full whitespace-nowrap">
        <div className="flex w-max space-x-2">
          {recentAnime.slice(0, 12).map((anime: RecentAnimeTypes) => (
            <div key={anime.id} className="cursor-pointer">
              <img
                className="w-[190px] h-[270px]"
                src={anime.image}
                alt={anime.title}
              />
              <div className="mt-2 flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  Episode {anime.episodeNumber}
                </p>
                <div className="flex space-x-2">
                  <Play className="text-orange-400" size={24} />
                  <Plus className="text-orange-400" size={26} />
                </div>
              </div>
              <h3 className="mt-1 mb-2">{anime.title.substring(0, 20)}</h3>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

const RecentAnimeTrack: React.FC<RecentAnimeTrackProps> = ({ recentAnime }) => {
  return (
    <>
      <RecentCards recentAnime={recentAnime} />
      <RecentCardsMobile recentAnime={recentAnime} />
    </>
  );
};

export default RecentAnimeTrack;
