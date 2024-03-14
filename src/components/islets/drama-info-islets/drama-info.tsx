"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Calendar, Globe, Play, Bookmark } from "lucide-react";

import { DramaDetailsType } from "@/lib/types";

interface DramaInfoProps {
  dramaInfo: DramaDetailsType;
  dramaId: string;
}

const DramaInfo: React.FC<DramaInfoProps> = ({ dramaInfo, dramaId }) => {
  const router = useRouter();

  return (
    <div className="col-span-2">
      <div className="flex flex-col">
        <img
          className="rounded-sm w-[190px] sm:w-[200px] md:w-[190px] lg:w-[200px] xl:w-[240px] 2xl:w-[280px] h-[260px] sm:h-[260px] md:h-[240px] lg:h-[270px] xl:h-[300px] 2xl:h-[390px]"
          src={dramaInfo.image}
          alt={dramaInfo.title}
        />
        <h1 className="mt-4 text-lg font-semibold text-orange-400">
          {dramaInfo.title}
        </h1>
        <div className=" flex space-x-3 items-center">
          {/* <div className="flex items-center space-x-2">
            <Play size={16} />
            <span className="font-sm lowercase">{dramaInfo.type}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Globe size={16} />
            <span className="font-sm">{dramaInfo.duration}</span>
          </div> */}
          <div className="flex items-center space-x-2">
            <Calendar size={16} />
            <span className="font-sm">{dramaInfo.releaseDate}</span>
          </div>
        </div>
        <div className="mt-4 flex space-x-3 items-center">
          <Button
            variant="orange"
            onClick={() => router.push(`/drama/watch/${dramaId}`)}
          >
            <Play className="mr-2 h-4 w-4" strokeWidth="3px" />
            Watch Now
          </Button>
          <Button variant="secondary">
            <Bookmark className="mr-2 h-4 w-4" strokeWidth="3px" />
            Add to Library
          </Button>
        </div>
        <p className="mt-4">{dramaInfo.description}</p>
      </div>
    </div>
  );
};

export default DramaInfo;
