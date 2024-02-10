import React from "react";

import WatchHistoryHeader from "./watch-history-header";
import WatchHistoryTrack from "./watch-history-track";
import { TopAnimeTypes } from "@/lib/types";

interface HomeWatchHistoryProps {
  data: TopAnimeTypes[];
}

export default function HomeWatchHistory({ data }: HomeWatchHistoryProps) {
  return (
    <div className="mt-16">
      <WatchHistoryHeader />
      <WatchHistoryTrack watchHistory={data} />
    </div>
  );
}
