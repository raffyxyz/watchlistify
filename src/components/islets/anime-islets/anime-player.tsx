"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useAnimeEpisode } from "@/states/useAnimeEpisode";
import PlayerWrapper from "@/components/ui/player-wrapper";
import { API_HOST_CLIENT, GOGOANIME_ENDPOINT, ANIME } from "@/config";

interface AnimePlayerProps {
  episodeId: string;
}

const AnimePlayer: React.FC<AnimePlayerProps> = ({ episodeId }) => {
  const searchParams = useSearchParams();
  const episodeParams = searchParams.get("ep") as string;
  const qualityParams = searchParams.get("q") as string;

  const selectedEpisode = !episodeParams ? episodeId : episodeParams;

  const setQuality = useAnimeEpisode((state) => state.setQuality);

  const { status, data, error, isFetching } = useQuery({
    queryKey: ["streamingLinks", selectedEpisode, qualityParams],
    queryFn: () => fetchAnimeStreamingLinks(selectedEpisode, qualityParams),
    refetchOnWindowFocus: false,
  });

  const fetchAnimeStreamingLinks = async (episode: string, quality: string) => {
    const { data } = await axios.get(
      `${
        API_HOST_CLIENT + ANIME + GOGOANIME_ENDPOINT
      }/watch/${encodeURIComponent(episode)}`
    );

    let filteredSources = data.sources;

    if (qualityParams) {
      filteredSources = filteredSources.filter(
        (source: any) => source.quality === qualityParams
      );
      setQuality(qualityParams); // Set quality params state.
    } else {
      filteredSources = filteredSources.filter(
        (source: any) => source.quality === "default"
      );
    }

    return filteredSources[0];
  };

  return (
    <div className="w-full 2xl:w-3/4 m-auto mt-0">
      <PlayerWrapper url={data?.url} />
    </div>
  );
};

export default AnimePlayer;
