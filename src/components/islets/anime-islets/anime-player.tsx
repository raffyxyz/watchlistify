"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useAnimeEpisode } from "@/states/useAnimeEpisode";
import PlayerWrapper from "@/components/ui/player-wrapper";
import { API_HOST_CLIENT, GOGOANIME_ENDPOINT, ANIME } from "@/config";
import { Spinner } from "@/components/ui/spinner";

interface AnimePlayerProps {
  episodeId: string;
  cover: string;
}

const AnimePlayer: React.FC<AnimePlayerProps> = ({ episodeId, cover }) => {
  const searchParams = useSearchParams();
  const episodeParams = searchParams.get("ep") as string;

  const selectedEpisode = !episodeParams ? episodeId : episodeParams;

  const { status, data, error, isFetching } = useQuery({
    queryKey: ["streamingLinks", selectedEpisode],
    queryFn: () => fetchAnimeStreamingLinks(selectedEpisode),
    refetchOnWindowFocus: false,
  });

  const fetchAnimeStreamingLinks = async (episode: string) => {
    const { data } = await axios.get(
      `${
        API_HOST_CLIENT + ANIME + GOGOANIME_ENDPOINT
      }/watch/${encodeURIComponent(episode)}`
    );

    return data;
  };

  if (isFetching) {
    return (
      <div className="flex justify-center items-center h-[260px] sm:h-[340px] md:h-[460px] lg:h-[580px] xl:h-[650px]">
        <Spinner className="text-orange-400" size={40} />
      </div>
    );
  }

  return (
    <div className="relative backdrop-blur-xl bg-background">
      <img
        src={cover}
        alt="Background"
        className="absolute h-full w-full object-cover blur-lg opacity-20"
      />

      <div className="relative px-0 md:px-10 lg:px-16">
        <div className="w-full 2xl:w-3/4 m-auto mt-0">
          <PlayerWrapper data={data} image={cover} />
        </div>
      </div>
    </div>
  );
};

export default AnimePlayer;
