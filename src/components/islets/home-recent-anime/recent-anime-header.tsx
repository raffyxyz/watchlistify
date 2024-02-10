"use client";
import React from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

const RecentAnimeHeader = () => {
  return (
    <div className="mt-10 flex justify-between items-center">
      <h2 className="font-semibold text-xl md:text-2xl">Recently Updated</h2>
      {/* <div className="flex space-x-2">
        <ChevronLeft className="cursor-pointer" />
        <ChevronRight className="cursor-pointer" />
      </div> */}
      <h4 className="cursor-pointer">View More</h4>
    </div>
  );
};

export default RecentAnimeHeader;
