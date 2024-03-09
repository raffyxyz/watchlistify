"use client";
import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import PlayerWrapper from "@/components/ui/player-wrapper";
import { API_HOST_CLIENT, GOGOANIME_ENDPOINT, ANIME } from "@/config";

interface AnimePlayerProps {
  episodeId: string;
}

const AnimePlayer: React.FC<AnimePlayerProps> = ({ episodeId }) => {
  const { status, data, error, isFetching, isPlaceholderData } = useQuery({
    queryKey: ["streamingLinks", episodeId],
    queryFn: () => fetchAnimeStreamingLinks(),
  });

  const fetchAnimeStreamingLinks = async () => {
    const { data } = await axios.get(
      `${API_HOST_CLIENT + ANIME + GOGOANIME_ENDPOINT}/watch/${episodeId}`
    );

    return data;
  };

  console.log(data);
  return (
    <div className="w-4/5 m-auto mt-0">
      <PlayerWrapper url={data?.sources[3].url} />
    </div>
  );
};

export default AnimePlayer;
