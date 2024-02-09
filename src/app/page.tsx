import axios from "axios";

import HomeHeader from "@/components/islets/home-header";
import HomeRecentAnime from "@/components/islets/home-recent-anime";

import { RecentAnimeTypes } from "@/lib/types";

const getData = async (): Promise<{ recentAnime: RecentAnimeTypes[] }> => {
  const { data } = await axios.get(
    "https://api-consumet-raffy.vercel.app/anime/gogoanime/recent-episodes"
  );

  return { recentAnime: data.results };
};

export default async function Home() {
  const { recentAnime } = await getData();
  return (
    <div className="px-16">
      <HomeHeader />

      {/* Recently Updated */}
      <HomeRecentAnime recentAnime={recentAnime} />
    </div>
  );
}
