"use client";
import React, { useEffect } from "react";
import AnimePlayer from "./anime-player";
import AnimeDetails from "./anime-details";
import AnimeActions from "./anime-actions";
import { useAnimeEpisode } from "@/states/useAnimeEpisode";

interface AnimeWrapperProps {
  children: React.ReactNode;
}

const AnimeWrapper: React.FC<AnimeWrapperProps> = ({ children }) => {
  const [setQuality] = useAnimeEpisode((state) => [state.setQuality]);

  useEffect(() => {
    setQuality("default");
  }, []);

  return (
    <div className="mt-4 w-full xl:w-[1200px] m-auto">
      <div className="grid grid-cols-3 gap-4">{children}</div>
    </div>
  );
};

export { AnimeWrapper, AnimePlayer, AnimeDetails, AnimeActions };
