"use client";
import React from "react";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Img } from "@/components/ui/img";
import { Plus, Play } from "lucide-react";
import { RecentAnimeTypes } from "@/lib/types";

interface RecentAnimeTrackProps {
  recentAnime: RecentAnimeTypes[];
}

function RecentCards({ recentAnime }: RecentAnimeTrackProps) {
  const router = useRouter();

  const handleAddToLibrary = () => {};
  return (
    <div className="hidden md:block">
      <div className="mt-4 grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-3 2xl:gap-5">
        {recentAnime.slice(0, 12).map((anime: RecentAnimeTypes) => (
          <div key={anime.id} className="cursor-pointer">
            <Img
              className="md:w-[190px] lg:w-[200px] xl:w-[240px] 2xl:w-[280px] md:h-[240px] lg:h-[270px] xl:h-[300px] 2xl:h-[390px]"
              src={anime.image}
              alt={anime.title}
              onClick={() => router.push(`/anime/${anime.id}`)}
            />
            <div className="mt-2 flex justify-between items-center">
              <Link
                href={`/anime/watch/${anime.id}?ep=${anime.episodeId}`}
                className="text-sm text-muted-foreground"
              >
                Episode {anime.episodeNumber}
              </Link>
            </div>

            <Link
              href={`/anime/${anime.id}`}
              className="text-md mt-1 hover:text-orange-400 line-clamp-2"
            >
              {anime.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecentCardsMobile({ recentAnime }: RecentAnimeTrackProps) {
  const router = useRouter();
  return (
    <div className="block md:hidden">
      <ScrollArea className="mt-4 w-full whitespace-nowrap">
        <div className="flex w-max space-x-2">
          {recentAnime.slice(0, 12).map((anime: RecentAnimeTypes) => (
            <div key={anime.id} className="cursor-pointer">
              <Img
                className="rounded-sm w-[190px] h-[270px]"
                src={anime.image}
                alt={anime.title}
                onClick={() => router.push(`/anime/${anime.id}`)}
              />
              <div className="mt-2 flex justify-between items-center">
                <Link
                  href={`/anime/watch/${anime.id}?ep=${anime.episodeId}`}
                  className="text-sm text-muted-foreground"
                >
                  Episode {anime.episodeNumber}
                </Link>
              </div>
              <Link
                href={`/anime/${anime.id}`}
                className="mt-1 mb-2 line-clamp-2"
              >
                {anime.title}
              </Link>
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
