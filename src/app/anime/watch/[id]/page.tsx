import React, { cache } from "react";
import axios from "axios";

import { AnimeInfo, WatchListType } from "@/lib/types";
import { API_HOST, GOGOANIME_ENDPOINT, ANIME } from "../../../../config";
import {
  AnimePlayer,
  AnimeWrapper,
  AnimeDetails,
} from "@/components/islets/anime-watch-islets";
import AnimeEpisodes from "@/components/islets/anime-watch-islets/anime-episodes";

const getData = cache(async (id: string): Promise<{ animeInfo: AnimeInfo }> => {
  const { data } = await axios.get(
    `${API_HOST + ANIME + GOGOANIME_ENDPOINT}/info/${encodeURIComponent(id)}`
  );

  return { animeInfo: data };
});

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
          image={animeInfo.image}
          episode={animeInfo.episodes[0].number}
          episodeId={animeInfo.episodes[0].id}
        />

        <AnimeEpisodes
          animeEpisodes={animeInfo.episodes}
          id={animeInfo.id}
          isWatchList={false}
        />
      </AnimeWrapper>
    </>
  );
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { animeInfo } = await getData(params.id);
  return {
    title: `Watch ${animeInfo.title}`,
    metadataBase: new URL(process.env.APP_URL as string),
    openGraph: {
      title: `Watch ${animeInfo.title} Anime Online free on dranime.xyz`,
      type: "video.episode",
      url: `/drama/${animeInfo.id}`,
      images: animeInfo.image,
      description: `The best website to watch ${animeInfo.title} anime for free at dranime.xyz`,
    },
  };
}
