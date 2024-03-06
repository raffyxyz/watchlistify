import React from "react";
import axios from "axios";
import LibraryData from "@/components/islets/library-islets";

import { TopAnimeTypes } from "@/lib/types";
import { API_HOST, GOGOANIME_ENDPOINT, ANIME } from "../../config";

const getData = async (): Promise<{
  topAnime: TopAnimeTypes[];
}> => {
  const { data: dataTop } = await axios.get(
    `${API_HOST + ANIME + GOGOANIME_ENDPOINT}/top-airing`
  );

  return { topAnime: dataTop.results };
};

export default async function Library() {
  const { topAnime } = await getData();

  return (
    <div className="px-4 md:px-10 lg:px-16 xs:m-auto sm:m-0 xs:w-[450px] sm:w-full">
      <LibraryData data={topAnime} />
    </div>
  );
}
