import axios from "axios";

import HomeHeader from "@/components/islets/home-header";
import HomeRecentAnime from "@/components/islets/home-recent-anime";
import HomeWatchHistory from "@/components/islets/home-watch-history";
import TopAiringAnime from "@/components/islets/home-top-anime";

import { RecentAnimeTypes, TopAnimeTypes } from "@/lib/types";

import Footer from "@/components/islets/footer";

const getData = async (): Promise<{
  recentAnime: RecentAnimeTypes[];
  topAnime: TopAnimeTypes[];
}> => {
  const { data: dataRecent } = await axios.get(
    "https://api-consumet-raffy.vercel.app/anime/gogoanime/recent-episodes"
  );

  const { data: dataTop } = await axios.get(
    "https://api-consumet-raffy.vercel.app/anime/gogoanime/top-airing"
  );

  return { recentAnime: dataRecent.results, topAnime: dataTop.results };
};

export default async function Home() {
  const { recentAnime, topAnime } = await getData();

  return (
    <div className="px-4 md:px-10 lg:px-16">
      <HomeHeader />

      {/* Recently Updated */}
      <HomeRecentAnime recentAnime={recentAnime} />

      {/* Watch History */}
      <HomeWatchHistory data={topAnime} />

      {/* Top Airing Anime */}
      <TopAiringAnime data={topAnime} />

      <Footer />
    </div>
  );
}
