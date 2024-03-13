import React from "react";
import axios from "axios";

import { AnimeInfo } from "@/lib/types";
import { API_HOST, GOGOANIME_ENDPOINT, ANIME } from "../../../config";

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
      <h1>Anime Info: {animeInfo.title}</h1>
    </>
  );
}
