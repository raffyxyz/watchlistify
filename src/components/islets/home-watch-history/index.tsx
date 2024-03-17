"use client";
import React from "react";
import { useSession } from "next-auth/react";
import WatchHistoryHeader from "./watch-history-header";
import WatchHistoryTrack from "./watch-history-track";

export default function HomeWatchHistory() {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <div className="mt-16">
      <WatchHistoryHeader />
      <WatchHistoryTrack />
    </div>
  );
}
