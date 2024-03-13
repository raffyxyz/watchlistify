import React from "react";
import { TopAnimeTypes } from "@/lib/types";
import { Trash2, SquarePen } from "lucide-react";

interface Props {
  dataLibrary: TopAnimeTypes[];
}

const LibraryTrack: React.FC<Props> = ({ dataLibrary }) => {
  return (
    <div>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-5">
        {dataLibrary.map((anime: TopAnimeTypes) => (
          <div key={anime.id} className="cursor-pointer">
            <img
              className="w-[280px] h-[200px] object-cover"
              src={anime.image}
              alt={anime.title}
            />
            <div className="mt-2 flex justify-between items-center">
              <h3 className="text-xs text-muted-foreground">Episode 7</h3>
              <div className="flex items-center space-x-3">
                <SquarePen size={16} />
                <Trash2 size={16} />
              </div>
            </div>
            <h5 className="mt-3">{anime.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryTrack;
