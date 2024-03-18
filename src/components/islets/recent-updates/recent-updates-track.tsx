import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Img } from "@/components/ui/img";
import { Plus, Play } from "lucide-react";
import { RecentAnimeTypes } from "@/lib/types";

interface RecentAnimeTrackProps {
  data: RecentAnimeTypes[] | undefined;
}

const RecentUpdatesTrack: React.FC<RecentAnimeTrackProps> = ({ data }) => {
  const router = useRouter();

  if (data?.length === 0) {
    return (
      <div className="flex justify-center mt-52">
        <h2 className="font-semibold text-xl md:text-2xl text-orange-400">
          There is no data.
        </h2>
      </div>
    );
  }

  return (
    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-3 2xl:gap-5">
      {data?.map((anime: RecentAnimeTypes) => (
        <div
          key={anime.id}
          className="cursor-pointer xs:w-[190px] sm:w-[200px] md:w-full"
        >
          <Img
            className="rounded-sm w-[190px] sm:w-[200px] md:w-[190px] lg:w-[200px] xl:w-[240px] 2xl:w-[280px] h-[260px] sm:h-[260px] md:h-[240px] lg:h-[270px] xl:h-[300px] 2xl:h-[390px]"
            src={anime.image}
            alt={anime.title}
            onClick={() => router.push(`/anime/${anime.id}`)}
          />
          <div className="mt-2 flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              Episode {anime.episodeNumber}
            </p>
            <div className="flex space-x-2">
              <Play
                className="text-orange-400 w-[18px] md:w-[24px]"
                onClick={() =>
                  router.push(`/anime/watch/${anime.id}?ep=${anime.episodeId}`)
                }
              />
              {/* <Plus className="text-orange-400  w-[22px] md:w-[26px]" /> */}
            </div>
          </div>
          <Link
            href={`/anime/${anime.id}`}
            className="mt-1 hover:text-orange-400"
          >
            {anime.title.substring(0, 27)}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecentUpdatesTrack;
