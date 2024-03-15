import React from "react";
import LibraryHeader from "./library-header";
import LibraryTrack from "./library-track";

import { WatchListType } from "@/lib/types";

interface Props {
  data: WatchListType[];
}

export default function LibraryData({ data }: Props) {
  return (
    <div>
      <LibraryHeader />
      <LibraryTrack dataLibrary={data} />
    </div>
  );
}
