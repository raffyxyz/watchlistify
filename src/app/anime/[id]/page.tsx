import React from "react";
import axios from "axios";

import { AnimeInfo, EpisodeType } from "@/lib/types";
import { API_HOST, GOGOANIME_ENDPOINT, ANIME } from "../../../config";
import { Button } from "@/components/ui/button";
import {
  AnimePlayer,
  AnimeWrapper,
  AnimeDetails,
  AnimeActions,
} from "@/components/islets/anime-islets";

const getData = async (id: string): Promise<{ animeInfo: AnimeInfo }> => {
  const { data } = await axios.get(
    `${API_HOST + ANIME + GOGOANIME_ENDPOINT}/info/${encodeURIComponent(id)}`
  );

  return { animeInfo: data };
};

export default async function AnimePage({
  params,
}: {
  params: { id: string };
}) {
  const { animeInfo } = await getData(params.id);

  return (
    <div className="px-4 md:px-10 lg:px-16">
      {/* Video component */}

      <AnimePlayer episodeId={animeInfo.episodes[0].id} />
      <AnimeActions id={animeInfo.episodes[0].id} />

      <AnimeWrapper>
        <AnimeDetails
          title={animeInfo.title}
          subOrDub={animeInfo.subOrDub}
          status={animeInfo.status}
          description={animeInfo.description}
        />

        <div className="w-full">
          <h1 className="mb-1">Episodes:</h1>
          <div className="flex flex-wrap">
            {animeInfo.episodes.map((episode: EpisodeType) => (
              <Button
                key={episode.id}
                className="mr-2 mt-2"
                variant="secondary"
              >
                {episode.number}
              </Button>
            ))}
          </div>
        </div>
      </AnimeWrapper>
    </div>
  );
}
