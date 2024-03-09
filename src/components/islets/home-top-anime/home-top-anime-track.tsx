"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Plus } from "lucide-react";
import { TopAnimeTypes } from "@/lib/types";

interface TopAnimeTrackProps {
  topAnime: TopAnimeTypes[];
}

function TopAnimeCards({ topAnime }: TopAnimeTrackProps) {
  const router = useRouter();
  return (
    <div className="hidden md:block">
      <div className="mt-4 grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-3 2xl:gap-5">
        {topAnime.slice(0, 6).map((anime: TopAnimeTypes) => (
          <div key={anime.id} className="cursor-pointer">
            <img
              className="md:w-[190px] lg:w-[200px] xl:w-[240px] 2xl:w-[280px] md:h-[240px] lg:h-[270px] xl:h-[300px] 2xl:h-[390px] hover:scale-105"
              src={anime.image}
              width={280}
              height={400}
              alt={anime.title}
              onClick={() => router.push(`/anime/${anime.id}`)}
            />
            <div className="mt-2 flex justify-between items-center">
              <div className="flex">
                {anime.genres
                  .slice(0, 2)
                  .map((genre: string, index: number) => (
                    <p
                      key={genre}
                      className="text-sm text-muted-foreground mr-2"
                    >
                      {genre}
                    </p>
                  ))}
              </div>
              <div className=" flex space-x-2">
                <Plus className="text-orange-400 w-[22px] md:w-[26px]" />
              </div>
            </div>
            <Link
              href={`/anime/${anime.id}`}
              className="mt-1 hover:text-orange-400"
            >
              {anime.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function TopAnimeCardsMobile({ topAnime }: TopAnimeTrackProps) {
  return (
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
              <div className="mt-2 flex justify-between items-center">
                <div className="flex">
                  {anime.genres
                    .slice(0, 2)
                    .map((genre: string, index: number) => (
                      <p
                        key={genre}
                        className="text-xs xl:text-sm text-muted-foreground mr-1 xl:mr-2"
                      >
                        {genre}
                      </p>
                    ))}
                </div>
                <div className=" flex space-x-2">
                  <Plus className="text-orange-400 w-[22px] md:w-[26px]" />
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

const TopAnimeTrack: React.FC<TopAnimeTrackProps> = ({ topAnime }) => {
  return (
    <>
      <TopAnimeCards topAnime={topAnime} />
      <TopAnimeCardsMobile topAnime={topAnime} />
    </>
  );
};

export default TopAnimeTrack;
