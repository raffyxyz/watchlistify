import axios from "axios";
import RecentUpdates from "@/components/islets/recent-updates";

import { RecentAnimeTypes } from "@/lib/types";
import { API_HOST, GOGOANIME_ENDPOINT, ANIME } from "@/config";

const getData = async (): Promise<{ recentAnime: RecentAnimeTypes[] }> => {
  const { data } = await axios.get(
    `${API_HOST + ANIME + GOGOANIME_ENDPOINT}/recent-episodes`
  );

  return { recentAnime: data.results };
};

export default async function Recent() {
  const { recentAnime } = await getData();

  return (
    <div className="px-4 md:px-10 lg:px-16">
      <RecentUpdates recentAnime={recentAnime} />
    </div>
  );
}
