import React from "react";
import RecentUpdatesHeader from "./recent-updates-header";
import RecentUpdatesTrack from "./recent-updates-track";

import { RecentAnimeTypes } from "@/lib/types";

const RecentUpdates: React.FC<{ recentAnime: RecentAnimeTypes[] }> = ({
  recentAnime,
}) => {
  return (
    <>
      <RecentUpdatesHeader />
      <RecentUpdatesTrack data={recentAnime} />
    </>
  );
};

export default RecentUpdates;
