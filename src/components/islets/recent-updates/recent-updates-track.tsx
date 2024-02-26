import React from "react";
import { RecentAnimeTypes } from "@/lib/types";

interface RecentAnimeTrackProps {
  data: RecentAnimeTypes[];
}

const RecentUpdatesTrack: React.FC<RecentAnimeTrackProps> = ({ data }) => {
  return (
    <div className="mt-4 grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-5">
      {data.map((anime: RecentAnimeTypes) => (
        <div key={anime.id} className="cursor-pointer">
          <img
            className="md:w-[190px] lg:w-[200px] xl:w-[240px] 2xl:w-[280px] md:h-[270px] lg:h-[280px] xl:h-[330px] 2xl:h-[400px] hover:scale-105"
            src={anime.image}
            alt={anime.title}
          />
          <h3 className="mt-2 hover:text-orange-400">
            {anime.title.substring(0, 27)}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default RecentUpdatesTrack;
