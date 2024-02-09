"use client";
import React from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

const RecentAnimeHeader = () => {
  return (
    <div className="mt-10 flex justify-between items-center">
      <h2 className=" text-2xl">Recently Updated</h2>
      <div className="flex space-x-2">
        <ChevronLeft className="cursor-pointer" />
        <ChevronRight className="cursor-pointer" />
      </div>
    </div>
  );
};

export default RecentAnimeHeader;
