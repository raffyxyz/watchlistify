import React from "react";
import LibraryHeader from "./library-header";
import LibraryTrack from "./library-track";

import { TopAnimeTypes } from "@/lib/types";

interface Props {
  data: TopAnimeTypes[];
}

export default function LibraryData({ data }: Props) {
  return (
    <div>
      <LibraryHeader />
      <LibraryTrack dataLibrary={data} />
    </div>
  );
}
