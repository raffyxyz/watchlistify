import React, { cache } from "react";
import { getServerSession } from "next-auth";
import connectMongo from "@/utils/mongoose";
import WatchList from "@/models/watchlist";
import WatchListData from "@/components/islets/watchlist-islets";

import { WatchListType } from "@/lib/types";

const getData = cache(async (): Promise<{ watchList: WatchListType[] }> => {
  const session = await getServerSession();

  await connectMongo();

  const result = await WatchList.find({
    userId: session?.user?.email,
  }).exec();

  const watchList = JSON.parse(JSON.stringify(result));

  return { watchList };
});

export default async function Library() {
  const { watchList } = await getData();

  return (
    <div className="px-4 md:px-10 lg:px-16 xs:m-auto sm:m-0 xs:w-[450px] sm:w-full">
      <WatchListData data={watchList} />
    </div>
  );
}

export const revalidate = 0;
