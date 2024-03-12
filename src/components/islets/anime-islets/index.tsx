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
    <div className="px-4 md:px-10 lg:px-16">
      <div className="mt-4 w-full xl:w-[1200px] m-auto">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 lg:gap-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export { AnimeWrapper, AnimePlayer, AnimeDetails, AnimeActions };
