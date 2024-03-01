import React from "react";
import { Play, Plus } from "lucide-react";
import { DramaResultTypes } from "@/lib/types";

interface DramaResultProps {
  data: DramaResultTypes[] | undefined;
}

const DramaResult: React.FC<DramaResultProps> = ({ data }) => {
  return (
    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-3 2xl:gap-5">
      {data?.map((drama: DramaResultTypes) => (
        <div
          key={drama.id}
          className="cursor-pointer xs:w-[190px] sm:w-[200px] md:w-full"
        >
          <img
            className="w-[190px] sm:w-[200px] md:w-[190px] lg:w-[200px] xl:w-[240px] 2xl:w-[280px] h-[260px] sm:h-[260px] md:h-[240px] lg:h-[270px] xl:h-[300px] 2xl:h-[390px] hover:scale-105"
            src={drama.image}
            alt={drama.title}
          />
          <div className="mt-2 flex justify-between items-center">
            <div className="flex space-x-1">
              <p className="text-sm text-muted-foreground">{drama.type}</p>
              <p className="text-sm text-muted-foreground">
                {drama.releaseDate}
              </p>
            </div>

            <div className="flex space-x-2">
              <Play className="text-orange-400 w-[18px] md:w-[24px]" />
              <Plus className="text-orange-400  w-[22px] md:w-[26px]" />
            </div>
          </div>
          <h3 className="mt-1 hover:text-orange-400">{drama.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default DramaResult;
