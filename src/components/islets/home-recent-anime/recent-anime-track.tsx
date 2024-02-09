"use client";
import React from "react";
import { RecentAnimeTypes } from "@/lib/types";

interface RecentAnimeTrackProps {
  recentAnime: RecentAnimeTypes[];
}

const RecentAnimeTrack: React.FC<RecentAnimeTrackProps> = ({ recentAnime }) => {
  return (
    <div className="mt-4 grid grid-cols-6">
      {recentAnime.map((anime: RecentAnimeTypes) => (
        <div key={anime.id}>
          <img
            className="min-w-[280px] min-h-[400px]"
            src={anime.image}
            width={280}
            height={400}
            alt={anime.title}
          />
          <h3 className="mt-2">{anime.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default RecentAnimeTrack;
