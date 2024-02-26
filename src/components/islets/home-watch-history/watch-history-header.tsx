"use client";
import React from "react";

const WatchHistoryHeader = () => {
  return (
    <div className="mt-10 flex justify-between items-center">
      <h2 className="font-semibold text-xl md:text-2xl text-orange-400">
        Continue Watching
      </h2>
      <h4 className="cursor-pointer text-sm md:text-lg">View History</h4>
    </div>
  );
};

export default WatchHistoryHeader;
