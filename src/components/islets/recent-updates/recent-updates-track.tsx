import React from "react";
import { Plus, Play } from "lucide-react";
import { RecentAnimeTypes } from "@/lib/types";

interface RecentAnimeTrackProps {
  data: RecentAnimeTypes[] | undefined;
}

const RecentUpdatesTrack: React.FC<RecentAnimeTrackProps> = ({ data }) => {
  return (
    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-5">
      {data?.map((anime: RecentAnimeTypes) => (
        <div key={anime.id} className="cursor-pointer">
          <img
            className="w-[190px] sm:w-[200px] md:w-[190px] lg:w-[200px] xl:w-[240px] 2xl:w-[280px] h-[260px] sm:h-[260px] md:h-[240px] lg:h-[270px] xl:h-[330px] 2xl:h-[390px] hover:scale-105"
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
          <h3 className="mt-1 hover:text-orange-400">
            {anime.title.substring(0, 27)}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default RecentUpdatesTrack;
