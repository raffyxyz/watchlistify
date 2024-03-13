"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { EpisodeType } from "@/lib/types";
import { useAnimeEpisode } from "@/states/useAnimeEpisode";
import { useAnimeEpisodeChange } from "@/states/useAnimeEpisodeChange";
import EpisodeSelect from "./anime-episode-select";

interface AnimeEpisodesProps {
  animeEpisodes: EpisodeType[];
}

const AnimeEpisodes: React.FC<AnimeEpisodesProps> = ({ animeEpisodes }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const episodeParams = searchParams.get("ep") as string;

  const selectedEpisode = !episodeParams ? animeEpisodes[0]?.id : episodeParams;

  const [setEpisode] = useAnimeEpisode((state) => [state.setEpisode]);

  const [startIndex, endIndex] = useAnimeEpisodeChange((state) => [
    state.startIndex,
    state.endIndex,
  ]);

  const animeEpisodesList = animeEpisodes.slice(startIndex - 1, endIndex);

  const handleEpisodeClick = (episode: string) => {
    router.push(`?ep=${episode}`);
    setEpisode(episode);
  };

  if (animeEpisodes.length === 0) {
    return <div className="mt-10 w-full">No episodes found.</div>;
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h1 className="mb-1">Episodes:</h1>
        <EpisodeSelect totalEpisodes={animeEpisodes.length} />
      </div>
      <div className="flex flex-wrap">
        {animeEpisodesList.map((episode: EpisodeType) => (
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
