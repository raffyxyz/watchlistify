import React from "react";
import WatchListHeader from "./watchlist-header";
import WatchListTrack from "./watchlist-track";

import { WatchListType } from "@/lib/types";

interface Props {
  data: WatchListType[];
}

export default function WatchListData({ data }: Props) {
  return (
    <div>
      <WatchListHeader />
      <WatchListTrack dataLibrary={data} />
    </div>
  );
}
