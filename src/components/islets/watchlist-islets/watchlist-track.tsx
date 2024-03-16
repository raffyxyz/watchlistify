"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { WatchListType } from "@/lib/types";
import { SquarePen } from "lucide-react";

interface Props {
  dataLibrary: WatchListType[];
}

const WatchListTrack: React.FC<Props> = ({ dataLibrary }) => {
  const router = useRouter();

  return (
    <div>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-5">
        {dataLibrary.map((watchList: WatchListType) => (
          <div key={watchList._id} className="cursor-pointer">
            <img
              className="w-[280px] h-[200px] object-cover"
              src={watchList.image}
              alt={watchList.title}
              onClick={() =>
                router.push(
                  `/anime/watch/${watchList.listId}?ep=${watchList.episodeId}`
                )
              }
            />
            <div className="mt-2 flex justify-between items-center">
              <h3 className="text-xs text-muted-foreground">
                Episode {watchList?.episode}
              </h3>
              <div className="flex items-center space-x-3">
                <SquarePen size={16} />
              </div>
            </div>
            <Link
              href={`/anime/watch/${watchList.listId}?ep=${watchList.episodeId}`}
              className="mt-3 hover:text-orange-400"
            >
              {watchList.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchListTrack;
