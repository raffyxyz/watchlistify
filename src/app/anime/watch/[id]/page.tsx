import React from "react";
import axios from "axios";

import { AnimeInfo } from "@/lib/types";
import { API_HOST, GOGOANIME_ENDPOINT, ANIME } from "../../../../config";
import {
  AnimePlayer,
  AnimeWrapper,
  AnimeDetails,
  AnimeActions,
} from "@/components/islets/anime-watch-islets";
import AnimeEpisodes from "@/components/islets/anime-watch-islets/anime-episodes";

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
    <>
      {/* Video component */}
      <AnimePlayer
        episodeId={animeInfo?.episodes[0]?.id}
        cover={animeInfo.image}
      />
      {/* <AnimeActions id={animeInfo.episodes[0]?.id} /> */}

      <AnimeWrapper>
        <AnimeDetails
          id={animeInfo.id}
          title={animeInfo.title}
          subOrDub={animeInfo.subOrDub}
          status={animeInfo.status}
          description={animeInfo.description}
        />

        <AnimeEpisodes animeEpisodes={animeInfo.episodes} />
      </AnimeWrapper>
    </>
  );
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { animeInfo } = await getData(params.id);
  return {
    title: `Watch ${animeInfo.title}`,
  };
}
