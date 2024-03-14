"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDramaEpisode } from "@/states/useDramaEpisode";
import { useDramaEpisodeChange } from "@/states/useDramaEpisodeChange";
import { Button } from "@/components/ui/button";
import { DramaEpisodeType } from "@/lib/types";
import DramaEpisodeChange from "./drama-episode-select";

interface DramaEpisodesProps {
  dramaEpisodes: Array<DramaEpisodeType> | undefined;
}

const DramaEpisodes: React.FC<DramaEpisodesProps> = ({ dramaEpisodes }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dramaEpisodeParams = searchParams.get("dEp") as string;

  const selectedDramaEpisode =
    dramaEpisodes && !dramaEpisodeParams
      ? dramaEpisodes[0]?.id
      : dramaEpisodeParams;

  const setDramaEpisode = useDramaEpisode((state) => state.setDramaEpisode);

  const [startIndexDrama, endIndexDrama] = useDramaEpisodeChange((state) => [
    state.startIndexDrama,
    state.endIndexDrama,
  ]);

  const dramaEpisodesList = dramaEpisodes?.slice(
    startIndexDrama - 1,
    endIndexDrama
  );

  const handleEpisodeClick = (episode: string) => {
    router.push(`?dEp=${episode}`);
    setDramaEpisode(episode);
  };

  if (dramaEpisodes?.length === 0) {
    return <div className="mt-10 w-full">No episodes found.</div>;
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h1 className="mb-1">Episodes: </h1>
        <DramaEpisodeChange
          totalEpisodes={dramaEpisodes ? dramaEpisodes?.length : 0}
        />
      </div>
      <div className="flex flex-wrap">
        {dramaEpisodesList?.map((episode: DramaEpisodeType) => (
          <Button
            key={episode.id}
            className="mr-2 mt-2"
            variant={`${
              selectedDramaEpisode === episode.id ? "orange" : "secondary"
            }`}
            onClick={() => handleEpisodeClick(episode.id)}
          >
            {episode.episode}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default DramaEpisodes;
