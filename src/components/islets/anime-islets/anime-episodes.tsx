"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { EpisodeType } from "@/lib/types";
import { useAnimeEpisode } from "@/states/useAnimeEpisode";

interface AnimeEpisodesProps {
  animeEpisodes: EpisodeType[];
}

const AnimeEpisodes: React.FC<AnimeEpisodesProps> = ({ animeEpisodes }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const episodeParams = searchParams.get("ep") as string;

  const selectedEpisode = !episodeParams ? animeEpisodes[0].id : episodeParams;

  const [setEpisode, quality, server] = useAnimeEpisode((state) => [
    state.setEpisode,
    state.quality,
    state.server,
  ]);

  const handleEpisodeClick = (episode: string) => {
    router.push(`?ep=${episode}&q=${quality}`, { scroll: false });
    setEpisode(episode);
  };

  return (
    <div className="w-full">
      <h1 className="mb-1">Episodes:</h1>
      <div className="flex flex-wrap">
        {animeEpisodes.map((episode: EpisodeType) => (
          <Button
            key={episode.id}
            className="mr-2 mt-2"
            variant={`${
              selectedEpisode === episode.id ? "orange" : "secondary"
            }`}
            onClick={() => handleEpisodeClick(episode.id)}
          >
            {episode.number}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default AnimeEpisodes;
