"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDramaEpisode } from "@/states/useDramaEpisode";
import { useDramaEpisodeChange } from "@/states/useDramaEpisodeChange";
import { Button } from "@/components/ui/button";
import { DramaEpisodeType } from "@/lib/types";
import DramaEpisodeChange from "./drama-episode-select";

interface DramaEpisodesProps {
  dramaEpisodes: Array<DramaEpisodeType> | undefined;
  id: string;
  isWatchList: boolean;
}

const DramaEpisodes: React.FC<DramaEpisodesProps> = ({
  dramaEpisodes,
  id,
  isWatchList,
}) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const searchParams = useSearchParams();
  const dramaEpisodeParams = searchParams.get("dEp") as string;

  const [setDramaEpisode, selectedDramaEpisode] = useDramaEpisode((state) => [
    state.setDramaEpisode,
    state.dramaEpisode,
  ]);

  const [startIndexDrama, endIndexDrama] = useDramaEpisodeChange((state) => [
    state.startIndexDrama,
    state.endIndexDrama,
  ]);

  const dramaEpisodesList = dramaEpisodes?.slice(
    startIndexDrama - 1,
    endIndexDrama
  );

  const updateMutation = useMutation({
    mutationFn: async (data: {
      episode: number;
      episodeId: string;
      listId: string;
    }) => {
      const { episode, episodeId, listId } = data;
      return axios.put(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/watchlist/${encodeURIComponent(
          listId
        )}`,
        { episode, episodeId }
      );
    },
  });

  const handleEpisodeClick = (episode: string, epNumber: number) => {
    setDramaEpisode(episode);

    if (isWatchList) {
      updateMutation.mutate({
        episode: epNumber,
        episodeId: episode,
        listId: id,
      });
    }

    // queryClient.invalidateQueries({
    //   queryKey: ["streamingLinksDrama", selectedDramaEpisode, id],
    // });

    router.push(`?dEp=${episode}`);
  };

  useEffect(() => {
    if (dramaEpisodeParams) {
      setDramaEpisode(dramaEpisodeParams);
    } else if (dramaEpisodes && dramaEpisodes[0]) {
      setDramaEpisode(dramaEpisodes[0]?.id);
    }

    if (dramaEpisodeParams && isWatchList) {
      const parts = dramaEpisodeParams.split("-");
      const episodeNumber = parseInt(parts[parts.length - 1]);

      updateMutation.mutate({
        episode: episodeNumber,
        episodeId: dramaEpisodeParams,
        listId: id,
      });
    }
  }, [dramaEpisodeParams]);

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
            onClick={() => handleEpisodeClick(episode.id, episode.episode)}
          >
            {episode.episode}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default DramaEpisodes;
