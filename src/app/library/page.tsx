import React, { cache } from "react";
import connectMongo from "@/utils/mongoose";
import WatchList from "@/models/watchlist";
import LibraryData from "@/components/islets/library-islets";

import { WatchListType } from "@/lib/types";

const getData = cache(async (): Promise<{ watchList: WatchListType[] }> => {
  await connectMongo();

  const watchList = await WatchList.find({
    userId: "ryzonxyz@gmail.com",
  }).exec();

  return { watchList };
});

export default async function Library() {
  const { watchList } = await getData();

  return (
    <div className="px-4 md:px-10 lg:px-16 xs:m-auto sm:m-0 xs:w-[450px] sm:w-full">
      <LibraryData data={watchList} />
    </div>
  );
}

export const revalidate = 0;
